import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SharedDataService} from "../sharedData.service";

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
  myForm!: FormGroup;
  statusList: Status[] = [];
  selectedUploadedFiles: any[] = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private sharedService: SharedDataService) {
  }

  ngOnInit(): void {

    this.sharedService.currentSource.subscribe(info => {
      this.selectedUploadedFiles = info;
    }).unsubscribe();

    this.statusList = [
      {name: 'Active', code: 0},
      {name: 'InActive', code: 1},
      {name: 'Enable', code: 2},
      {name: 'Disable', code: 3},
    ];

    this.myForm = this.formBuilder.group({
      amount: ['', Validators.required, Validators.pattern("^[0-9]*$")],
      date: ['', Validators.required],
      status: ['', Validators.required],
      source: ['', Validators.required, Validators.maxLength(50), Validators.minLength(20)],
      fileUploaded: []
    });

  }

  nextLevel(): void {
    // @ts-ignore
    this.myForm.controls['fileUploaded'] =this.selectedUploadedFiles;
    this.sharedService.changeSource(this.myForm);
    this.router.navigate(['table']);
  }

  onFormSubmit(): void {
    this.nextLevel();
  }
}
