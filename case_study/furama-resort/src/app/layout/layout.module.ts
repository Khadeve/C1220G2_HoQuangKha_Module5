import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomepageBodyComponent } from './homepage-body/homepage-body.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomepageBodyComponent,
    NavbarComponent,
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    NgbDatepickerModule,
    FormsModule,
    RouterModule,
    NgbModalModule
  ],
  exports: [
    DatepickerComponent,
    FooterComponent,
    HeaderComponent,
    HomepageBodyComponent,
    NavbarComponent
  ]
})
export class LayoutModule { }
