import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from "@angular/router";

import { AuthService } from "../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(private authService: AuthService, private router:Router) { 
    this.setMessage();
  }

  ngOnInit() {

  }

  setMessage(){
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login(){

    this.message = 'tring to log in';
    let navigationExtras: NavigationExtras = {
      queryParamsHandling:'preserve',
      preserveFragment:true
    }

    this.authService.login().subscribe(()=>{
      this.setMessage();
      
      if(this.authService.isLoggedIn){
        let redirect = this.authService.redirectUrl?this.authService.redirectUrl:'crisis-center/admin';
        
        this.router.navigate([redirect], navigationExtras);
      }
    })

  }

  logout(){
    this.authService.logout();
    this.setMessage();
  }

}
