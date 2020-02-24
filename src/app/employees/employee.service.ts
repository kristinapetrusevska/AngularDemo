import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
//import 'rxjs/add/observable/of';

@Injectable()
export class EmployeeService {

    emp: Employee;
    constructor(private _httpClient: HttpClient, private _dataService: DataService, private _router: Router) {
        this._dataService.currentEmployee.subscribe(d => this.emp = d);
    }

    // private listEmployees: Employee[] = [

    //     {
    //         id: 1,
    //         firstName: 'Mark',
    //         lastName: 'Stevens',
    //         gender: 'Male',
    //         salary: 5000,
    //         details: 'We live in a data-driven world: people search through data to find insights to inform strategy, marketing, operations, and a plethora of other categories. '

    //     },
    //     {
    //         id: 2,
    //         firstName: 'Sophie',
    //         lastName: 'Mophie',
    //         gender: 'Female',
    //         salary: 500110,
    //         details: 'In this course, you’ll learn how to communicate with relational databases through SQL.'

    //     },
    //     {
    //         id: 3,
    //         firstName: 'John',
    //         lastName: 'Doe',
    //         gender: 'Male',
    //         salary: 15000,
    //         details: 'I know from first-hand experience that you can go in knowing zero, nothing, and just get a grasp on everything as you go and start building right away.'

    //     },

    // ];

    getEmployees(): Observable<Employee[]> {
        return this._httpClient.get<Employee[]>('https://localhost:44394/api/employees');
    }
    getEmployee(id: number): Observable<Employee> {
        return this._httpClient.get<Employee>('https://localhost:44394/api/employees/' + id);
    }

    saveEmployee(employee: Employee): Observable<Employee> {

        return this._httpClient.post<Employee>('https://localhost:44394/api/Employees',
            employee, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });

    }
    editEmployee(employee: Employee): Observable<Employee> {
        return this._httpClient.put<Employee>('https://localhost:44394/api/Employees/' + this.emp.ID, employee, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        });
    }
    deleteEmployee(employee: Employee) {
        console.log('Into service..' + employee.ID);
        return this._httpClient.delete<void>('https://localhost:44394/api/Employees/' + employee.ID);

    }
}







