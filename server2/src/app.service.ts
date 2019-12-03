/*
 * @Author: your name
 * @Date: 2019-12-02 17:48:24
 * @LastEditTime: 2019-12-02 18:01:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\server2\src\app.service.ts
 */
import { Injectable } from '@nestjs/common';

export interface Hero{
  id:number;
  name:string;
}

@Injectable()
export class AppService {
  private HEROES = [
    { id: 1, name: 'Windstorm' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Magneta' },
    { id: 4, name: 'Tornado' }
  ]
  getHeroes(): Hero[] {
    return this.HEROES;
  }
}
