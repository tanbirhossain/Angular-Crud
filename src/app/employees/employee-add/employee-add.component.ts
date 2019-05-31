import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// import { from } from 'rxjs';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  tittle = "Employeee Insert";

  angForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createFrom();
  }

  createFrom() {
    this.angForm = this.fb.group({
      person_name: ["", Validators.required],
      business_name: ["", Validators.required],
      business_gst_number: ["", Validators.required]
    });
  }



  ngOnInit() {
   this.rr();
  }
  rr() {

    let result = "aa";
    let message = result;
    console.log(result);
  }
}
