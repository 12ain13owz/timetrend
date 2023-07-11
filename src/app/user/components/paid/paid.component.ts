import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../../shared/services/form.service';

@Component({
  selector: 'app-paid',
  templateUrl: './paid.component.html',
  styleUrls: ['./paid.component.scss'],
})
export class PaidComponent implements OnInit {
  constructor(private fs: FormService) {}
  track: string = '';

  ngOnInit(): void {
    this.track = this.fs.track;
  }
}
