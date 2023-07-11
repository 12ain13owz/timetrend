import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartItem } from '../../shared/models/product.model';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private cs: CartService) {}

  @Output() public sidenavToggle = new EventEmitter();
  listItem: number = 0;

  ngOnInit(): void {
    this.cs.list$.subscribe((list) => {
      this.listItem = this.cs.getListItems;
    });
  }

  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
