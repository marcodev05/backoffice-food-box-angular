import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { FoodModule } from './foods/food.module';
import { SharedModule } from './shared/shared.module';
import { ContentComponent } from './content/content.component';
import { OrderModule } from './orders/order.module';
import { AuthGuard } from './core/guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FoodModule,
    SharedModule,
    OrderModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true   
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
