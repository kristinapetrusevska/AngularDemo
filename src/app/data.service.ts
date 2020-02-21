import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from './models/employee.model';

@Injectable()
export class DataService {
    

    private employeeSource = new BehaviorSubject<Employee>(null);
    currentEmployee = this.employeeSource;

    private showSource =new BehaviorSubject<boolean>(false);
    currentShow=this.showSource;

    constructor(){}

    

    changeEmployee(employee: Employee){
        this.employeeSource.next(employee);
    }
    changeShow(show: boolean){
        this.showSource.next(show);
    }
}