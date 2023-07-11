import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order, Track } from '../models/order.model';
import { Card, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getBestSeller(limit: number) {
    return this.http
      .get<Card[]>(`${environment.apiUserUrl}best/${limit}`)
      .toPromise();
  }

  getProduct() {
    return this.http
      .get<Card[]>(`${environment.apiUserUrl}/product`)
      .toPromise();
  }

  getProductById(id: number) {
    return this.http
      .get<Product>(`${environment.apiUserUrl}/product/${id}`)
      .toPromise();
  }

  getTrack(track: string) {
    return this.http
      .get<Order>(`${environment.apiUserUrl}/track/${track}`)
      .toPromise();
  }

  createOrder(body) {
    return this.http
      .post<Track>(`${environment.apiUserUrl}order`, body, {
        withCredentials: true,
      })
      .toPromise();
  }

  createInbox(body) {
    return this.http
      .post(`${environment.apiUserUrl}inbox`, body, {
        withCredentials: true,
      })
      .toPromise();
  }
}
