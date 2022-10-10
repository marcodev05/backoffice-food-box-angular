import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: '', component: ContentComponent, children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },
      {
        path: 'menus', canActivate: [AuthGuard],
        loadChildren: () =>
          import('./foods/food.module').then(m => m.FoodModule)
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./orders/order.module').then(m => m.OrderModule)
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
