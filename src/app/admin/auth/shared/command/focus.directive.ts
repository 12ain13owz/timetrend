import { Directive, AfterViewInit } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Directive({
  selector: '[matInputFocus]',
})
export class FocusDirective implements AfterViewInit {
  constructor(private mi: MatInput) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.mi.focus();
    }, 100);
  }
}
