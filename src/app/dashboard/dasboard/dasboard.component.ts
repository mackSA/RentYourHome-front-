import { Component, OnInit } from '@angular/core';
 import {Router} from '@angular/router';
 import { UserService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {

  constructor(private router:Router,private auth:UserService) { }

  ngOnInit() {

    if(this.auth.isAuthenticated()){
        
    }else{
      this.router.navigate(['Signup']);
    }
  }

addP(){
      this.router.navigate(['add/property']);
      }

}
