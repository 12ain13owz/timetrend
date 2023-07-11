import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from 'src/app/material.module';
import { FocusDirective } from './command/focus.directive';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { FormService } from './services/form.service';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [FocusDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    NgxDropzoneModule,
    SimpleNotificationsModule.forRoot(),
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    NgxDropzoneModule,
    FocusDirective,
    SimpleNotificationsModule,
  ],
  providers: [FormService, HttpService],
})
export class SharedModule {}
