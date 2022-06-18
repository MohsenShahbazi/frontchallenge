import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

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

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  nextLevel(): void {

    // TODO disatch action
    this.router.navigate(['form']);
  }

  onFormSubmit(): void {
    this.nextLevel();
  }
}
