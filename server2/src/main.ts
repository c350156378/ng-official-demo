/*
 * @Author: your name
 * @Date: 2019-12-02 17:48:24
 * @LastEditTime: 2019-12-02 18:32:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\server2\src\main.ts
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(3000);
}
bootstrap();
