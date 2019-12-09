/*
 * @Author: your name
 * @Date: 2019-12-05 12:10:28
 * @LastEditTime: 2019-12-07 13:52:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\pix\pix.component.ts
 */
import { Component, OnInit, ViewChild, ElementRef, NgZone, HostListener, Input } from '@angular/core';

declare var PIXI: any;

@Component({
  selector: 'app-pix',
  templateUrl: './pix.component.html',
  styleUrls: ['./pix.component.css']
})
export class PixComponent implements OnInit {
  public app: any;
  @Input()
  public devicePixelRatio = window.devicePixelRatio || 1;

  constructor(private readonly el: ElementRef, private readonly ngZone: NgZone) {}

  ngOnInit() {
    console.log(this.el.nativeElement)
    this.ngZone.runOutsideAngular(() => {
      this.app = new PIXI.Application({});
    })
    this.el.nativeElement.appendChild(this.app.view);
    this.resize();
  }

  @HostListener('window:resize')
  public resize() {
    const width = this.el.nativeElement.offsetWidth;
    const height = this.el.nativeElement.offsetHeight;
    const viewportScale = 1 / this.devicePixelRatio;
    this.app.renderer.resize(width * this.devicePixelRatio, height * this.devicePixelRatio);
    this.app.view.style.transform = `scale(${viewportScale})`;
    this.app.view.style.transformOrigin = `top left`;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.app.destroy();
  }

}
