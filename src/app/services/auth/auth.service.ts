import { Injectable } from '@angular/core';
import  'rxjs/add/operator/map';
import {Http, Headers, Response} from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http:Http) { }
  private oauthUrl = "http://127.0.0.1:8000/oauth/token";
  private regUrl = "http://127.0.0.1:8000/api/register";
  private emailValidationUrl = "http://127.0.0.1:8000/api/emailCheck";
   private UserUrl = "http://127.0.0.1:8000/api/user";
  token :string ='';
  id;
  private expiration;
  authenticatedUser = {};


  login(username,password){



        let postData = {
            grant_type: "password",
            client_id: 2,
            client_secret: "l3mOmHIoDvlrHKvA73Efquebode9WjVfxGZ20gsT",
            username: username,
            password: password,
            scope: ""
        }

         return this.http.post(this.oauthUrl,postData)
             .map((res: Response) => res.json())



    }


    GetUser(token:any)
    {
        let postData ={
            Authorization:'Bearer'+' '+token
        }

        return this.http.post(this.UserUrl,postData)
             .map((res: Response) => res.json())
        

    }

    setUser(id){
        localStorage.setItem('id',id);
    }

     getUser(){
        this.id = localStorage.getItem('id');
         if(! this.id ){

    
    this.destroyToken();
    return null;
  }
  return this.id;
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

    if(Date.now() > parseInt(this.expiration)){

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

setAuthenticatedUser(data)
{
    this.authenticatedUser = data;
}


getAuthenticatedUser()
{
    return this.authenticatedUser;
}
// register

register(data:any)
{
    

         return this.http.post(this.regUrl,data)
             .map((res: Response) => res.json())

   

}

}
