import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { JwtStrategy } from './common/auth/jwt.strargety';
import { config } from './config';
import { controllerProvider } from './provider/controller.provider';
import { serviceProvider } from './provider/service.provider';
import { UnitOfWork } from './provider/unitOfWork';

const mysql = config.MYSQL;
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    JwtModule.register({
      secret: config.AUTH.SECRET,
      signOptions: { expiresIn: config.AUTH.EXPIRES_IN },
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: mysql.HOST,
      port: Number(mysql.PORT),
      username: mysql.USERNAME,
      password: mysql.PASSWORD,
      database: mysql.DATABASE,
      entities: [join(__dirname, '/entity/mysql/*.entity{.ts,.js}')],
      synchronize: mysql.IS_SYNCHORNIZE,
      // synchronize: true,
      migrationsRun: false,
      // migrationsRun: true,
      logging: false,
    }),
  ],
  controllers: [...controllerProvider],
  providers: [...serviceProvider, JwtStrategy, UnitOfWork],
})
export class AppModule {}
