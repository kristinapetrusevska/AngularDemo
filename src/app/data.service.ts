import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from './models/employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    private employeeSource = new BehaviorSubject<Employee>(null);
    currentEmployee = this.employeeSource;

    private showSource = new BehaviorSubject<boolean>(false);
    currentShow = this.showSource;  

    private IdSource =new BehaviorSubject<number>(null);
    currentId=this.IdSource;

    changeId(Id:number){
        this.IdSource.next(Id);
    }
    changeEmployee(employee: Employee) {
        this.employeeSource.next(employee);
    }
    changeShow(show: boolean) {
        this.showSource.next(show);
    }
}