import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { UserService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

email: string = '';
password: string = '';
username:string = "";

  constructor(private user:UserService,private router:Router) { }

  onSubmit(): void
{
  let postData = {
            email: this.email,
            password: this.password,
            username: this.username,
  
        }
  this.user.register(postData).subscribe(
    data => {
      

     
           this.router.navigate(['Signin']);
      
    console.log(data);
   
});
}

  ngOnInit() {

    // if(this.user.isAuthenticated()){
    //      this.router.navigate(['Dasboard']);
    // }
  }

}
