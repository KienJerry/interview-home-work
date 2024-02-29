import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config';
import { logger } from './logger';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { LoggingErrorInterceptor } from './middleware/loggingError.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(config.BASE_PATH);

  /** Config Swagger */
  const options = new DocumentBuilder()
    .setTitle('Api document')
    .setDescription('The API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(config.SWAGGER_PATH, app, document, {
    explorer: true,
    swaggerOptions: {
      docExpansion: 'none',
      filter: true,
      showRequestDuration: true,
      persistAuthorization: true,
    },
  });

  app.useGlobalInterceptors(new LoggingErrorInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const port = config.PORT;
  await app.listen(config.PORT, () => {
    logger.info(`app listen port: ${port}`);
    logger.info(`view swagger http://localhost:${port}${config.SWAGGER_PATH}`);
    console.log(`view swagger http://localhost:${port}${config.SWAGGER_PATH}`);
  });
  // })
}
bootstrap();
