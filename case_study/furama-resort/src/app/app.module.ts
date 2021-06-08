import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { AddNewCustomerComponent } from './add-new-customer/add-new-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddNewServiceComponent } from './add-new-service/add-new-service.component';
import { ServiceListComponent } from './service-list/service-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import { HomepageBodyComponent } from './layouts/homepage-body/homepage-body.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    AddNewCustomerComponent,
    CustomerListComponent,
    AddNewEmployeeComponent,
    EmployeeListComponent,
    AddNewServiceComponent,
    ServiceListComponent,
    HomepageBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
