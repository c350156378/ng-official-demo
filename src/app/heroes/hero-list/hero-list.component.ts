import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { HeroService } from "../hero.service";
import { Hero } from "../../model/hero";

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

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
