import { Component, OnInit } from '@angular/core';
import { FormService } from '../../shared/services/form.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor(public fs: FormService) {}

  ngOnInit(): void {
    this.fs.getInboxList();
    this.fs.getOrderList();
  }
}
