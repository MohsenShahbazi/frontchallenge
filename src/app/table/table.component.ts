import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {SharedDataService} from "../sharedData.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  products: any[] = [];


  constructor(private router: Router, private formBuilder: FormBuilder, private sharedService: SharedDataService) {
  }


  ngOnInit(): void {

    this.sharedService.currentSource.subscribe(info => {
      console.log(info);
    }).unsubscribe();

  }

  nextLevel(): void {

    // TODO disatch action
    this.router.navigate(['form']);
  }
}
