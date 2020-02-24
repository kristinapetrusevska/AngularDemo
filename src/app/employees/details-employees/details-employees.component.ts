import { Component, OnInit} from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/app/models/employee.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-details-employees',
  templateUrl: './details-employees.component.html',
  styleUrls: ['./details-employees.component.css']
})
export class DetailsEmployeesComponent implements OnInit {


  employee: Employee;
  empId: number;
  newEmpId: number;
  show: boolean = false;


  constructor(private _employeeService: EmployeeService, private _dataService: DataService) {
   
  }

  ngOnInit() {
    this._dataService.currentEmployee.subscribe(q => this.employee = q);
    this._dataService.currentId.subscribe(q=> this.empId =q);
  }
  public onClick(id: number) {
    console.log('Current ID: '+ id);
    this._dataService.changeShow(true);
    this._dataService.changeId(id);
    
  }



}
