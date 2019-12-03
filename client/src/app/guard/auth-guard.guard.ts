/*
 * @Author: your name
 * @Date: 2019-12-02 18:35:28
 * @LastEditTime: 2019-12-03 14:25:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\guard\auth-guard.guard.ts
 */
import { Injectable } from '@angular/core';
import {Route, CanActivate, CanLoad, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationExtras } from '@angular/router';


import { Observable,of } from 'rxjs';
import {tap, delay} from 'rxjs/operators';

import { AuthService } from "../service/auth.service";

@Injectable()
export class AuthGuardGuard implements CanActivate, CanActivateChild, CanLoad {
  
  constructor(private router: Router, private authService: AuthService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('authguar#canactive called');
    let url:string = state.url;
    return this.checkLogin(url);
  }


  checkLogin(url:string):boolean{
    if(this.authService.isLoggedIn){return true}
    this.authService.redirectUrl = url;
    let sessionId = '123456789';
    let navigationExtras: NavigationExtras = {
      queryParams: {session_id: sessionId},
      fragment: 'anchor'
    }
    this.router.navigate(['/login'], navigationExtras);
    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.canActivate(route, state);
  }

  canLoad(route:Route):boolean{
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }
}
