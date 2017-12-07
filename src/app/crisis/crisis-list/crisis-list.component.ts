import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import{ Crisis} from '../../model/crisis';

import { CrisisService } from "../crisis.service";

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  crisis$:Observable<Crisis[]>;
  selectedId:number;

  constructor(private route: ActivatedRoute, private router: Router, private crisisService: CrisisService) { }

  ngOnInit() {
    this.crisis$ = this.route.paramMap
      .switchMap((params:ParamMap) => {
        this.selectedId = +params.get('id');
        return this.crisisService.getCrisies();
      })
  }

}
