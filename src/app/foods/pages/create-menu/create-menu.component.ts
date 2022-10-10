import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Menu } from '../../shared/models/Menu';
import { MenuService } from '../../shared/services/menu.service';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {
  title: string = "PLAT";
  successMsg = "";
  swichAvailable:boolean = true;
  public menuForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private menuService: MenuService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.menuForm = this.formBuilder.group({
      name: ["", Validators.required],
      quantity: ["", Validators.required],
      description: ["", Validators.required],
      available: [true],
      price: ["", Validators.required],
      picture: [""],
      categoryId: [""],
    });
  }

  onCheckBoxAvailableChange(event: any):void{
    if(event.target.checked){
      this.swichAvailable = true;
    }
    else this.swichAvailable = false;
  }

  onSubmitForm():void {
    const formValue = this.menuForm.value;
    const menu = new Menu();
    menu.name = formValue['name'];
    menu.description = formValue['description'];
    menu.quantity = formValue['quantity'];
    menu.price = formValue['price'];
    menu.available = this.swichAvailable;
    menu.picture = formValue['picture'];
    menu.categoryId = formValue['categoryId'];
    this.menuService.addMenu(menu).subscribe(
      data => {
        this.successMsg = "Ajouter avec succes!";
      },
      error => {
        console.log(" Echec d'opération");
      }
    )
  }
}
