import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerListComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: []
})
export class CustomersModule { }
