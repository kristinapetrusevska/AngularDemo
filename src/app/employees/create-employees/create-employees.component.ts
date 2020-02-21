import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';

import { Employee } from 'src/app/models/employee.model';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  employee: Employee = {
    ID: null,
    FirstName: null,
    Gender: null,
    LastName: null,
    Salary: null,
    Details: null,
  };


  constructor(private _employeeService: EmployeeService, public _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    this._dataService.currentShow.subscribe(q => this.show = q);
  }
  public show: boolean = false;


  toggle() {
    this.show = !this.show;
    this._dataService.changeShow(this.show);
    console.log('toogle from create.comp: ' + this.show);

  }
  saveEmployee(): void {
    this._employeeService.saveEmployee(this.employee).subscribe(
      (data) => { this.employee = data },
      (error) => { console.log(error) },
      () => {
        console.log('finished: ' + this.employee.FirstName);
        this.createEmployeeForm.reset();
        this.show = !this.show;
        
      }
    );
    this._dataService.currentShow.subscribe(q => this.show = q);


  }


}
