import { Injectable } from '@angular/core';
import  'rxjs/add/operator/map';
import {Http, Headers, Response} from '@angular/http';


@Injectable()
export class SearchService {

    private searchUrl = "http://127.0.0.1:8000/api/search";

location:string;
rooms:string;
  constructor(private http:Http) { }

  set_search_data(location,rooms){
       localStorage.setItem('location',location);
    localStorage.setItem('rooms', rooms);
  }

get_search_data(){

  let data ={

   location :localStorage.getItem('location'),
   rooms: localStorage.getItem('rooms'),

  }

  return data;
}

 remove_search_data(){
       localStorage.removeItem('location');
    localStorage.removeItem('rooms');
  }

search(post){

      return this.http.post(this.searchUrl,post)
             .map((res: Response) => res.json())

}


}
