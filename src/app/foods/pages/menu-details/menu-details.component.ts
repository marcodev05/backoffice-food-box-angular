import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../../shared/models/Menu';
import { MenuService } from '../../shared/services/menu.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
  title: string = "DETAILS DU PLAT";
  successMsg: string = "";
  currentMenu: Menu = new Menu();
  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.getProductById(id);
  }


  onCheckBoxAvailableChange(event: any): void {
    if (event.target.checked) {
      this.currentMenu.available = true;
      /* enregistrer la modification */
    }
    else {
      this.currentMenu.available = false;
      /* enregistrer la modification */
    }
  }

  public getProductById(id: number): void {
    this.menuService.getMenuById(id).subscribe(
      (response: Menu) => {
        this.currentMenu = response;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }


  public deleteMenuById(): void {
    console.log(+this.currentMenu.menuId);
    this.menuService.deleteMenuById(+this.currentMenu.menuId).subscribe(
      (response) => {
        this.successMsg = "Produit supprimé avec succès!";
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

}
