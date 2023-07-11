import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card, CartItem } from '../../shared/models/product.model';
import { CartService } from '../../shared/services/cart.service';
import { FormService } from '../../shared/services/form.service';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  constructor(
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private fs: FormService,
    private cs: CartService,
    private http: HttpService
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  url = environment.localhost;
  bestSeller: Card[] = [];
  selectBrand: string = '';
  brand = this.route.snapshot.params.brand;
  brands: Brand[] = [
    { value: '', viewValue: 'All' },
    { value: 'megir m', viewValue: 'Megir M' },
    { value: 'megir w', viewValue: 'Megir W' },
    { value: 'cadisen', viewValue: 'Cadisen' },
    { value: 'ruimas', viewValue: 'Ruimas' },
  ];
  from: number = 1;
  to: number = 1300;

  selectedSort: string;
  sorting: Sort[] = [
    { value: 'a-z', viewValue: 'Ascending', active: 'code', direction: 'asc' },
    {
      value: 'z-a',
      viewValue: 'Descending',
      active: 'code',
      direction: 'desc',
    },
    {
      value: 'low',
      viewValue: 'Price, low to high',
      active: 'price',
      direction: 'asc',
    },
    {
      value: 'high',
      viewValue: 'Price, high to low',
      active: 'price',
      direction: 'desc',
    },
  ];

  slides = [
    { image: 'assets/img/home/carousel/1.png' },
    { image: 'assets/img/home/carousel/2.png' },
    { image: 'assets/img/home/carousel/3.png' },
  ];

  loadingImage = 'assets/img/loading.png';
  obs: Observable<any>;
  dataSource: MatTableDataSource<Card>;
  filterPredicate: any;

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.getBestSeller();
    this.getProduct();
  }

  ngOnDestroy() {
    if (this.dataSource) this.dataSource.disconnect();
  }

  getBestSeller() {
    this.http.getBestSeller(4).then((result) => (this.bestSeller = result));
  }

  getProduct() {
    this.http.getProduct().then((result) => {
      this.dataSource = new MatTableDataSource<Card>(result);
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
      this.filterPredicate = this.dataSource.filterPredicate;
      this.onRouteBrand(this.brand);
    });
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

  applyFilter(filterValue: string) {
    this.setfilterPredicate();
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (!filterValue) {
      this.brandsFilter(this.selectBrand);
      this.sellFilter();
    }
  }

  applySorting() {
    const sort: Sort = this.sorting.find(
      (item) => item.value == this.selectedSort
    );

    this.sort.active = sort.active;
    this.sort.direction = sort.direction;
    this.dataSource.data = this.dataSource.sortData(
      this.dataSource.data,
      this.sort
    );
  }

  brandsFilter(brandValue: string) {
    if (!brandValue) {
      this.dataSource.filter = '';
    } else {
      this.setfilterPredicate();

      brandValue = brandValue.trim();
      brandValue = brandValue.toLocaleLowerCase();
      this.dataSource.filter = brandValue;
      this.selectBrand = brandValue;
    }
  }

  sellFilter() {
    this.dataSource.filterPredicate = (data: Card, filter: string) => {
      if (this.from && this.to) {
        if (this.selectBrand) {
          return (
            data.sale >= this.from &&
            data.sale <= this.to &&
            data.brand.toLocaleLowerCase() == this.selectBrand
          );
        } else {
          return data.sale >= this.from && data.sale <= this.to;
        }
      }
      return true;
    };
    this.dataSource.filter = '' + Math.random();
  }

  onNextorPrePage() {
    setTimeout(() => {
      const el: any = document.querySelector('mat-sidenav-content') || window;
      const duration: number = 600;
      this.fs.onScrolltoTop(el, duration);
    }, 100);
  }

  onRouteBrand(brand: string) {
    if (brand) {
      this.selectBrand =
        brand == 'megirm' ? 'megir m' : brand == 'megirw' ? 'megir w' : brand;
      this.brandsFilter(this.selectBrand);
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
        cover: item.cover,
        stock: item.stock,
      },
      quantity: 1,
    };
    return cartItem;
  }

  private setfilterPredicate() {
    if (this.dataSource.filterPredicate != this.filterPredicate)
      this.dataSource.filterPredicate = this.filterPredicate;
  }
}

export interface Brand {
  value: string;
  viewValue: string;
}

export interface Sort {
  value: string;
  viewValue: string;
  active: string;
  direction: SortDirection;
}
