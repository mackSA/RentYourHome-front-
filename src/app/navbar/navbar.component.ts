import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
private isAuthenticated = false;
  constructor(private auth:UserService) {
   }

   
  ngOnInit() {

      if(this.auth.isAuthenticated()){
          this.isAuthenticated = true;
      }
   
  }
 
}
