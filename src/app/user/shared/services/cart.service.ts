import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {
    this.setRawData = this.getItemInCart;
  }

  rawData = [];
  cartItem: string = 'cartItem';

  private list = new BehaviorSubject<string[]>([]);
  readonly list$ = this.list.asObservable();

  addNewItem(item: CartItem) {
    const result: CartItem = this.onFindItem(item);
    if (result) {
      result.quantity += item.quantity;
      this.checkQuantity(item);
    } else this.rawData.push(item);

    this.setItemInCart = this.rawData;
    this.list.next(this.rawData);
  }

  removeItem(item: CartItem) {
    const result: number = this.onFindIndexItem(item);
    if (!isNaN(result)) this.rawData.splice(result, 1);

    this.setItemInCart = this.rawData;
    this.list.next(this.rawData);
  }

  addQuantity(item: CartItem) {
    const result: CartItem = this.onFindItem(item);
    if (result) result.quantity += 1;

    this.setItemInCart = this.rawData;
    this.list.next(this.rawData);
  }

  removeQuantity(item: CartItem) {
    const result: CartItem = this.onFindItem(item);
    if (result) result.quantity -= 1;

    this.setItemInCart = this.rawData;
    this.list.next(this.rawData);
  }

  getQuantity(item: CartItem) {
    const result: CartItem = this.onFindItem(item);
    if (result) return result.quantity;
    else return 0;
  }

  checkQuantity(item: CartItem) {
    const result: CartItem = this.onFindItem(item);
    if (result)
      return (result.quantity =
        result.quantity > result.detail.stock
          ? result.detail.stock
          : result.quantity);
  }

  removeCartItem() {
    this.rawData = [];
    this.setItemInCart = this.rawData;
    this.list.next(this.rawData);
  }

  private onFindItem(item: CartItem) {
    return this.rawData
      .map((data) => data)
      .find((val: CartItem) => val.detail.id_product == item.detail.id_product);
  }

  private onFindIndexItem(item: CartItem) {
    return this.rawData
      .map((data) => data)
      .findIndex(
        (val: CartItem) => val.detail.id_product == item.detail.id_product
      );
  }

  get getItem() {
    return this.rawData;
  }

  get getListItems() {
    return this.rawData.length;
  }

  get getTotal() {
    if (this.rawData.length > 0) {
      return this.rawData
        .map((data: CartItem) => data.detail.sale * data.quantity)
        .reduce((a, b) => a + b);
    }
    return 0;
  }

  get getItemInCart() {
    return JSON.parse(localStorage.getItem(this.cartItem));
  }

  set setItemInCart(item) {
    localStorage.setItem(this.cartItem, JSON.stringify(item));
  }

  set setRawData(data) {
    if (data) {
      this.rawData = data;
      this.list.next(this.rawData);
    }
  }
}
