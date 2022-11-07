import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { CardItemMenuComponent } from './components/card-item-menu/card-item-menu.component';
import { DataTablesModule } from 'angular-datatables';
import { MultiStepsComponent } from './components/multi-steps/multi-steps.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    CardItemMenuComponent,
    MultiStepsComponent,
  ],
  imports: [
    CommonModule,
    DataTablesModule,
  ],
  exports:[
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    CardItemMenuComponent,
    DataTablesModule
  ]
})
export class SharedModule { }
