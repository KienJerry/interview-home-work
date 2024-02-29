import {
  Controller,
  Get,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Post,
  Body,
  Param,
  Req,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthLoginReq, AuthRegisterReq } from 'src/common/dto/auth-login.req';
import { logger } from 'src/logger';
import { AuthService } from 'src/service/auth.service';
import { JwtAuthGuard, JwtUser } from 'src/common/auth/jwt-auth.guard';
import { Functionals, FunctionalsGuard, } from 'src/common/auth/FunctionalGuard';

@Controller('auth')
@ApiBearerAuth()
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('/login')
  @ApiOperation({ summary: 'Login' })
  public async login(@Body() body: AuthLoginReq) {
    logger.info(`login request: ${JSON.stringify(body.userName)}`);
    const res = await this.authService.Login(body);
    return res;
  }

  @Post('/register')
  @ApiOperation({ summary: 'Create User' })
  public async Register(@Body() body: AuthRegisterReq) {
    logger.info(`register request: ${JSON.stringify(body.userName)}`);
    const res = await this.authService.Register(body);
    return res;
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard, FunctionalsGuard)
  @ApiOperation({ summary: 'Get Profile' })
  async protectedRoute(@JwtUser() user): Promise<any> {
    const userId = user.user_id; 
    const res = await this.authService.Profile(userId);
    return res;
  }
}
