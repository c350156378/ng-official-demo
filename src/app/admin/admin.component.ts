import { Component, OnInit } from '@angular/core';

@Component({
    template: `
    <h3>ADMIN</h3>
    <nav class="nav">
        <a  class="nav-link" routerLink="./" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Dashboard</a>
        <a class="nav-link" routerLink="./crises" routerLinkActive="active">Manage Crises</a>
        <a class="nav-link" routerLink="./heroes" routerLinkActive="active">Manage Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `
})

export class AdminComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}