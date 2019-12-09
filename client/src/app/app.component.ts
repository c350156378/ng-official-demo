/*
 * @Author: your name
 * @Date: 2019-12-02 18:35:28
 * @LastEditTime: 2019-12-05 13:23:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\app.component.ts
 */
import { Component, OnInit, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { QuestionService } from "./service/question.service";
import { AdService } from "./ad-banner/ad.service";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[QuestionService]
})
export class AppComponent {
  ads = [];
  info = {};
  questions:any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );



  constructor(private breakpointObserver: BreakpointObserver,route: ActivatedRoute,service:QuestionService, adService: AdService) {
    this.info = route;
    this.questions = service.getQuestions();
    this.ads = adService.getAds();
  }



}
