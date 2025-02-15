import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { envs } from './config/envs';

async function main() {
  const logger = new Logger('MS-GATEWAY');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(envs.port);
  logger.log(`Gateway corriendo en el puerto ${envs.port}`);
}

main();
