import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { UserService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

password: string = '';
username: string = '';
error = false;
message:string;
isAuthenticated =false;


  constructor(private user:UserService,private router:Router) { }

  
 onSubmit(): void
{
  this.user.login(this.username,this.password).subscribe(
    data => {
      this.user.setToken(data.access_token,data.expires_in + Date.now());

      if(this.user.isAuthenticated()){
           this.router.navigate(['dasboard']);
            this.isAuthenticated = true;
      }
     this.isAuthenticated = true;

    
   
},error =>{
 this.error = true;

});
}

  ngOnInit() {
    if(this.user.isAuthenticated()){
        this.router.navigate(['dasboard']);
         this.isAuthenticated = true;
    }
  }

   

}
