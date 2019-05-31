import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
// import { from } from 'rxjs';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  tittle = "Employeee Insert";
  angForm: any;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.createFrom();
  }
  ngOnInit() {

  }

  createFrom() {

    // can controll validation fron component also
    this.angForm = this.fb.group({

      name: ["", Validators.required],
      gender: ["", Validators.required],
      dob: [""],
      country: ["", Validators.required],
      city: ["", Validators.required],
      image: [""],
      isActive: [""]

    });
  }

  onFormSubmit() {

    this.CreateEmployee(this.angForm.value);

  }

  CreateEmployee(employee: Employee) {
    alert("cliceked!");
    this.employeeService.createEmployee(employee).subscribe(
      (result) => {
        console.log("result:", result);
        alert("added successfully!");
        this.angForm.reset();
      }
    );
  }

}
