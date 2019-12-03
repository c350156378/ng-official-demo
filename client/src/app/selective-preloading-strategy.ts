/*
 * @Author: your name
 * @Date: 2019-12-02 18:35:28
 * @LastEditTime: 2019-12-03 14:03:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\selective-preloading-strategy.ts
 */
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable,of } from 'rxjs';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {

    preloadedModules: string[] = [];

    preload(route: Route, load:()=>Observable<any>):Observable<any>{
        if(route.data && route.data['preload']){
            this.preloadedModules.push(route.path)
            console.log('preloaded'+route.path);
            return load();
        }else{
            return of(null);
        }
    }

    constructor() { }
}