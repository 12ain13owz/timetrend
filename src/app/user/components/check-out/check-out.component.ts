import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../../shared/services/form.service';
import { CartItem } from '../../shared/models/product.model';
import { CartService } from '../../shared/services/cart.service';
import { FormService } from '../../shared/services/form.service';
import { environment } from 'src/environments/environment';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cs: CartService,
    public fs: FormService,
    private http: HttpService
  ) {
    this.createShoppingForm();
  }

  @ViewChild('fileInput') fileInput: ElementRef;
  cartItem: CartItem[] = this.cs.getItem;

  url = environment.localhost;
  receiptFile: File[] = [];
  sform: FormGroup;
  matcher = new MyErrorStateMatcher();
  filteredOptions: Observable<string[]>;
  subscription: Subscription;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'product',
    'code',
    'price',
    'quantity',
    'total',
    'action',
  ];
  total: number = 0;

  ngOnInit(): void {
    this.subscription = this.cs.list$.subscribe((list) => {
      this.dataSource = new MatTableDataSource(list);
      this.total = this.cs.getTotal;
    });

    this.addressFilter();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (this.invalid) return;

    const formData = new FormData();
    this.setFormData = formData;
    this.newOrder(formData);
  }

  newOrder(body) {
    this.fs.track = '';
    this.http
      .createOrder(body)
      .then((result) => {
        this.fs.track = result.track;
        this.cs.removeCartItem();
        this.router.navigate(['paid']);
      })
      .catch((resError) => {
        this.fs.openSnackBar('Error. Please contact us.', 'X');
      });
  }

  onSelectReceipt(event) {
    if (this.receiptFile.length >= 1) this.onRemoveReceipt(event);

    this.receiptFile.push(...event.addedFiles);
    this.receipt.setValue(this.getReceiptName);
  }

  onRemoveReceipt(event) {
    this.receiptFile.splice(this.receiptFile.indexOf(event), 1);
    this.receipt.setValue(this.getReceiptName);
  }

  Add(item: CartItem) {
    const stock = item.detail.stock;
    if (this.cs.getQuantity(item) >= stock) {
      return this.fs.openSnackBar(
        `You can not choose more items than available. In stock ${stock} items.`,
        'X'
      );
    } else {
      this.cs.addQuantity(item);
    }
  }

  Remove(item: CartItem) {
    if (this.cs.getQuantity(item) <= 1) return;
    else this.cs.removeQuantity(item);
  }

  onDelete(item: CartItem) {
    this.cs.removeItem(item);
  }

  addressFilter() {
    this.filteredOptions = this.sform.controls['address2'].valueChanges.pipe(
      startWith(''),
      map((value) => this.fs.filter(value))
    );
  }

  private createShoppingForm() {
    this.sform = this.fb.group({
      fullname: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(`^[0]{1}[6,8,9]{1}[0-9]{8}`),
        ],
      ],
      remark: [''],
      receipt: ['', Validators.required],
    });
  }

  set setFormData(formData: FormData) {
    formData.append('fullname', this.fullname.value);
    formData.append('address1', this.address1.value);
    formData.append('address2', this.address2.value);
    formData.append('email', this.email.value);
    formData.append('phone', this.phone.value);
    formData.append('remark', this.remark.value);
    formData.append('receipt', this.receiptFile[0]);
    formData.append('cartItem', JSON.stringify(this.cartItem));
  }

  get fullname() {
    return this.sform.get('fullname');
  }

  get address1() {
    return this.sform.get('address1');
  }

  get address2() {
    return this.sform.get('address2');
  }

  get email() {
    return this.sform.get('email');
  }

  get phone() {
    return this.sform.get('phone');
  }

  get remark() {
    return this.sform.get('remark');
  }

  get receipt() {
    return this.sform.get('receipt');
  }

  get getReceiptName() {
    return this.receiptFile.map((file) => file.name).join(', ');
  }

  get invalid() {
    return this.sform.invalid;
  }
}
