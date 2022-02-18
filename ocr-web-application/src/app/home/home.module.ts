
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { UploadPhotoService } from '../service/upload-photo.service';


@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: []
})
export class HomeModule { }
