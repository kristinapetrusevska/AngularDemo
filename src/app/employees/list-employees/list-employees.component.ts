import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../employee.service';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  empId: number;
  employee: Employee;
  reload: boolean = false;
  

  constructor(private _employeeService: EmployeeService, private _dataService: DataService) { }

  ngOnInit() {
    
  }

  public onClick(id: number) {
    this._employeeService.getEmployee(id).subscribe(
      (emp: Employee) => { this.employee = emp },
      (error: any) => { console.log('error: ' + error) },
      () => { this._dataService.changeEmployee(this.employee) }
    );

  }
  public getEmp(id) {
    this._employeeService.getEmployee(id).subscribe(
      (emp: Employee) => { this.employee = emp },
      (error: any) => { console.log('error: ' + error) },
      () => { this._dataService.changeEmployee(this.employee) }
    );
  }

  getAllEmployees() {
    this._employeeService.getEmployees().subscribe(
      empList => this.employees = empList
    );
  }
  deleteEmployee(id: number) {
    
      this.getEmp(id);

    this._employeeService.deleteEmployee(this.employee).subscribe(
      () => console.log('Employee with ID = ${this.employee.ID} Deleted'),
      (err) => console.log(err)
    );
    

  }



}
