import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Menu } from '../../shared/models/Menu';
import { MenuService } from '../../shared/services/menu.service';

@Component({
  selector: 'app-menu-grid',
  templateUrl: './menu-grid.component.html',
  styleUrls: ['./menu-grid.component.css']
})
export class MenuGridComponent implements OnInit {
  title: string = "PRODUCT GRID";
  description = "";
  menus: Menu[] = [];
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.fethAllAvailableMenus();
  }

  public fethAllAvailableMenus(): void {
    this.menuService.fetchAllMenus().subscribe({
      next: (response: Menu[]) => {
        this.menus = response;
        console.log(this.menus);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
  }

}
