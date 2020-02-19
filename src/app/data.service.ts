import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from './models/employee.model';

@Injectable()
export class DataService {
    private _employeeIdSource = new BehaviorSubject<number>(1);
    currentId = this._employeeIdSource;

    private employeeSource = new BehaviorSubject<Employee>(null);
    currentEmployee = this.employeeSource;

    constructor(){}

    changeEmployeeId(id: number) {
        this._employeeIdSource.next(id);
    }

    changeEmployee(employee: Employee){
        this.employeeSource.next(employee);
    }
}