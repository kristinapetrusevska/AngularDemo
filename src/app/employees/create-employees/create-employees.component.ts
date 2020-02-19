import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {

  employee: Employee = {
    ID: 10,
    FirstName: null,
    Gender: null,
    LastName: null,
    Salary: null,
    Details: null,
  };

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
  }
  public show: boolean = false;


  toggle() {
    this.show = !this.show;
  }
  saveEmployee(empForm: NgForm): void {
    this._employeeService.saveEmployee(this.employee).subscribe( data => data =this.employee);


         
  }


}
