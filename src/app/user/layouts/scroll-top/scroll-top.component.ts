import { Component, ChangeDetectorRef } from '@angular/core';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';
import { throttleTime } from 'rxjs/operators';
import { FormService } from '../../shared/services/form.service';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss'],
})
export class ScrollTopComponent {
  windowScrolled: boolean;
  lastOffset: number;

  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private cdr: ChangeDetectorRef,
    private fs: FormService
  ) {}

  ngAfterViewInit() {
    this.scrollDispatcher
      .scrolled()
      .pipe(throttleTime(100))
      .subscribe((scrollable: CdkScrollable) => {
        const scrollTop =
          scrollable.getElementRef().nativeElement.scrollTop || 0;

        if (scrollTop > 100) this.windowScrolled = true;
        else this.windowScrolled = false;
        this.cdr.detectChanges();
      });
  }

  onActivate() {
    const el: any = document.querySelector('mat-sidenav-content') || window;
    const duration: number = 800;
    this.fs.onScrolltoTop(el, duration);
  }
}
