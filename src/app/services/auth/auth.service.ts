import { Injectable } from '@angular/core';
import  'rxjs/add/operator/map';
import {Http, Headers, Response} from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http:Http) { }
  private oauthUrl = "http://127.0.0.1:8000/oauth/token";
  private regUrl = "http://127.0.0.1:8000/api/register";
  token :string ='';
  private expiration;

  login(){



        let postData = {
            grant_type: "password",
            client_id: 2,
            client_secret: "8VNuoB3SP0D2ITaJnu9fPJkZ3DBBZ5va5Ivav9t4",
            username: "mackmorerwa@gmail.com",
            password: "1234567",
            scope: ""
        }

         return this.http.post(this.oauthUrl,postData)
             .map((res: Response) => res.json())



    }

setToken(token,expiration)
{
    localStorage.setItem('token',token);
    localStorage.setItem('expiration', expiration);


}
destroyToken()
{
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');

}

getToken()
{

   this.token = localStorage.getItem('token');
   this.expiration = localStorage.getItem('expiration');

  if(! this.token || ! this.expiration){

    return null;
  }

    if(Date.now() > this.expiration){

        this.destroyToken();
        return null;
  }else{
    return this.token;
  }

}

isAuthenticated(){
    if(this.getToken()){

          return true;
      }else
      {
        return false;
      }
}
// register

register(data:any)
{
    

         return this.http.post(this.regUrl,data)
             .map((res: Response) => res.json())

   

}

}
