/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { rawBody: true });
  app.set('trust proxy', true); // Or a number indicating the number of hops
  app.enableCors();
  // const app = await NestFactory.create(AppModule);
  app.use(express.json());

  await app.listen(process.env.PORT ?? 3002);
}
bootstrap().catch((err) => {
  console.error('Error during bootstrap:', err);
});
