/*
 * @Author: your name
 * @Date: 2019-12-03 16:49:56
 * @LastEditTime: 2019-12-16 17:16:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\app.module.ts
 */
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

import { HttpErrorInterceptor } from './guard/auth.interceptor';
import { MaterialModule } from './shared/material.module';
import { MatCommonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DdComponent } from './dd/dd.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AformComponent } from './aform/aform.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { AtableComponent } from './atable/atable.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DboardComponent } from './dboard/dboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { AtreeComponent } from './atree/atree.component';
import { MatTreeModule } from '@angular/material/tree';
import { PixComponent } from './pix/pix.component';
import { TreejsComponent } from './treejs/treejs.component';
import { EchatComponent } from './echat/echat.component';


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
        HeroJobAdComponent,
        HeroProfileComponent,
        LayoutComponent,
        DdComponent,
        AformComponent,
        AtableComponent,
        DboardComponent,
        AtreeComponent,
        PixComponent, TreejsComponent, EchatComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        HeroesModule,
        LoginRoutingModule,
        // InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        DragDropModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatGridListModule,
        MatMenuModule,
        MatTreeModule
    ],
    providers: [
        AuthGuardGuard,
        AuthService,
        DialogService,
        AdService,
        InMemoryDataService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(router: Router) {
  //   console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  // }
}
