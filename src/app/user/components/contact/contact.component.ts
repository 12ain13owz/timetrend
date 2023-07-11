import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import {
  FormService,
  MyErrorStateMatcher,
} from '../../shared/services/form.service';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private fs: FormService,
    private http: HttpService
  ) {
    this.createContactForm();
  }

  @ViewChild('FormDirective') cdform: FormGroupDirective;
  cform: FormGroup;
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {}

  onSend() {
    if (this.cform.invalid) return;

    this.http
      .createInbox(this.cform.value)
      .then((result) => {
        this.fs.openSnackBar('Send message success.', 'X');
      })
      .catch((resError) => {
        this.fs.openSnackBar('Error. Please contact us.', 'X');
      });
    this.cdform.resetForm();
  }

  private createContactForm() {
    this.cform = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  get name() {
    return this.cform.get('name');
  }

  get email() {
    return this.cform.get('email');
  }

  get subject() {
    return this.cform.get('subject');
  }

  get content() {
    return this.cform.get('content');
  }
}
