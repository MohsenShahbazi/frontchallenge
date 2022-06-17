import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadedFiles: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextLevel():void{
    this.router.navigate(['form']);
  }

  onUpload($event: any):void{

  }

}
