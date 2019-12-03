import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { CanDeactivateGuard } from "./guard/can-deactivate.guard";
import { AuthGuardGuard } from "./guard/auth-guard.guard";

import { ReactiveFormComponent } from "./forms/reactive-form/reactive-form.component";

import { SelectivePreloadingStrategy } from "./selective-preloading-strategy";

const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    data: { preload: true }
  },
  {
    path: 'crisis-center',
    loadChildren: './crisis/crisis.module#CrisisModule'
  },
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
