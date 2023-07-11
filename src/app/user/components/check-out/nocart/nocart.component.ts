import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nocart',
  templateUrl: './nocart.component.html',
  styleUrls: ['./nocart.component.scss'],
})
export class NocartComponent implements OnInit {
  constructor() {}

  img = 'assets/img/shopping-cart.png';

  ngOnInit(): void {}
}
