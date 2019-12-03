import { NgModule } from '@angular/core';
import { CommonModule  } from "@angular/common";

import { AdminComponent } from './admin.component';
import { ManageCrisesComponent } from "./manage-crises.component";
import { ManageHeroesComponent } from "./manage-heroes.component";
import { AdminDashBoardComponent } from './admin-dashboard.component';

import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    exports: [],
    declarations: [AdminComponent, ManageCrisesComponent, ManageHeroesComponent, AdminDashBoardComponent],
    providers: [],
})
export class AdminModule { }
