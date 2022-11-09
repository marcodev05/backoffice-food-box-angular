import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDelivererComponent } from './pages/create-deliverer/create-deliverer.component';
import { DelivererListComponent } from './pages/deliverer-list/deliverer-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

const delivererRoutes: Routes = [
  { path: '', component: DelivererListComponent},
  { path: 'add', component: CreateDelivererComponent}
];

@NgModule({
  declarations: [
    CreateDelivererComponent,
    DelivererListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(delivererRoutes),
    HttpClientModule,
    SharedModule
  ]
})
export class DeliveryModule { }
