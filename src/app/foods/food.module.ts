import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMenuComponent } from './pages/create-menu/create-menu.component';
import { MenuListComponent } from './pages/menu-list/menu-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { MenuGridComponent } from './pages/menu-grid/menu-grid.component';
import { MenuDetailsComponent } from './pages/menu-details/menu-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from '../core/interceptors/token.interceptor';


const menuRoutes: Routes = [
  { path: '', component: MenuListComponent},
  { path: 'add', component: CreateMenuComponent},
  { path: 'grid', component: MenuGridComponent},
  { path: 'details/:id', component: MenuDetailsComponent},
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
    ReactiveFormsModule,
    RouterModule.forChild(menuRoutes),
    HttpClientModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true   
    }
  ],
})
export class FoodModule { }
