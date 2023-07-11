import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Inbox, InboxList } from '../models/inbox.model';
import { Order, OrderData, OrderList } from '../models/order.model';
import { Product, ProductList } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http
      .get<Product[]>(`${environment.apiUrl}product`, { withCredentials: true })
      .toPromise();
  }

  getProductById(id: number) {
    return this.http
      .get<ProductList>(`${environment.apiUrl}product/${id}`, {
        withCredentials: true,
      })
      .toPromise();
  }

  createProduct(body) {
    return this.http
      .post(`${environment.apiUrl}product`, body, { withCredentials: true })
      .toPromise();
  }

  updateProduct(body) {
    return this.http
      .put(`${environment.apiUrl}product`, body, { withCredentials: true })
      .toPromise();
  }

  getInbox() {
    return this.http
      .get<Inbox[]>(`${environment.apiUrl}inbox`, { withCredentials: true })
      .toPromise();
  }

  getInboxList() {
    return this.http
      .get<InboxList>(`${environment.apiUrl}inboxlist`, {
        withCredentials: true,
      })
      .toPromise();
  }

  updateInbox(body) {
    return this.http
      .put<Inbox[]>(`${environment.apiUrl}inbox`, body, {
        withCredentials: true,
      })
      .toPromise();
  }

  getOrder() {
    return this.http
      .get<Order[]>(`${environment.apiUrl}order`, { withCredentials: true })
      .toPromise();
  }

  getOrderList() {
    return this.http
      .get<OrderList>(`${environment.apiUrl}orderlist`, {
        withCredentials: true,
      })
      .toPromise();
  }

  getOrderData(id: number) {
    return this.http
      .get<OrderData>(`${environment.apiUrl}order/${id}`, {
        withCredentials: true,
      })
      .toPromise();
  }

  updateOrder(body) {
    return this.http
      .put(`${environment.apiUrl}order`, body, { withCredentials: true })
      .toPromise();
  }

  updateTrack(body) {
    return this.http
      .put(`${environment.apiUrl}track`, body, { withCredentials: true })
      .toPromise();
  }
}
