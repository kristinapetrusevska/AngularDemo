import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from './models/employee.model';

@Injectable()
export class DataService {
    

    private employeeSource = new BehaviorSubject<Employee>(null);
    currentEmployee = this.employeeSource;

    private showSource =new BehaviorSubject<boolean>(false);
    currentShow=this.showSource;

    private employeesSource = new BehaviorSubject<Employee []>(null);
    currentEmployeeList=this.employeesSource;

    constructor(){}

    refreshEmployees(employees:Employee[]){
        this.employeesSource.next(employees);
    }

    changeEmployee(employee: Employee){
        this.employeeSource.next(employee);
    }
    changeShow(show: boolean){
        this.showSource.next(show);        
    }
}