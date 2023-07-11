import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import {
  OrderAll,
  OrderData,
  OrderTrackAll,
} from '../../shared/models/order.model';
import { FormService } from '../../shared/services/form.service';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.scss'],
})
export class OrderUpdateComponent implements OnInit {
  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private fs: FormService,
    private fb: FormBuilder
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.createOrderForm();
  }
  id: string = '';
  data: OrderData = data;
  url = environment;

  orderForm: FormGroup;
  trackForm: FormGroup;
  id_track: number[] = [];
  status: boolean[] = [];
  date: string[] = [];
  column: string[] = [
    'สั่งซื้อสินค้า',
    'จัดส่งพัสดุ',
    'อยู่ระหว่างการขนส่ง',
    'ได้รับสินค้า',
  ];

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'product',
    'code',
    'price',
    'quantity',
    'total',
  ];

  ngOnInit(): void {
    this.getOrderData();
  }

  getOrderData() {
    this.http
      .getOrderData(Number(this.id))
      .then((result) => {
        this.data = result;
        this.setOrder = result.order;
        this.dataSource = new MatTableDataSource(result.list);

        for (const key in result.track) {
          this.id_track.push(result.track[key].id);
          this.status.push(result.track[key].status);
          this.date.push(result.track[key].date);
        }
      })
      .catch((resError) => {
        this.fs.onNotifier(
          'Error',
          `${resError.status} ${resError.statusText} ${resError.error}`,
          'error'
        );
      });
  }

  updateOrder() {
    if (this.orderForm.invalid) return;

    this.http
      .updateOrder(this.orderForm.value)
      .then((result) => {
        this.fs.onNotifier(
          'Update Order',
          `${this.data.order.track} has been updated successfully`,
          'success'
        );
      })
      .catch((resError) => {
        this.fs.onNotifier(
          'Error',
          `${resError.status} ${resError.statusText} ${resError.error}`,
          'error'
        );
      });
  }

  updateTrack() {
    const body: OrderTrackAll[] = [];

    for (const key in this.id_track) {
      const item: OrderTrackAll = {
        id: this.id_track[key],
        status: this.status[key],
        date: this.date[key],
        id_order: this.data.order.id_order,
      };
      body.push(item);
    }

    this.http
      .updateTrack(body)
      .then((result) => {
        this.fs.onNotifier(
          'Update Track',
          `${this.data.order.track} has been updated successfully`,
          'success'
        );
      })
      .catch((resError) => {
        this.fs.onNotifier(
          'Error',
          `${resError.status} ${resError.statusText} ${resError.error}`,
          'error'
        );
      });
  }

  private createOrderForm() {
    this.orderForm = this.fb.group({
      id_order: [0, Validators.required],
      logistic: [''],
      logistic_track: [''],
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
    });
  }

  get id_order() {
    return this.orderForm.get('id_order');
  }

  get logistic() {
    return this.orderForm.get('logistic');
  }

  get logistic_track() {
    return this.orderForm.get('logistic_track');
  }

  get fullname() {
    return this.orderForm.get('fullname');
  }

  get address1() {
    return this.orderForm.get('address1');
  }

  get address2() {
    return this.orderForm.get('address2');
  }

  get email() {
    return this.orderForm.get('email');
  }

  get phone() {
    return this.orderForm.get('phone');
  }

  get remark() {
    return this.orderForm.get('remark');
  }

  set setOrder(data: OrderAll) {
    this.id_order.setValue(data.id_order);
    this.logistic.setValue(data.logistic);
    this.logistic_track.setValue(data.logistic_track);
    this.fullname.setValue(data.fullname);
    this.address1.setValue(data.address1);
    this.address2.setValue(data.address2);
    this.email.setValue(data.email);
    this.phone.setValue(data.phone);
    this.remark.setValue(data.remark);
  }
}

const data: OrderData = {
  order: {
    id_order: 0,
    track: '',
    fullname: '',
    address1: '',
    address2: '',
    email: '',
    phone: '',
    remark: '',
    receipt: '',
    active: 0,
    logistic: '',
    logistic_track: '',
  },
  list: [
    {
      id: 0,
      code: '',
      color: '',
      sale: 0,
      cover: '',
      quantity: 0,
    },
  ],
  track: [
    {
      id: 0,
      status: false,
      date: '',
      id_order: 0,
    },
  ],
};
