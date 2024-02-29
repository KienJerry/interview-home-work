import { HttpException, HttpStatus, Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcryptjs';
import { ErrorConstant } from 'src/common/constant/error.constant';
import { SuccessResponse } from 'src/common/successResponse';
import { AuthLoginReq, AuthRegisterReq } from 'src/common/dto/auth-login.req';
import { UnitOfWork } from 'src/provider/unitOfWork';
import { SysUsersEntity } from 'src/entity/mysql/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly uow: UnitOfWork,
    private readonly jwtService: JwtService,
  ) { }

  async Login(body: AuthLoginReq) {
    const { passWord, userName } = body;
    let userEntity = await this.uow
      .SysUsersRepos()
      .getOne()
      .where((x) => x.userName)
      .equal(userName);

    if (!userEntity)
      throw new HttpException(
        ErrorConstant.USER_NOT_FOUND,
        HttpStatus.FORBIDDEN,
      );

    const hashPassword = await compareSync(passWord, userEntity.passWord);
    if (!hashPassword)
      throw new HttpException(
        ErrorConstant.USER_NOT_FOUND,
        HttpStatus.FORBIDDEN,
      );

    const token = await this.jwtService
      .signAsync({ user_id: userEntity.id })
      .catch((e) => {
        throw e;
      });
    return { name: userEntity.name, token };
  }

  async Register(body: AuthRegisterReq) {
    const { userName, passWord, name, dob } = body;
    let userEntity = await this.uow
      .SysUsersRepos()
      .getOne()
      .where((x) => x.userName)
      .equal(userName);

    if (userEntity)
      throw new HttpException(
        "USER_ALREADY_EXISTS",
        HttpStatus.CONFLICT,
      );

    let newUser = new SysUsersEntity();

    newUser.name = name;
    newUser.dob = dob;
    newUser.passWord = passWord;
    newUser.userName = userName;

    await this.uow
      .SysUsersRepos()
      .create(newUser)
      .catch((e) => {
        throw e;
      });
    let dataBody = { userName, name, dob }
    const successResponse = new SuccessResponse(dataBody, 'Registered successfully', true);
    return successResponse;
  }

  async Profile(userId: string) {
    let userEntity = await this.uow.SysUsersRepos().createQueryBuilder('user')
      .select(SysUsersEntity.getSelectedFields().map(col => `user.${col}`))
      .where('user.id = :id', { id: userId })
      .getOne();

    if (!userEntity) throw new HttpException(
      ErrorConstant.USER_NOT_FOUND,
      HttpStatus.FORBIDDEN,
    );
    return new SuccessResponse(userEntity, 'GET_PROFILE_SUCCESS', true, 200);
  }

  async CheckFunctional(model: any): Promise<boolean> {
    const { user_id, functional_name } = model;
    const user = await this.uow
      .SysUsersRepos()
      .getOne()
      .and((x) => x.id)
      .equal(user_id);
    if (!user) return false;
    return false;
  }
}
