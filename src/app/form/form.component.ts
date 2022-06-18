import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

interface Status {
  name: string,
  code: number
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    amount: new FormControl('',),
    date: new FormControl(),
    status: new FormControl(),
    source: new FormControl()
  });
  statusList: Status[]=[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.statusList = [
      {name: 'Active', code: 0},
      {name: 'InActive', code: 1},
      {name: 'Enable', code: 2},
      {name: 'Disable', code: 3},
    ];
  }

  nextLevel(): void {

    // TODO disatch action
    this.router.navigate(['form']);
  }

  onFormSubmit(): void {
    this.nextLevel();
  }
}
