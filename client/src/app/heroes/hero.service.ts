/*
 * @Author: your name
 * @Date: 2019-12-02 18:35:28
 * @LastEditTime: 2019-12-03 14:04:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\heroes\hero.service.ts
 */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Hero } from "../model/hero";
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

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

        return this.getHeroes().pipe(
            map(heroes => heroes.find(hero => hero.id === +id))
        )

    }
}