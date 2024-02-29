import { Injectable, ExecutionContext, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { config } from 'src/config';
import { authenConstants } from '../constant/authen.constant';

@Injectable()
export class ApiKeyAuthGuard {

    constructor() {
    }

    async canActivate(context: ExecutionContext) {
        let request = context.switchToHttp().getRequest();
        let apiKey = request.headers[authenConstants.xApiKey];
        if (apiKey === config.API_KEY)
            return request.user = authenConstants.autoCallUser;
        throw new UnauthorizedException();
    }

}
