import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";

import { CrisisCenterComponent } from "./crisis-center.component";
import { CrisisCenterHomeComponent } from "./crisis-center-home.component";
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

import { CrisisRoutingModule } from "./crisis-routing.module";

import { CrisisService } from "./crisis.service";

@NgModule({
    imports: [CommonModule,FormsModule, CrisisRoutingModule],
    exports: [],
    declarations: [CrisisDetailComponent, CrisisListComponent,CrisisCenterComponent,CrisisCenterHomeComponent ],
    providers: [CrisisService],
})
export class CrisisModule { }
