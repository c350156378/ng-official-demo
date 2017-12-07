import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from "@angular/router";
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from "./heroes/heroes.module";
import { LoginRoutingModule } from "./login/login-routing.module";
import { ComposeMessageComponent } from './compose-message/compose-message.component';

import { AuthGuardGuard } from "./guard/auth-guard.guard";


import { AuthService } from "./service/auth.service";
import { LoginComponent } from './login/login.component';
import { DialogService } from "./service/dialog.service";
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { ReactiveFormQuestionComponent } from './forms/reactive-form-question/reactive-form-question.component';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobAdComponent } from "./ad-banner/hero-job-ad.component";
import { HeroProfileComponent } from "./ad-banner/hero-profile.component";
import { AdService } from './ad-banner/ad.service';

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./service/in-memory-data.service";

import { AuthInterceptor } from './guard/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    LoginComponent,
    ReactiveFormComponent,
    ReactiveFormQuestionComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent, HeroProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HeroesModule,
    LoginRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  providers: [
    AuthGuardGuard,
    AuthService,
    DialogService,
    AdService,
    InMemoryDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(router: Router) {
  //   console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  // }
}
