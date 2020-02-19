import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/observable/of';

@Injectable()
export class EmployeeService {

    
    constructor(private _httpClient: HttpClient){

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
        return this._httpClient.get<Employee>('https://localhost:44394/api/employees/'+ id);
    }
    
    saveEmployee(employee: Employee): Observable<Employee> {
        
        if (employee.ID === null) {
           
            return this._httpClient.post<Employee>('https://localhost:44394/api/employees',
                employee, {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json'
                    })
                })
                ;
        } else {
            
           
        }
                
                
        } 
    }
    

