import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

import { HeroRoutingModule } from "./heroes-routing.module";

import { HeroService } from "./hero.service";

@NgModule({
    imports: [CommonModule, FormsModule, HeroRoutingModule],
    exports: [],
    declarations: [HeroDetailComponent, HeroListComponent],
    providers: [HeroService],
})
export class HeroesModule { }
