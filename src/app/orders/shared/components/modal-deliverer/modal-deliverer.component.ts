
import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-modal-deliverer',
  templateUrl: './modal-deliverer.component.html',
  styleUrls: ['./modal-deliverer.component.css']
})
export class ModalDelivererComponent implements OnInit {
  title: string = "Shipper";
  orderId: number | undefined;
  shippers: any[] = [];
  selectedShipper: any;
  constructor(public modalRef: MdbModalRef<ModalDelivererComponent>) { }

  ngOnInit(): void {
    if(this.shippers.length > 0){
      this.selectedShipper = this.shippers[0].userId;
    }
  }

  selectShipper(event: any, shipper: any): void{
    if(event.target.checked){
      this.selectedShipper = shipper.userId;
    }
  }

  assignOrderToShipper(): void{
    this.modalRef.close(this.selectedShipper);
  }

}
