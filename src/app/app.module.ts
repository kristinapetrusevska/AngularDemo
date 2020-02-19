import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { EmployeeService } from './employees/employee.service';
import {HttpClientModule} from '@angular/common/http';
import { DetailsEmployeesComponent } from './employees/details-employees/details-employees.component';
import { DataService } from './data.service';
import { CreateEmployeesComponent } from './employees/create-employees/create-employees.component';


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    DetailsEmployeesComponent,
    CreateEmployeesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
