import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ManageCrisesComponent } from "./manage-crises.component";
import { ManageHeroesComponent } from "./manage-heroes.component";
import { AdminDashBoardComponent } from './admin-dashboard.component';

import { AuthGuardGuard } from "../guard/auth-guard.guard";

import { AuthService } from "../service/auth.service";

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate:[AuthGuardGuard],
        children: [
            {
                path: '',
                // canActivateChild: [AuthGuardGuard],
                children: [
                    { path: 'crises', component: ManageCrisesComponent },
                    { path: 'heroes', component: ManageHeroesComponent },
                    { path: '', component: AdminDashBoardComponent }
                ]
            }

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }