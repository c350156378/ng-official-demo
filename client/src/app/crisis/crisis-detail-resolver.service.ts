/*
 * @Author: your name
 * @Date: 2019-12-02 18:35:28
 * @LastEditTime: 2019-12-03 15:37:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\crisis\crisis-detail-resolver.service.ts
 */
import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Crisis, CrisisService } from "./crisis.service";

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';



@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis>{

    constructor(private router: Router, private cs: CrisisService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> {
        let id = route.paramMap.get('id');
        return this.cs.getCrisis(id).pipe(
            take(1),
            map(crisis => {
                if (crisis) {
                    return crisis;
                } else {
                    this.router.navigate(['/crisis-center']);
                    return null;
                }
            })
        )


    }
}
