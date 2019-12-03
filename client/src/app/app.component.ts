/*
 * @Author: your name
 * @Date: 2019-12-02 18:35:28
 * @LastEditTime: 2019-12-03 16:46:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\app.component.ts
 */
import { Component, OnInit, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { QuestionService } from "./service/question.service";
import { AdService } from "./ad-banner/ad.service";

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

  constructor(route: ActivatedRoute,service:QuestionService, adService: AdService) {
    this.info = route;
    this.questions = service.getQuestions();
    this.ads = adService.getAds();
  }



}
