import { Injectable } from '@angular/core';
import {Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import { Crisis, CrisisService } from "./crisis.service";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';



@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis>{

    constructor(private router: Router, private cs: CrisisService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Crisis>{
        let id = route.paramMap.get('id');
        return this.cs.getCrisis(id).take(1).map(crisis => {
            if(crisis){
                return crisis;

            }else{
                this.router.navigate(['/crisis-center']);
                return null;
            }
        })
    }
}
