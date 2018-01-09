import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { SearchService } from './../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


location: string = '';
Rooms: string = '';


  constructor(private search:SearchService,private router:Router) { }

    onSubmit(): void{
      this.search.set_search_data(this.location,this.Rooms);
       this.router.navigate(['search']);


    }

  ngOnInit() {

    this.search.remove_search_data();
  }

}
