import { Component, Injectable, OnInit } from '@angular/core';
import { UploadPhotoService } from '../service/upload-photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: UploadPhotoService) { }


  ngOnInit(): void {


  }

  url: String = "";
  showSpinner: boolean = true;


  onSelectFile(event): void {

    if (event.target.files) {

      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      console.log("File: ", event.target.files[0]);

      this.service.uploadImage(event.target.files[0]);

      reader.onload = (event: any) => {
        this.url = event.target.result;
    
      }

    }

  }


  loadSpinner() {
    setTimeout(() => {
      this.showSpinner = true
    },
      5000);

    this.showSpinner = false
  }




}
