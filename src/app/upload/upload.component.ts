import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SharedDataService} from "../sharedData.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadedFiles: any[] = [];

  constructor(private router: Router, private sharedService: SharedDataService) {
  }

  ngOnInit(): void {
  }

  nextLevel(): void {

    // TODO disatch action
    this.sharedService.changeSource(this.uploadedFiles);

    this.router.navigate(['form']);
  }

  onUpload($event: any): void {
    for(let file of $event.files) {
      this.uploadedFiles.push(file);
    }

  }

}
