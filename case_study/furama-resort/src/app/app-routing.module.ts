import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageBodyComponent } from './layout/homepage-body/homepage-body.component';



const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () => import('./pages/customers/customers.module').then(module => module.CustomersModule)
  },
  {path: '', component: HomepageBodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
