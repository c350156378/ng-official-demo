/*
 * @Author: your name
 * @Date: 2019-12-02 18:35:28
 * @LastEditTime: 2019-12-03 14:26:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\crisis\crisis.service.ts
 */
import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable()
export class CrisisService {

    static nextCrisisId = 100;
    private crises$:BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISIS);


    getCrisies() {
        return this.crises$;
    }

    getCrisis(id: number | string) {
        return this.getCrisies().pipe(
            map(crisis => crisis.find(cri => cri.id === +id))
        )
        
    }
}


export class Crisis {
    constructor(public id: number, public name: string) { }
}

const CRISIS = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];