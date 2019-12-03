/*
 * @Author: your name
 * @Date: 2019-12-02 18:35:28
 * @LastEditTime: 2019-12-03 15:36:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\crisis\crisis-detail\crisis-detail.component.ts
 */
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import 'rxjs/Rx';//生产环境应当只导入需要用到的

import { Observable } from 'rxjs';
import {switchMap} from 'rxjs/operators';



import { CrisisService } from "../crisis.service";

import { Crisis } from '../../model/crisis';

import { slideInDownAnimation } from "../../animations";

import { DialogService } from "../../service/dialog.service";

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
  animations: [slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  crisis$;
  editName;

  constructor(private route: ActivatedRoute, private router: Router, private crisisService: CrisisService, public dialogService: DialogService) { }

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id');
    // this.crisisService.getCrisis(id).subscribe(res => {
    //   this.crisis$ = res;
    // });
    //  this.route.paramMap
    // .subscribe((params) =>
    //   this.crisisService.getCrisis(+params.get('id')).subscribe(res => {
    //     this.crisis$ = res;
    //     this.editName = res.name;
    //   }));
    this.route.data.subscribe((data:{crisis:Crisis}) => {
      console.log(data.crisis.name);
      this.crisis$ = data.crisis;
      this.editName = data.crisis.name;
    }

    )

  }
  gotoCrisis() {
    let crisisId = this.crisis$ ? this.crisis$.id : null;
   this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
    console.log('tiao')
  }

  cancel() {
    this.gotoCrisis();
  }

  save() {
    this.crisis$.name = this.editName;
    this.gotoCrisis();
    
  }

  canDeactivate():Observable<boolean> | boolean {
    if (!this.crisis$ || this.crisis$.name === this.editName) {
      return true;
    }
    // debugger;
    return this.dialogService.confirm('要离开');
  }
}
