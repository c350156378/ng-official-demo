/*
 * @Author: your name
 * @Date: 2019-12-03 16:49:56
 * @LastEditTime: 2019-12-03 18:52:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\heroes\heroes.module.ts
 */
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";

import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroListComponent } from "./hero-list/hero-list.component";

import { HeroRoutingModule } from "./heroes-routing.module";

import { HeroService } from "./hero.service";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule,
    MatListModule,
    MatButtonModule,
  ],
  exports: [],
  declarations: [HeroDetailComponent, HeroListComponent],
  providers: [HeroService],
})
export class HeroesModule {}
