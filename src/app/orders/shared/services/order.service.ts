import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConst } from 'src/app/core/constants/Constants.';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  public fetchAllOrders(): Observable<any[]> {
    return this.http.get<any[]>(appConst.PUBLIC_URL +  "/orders");
  }


  public getOrderById(id : number): Observable<any> {
    return this.http.get<any>(appConst.MANAGER_URL + "/orders/" + id);
  }


  public confirmOrder(id: number): Observable<any> {
    return this.http.get<any>(appConst.MANAGER_URL + "/orders/" + id + "/confirm");
  }


  public declineOrder(id: number): Observable<any> {
    return this.http.get<any>(appConst.MANAGER_URL + "/orders/" + id + "/decline");
  }


  public fetchPendingOrders(): Observable<any[]> {
    return this.http.get<any[]>(appConst.MANAGER_URL + "/orders/status/pending");
  }


  public fetchActiveOrders(): Observable<any[]> {
    return this.http.get<any[]>(appConst.MANAGER_URL + "/orders/status/in_process");
  }

}
