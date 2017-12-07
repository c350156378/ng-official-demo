import { Injectable } from '@angular/core';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CrisisService {

    static nextCrisisId = 100;
    private crises$:BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISIS);


    getCrisies() {
        return this.crises$;
    }

    getCrisis(id: number | string) {
        return this.getCrisies().map(crisis => crisis.find(cri => cri.id === +id))
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