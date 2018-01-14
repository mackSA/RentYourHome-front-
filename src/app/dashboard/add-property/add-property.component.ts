import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
 import {Router} from '@angular/router';
 import { UserService } from '../../services/auth/auth.service'

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
myFile1:File;
myFile2:File;
myFile3:File;
_formData;
  constructor(public dash:DashboardService,private router:Router,private auth:UserService) { }

fileChange(event){
     let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.myFile = fileList[0];
     }
     console.log(this.myFile);
}
fileChange1(event){
     let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.myFile1 = fileList[0];
     }
     console.log(this.myFile1);
}
fileChange2(event){
     let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.myFile2 = fileList[0];
     }
     console.log(this.myFile2);
}
fileChange3(event){
     let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.myFile3 = fileList[0];
     }
     console.log(this.myFile3);
}

onSubmit(): void {
    let _formData = new FormData();
    _formData.append("heading", this.heading);
     _formData.append("location", this.location);
      _formData.append("rooms", this.rooms);
       _formData.append("brooms", this.brooms);
        _formData.append("description", this.description);
    _formData.append("image", this.myFile);
     _formData.append("image1", this.myFile1);
      _formData.append("image2", this.myFile2);
       _formData.append("image3", this.myFile3);

    let body = _formData;

    this.dash.addlisting(body).subscribe(data =>{
      console.log(data)
    });
   console.log(this.myFile);

}
  ngOnInit() {
    if(this.auth.isAuthenticated()){
        
    }else{
      this.router.navigate(['Signup']);
    }
  }

}
