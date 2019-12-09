/*
 * @Author: your name
 * @Date: 2019-12-02 17:48:24
 * @LastEditTime: 2019-12-07 17:38:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\server2\src\app.controller.ts
 */
import { Controller, Get } from '@nestjs/common';
import { AppService, Hero } from './app.service';

@Controller()
export class AppController {


  constructor(private readonly appService: AppService) {}

  @Get()
  getLottery(): any {
    return this.appService.getLottery()
  }

}
