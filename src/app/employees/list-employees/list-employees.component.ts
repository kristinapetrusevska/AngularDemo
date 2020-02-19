import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../employee.service';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  empId: number;
  employee: Employee;

  constructor(private _employeeService: EmployeeService, private _dataService: DataService) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(
      empList => this.employees = empList
    );

  }
  public onClick(id: number) {
    this._employeeService.getEmployee(id).subscribe(
      (emp: Employee) => { this.employee = emp },
      (error: any) => { console.log('error: ' + error) },
      () => { this._dataService.changeEmployee(this.employee)});
  }
  save(employee: Employee) {
    this.employees.push(employee);
}


}
