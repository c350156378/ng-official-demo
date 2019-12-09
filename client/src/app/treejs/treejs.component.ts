/*
 * @Author: your name
 * @Date: 2019-12-05 14:19:03
 * @LastEditTime: 2019-12-06 17:47:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\treejs\treejs.component.ts
 */
import { Component, OnInit, ElementRef, NgZone } from '@angular/core';

declare var THREE: any;

@Component({
  selector: 'app-treejs',
  templateUrl: './treejs.component.html',
  styleUrls: ['./treejs.component.css']
})
export class TreejsComponent implements OnInit {

  scene: any;
  camera: any;
  renderer: any;
  material: any;
  cube: any;
  geometry: any;

  constructor(private readonly el: ElementRef, private readonly ngZone: NgZone) { }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(400, 400);
      this.geometry = new THREE.BoxGeometry(1, 1, 1);
      this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      this.cube = new THREE.Mesh(this.geometry, this.material);
      this.scene.add(this.cube);
      this.camera.position.z = 5;
      this.renderer.render(this.scene, this.camera);
    })
    this.el.nativeElement.appendChild(this.renderer.domElement);
  }

}
