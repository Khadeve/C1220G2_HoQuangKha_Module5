import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewCustomerComponent } from './add-new-customer/add-new-customer.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { AddNewServiceComponent } from './add-new-service/add-new-service.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomepageBodyComponent } from './layouts/homepage-body/homepage-body.component';
import { ServiceListComponent } from './service-list/service-list.component';


const routes: Routes = [
  {path: '', component: HomepageBodyComponent},
  {path: "add-new-customer", component: AddNewCustomerComponent},
  {path: "customer-list", component: CustomerListComponent},
  {path: "add-new-employee", component: AddNewEmployeeComponent},
  {path: "employee-list", component: EmployeeListComponent},
  {path: "add-new-service", component: AddNewServiceComponent},
  {path: "service-list", component: ServiceListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
