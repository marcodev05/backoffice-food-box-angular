import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../shared/services/order.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalDelivererComponent } from '../../shared/components/modal-deliverer/modal-deliverer.component';

@Component({
  selector: 'app-order-active-list',
  templateUrl: './order-active-list.component.html',
  styleUrls: ['./order-active-list.component.scss']
})
export class OrderActiveListComponent implements OnInit {
  title: string = "ACTIVE ORDERS";
  public orders: any;
  modalRef: MdbModalRef<ModalDelivererComponent> | null = null;
  constructor(private orderService: OrderService,
     private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.fethAllActiveOrders();
  }

  openModal(id: any) {
    this.modalRef = this.modalService.open(ModalDelivererComponent, {
      data: {orderId : id },
    });
  }

  public fethAllActiveOrders(): void {
    this.orderService.fetchActiveOrders().subscribe({
      next: (response) => {
        this.orders = response;
        console.log(this.orders);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
  }

}
