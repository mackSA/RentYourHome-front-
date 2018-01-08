import { Injectable } from '@angular/core';
import  'rxjs/add/operator/map';
import {Http, Headers, Response} from '@angular/http';


@Injectable()
export class DashboardService {
  private addUrl = "http://127.0.0.1:8000/api/add/listing";

  constructor(private http:Http) { }


  addlisting(data:any){

         return this.http.post(this.addUrl,data)
             .map((res: Response) => res.json());
    }

}
