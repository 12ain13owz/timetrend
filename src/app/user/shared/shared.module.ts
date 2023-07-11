import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';
import { FocusDirective } from './command/focus.directive';
import { FormService, HighlightPipe } from './services/form.service';
import { CartService } from './services/cart.service';
import { HttpService } from './services/http.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [FocusDirective, HighlightPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    LazyLoadImageModule,
    NgxDropzoneModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    FocusDirective,
    HighlightPipe,
    LazyLoadImageModule,
    NgxDropzoneModule,
  ],
  providers: [FormService, CartService, HttpService],
})
export class SharedModule {}
