import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root',
  })
export class UploadPhotoService {

    constructor(private httpClient: HttpClient) { }


    uploadImage(file: any) {

        this.httpClient.put(environment.apiUrl + environment.bucketName + `/` + file.name, file).subscribe(

            (res) => {
                console.log(res);

            },
            (error) => {
                console.log(error);
            
            }

        )

    }



}