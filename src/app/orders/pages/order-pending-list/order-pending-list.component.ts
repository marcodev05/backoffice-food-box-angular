import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../../shared/services/order.service';

@Component({
  selector: 'app-order-pending-list',
  templateUrl: './order-pending-list.component.html',
  styleUrls: ['./order-pending-list.component.css']
})
export class OrderPendingListComponent implements OnInit {
  title: string = "PENDING ORDERS";
  orders: any[] = [];
  constructor(private orderService: OrderService,
               private toast: ToastrService) { }

  ngOnInit(): void {
    this.fethAllPendingOrders();
    AOS.init();
  }


  public fethAllPendingOrders():void{
    this.orderService.fetchPendingOrders().subscribe(
      (response: any[]) => {
        this.orders = response;
        console.log(this.orders);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }


  public confirmOrder(id: number):void{
    this.orderService.confirmOrder(id).subscribe(
      (response: any) => {
          this.toast.success("success","Order confirmed!");
          this.fethAllPendingOrders();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }


  public declineOrder(id: number):void{
    this.orderService.declineOrder(id).subscribe(
      (response: any) => {
          //console.log(response);
          this.fethAllPendingOrders();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }

  public showToast() {
    this.toast.success("success","Order confirmed!");
  }

}
