import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../shared/services/order.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalDelivererComponent } from '../../shared/components/modal-deliverer/modal-deliverer.component';
import { DeliveryService } from 'src/app/deliveries/shared/services/delivery.service';
import { Deliverer } from 'src/app/deliveries/shared/models/Deliverer';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order-active-list',
  templateUrl: './order-active-list.component.html',
  styleUrls: ['./order-active-list.component.scss']
})
export class OrderActiveListComponent implements OnInit {
  title: string = "ACTIVE ORDERS";
  public orders: any;
  modalRef: MdbModalRef<ModalDelivererComponent> | null = null;
  shippers: Deliverer[] = [];
  selectedOrder!: number;

  constructor(private orderService: OrderService,
    private deliveryService: DeliveryService,
    private modalService: MdbModalService,
    private toast: ToastrService
    ) { }

  ngOnInit(): void {
    this.fethAllActiveOrders();
    this.fethAvailableDeliverer();
  }

  openModal(id: any) {
    this.selectedOrder = id;
    this.modalRef = this.modalService.open(ModalDelivererComponent, {
      data: {
        orderId: id,
        shippers: this.shippers
      },
    });

    this.modalRef.onClose.subscribe((shipper: any) => {
      this.assignOrderToShipper(this.selectedOrder, shipper);
    });
  }

  public fethAllActiveOrders(): void {
    this.orderService.fetchActiveOrders().subscribe({
      next: (response) => {
        this.orders = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
  }

  public fethAvailableDeliverer(): void {
    this.deliveryService.fetchAvailableDeliverer().subscribe({
      next: (response) => {
        this.shippers = response;
        console.log(this.shippers);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
  }

  public assignOrderToShipper(orderId: number, shipperId: any) {
    this.orderService.assignAnOrderToShipper(orderId, shipperId).subscribe({
      next: (data: any) => {
        this.fethAllActiveOrders();
        this.toast.success("success","Order in the way!");
      },
      error(err: any) {
        console.log(err);
      },
    });
  }

  // public showToast() {
  //   this.toast.success("success","Order confirmed!");
  // }

}
