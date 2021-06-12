import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from 'src/app/layout/layout.module';


@NgModule({
  declarations: [
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  providers: [
    NgbActiveModal
  ]
})
export class CustomersModule { }
