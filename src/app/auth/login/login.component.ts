import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { UserService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

email: string = '';
password: string = '';

  constructor(private user:UserService,private router:Router) { }

  
loginUser()
{
  this.user.login().subscribe(
    data => {
      this.user.setToken(data.access_token,data.expires_in + Date.now());

      if(this.user.isAuthenticated()){
           this.router.navigate(['Dasboard']);
      }
    console.log(data);
   
});
}

  ngOnInit() {
  }

}
