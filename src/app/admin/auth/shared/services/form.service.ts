import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { LoginService } from 'src/app/admin/login/login.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(
    private fb: FormBuilder,
    private notifications: NotificationsService,
    private http: HttpService
  ) {
    this.createNotiForm();
  }
  notiForm: FormGroup;
  listInbox: number = 0;
  listOrder: number = 0;

  getInboxList() {
    this.http
      .getInboxList()
      .then((result) => (this.listInbox = result.inboxList));
  }

  getOrderList() {
    this.http
      .getOrderList()
      .then((result) => (this.listOrder = result.orderList));
  }

  onNotifier(title: string, content: string, type: any) {
    const temp = this.notiForm.getRawValue();
    this.notifications.create(title, content, type, temp);
  }

  private createNotiForm() {
    this.notiForm = this.fb.group({
      timeOut: 2500,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
      animate: 'fromRight',
    });
  }
}
