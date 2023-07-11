import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../shared/models/product.model';
import { FormService } from '../../shared/services/form.service';
import { HttpService } from '../../shared/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private fs: FormService,
    private http: HttpService,
    private route: ActivatedRoute
  ) {
    this.createContactForm();
    this.id = this.route.snapshot.paramMap.get('id');
  }

  @ViewChild('FormDirective') itemFormDirective: FormGroupDirective;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  itemForm: FormGroup;
  brands: Brand[] = [
    { value: 'megir m', viewValue: 'Megir M' },
    { value: 'megir w', viewValue: 'Megir W' },
    { value: 'cadisen', viewValue: 'Cadisen' },
    { value: 'ruimas', viewValue: 'Ruimas' },
  ];

  headerTitle: string = 'New Product';
  coverFile: File[] = [];
  files: File[] = [];
  textError: string = '';
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'id_product',
    'code',
    'stock',
    'edit',
    'delete',
  ];
  id: string = '';

  ngOnInit(): void {
    if (!this.id) this.getProduct();
    else this.editProduct(Number(this.id));
  }

  onSubmit() {
    if (this.invalid) return;

    const formData = new FormData();
    this.setFormData = formData;

    if (!this.id) this.newProduct(formData);
    else this.updateProduct(formData);
  }

  getProduct() {
    this.http
      .getProduct()
      .then((result) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
      })
      .catch((resError) => {
        this.fs.onNotifier(
          'Error',
          `${resError.status} ${resError.statusText} ${resError.error}`,
          'error'
        );
      });
  }

  newProduct(body) {
    this.http
      .createProduct(body)
      .then((result) => {
        this.fs.onNotifier(
          'New Product',
          `${this.code.value} has been created successfully`,
          'success'
        );
        this.onResetForm();
        this.bestseller.setValue(false);
      })
      .catch((resError) => {
        this.messageError = resError;
        this.fs.onNotifier(
          'Error',
          `${resError.status} ${resError.statusText}${this.textError}`,
          'error'
        );
      });
  }

  editProduct(id: number) {
    this.headerTitle = 'Edit Product';

    this.http
      .getProductById(id)
      .then(async (result) => {
        const coverUrl = `${environment.localhost}${result.product.cover}`;
        const cover64 = await this.getBase64ImageFromUrl(coverUrl);
        const coverName = coverUrl.split('/').pop();
        const coverFile = this.dataURLtoFile(cover64, coverName);
        this.coverFile.push(coverFile);
        this.cover.setValue(coverName);
        this.setFormGroup = result.product;

        const path = result.imagesList.map((data: any) => data.path);
        const filename = path.map((data) => data.split('/').pop());
        for (const data in path) {
          const url = `${environment.localhost}${path[data]}`;
          const image64 = await this.getBase64ImageFromUrl(url);
          const file = this.dataURLtoFile(image64, filename[data]);
          this.files.push(file);
          this.images.setValue(this.getFileName);
        }
      })
      .catch((resError) => {
        this.fs.onNotifier(
          'Error',
          `${resError.status} ${resError.statusText} ${resError.error}`,
          'error'
        );
      });
  }

  updateProduct(body: FormData) {
    body.append('id_product', this.id);
    this.http
      .updateProduct(body)
      .then((result) => {
        this.fs.onNotifier(
          'Update Item',
          `${this.code.value} has been updated successfully`,
          'success'
        );
      })
      .catch((resError) => {
        this.messageError = resError;
        this.fs.onNotifier(
          'Error',
          `${resError.status} ${resError.statusText}${this.textError}`,
          'error'
        );
      });
  }

  async getBase64ImageFromUrl(imageURL: string) {
    const result = await fetch(imageURL);
    const blob = await result.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener(
        'load',
        () => {
          resolve(reader.result);
        },
        false
      );

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    });
  }

  dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  onSelectCover(event) {
    if (this.coverFile.length >= 1) this.onRemoveCover(event);

    this.coverFile.push(...event.addedFiles);
    this.cover.setValue(this.getCoverName);
  }

  onRemoveCover(event) {
    this.coverFile.splice(this.coverFile.indexOf(event), 1);
    this.cover.setValue(this.getCoverName);
  }

  onSelect(event) {
    this.files.push(...event.addedFiles);
    this.images.setValue(this.getFileName);
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
    this.images.setValue(this.getFileName);
  }

  onResetForm() {
    this.itemFormDirective.resetForm();
    this.coverFile = [];
    this.files = [];
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private createContactForm() {
    this.itemForm = this.fb.group({
      title: ['', Validators.required],
      code: ['', Validators.required],
      brand: ['', Validators.required],
      color: ['', Validators.required],
      sale: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      bestseller: [false, Validators.required],
      description: ['', Validators.required],
      specifications: ['', Validators.required],
      cover: ['', Validators.required],
      status: [true, Validators.required],
      images: ['', Validators.required],
    });
  }

  set setFormGroup(data: Product) {
    this.title.setValue(data.title);
    this.code.setValue(data.code);
    this.brand.setValue(data.brand);
    this.color.setValue(data.color);
    this.sale.setValue(data.sale);
    this.price.setValue(data.price);
    this.stock.setValue(data.stock);
    this.bestseller.setValue(data.bestseller);
    this.description.setValue(data.description);
    this.specifications.setValue(data.specifications);
  }

  set setFormData(formData: FormData) {
    formData.append('title', this.title.value);
    formData.append('code', this.code.value);
    formData.append('brand', this.brand.value);
    formData.append('color', this.color.value);
    formData.append('sale', this.sale.value);
    formData.append('price', this.price.value);
    formData.append('stock', this.stock.value);
    formData.append('bestseller', this.bestseller.value);
    formData.append('description', this.description.value);
    formData.append('specifications', this.specifications.value);
    formData.append('cover', this.coverFile[0]);
    formData.append('status', this.status.value);
    this.files.forEach((file) => {
      formData.append('images', file);
    });
  }

  set messageError(resError) {
    this.textError = resError.error === null ? '' : `, ${resError.error}`;
  }

  get title() {
    return this.itemForm.get('title');
  }

  get code() {
    return this.itemForm.get('code');
  }

  get brand() {
    return this.itemForm.get('brand');
  }

  get color() {
    return this.itemForm.get('color');
  }

  get sale() {
    return this.itemForm.get('sale');
  }

  get price() {
    return this.itemForm.get('price');
  }

  get stock() {
    return this.itemForm.get('stock');
  }

  get bestseller() {
    return this.itemForm.get('bestseller');
  }

  get description() {
    return this.itemForm.get('description');
  }

  get specifications() {
    return this.itemForm.get('specifications');
  }

  get cover() {
    return this.itemForm.get('cover');
  }

  get status() {
    return this.itemForm.get('status');
  }

  get images() {
    return this.itemForm.get('images');
  }

  get getFileName() {
    return this.files.map((file) => file.name).join(', ');
  }

  get getCoverName() {
    return this.coverFile.map((file) => file.name).join(', ');
  }

  get invalid() {
    return this.itemForm.invalid;
  }
}

interface Brand {
  value: string;
  viewValue: string;
}
