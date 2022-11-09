import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Deliverer } from '../../shared/models/Deliverer';
import { DeliveryService } from '../../shared/services/delivery.service';

@Component({
  selector: 'app-create-deliverer',
  templateUrl: './create-deliverer.component.html',
  styleUrls: ['./create-deliverer.component.css']
})
export class CreateDelivererComponent implements OnInit {
  title: string = "SHIPPER";
  delivererForm: FormGroup = new FormGroup({});
  successMsg = "";
  swichAvailable: boolean = true;
  urlImage = "";
  file: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private deliveryService: DeliveryService
  ) { }

  ngOnInit(): void {
    this.initForm();
    console.log(this.urlImage);
  }

  initForm(): void {
    this.delivererForm = this.formBuilder.group({
      firstname: ["", Validators.required],
      lastname: [""],
      email: ["", Validators.required],
      address1: ["", Validators.required],
      address2: ["", Validators.required],
      city: ["", Validators.required],
      available: [true],
      file: [""]
    });
  }

  onSubmitForm(): void{
    const formValue = this.delivererForm.value;
    const deliverer = new Deliverer();
    deliverer.firstname = formValue['firstname'];
    deliverer.lastname = formValue['lastname'];
    deliverer.email = formValue['email'];
    deliverer.address1 = formValue['address1'];
    deliverer.address2 = formValue['address2'];
    deliverer.available = this.swichAvailable;
    deliverer.city = formValue['city'];
    deliverer.file = this.file;
    this.deliveryService.createDeliverer(deliverer).subscribe(
      data => {
        this.successMsg = "Ajouter avec succes!";
        console.log(data);
        this.delivererForm.reset();
      },
      error => {
        console.log(" Echec d'opération");
      }
    )
  }

  selectImage(event: any):void{
    if(event.target.files[0]){
      this.file = event.target.files[0];
      const url = URL.createObjectURL(this.file);
      this.urlImage = url;
    }
    else{
      this.urlImage = 'assets/img/person-avatar.png'
    }
      $('#picture').attr('src', this.urlImage);
  }


  onCheckBoxAvailableChange(event: any):void{
    if(event.target.checked){
      this.swichAvailable = true;
    }
    else this.swichAvailable = false;
  }


}
