import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deliverer } from '../models/Deliverer';
import { Observable } from 'rxjs';
import { appConst } from 'src/app/core/constants/Constants.';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }

  public fetchAvailableDeliverer(): Observable<any[]> {
    return this.http.get<any[]>(appConst.MANAGER_URL + "/deliverers/available");
  }

  public createDeliverer(deliverer: Deliverer): Observable<any> {
    const formData = new FormData();
    formData.append('firstname', deliverer.firstname);
    formData.append('lastname', deliverer.lastname);
    formData.append('email',deliverer.email);
    formData.append('address1', deliverer.address1);
    formData.append('address2', deliverer?.address2);
    formData.append('available', deliverer.available as any);
    formData.append('city', deliverer.city);
    deliverer?.phone ? formData.append('phone', deliverer.phone): '';
    deliverer?.file ? formData.append('file', deliverer.file as File) : '';
    return this.http.post<any>(appConst.MANAGER_URL + "/deliverers/add", formData);
  }

}
