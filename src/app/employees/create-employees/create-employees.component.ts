import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

import { Employee } from 'src/app/models/employee.model';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';



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

  constructor(private _employeeService: EmployeeService, public _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.currentShow.subscribe(q => this.show = q);
  }
  public show: boolean = false;


  toggle() {
    this.show = !this.show;
    this._dataService.changeShow(this.show);
    console.log(this._dataService.currentShow.value);
  }
  saveEmployee(empForm: NgForm): void {
    this._employeeService.saveEmployee(this.employee).subscribe( data => data =this.employee);


         
  }


}
