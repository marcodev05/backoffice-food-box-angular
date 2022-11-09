import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderPendingListComponent } from './pages/order-pending-list/order-pending-list.component';
import { OrderActiveListComponent } from './pages/order-active-list/order-active-list.component';
import { OrdersShippingComponent } from './pages/orders-shipping/orders-shipping.component';
import { ModalDelivererComponent } from './shared/components/modal-deliverer/modal-deliverer.component';
const orderRoutes: Routes = [
  { path: '', component: OrderPendingListComponent},
  { path: 'pending', component: OrderPendingListComponent},
  { path: 'in_process', component: OrderActiveListComponent},
  { path: 'shipping', component: OrdersShippingComponent},
  { path: 'details', component: OrderDetailsComponent},
];

@NgModule({
  declarations: [
    OrderListComponent,
    OrderDetailsComponent,
    OrderPendingListComponent,
    OrderActiveListComponent,
    OrdersShippingComponent,
    ModalDelivererComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(orderRoutes),
    HttpClientModule,
    SharedModule,
  ]
})
export class OrderModule { }
