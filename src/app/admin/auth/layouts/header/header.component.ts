import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/admin/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private ls: LoginService) {}

  @Output() sidenavToggle = new EventEmitter();

  subscribe: Subscription;
  title: string = '';

  ngOnInit(): void {
    this.title = this.getPath;
    this.subscribe = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) this.title = this.getPath;
      if (!isNaN(Number(this.title))) this.title = this.getPathOnId[0];
    });
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  onLogout() {
    this.ls.requestLogOut();
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  get getPath() {
    return this.router.url.split('/').pop();
  }

  get getPathOnId() {
    return this.router.url.split('/').slice(-2);
  }
}
