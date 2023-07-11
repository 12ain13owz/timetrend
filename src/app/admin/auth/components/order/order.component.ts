import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Order } from '../../shared/models/order.model';
import { FormService } from '../../shared/services/form.service';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  constructor(
    private http: HttpService,
    private fs: FormService,
    private router: Router
  ) {}

  dataSource1: MatTableDataSource<Order>;
  dataSource2: MatTableDataSource<Order>;
  dataSource3: MatTableDataSource<Order>;
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  displayedColumn1: string[] = ['id_order', 'track', 'fullname', 'phone'];
  displayedColumn2: string[] = ['id_order', 'track', 'fullname', 'phone'];
  displayedColumn3: string[] = ['id_order', 'track', 'fullname', 'phone'];

  ngOnInit(): void {
    this.fs.getOrderList();
    this.getOrder();
  }

  getOrder() {
    this.http
      .getOrder()
      .then((result) => {
        this.dataSource1 = new MatTableDataSource(
          result.filter((data) => data.active == 0)
        );
        this.dataSource1.paginator = this.paginator.toArray()[0];
        this.dataSource1.sort = this.sort.toArray()[0];

        this.dataSource2 = new MatTableDataSource(
          result.filter((data) => data.active == 1)
        );
        this.dataSource2.paginator = this.paginator.toArray()[1];
        this.dataSource2.sort = this.sort.toArray()[1];

        this.dataSource3 = new MatTableDataSource(
          result.filter((data) => data.active == 2)
        );
        this.dataSource2.paginator = this.paginator.toArray()[2];
        this.dataSource2.sort = this.sort.toArray()[2];
      })
      .catch((resError) => {
        this.fs.onNotifier(
          'Error',
          `${resError.status} ${resError.statusText} ${resError.error}`,
          'error'
        );
      });
  }

  onLinkOrder(id: number) {
    this.router.navigate([`admin/auth/order/${id}`]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource3.filter = filterValue.trim().toLowerCase();
  }
}
