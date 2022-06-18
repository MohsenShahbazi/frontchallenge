import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  products: any[] = [];


  constructor(private router: Router) {
  }


  ngOnInit(): void {
  }

  nextLevel(): void {

    // TODO disatch action
    this.router.navigate(['form']);
  }
}
