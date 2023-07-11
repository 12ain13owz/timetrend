import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Inbox } from '../../shared/models/inbox.model';
import { FormService } from '../../shared/services/form.service';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  constructor(private http: HttpService, private fs: FormService) {}

  dataSource1: MatTableDataSource<Inbox>;
  dataSource2: MatTableDataSource<Inbox>;
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  displayedInbox: string[] = [
    'select',
    'id_inbox',
    'name',
    'email',
    'subject',
    'content',
  ];
  displayedHistory: string[] = [
    'id_inbox',
    'name',
    'email',
    'subject',
    'content',
  ];
  selection = new SelectionModel<Inbox>(true, []);

  ngOnInit(): void {
    this.fs.getInboxList();
    this.getInbox();
  }

  getInbox() {
    this.http
      .getInbox()
      .then((result) => {
        this.dataSource1 = new MatTableDataSource(
          result.filter((data) => data.active == false)
        );
        this.dataSource1.paginator = this.paginator.toArray()[0];
        this.dataSource1.sort = this.sort.toArray()[0];

        this.dataSource2 = new MatTableDataSource(
          result.filter((data) => data.active == true)
        );
        this.dataSource2.paginator = this.paginator.toArray()[1];
        this.dataSource2.sort = this.sort.toArray()[1];
      })
      .catch((resError) => {
        this.fs.onNotifier(
          'Error',
          `${resError.status} ${resError.statusText} ${resError.error}`,
          'error'
        );
      });
  }

  updateActive() {
    const select = this.selection.selected;
    this.http
      .updateInbox(select)
      .then((result) => {
        this.dataSource1.data = result.filter((data) => data.active == false);
        this.dataSource2.data = result.filter((data) => data.active == true);

        for (let i in select) this.selection.deselect(select[i]);
        this.fs.listInbox = this.fs.listInbox - select.length;
      })
      .catch((resError) => {
        this.fs.onNotifier(
          'Error',
          `${resError.status} ${resError.statusText} ${resError.error}`,
          'error'
        );
      });
  }

  isAllSelected() {
    if (this.dataSource1) {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource1.data.length;
      return numSelected === numRows;
    }
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource1.data.forEach((row) => this.selection.select(row));
  }

  checkboxLabel(row?: Inbox): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id_inbox + 1
    }`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  }
}
