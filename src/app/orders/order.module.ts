import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

const orderRoutes: Routes = [
  { path: '', component: OrderListComponent},
];

@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(orderRoutes),
    HttpClientModule,
    SharedModule
  ]
})
export class OrderModule { }
