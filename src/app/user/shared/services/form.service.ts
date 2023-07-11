import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubDistrict } from 'src/app/subdistrict';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private snackbar: MatSnackBar) {}

  track: string = '';
  options: string[] = SubDistrict;
  toHighlight: string = '';

  onScrolltoTop(el: any, duration: number) {
    let to = 0;
    let start = el.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animateScroll = () => {
      currentTime += increment;
      let val = easeInOutQuad(currentTime, start, change, duration);

      el.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    if (el.scrollTop > 100) animateScroll();
  }

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }

  filter(value: string): string[] {
    if (!value) return;

    const filterValue = value.toLowerCase();
    this.toHighlight = value;
    return this.options
      .filter((option) => option.toLowerCase().includes(filterValue))
      .slice(0, 20);
  }
}

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
  transform(text: string, search): string {
    const pattern = search
      .replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
      .split(' ')
      .filter((t) => t.length > 0)
      .join('|');
    const regex = new RegExp(pattern, 'gi');

    return search ? text.replace(regex, (match) => `<b>${match}</b>`) : text;
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
