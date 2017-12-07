import { Component, OnInit, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import * as THREE from 'three';

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
