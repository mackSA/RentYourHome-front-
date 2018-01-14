import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/auth/auth.service';
 import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 isAuthenticated = false;
  constructor(private auth:UserService,private router:Router) {
   }
logout(){
    this.auth.destroyToken();
    this.router.navigate(['']);
     
}
   
  ngOnInit() {

      if(this.auth.isAuthenticated()){
          this.isAuthenticated = true;
      }
   
  }

  home(){
      this.router.navigate(['']);
      
  }
 
}
