import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../shared/services/order.service';


@Component({
  selector: 'app-order-active-list',
  templateUrl: './order-active-list.component.html',
  styleUrls: ['./order-active-list.component.css']
})
export class OrderActiveListComponent implements OnInit {
  title: string = "ACTIVE ORDERS";
  orders: any[] = [];
  //modalRef: MdbModalRef<MdbModalContainerComponent> | null = null;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.fethAllActiveOrders();
  }
  openModal() {
    // this.modalRef = this.modalService.open(MdbModalContainerComponent, {
    //   data: { title: 'Custom title' },
    // });
  }
  public fethAllActiveOrders():void{
    this.orderService.fetchActiveOrders().subscribe(
      (response: any[]) => {
        this.orders = response;
        console.log(this.orders);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }

  public openDelivererModal(order: any){
    //this.displayModal = "block";
  }

}
