import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { HttpRequest, HttpResponse, HttpClient, HttpEventType } from '@angular/common/http';

import 'rxjs/Rx';//生产环境应当只导入需要用到的

import { HeroService } from "../hero.service";
import { Hero } from "../../model/hero";

import { slideInDownAnimation } from "../../animations";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  animations: [slideInDownAnimation]
})
export class HeroDetailComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  hero$;
  file;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private heroService: HeroService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => {
      console.log(hero);
      this.hero$ = hero;
    });
  }

  gotoHeroes(hero:Hero){
    let heroId = hero?hero.id:null
    this.router.navigate(['/heroes', {id:heroId, foo:'foo'}]);
  }


    


  uploadFile(e){

    const req = new HttpRequest('POST', '/upload/file', e.target.value, {
      reportProgress: true
    });

    this.http.request(req).subscribe(event => {
      if(event.type === HttpEventType.UploadProgress){
        const percentDone = Math.round(100 * event.loaded/event.total);

        console.log(`File is ${percentDone} uploaded`);
      }else if(event instanceof HttpResponse){
        console.log(`File is completly uploaded`);
      }
    })
  }

}
