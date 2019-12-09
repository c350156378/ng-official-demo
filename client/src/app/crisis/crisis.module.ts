/*
 * @Author: your name
 * @Date: 2019-12-03 16:49:56
 * @LastEditTime: 2019-12-05 11:01:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\crisis\crisis.module.ts
 */
import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";


import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

import { CrisisRoutingModule } from "./crisis-routing.module";

import { CrisisService } from "./crisis.service";
import { MaterialModule } from '../shared/material.module';

@NgModule({
    imports: [CommonModule,FormsModule, CrisisRoutingModule, MaterialModule],
    exports: [],
    declarations: [CrisisDetailComponent, CrisisListComponent ],
    providers: [CrisisService],
})
export class CrisisModule { }
