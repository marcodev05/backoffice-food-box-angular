import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Menu } from '../../shared/models/Menu';
import { MenuService } from '../../shared/services/menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  public title: string = "LIST DES PLATS";
  menus: Menu[] = [];
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    $('#menu-table').DataTable({
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      lengthMenu: [5, 10, 25]
    });
    this.fethAllAvailableMenus();
  }

  public fethAllAvailableMenus():void{
    this.menuService.fetchAllMenus().subscribe(
      (response: Menu[]) => {
        this.menus = response;
        console.log(this.menus);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }


}
