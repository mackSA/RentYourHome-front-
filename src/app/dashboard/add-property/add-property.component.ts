import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

heading:string;
location:string;
rooms:string;
brooms:string;
description:string;
myFile:File;
_formData;
  constructor(public dash:DashboardService) { }

fileChange(files: any){
    console.log(files);

    this.myFile = files[0].nativeElement;
}

onSubmit(): void {
    let _formData = new FormData();
    _formData.append("heading", this.heading);
     _formData.append("location", this.location);
      _formData.append("rooms", this.rooms);
       _formData.append("brooms", this.brooms);
        _formData.append("description", this.description);
    _formData.append("image", this.myFile);
    let body = _formData;

    this.dash.addlisting(body).subscribe(data =>{
      console.log(data)
    });
   

}
  ngOnInit() {
  }

}
