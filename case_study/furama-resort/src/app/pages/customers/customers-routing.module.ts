import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: CustomerListComponent
  },
  {
    path: 'list/edit/:id',
    component: CustomerEditComponent
  },
  {
    path: 'create',
    component: CustomerCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
