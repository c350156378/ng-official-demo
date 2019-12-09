/*
 * @Author: your name
 * @Date: 2019-12-03 16:49:56
 * @LastEditTime: 2019-12-05 11:02:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\crisis\crisis-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

import { CanDeactivateGuard } from "../guard/can-deactivate.guard";
import { CrisisDetailResolver } from "./crisis-detail-resolver.service";


const crisisRoutes: Routes = [
  {
    path: '',
    component: CrisisListComponent,
    children: [
      {
        path: ':id',
        component: CrisisDetailComponent,
        canDeactivate: [CanDeactivateGuard],
        resolve: {
          crisis: CrisisDetailResolver
        }
      }
    ]
  }]


@NgModule({
  imports: [RouterModule.forChild(crisisRoutes)],
  exports: [RouterModule],
  providers: [CrisisDetailResolver]
})
export class CrisisRoutingModule { }
