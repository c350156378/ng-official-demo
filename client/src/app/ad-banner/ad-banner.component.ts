/*
 * @Author: your name
 * @Date: 2019-12-02 18:35:28
 * @LastEditTime: 2019-12-03 15:45:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\ad-banner\ad-banner.component.ts
 */
import { ComponentFactoryResolver, Component,ViewChild, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AdComponent } from './ad.component';
import { AdDirective } from '../ad.directive';
import { AdItem } from "./ad-item";
@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})

export class AdBannerComponent implements AfterViewInit, OnDestroy {
  
  @Input() ads: AdItem[];
  currentAddIndex: number = -1;
  @ViewChild(AdDirective,{static:false}) adHost: AdDirective;
  subscription: any;
  interval: any;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    console.log(this.ads);
  }

  ngAfterViewInit(){
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

  loadComponent(){
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAddIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds(){
    this.interval = setInterval(() => {
      this.loadComponent();
    },3000);
  }

}
