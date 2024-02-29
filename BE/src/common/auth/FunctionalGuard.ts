import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { SetMetadata } from '@nestjs/common';
import { AuthService } from 'src/service/auth.service';

@Injectable()
export class FunctionalsGuard implements CanActivate {
    constructor(private reflector: Reflector,
        private readonly commonService: AuthService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const functionals = this.reflector.get<string[]>('functionals', context.getHandler());
        if (!functionals) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const check = await this.commonService.CheckFunctional({ user_id: user.uid, functional_name: [...functionals] } as any)
        if (!check) throw new HttpException(`Forbidden resource ${functionals.join(",")}`, HttpStatus.FORBIDDEN)
        return check;
    }
}

export const Functionals = (...functionals: string[]) => SetMetadata('functionals', functionals);
