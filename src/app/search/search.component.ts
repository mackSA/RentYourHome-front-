import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { SearchService } from './../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  location;
  rooms;

  constructor(private search:SearchService,private router:Router) { }

  ngOnInit() {
    let data  =  this.search.get_search_data();
   
   let post = new FormData();
    post.append("location", data.location); 
     post.append("rooms", data.rooms);

    this.search.search(post).subscribe(res =>{
       console.log(res);
    });
  }

}
