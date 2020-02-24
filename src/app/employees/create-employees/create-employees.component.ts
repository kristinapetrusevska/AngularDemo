import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { EmployeeService } from '../employee.service';

import { Employee } from 'src/app/models/employee.model';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { ListEmployeesComponent} from '../list-employees/list-employees.component'



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

  public show: boolean = false;
  public reload: boolean = false;
  public locId:number;


  constructor(private _employeeService: EmployeeService, public _dataService: DataService, private _listEmployees: ListEmployeesComponent) { }

  ngOnInit() {
    this._dataService.currentShow.subscribe(q => this.show = q);
    this._dataService.currentId.subscribe(q => this.employee.ID = q);

  }

  toggle() {
    this.show = !this.show;
    this._dataService.changeShow(this.show);
  }

  saveEmployee() {
    this._employeeService.saveEmployee(this.employee).subscribe(
      (data) => { this.employee = data },
      (error) => { console.log(error) },
      () => {
        this.createEmployeeForm.reset();
        this.show = !this.show;        
        this._listEmployees.getAllEmployees();
      }
    );
    }
    editEmployee() {
      this._employeeService.editEmployee(this.employee).subscribe(
        (data) => { this.employee = data},
        (error) => { console.log(error) },
        () => {
          this.createEmployeeForm.reset();
          this.show = !this.show;
          
        }
      );
  
      }

      check(){
        if (this.employee.ID==null) this.saveEmployee();
        else this.editEmployee();
      }

  private getEmployee(id: number) {
        if (id === 0) {
      this.employee = {
        ID: null,
        FirstName: null,
        Gender: null,
        LastName: null,
        Salary: null,
        Details: null,
      };
            this.createEmployeeForm.reset();
      
    } else {
      this._employeeService.getEmployee(id).subscribe(e => this.employee = e);
      
    }
  }

}
