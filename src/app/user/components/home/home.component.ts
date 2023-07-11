import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Card, CartItem } from '../../shared/models/product.model';
import { CartService } from '../../shared/services/cart.service';
import { FormService } from '../../shared/services/form.service';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private fs: FormService,
    private cs: CartService,
    private http: HttpService
  ) {}

  slides = [
    { image: 'assets/img/home/carousel/1.png' },
    { image: 'assets/img/home/carousel/2.png' },
    { image: 'assets/img/home/carousel/3.png' },
  ];

  url = environment.localhost;
  item: Card[] = [];

  ngOnInit(): void {
    this.getBestSeller();
  }

  addToCart(item: Card) {
    const cartItem = this.getCartItem(item);
    const stock = cartItem.detail.stock;

    if (this.cs.getQuantity(cartItem) >= stock) {
      this.cs.checkQuantity(cartItem);
      return this.fs.openSnackBar(
        `You can not choose more items than available. In stock ${stock} items.`,
        'X'
      );
    } else {
      this.cs.addNewItem(cartItem);
      this.fs.openSnackBar(
        `The product ${cartItem.detail.code}-${cartItem.detail.color} has been added to cart`,
        'X'
      );
    }
  }

  getCartItem(item: Card) {
    const cartItem: CartItem = {
      detail: {
        id_product: item.id_product,
        code: item.code,
        brand: item.brand,
        color: item.color,
        sale: item.sale,
        price: item.price,
        stock: item.stock,
        cover: item.cover,
      },
      quantity: 1,
    };
    return cartItem;
  }

  getBestSeller() {
    this.http.getBestSeller(8).then((result) => (this.item = result));
  }
}
