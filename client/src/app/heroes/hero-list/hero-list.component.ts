/*
 * @Author: your name
 * @Date: 2019-12-02 18:35:28
 * @LastEditTime: 2019-12-03 14:05:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\heroes\hero-list\hero-list.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { HeroService } from "../hero.service";
import { Hero } from "../../model/hero";

import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes$;

  private selectedId: number;

  constructor(private route: ActivatedRoute,private heroService: HeroService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedId = +params.get('id');
      this.heroService.getHeroes().subscribe(data => {
        this.heroes$ = data;
      })
    })
  }

}
