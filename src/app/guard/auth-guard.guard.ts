import { Injectable } from '@angular/core';
import {Route, CanActivate, CanLoad, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationExtras } from '@angular/router';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

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
