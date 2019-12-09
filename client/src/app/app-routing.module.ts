/*
 * @Author: your name
 * @Date: 2019-12-03 16:49:56
 * @LastEditTime: 2019-12-07 09:30:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\app-routing.module.ts
 */
import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { CanDeactivateGuard } from "./guard/can-deactivate.guard";
import { AuthGuardGuard } from "./guard/auth-guard.guard";

import { ReactiveFormComponent } from "./forms/reactive-form/reactive-form.component";

import { SelectivePreloadingStrategy } from "./selective-preloading-strategy";
import { DdComponent } from './dd/dd.component';
import { LayoutComponent } from './layout/layout.component';
import { AformComponent } from './aform/aform.component';
import { AtableComponent } from './atable/atable.component';
import { DboardComponent } from './dboard/dboard.component';
import { AtreeComponent } from './atree/atree.component';
import { PixComponent } from './pix/pix.component';
import { TreejsComponent } from './treejs/treejs.component';
import { EchatComponent } from './echat/echat.component';

const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    data: { preload: true }
  },
  {
    path: 'crisis-center',
    loadChildren: () => import('./crisis/crisis.module').then(mod=> mod.CrisisModule)
  },
  {path:'echat', component: EchatComponent},
  {path:'tree', component: TreejsComponent},
  {path:'pix', component: PixComponent},
  {path:'dd', component: DdComponent},
  {path:'layout', component:LayoutComponent },
  {path:'aform', component: AformComponent},
  {path:'atable', component:AtableComponent },
  {path:'dboard', component: DboardComponent},
  {path:'atree', component:AtreeComponent },
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,

      { preloadingStrategy: SelectivePreloadingStrategy }
    )
  ],
  exports: [RouterModule],
  providers: [CanDeactivateGuard, SelectivePreloadingStrategy]
})
export class AppRoutingModule { }
