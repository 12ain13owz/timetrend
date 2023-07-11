import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { CartItem, Product } from '../../shared/models/product.model';
import { FormService } from '../../shared/services/form.service';
import { CartService } from '../../shared/services/cart.service';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fs: FormService,
    private cs: CartService,
    private http: HttpService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.setProduct = Number(this.id);
  }

  @ViewChild('nav') ds: DragScrollComponent;

  id: string = '';
  url = environment.localhost;
  product: Product;
  specs: string[] = [];
  quantity: number = 1;
  avalibility: string = '';
  number = new FormControl('1');

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById() {
    if (this.id) {
      this.http.getProductById(Number(this.id)).then((result) => {
        this.product = result;
        this.setSpecs = this.product.detail.specifications;
        this.setAvalibility = this.product.detail.stock;
      });
    }
  }

  addToCart() {
    if (this.cs.getQuantity(this.getCartItem) >= this.getStock) {
      this.cs.checkQuantity(this.getCartItem);
      return this.fs.openSnackBar(
        `You can not choose more items than available. In stock ${this.getStock} items.`,
        'X'
      );
    } else {
      this.cs.addNewItem(this.getCartItem);
      return this.fs.openSnackBar(
        `The product ${this.getCartItem.detail.code}-${this.getCartItem.detail.color} has been added to cart`,
        'X'
      );
    }
  }

  onBuy() {
    this.cs.addNewItem(this.getCartItem);
    this.router.navigate(['checkout']);
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  onChangeImage(path: string) {
    this.product.detail.cover = path;
  }

  Add() {
    if (this.getCheckStock) {
      this.quantity += 1;
      this.number.setValue(this.quantity);
    }
  }

  Remove() {
    if (this.quantity <= 1) this.quantity = 1;
    else this.quantity -= 1;
    this.number.setValue(this.quantity);
  }

  NumberOnly(value) {
    value = value.replace(/[^1-9]/g, '');
    value = value == '' ? '1' : value;
    this.number.setValue(value);
    this.quantity = Number(value);
  }

  InputQuantity() {
    if (this.quantity > this.getStock) this.quantity = this.getStock;
    this.number.setValue(this.quantity);
  }

  set setProduct(value: number) {
    this.product = {
      detail: {
        id_product: value,
        title: '',
        code: '',
        brand: '',
        color: '',
        sale: 0,
        price: 0,
        stock: 0,
        description: '',
        specifications: '',
        cover: '',
      },
      imageList: [],
    };
  }

  set setSpecs(value: string) {
    this.specs = value.split(`\n`).map((data) => data.replace('-', '').trim());
  }

  set setAvalibility(value: Number) {
    this.avalibility = value > 0 ? 'พร้อมส่ง' : 'หมด';
  }

  get getCheckStock() {
    return this.quantity < this.getCartItem.detail.stock;
  }

  get getCartItem() {
    const cartItem: CartItem = {
      detail: {
        id_product: this.product.detail.id_product,
        code: this.product.detail.code,
        brand: this.product.detail.brand,
        color: this.product.detail.color,
        sale: this.product.detail.sale,
        price: this.product.detail.price,
        cover: this.product.detail.cover,
        stock: this.product.detail.stock,
      },
      quantity: this.quantity,
    };

    return cartItem;
  }

  get getStock() {
    return this.getCartItem.detail.stock;
  }
}
