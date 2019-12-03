/*
 * @Author: your name
 * @Date: 2019-12-02 18:35:28
 * @LastEditTime: 2019-12-03 14:08:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\service\auth.service.ts
 */
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay,map, tap } from 'rxjs/operators';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';




@Injectable()
export class AuthService {

  isLoggedIn = false;

  redirectUrl: string;

  constructor() { }
  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    )

  }

  logout() {
    this.isLoggedIn = false;
  }

}
