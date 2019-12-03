/*
 * @Author: your name
 * @Date: 2019-12-02 18:35:28
 * @LastEditTime: 2019-12-03 15:41:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\admin\admin-dashboard.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { Observable }         from 'rxjs';
import {map} from 'rxjs/operators';

import { SelectivePreloadingStrategy } from "../selective-preloading-strategy";
@Component({
    template: `
    <p>Dashboard</p>
    <p>Session ID: {{ sessionId | async }}</p>
    <a id="anchor"></a>
    <p>Token: {{ token | async }}</p>
    `
})

export class AdminDashBoardComponent implements OnInit {
    sessionId: Observable<string>;
    token: Observable<string>;
    modules:string[];

    constructor(private route: ActivatedRoute, private preloadStrategy: SelectivePreloadingStrategy) { 
        this.modules = this.preloadStrategy.preloadedModules;
    }

    ngOnInit() {
        this.sessionId = this.route.queryParamMap.pipe(
            map(params => params.get('session_id') || 'None')
        )
        

        this.token = this.route.fragment.pipe(
            map(fragment => fragment || 'None')
        )
        

     }
}