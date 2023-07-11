import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { Order } from '../../shared/models/order.model';
import { FormService } from '../../shared/services/form.service';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {
  constructor(private http: HttpService, private fs: FormService) {}

  url: string = environment.localhost;
  searchValue: string = '';
  status: boolean = false;
  order: Order;

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'product',
    'code',
    'price',
    'quantity',
    'total',
  ];

  ngOnInit(): void {}

  onSearch(track: string) {
    this.http
      .getTrack(track)
      .then((result) => {
        this.status = true;
        this.order = result;
        this.dataSource = new MatTableDataSource(this.order.orderList);
      })
      .catch((resError) => {
        this.status = false;
        this.fs.openSnackBar(
          'The tracking ID is invalid. Please check if you entered the tracking ID correctly.',
          'X'
        );
      });
  }
}
