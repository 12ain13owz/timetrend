import { Component, OnInit, ViewChild } from '@angular/core';
import { FormService } from './shared/services/form.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(private fs: FormService) {}

  ngOnInit(): void {}

  onActivate(): void {
    setTimeout(() => {
      const el: any = document.querySelector('mat-sidenav-content') || window;
      const duration: number = 0;
      this.fs.onScrolltoTop(el, duration);
    }, 100);
  }
}
