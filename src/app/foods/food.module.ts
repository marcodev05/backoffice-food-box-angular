import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMenuComponent } from './pages/create-menu/create-menu.component';
import { MenuListComponent } from './pages/menu-list/menu-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { MenuGridComponent } from './pages/menu-grid/menu-grid.component';
import { MenuDetailsComponent } from './pages/menu-details/menu-details.component';


const menuRoutes: Routes = [
  { path: '', component: MenuListComponent},
  { path: 'add', component: CreateMenuComponent},
];
@NgModule({
  declarations: [
    CreateMenuComponent,
    MenuListComponent,
    MenuGridComponent,
    MenuDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(menuRoutes),
    HttpClientModule,
    SharedModule
  ]
})
export class FoodModule { }
