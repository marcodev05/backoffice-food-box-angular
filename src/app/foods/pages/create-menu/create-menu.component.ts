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
  title = "FOODS";
  successMsg = "";
  errorMsg = "";
  swichAvailable: boolean = true;
  urlImage = "";
  file: any;
  public menuForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private menuService: MenuService,
    private router: Router
  ) { }

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
      file: [""]
    });
  }

  onCheckBoxAvailableChange(event: any): void {
    if (event.target.checked) {
      this.swichAvailable = true;
    }
    else this.swichAvailable = false;
  }

  onSubmitForm(): void {
    const formValue = this.menuForm.value;
    const menu = new Menu();
    menu.name = formValue['name'];
    menu.description = formValue['description'];
    menu.quantity = formValue['quantity'];
    menu.price = formValue['price'];
    menu.available = this.swichAvailable;
    menu.picture = formValue['picture'];
    menu.categoryId = formValue['categoryId'];
    menu.file = this.file;
    console.log(menu);
    this.menuService.addMenu(menu).subscribe({
      next: (event: any) => {
        this.successMsg = "Added with success!";
        this.errorMsg = "";
      },
      error: (event: any) => {
        console.log(" Echec d'opération");
        this.errorMsg = "Error occured, check your input";
        this.successMsg = "";
      }
    })
  }

  selectImage(event: any): void {
    this.file = event.target.files[0];
    const url = URL.createObjectURL(this.file);
    this.urlImage = url;
    $('#picture').attr('src', url);
  }
}
