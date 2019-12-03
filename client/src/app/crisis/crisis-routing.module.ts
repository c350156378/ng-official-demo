import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterComponent } from "./crisis-center.component";
import { CrisisCenterHomeComponent } from "./crisis-center-home.component";

import { CanDeactivateGuard } from "../guard/can-deactivate.guard";
import { CrisisDetailResolver } from "./crisis-detail-resolver.service";


const crisisRoutes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children:[
      {
        path:'',
        component:CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate:[CanDeactivateGuard],
            resolve:{
              crisis: CrisisDetailResolver
            }
          },
          {
            path:'',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(crisisRoutes)],
  exports: [RouterModule],
  providers: [CrisisDetailResolver]
})
export class CrisisRoutingModule { }
