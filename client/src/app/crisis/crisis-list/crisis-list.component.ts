/*
 * @Author: your name
 * @Date: 2019-12-02 18:35:28
 * @LastEditTime: 2019-12-03 15:35:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\crisis\crisis-list\crisis-list.component.ts
 */
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Crisis } from '../../model/crisis';

import { CrisisService } from "../crisis.service";

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  crisis$: Observable<Crisis[]>;
  selectedId: number;

  constructor(private route: ActivatedRoute, private router: Router, private crisisService: CrisisService) { }

  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.crisisService.getCrisies();
      })
    )

  }

}
