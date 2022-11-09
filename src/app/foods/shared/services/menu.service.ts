import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Menu } from '../models/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiBaseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public fetchAllMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.apiBaseUrl + "/public/v1/menus/available"); // have to use other api for all menus
  }

  public getMenuById(id : number): Observable<Menu> {
    return this.http.get<Menu>(this.apiBaseUrl + "/public/v1/menus/" + id);
  }

  public deleteMenuById(id : number): Observable<any> {
    return this.http.delete<any>(this.apiBaseUrl + "/manager/v1/menus/" + id + "/delete");
  }

  public addMenu(menu: Menu): Observable<Menu> {
    const formData = new FormData();
    formData.append('name', menu.name);
    formData.append('description', menu.description);
    formData.append('price',menu.price as any);
    formData.append('quantity', menu.quantity as any);
    formData.append('available', menu.available as any);
    if(menu.file){
      formData.append('file', menu.file as File);
    }  
    return this.http.post<Menu>(this.apiBaseUrl + "/manager/v1/menus/add", formData);
  }

}
