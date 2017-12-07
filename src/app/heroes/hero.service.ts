import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Hero } from "../model/hero";
import { Observable } from 'rxjs/Observable';

interface ItemsResponse {
    results: string[];
  }
@Injectable()
export class HeroService {

    private heroUrl = 'api/heroes'

    constructor(private http: HttpClient) { }

    getHeroes(){ 
        return this.http.get<Hero[]>(this.heroUrl);
     }

    getHero(id: number | string) {

        return this.getHeroes().map(heroes => heroes.find(hero => hero.id === +id));

    }
}