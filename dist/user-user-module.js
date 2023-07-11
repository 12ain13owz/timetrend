(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "09FT":
/*!******************************************************!*\
  !*** ./src/app/user/shared/services/cart.service.ts ***!
  \******************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class CartService {
    constructor() {
        this.rawData = [];
        this.cartItem = 'cartItem';
        this.list = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.list$ = this.list.asObservable();
        this.setRawData = this.getItemInCart;
    }
    addNewItem(item) {
        const result = this.onFindItem(item);
        if (result) {
            result.quantity += item.quantity;
            this.checkQuantity(item);
        }
        else
            this.rawData.push(item);
        this.setItemInCart = this.rawData;
        this.list.next(this.rawData);
    }
    removeItem(item) {
        const result = this.onFindIndexItem(item);
        if (!isNaN(result))
            this.rawData.splice(result, 1);
        this.setItemInCart = this.rawData;
        this.list.next(this.rawData);
    }
    addQuantity(item) {
        const result = this.onFindItem(item);
        if (result)
            result.quantity += 1;
        this.setItemInCart = this.rawData;
        this.list.next(this.rawData);
    }
    removeQuantity(item) {
        const result = this.onFindItem(item);
        if (result)
            result.quantity -= 1;
        this.setItemInCart = this.rawData;
        this.list.next(this.rawData);
    }
    getQuantity(item) {
        const result = this.onFindItem(item);
        if (result)
            return result.quantity;
        else
            return 0;
    }
    checkQuantity(item) {
        const result = this.onFindItem(item);
        if (result)
            return (result.quantity =
                result.quantity > result.detail.stock
                    ? result.detail.stock
                    : result.quantity);
    }
    removeCartItem() {
        this.rawData = [];
        this.setItemInCart = this.rawData;
        this.list.next(this.rawData);
    }
    onFindItem(item) {
        return this.rawData
            .map((data) => data)
            .find((val) => val.detail.id_product == item.detail.id_product);
    }
    onFindIndexItem(item) {
        return this.rawData
            .map((data) => data)
            .findIndex((val) => val.detail.id_product == item.detail.id_product);
    }
    get getItem() {
        return this.rawData;
    }
    get getListItems() {
        return this.rawData.length;
    }
    get getTotal() {
        if (this.rawData.length > 0) {
            return this.rawData
                .map((data) => data.detail.sale * data.quantity)
                .reduce((a, b) => a + b);
        }
        return 0;
    }
    get getItemInCart() {
        return JSON.parse(localStorage.getItem(this.cartItem));
    }
    set setItemInCart(item) {
        localStorage.setItem(this.cartItem, JSON.stringify(item));
    }
    set setRawData(data) {
        if (data) {
            this.rawData = data;
            this.list.next(this.rawData);
        }
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "33kn":
/*!**********************************************!*\
  !*** ./src/app/user/shared/shared.module.ts ***!
  \**********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var _command_focus_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./command/focus.directive */ "n5nQ");
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/form.service */ "nLB4");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/cart.service */ "09FT");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/http.service */ "aX0s");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");













class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [_services_form_service__WEBPACK_IMPORTED_MODULE_7__["FormService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"], _services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImageModule"],
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_11__["NgxDropzoneModule"],
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImageModule"],
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_11__["NgxDropzoneModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_command_focus_directive__WEBPACK_IMPORTED_MODULE_6__["FocusDirective"], _services_form_service__WEBPACK_IMPORTED_MODULE_7__["HighlightPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImageModule"],
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_11__["NgxDropzoneModule"]], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _command_focus_directive__WEBPACK_IMPORTED_MODULE_6__["FocusDirective"],
        _services_form_service__WEBPACK_IMPORTED_MODULE_7__["HighlightPipe"],
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImageModule"],
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_11__["NgxDropzoneModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_command_focus_directive__WEBPACK_IMPORTED_MODULE_6__["FocusDirective"], _services_form_service__WEBPACK_IMPORTED_MODULE_7__["HighlightPipe"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImageModule"],
                    ngx_dropzone__WEBPACK_IMPORTED_MODULE_11__["NgxDropzoneModule"],
                ],
                exports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _command_focus_directive__WEBPACK_IMPORTED_MODULE_6__["FocusDirective"],
                    _services_form_service__WEBPACK_IMPORTED_MODULE_7__["HighlightPipe"],
                    ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImageModule"],
                    ngx_dropzone__WEBPACK_IMPORTED_MODULE_11__["NgxDropzoneModule"],
                ],
                providers: [_services_form_service__WEBPACK_IMPORTED_MODULE_7__["FormService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"], _services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "3bPX":
/*!**************************************************************!*\
  !*** ./src/app/user/components/product/product.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/form.service */ "nLB4");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/cart.service */ "09FT");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/http.service */ "aX0s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-drag-scroll */ "i7Yu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");

















const _c0 = ["nav"];
const _c1 = function (a0) { return [a0]; };
function ProductComponent_img_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_img_16_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const img_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onChangeImage(img_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r1.url + img_r3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProductComponent_li_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const spec_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](spec_r6);
} }
class ProductComponent {
    constructor(router, route, fs, cs, http) {
        this.router = router;
        this.route = route;
        this.fs = fs;
        this.cs = cs;
        this.http = http;
        this.id = '';
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].localhost;
        this.specs = [];
        this.quantity = 1;
        this.avalibility = '';
        this.number = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1');
        this.id = this.route.snapshot.paramMap.get('id');
        this.setProduct = Number(this.id);
    }
    ngOnInit() {
        this.getProductById();
    }
    getProductById() {
        if (this.id) {
            this.http.getProductById(Number(this.id)).then((result) => {
                this.product = result;
                this.setSpecs = this.product.detail.specifications;
                this.setAvalibility = this.product.detail.stock;
            });
        }
    }
    addToCart() {
        if (this.cs.getQuantity(this.getCartItem) >= this.getStock) {
            this.cs.checkQuantity(this.getCartItem);
            return this.fs.openSnackBar(`You can not choose more items than available. In stock ${this.getStock} items.`, 'X');
        }
        else {
            this.cs.addNewItem(this.getCartItem);
            return this.fs.openSnackBar(`The product ${this.getCartItem.detail.code}-${this.getCartItem.detail.color} has been added to cart`, 'X');
        }
    }
    onBuy() {
        this.cs.addNewItem(this.getCartItem);
        this.router.navigate(['checkout']);
    }
    moveLeft() {
        this.ds.moveLeft();
    }
    moveRight() {
        this.ds.moveRight();
    }
    onChangeImage(path) {
        this.product.detail.cover = path;
    }
    Add() {
        if (this.getCheckStock) {
            this.quantity += 1;
            this.number.setValue(this.quantity);
        }
    }
    Remove() {
        if (this.quantity <= 1)
            this.quantity = 1;
        else
            this.quantity -= 1;
        this.number.setValue(this.quantity);
    }
    NumberOnly(value) {
        value = value.replace(/[^1-9]/g, '');
        value = value == '' ? '1' : value;
        this.number.setValue(value);
        this.quantity = Number(value);
    }
    InputQuantity() {
        if (this.quantity > this.getStock)
            this.quantity = this.getStock;
        this.number.setValue(this.quantity);
    }
    set setProduct(value) {
        this.product = {
            detail: {
                id_product: value,
                title: '',
                code: '',
                brand: '',
                color: '',
                sale: 0,
                price: 0,
                stock: 0,
                description: '',
                specifications: '',
                cover: '',
            },
            imageList: [],
        };
    }
    set setSpecs(value) {
        this.specs = value.split(`\n`).map((data) => data.replace('-', '').trim());
    }
    set setAvalibility(value) {
        this.avalibility = value > 0 ? 'พร้อมส่ง' : 'หมด';
    }
    get getCheckStock() {
        return this.quantity < this.getCartItem.detail.stock;
    }
    get getCartItem() {
        const cartItem = {
            detail: {
                id_product: this.product.detail.id_product,
                code: this.product.detail.code,
                brand: this.product.detail.brand,
                color: this.product.detail.color,
                sale: this.product.detail.sale,
                price: this.product.detail.price,
                cover: this.product.detail.cover,
                stock: this.product.detail.stock,
            },
            quantity: this.quantity,
        };
        return cartItem;
    }
    get getStock() {
        return this.getCartItem.detail.stock;
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], viewQuery: function ProductComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ds = _t.first);
    } }, decls: 88, vars: 15, consts: [[1, "mb-50"], [1, "container-content"], ["fxLayout", "column", "fxFlex", "100"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxFlex", "100"], ["fxFlex", "40", "fxFlex.lt-sm", "100"], [1, "product-image"], ["mat-card-image", "", "alt", "product", 1, "img-size", 3, "src"], [1, "slider"], ["mat-mini-fab", "", 1, "left", 3, "click"], ["mat-mini-fab", "", 1, "right", 3, "click"], ["scrollbar-hidden", "true"], ["nav", ""], ["drag-scroll-item", "", 3, "src", "click", 4, "ngFor", "ngForOf"], ["fxFlex", "60", "fxFlex.lt-sm", "100"], [3, "ngClass.gt-xs"], [1, "product-detail"], [1, "product-title", "mb-18"], [1, "product-price", "mb-18"], [1, "sell"], [1, "price"], [1, "mb-18"], [1, "product-avalibility"], [1, "capitalize"], ["mat-icon-button", "", 3, "click"], [1, "input-number", 3, "formControl", "input", "focusout"], [2, "margin-left", "0"], ["mat-button", "", 1, "btn-buy", 3, "click"], ["mat-align-tabs", "start", "dynamicHeight", ""], ["label", "Specifications"], [1, "full-desc"], [4, "ngFor", "ngForOf"], ["label", "Water Resistant"], [1, "mb-8"], ["drag-scroll-item", "", 3, "src", "click"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_8_listener() { return ctx.moveLeft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_11_listener() { return ctx.moveRight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "drag-scroll", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProductComponent_img_16_Template, 1, 3, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E2A\u0E48\u0E07:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u0E08\u0E31\u0E14\u0E2A\u0E48\u0E07\u0E42\u0E14\u0E22\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 Kerry Express \u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E20\u0E32\u0E22\u0E43\u0E19 1-2 \u0E27\u0E31\u0E19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0E2A\u0E16\u0E32\u0E19\u0E30:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u0E41\u0E1A\u0E23\u0E19\u0E14\u0E4C:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0E04\u0E25\u0E31\u0E07:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0E08\u0E33\u0E19\u0E27\u0E19:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_53_listener() { return ctx.Remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ProductComponent_Template_input_input_56_listener() { return ctx.NumberOnly(ctx.number.value); })("focusout", function ProductComponent_Template_input_focusout_56_listener() { return ctx.InputQuantity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_57_listener() { return ctx.Add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-card-actions", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_61_listener() { return ctx.addToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " ADD TO CART ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_63_listener() { return ctx.onBuy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " BUY NOW ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-tab-group", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-tab", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ProductComponent_li_71_Template, 2, 1, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-tab", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E01\u0E31\u0E19\u0E19\u0E49\u0E33 \u0E04\u0E27\u0E32\u0E21\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "0 \u2013 1 ATM / 0 \u2013 10 M \u0E25\u0E49\u0E32\u0E07\u0E21\u0E37\u0E2D, \u0E1D\u0E19\u0E15\u0E01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "3 ATM / 30 M \u0E25\u0E49\u0E32\u0E07\u0E21\u0E37\u0E2D, \u0E1D\u0E19\u0E15\u0E01, \u0E25\u0E49\u0E32\u0E07\u0E23\u0E16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " 5 ATM / 50 M \u0E25\u0E49\u0E32\u0E07\u0E21\u0E37\u0E2D, \u0E1D\u0E19\u0E15\u0E01, \u0E25\u0E49\u0E32\u0E07\u0E23\u0E16, \u0E2D\u0E32\u0E1A\u0E19\u0E49\u0E33, \u0E27\u0E48\u0E32\u0E22\u0E19\u0E49\u0E33 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " 10 ATM / 100 M \u0E25\u0E49\u0E32\u0E07\u0E21\u0E37\u0E2D, \u0E1D\u0E19\u0E15\u0E01, \u0E25\u0E49\u0E32\u0E07\u0E23\u0E16, \u0E2D\u0E32\u0E1A\u0E19\u0E49\u0E33, \u0E27\u0E48\u0E32\u0E22\u0E19\u0E49\u0E33\u0E41\u0E25\u0E30 \u0E01\u0E32\u0E23\u0E14\u0E33\u0E19\u0E49\u0E33\u0E17\u0E30\u0E40\u0E25\u0E15\u0E37\u0E49\u0E19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " 20 ATM / 200 M \u0E25\u0E49\u0E32\u0E07\u0E21\u0E37\u0E2D, \u0E1D\u0E19\u0E15\u0E01, \u0E25\u0E49\u0E32\u0E07\u0E23\u0E16, \u0E2D\u0E32\u0E1A\u0E19\u0E49\u0E33, \u0E27\u0E48\u0E32\u0E22\u0E19\u0E49\u0E33, \u0E01\u0E32\u0E23\u0E14\u0E33\u0E19\u0E49\u0E33\u0E17\u0E30\u0E40\u0E25\u0E15\u0E37\u0E49\u0E19\u0E41\u0E25\u0E30 \u0E01\u0E32\u0E23\u0E14\u0E33\u0E19\u0E49\u0E33\u0E17\u0E30\u0E40\u0E25\u0E25\u0E36\u0E01 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " ** \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E01\u0E31\u0E19\u0E19\u0E49\u0E33\u0E17\u0E35\u0E48\u0E23\u0E30\u0E1A\u0E38\u0E44\u0E27\u0E49 \u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E2B\u0E21\u0E32\u0E22\u0E04\u0E27\u0E32\u0E21\u0E27\u0E48\u0E32 \u0E19\u0E32\u0E2C\u0E34\u0E01\u0E32\u0E40\u0E23\u0E37\u0E2D\u0E19\u0E19\u0E31\u0E49\u0E19\u0E46 \u0E08\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E25\u0E07\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E25\u0E36\u0E01\u0E19\u0E31\u0E49\u0E19\u0E44\u0E14\u0E49\u0E08\u0E23\u0E34\u0E07 \u0E41\u0E15\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E19\u0E01\u0E32\u0E23\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E41\u0E23\u0E07\u0E14\u0E31\u0E19 \u0E44\u0E14\u0E49\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E19\u0E49\u0E33\u0E25\u0E36\u0E01\u0E19\u0E31\u0E49\u0E19\u0E46 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.url + ctx.product.detail.cover), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product.imageList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.gt-xs", "product-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.product.detail.code, " ", ctx.product.detail.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.detail.sale, "\u0E3F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.detail.price, "\u0E3F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.detail.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.avalibility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.detail.brand, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.detail.stock, " \u0E0A\u0E37\u0E49\u0E19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.specs);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_11__["DragScrollComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultClassDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTab"], ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_11__["DragScrollItemDirective"]], styles: [".mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: #1e90ff !important;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #1e90ff;\n}\n\n .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #1e90ff;\n}\n\nul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.product-image[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.product-image[_ngcontent-%COMP%]   .mat-card-image[_ngcontent-%COMP%] {\n  margin-bottom: -22px;\n}\n\n.slider[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 20px;\n}\n\n.slider[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 50%;\n  background-color: inherit;\n  color: #fff;\n}\n\n.slider[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  left: 0%;\n}\n\n.slider[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  right: 0%;\n}\n\n.slider[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%]:hover {\n  background-color: #53d2dc;\n}\n\ndrag-scroll[_ngcontent-%COMP%] {\n  height: 200px;\n}\n\ndrag-scroll[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 8px;\n  margin-right: 10px;\n  width: 35%;\n  height: auto;\n  min-height: 140px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n  cursor: pointer;\n}\n\n.product-right[_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n\n.product-detail[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.product-detail[_ngcontent-%COMP%]   .mb-18[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n\n.product-detail[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 1;\n  letter-spacing: 0.02em;\n  color: #383838;\n}\n\n.product-detail[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 24px;\n  color: #ff3d71;\n}\n\n.product-detail[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #9e9e9e;\n  text-decoration: line-through;\n}\n\n.product-detail[_ngcontent-%COMP%]   .product-avalibility[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #777;\n}\n\n.product-detail[_ngcontent-%COMP%]   .input-number[_ngcontent-%COMP%] {\n  width: 60px;\n  text-align: center;\n  height: 35px;\n  border: 1px solid #c3c3c3;\n}\n\n.product-detail[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%] {\n  padding: 4px 20px;\n  color: #fff;\n  background-color: #1e90ff;\n}\n\n.full-desc[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.mb-8[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG9DQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFQVTtBQU1aOztBQUlBO0VBRUUscUJBWlU7QUFVWjs7QUFLQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0FBRkY7O0FBSUU7RUFDRSxvQkFBQTtBQUZKOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUhGOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0U7RUFDRSxRQUFBO0FBSEo7O0FBTUU7RUFDRSxTQUFBO0FBSko7O0FBT0U7RUFDRSx5QkFBQTtBQUxKOztBQVNBO0VBQ0UsYUFBQTtBQU5GOztBQVFFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFOSjs7QUFVQTtFQUNFLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtBQVBGOztBQVNFO0VBQ0UsbUJBQUE7QUFQSjs7QUFVRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFSSjs7QUFZSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFWTjs7QUFZSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUFWTjs7QUFlSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQWJOOztBQWlCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQWZKOztBQWtCRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBaEJKOztBQW9CQTtFQUNFLGFBQUE7QUFqQkY7O0FBb0JBO0VBQ0Usa0JBQUE7QUFqQkY7O0FBb0JBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQWpCRjs7QUFvQkE7RUFDRSwwQkFBQTtBQWpCRjs7QUFvQkE7RUFDRSwwQkFBQTtBQWpCRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udC1ibHVlOiAjMWU5MGZmO1xyXG5cclxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZvbnQtYmx1ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZvbnQtYmx1ZTtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZFxyXG4gIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcclxuICBib3JkZXItY29sb3I6ICRmb250LWJsdWU7XHJcbn1cclxuXHJcbnVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnByb2R1Y3QtaW1hZ2Uge1xyXG4gIGhlaWdodDogYXV0bztcclxuXHJcbiAgLm1hdC1jYXJkLWltYWdlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0yMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgLm1hdC1taW5pLWZhYiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5sZWZ0IHtcclxuICAgIGxlZnQ6IDAlO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0IHtcclxuICAgIHJpZ2h0OiAwJTtcclxuICB9XHJcblxyXG4gIC5tYXQtbWluaS1mYWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzZDJkYztcclxuICB9XHJcbn1cclxuXHJcbmRyYWctc2Nyb2xsIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDE0MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZHVjdC1yaWdodCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1kZXRhaWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gIC5tYi0xOCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgIGNvbG9yOiAjMzgzODM4O1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtcHJpY2Uge1xyXG4gICAgLnNlbGwge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBjb2xvcjogI2ZmM2Q3MTtcclxuICAgIH1cclxuICAgIC5wcmljZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtYXZhbGliaWxpdHkge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICBjb2xvcjogIzc3NztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbnB1dC1udW1iZXIge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzNjM2MzO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1idXkge1xyXG4gICAgcGFkZGluZzogNHB4IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTkwZmY7XHJcbiAgfVxyXG59XHJcblxyXG4uZnVsbC1kZXNjIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ubWItOCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcblxyXG4uY2FwaXRhbGl6ZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _shared_services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"] }, { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }, { type: _shared_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }]; }, { ds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nav']
        }] }); })();


/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/form.service */ "nLB4");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _layouts_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/sidenav/sidenav.component */ "lBxW");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/header/header.component */ "lpJk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/footer/footer.component */ "Sm8t");
/* harmony import */ var _layouts_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/scroll-top/scroll-top.component */ "AhG9");










class UserComponent {
    constructor(fs) {
        this.fs = fs;
    }
    ngOnInit() { }
    onActivate() {
        setTimeout(() => {
            const el = document.querySelector('mat-sidenav-content') || window;
            const duration = 0;
            this.fs.onScrolltoTop(el, duration);
        }, 100);
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_form_service__WEBPACK_IMPORTED_MODULE_1__["FormService"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 13, vars: 0, consts: [["role", "navigation"], ["sidenav", ""], [3, "sidenavClose"], ["cdkScrollable", ""], [1, "full-warpper"], [1, "container-fluid"], [3, "sidenavToggle"], [3, "activate"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-sidenav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavClose", function UserComponent_Template_app_sidenav_sidenavClose_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "header", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-header", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavToggle", function UserComponent_Template_app_header_sidenavToggle_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "main", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "router-outlet", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function UserComponent_Template_router_outlet_activate_9_listener() { return ctx.onActivate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "footer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-scroll-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _layouts_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContent"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["CdkScrollable"], _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _layouts_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_8__["ScrollTopComponent"]], styles: [".full-warpper[_ngcontent-%COMP%] {\n  margin: 0 35px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  background-color: #f1f4f7;\n}\n\n@media (max-width: 992px) {\n  .full-warpper[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBOzs7RUFHRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxTQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdhcnBwZXIge1xyXG4gIG1hcmdpbjogMCAzNXB4O1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250YWluZXIsXHJcbm1hdC1zaWRlbmF2LWNvbnRlbnQsXHJcbm1hdC1zaWRlbmF2IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjRmNztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmZ1bGwtd2FycHBlciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.scss'],
            }]
    }], function () { return [{ type: _shared_services_form_service__WEBPACK_IMPORTED_MODULE_1__["FormService"] }]; }, null); })();


/***/ }),

/***/ "7UCR":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ "33kn");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngmodule/material-carousel */ "XZNO");
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-drag-scroll */ "i7Yu");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "Yu5h");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.component */ "3nXK");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "mUWD");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shop/shop.component */ "zRJ8");
/* harmony import */ var _components_track_track_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/track/track.component */ "X6Av");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact/contact.component */ "Ncag");
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/header/header.component */ "lpJk");
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/footer/footer.component */ "Sm8t");
/* harmony import */ var _layouts_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/sidenav/sidenav.component */ "lBxW");
/* harmony import */ var _layouts_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/scroll-top/scroll-top.component */ "AhG9");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/product/product.component */ "3bPX");
/* harmony import */ var _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/check-out/check-out.component */ "rlWh");
/* harmony import */ var _components_check_out_nocart_nocart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/check-out/nocart/nocart.component */ "oJWT");
/* harmony import */ var _components_paid_paid_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/paid/paid.component */ "laRj");





















class UserModule {
}
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserModule_Factory(t) { return new (t || UserModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRoutingModule"],
            _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_3__["MatCarouselModule"].forRoot(),
            ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_4__["DragScrollModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_8__["ShopComponent"],
        _components_track_track_component__WEBPACK_IMPORTED_MODULE_9__["TrackComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
        _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
        _layouts_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_13__["SidenavComponent"],
        _layouts_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_14__["ScrollTopComponent"],
        _components_product_product_component__WEBPACK_IMPORTED_MODULE_15__["ProductComponent"],
        _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_16__["CheckOutComponent"],
        _components_check_out_nocart_nocart_component__WEBPACK_IMPORTED_MODULE_17__["NocartComponent"],
        _components_paid_paid_component__WEBPACK_IMPORTED_MODULE_18__["PaidComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRoutingModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_3__["MatCarouselModule"], ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_4__["DragScrollModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_8__["ShopComponent"],
                    _components_track_track_component__WEBPACK_IMPORTED_MODULE_9__["TrackComponent"],
                    _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                    _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                    _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                    _layouts_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_13__["SidenavComponent"],
                    _layouts_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_14__["ScrollTopComponent"],
                    _components_product_product_component__WEBPACK_IMPORTED_MODULE_15__["ProductComponent"],
                    _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_16__["CheckOutComponent"],
                    _components_check_out_nocart_nocart_component__WEBPACK_IMPORTED_MODULE_17__["NocartComponent"],
                    _components_paid_paid_component__WEBPACK_IMPORTED_MODULE_18__["PaidComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRoutingModule"],
                    _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_3__["MatCarouselModule"].forRoot(),
                    ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_4__["DragScrollModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "AhG9":
/*!*****************************************************************!*\
  !*** ./src/app/user/layouts/scroll-top/scroll-top.component.ts ***!
  \*****************************************************************/
/*! exports provided: ScrollTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopComponent", function() { return ScrollTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _shared_services_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/form.service */ "nLB4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









const _c0 = function (a0) { return { "show-scrollTop": a0 }; };
class ScrollTopComponent {
    constructor(scrollDispatcher, cdr, fs) {
        this.scrollDispatcher = scrollDispatcher;
        this.cdr = cdr;
        this.fs = fs;
    }
    ngAfterViewInit() {
        this.scrollDispatcher
            .scrolled()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(100))
            .subscribe((scrollable) => {
            const scrollTop = scrollable.getElementRef().nativeElement.scrollTop || 0;
            if (scrollTop > 100)
                this.windowScrolled = true;
            else
                this.windowScrolled = false;
            this.cdr.detectChanges();
        });
    }
    onActivate() {
        const el = document.querySelector('mat-sidenav-content') || window;
        const duration = 800;
        this.fs.onScrolltoTop(el, duration);
    }
}
ScrollTopComponent.ɵfac = function ScrollTopComponent_Factory(t) { return new (t || ScrollTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_form_service__WEBPACK_IMPORTED_MODULE_3__["FormService"])); };
ScrollTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollTopComponent, selectors: [["app-scroll-top"]], decls: 4, vars: 3, consts: [[1, "scroll-to-top", 3, "ngClass"], ["mat-mini-fab", "", 1, "btn-top", 3, "click"]], template: function ScrollTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollTopComponent_Template_button_click_1_listener() { return ctx.onActivate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_upward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.windowScrolled));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: [".scroll-to-top[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: fixed;\n  height: 50px;\n  width: 50px;\n  right: 40px;\n  bottom: 25px;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n\n.show-scrollTop[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.btn-top[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background-color: #60b0f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sYXlvdXRzL3Njcm9sbC10b3Avc2Nyb2xsLXRvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9sYXlvdXRzL3Njcm9sbC10b3Avc2Nyb2xsLXRvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtdG8tdG9wIHtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICByaWdodDogNDBweDtcclxuICBib3R0b206IDI1cHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XHJcbn1cclxuXHJcbi5zaG93LXNjcm9sbFRvcCB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmJ0bi10b3Age1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBiMGY0O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scroll-top',
                templateUrl: './scroll-top.component.html',
                styleUrls: ['./scroll-top.component.scss'],
            }]
    }], function () { return [{ type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _shared_services_form_service__WEBPACK_IMPORTED_MODULE_3__["FormService"] }]; }, null); })();


/***/ }),

/***/ "DjzE":
/*!********************************!*\
  !*** ./src/app/subdistrict.ts ***!
  \********************************/
/*! exports provided: SubDistrict */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubDistrict", function() { return SubDistrict; });
const SubDistrict = [
    "แขวงคลองมหานาค, เขตป้อมปราบศัตรูพ่าย, กรุงเทพมหานคร, 10100",
    "แขวงบ้านบาตร, เขตป้อมปราบศัตรูพ่าย, กรุงเทพมหานคร, 10100",
    "แขวงป้อมปราบ, เขตป้อมปราบศัตรูพ่าย, กรุงเทพมหานคร, 10100",
    "แขวงวัดเทพศิรินทร์, เขตป้อมปราบศัตรูพ่าย, กรุงเทพมหานคร, 10100",
    "แขวงวัดโสมนัส, เขตป้อมปราบศัตรูพ่าย, กรุงเทพมหานคร, 10100",
    "แขวงจักรวรรดิ, เขตสัมพันธวงศ์, กรุงเทพมหานคร, 10100",
    "แขวงตลาดน้อย, เขตสัมพันธวงศ์, กรุงเทพมหานคร, 10100",
    "แขวงสัมพันธวงศ์, เขตสัมพันธวงศ์, กรุงเทพมหานคร, 10100",
    "แขวงคลองเตย, เขตคลองเตย, กรุงเทพมหานคร, 10110",
    "แขวงคลองตัน, เขตคลองเตย, กรุงเทพมหานคร, 10110",
    "แขวงพระโขนง, เขตคลองเตย, กรุงเทพมหานคร, 10110",
    "แขวงคลองเตยเหนือ, เขตวัฒนา, กรุงเทพมหานคร, 10110",
    "แขวงคลองตันเหนือ, เขตวัฒนา, กรุงเทพมหานคร, 10110",
    "แขวงพระโขนงเหนือ, เขตวัฒนา, กรุงเทพมหานคร, 10110",
    "แขวงบางโคล่, เขตบางคอแหลม, กรุงเทพมหานคร, 10120",
    "แขวงบางคอแหลม, เขตบางคอแหลม, กรุงเทพมหานคร, 10120",
    "แขวงวัดพระยาไกร, เขตบางคอแหลม, กรุงเทพมหานคร, 10120",
    "แขวงช่องนนทรี, เขตยานนาวา, กรุงเทพมหานคร, 10120",
    "แขวงบางโพงพาง, เขตยานนาวา, กรุงเทพมหานคร, 10120",
    "แขวงทุ่งมหาเมฆ, เขตสาทร, กรุงเทพมหานคร, 10120",
    "แขวงทุ่งวัดดอน, เขตสาทร, กรุงเทพมหานคร, 10120",
    "แขวงยานนาวา, เขตสาทร, กรุงเทพมหานคร, 10120",
    "ตำบลตลาด, อำเภอพระประแดง, สมุทรปราการ, 10130",
    "ตำบลทรงคนอง, อำเภอพระประแดง, สมุทรปราการ, 10130",
    "ตำบลบางกระสอบ, อำเภอพระประแดง, สมุทรปราการ, 10130",
    "ตำบลบางกอบัว, อำเภอพระประแดง, สมุทรปราการ, 10130",
    "ตำบลบางกะเจ้า, อำเภอพระประแดง, สมุทรปราการ, 10130",
    "ตำบลบางครุ, อำเภอพระประแดง, สมุทรปราการ, 10130",
    "ตำบลบางจาก, อำเภอพระประแดง, สมุทรปราการ, 10130",
    "ตำบลบางน้ำผึ้ง, อำเภอพระประแดง, สมุทรปราการ, 10130",
    "ตำบลบางพึ่ง, อำเภอพระประแดง, สมุทรปราการ, 10130",
    "ตำบลบางยอ, อำเภอพระประแดง, สมุทรปราการ, 10130",
    "ตำบลบางหญ้าแพรก, อำเภอพระประแดง, สมุทรปราการ, 10130",
    "ตำบลบางหัวเสือ, อำเภอพระประแดง, สมุทรปราการ, 10130",
    "ตำบลสำโรง, อำเภอพระประแดง, สมุทรปราการ, 10130",
    "ตำบลสำโรงใต้, อำเภอพระประแดง, สมุทรปราการ, 10130",
    "ตำบลสำโรงกลาง, อำเภอพระประแดง, สมุทรปราการ, 10130",
    "แขวงทุ่งครุ, เขตทุ่งครุ, กรุงเทพมหานคร, 10140",
    "แขวงบางมด, เขตทุ่งครุ, กรุงเทพมหานคร, 10140",
    "แขวงบางปะกอก, เขตราษฎร์บูรณะ, กรุงเทพมหานคร, 10140",
    "แขวงราษฎร์บูรณะ, เขตราษฎร์บูรณะ, กรุงเทพมหานคร, 10140",
    "แขวงจอมทอง, เขตจอมทอง, กรุงเทพมหานคร, 10150",
    "แขวงบางขุนเทียน, เขตจอมทอง, กรุงเทพมหานคร, 10150",
    "แขวงบางค้อ, เขตจอมทอง, กรุงเทพมหานคร, 10150",
    "แขวงบางมด, เขตจอมทอง, กรุงเทพมหานคร, 10150",
    "แขวงแสมดำ, เขตบางขุนเทียน, กรุงเทพมหานคร, 10150",
    "แขวงท่าข้าม, เขตบางขุนเทียน, กรุงเทพมหานคร, 10150",
    "แขวงบางบอน, เขตบางบอน, กรุงเทพมหานคร, 10150",
    "แขวงบางแค, เขตบางแค, กรุงเทพมหานคร, 10160",
    "แขวงบางแคเหนือ, เขตบางแค, กรุงเทพมหานคร, 10160",
    "แขวงบางไผ่, เขตบางแค, กรุงเทพมหานคร, 10160",
    "แขวงหลักสอง, เขตบางแค, กรุงเทพมหานคร, 10160",
    "แขวงคลองขวาง, เขตภาษีเจริญ, กรุงเทพมหานคร, 10160",
    "แขวงคูหาสวรรค์, เขตภาษีเจริญ, กรุงเทพมหานคร, 10160",
    "แขวงบางแวก, เขตภาษีเจริญ, กรุงเทพมหานคร, 10160",
    "แขวงบางจาก, เขตภาษีเจริญ, กรุงเทพมหานคร, 10160",
    "แขวงบางด้วน, เขตภาษีเจริญ, กรุงเทพมหานคร, 10160",
    "แขวงบางหว้า, เขตภาษีเจริญ, กรุงเทพมหานคร, 10160",
    "แขวงปากคลองภาษีเจริญ, เขตภาษีเจริญ, กรุงเทพมหานคร, 10160",
    "แขวงหนองแขม, เขตหนองแขม, กรุงเทพมหานคร, 10160",
    "แขวงหนองค้างพลู, เขตหนองแขม, กรุงเทพมหานคร, 10160",
    "แขวงคลองชักพระ, เขตตลิ่งชัน, กรุงเทพมหานคร, 10170",
    "แขวงฉิมพลี, เขตตลิ่งชัน, กรุงเทพมหานคร, 10170",
    "แขวงตลิ่งชัน, เขตตลิ่งชัน, กรุงเทพมหานคร, 10170",
    "แขวงบางเชือกหนัง, เขตตลิ่งชัน, กรุงเทพมหานคร, 10170",
    "แขวงบางพรม, เขตตลิ่งชัน, กรุงเทพมหานคร, 10170",
    "แขวงบางระมาด, เขตตลิ่งชัน, กรุงเทพมหานคร, 10170",
    "แขวงทวีวัฒนา, เขตทวีวัฒนา, กรุงเทพมหานคร, 10170",
    "แขวงศาลาธรรมสพน์, เขตทวีวัฒนา, กรุงเทพมหานคร, 10170",
    "แขวงเสาชิงช้า, เขตพระนคร, กรุงเทพมหานคร, 10200",
    "แขวงชนะสงคราม, เขตพระนคร, กรุงเทพมหานคร, 10200",
    "แขวงตลาดยอด, เขตพระนคร, กรุงเทพมหานคร, 10200",
    "แขวงบวรนิเวศ, เขตพระนคร, กรุงเทพมหานคร, 10200",
    "แขวงบางขุนพรหม, เขตพระนคร, กรุงเทพมหานคร, 10200",
    "แขวงบ้านพานถม, เขตพระนคร, กรุงเทพมหานคร, 10200",
    "แขวงพระบรมมหาราชวัง, เขตพระนคร, กรุงเทพมหานคร, 10200",
    "แขวงวังบูรพาภิรมย์, เขตพระนคร, กรุงเทพมหานคร, 10200",
    "แขวงวัดราชบพิธ, เขตพระนคร, กรุงเทพมหานคร, 10200",
    "แขวงวัดสามพระยา, เขตพระนคร, กรุงเทพมหานคร, 10200",
    "แขวงศาลเจ้าพ่อเสือ, เขตพระนคร, กรุงเทพมหานคร, 10200",
    "แขวงสำราญราษฎร์, เขตพระนคร, กรุงเทพมหานคร, 10200",
    "แขวงดอนเมือง, เขตดอนเมือง, กรุงเทพมหานคร, 10210",
    "แขวงสนามบิน, เขตดอนเมือง, กรุงเทพมหานคร, 10210",
    "แขวงสีกัน, เขตดอนเมือง, กรุงเทพมหานคร, 10210",
    "แขวงตลาดบางเขน, เขตหลักสี่, กรุงเทพมหานคร, 10210",
    "แขวงทุ่งสองห้อง, เขตหลักสี่, กรุงเทพมหานคร, 10210",
    "แขวงท่าแร้ง, เขตบางเขน, กรุงเทพมหานคร, 10220",
    "แขวงอนุสาวรีย์, เขตบางเขน, กรุงเทพมหานคร, 10220",
    "แขวงคลองถนน, เขตสายไหม, กรุงเทพมหานคร, 10220",
    "แขวงสายไหม, เขตสายไหม, กรุงเทพมหานคร, 10220",
    "แขวงออเงิน, เขตสายไหม, กรุงเทพมหานคร, 10220",
    "แขวงคันนายาว, เขตคันนายาว, กรุงเทพมหานคร, 10230",
    "แขวงรามอินทรา, เขตคันนายาว, กรุงเทพมหานคร, 10230",
    "แขวงจรเข้บัว, เขตลาดพร้าว, กรุงเทพมหานคร, 10230",
    "แขวงลาดพร้าว, เขตลาดพร้าว, กรุงเทพมหานคร, 10230",
    "แขวงคลองจั่น, เขตบางกะปิ, กรุงเทพมหานคร, 10240",
    "แขวงหัวหมาก, เขตบางกะปิ, กรุงเทพมหานคร, 10240",
    "แขวงคลองกุ่ม, เขตบึงกุ่ม, กรุงเทพมหานคร, 10240",
    "แขวงนวมินทร์, เขตบึงกุ่ม, กรุงเทพมหานคร, 10240",
    "แขวงนวลจันทร์, เขตบึงกุ่ม, กรุงเทพมหานคร, 10240",
    "แขวงสะพานสูง, เขตสะพานสูง, กรุงเทพมหานคร, 10240",
    "แขวงดอกไม้, เขตประเวศ, กรุงเทพมหานคร, 10250",
    "แขวงประเวศ, เขตประเวศ, กรุงเทพมหานคร, 10250",
    "แขวงหนองบอน, เขตประเวศ, กรุงเทพมหานคร, 10250",
    "แขวงสวนหลวง, เขตสวนหลวง, กรุงเทพมหานคร, 10250",
    "แขวงบางนา, เขตบางนา, กรุงเทพมหานคร, 10260",
    "แขวงบางจาก, เขตพระโขนง, กรุงเทพมหานคร, 10260",
    "ตำบลเทพารักษ์, อำเภอเมืองสมุทรปราการ, สมุทรปราการ, 10270",
    "ตำบลบางเมือง, อำเภอเมืองสมุทรปราการ, สมุทรปราการ, 10270",
    "ตำบลบางเมืองใหม่, อำเภอเมืองสมุทรปราการ, สมุทรปราการ, 10270",
    "ตำบลบางโปรง, อำเภอเมืองสมุทรปราการ, สมุทรปราการ, 10270",
    "ตำบลบางด้วน, อำเภอเมืองสมุทรปราการ, สมุทรปราการ, 10270",
    "ตำบลปากน้ำ, อำเภอเมืองสมุทรปราการ, สมุทรปราการ, 10270",
    "ตำบลสำโรงเหนือ, อำเภอเมืองสมุทรปราการ, สมุทรปราการ, 10270",
    "ตำบลแพรกษา, อำเภอเมืองสมุทรปราการ, สมุทรปราการ, 10280",
    "ตำบลแพรกษาใหม่, อำเภอเมืองสมุทรปราการ, สมุทรปราการ, 10280",
    "ตำบลท้ายบ้าน, อำเภอเมืองสมุทรปราการ, สมุทรปราการ, 10280",
    "ตำบลท้ายบ้านใหม่, อำเภอเมืองสมุทรปราการ, สมุทรปราการ, 10280",
    "ตำบลบางปู, อำเภอเมืองสมุทรปราการ, สมุทรปราการ, 10280",
    "ตำบลบางปูใหม่, อำเภอเมืองสมุทรปราการ, สมุทรปราการ, 10280",
    "ตำบลแหลมฟ้าผ่า, อำเภอพระสมุทรเจดีย์, สมุทรปราการ, 10290",
    "ตำบลในคลองบางปลากด, อำเภอพระสมุทรเจดีย์, สมุทรปราการ, 10290",
    "ตำบลนาเกลือ, อำเภอพระสมุทรเจดีย์, สมุทรปราการ, 10290",
    "ตำบลบ้านคลองสวน, อำเภอพระสมุทรเจดีย์, สมุทรปราการ, 10290",
    "ตำบลปากคลองบางปลากด, อำเภอพระสมุทรเจดีย์, สมุทรปราการ, 10290",
    "แขวงดุสิต, เขตดุสิต, กรุงเทพมหานคร, 10300",
    "แขวงถนนนครไชยศรี, เขตดุสิต, กรุงเทพมหานคร, 10300",
    "แขวงวชิรพยาบาล, เขตดุสิต, กรุงเทพมหานคร, 10300",
    "แขวงสวนจิตรลดา, เขตดุสิต, กรุงเทพมหานคร, 10300",
    "แขวงสี่แยกมหานาค, เขตดุสิต, กรุงเทพมหานคร, 10300",
    "แขวงคลองเจ้าคุณสิงห์, เขตวังทองหลาง, กรุงเทพมหานคร, 10310",
    "แขวงพลับพลา, เขตวังทองหลาง, กรุงเทพมหานคร, 10310",
    "แขวงวังทองหลาง, เขตวังทองหลาง, กรุงเทพมหานคร, 10310",
    "แขวงสะพานสอง, เขตวังทองหลาง, กรุงเทพมหานคร, 10310",
    "แขวงบางกะปิ, เขตห้วยขวาง, กรุงเทพมหานคร, 10310",
    "แขวงสามเสนนอก, เขตห้วยขวาง, กรุงเทพมหานคร, 10310",
    "แขวงห้วยขวาง, เขตห้วยขวาง, กรุงเทพมหานคร, 10310",
    "แขวงปทุมวัน, เขตปทุมวัน, กรุงเทพมหานคร, 10330",
    "แขวงรองเมือง, เขตปทุมวัน, กรุงเทพมหานคร, 10330",
    "แขวงลุมพินี, เขตปทุมวัน, กรุงเทพมหานคร, 10330",
    "แขวงวังใหม่, เขตปทุมวัน, กรุงเทพมหานคร, 10330",
    "แขวงดินแดง, เขตดินแดง, กรุงเทพมหานคร, 10400",
    "แขวงสามเสนใน, เขตพญาไท, กรุงเทพมหานคร, 10400",
    "แขวงถนนเพชรบุรี, เขตราชเทวี, กรุงเทพมหานคร, 10400",
    "แขวงถนนพญาไท, เขตราชเทวี, กรุงเทพมหานคร, 10400",
    "แขวงทุ่งพญาไท, เขตราชเทวี, กรุงเทพมหานคร, 10400",
    "แขวงมักกะสัน, เขตราชเทวี, กรุงเทพมหานคร, 10400",
    "แขวงบางรัก, เขตบางรัก, กรุงเทพมหานคร, 10500",
    "แขวงมหาพฤฒาราม, เขตบางรัก, กรุงเทพมหานคร, 10500",
    "แขวงสี่พระยา, เขตบางรัก, กรุงเทพมหานคร, 10500",
    "แขวงสีลม, เขตบางรัก, กรุงเทพมหานคร, 10500",
    "แขวงสุริยวงศ์, เขตบางรัก, กรุงเทพมหานคร, 10500",
    "แขวงทรายกองดิน, เขตคลองสามวา, กรุงเทพมหานคร, 10510",
    "แขวงทรายกองดินใต้, เขตคลองสามวา, กรุงเทพมหานคร, 10510",
    "แขวงบางชัน, เขตคลองสามวา, กรุงเทพมหานคร, 10510",
    "แขวงสามวาตะวันตก, เขตคลองสามวา, กรุงเทพมหานคร, 10510",
    "แขวงสามวาตะวันออก, เขตคลองสามวา, กรุงเทพมหานคร, 10510",
    "แขวงแสนแสบ, เขตมีนบุรี, กรุงเทพมหานคร, 10510",
    "แขวงมีนบุรี, เขตมีนบุรี, กรุงเทพมหานคร, 10510",
    "แขวงขุมทอง, เขตลาดกระบัง, กรุงเทพมหานคร, 10520",
    "แขวงคลองสองต้นนุ่น, เขตลาดกระบัง, กรุงเทพมหานคร, 10520",
    "แขวงคลองสามประเวศ, เขตลาดกระบัง, กรุงเทพมหานคร, 10520",
    "แขวงทับยาว, เขตลาดกระบัง, กรุงเทพมหานคร, 10520",
    "แขวงลาดกระบัง, เขตลาดกระบัง, กรุงเทพมหานคร, 10520",
    "แขวงลำปลาทิว, เขตลาดกระบัง, กรุงเทพมหานคร, 10520",
    "แขวงโคกแฝด, เขตหนองจอก, กรุงเทพมหานคร, 10530",
    "แขวงกระทุ่มราย, เขตหนองจอก, กรุงเทพมหานคร, 10530",
    "แขวงคลองสิบ, เขตหนองจอก, กรุงเทพมหานคร, 10530",
    "แขวงคลองสิบสอง, เขตหนองจอก, กรุงเทพมหานคร, 10530",
    "แขวงคู้ฝั่งเหนือ, เขตหนองจอก, กรุงเทพมหานคร, 10530",
    "แขวงลำต้อยติ่ง, เขตหนองจอก, กรุงเทพมหานคร, 10530",
    "แขวงลำผักชี, เขตหนองจอก, กรุงเทพมหานคร, 10530",
    "แขวงหนองจอก, เขตหนองจอก, กรุงเทพมหานคร, 10530",
    "ตำบลบางแก้ว, อำเภอบางพลี, สมุทรปราการ, 10540",
    "ตำบลบางโฉลง, อำเภอบางพลี, สมุทรปราการ, 10540",
    "ตำบลบางปลา, อำเภอบางพลี, สมุทรปราการ, 10540",
    "ตำบลบางพลีใหญ่, อำเภอบางพลี, สมุทรปราการ, 10540",
    "ตำบลราชาเทวะ, อำเภอบางพลี, สมุทรปราการ, 10540",
    "ตำบลหนองปรือ, อำเภอบางพลี, สมุทรปราการ, 10540",
    "ตำบลคลองด่าน, อำเภอบางบ่อ, สมุทรปราการ, 10550",
    "ตำบลเปร็ง, อำเภอบางบ่อ, สมุทรปราการ, 10560",
    "ตำบลคลองนิยมยาตรา, อำเภอบางบ่อ, สมุทรปราการ, 10560",
    "ตำบลคลองสวน, อำเภอบางบ่อ, สมุทรปราการ, 10560",
    "ตำบลบางเพรียง, อำเภอบางบ่อ, สมุทรปราการ, 10560",
    "ตำบลบางบ่อ, อำเภอบางบ่อ, สมุทรปราการ, 10560",
    "ตำบลบางพลีน้อย, อำเภอบางบ่อ, สมุทรปราการ, 10560",
    "ตำบลบ้านระกาศ, อำเภอบางบ่อ, สมุทรปราการ, 10560",
    "ตำบลบางเสาธง, อำเภอบางเสาธง, สมุทรปราการ, 10570",
    "ตำบลศีรษะจรเข้ใหญ่, อำเภอบางเสาธง, สมุทรปราการ, 10570",
    "ตำบลศีรษะจรเข้น้อย, อำเภอบางเสาธง, สมุทรปราการ, 10570",
    "แขวงคลองต้นไทร, เขตคลองสาน, กรุงเทพมหานคร, 10600",
    "แขวงคลองสาน, เขตคลองสาน, กรุงเทพมหานคร, 10600",
    "แขวงบางลำภูล่าง, เขตคลองสาน, กรุงเทพมหานคร, 10600",
    "แขวงสมเด็จเจ้าพระยา, เขตคลองสาน, กรุงเทพมหานคร, 10600",
    "แขวงดาวคะนอง, เขตธนบุรี, กรุงเทพมหานคร, 10600",
    "แขวงตลาดพลู, เขตธนบุรี, กรุงเทพมหานคร, 10600",
    "แขวงบางยี่เรือ, เขตธนบุรี, กรุงเทพมหานคร, 10600",
    "แขวงบุคคโล, เขตธนบุรี, กรุงเทพมหานคร, 10600",
    "แขวงวัดกัลยาณ์, เขตธนบุรี, กรุงเทพมหานคร, 10600",
    "แขวงสำเหร่, เขตธนบุรี, กรุงเทพมหานคร, 10600",
    "แขวงหิรัญรูจี, เขตธนบุรี, กรุงเทพมหานคร, 10600",
    "แขวงวัดท่าพระ, เขตบางกอกใหญ่, กรุงเทพมหานคร, 10600",
    "แขวงวัดอรุณ, เขตบางกอกใหญ่, กรุงเทพมหานคร, 10600",
    "แขวงบางขุนนนท์, เขตบางกอกน้อย, กรุงเทพมหานคร, 10700",
    "แขวงบางขุนศรี, เขตบางกอกน้อย, กรุงเทพมหานคร, 10700",
    "แขวงบ้านช่างหล่อ, เขตบางกอกน้อย, กรุงเทพมหานคร, 10700",
    "แขวงศิริราช, เขตบางกอกน้อย, กรุงเทพมหานคร, 10700",
    "แขวงอรุณอมรินทร์, เขตบางกอกน้อย, กรุงเทพมหานคร, 10700",
    "แขวงบางบำหรุ, เขตบางพลัด, กรุงเทพมหานคร, 10700",
    "แขวงบางพลัด, เขตบางพลัด, กรุงเทพมหานคร, 10700",
    "แขวงบางยี่ขัน, เขตบางพลัด, กรุงเทพมหานคร, 10700",
    "แขวงบางอ้อ, เขตบางพลัด, กรุงเทพมหานคร, 10700",
    "แขวงบางซื่อ, เขตบางซื่อ, กรุงเทพมหานคร, 10800",
    "แขวงวงศ์สว่าง, เขตบางซื่อ, กรุงเทพมหานคร, 10800",
    "แขวงเสนานิคม, เขตจตุจักร, กรุงเทพมหานคร, 10900",
    "แขวงจตุจักร, เขตจตุจักร, กรุงเทพมหานคร, 10900",
    "แขวงจอมพล, เขตจตุจักร, กรุงเทพมหานคร, 10900",
    "แขวงจันทรเกษม, เขตจตุจักร, กรุงเทพมหานคร, 10900",
    "แขวงลาดยาว, เขตจตุจักร, กรุงเทพมหานคร, 10900",
    "ตำบลไทรม้า, อำเภอเมืองนนทบุรี, นนทบุรี, 11000",
    "ตำบลตลาดขวัญ, อำเภอเมืองนนทบุรี, นนทบุรี, 11000",
    "ตำบลท่าทราย, อำเภอเมืองนนทบุรี, นนทบุรี, 11000",
    "ตำบลบางเขน, อำเภอเมืองนนทบุรี, นนทบุรี, 11000",
    "ตำบลบางไผ่, อำเภอเมืองนนทบุรี, นนทบุรี, 11000",
    "ตำบลบางกระสอ, อำเภอเมืองนนทบุรี, นนทบุรี, 11000",
    "ตำบลบางกร่าง, อำเภอเมืองนนทบุรี, นนทบุรี, 11000",
    "ตำบลบางรักน้อย, อำเภอเมืองนนทบุรี, นนทบุรี, 11000",
    "ตำบลบางศรีเมือง, อำเภอเมืองนนทบุรี, นนทบุรี, 11000",
    "ตำบลสวนใหญ่, อำเภอเมืองนนทบุรี, นนทบุรี, 11000",
    "ตำบลโสนลอย, อำเภอบางบัวทอง, นนทบุรี, 11110",
    "ตำบลบางคูรัด, อำเภอบางบัวทอง, นนทบุรี, 11110",
    "ตำบลบางบัวทอง, อำเภอบางบัวทอง, นนทบุรี, 11110",
    "ตำบลบางรักใหญ่, อำเภอบางบัวทอง, นนทบุรี, 11110",
    "ตำบลบางรักพัฒนา, อำเภอบางบัวทอง, นนทบุรี, 11110",
    "ตำบลพิมลราช, อำเภอบางบัวทอง, นนทบุรี, 11110",
    "ตำบลละหาร, อำเภอบางบัวทอง, นนทบุรี, 11110",
    "ตำบลลำโพ, อำเภอบางบัวทอง, นนทบุรี, 11110",
    "ตำบลเกาะเกร็ด, อำเภอปากเกร็ด, นนทบุรี, 11120",
    "ตำบลคลองเกลือ, อำเภอปากเกร็ด, นนทบุรี, 11120",
    "ตำบลคลองข่อย, อำเภอปากเกร็ด, นนทบุรี, 11120",
    "ตำบลคลองพระอุดม, อำเภอปากเกร็ด, นนทบุรี, 11120",
    "ตำบลท่าอิฐ, อำเภอปากเกร็ด, นนทบุรี, 11120",
    "ตำบลบางตลาด, อำเภอปากเกร็ด, นนทบุรี, 11120",
    "ตำบลบางตะไนย์, อำเภอปากเกร็ด, นนทบุรี, 11120",
    "ตำบลบางพลับ, อำเภอปากเกร็ด, นนทบุรี, 11120",
    "ตำบลบางพูด, อำเภอปากเกร็ด, นนทบุรี, 11120",
    "ตำบลบ้านใหม่, อำเภอปากเกร็ด, นนทบุรี, 11120",
    "ตำบลปากเกร็ด, อำเภอปากเกร็ด, นนทบุรี, 11120",
    "ตำบลอ้อมเกร็ด, อำเภอปากเกร็ด, นนทบุรี, 11120",
    "ตำบลบางกรวย, อำเภอบางกรวย, นนทบุรี, 11130",
    "ตำบลบางขนุน, อำเภอบางกรวย, นนทบุรี, 11130",
    "ตำบลบางขุนกอง, อำเภอบางกรวย, นนทบุรี, 11130",
    "ตำบลบางคูเวียง, อำเภอบางกรวย, นนทบุรี, 11130",
    "ตำบลบางสีทอง, อำเภอบางกรวย, นนทบุรี, 11130",
    "ตำบลปลายบาง, อำเภอบางกรวย, นนทบุรี, 11130",
    "ตำบลมหาสวัสดิ์, อำเภอบางกรวย, นนทบุรี, 11130",
    "ตำบลวัดชลอ, อำเภอบางกรวย, นนทบุรี, 11130",
    "ตำบลศาลากลาง, อำเภอบางกรวย, นนทบุรี, 11130",
    "ตำบลเสาธงหิน, อำเภอบางใหญ่, นนทบุรี, 11140",
    "ตำบลบางเลน, อำเภอบางใหญ่, นนทบุรี, 11140",
    "ตำบลบางแม่นาง, อำเภอบางใหญ่, นนทบุรี, 11140",
    "ตำบลบางใหญ่, อำเภอบางใหญ่, นนทบุรี, 11140",
    "ตำบลบางม่วง, อำเภอบางใหญ่, นนทบุรี, 11140",
    "ตำบลบ้านใหม่, อำเภอบางใหญ่, นนทบุรี, 11140",
    "ตำบลไทรใหญ่, อำเภอไทรน้อย, นนทบุรี, 11150",
    "ตำบลไทรน้อย, อำเภอไทรน้อย, นนทบุรี, 11150",
    "ตำบลขุนศรี, อำเภอไทรน้อย, นนทบุรี, 11150",
    "ตำบลคลองขวาง, อำเภอไทรน้อย, นนทบุรี, 11150",
    "ตำบลทวีวัฒนา, อำเภอไทรน้อย, นนทบุรี, 11150",
    "ตำบลราษฎร์นิยม, อำเภอไทรน้อย, นนทบุรี, 11150",
    "ตำบลหนองเพรางาย, อำเภอไทรน้อย, นนทบุรี, 11150",
    "ตำบลบางเดื่อ, อำเภอเมืองปทุมธานี, ปทุมธานี, 12000",
    "ตำบลบางกะดี, อำเภอเมืองปทุมธานี, ปทุมธานี, 12000",
    "ตำบลบางขะแยง, อำเภอเมืองปทุมธานี, ปทุมธานี, 12000",
    "ตำบลบางคูวัด, อำเภอเมืองปทุมธานี, ปทุมธานี, 12000",
    "ตำบลบางปรอก, อำเภอเมืองปทุมธานี, ปทุมธานี, 12000",
    "ตำบลบางพูด, อำเภอเมืองปทุมธานี, ปทุมธานี, 12000",
    "ตำบลบางพูน, อำเภอเมืองปทุมธานี, ปทุมธานี, 12000",
    "ตำบลบางหลวง, อำเภอเมืองปทุมธานี, ปทุมธานี, 12000",
    "ตำบลบ้านใหม่, อำเภอเมืองปทุมธานี, ปทุมธานี, 12000",
    "ตำบลบ้านกระแชง, อำเภอเมืองปทุมธานี, ปทุมธานี, 12000",
    "ตำบลบ้านกลาง, อำเภอเมืองปทุมธานี, ปทุมธานี, 12000",
    "ตำบลบ้านฉาง, อำเภอเมืองปทุมธานี, ปทุมธานี, 12000",
    "ตำบลสวนพริกไทย, อำเภอเมืองปทุมธานี, ปทุมธานี, 12000",
    "ตำบลหลักหก, อำเภอเมืองปทุมธานี, ปทุมธานี, 12000",
    "ตำบลคลองหก, อำเภอธัญบุรี, ปทุมธานี, 12110",
    "ตำบลบึงน้ำรักษ์, อำเภอธัญบุรี, ปทุมธานี, 12110",
    "ตำบลบึงสนั่น, อำเภอธัญบุรี, ปทุมธานี, 12110",
    "ตำบลรังสิต, อำเภอธัญบุรี, ปทุมธานี, 12110",
    "ตำบลลำผักกูด, อำเภอธัญบุรี, ปทุมธานี, 12110",
    "ตำบลคลองเจ็ด, อำเภอคลองหลวง, ปทุมธานี, 12120",
    "ตำบลคลองสอง, อำเภอคลองหลวง, ปทุมธานี, 12120",
    "ตำบลคลองสาม, อำเภอคลองหลวง, ปทุมธานี, 12120",
    "ตำบลคลองสี่, อำเภอคลองหลวง, ปทุมธานี, 12120",
    "ตำบลคลองหก, อำเภอคลองหลวง, ปทุมธานี, 12120",
    "ตำบลคลองหนึ่ง, อำเภอคลองหลวง, ปทุมธานี, 12120",
    "ตำบลคลองห้า, อำเภอคลองหลวง, ปทุมธานี, 12120",
    "ตำบลบึงยี่โถ, อำเภอธัญบุรี, ปทุมธานี, 12130",
    "ตำบลประชาธิปัตย์, อำเภอธัญบุรี, ปทุมธานี, 12130",
    "ตำบลคูคต, อำเภอลำลูกกา, ปทุมธานี, 12130",
    "ตำบลคลองพระอุดม, อำเภอลาดหลุมแก้ว, ปทุมธานี, 12140",
    "ตำบลคูขวาง, อำเภอลาดหลุมแก้ว, ปทุมธานี, 12140",
    "ตำบลคูบางหลวง, อำเภอลาดหลุมแก้ว, ปทุมธานี, 12140",
    "ตำบลบ่อเงิน, อำเภอลาดหลุมแก้ว, ปทุมธานี, 12140",
    "ตำบลระแหง, อำเภอลาดหลุมแก้ว, ปทุมธานี, 12140",
    "ตำบลลาดหลุมแก้ว, อำเภอลาดหลุมแก้ว, ปทุมธานี, 12140",
    "ตำบลหน้าไม้, อำเภอลาดหลุมแก้ว, ปทุมธานี, 12140",
    "ตำบลบึงคอไห, อำเภอลำลูกกา, ปทุมธานี, 12150",
    "ตำบลบึงคำพร้อย, อำเภอลำลูกกา, ปทุมธานี, 12150",
    "ตำบลบึงทองหลาง, อำเภอลำลูกกา, ปทุมธานี, 12150",
    "ตำบลพืชอุดม, อำเภอลำลูกกา, ปทุมธานี, 12150",
    "ตำบลลาดสวาย, อำเภอลำลูกกา, ปทุมธานี, 12150",
    "ตำบลลำไทร, อำเภอลำลูกกา, ปทุมธานี, 12150",
    "ตำบลลำลูกกา, อำเภอลำลูกกา, ปทุมธานี, 12150",
    "ตำบลเชียงรากใหญ่, อำเภอสามโคก, ปทุมธานี, 12160",
    "ตำบลเชียงรากน้อย, อำเภอสามโคก, ปทุมธานี, 12160",
    "ตำบลกระแชง, อำเภอสามโคก, ปทุมธานี, 12160",
    "ตำบลคลองควาย, อำเภอสามโคก, ปทุมธานี, 12160",
    "ตำบลท้ายเกาะ, อำเภอสามโคก, ปทุมธานี, 12160",
    "ตำบลบางเตย, อำเภอสามโคก, ปทุมธานี, 12160",
    "ตำบลบางโพธิ์เหนือ, อำเภอสามโคก, ปทุมธานี, 12160",
    "ตำบลบางกระบือ, อำเภอสามโคก, ปทุมธานี, 12160",
    "ตำบลบ้านงิ้ว, อำเภอสามโคก, ปทุมธานี, 12160",
    "ตำบลบ้านปทุม, อำเภอสามโคก, ปทุมธานี, 12160",
    "ตำบลสามโคก, อำเภอสามโคก, ปทุมธานี, 12160",
    "ตำบลนพรัตน์, อำเภอหนองเสือ, ปทุมธานี, 12170",
    "ตำบลบึงกาสาม, อำเภอหนองเสือ, ปทุมธานี, 12170",
    "ตำบลบึงชำอ้อ, อำเภอหนองเสือ, ปทุมธานี, 12170",
    "ตำบลบึงบอน, อำเภอหนองเสือ, ปทุมธานี, 12170",
    "ตำบลบึงบา, อำเภอหนองเสือ, ปทุมธานี, 12170",
    "ตำบลศาลาครุ, อำเภอหนองเสือ, ปทุมธานี, 12170",
    "ตำบลหนองสามวัง, อำเภอหนองเสือ, ปทุมธานี, 12170",
    "ตำบลเกาะเรียน, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลไผ่ลิง, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลกะมัง, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลคลองตะเคียน, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลคลองสระบัว, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลคลองสวนพลู, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลท่าวาสุกรี, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลบ้านเกาะ, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลบ้านใหม่, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลบ้านป้อม, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลบ้านรุน, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลประตูชัย, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลปากกราน, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลภูเขาทอง, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลลุมพลี, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลวัดตูม, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลสวนพริก, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลสำเภาล่ม, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลหอรัตนไชย, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลหันตรา, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลหัวรอ, อำเภอพระนครศรีอยุธยา, พระนครศรีอยุธยา, 13000",
    "ตำบลเจ้าเจ็ด, อำเภอเสนา, พระนครศรีอยุธยา, 13110",
    "ตำบลเจ้าเสด็จ, อำเภอเสนา, พระนครศรีอยุธยา, 13110",
    "ตำบลเสนา, อำเภอเสนา, พระนครศรีอยุธยา, 13110",
    "ตำบลชายนา, อำเภอเสนา, พระนครศรีอยุธยา, 13110",
    "ตำบลดอนทอง, อำเภอเสนา, พระนครศรีอยุธยา, 13110",
    "ตำบลบางนมโค, อำเภอเสนา, พระนครศรีอยุธยา, 13110",
    "ตำบลบ้านแถว, อำเภอเสนา, พระนครศรีอยุธยา, 13110",
    "ตำบลบ้านแพน, อำเภอเสนา, พระนครศรีอยุธยา, 13110",
    "ตำบลบ้านโพธิ์, อำเภอเสนา, พระนครศรีอยุธยา, 13110",
    "ตำบลบ้านกระทุ่ม, อำเภอเสนา, พระนครศรีอยุธยา, 13110",
    "ตำบลบ้านหลวง, อำเภอเสนา, พระนครศรีอยุธยา, 13110",
    "ตำบลมารวิชัย, อำเภอเสนา, พระนครศรีอยุธยา, 13110",
    "ตำบลรางจรเข้, อำเภอเสนา, พระนครศรีอยุธยา, 13110",
    "ตำบลลาดงา, อำเภอเสนา, พระนครศรีอยุธยา, 13110",
    "ตำบลสามกอ, อำเภอเสนา, พระนครศรีอยุธยา, 13110",
    "ตำบลสามตุ่ม, อำเภอเสนา, พระนครศรีอยุธยา, 13110",
    "ตำบลหัวเวียง, อำเภอเสนา, พระนครศรีอยุธยา, 13110",
    "ตำบลโคกช้าง, อำเภอผักไห่, พระนครศรีอยุธยา, 13120",
    "ตำบลกุฎี, อำเภอผักไห่, พระนครศรีอยุธยา, 13120",
    "ตำบลตาลาน, อำเภอผักไห่, พระนครศรีอยุธยา, 13120",
    "ตำบลท่าดินแดง, อำเภอผักไห่, พระนครศรีอยุธยา, 13120",
    "ตำบลบ้านแค, อำเภอผักไห่, พระนครศรีอยุธยา, 13120",
    "ตำบลบ้านใหญ่, อำเภอผักไห่, พระนครศรีอยุธยา, 13120",
    "ตำบลผักไห่, อำเภอผักไห่, พระนครศรีอยุธยา, 13120",
    "ตำบลลาดชิด, อำเภอผักไห่, พระนครศรีอยุธยา, 13120",
    "ตำบลลาดน้ำเค็ม, อำเภอผักไห่, พระนครศรีอยุธยา, 13120",
    "ตำบลหน้าโคก, อำเภอผักไห่, พระนครศรีอยุธยา, 13120",
    "ตำบลอมฤต, อำเภอผักไห่, พระนครศรีอยุธยา, 13120",
    "ตำบลโพธิ์เอน, อำเภอท่าเรือ, พระนครศรีอยุธยา, 13130",
    "ตำบลจำปา, อำเภอท่าเรือ, พระนครศรีอยุธยา, 13130",
    "ตำบลท่าเจ้าสนุก, อำเภอท่าเรือ, พระนครศรีอยุธยา, 13130",
    "ตำบลท่าเรือ, อำเภอท่าเรือ, พระนครศรีอยุธยา, 13130",
    "ตำบลท่าหลวง, อำเภอท่าเรือ, พระนครศรีอยุธยา, 13130",
    "ตำบลบ้านร่อม, อำเภอท่าเรือ, พระนครศรีอยุธยา, 13130",
    "ตำบลปากท่า, อำเภอท่าเรือ, พระนครศรีอยุธยา, 13130",
    "ตำบลวังแดง, อำเภอท่าเรือ, พระนครศรีอยุธยา, 13130",
    "ตำบลศาลาลอย, อำเภอท่าเรือ, พระนครศรีอยุธยา, 13130",
    "ตำบลหนองขนาก, อำเภอท่าเรือ, พระนครศรีอยุธยา, 13130",
    "ตำบลโคกม่วง, อำเภอภาชี, พระนครศรีอยุธยา, 13140",
    "ตำบลไผ่ล้อม, อำเภอภาชี, พระนครศรีอยุธยา, 13140",
    "ตำบลกระจิว, อำเภอภาชี, พระนครศรีอยุธยา, 13140",
    "ตำบลดอนหญ้านาง, อำเภอภาชี, พระนครศรีอยุธยา, 13140",
    "ตำบลพระแก้ว, อำเภอภาชี, พระนครศรีอยุธยา, 13140",
    "ตำบลภาชี, อำเภอภาชี, พระนครศรีอยุธยา, 13140",
    "ตำบลระโสม, อำเภอภาชี, พระนครศรีอยุธยา, 13140",
    "ตำบลหนองน้ำใส, อำเภอภาชี, พระนครศรีอยุธยา, 13140",
    "ตำบลเจ้าปลุก, อำเภอมหาราช, พระนครศรีอยุธยา, 13150",
    "ตำบลโรงช้าง, อำเภอมหาราช, พระนครศรีอยุธยา, 13150",
    "ตำบลกะทุ่ม, อำเภอมหาราช, พระนครศรีอยุธยา, 13150",
    "ตำบลท่าตอ, อำเภอมหาราช, พระนครศรีอยุธยา, 13150",
    "ตำบลน้ำเต้า, อำเภอมหาราช, พระนครศรีอยุธยา, 13150",
    "ตำบลบางนา, อำเภอมหาราช, พระนครศรีอยุธยา, 13150",
    "ตำบลบ้านใหม่, อำเภอมหาราช, พระนครศรีอยุธยา, 13150",
    "ตำบลบ้านขวาง, อำเภอมหาราช, พระนครศรีอยุธยา, 13150",
    "ตำบลบ้านนา, อำเภอมหาราช, พระนครศรีอยุธยา, 13150",
    "ตำบลพิตเพียน, อำเภอมหาราช, พระนครศรีอยุธยา, 13150",
    "ตำบลมหาราช, อำเภอมหาราช, พระนครศรีอยุธยา, 13150",
    "ตำบลหัวไผ่, อำเภอมหาราช, พระนครศรีอยุธยา, 13150",
    "ตำบลเกาะเกิด, อำเภอบางปะอิน, พระนครศรีอยุธยา, 13160",
    "ตำบลขนอนหลวง, อำเภอบางปะอิน, พระนครศรีอยุธยา, 13160",
    "ตำบลคลองจิก, อำเภอบางปะอิน, พระนครศรีอยุธยา, 13160",
    "ตำบลคุ้งลาน, อำเภอบางปะอิน, พระนครศรีอยุธยา, 13160",
    "ตำบลตลาดเกรียบ, อำเภอบางปะอิน, พระนครศรีอยุธยา, 13160",
    "ตำบลตลิ่งชัน, อำเภอบางปะอิน, พระนครศรีอยุธยา, 13160",
    "ตำบลบางกระสั้น, อำเภอบางปะอิน, พระนครศรีอยุธยา, 13160",
    "ตำบลบางประแดง, อำเภอบางปะอิน, พระนครศรีอยุธยา, 13160",
    "ตำบลบ้านเลน, อำเภอบางปะอิน, พระนครศรีอยุธยา, 13160",
    "ตำบลบ้านแป้ง, อำเภอบางปะอิน, พระนครศรีอยุธยา, 13160",
    "ตำบลบ้านโพ, อำเภอบางปะอิน, พระนครศรีอยุธยา, 13160",
    "ตำบลบ้านกรด, อำเภอบางปะอิน, พระนครศรีอยุธยา, 13160",
    "ตำบลบ้านพลับ, อำเภอบางปะอิน, พระนครศรีอยุธยา, 13160",
    "ตำบลบ้านหว้า, อำเภอบางปะอิน, พระนครศรีอยุธยา, 13160",
    "ตำบลวัดยม, อำเภอบางปะอิน, พระนครศรีอยุธยา, 13160",
    "ตำบลสามเรือน, อำเภอบางปะอิน, พระนครศรีอยุธยา, 13160",
    "ตำบลบ้านสร้าง, อำเภอบางปะอิน, พระนครศรีอยุธยา, 13170",
    "ตำบลข้าวงาม, อำเภอวังน้อย, พระนครศรีอยุธยา, 13170",
    "ตำบลชะแมบ, อำเภอวังน้อย, พระนครศรีอยุธยา, 13170",
    "ตำบลบ่อตาโล่, อำเภอวังน้อย, พระนครศรีอยุธยา, 13170",
    "ตำบลพยอม, อำเภอวังน้อย, พระนครศรีอยุธยา, 13170",
    "ตำบลลำไทร, อำเภอวังน้อย, พระนครศรีอยุธยา, 13170",
    "ตำบลลำตาเสา, อำเภอวังน้อย, พระนครศรีอยุธยา, 13170",
    "ตำบลวังจุฬา, อำเภอวังน้อย, พระนครศรีอยุธยา, 13170",
    "ตำบลวังน้อย, อำเภอวังน้อย, พระนครศรีอยุธยา, 13170",
    "ตำบลสนับทึบ, อำเภอวังน้อย, พระนครศรีอยุธยา, 13170",
    "ตำบลหันตะเภา, อำเภอวังน้อย, พระนครศรีอยุธยา, 13170",
    "ตำบลเชียงรากน้อย, อำเภอบางปะอิน, พระนครศรีอยุธยา, 13180",
    "ตำบลแคตก, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลแคออก, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลโคกช้าง, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลไผ่พระ, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลไม้ตรา, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลกกแก้วบูรพา, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลกระแชง, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลช่างเหล็ก, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลช้างน้อย, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลบางไทร, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลบางพลี, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลบางยี่โท, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลบ้านเกาะ, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลบ้านแป้ง, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลบ้านกลึง, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลบ้านม้า, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลสนามชัย, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลหน้าไม้, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลห่อหมก, อำเภอบางไทร, พระนครศรีอยุธยา, 13190",
    "ตำบลเสนา, อำเภออุทัย, พระนครศรีอยุธยา, 13210",
    "ตำบลโพสาวหาญ, อำเภออุทัย, พระนครศรีอยุธยา, 13210",
    "ตำบลข้าวเม่า, อำเภออุทัย, พระนครศรีอยุธยา, 13210",
    "ตำบลคานหาม, อำเภออุทัย, พระนครศรีอยุธยา, 13210",
    "ตำบลธนู, อำเภออุทัย, พระนครศรีอยุธยา, 13210",
    "ตำบลบ้านช้าง, อำเภออุทัย, พระนครศรีอยุธยา, 13210",
    "ตำบลบ้านหีบ, อำเภออุทัย, พระนครศรีอยุธยา, 13210",
    "ตำบลสามบัณฑิต, อำเภออุทัย, พระนครศรีอยุธยา, 13210",
    "ตำบลหนองไม้ซุง, อำเภออุทัย, พระนครศรีอยุธยา, 13210",
    "ตำบลหนองน้ำส้ม, อำเภออุทัย, พระนครศรีอยุธยา, 13210",
    "ตำบลอุทัย, อำเภออุทัย, พระนครศรีอยุธยา, 13210",
    "ตำบลเสาธง, อำเภอบางปะหัน, พระนครศรีอยุธยา, 13220",
    "ตำบลโพธิ์สามต้น, อำเภอบางปะหัน, พระนครศรีอยุธยา, 13220",
    "ตำบลขยาย, อำเภอบางปะหัน, พระนครศรีอยุธยา, 13220",
    "ตำบลขวัญเมือง, อำเภอบางปะหัน, พระนครศรีอยุธยา, 13220",
    "ตำบลตานิม, อำเภอบางปะหัน, พระนครศรีอยุธยา, 13220",
    "ตำบลตาลเอน, อำเภอบางปะหัน, พระนครศรีอยุธยา, 13220",
    "ตำบลทับน้ำ, อำเภอบางปะหัน, พระนครศรีอยุธยา, 13220",
    "ตำบลทางกลาง, อำเภอบางปะหัน, พระนครศรีอยุธยา, 13220",
    "ตำบลบางเดื่อ, อำเภอบางปะหัน, พระนครศรีอยุธยา, 13220",
    "ตำบลบางเพลิง, อำเภอบางปะหัน, พระนครศรีอยุธยา, 13220",
    "ตำบลบางนางร้า, อำเภอบางปะหัน, พระนครศรีอยุธยา, 13220",
    "ตำบลบางปะหัน, อำเภอบางปะหัน, พระนครศรีอยุธยา, 13220",
    "ตำบลบ้านขล้อ, อำเภอบางปะหัน, พระนครศรีอยุธยา, 13220",
    "ตำบลบ้านม้า, อำเภอบางปะหัน, พระนครศรีอยุธยา, 13220",
    "ตำบลบ้านลี่, อำเภอบางปะหัน, พระนครศรีอยุธยา, 13220",
    "ตำบลพุทเลา, อำเภอบางปะหัน, พระนครศรีอยุธยา, 13220",
    "ตำบลหันสัง, อำเภอบางปะหัน, พระนครศรีอยุธยา, 13220",
    "ตำบลคลองพระยาบันลือ, อำเภอลาดบัวหลวง, พระนครศรีอยุธยา, 13230",
    "ตำบลคู้สลอด, อำเภอลาดบัวหลวง, พระนครศรีอยุธยา, 13230",
    "ตำบลพระยาบันลือ, อำเภอลาดบัวหลวง, พระนครศรีอยุธยา, 13230",
    "ตำบลลาดบัวหลวง, อำเภอลาดบัวหลวง, พระนครศรีอยุธยา, 13230",
    "ตำบลสามเมือง, อำเภอลาดบัวหลวง, พระนครศรีอยุธยา, 13230",
    "ตำบลสิงหนาท, อำเภอลาดบัวหลวง, พระนครศรีอยุธยา, 13230",
    "ตำบลหลักชัย, อำเภอลาดบัวหลวง, พระนครศรีอยุธยา, 13230",
    "ตำบลคลองน้อย, อำเภอบ้านแพรก, พระนครศรีอยุธยา, 13240",
    "ตำบลบ้านแพรก, อำเภอบ้านแพรก, พระนครศรีอยุธยา, 13240",
    "ตำบลบ้านใหม่, อำเภอบ้านแพรก, พระนครศรีอยุธยา, 13240",
    "ตำบลสองห้อง, อำเภอบ้านแพรก, พระนครศรีอยุธยา, 13240",
    "ตำบลสำพะเนียง, อำเภอบ้านแพรก, พระนครศรีอยุธยา, 13240",
    "ตำบลไทรน้อย, อำเภอบางบาล, พระนครศรีอยุธยา, 13250",
    "ตำบลกบเจา, อำเภอบางบาล, พระนครศรีอยุธยา, 13250",
    "ตำบลทางช้าง, อำเภอบางบาล, พระนครศรีอยุธยา, 13250",
    "ตำบลน้ำเต้า, อำเภอบางบาล, พระนครศรีอยุธยา, 13250",
    "ตำบลบางชะนี, อำเภอบางบาล, พระนครศรีอยุธยา, 13250",
    "ตำบลบางบาล, อำเภอบางบาล, พระนครศรีอยุธยา, 13250",
    "ตำบลบางหลวง, อำเภอบางบาล, พระนครศรีอยุธยา, 13250",
    "ตำบลบางหลวงโดด, อำเภอบางบาล, พระนครศรีอยุธยา, 13250",
    "ตำบลบางหัก, อำเภอบางบาล, พระนครศรีอยุธยา, 13250",
    "ตำบลบ้านกุ่ม, อำเภอบางบาล, พระนครศรีอยุธยา, 13250",
    "ตำบลบ้านคลัง, อำเภอบางบาล, พระนครศรีอยุธยา, 13250",
    "ตำบลพระขาว, อำเภอบางบาล, พระนครศรีอยุธยา, 13250",
    "ตำบลมหาพราหมณ์, อำเภอบางบาล, พระนครศรีอยุธยา, 13250",
    "ตำบลวัดตะกู, อำเภอบางบาล, พระนครศรีอยุธยา, 13250",
    "ตำบลวัดยม, อำเภอบางบาล, พระนครศรีอยุธยา, 13250",
    "ตำบลสะพานไทย, อำเภอบางบาล, พระนครศรีอยุธยา, 13250",
    "ตำบลแม่ลา, อำเภอนครหลวง, พระนครศรีอยุธยา, 13260",
    "ตำบลคลองสะแก, อำเภอนครหลวง, พระนครศรีอยุธยา, 13260",
    "ตำบลท่าช้าง, อำเภอนครหลวง, พระนครศรีอยุธยา, 13260",
    "ตำบลนครหลวง, อำเภอนครหลวง, พระนครศรีอยุธยา, 13260",
    "ตำบลบ่อโพง, อำเภอนครหลวง, พระนครศรีอยุธยา, 13260",
    "ตำบลบางพระครู, อำเภอนครหลวง, พระนครศรีอยุธยา, 13260",
    "ตำบลบางระกำ, อำเภอนครหลวง, พระนครศรีอยุธยา, 13260",
    "ตำบลบ้านชุ้ง, อำเภอนครหลวง, พระนครศรีอยุธยา, 13260",
    "ตำบลปากจั่น, อำเภอนครหลวง, พระนครศรีอยุธยา, 13260",
    "ตำบลพระนอน, อำเภอนครหลวง, พระนครศรีอยุธยา, 13260",
    "ตำบลสามไถ, อำเภอนครหลวง, พระนครศรีอยุธยา, 13260",
    "ตำบลหนองปลิง, อำเภอนครหลวง, พระนครศรีอยุธยา, 13260",
    "ตำบลเต่าเล่า, อำเภอบางซ้าย, พระนครศรีอยุธยา, 13270",
    "ตำบลเทพมงคล, อำเภอบางซ้าย, พระนครศรีอยุธยา, 13270",
    "ตำบลแก้วฟ้า, อำเภอบางซ้าย, พระนครศรีอยุธยา, 13270",
    "ตำบลบางซ้าย, อำเภอบางซ้าย, พระนครศรีอยุธยา, 13270",
    "ตำบลปลายกลัด, อำเภอบางซ้าย, พระนครศรีอยุธยา, 13270",
    "ตำบลวังพัฒนา, อำเภอบางซ้าย, พระนครศรีอยุธยา, 13270",
    "ตำบลจักราช, อำเภอผักไห่, พระนครศรีอยุธยา, 13280",
    "ตำบลดอนลาน, อำเภอผักไห่, พระนครศรีอยุธยา, 13280",
    "ตำบลนาคู, อำเภอผักไห่, พระนครศรีอยุธยา, 13280",
    "ตำบลลำตะเคียน, อำเภอผักไห่, พระนครศรีอยุธยา, 13280",
    "ตำบลหนองน้ำใหญ่, อำเภอผักไห่, พระนครศรีอยุธยา, 13280",
    "ตำบลเชียงรากน้อย, อำเภอบางไทร, พระนครศรีอยุธยา, 13290",
    "ตำบลโพแตง, อำเภอบางไทร, พระนครศรีอยุธยา, 13290",
    "ตำบลช้างใหญ่, อำเภอบางไทร, พระนครศรีอยุธยา, 13290",
    "ตำบลราชคราม, อำเภอบางไทร, พระนครศรีอยุธยา, 13290",
    "ตำบลโพสะ, อำเภอเมืองอ่างทอง, อ่างทอง, 14000",
    "ตำบลคลองวัว, อำเภอเมืองอ่างทอง, อ่างทอง, 14000",
    "ตำบลจำปาหล่อ, อำเภอเมืองอ่างทอง, อ่างทอง, 14000",
    "ตำบลตลาดกรวด, อำเภอเมืองอ่างทอง, อ่างทอง, 14000",
    "ตำบลตลาดหลวง, อำเภอเมืองอ่างทอง, อ่างทอง, 14000",
    "ตำบลบางแก้ว, อำเภอเมืองอ่างทอง, อ่างทอง, 14000",
    "ตำบลบ้านแห, อำเภอเมืองอ่างทอง, อ่างทอง, 14000",
    "ตำบลบ้านรี, อำเภอเมืองอ่างทอง, อ่างทอง, 14000",
    "ตำบลบ้านอิฐ, อำเภอเมืองอ่างทอง, อ่างทอง, 14000",
    "ตำบลป่างิ้ว, อำเภอเมืองอ่างทอง, อ่างทอง, 14000",
    "ตำบลมหาดไทย, อำเภอเมืองอ่างทอง, อ่างทอง, 14000",
    "ตำบลย่านซื่อ, อำเภอเมืองอ่างทอง, อ่างทอง, 14000",
    "ตำบลศาลาแดง, อำเภอเมืองอ่างทอง, อ่างทอง, 14000",
    "ตำบลหัวไผ่, อำเภอเมืองอ่างทอง, อ่างทอง, 14000",
    "ตำบลไผ่จำศิล, อำเภอวิเศษชัยชาญ, อ่างทอง, 14110",
    "ตำบลไผ่ดำพัฒนา, อำเภอวิเศษชัยชาญ, อ่างทอง, 14110",
    "ตำบลไผ่วง, อำเภอวิเศษชัยชาญ, อ่างทอง, 14110",
    "ตำบลคลองขนาก, อำเภอวิเศษชัยชาญ, อ่างทอง, 14110",
    "ตำบลตลาดใหม่, อำเภอวิเศษชัยชาญ, อ่างทอง, 14110",
    "ตำบลท่าช้าง, อำเภอวิเศษชัยชาญ, อ่างทอง, 14110",
    "ตำบลบางจัก, อำเภอวิเศษชัยชาญ, อ่างทอง, 14110",
    "ตำบลม่วงเตี้ย, อำเภอวิเศษชัยชาญ, อ่างทอง, 14110",
    "ตำบลยี่ล้น, อำเภอวิเศษชัยชาญ, อ่างทอง, 14110",
    "ตำบลศาลเจ้าโรงทอง, อำเภอวิเศษชัยชาญ, อ่างทอง, 14110",
    "ตำบลสาวร้องไห้, อำเภอวิเศษชัยชาญ, อ่างทอง, 14110",
    "ตำบลสี่ร้อย, อำเภอวิเศษชัยชาญ, อ่างทอง, 14110",
    "ตำบลหลักแก้ว, อำเภอวิเศษชัยชาญ, อ่างทอง, 14110",
    "ตำบลห้วยคันแหลน, อำเภอวิเศษชัยชาญ, อ่างทอง, 14110",
    "ตำบลหัวตะพาน, อำเภอวิเศษชัยชาญ, อ่างทอง, 14110",
    "ตำบลโคกพุทรา, อำเภอโพธิ์ทอง, อ่างทอง, 14120",
    "ตำบลโพธิ์รังนก, อำเภอโพธิ์ทอง, อ่างทอง, 14120",
    "ตำบลคำหยาด, อำเภอโพธิ์ทอง, อ่างทอง, 14120",
    "ตำบลทางพระ, อำเภอโพธิ์ทอง, อ่างทอง, 14120",
    "ตำบลบ่อแร่, อำเภอโพธิ์ทอง, อ่างทอง, 14120",
    "ตำบลบางเจ้าฉ่า, อำเภอโพธิ์ทอง, อ่างทอง, 14120",
    "ตำบลบางพลับ, อำเภอโพธิ์ทอง, อ่างทอง, 14120",
    "ตำบลบางระกำ, อำเภอโพธิ์ทอง, อ่างทอง, 14120",
    "ตำบลยางช้าย, อำเภอโพธิ์ทอง, อ่างทอง, 14120",
    "ตำบลรำมะสัก, อำเภอโพธิ์ทอง, อ่างทอง, 14120",
    "ตำบลสามง่าม, อำเภอโพธิ์ทอง, อ่างทอง, 14120",
    "ตำบลหนองแม่ไก่, อำเภอโพธิ์ทอง, อ่างทอง, 14120",
    "ตำบลองครักษ์, อำเภอโพธิ์ทอง, อ่างทอง, 14120",
    "ตำบลอ่างแก้ว, อำเภอโพธิ์ทอง, อ่างทอง, 14120",
    "ตำบลอินทประมูล, อำเภอโพธิ์ทอง, อ่างทอง, 14120",
    "ตำบลเอกราช, อำเภอป่าโมก, อ่างทอง, 14130",
    "ตำบลโผงเผง, อำเภอป่าโมก, อ่างทอง, 14130",
    "ตำบลโรงช้าง, อำเภอป่าโมก, อ่างทอง, 14130",
    "ตำบลนรสิงห์, อำเภอป่าโมก, อ่างทอง, 14130",
    "ตำบลบางเสด็จ, อำเภอป่าโมก, อ่างทอง, 14130",
    "ตำบลบางปลากด, อำเภอป่าโมก, อ่างทอง, 14130",
    "ตำบลป่าโมก, อำเภอป่าโมก, อ่างทอง, 14130",
    "ตำบลสายทอง, อำเภอป่าโมก, อ่างทอง, 14130",
    "ตำบลเทวราช, อำเภอไชโย, อ่างทอง, 14140",
    "ตำบลไชโย, อำเภอไชโย, อ่างทอง, 14140",
    "ตำบลไชยภูมิ, อำเภอไชโย, อ่างทอง, 14140",
    "ตำบลจรเข้ร้อง, อำเภอไชโย, อ่างทอง, 14140",
    "ตำบลชะไว, อำเภอไชโย, อ่างทอง, 14140",
    "ตำบลชัยฤทธิ์, อำเภอไชโย, อ่างทอง, 14140",
    "ตำบลตรีณรงค์, อำเภอไชโย, อ่างทอง, 14140",
    "ตำบลราชสถิตย์, อำเภอไชโย, อ่างทอง, 14140",
    "ตำบลหลักฟ้า, อำเภอไชโย, อ่างทอง, 14140",
    "ตำบลแสวงหา, อำเภอแสวงหา, อ่างทอง, 14150",
    "ตำบลจำลอง, อำเภอแสวงหา, อ่างทอง, 14150",
    "ตำบลบ้านพราน, อำเภอแสวงหา, อ่างทอง, 14150",
    "ตำบลวังน้ำเย็น, อำเภอแสวงหา, อ่างทอง, 14150",
    "ตำบลศรีพราน, อำเภอแสวงหา, อ่างทอง, 14150",
    "ตำบลสีบัวทอง, อำเภอแสวงหา, อ่างทอง, 14150",
    "ตำบลห้วยไผ่, อำเภอแสวงหา, อ่างทอง, 14150",
    "ตำบลโพธิ์ม่วงพันธ์, อำเภอสามโก้, อ่างทอง, 14160",
    "ตำบลมงคลธรรมนิมิต, อำเภอสามโก้, อ่างทอง, 14160",
    "ตำบลราษฎรพัฒนา, อำเภอสามโก้, อ่างทอง, 14160",
    "ตำบลสามโก้, อำเภอสามโก้, อ่างทอง, 14160",
    "ตำบลอบทม, อำเภอสามโก้, อ่างทอง, 14160",
    "ตำบลเขาสามยอด, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลโก่งธนู, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลโคกลำพาน, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลโพธิ์เก้าต้น, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลโพธิ์ตรุ, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลกกโก, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลงิ้วราย, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลดอนโพธิ์, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลตะลุง, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลถนนใหญ่, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลทะเลชุบศร, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลท่าแค, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลท้ายตลาด, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลท่าศาลา, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลท่าหิน, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลนิคมสร้างตนเอง, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลบางขันหมาก, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลบ้านข่อย, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลป่าตาล, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลพรหมมาสตร์, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลสี่คลอง, อำเภอเมืองลพบุรี, ลพบุรี, 15000",
    "ตำบลเชียงงา, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลโพนทอง, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลไผ่ใหญ่, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลชอนม่วง, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลดงพลับ, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลดอนดึง, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลบางกะพี้, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลบางพึ่ง, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลบ้านกล้วย, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลบ้านทราย, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลบ้านหมี่, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลพุคา, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลมหาสอน, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลสนามแจง, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลสายห้วยแก้ว, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลหนองเต่า, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลหนองเมือง, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลหนองกระเบียน, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลหนองทรายขาว, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลหินปัก, อำเภอบ้านหมี่, ลพบุรี, 15110",
    "ตำบลเกาะแก้ว, อำเภอโคกสำโรง, ลพบุรี, 15120",
    "ตำบลเพนียด, อำเภอโคกสำโรง, ลพบุรี, 15120",
    "ตำบลโคกสำโรง, อำเภอโคกสำโรง, ลพบุรี, 15120",
    "ตำบลคลองเกตุ, อำเภอโคกสำโรง, ลพบุรี, 15120",
    "ตำบลดงมะรุม, อำเภอโคกสำโรง, ลพบุรี, 15120",
    "ตำบลถลุงเหล็ก, อำเภอโคกสำโรง, ลพบุรี, 15120",
    "ตำบลวังเพลิง, อำเภอโคกสำโรง, ลพบุรี, 15120",
    "ตำบลวังขอนขว้าง, อำเภอโคกสำโรง, ลพบุรี, 15120",
    "ตำบลวังจั่น, อำเภอโคกสำโรง, ลพบุรี, 15120",
    "ตำบลสะแกราบ, อำเภอโคกสำโรง, ลพบุรี, 15120",
    "ตำบลหนองแขม, อำเภอโคกสำโรง, ลพบุรี, 15120",
    "ตำบลหลุมข้าว, อำเภอโคกสำโรง, ลพบุรี, 15120",
    "ตำบลห้วยโป่ง, อำเภอโคกสำโรง, ลพบุรี, 15120",
    "ตำบลเกาะรัง, อำเภอชัยบาดาล, ลพบุรี, 15130",
    "ตำบลเขาแหลม, อำเภอชัยบาดาล, ลพบุรี, 15130",
    "ตำบลชัยนารายณ์, อำเภอชัยบาดาล, ลพบุรี, 15130",
    "ตำบลซับตะเคียน, อำเภอชัยบาดาล, ลพบุรี, 15130",
    "ตำบลท่าดินดำ, อำเภอชัยบาดาล, ลพบุรี, 15130",
    "ตำบลท่ามะนาว, อำเภอชัยบาดาล, ลพบุรี, 15130",
    "ตำบลนิคมลำนารายณ์, อำเภอชัยบาดาล, ลพบุรี, 15130",
    "ตำบลบัวชุม, อำเภอชัยบาดาล, ลพบุรี, 15130",
    "ตำบลบ้านใหม่สามัคคี, อำเภอชัยบาดาล, ลพบุรี, 15130",
    "ตำบลลำนารายณ์, อำเภอชัยบาดาล, ลพบุรี, 15130",
    "ตำบลศิลาทิพย์, อำเภอชัยบาดาล, ลพบุรี, 15130",
    "ตำบลหนองยายโต๊ะ, อำเภอชัยบาดาล, ลพบุรี, 15130",
    "ตำบลห้วยหิน, อำเภอชัยบาดาล, ลพบุรี, 15130",
    "ตำบลเขาน้อย, อำเภอลำสนธิ, ลพบุรี, 15130",
    "ตำบลโคกสลุง, อำเภอพัฒนานิคม, ลพบุรี, 15140",
    "ตำบลชอนน้อย, อำเภอพัฒนานิคม, ลพบุรี, 15140",
    "ตำบลน้ำสุด, อำเภอพัฒนานิคม, ลพบุรี, 15140",
    "ตำบลพัฒนานิคม, อำเภอพัฒนานิคม, ลพบุรี, 15140",
    "ตำบลมะนาวหวาน, อำเภอพัฒนานิคม, ลพบุรี, 15140",
    "ตำบลหนองบัว, อำเภอพัฒนานิคม, ลพบุรี, 15140",
    "ตำบลโคกสลุด, อำเภอท่าวุ้ง, ลพบุรี, 15150",
    "ตำบลโพตลาดแก้ว, อำเภอท่าวุ้ง, ลพบุรี, 15150",
    "ตำบลท่าวุ้ง, อำเภอท่าวุ้ง, ลพบุรี, 15150",
    "ตำบลบางคู้, อำเภอท่าวุ้ง, ลพบุรี, 15150",
    "ตำบลบางงา, อำเภอท่าวุ้ง, ลพบุรี, 15150",
    "ตำบลบางลี่, อำเภอท่าวุ้ง, ลพบุรี, 15150",
    "ตำบลบ้านเบิก, อำเภอท่าวุ้ง, ลพบุรี, 15150",
    "ตำบลมุจลินท์, อำเภอท่าวุ้ง, ลพบุรี, 15150",
    "ตำบลลาดสาลี่, อำเภอท่าวุ้ง, ลพบุรี, 15150",
    "ตำบลหัวสำโรง, อำเภอท่าวุ้ง, ลพบุรี, 15150",
    "ตำบลเขาพระงาม, อำเภอเมืองลพบุรี, ลพบุรี, 15160",
    "ตำบลโคกกะเทียม, อำเภอเมืองลพบุรี, ลพบุรี, 15160",
    "ตำบลชอนสมบูรณ์, อำเภอหนองม่วง, ลพบุรี, 15170",
    "ตำบลชอนสารเดช, อำเภอหนองม่วง, ลพบุรี, 15170",
    "ตำบลดงดินแดง, อำเภอหนองม่วง, ลพบุรี, 15170",
    "ตำบลบ่อทอง, อำเภอหนองม่วง, ลพบุรี, 15170",
    "ตำบลยางโทน, อำเภอหนองม่วง, ลพบุรี, 15170",
    "ตำบลหนองม่วง, อำเภอหนองม่วง, ลพบุรี, 15170",
    "ตำบลเขาสมอคอน, อำเภอท่าวุ้ง, ลพบุรี, 15180",
    "ตำบลบางขาม, อำเภอบ้านหมี่, ลพบุรี, 15180",
    "ตำบลบ้านชี, อำเภอบ้านหมี่, ลพบุรี, 15180",
    "ตำบลนาโสม, อำเภอชัยบาดาล, ลพบุรี, 15190",
    "ตำบลเขารวก, อำเภอลำสนธิ, ลพบุรี, 15190",
    "ตำบลกุดตาเพชร, อำเภอลำสนธิ, ลพบุรี, 15190",
    "ตำบลซับสมบูรณ์, อำเภอลำสนธิ, ลพบุรี, 15190",
    "ตำบลลำสนธิ, อำเภอลำสนธิ, ลพบุรี, 15190",
    "ตำบลหนองรี, อำเภอลำสนธิ, ลพบุรี, 15190",
    "ตำบลโคกตูม, อำเภอเมืองลพบุรี, ลพบุรี, 15210",
    "ตำบลช่องสาริกา, อำเภอพัฒนานิคม, ลพบุรี, 15220",
    "ตำบลดีลัง, อำเภอพัฒนานิคม, ลพบุรี, 15220",
    "ตำบลชัยบาดาล, อำเภอชัยบาดาล, ลพบุรี, 15230",
    "ตำบลม่วงค่อม, อำเภอชัยบาดาล, ลพบุรี, 15230",
    "ตำบลมะกอกหวาน, อำเภอชัยบาดาล, ลพบุรี, 15230",
    "ตำบลแก่งผักกูด, อำเภอท่าหลวง, ลพบุรี, 15230",
    "ตำบลซับจำปา, อำเภอท่าหลวง, ลพบุรี, 15230",
    "ตำบลทะเลวังวัด, อำเภอท่าหลวง, ลพบุรี, 15230",
    "ตำบลท่าหลวง, อำเภอท่าหลวง, ลพบุรี, 15230",
    "ตำบลหนองผักแว่น, อำเภอท่าหลวง, ลพบุรี, 15230",
    "ตำบลหัวลำ, อำเภอท่าหลวง, ลพบุรี, 15230",
    "ตำบลทุ่งท่าช้าง, อำเภอสระโบสถ์, ลพบุรี, 15240",
    "ตำบลนิยมชัย, อำเภอสระโบสถ์, ลพบุรี, 15240",
    "ตำบลมหาโพธิ, อำเภอสระโบสถ์, ลพบุรี, 15240",
    "ตำบลสระโบสถ์, อำเภอสระโบสถ์, ลพบุรี, 15240",
    "ตำบลห้วยใหญ่, อำเภอสระโบสถ์, ลพบุรี, 15240",
    "ตำบลโคกเจริญ, อำเภอโคกเจริญ, ลพบุรี, 15250",
    "ตำบลโคกแสมสาร, อำเภอโคกเจริญ, ลพบุรี, 15250",
    "ตำบลยางราก, อำเภอโคกเจริญ, ลพบุรี, 15250",
    "ตำบลวังทอง, อำเภอโคกเจริญ, ลพบุรี, 15250",
    "ตำบลหนองมะค่า, อำเภอโคกเจริญ, ลพบุรี, 15250",
    "ตำบลโพกรวม, อำเภอเมืองสิงห์บุรี, สิงห์บุรี, 16000",
    "ตำบลจักรสีห์, อำเภอเมืองสิงห์บุรี, สิงห์บุรี, 16000",
    "ตำบลต้นโพธิ์, อำเภอเมืองสิงห์บุรี, สิงห์บุรี, 16000",
    "ตำบลบางกระบือ, อำเภอเมืองสิงห์บุรี, สิงห์บุรี, 16000",
    "ตำบลบางพุทรา, อำเภอเมืองสิงห์บุรี, สิงห์บุรี, 16000",
    "ตำบลบางมัญ, อำเภอเมืองสิงห์บุรี, สิงห์บุรี, 16000",
    "ตำบลม่วงหมู่, อำเภอเมืองสิงห์บุรี, สิงห์บุรี, 16000",
    "ตำบลหัวไผ่, อำเภอเมืองสิงห์บุรี, สิงห์บุรี, 16000",
    "ตำบลโพธิ์ชัย, อำเภออินทร์บุรี, สิงห์บุรี, 16110",
    "ตำบลงิ้วราย, อำเภออินทร์บุรี, สิงห์บุรี, 16110",
    "ตำบลชีน้ำร้าย, อำเภออินทร์บุรี, สิงห์บุรี, 16110",
    "ตำบลทองเอน, อำเภออินทร์บุรี, สิงห์บุรี, 16110",
    "ตำบลทับยา, อำเภออินทร์บุรี, สิงห์บุรี, 16110",
    "ตำบลท่างาม, อำเภออินทร์บุรี, สิงห์บุรี, 16110",
    "ตำบลน้ำตาล, อำเภออินทร์บุรี, สิงห์บุรี, 16110",
    "ตำบลประศุก, อำเภออินทร์บุรี, สิงห์บุรี, 16110",
    "ตำบลห้วยชัน, อำเภออินทร์บุรี, สิงห์บุรี, 16110",
    "ตำบลอินทร์บุรี, อำเภออินทร์บุรี, สิงห์บุรี, 16110",
    "ตำบลโรงช้าง, อำเภอพรหมบุรี, สิงห์บุรี, 16120",
    "ตำบลบางน้ำเชี่ยว, อำเภอพรหมบุรี, สิงห์บุรี, 16120",
    "ตำบลบ้านแป้ง, อำเภอพรหมบุรี, สิงห์บุรี, 16120",
    "ตำบลบ้านหม้อ, อำเภอพรหมบุรี, สิงห์บุรี, 16120",
    "ตำบลพระงาม, อำเภอพรหมบุรี, สิงห์บุรี, 16120",
    "ตำบลหัวป่า, อำเภอพรหมบุรี, สิงห์บุรี, 16120",
    "ตำบลเชิงกลัด, อำเภอบางระจัน, สิงห์บุรี, 16130",
    "ตำบลแม่ลา, อำเภอบางระจัน, สิงห์บุรี, 16130",
    "ตำบลโพชนไก่, อำเภอบางระจัน, สิงห์บุรี, 16130",
    "ตำบลไม้ดัด, อำเภอบางระจัน, สิงห์บุรี, 16130",
    "ตำบลบ้านจ่า, อำเภอบางระจัน, สิงห์บุรี, 16130",
    "ตำบลพักทัน, อำเภอบางระจัน, สิงห์บุรี, 16130",
    "ตำบลสระแจง, อำเภอบางระจัน, สิงห์บุรี, 16130",
    "ตำบลสิงห์, อำเภอบางระจัน, สิงห์บุรี, 16130",
    "ตำบลโพประจักษ์, อำเภอท่าช้าง, สิงห์บุรี, 16140",
    "ตำบลถอนสมอ, อำเภอท่าช้าง, สิงห์บุรี, 16140",
    "ตำบลพิกุลทอง, อำเภอท่าช้าง, สิงห์บุรี, 16140",
    "ตำบลวิหารขาว, อำเภอท่าช้าง, สิงห์บุรี, 16140",
    "ตำบลโพทะเล, อำเภอค่ายบางระจัน, สิงห์บุรี, 16150",
    "ตำบลโพสังโฆ, อำเภอค่ายบางระจัน, สิงห์บุรี, 16150",
    "ตำบลคอทราย, อำเภอค่ายบางระจัน, สิงห์บุรี, 16150",
    "ตำบลท่าข้าม, อำเภอค่ายบางระจัน, สิงห์บุรี, 16150",
    "ตำบลบางระจัน, อำเภอค่ายบางระจัน, สิงห์บุรี, 16150",
    "ตำบลหนองกระทุ่ม, อำเภอค่ายบางระจัน, สิงห์บุรี, 16150",
    "ตำบลพรหมบุรี, อำเภอพรหมบุรี, สิงห์บุรี, 16160",
    "ตำบลเขาท่าพระ, อำเภอเมืองชัยนาท, ชัยนาท, 17000",
    "ตำบลเสือโฮก, อำเภอเมืองชัยนาท, ชัยนาท, 17000",
    "ตำบลในเมือง, อำเภอเมืองชัยนาท, ชัยนาท, 17000",
    "ตำบลชัยนาท, อำเภอเมืองชัยนาท, ชัยนาท, 17000",
    "ตำบลท่าชัย, อำเภอเมืองชัยนาท, ชัยนาท, 17000",
    "ตำบลธรรมามูล, อำเภอเมืองชัยนาท, ชัยนาท, 17000",
    "ตำบลนางลือ, อำเภอเมืองชัยนาท, ชัยนาท, 17000",
    "ตำบลบ้านกล้วย, อำเภอเมืองชัยนาท, ชัยนาท, 17000",
    "ตำบลหาดท่าเสา, อำเภอเมืองชัยนาท, ชัยนาท, 17000",
    "ตำบลคุ้งสำเภา, อำเภอมโนรมย์, ชัยนาท, 17110",
    "ตำบลท่าฉนวน, อำเภอมโนรมย์, ชัยนาท, 17110",
    "ตำบลวัดโคก, อำเภอมโนรมย์, ชัยนาท, 17110",
    "ตำบลศิลาดาน, อำเภอมโนรมย์, ชัยนาท, 17110",
    "ตำบลบ่อแร่, อำเภอวัดสิงห์, ชัยนาท, 17120",
    "ตำบลมะขามเฒ่า, อำเภอวัดสิงห์, ชัยนาท, 17120",
    "ตำบลวังหมัน, อำเภอวัดสิงห์, ชัยนาท, 17120",
    "ตำบลวัดสิงห์, อำเภอวัดสิงห์, ชัยนาท, 17120",
    "ตำบลหนองขุ่น, อำเภอวัดสิงห์, ชัยนาท, 17120",
    "ตำบลหนองน้อย, อำเภอวัดสิงห์, ชัยนาท, 17120",
    "ตำบลหนองบัว, อำเภอวัดสิงห์, ชัยนาท, 17120",
    "ตำบลกุดจอก, อำเภอหนองมะโมง, ชัยนาท, 17120",
    "ตำบลวังตะเคียน, อำเภอหนองมะโมง, ชัยนาท, 17120",
    "ตำบลสะพานหิน, อำเภอหนองมะโมง, ชัยนาท, 17120",
    "ตำบลหนองมะโมง, อำเภอหนองมะโมง, ชัยนาท, 17120",
    "ตำบลเนินขาม, อำเภอเนินขาม, ชัยนาท, 17130",
    "ตำบลกะบกเตี้ย, อำเภอเนินขาม, ชัยนาท, 17130",
    "ตำบลสุขเดือนห้า, อำเภอเนินขาม, ชัยนาท, 17130",
    "ตำบลเด่นใหญ่, อำเภอหันคา, ชัยนาท, 17130",
    "ตำบลไพรนกยูง, อำเภอหันคา, ชัยนาท, 17130",
    "ตำบลบ้านเชี่ยน, อำเภอหันคา, ชัยนาท, 17130",
    "ตำบลวังไก่เถื่อน, อำเภอหันคา, ชัยนาท, 17130",
    "ตำบลหันคา, อำเภอหันคา, ชัยนาท, 17130",
    "ตำบลเที่ยงแท้, อำเภอสรรคบุรี, ชัยนาท, 17140",
    "ตำบลแพรกศรีราชา, อำเภอสรรคบุรี, ชัยนาท, 17140",
    "ตำบลโพงาม, อำเภอสรรคบุรี, ชัยนาท, 17140",
    "ตำบลดงคอน, อำเภอสรรคบุรี, ชัยนาท, 17140",
    "ตำบลดอนกำ, อำเภอสรรคบุรี, ชัยนาท, 17140",
    "ตำบลบางขุด, อำเภอสรรคบุรี, ชัยนาท, 17140",
    "ตำบลห้วยกรด, อำเภอสรรคบุรี, ชัยนาท, 17140",
    "ตำบลห้วยกรดพัฒนา, อำเภอสรรคบุรี, ชัยนาท, 17140",
    "ตำบลเขาแก้ว, อำเภอสรรพยา, ชัยนาท, 17150",
    "ตำบลโพนางดำตก, อำเภอสรรพยา, ชัยนาท, 17150",
    "ตำบลโพนางดำออก, อำเภอสรรพยา, ชัยนาท, 17150",
    "ตำบลตลุก, อำเภอสรรพยา, ชัยนาท, 17150",
    "ตำบลบางหลวง, อำเภอสรรพยา, ชัยนาท, 17150",
    "ตำบลสรรพยา, อำเภอสรรพยา, ชัยนาท, 17150",
    "ตำบลหาดอาษา, อำเภอสรรพยา, ชัยนาท, 17150",
    "ตำบลสามง่ามท่าโบสถ์, อำเภอหันคา, ชัยนาท, 17160",
    "ตำบลหนองแซง, อำเภอหันคา, ชัยนาท, 17160",
    "ตำบลห้วยงู, อำเภอหันคา, ชัยนาท, 17160",
    "ตำบลไร่พัฒนา, อำเภอมโนรมย์, ชัยนาท, 17170",
    "ตำบลหางน้ำสาคร, อำเภอมโนรมย์, ชัยนาท, 17170",
    "ตำบลอู่ตะเภา, อำเภอมโนรมย์, ชัยนาท, 17170",
    "ตำบลเขาดินพัฒนา, อำเภอเฉลิมพระเกียรติ, สระบุรี, 18000",
    "ตำบลบ้านแก้ง, อำเภอเฉลิมพระเกียรติ, สระบุรี, 18000",
    "ตำบลผึ้งรวง, อำเภอเฉลิมพระเกียรติ, สระบุรี, 18000",
    "ตำบลห้วยบง, อำเภอเฉลิมพระเกียรติ, สระบุรี, 18000",
    "ตำบลโคกสว่าง, อำเภอเมืองสระบุรี, สระบุรี, 18000",
    "ตำบลกุดนกเปล้า, อำเภอเมืองสระบุรี, สระบุรี, 18000",
    "ตำบลดาวเรือง, อำเภอเมืองสระบุรี, สระบุรี, 18000",
    "ตำบลตลิ่งชัน, อำเภอเมืองสระบุรี, สระบุรี, 18000",
    "ตำบลตะกุด, อำเภอเมืองสระบุรี, สระบุรี, 18000",
    "ตำบลนาโฉง, อำเภอเมืองสระบุรี, สระบุรี, 18000",
    "ตำบลปากเพรียว, อำเภอเมืองสระบุรี, สระบุรี, 18000",
    "ตำบลปากข้าวสาร, อำเภอเมืองสระบุรี, สระบุรี, 18000",
    "ตำบลหนองโน, อำเภอเมืองสระบุรี, สระบุรี, 18000",
    "ตำบลหนองปลาไหล, อำเภอเมืองสระบุรี, สระบุรี, 18000",
    "ตำบลหนองยาว, อำเภอเมืองสระบุรี, สระบุรี, 18000",
    "ตำบลเตาปูน, อำเภอแก่งคอย, สระบุรี, 18110",
    "ตำบลแก่งคอย, อำเภอแก่งคอย, สระบุรี, 18110",
    "ตำบลชะอม, อำเภอแก่งคอย, สระบุรี, 18110",
    "ตำบลชำผักแพว, อำเภอแก่งคอย, สระบุรี, 18110",
    "ตำบลตาลเดี่ยว, อำเภอแก่งคอย, สระบุรี, 18110",
    "ตำบลท่าคล้อ, อำเภอแก่งคอย, สระบุรี, 18110",
    "ตำบลท่าตูม, อำเภอแก่งคอย, สระบุรี, 18110",
    "ตำบลท่ามะปราง, อำเภอแก่งคอย, สระบุรี, 18110",
    "ตำบลบ้านธาตุ, อำเภอแก่งคอย, สระบุรี, 18110",
    "ตำบลบ้านป่า, อำเภอแก่งคอย, สระบุรี, 18110",
    "ตำบลสองคอน, อำเภอแก่งคอย, สระบุรี, 18110",
    "ตำบลห้วยแห้ง, อำเภอแก่งคอย, สระบุรี, 18110",
    "ตำบลหินซ้อน, อำเภอแก่งคอย, สระบุรี, 18110",
    "ตำบลเขาวง, อำเภอพระพุทธบาท, สระบุรี, 18120",
    "ตำบลขุนโขลน, อำเภอพระพุทธบาท, สระบุรี, 18120",
    "ตำบลธารเกษม, อำเภอพระพุทธบาท, สระบุรี, 18120",
    "ตำบลนายาว, อำเภอพระพุทธบาท, สระบุรี, 18120",
    "ตำบลพระพุทธบาท, อำเภอพระพุทธบาท, สระบุรี, 18120",
    "ตำบลพุกร่าง, อำเภอพระพุทธบาท, สระบุรี, 18120",
    "ตำบลพุคำจาน, อำเภอพระพุทธบาท, สระบุรี, 18120",
    "ตำบลหนองแก, อำเภอพระพุทธบาท, สระบุรี, 18120",
    "ตำบลห้วยป่าหวาย, อำเภอพระพุทธบาท, สระบุรี, 18120",
    "ตำบลโคกใหญ่, อำเภอบ้านหมอ, สระบุรี, 18130",
    "ตำบลไผ่ขวาง, อำเภอบ้านหมอ, สระบุรี, 18130",
    "ตำบลตลาดน้อย, อำเภอบ้านหมอ, สระบุรี, 18130",
    "ตำบลบางโขมด, อำเภอบ้านหมอ, สระบุรี, 18130",
    "ตำบลบ้านหมอ, อำเภอบ้านหมอ, สระบุรี, 18130",
    "ตำบลสร่างโศก, อำเภอบ้านหมอ, สระบุรี, 18130",
    "ตำบลหนองบัว, อำเภอบ้านหมอ, สระบุรี, 18130",
    "ตำบลหรเทพ, อำเภอบ้านหมอ, สระบุรี, 18130",
    "ตำบลไผ่ต่ำ, อำเภอหนองแค, สระบุรี, 18140",
    "ตำบลกุ่มหัก, อำเภอหนองแค, สระบุรี, 18140",
    "ตำบลหนองแขม, อำเภอหนองแค, สระบุรี, 18140",
    "ตำบลหนองแค, อำเภอหนองแค, สระบุรี, 18140",
    "ตำบลหนองโรง, อำเภอหนองแค, สระบุรี, 18140",
    "ตำบลหนองไข่น้ำ, อำเภอหนองแค, สระบุรี, 18140",
    "ตำบลหนองจรเข้, อำเภอหนองแค, สระบุรี, 18140",
    "ตำบลหนองปลาหมอ, อำเภอหนองแค, สระบุรี, 18140",
    "ตำบลหนองปลิง, อำเภอหนองแค, สระบุรี, 18140",
    "ตำบลเจริญธรรม, อำเภอวิหารแดง, สระบุรี, 18150",
    "ตำบลคลองเรือ, อำเภอวิหารแดง, สระบุรี, 18150",
    "ตำบลบ้านลำ, อำเภอวิหารแดง, สระบุรี, 18150",
    "ตำบลวิหารแดง, อำเภอวิหารแดง, สระบุรี, 18150",
    "ตำบลหนองสรวง, อำเภอวิหารแดง, สระบุรี, 18150",
    "ตำบลหนองหมู, อำเภอวิหารแดง, สระบุรี, 18150",
    "ตำบลเมืองเก่า, อำเภอเสาไห้, สระบุรี, 18160",
    "ตำบลเริงราง, อำเภอเสาไห้, สระบุรี, 18160",
    "ตำบลเสาไห้, อำเภอเสาไห้, สระบุรี, 18160",
    "ตำบลงิ้วงาม, อำเภอเสาไห้, สระบุรี, 18160",
    "ตำบลต้นตาล, อำเภอเสาไห้, สระบุรี, 18160",
    "ตำบลท่าช้าง, อำเภอเสาไห้, สระบุรี, 18160",
    "ตำบลบ้านยาง, อำเภอเสาไห้, สระบุรี, 18160",
    "ตำบลพระยาทด, อำเภอเสาไห้, สระบุรี, 18160",
    "ตำบลม่วงงาม, อำเภอเสาไห้, สระบุรี, 18160",
    "ตำบลศาลารีไทย, อำเภอเสาไห้, สระบุรี, 18160",
    "ตำบลสวนดอกไม้, อำเภอเสาไห้, สระบุรี, 18160",
    "ตำบลหัวปลวก, อำเภอเสาไห้, สระบุรี, 18160",
    "ตำบลเขาดิน, อำเภอหนองแซง, สระบุรี, 18170",
    "ตำบลโคกสะอาด, อำเภอหนองแซง, สระบุรี, 18170",
    "ตำบลไก่เส่า, อำเภอหนองแซง, สระบุรี, 18170",
    "ตำบลม่วงหวาน, อำเภอหนองแซง, สระบุรี, 18170",
    "ตำบลหนองแซง, อำเภอหนองแซง, สระบุรี, 18170",
    "ตำบลหนองกบ, อำเภอหนองแซง, สระบุรี, 18170",
    "ตำบลหนองควายโซ, อำเภอหนองแซง, สระบุรี, 18170",
    "ตำบลหนองสีดา, อำเภอหนองแซง, สระบุรี, 18170",
    "ตำบลหนองหัวโพ, อำเภอหนองแซง, สระบุรี, 18170",
    "ตำบลมวกเหล็ก, อำเภอมวกเหล็ก, สระบุรี, 18180",
    "ตำบลมิตรภาพ, อำเภอมวกเหล็ก, สระบุรี, 18180",
    "ตำบลหนองย่างเสือ, อำเภอมวกเหล็ก, สระบุรี, 18180",
    "ตำบลดอนทอง, อำเภอหนองโดน, สระบุรี, 18190",
    "ตำบลบ้านโปร่ง, อำเภอหนองโดน, สระบุรี, 18190",
    "ตำบลบ้านกลับ, อำเภอหนองโดน, สระบุรี, 18190",
    "ตำบลหนองโดน, อำเภอหนองโดน, สระบุรี, 18190",
    "ตำบลไผ่หลิ่ว, อำเภอดอนพุด, สระบุรี, 18210",
    "ตำบลดงตะงาว, อำเภอดอนพุด, สระบุรี, 18210",
    "ตำบลดอนพุด, อำเภอดอนพุด, สระบุรี, 18210",
    "ตำบลบ้านหลวง, อำเภอดอนพุด, สระบุรี, 18210",
    "ตำบลห้วยขุนราม, อำเภอพัฒนานิคม, ลพบุรี, 18220",
    "ตำบลซับสนุ่น, อำเภอมวกเหล็ก, สระบุรี, 18220",
    "ตำบลแสลงพัน, อำเภอวังม่วง, สระบุรี, 18220",
    "ตำบลคำพราน, อำเภอวังม่วง, สระบุรี, 18220",
    "ตำบลวังม่วง, อำเภอวังม่วง, สระบุรี, 18220",
    "ตำบลโคกแย้, อำเภอหนองแค, สระบุรี, 18230",
    "ตำบลบัวลอย, อำเภอหนองแค, สระบุรี, 18230",
    "ตำบลหนองจิก, อำเภอหนองแค, สระบุรี, 18230",
    "ตำบลหนองนาก, อำเภอหนองแค, สระบุรี, 18230",
    "ตำบลห้วยขมิ้น, อำเภอหนองแค, สระบุรี, 18230",
    "ตำบลห้วยทราย, อำเภอหนองแค, สระบุรี, 18230",
    "ตำบลพุแค, อำเภอเฉลิมพระเกียรติ, สระบุรี, 18240",
    "ตำบลหน้าพระลาน, อำเภอเฉลิมพระเกียรติ, สระบุรี, 18240",
    "ตำบลโคกตูม, อำเภอหนองแค, สระบุรี, 18250",
    "ตำบลโพนทอง, อำเภอหนองแค, สระบุรี, 18250",
    "ตำบลคชสิทธิ์, อำเภอหนองแค, สระบุรี, 18250",
    "ตำบลทับกวาง, อำเภอแก่งคอย, สระบุรี, 18260",
    "ตำบลบ้านครัว, อำเภอบ้านหมอ, สระบุรี, 18270",
    "ตำบลเสม็ด, อำเภอเมืองชลบุรี, ชลบุรี, 20000",
    "ตำบลคลองตำหรุ, อำเภอเมืองชลบุรี, ชลบุรี, 20000",
    "ตำบลดอนหัวฬ่อ, อำเภอเมืองชลบุรี, ชลบุรี, 20000",
    "ตำบลนาป่า, อำเภอเมืองชลบุรี, ชลบุรี, 20000",
    "ตำบลบางทราย, อำเภอเมืองชลบุรี, ชลบุรี, 20000",
    "ตำบลบางปลาสร้อย, อำเภอเมืองชลบุรี, ชลบุรี, 20000",
    "ตำบลบ้านโขด, อำเภอเมืองชลบุรี, ชลบุรี, 20000",
    "ตำบลบ้านสวน, อำเภอเมืองชลบุรี, ชลบุรี, 20000",
    "ตำบลมะขามหย่ง, อำเภอเมืองชลบุรี, ชลบุรี, 20000",
    "ตำบลสำนักบก, อำเภอเมืองชลบุรี, ชลบุรี, 20000",
    "ตำบลหนองไม้แดง, อำเภอเมืองชลบุรี, ชลบุรี, 20000",
    "ตำบลหนองข้างคอก, อำเภอเมืองชลบุรี, ชลบุรี, 20000",
    "ตำบลหนองรี, อำเภอเมืองชลบุรี, ชลบุรี, 20000",
    "ตำบลห้วยกะปิ, อำเภอเมืองชลบุรี, ชลบุรี, 20000",
    "ตำบลอ่างศิลา, อำเภอเมืองชลบุรี, ชลบุรี, 20000",
    "ตำบลเขาคันทรง, อำเภอศรีราชา, ชลบุรี, 20110",
    "ตำบลบางพระ, อำเภอศรีราชา, ชลบุรี, 20110",
    "ตำบลศรีราชา, อำเภอศรีราชา, ชลบุรี, 20110",
    "ตำบลสุรศักดิ์, อำเภอศรีราชา, ชลบุรี, 20110",
    "ตำบลท่าเทววงษ์, อำเภอเกาะสีชัง, ชลบุรี, 20120",
    "ตำบลห้วยกะปิ, อำเภอเมืองชลบุรี, ชลบุรี, 20130",
    "ตำบลเหมือง, อำเภอเมืองชลบุรี, ชลบุรี, 20130",
    "ตำบลแสนสุข, อำเภอเมืองชลบุรี, ชลบุรี, 20130",
    "ตำบลบ้านปึก, อำเภอเมืองชลบุรี, ชลบุรี, 20130",
    "ตำบลโคกเพลาะ, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลไร่หลักทอง, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลกุฎโง้ง, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลท่าข้าม, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลทุ่งขวาง, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลนาเริก, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลนามะตูม, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลนาวังหิน, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลบ้านเซิด, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลบ้านช้าง, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลพนัสนิคม, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลวัดโบสถ์, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลวัดหลวง, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลสระสี่เหลี่ยม, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลหนองเหียง, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลหนองขยาด, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลหนองปรือ, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลหน้าพระธาตุ, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลหมอนนาง, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลหัวถนน, อำเภอพนัสนิคม, ชลบุรี, 20140",
    "ตำบลเขาไม้แก้ว, อำเภอบางละมุง, ชลบุรี, 20150",
    "ตำบลโป่ง, อำเภอบางละมุง, ชลบุรี, 20150",
    "ตำบลตะเคียนเตี้ย, อำเภอบางละมุง, ชลบุรี, 20150",
    "ตำบลนาเกลือ, อำเภอบางละมุง, ชลบุรี, 20150",
    "ตำบลบางละมุง, อำเภอบางละมุง, ชลบุรี, 20150",
    "ตำบลหนองปรือ, อำเภอบางละมุง, ชลบุรี, 20150",
    "ตำบลหนองปลาไหล, อำเภอบางละมุง, ชลบุรี, 20150",
    "ตำบลห้วยใหญ่, อำเภอบางละมุง, ชลบุรี, 20150",
    "ตำบลเกาะลอย, อำเภอพานทอง, ชลบุรี, 20160",
    "ตำบลโคกขี้หนอน, อำเภอพานทอง, ชลบุรี, 20160",
    "ตำบลบางนาง, อำเภอพานทอง, ชลบุรี, 20160",
    "ตำบลบางหัก, อำเภอพานทอง, ชลบุรี, 20160",
    "ตำบลบ้านเก่า, อำเภอพานทอง, ชลบุรี, 20160",
    "ตำบลพานทอง, อำเภอพานทอง, ชลบุรี, 20160",
    "ตำบลมาบโป่ง, อำเภอพานทอง, ชลบุรี, 20160",
    "ตำบลหนองกะขะ, อำเภอพานทอง, ชลบุรี, 20160",
    "ตำบลหนองตำลึง, อำเภอพานทอง, ชลบุรี, 20160",
    "ตำบลหนองหงษ์, อำเภอพานทอง, ชลบุรี, 20160",
    "ตำบลหน้าประดู่, อำเภอพานทอง, ชลบุรี, 20160",
    "ตำบลบ้านบึง, อำเภอบ้านบึง, ชลบุรี, 20170",
    "ตำบลมาบไผ่, อำเภอบ้านบึง, ชลบุรี, 20170",
    "ตำบลหนองชาก, อำเภอบ้านบึง, ชลบุรี, 20170",
    "ตำบลหนองซ้ำซาก, อำเภอบ้านบึง, ชลบุรี, 20170",
    "ตำบลหนองบอนแดง, อำเภอบ้านบึง, ชลบุรี, 20170",
    "ตำบลแสมสาร, อำเภอสัตหีบ, ชลบุรี, 20180",
    "ตำบลพลูตาหลวง, อำเภอสัตหีบ, ชลบุรี, 20180",
    "ตำบลสัตหีบ, อำเภอสัตหีบ, ชลบุรี, 20180",
    "ตำบลเขาซก, อำเภอหนองใหญ่, ชลบุรี, 20190",
    "ตำบลคลองพลู, อำเภอหนองใหญ่, ชลบุรี, 20190",
    "ตำบลหนองเสือช้าง, อำเภอหนองใหญ่, ชลบุรี, 20190",
    "ตำบลหนองใหญ่, อำเภอหนองใหญ่, ชลบุรี, 20190",
    "ตำบลห้างสูง, อำเภอหนองใหญ่, ชลบุรี, 20190",
    "ตำบลบางพระ, อำเภอศรีราชา, ชลบุรี, 20210",
    "ตำบลคลองกิ่ว, อำเภอบ้านบึง, ชลบุรี, 20220",
    "ตำบลหนองไผ่แก้ว, อำเภอบ้านบึง, ชลบุรี, 20220",
    "ตำบลหนองอิรุณ, อำเภอบ้านบึง, ชลบุรี, 20220",
    "ตำบลทุ่งสุขลา, อำเภอศรีราชา, ชลบุรี, 20230",
    "ตำบลบ่อวิน, อำเภอศรีราชา, ชลบุรี, 20230",
    "ตำบลบึง, อำเภอศรีราชา, ชลบุรี, 20230",
    "ตำบลหนองขาม, อำเภอศรีราชา, ชลบุรี, 20230",
    "ตำบลเกาะจันทร์, อำเภอเกาะจันทร์, ชลบุรี, 20240",
    "ตำบลท่าบุญมี, อำเภอเกาะจันทร์, ชลบุรี, 20240",
    "ตำบลนาจอมเทียน, อำเภอสัตหีบ, ชลบุรี, 20250",
    "ตำบลบางเสร่, อำเภอสัตหีบ, ชลบุรี, 20250",
    "ตำบลเกษตรสุวรรณ, อำเภอบ่อทอง, ชลบุรี, 20270",
    "ตำบลธาตุทอง, อำเภอบ่อทอง, ชลบุรี, 20270",
    "ตำบลบ่อกวางทอง, อำเภอบ่อทอง, ชลบุรี, 20270",
    "ตำบลบ่อทอง, อำเภอบ่อทอง, ชลบุรี, 20270",
    "ตำบลพลวงทอง, อำเภอบ่อทอง, ชลบุรี, 20270",
    "ตำบลวัดสุวรรณ, อำเภอบ่อทอง, ชลบุรี, 20270",
    "ตำบลเชิงเนิน, อำเภอเมืองระยอง, ระยอง, 21000",
    "ตำบลเนินพระ, อำเภอเมืองระยอง, ระยอง, 21000",
    "ตำบลตะพง, อำเภอเมืองระยอง, ระยอง, 21000",
    "ตำบลทับมา, อำเภอเมืองระยอง, ระยอง, 21000",
    "ตำบลท่าประดู่, อำเภอเมืองระยอง, ระยอง, 21000",
    "ตำบลนาตาขวัญ, อำเภอเมืองระยอง, ระยอง, 21000",
    "ตำบลน้ำคอก, อำเภอเมืองระยอง, ระยอง, 21000",
    "ตำบลบ้านแลง, อำเภอเมืองระยอง, ระยอง, 21000",
    "ตำบลปากน้ำ, อำเภอเมืองระยอง, ระยอง, 21000",
    "ตำบลกะเฉด, อำเภอเมืองระยอง, ระยอง, 21100",
    "ตำบลสำนักทอง, อำเภอเมืองระยอง, ระยอง, 21100",
    "ตำบลเขาน้อย, อำเภอเขาชะเมา, ระยอง, 21110",
    "ตำบลชำฆ้อ, อำเภอเขาชะเมา, ระยอง, 21110",
    "ตำบลน้ำเป็น, อำเภอเขาชะเมา, ระยอง, 21110",
    "ตำบลห้วยทับมอญ, อำเภอเขาชะเมา, ระยอง, 21110",
    "ตำบลเนินฆ้อ, อำเภอแกลง, ระยอง, 21110",
    "ตำบลกระแสบน, อำเภอแกลง, ระยอง, 21110",
    "ตำบลชากโดน, อำเภอแกลง, ระยอง, 21110",
    "ตำบลทางเกวียน, อำเภอแกลง, ระยอง, 21110",
    "ตำบลทุ่งควายกิน, อำเภอแกลง, ระยอง, 21110",
    "ตำบลบ้านนา, อำเภอแกลง, ระยอง, 21110",
    "ตำบลวังหว้า, อำเภอแกลง, ระยอง, 21110",
    "ตำบลสองสลึง, อำเภอแกลง, ระยอง, 21110",
    "ตำบลห้วยยาง, อำเภอแกลง, ระยอง, 21110",
    "ตำบลชากบก, อำเภอบ้านค่าย, ระยอง, 21120",
    "ตำบลตาขัน, อำเภอบ้านค่าย, ระยอง, 21120",
    "ตำบลบางบุตร, อำเภอบ้านค่าย, ระยอง, 21120",
    "ตำบลบ้านค่าย, อำเภอบ้านค่าย, ระยอง, 21120",
    "ตำบลหนองตะพาน, อำเภอบ้านค่าย, ระยอง, 21120",
    "ตำบลหนองบัว, อำเภอบ้านค่าย, ระยอง, 21120",
    "ตำบลหนองละลอก, อำเภอบ้านค่าย, ระยอง, 21120",
    "ตำบลบ้านฉาง, อำเภอบ้านฉาง, ระยอง, 21130",
    "ตำบลพลา, อำเภอบ้านฉาง, ระยอง, 21130",
    "ตำบลสำนักท้อน, อำเภอบ้านฉาง, ระยอง, 21130",
    "ตำบลแม่น้ำคู้, อำเภอปลวกแดง, ระยอง, 21140",
    "ตำบลตาสิทธิ์, อำเภอปลวกแดง, ระยอง, 21140",
    "ตำบลปลวกแดง, อำเภอปลวกแดง, ระยอง, 21140",
    "ตำบลมาบยางพร, อำเภอปลวกแดง, ระยอง, 21140",
    "ตำบลละหาร, อำเภอปลวกแดง, ระยอง, 21140",
    "ตำบลหนองไร่, อำเภอปลวกแดง, ระยอง, 21140",
    "ตำบลเนินพระ, อำเภอเมืองระยอง, ระยอง, 21150",
    "ตำบลมาบตาพุด, อำเภอเมืองระยอง, ระยอง, 21150",
    "ตำบลห้วยโป่ง, อำเภอเมืองระยอง, ระยอง, 21150",
    "ตำบลเพ, อำเภอเมืองระยอง, ระยอง, 21160",
    "ตำบลแกลง, อำเภอเมืองระยอง, ระยอง, 21160",
    "ตำบลคลองปูน, อำเภอแกลง, ระยอง, 21170",
    "ตำบลปากน้ำกระแส, อำเภอแกลง, ระยอง, 21170",
    "ตำบลพังราด, อำเภอแกลง, ระยอง, 21170",
    "ตำบลนิคมพัฒนา, อำเภอนิคมพัฒนา, ระยอง, 21180",
    "ตำบลพนานิคม, อำเภอนิคมพัฒนา, ระยอง, 21180",
    "ตำบลมะขามคู่, อำเภอนิคมพัฒนา, ระยอง, 21180",
    "ตำบลมาบข่า, อำเภอนิคมพัฒนา, ระยอง, 21180",
    "ตำบลกร่ำ, อำเภอแกลง, ระยอง, 21190",
    "ตำบลชากพง, อำเภอแกลง, ระยอง, 21190",
    "ตำบลชุมแสง, อำเภอวังจันทร์, ระยอง, 21210",
    "ตำบลป่ายุบใน, อำเภอวังจันทร์, ระยอง, 21210",
    "ตำบลพลงตาเอี่ยม, อำเภอวังจันทร์, ระยอง, 21210",
    "ตำบลวังจันทร์, อำเภอวังจันทร์, ระยอง, 21210",
    "ตำบลเกาะขวาง, อำเภอเมืองจันทบุรี, จันทบุรี, 22000",
    "ตำบลแสลง, อำเภอเมืองจันทบุรี, จันทบุรี, 22000",
    "ตำบลคมบาง, อำเภอเมืองจันทบุรี, จันทบุรี, 22000",
    "ตำบลคลองนารายณ์, อำเภอเมืองจันทบุรี, จันทบุรี, 22000",
    "ตำบลจันทนิมิต, อำเภอเมืองจันทบุรี, จันทบุรี, 22000",
    "ตำบลตลาด, อำเภอเมืองจันทบุรี, จันทบุรี, 22000",
    "ตำบลท่าช้าง, อำเภอเมืองจันทบุรี, จันทบุรี, 22000",
    "ตำบลบางกะจะ, อำเภอเมืองจันทบุรี, จันทบุรี, 22000",
    "ตำบลพลับพลา, อำเภอเมืองจันทบุรี, จันทบุรี, 22000",
    "ตำบลวัดใหม่, อำเภอเมืองจันทบุรี, จันทบุรี, 22000",
    "ตำบลหนองบัว, อำเภอเมืองจันทบุรี, จันทบุรี, 22000",
    "ตำบลเกวียนหัก, อำเภอขลุง, จันทบุรี, 22110",
    "ตำบลขลุง, อำเภอขลุง, จันทบุรี, 22110",
    "ตำบลซึ้ง, อำเภอขลุง, จันทบุรี, 22110",
    "ตำบลตกพรม, อำเภอขลุง, จันทบุรี, 22110",
    "ตำบลตรอกนอง, อำเภอขลุง, จันทบุรี, 22110",
    "ตำบลตะปอน, อำเภอขลุง, จันทบุรี, 22110",
    "ตำบลบ่อ, อำเภอขลุง, จันทบุรี, 22110",
    "ตำบลบางชัน, อำเภอขลุง, จันทบุรี, 22110",
    "ตำบลมาบไพ, อำเภอขลุง, จันทบุรี, 22110",
    "ตำบลวังสรรพรส, อำเภอขลุง, จันทบุรี, 22110",
    "ตำบลวันยาว, อำเภอขลุง, จันทบุรี, 22110",
    "ตำบลบางกะไชย, อำเภอแหลมสิงห์, จันทบุรี, 22120",
    "ตำบลเขาบายศรี, อำเภอท่าใหม่, จันทบุรี, 22120",
    "ตำบลเขาวัว, อำเภอท่าใหม่, จันทบุรี, 22120",
    "ตำบลคลองขุด, อำเภอท่าใหม่, จันทบุรี, 22120",
    "ตำบลตะกาดเง้า, อำเภอท่าใหม่, จันทบุรี, 22120",
    "ตำบลท่าใหม่, อำเภอท่าใหม่, จันทบุรี, 22120",
    "ตำบลบ่อพุ, อำเภอท่าใหม่, จันทบุรี, 22120",
    "ตำบลพลอยแหวน, อำเภอท่าใหม่, จันทบุรี, 22120",
    "ตำบลยายร้า, อำเภอท่าใหม่, จันทบุรี, 22120",
    "ตำบลสองพี่น้อง, อำเภอท่าใหม่, จันทบุรี, 22120",
    "ตำบลสีพยา, อำเภอท่าใหม่, จันทบุรี, 22120",
    "ตำบลเกาะเปริด, อำเภอแหลมสิงห์, จันทบุรี, 22130",
    "ตำบลปากน้ำแหลมสิงห์, อำเภอแหลมสิงห์, จันทบุรี, 22130",
    "ตำบลหนองชิ่ม, อำเภอแหลมสิงห์, จันทบุรี, 22130",
    "ตำบลเทพนิมิต, อำเภอโป่งน้ำร้อน, จันทบุรี, 22140",
    "ตำบลโป่งน้ำร้อน, อำเภอโป่งน้ำร้อน, จันทบุรี, 22140",
    "ตำบลคลองใหญ่, อำเภอโป่งน้ำร้อน, จันทบุรี, 22140",
    "ตำบลทับไทร, อำเภอโป่งน้ำร้อน, จันทบุรี, 22140",
    "ตำบลหนองตาคง, อำเภอโป่งน้ำร้อน, จันทบุรี, 22140",
    "ตำบลบ่อเวฬุ, อำเภอขลุง, จันทบุรี, 22150",
    "ตำบลฉมัน, อำเภอมะขาม, จันทบุรี, 22150",
    "ตำบลท่าหลวง, อำเภอมะขาม, จันทบุรี, 22150",
    "ตำบลปัถวี, อำเภอมะขาม, จันทบุรี, 22150",
    "ตำบลมะขาม, อำเภอมะขาม, จันทบุรี, 22150",
    "ตำบลวังแซ้ม, อำเภอมะขาม, จันทบุรี, 22150",
    "ตำบลอ่างคีรี, อำเภอมะขาม, จันทบุรี, 22150",
    "ตำบลเขาวงกต, อำเภอแก่งหางแมว, จันทบุรี, 22160",
    "ตำบลแก่งหางแมว, อำเภอแก่งหางแมว, จันทบุรี, 22160",
    "ตำบลขุนซ่อง, อำเภอแก่งหางแมว, จันทบุรี, 22160",
    "ตำบลพวา, อำเภอแก่งหางแมว, จันทบุรี, 22160",
    "ตำบลสามพี่น้อง, อำเภอแก่งหางแมว, จันทบุรี, 22160",
    "ตำบลช้างข้าม, อำเภอนายายอาม, จันทบุรี, 22160",
    "ตำบลนายายอาม, อำเภอนายายอาม, จันทบุรี, 22160",
    "ตำบลกองดิน, อำเภอแกลง, ระยอง, 22160",
    "ตำบลเขาแก้ว, อำเภอท่าใหม่, จันทบุรี, 22170",
    "ตำบลโขมง, อำเภอท่าใหม่, จันทบุรี, 22170",
    "ตำบลทุ่งเบญจา, อำเภอท่าใหม่, จันทบุรี, 22170",
    "ตำบลรำพัน, อำเภอท่าใหม่, จันทบุรี, 22170",
    "ตำบลกระแจะ, อำเภอนายายอาม, จันทบุรี, 22170",
    "ตำบลวังโตนด, อำเภอนายายอาม, จันทบุรี, 22170",
    "ตำบลวังใหม่, อำเภอนายายอาม, จันทบุรี, 22170",
    "ตำบลสนามไชย, อำเภอนายายอาม, จันทบุรี, 22170",
    "ตำบลทรายขาว, อำเภอสอยดาว, จันทบุรี, 22180",
    "ตำบลทับช้าง, อำเภอสอยดาว, จันทบุรี, 22180",
    "ตำบลทุ่งขนาน, อำเภอสอยดาว, จันทบุรี, 22180",
    "ตำบลปะตง, อำเภอสอยดาว, จันทบุรี, 22180",
    "ตำบลสะตอน, อำเภอสอยดาว, จันทบุรี, 22180",
    "ตำบลคลองน้ำเค็ม, อำเภอแหลมสิงห์, จันทบุรี, 22190",
    "ตำบลบางสระเก้า, อำเภอแหลมสิงห์, จันทบุรี, 22190",
    "ตำบลพลิ้ว, อำเภอแหลมสิงห์, จันทบุรี, 22190",
    "ตำบลคลองพลู, อำเภอเขาคิชฌกูฏ, จันทบุรี, 22210",
    "ตำบลจันทเขลม, อำเภอเขาคิชฌกูฏ, จันทบุรี, 22210",
    "ตำบลชากไทย, อำเภอเขาคิชฌกูฏ, จันทบุรี, 22210",
    "ตำบลตะเคียนทอง, อำเภอเขาคิชฌกูฏ, จันทบุรี, 22210",
    "ตำบลพลวง, อำเภอเขาคิชฌกูฏ, จันทบุรี, 22210",
    "ตำบลเกาะกูด, อำเภอเกาะกูด, ตราด, 23000",
    "ตำบลเกาะหมาก, อำเภอเกาะกูด, ตราด, 23000",
    "ตำบลเนินทราย, อำเภอเมืองตราด, ตราด, 23000",
    "ตำบลแหลมกลัด, อำเภอเมืองตราด, ตราด, 23000",
    "ตำบลชำราก, อำเภอเมืองตราด, ตราด, 23000",
    "ตำบลตะกาง, อำเภอเมืองตราด, ตราด, 23000",
    "ตำบลท่ากุ่ม, อำเภอเมืองตราด, ตราด, 23000",
    "ตำบลท่าพริก, อำเภอเมืองตราด, ตราด, 23000",
    "ตำบลบางพระ, อำเภอเมืองตราด, ตราด, 23000",
    "ตำบลวังกระแจะ, อำเภอเมืองตราด, ตราด, 23000",
    "ตำบลหนองเสม็ด, อำเภอเมืองตราด, ตราด, 23000",
    "ตำบลหนองโสน, อำเภอเมืองตราด, ตราด, 23000",
    "ตำบลหนองคันทรง, อำเภอเมืองตราด, ตราด, 23000",
    "ตำบลห้วงน้ำขาว, อำเภอเมืองตราด, ตราด, 23000",
    "ตำบลห้วยแร้ง, อำเภอเมืองตราด, ตราด, 23000",
    "ตำบลอ่าวใหญ่, อำเภอเมืองตราด, ตราด, 23000",
    "ตำบลไม้รูด, อำเภอคลองใหญ่, ตราด, 23110",
    "ตำบลคลองใหญ่, อำเภอคลองใหญ่, ตราด, 23110",
    "ตำบลหาดเล็ก, อำเภอคลองใหญ่, ตราด, 23110",
    "ตำบลแหลมงอบ, อำเภอแหลมงอบ, ตราด, 23120",
    "ตำบลคลองใหญ่, อำเภอแหลมงอบ, ตราด, 23120",
    "ตำบลน้ำเชี่ยว, อำเภอแหลมงอบ, ตราด, 23120",
    "ตำบลบางปิด, อำเภอแหลมงอบ, ตราด, 23120",
    "ตำบลเขาสมิง, อำเภอเขาสมิง, ตราด, 23130",
    "ตำบลทุ่งนนทรี, อำเภอเขาสมิง, ตราด, 23130",
    "ตำบลวังตะเคียน, อำเภอเขาสมิง, ตราด, 23130",
    "ตำบลช้างทูน, อำเภอบ่อไร่, ตราด, 23140",
    "ตำบลด่านชุมพล, อำเภอบ่อไร่, ตราด, 23140",
    "ตำบลนนทรีย์, อำเภอบ่อไร่, ตราด, 23140",
    "ตำบลบ่อพลอย, อำเภอบ่อไร่, ตราด, 23140",
    "ตำบลหนองบอน, อำเภอบ่อไร่, ตราด, 23140",
    "ตำบลเทพนิมิต, อำเภอเขาสมิง, ตราด, 23150",
    "ตำบลแสนตุ้ง, อำเภอเขาสมิง, ตราด, 23150",
    "ตำบลท่าโสม, อำเภอเขาสมิง, ตราด, 23150",
    "ตำบลประณีต, อำเภอเขาสมิง, ตราด, 23150",
    "ตำบลสะตอ, อำเภอเขาสมิง, ตราด, 23150",
    "ตำบลเกาะช้าง, อำเภอเกาะช้าง, ตราด, 23170",
    "ตำบลเกาะช้างใต้, อำเภอเกาะช้าง, ตราด, 23170",
    "ตำบลโสธร, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลคลองเปรง, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลคลองจุกกระเฌอ, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลคลองนครเนื่องเขต, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลคลองนา, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลคลองหลวงแพ่ง, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลคลองอุดมชลจร, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลท่าไข่, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลบางเตย, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลบางแก้ว, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลบางไผ่, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลบางกะไห, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลบางขวัญ, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลบางตีนเป็ด, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลบางพระ, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลบ้านใหม่, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลวังตะเคียน, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลหน้าเมือง, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลหนามแดง, อำเภอเมืองฉะเชิงเทรา, ฉะเชิงเทรา, 24000",
    "ตำบลก้อนแก้ว, อำเภอคลองเขื่อน, ฉะเชิงเทรา, 24000",
    "ตำบลคลองเขื่อน, อำเภอคลองเขื่อน, ฉะเชิงเทรา, 24000",
    "ตำบลบางเล่า, อำเภอคลองเขื่อน, ฉะเชิงเทรา, 24000",
    "ตำบลบางโรง, อำเภอคลองเขื่อน, ฉะเชิงเทรา, 24000",
    "ตำบลศาลาแดง, อำเภอบางน้ำเปรี้ยว, ฉะเชิงเทรา, 24000",
    "ตำบลบางตลาด, อำเภอคลองเขื่อน, ฉะเชิงเทรา, 24110",
    "ตำบลเสม็ดเหนือ, อำเภอบางคล้า, ฉะเชิงเทรา, 24110",
    "ตำบลเสม็ดใต้, อำเภอบางคล้า, ฉะเชิงเทรา, 24110",
    "ตำบลท่าทองหลาง, อำเภอบางคล้า, ฉะเชิงเทรา, 24110",
    "ตำบลบางกระเจ็ด, อำเภอบางคล้า, ฉะเชิงเทรา, 24110",
    "ตำบลบางคล้า, อำเภอบางคล้า, ฉะเชิงเทรา, 24110",
    "ตำบลบางสวน, อำเภอบางคล้า, ฉะเชิงเทรา, 24110",
    "ตำบลปากน้ำ, อำเภอบางคล้า, ฉะเชิงเทรา, 24110",
    "ตำบลสาวชะโงก, อำเภอบางคล้า, ฉะเชิงเทรา, 24110",
    "ตำบลหัวไทร, อำเภอบางคล้า, ฉะเชิงเทรา, 24110",
    "ตำบลเกาะขนุน, อำเภอพนมสารคาม, ฉะเชิงเทรา, 24120",
    "ตำบลเขาหินซ้อน, อำเภอพนมสารคาม, ฉะเชิงเทรา, 24120",
    "ตำบลเมืองเก่า, อำเภอพนมสารคาม, ฉะเชิงเทรา, 24120",
    "ตำบลท่าถ่าน, อำเภอพนมสารคาม, ฉะเชิงเทรา, 24120",
    "ตำบลบ้านซ่อง, อำเภอพนมสารคาม, ฉะเชิงเทรา, 24120",
    "ตำบลพนมสารคาม, อำเภอพนมสารคาม, ฉะเชิงเทรา, 24120",
    "ตำบลหนองแหน, อำเภอพนมสารคาม, ฉะเชิงเทรา, 24120",
    "ตำบลหนองยาว, อำเภอพนมสารคาม, ฉะเชิงเทรา, 24120",
    "ตำบลเมืองใหม่, อำเภอราชสาส์น, ฉะเชิงเทรา, 24120",
    "ตำบลดงน้อย, อำเภอราชสาส์น, ฉะเชิงเทรา, 24120",
    "ตำบลบางคา, อำเภอราชสาส์น, ฉะเชิงเทรา, 24120",
    "ตำบลเขาดิน, อำเภอบางปะกง, ฉะเชิงเทรา, 24130",
    "ตำบลท่าข้าม, อำเภอบางปะกง, ฉะเชิงเทรา, 24130",
    "ตำบลท่าสะอ้าน, อำเภอบางปะกง, ฉะเชิงเทรา, 24130",
    "ตำบลบางปะกง, อำเภอบางปะกง, ฉะเชิงเทรา, 24130",
    "ตำบลบางผึ้ง, อำเภอบางปะกง, ฉะเชิงเทรา, 24130",
    "ตำบลสองคลอง, อำเภอบางปะกง, ฉะเชิงเทรา, 24130",
    "ตำบลหนองจอก, อำเภอบางปะกง, ฉะเชิงเทรา, 24130",
    "ตำบลเกาะไร่, อำเภอบ้านโพธิ์, ฉะเชิงเทรา, 24140",
    "ตำบลเทพราช, อำเภอบ้านโพธิ์, ฉะเชิงเทรา, 24140",
    "ตำบลแสนภูดาษ, อำเภอบ้านโพธิ์, ฉะเชิงเทรา, 24140",
    "ตำบลแหลมประดู่, อำเภอบ้านโพธิ์, ฉะเชิงเทรา, 24140",
    "ตำบลคลองขุด, อำเภอบ้านโพธิ์, ฉะเชิงเทรา, 24140",
    "ตำบลคลองบ้านโพธิ์, อำเภอบ้านโพธิ์, ฉะเชิงเทรา, 24140",
    "ตำบลคลองประเวศ, อำเภอบ้านโพธิ์, ฉะเชิงเทรา, 24140",
    "ตำบลดอนทราย, อำเภอบ้านโพธิ์, ฉะเชิงเทรา, 24140",
    "ตำบลท่าพลับ, อำเภอบ้านโพธิ์, ฉะเชิงเทรา, 24140",
    "ตำบลบางกรูด, อำเภอบ้านโพธิ์, ฉะเชิงเทรา, 24140",
    "ตำบลบางซ่อน, อำเภอบ้านโพธิ์, ฉะเชิงเทรา, 24140",
    "ตำบลบ้านโพธิ์, อำเภอบ้านโพธิ์, ฉะเชิงเทรา, 24140",
    "ตำบลลาดขวาง, อำเภอบ้านโพธิ์, ฉะเชิงเทรา, 24140",
    "ตำบลสนามจันทร์, อำเภอบ้านโพธิ์, ฉะเชิงเทรา, 24140",
    "ตำบลสิบเอ็ดศอก, อำเภอบ้านโพธิ์, ฉะเชิงเทรา, 24140",
    "ตำบลหนองตีนนก, อำเภอบ้านโพธิ์, ฉะเชิงเทรา, 24140",
    "ตำบลหนองบัว, อำเภอบ้านโพธิ์, ฉะเชิงเทรา, 24140",
    "ตำบลโพรงอากาศ, อำเภอบางน้ำเปรี้ยว, ฉะเชิงเทรา, 24150",
    "ตำบลโยธะกา, อำเภอบางน้ำเปรี้ยว, ฉะเชิงเทรา, 24150",
    "ตำบลบางขนาก, อำเภอบางน้ำเปรี้ยว, ฉะเชิงเทรา, 24150",
    "ตำบลบางน้ำเปรี้ยว, อำเภอบางน้ำเปรี้ยว, ฉะเชิงเทรา, 24150",
    "ตำบลสิงโตทอง, อำเภอบางน้ำเปรี้ยว, ฉะเชิงเทรา, 24150",
    "ตำบลหมอนทอง, อำเภอบางน้ำเปรี้ยว, ฉะเชิงเทรา, 24150",
    "ตำบลคลองตะเกรา, อำเภอท่าตะเกียบ, ฉะเชิงเทรา, 24160",
    "ตำบลท่าตะเกียบ, อำเภอท่าตะเกียบ, ฉะเชิงเทรา, 24160",
    "ตำบลคู้ยายหมี, อำเภอสนามชัยเขต, ฉะเชิงเทรา, 24160",
    "ตำบลท่ากระดาน, อำเภอสนามชัยเขต, ฉะเชิงเทรา, 24160",
    "ตำบลทุ่งพระยา, อำเภอสนามชัยเขต, ฉะเชิงเทรา, 24160",
    "ตำบลลาดกระทิง, อำเภอสนามชัยเขต, ฉะเชิงเทรา, 24160",
    "ตำบลดอนเกาะกา, อำเภอบางน้ำเปรี้ยว, ฉะเชิงเทรา, 24170",
    "ตำบลดอนฉิมพลี, อำเภอบางน้ำเปรี้ยว, ฉะเชิงเทรา, 24170",
    "ตำบลบึงน้ำรักษ์, อำเภอบางน้ำเปรี้ยว, ฉะเชิงเทรา, 24170",
    "ตำบลบางเกลือ, อำเภอบางปะกง, ฉะเชิงเทรา, 24180",
    "ตำบลบางวัว, อำเภอบางปะกง, ฉะเชิงเทรา, 24180",
    "ตำบลบางสมัคร, อำเภอบางปะกง, ฉะเชิงเทรา, 24180",
    "ตำบลพิมพา, อำเภอบางปะกง, ฉะเชิงเทรา, 24180",
    "ตำบลหอมศีล, อำเภอบางปะกง, ฉะเชิงเทรา, 24180",
    "ตำบลแปลงยาว, อำเภอแปลงยาว, ฉะเชิงเทรา, 24190",
    "ตำบลวังเย็น, อำเภอแปลงยาว, ฉะเชิงเทรา, 24190",
    "ตำบลหนองไม้แก่น, อำเภอแปลงยาว, ฉะเชิงเทรา, 24190",
    "ตำบลหัวสำโรง, อำเภอแปลงยาว, ฉะเชิงเทรา, 24190",
    "ตำบลโนนห้อม, อำเภอเมืองปราจีนบุรี, ปราจีนบุรี, 25000",
    "ตำบลดงขี้เหล็ก, อำเภอเมืองปราจีนบุรี, ปราจีนบุรี, 25000",
    "ตำบลดงพระราม, อำเภอเมืองปราจีนบุรี, ปราจีนบุรี, 25000",
    "ตำบลท่างาม, อำเภอเมืองปราจีนบุรี, ปราจีนบุรี, 25000",
    "ตำบลบางเดชะ, อำเภอเมืองปราจีนบุรี, ปราจีนบุรี, 25000",
    "ตำบลบางบริบูรณ์, อำเภอเมืองปราจีนบุรี, ปราจีนบุรี, 25000",
    "ตำบลรอบเมือง, อำเภอเมืองปราจีนบุรี, ปราจีนบุรี, 25000",
    "ตำบลวัดโบสถ์, อำเภอเมืองปราจีนบุรี, ปราจีนบุรี, 25000",
    "ตำบลหน้าเมือง, อำเภอเมืองปราจีนบุรี, ปราจีนบุรี, 25000",
    "ตำบลเขาไม้แก้ว, อำเภอกบินทร์บุรี, ปราจีนบุรี, 25110",
    "ตำบลกบินทร์, อำเภอกบินทร์บุรี, ปราจีนบุรี, 25110",
    "ตำบลนนทรี, อำเภอกบินทร์บุรี, ปราจีนบุรี, 25110",
    "ตำบลนาแขม, อำเภอกบินทร์บุรี, ปราจีนบุรี, 25110",
    "ตำบลบ่อทอง, อำเภอกบินทร์บุรี, ปราจีนบุรี, 25110",
    "ตำบลบ้านนา, อำเภอกบินทร์บุรี, ปราจีนบุรี, 25110",
    "ตำบลย่านรี, อำเภอกบินทร์บุรี, ปราจีนบุรี, 25110",
    "ตำบลลาดตะเคียน, อำเภอกบินทร์บุรี, ปราจีนบุรี, 25110",
    "ตำบลวังดาล, อำเภอกบินทร์บุรี, ปราจีนบุรี, 25110",
    "ตำบลวังตะเคียน, อำเภอกบินทร์บุรี, ปราจีนบุรี, 25110",
    "ตำบลวังท่าช้าง, อำเภอกบินทร์บุรี, ปราจีนบุรี, 25110",
    "ตำบลหนองกี่, อำเภอกบินทร์บุรี, ปราจีนบุรี, 25110",
    "ตำบลหาดนางแก้ว, อำเภอกบินทร์บุรี, ปราจีนบุรี, 25110",
    "ตำบลเกาะลอย, อำเภอประจันตคาม, ปราจีนบุรี, 25130",
    "ตำบลโพธิ์งาม, อำเภอประจันตคาม, ปราจีนบุรี, 25130",
    "ตำบลคำโตนด, อำเภอประจันตคาม, ปราจีนบุรี, 25130",
    "ตำบลดงบัง, อำเภอประจันตคาม, ปราจีนบุรี, 25130",
    "ตำบลบ้านหอย, อำเภอประจันตคาม, ปราจีนบุรี, 25130",
    "ตำบลบุฝ้าย, อำเภอประจันตคาม, ปราจีนบุรี, 25130",
    "ตำบลประจันตคาม, อำเภอประจันตคาม, ปราจีนบุรี, 25130",
    "ตำบลหนองแก้ว, อำเภอประจันตคาม, ปราจีนบุรี, 25130",
    "ตำบลหนองแสง, อำเภอประจันตคาม, ปราจีนบุรี, 25130",
    "ตำบลกรอกสมบูรณ์, อำเภอศรีมหาโพธิ, ปราจีนบุรี, 25140",
    "ตำบลดงกระทงยาม, อำเภอศรีมหาโพธิ, ปราจีนบุรี, 25140",
    "ตำบลท่าตูม, อำเภอศรีมหาโพธิ, ปราจีนบุรี, 25140",
    "ตำบลบางกุ้ง, อำเภอศรีมหาโพธิ, ปราจีนบุรี, 25140",
    "ตำบลบ้านทาม, อำเภอศรีมหาโพธิ, ปราจีนบุรี, 25140",
    "ตำบลศรีมหาโพธิ, อำเภอศรีมหาโพธิ, ปราจีนบุรี, 25140",
    "ตำบลสัมพันธ์, อำเภอศรีมหาโพธิ, ปราจีนบุรี, 25140",
    "ตำบลหนองโพรง, อำเภอศรีมหาโพธิ, ปราจีนบุรี, 25140",
    "ตำบลหัวหว้า, อำเภอศรีมหาโพธิ, ปราจีนบุรี, 25140",
    "ตำบลหาดยาง, อำเภอศรีมหาโพธิ, ปราจีนบุรี, 25140",
    "ตำบลกระทุ่มแพ้ว, อำเภอบ้านสร้าง, ปราจีนบุรี, 25150",
    "ตำบลบางเตย, อำเภอบ้านสร้าง, ปราจีนบุรี, 25150",
    "ตำบลบางแตน, อำเภอบ้านสร้าง, ปราจีนบุรี, 25150",
    "ตำบลบางกระเบา, อำเภอบ้านสร้าง, ปราจีนบุรี, 25150",
    "ตำบลบางขาม, อำเภอบ้านสร้าง, ปราจีนบุรี, 25150",
    "ตำบลบางปลาร้า, อำเภอบ้านสร้าง, ปราจีนบุรี, 25150",
    "ตำบลบางพลวง, อำเภอบ้านสร้าง, ปราจีนบุรี, 25150",
    "ตำบลบางยาง, อำเภอบ้านสร้าง, ปราจีนบุรี, 25150",
    "ตำบลบ้านสร้าง, อำเภอบ้านสร้าง, ปราจีนบุรี, 25150",
    "ตำบลโคกไทย, อำเภอศรีมโหสถ, ปราจีนบุรี, 25190",
    "ตำบลโคกปีบ, อำเภอศรีมโหสถ, ปราจีนบุรี, 25190",
    "ตำบลไผ่ชะเลือด, อำเภอศรีมโหสถ, ปราจีนบุรี, 25190",
    "ตำบลคู้ลำพัน, อำเภอศรีมโหสถ, ปราจีนบุรี, 25190",
    "ตำบลแก่งดินสอ, อำเภอนาดี, ปราจีนบุรี, 25220",
    "ตำบลทุ่งโพธิ์, อำเภอนาดี, ปราจีนบุรี, 25220",
    "ตำบลนาดี, อำเภอนาดี, ปราจีนบุรี, 25220",
    "ตำบลบุพราหมณ์, อำเภอนาดี, ปราจีนบุรี, 25220",
    "ตำบลสะพานหิน, อำเภอนาดี, ปราจีนบุรี, 25220",
    "ตำบลสำพันตา, อำเภอนาดี, ปราจีนบุรี, 25220",
    "ตำบลเนินหอม, อำเภอเมืองปราจีนบุรี, ปราจีนบุรี, 25230",
    "ตำบลโคกไม้ลาย, อำเภอเมืองปราจีนบุรี, ปราจีนบุรี, 25230",
    "ตำบลไม้เค็ด, อำเภอเมืองปราจีนบุรี, ปราจีนบุรี, 25230",
    "ตำบลบ้านพระ, อำเภอเมืองปราจีนบุรี, ปราจีนบุรี, 25230",
    "ตำบลเมืองเก่า, อำเภอกบินทร์บุรี, ปราจีนบุรี, 25240",
    "ตำบลเขาพระ, อำเภอเมืองนครนายก, นครนายก, 26000",
    "ตำบลดงละคร, อำเภอเมืองนครนายก, นครนายก, 26000",
    "ตำบลดอนยอ, อำเภอเมืองนครนายก, นครนายก, 26000",
    "ตำบลท่าช้าง, อำเภอเมืองนครนายก, นครนายก, 26000",
    "ตำบลท่าทราย, อำเภอเมืองนครนายก, นครนายก, 26000",
    "ตำบลนครนายก, อำเภอเมืองนครนายก, นครนายก, 26000",
    "ตำบลบ้านใหญ่, อำเภอเมืองนครนายก, นครนายก, 26000",
    "ตำบลพรหมณี, อำเภอเมืองนครนายก, นครนายก, 26000",
    "ตำบลวังกระโจม, อำเภอเมืองนครนายก, นครนายก, 26000",
    "ตำบลศรีจุฬา, อำเภอเมืองนครนายก, นครนายก, 26000",
    "ตำบลศรีนาวา, อำเภอเมืองนครนายก, นครนายก, 26000",
    "ตำบลสาริกา, อำเภอเมืองนครนายก, นครนายก, 26000",
    "ตำบลหินตั้ง, อำเภอเมืองนครนายก, นครนายก, 26000",
    "ตำบลเขาเพิ่ม, อำเภอบ้านนา, นครนายก, 26110",
    "ตำบลทองหลาง, อำเภอบ้านนา, นครนายก, 26110",
    "ตำบลบางอ้อ, อำเภอบ้านนา, นครนายก, 26110",
    "ตำบลบ้านนา, อำเภอบ้านนา, นครนายก, 26110",
    "ตำบลบ้านพร้าว, อำเภอบ้านนา, นครนายก, 26110",
    "ตำบลบ้านพริก, อำเภอบ้านนา, นครนายก, 26110",
    "ตำบลป่าขะ, อำเภอบ้านนา, นครนายก, 26110",
    "ตำบลพิกุลออก, อำเภอบ้านนา, นครนายก, 26110",
    "ตำบลศรีกะอาง, อำเภอบ้านนา, นครนายก, 26110",
    "ตำบลอาษา, อำเภอบ้านนา, นครนายก, 26110",
    "ตำบลโพธิ์แทน, อำเภอองครักษ์, นครนายก, 26120",
    "ตำบลคลองใหญ่, อำเภอองครักษ์, นครนายก, 26120",
    "ตำบลชุมพล, อำเภอองครักษ์, นครนายก, 26120",
    "ตำบลทรายมูล, อำเภอองครักษ์, นครนายก, 26120",
    "ตำบลบางปลากด, อำเภอองครักษ์, นครนายก, 26120",
    "ตำบลบางลูกเสือ, อำเภอองครักษ์, นครนายก, 26120",
    "ตำบลบางสมบูรณ์, อำเภอองครักษ์, นครนายก, 26120",
    "ตำบลบึงศาล, อำเภอองครักษ์, นครนายก, 26120",
    "ตำบลพระอาจารย์, อำเภอองครักษ์, นครนายก, 26120",
    "ตำบลศีรษะกระบือ, อำเภอองครักษ์, นครนายก, 26120",
    "ตำบลองครักษ์, อำเภอองครักษ์, นครนายก, 26120",
    "ตำบลเกาะโพธิ์, อำเภอปากพลี, นครนายก, 26130",
    "ตำบลเกาะหวาย, อำเภอปากพลี, นครนายก, 26130",
    "ตำบลโคกกรวด, อำเภอปากพลี, นครนายก, 26130",
    "ตำบลท่าเรือ, อำเภอปากพลี, นครนายก, 26130",
    "ตำบลนาหินลาด, อำเภอปากพลี, นครนายก, 26130",
    "ตำบลปากพลี, อำเภอปากพลี, นครนายก, 26130",
    "ตำบลหนองแสง, อำเภอปากพลี, นครนายก, 26130",
    "ตำบลเขาฉกรรจ์, อำเภอเขาฉกรรจ์, สระแก้ว, 27000",
    "ตำบลเขาสามสิบ, อำเภอเขาฉกรรจ์, สระแก้ว, 27000",
    "ตำบลพระเพลิง, อำเภอเขาฉกรรจ์, สระแก้ว, 27000",
    "ตำบลหนองหว้า, อำเภอเขาฉกรรจ์, สระแก้ว, 27000",
    "ตำบลโคกปี่ฆ้อง, อำเภอเมืองสระแก้ว, สระแก้ว, 27000",
    "ตำบลท่าเกษม, อำเภอเมืองสระแก้ว, สระแก้ว, 27000",
    "ตำบลท่าแยก, อำเภอเมืองสระแก้ว, สระแก้ว, 27000",
    "ตำบลบ้านแก้ง, อำเภอเมืองสระแก้ว, สระแก้ว, 27000",
    "ตำบลศาลาลำดวน, อำเภอเมืองสระแก้ว, สระแก้ว, 27000",
    "ตำบลสระแก้ว, อำเภอเมืองสระแก้ว, สระแก้ว, 27000",
    "ตำบลสระขวัญ, อำเภอเมืองสระแก้ว, สระแก้ว, 27000",
    "ตำบลหนองบอน, อำเภอเมืองสระแก้ว, สระแก้ว, 27000",
    "ตำบลโคกสูง, อำเภอโคกสูง, สระแก้ว, 27120",
    "ตำบลโนนหมากมุ่น, อำเภอโคกสูง, สระแก้ว, 27120",
    "ตำบลเมืองไผ่, อำเภออรัญประเทศ, สระแก้ว, 27120",
    "ตำบลคลองทับจันทร์, อำเภออรัญประเทศ, สระแก้ว, 27120",
    "ตำบลคลองน้ำใส, อำเภออรัญประเทศ, สระแก้ว, 27120",
    "ตำบลทับพริก, อำเภออรัญประเทศ, สระแก้ว, 27120",
    "ตำบลท่าข้าม, อำเภออรัญประเทศ, สระแก้ว, 27120",
    "ตำบลบ้านใหม่หนองไทร, อำเภออรัญประเทศ, สระแก้ว, 27120",
    "ตำบลบ้านด่าน, อำเภออรัญประเทศ, สระแก้ว, 27120",
    "ตำบลป่าไร่, อำเภออรัญประเทศ, สระแก้ว, 27120",
    "ตำบลผ่านศึก, อำเภออรัญประเทศ, สระแก้ว, 27120",
    "ตำบลฟากห้วย, อำเภออรัญประเทศ, สระแก้ว, 27120",
    "ตำบลหนองสังข์, อำเภออรัญประเทศ, สระแก้ว, 27120",
    "ตำบลหันทราย, อำเภออรัญประเทศ, สระแก้ว, 27120",
    "ตำบลอรัญประเทศ, อำเภออรัญประเทศ, สระแก้ว, 27120",
    "ตำบลแซร์ออ, อำเภอวัฒนานคร, สระแก้ว, 27160",
    "ตำบลโนนหมากเค็ง, อำเภอวัฒนานคร, สระแก้ว, 27160",
    "ตำบลช่องกุ่ม, อำเภอวัฒนานคร, สระแก้ว, 27160",
    "ตำบลท่าเกวียน, อำเภอวัฒนานคร, สระแก้ว, 27160",
    "ตำบลผักขะ, อำเภอวัฒนานคร, สระแก้ว, 27160",
    "ตำบลวัฒนานคร, อำเภอวัฒนานคร, สระแก้ว, 27160",
    "ตำบลหนองแวง, อำเภอวัฒนานคร, สระแก้ว, 27160",
    "ตำบลหนองตะเคียนบอน, อำเภอวัฒนานคร, สระแก้ว, 27160",
    "ตำบลหนองน้ำใส, อำเภอวัฒนานคร, สระแก้ว, 27160",
    "ตำบลหนองหมากฝ้าย, อำเภอวัฒนานคร, สระแก้ว, 27160",
    "ตำบลห้วยโจด, อำเภอวัฒนานคร, สระแก้ว, 27160",
    "ตำบลหนองแวง, อำเภอโคกสูง, สระแก้ว, 27180",
    "ตำบลหนองม่วง, อำเภอโคกสูง, สระแก้ว, 27180",
    "ตำบลโคคลาน, อำเภอตาพระยา, สระแก้ว, 27180",
    "ตำบลตาพระยา, อำเภอตาพระยา, สระแก้ว, 27180",
    "ตำบลทัพเสด็จ, อำเภอตาพระยา, สระแก้ว, 27180",
    "ตำบลทัพไทย, อำเภอตาพระยา, สระแก้ว, 27180",
    "ตำบลทัพราช, อำเภอตาพระยา, สระแก้ว, 27180",
    "ตำบลคลองหินปูน, อำเภอวังน้ำเย็น, สระแก้ว, 27210",
    "ตำบลตาหลังใน, อำเภอวังน้ำเย็น, สระแก้ว, 27210",
    "ตำบลทุ่งมหาเจริญ, อำเภอวังน้ำเย็น, สระแก้ว, 27210",
    "ตำบลวังน้ำเย็น, อำเภอวังน้ำเย็น, สระแก้ว, 27210",
    "ตำบลวังใหม่, อำเภอวังสมบูรณ์, สระแก้ว, 27250",
    "ตำบลวังทอง, อำเภอวังสมบูรณ์, สระแก้ว, 27250",
    "ตำบลวังสมบูรณ์, อำเภอวังสมบูรณ์, สระแก้ว, 27250",
    "ตำบลเบญจขร, อำเภอคลองหาด, สระแก้ว, 27260",
    "ตำบลไทยอุดม, อำเภอคลองหาด, สระแก้ว, 27260",
    "ตำบลไทรเดี่ยว, อำเภอคลองหาด, สระแก้ว, 27260",
    "ตำบลไทรทอง, อำเภอคลองหาด, สระแก้ว, 27260",
    "ตำบลคลองไก่เถื่อน, อำเภอคลองหาด, สระแก้ว, 27260",
    "ตำบลคลองหาด, อำเภอคลองหาด, สระแก้ว, 27260",
    "ตำบลซับมะกรูด, อำเภอคลองหาด, สระแก้ว, 27260",
    "ตำบลหนองงูเหลือม, อำเภอเฉลิมพระเกียรติ, นครราชสีมา, 30000",
    "ตำบลโพธิ์กลาง, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลในเมือง, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลไชยมงคล, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลบ้านเกาะ, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลบ้านใหม่, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลปรุใหญ่, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลพลกรัง, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลพะเนา, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลพุดซา, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลมะเริง, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลสีมุม, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลสุรนารี, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลหนองไผ่ล้อม, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลหนองกระทุ่ม, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลหนองจะบก, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลหนองบัวศาลา, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลหนองระเวียง, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลหมื่นไวย, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลหัวทะเล, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30000",
    "ตำบลโบสถ์, อำเภอพิมาย, นครราชสีมา, 30110",
    "ตำบลในเมือง, อำเภอพิมาย, นครราชสีมา, 30110",
    "ตำบลกระเบื้องใหญ่, อำเภอพิมาย, นครราชสีมา, 30110",
    "ตำบลกระชอน, อำเภอพิมาย, นครราชสีมา, 30110",
    "ตำบลชีวาน, อำเภอพิมาย, นครราชสีมา, 30110",
    "ตำบลดงใหญ่, อำเภอพิมาย, นครราชสีมา, 30110",
    "ตำบลท่าหลวง, อำเภอพิมาย, นครราชสีมา, 30110",
    "ตำบลธารละหลอด, อำเภอพิมาย, นครราชสีมา, 30110",
    "ตำบลนิคมสร้างตนเอง, อำเภอพิมาย, นครราชสีมา, 30110",
    "ตำบลรังกาใหญ่, อำเภอพิมาย, นครราชสีมา, 30110",
    "ตำบลสัมฤทธิ์, อำเภอพิมาย, นครราชสีมา, 30110",
    "ตำบลหนองระเวียง, อำเภอพิมาย, นครราชสีมา, 30110",
    "ตำบลเสมาใหญ่, อำเภอบัวใหญ่, นครราชสีมา, 30120",
    "ตำบลโนนทองหลาง, อำเภอบัวใหญ่, นครราชสีมา, 30120",
    "ตำบลกุดจอก, อำเภอบัวใหญ่, นครราชสีมา, 30120",
    "ตำบลขุนทอง, อำเภอบัวใหญ่, นครราชสีมา, 30120",
    "ตำบลดอนตะหนิน, อำเภอบัวใหญ่, นครราชสีมา, 30120",
    "ตำบลด่านช้าง, อำเภอบัวใหญ่, นครราชสีมา, 30120",
    "ตำบลบัวใหญ่, อำเภอบัวใหญ่, นครราชสีมา, 30120",
    "ตำบลหนองแจ้งใหญ่, อำเภอบัวใหญ่, นครราชสีมา, 30120",
    "ตำบลหนองบัวสะอาด, อำเภอบัวใหญ่, นครราชสีมา, 30120",
    "ตำบลห้วยยาง, อำเภอบัวใหญ่, นครราชสีมา, 30120",
    "ตำบลเมืองพะไล, อำเภอบัวลาย, นครราชสีมา, 30120",
    "ตำบลโนนจาน, อำเภอบัวลาย, นครราชสีมา, 30120",
    "ตำบลบัวลาย, อำเภอบัวลาย, นครราชสีมา, 30120",
    "ตำบลหนองหว้า, อำเภอบัวลาย, นครราชสีมา, 30120",
    "ตำบลโป่งตาลอง, อำเภอปากช่อง, นครราชสีมา, 30130",
    "ตำบลขนงพระ, อำเภอปากช่อง, นครราชสีมา, 30130",
    "ตำบลคลองม่วง, อำเภอปากช่อง, นครราชสีมา, 30130",
    "ตำบลจันทึก, อำเภอปากช่อง, นครราชสีมา, 30130",
    "ตำบลปากช่อง, อำเภอปากช่อง, นครราชสีมา, 30130",
    "ตำบลวังไทร, อำเภอปากช่อง, นครราชสีมา, 30130",
    "ตำบลวังกะทะ, อำเภอปากช่อง, นครราชสีมา, 30130",
    "ตำบลหนองน้ำแดง, อำเภอปากช่อง, นครราชสีมา, 30130",
    "ตำบลหนองสาหร่าย, อำเภอปากช่อง, นครราชสีมา, 30130",
    "ตำบลหมูสี, อำเภอปากช่อง, นครราชสีมา, 30130",
    "ตำบลลำพญากลาง, อำเภอมวกเหล็ก, สระบุรี, 30130",
    "ตำบลลำสมพุง, อำเภอมวกเหล็ก, สระบุรี, 30130",
    "ตำบลกฤษณา, อำเภอสีคิ้ว, นครราชสีมา, 30140",
    "ตำบลกุดน้อย, อำเภอสีคิ้ว, นครราชสีมา, 30140",
    "ตำบลดอนเมือง, อำเภอสีคิ้ว, นครราชสีมา, 30140",
    "ตำบลบ้านหัน, อำเภอสีคิ้ว, นครราชสีมา, 30140",
    "ตำบลมิตรภาพ, อำเภอสีคิ้ว, นครราชสีมา, 30140",
    "ตำบลวังโรงใหญ่, อำเภอสีคิ้ว, นครราชสีมา, 30140",
    "ตำบลสีคิ้ว, อำเภอสีคิ้ว, นครราชสีมา, 30140",
    "ตำบลหนองน้ำใส, อำเภอสีคิ้ว, นครราชสีมา, 30140",
    "ตำบลหนองบัวน้อย, อำเภอสีคิ้ว, นครราชสีมา, 30140",
    "ตำบลหนองหญ้าขาว, อำเภอสีคิ้ว, นครราชสีมา, 30140",
    "ตำบลเกษมทรัพย์, อำเภอปักธงชัย, นครราชสีมา, 30150",
    "ตำบลเมืองปัก, อำเภอปักธงชัย, นครราชสีมา, 30150",
    "ตำบลโคกไทย, อำเภอปักธงชัย, นครราชสีมา, 30150",
    "ตำบลงิ้ว, อำเภอปักธงชัย, นครราชสีมา, 30150",
    "ตำบลดอน, อำเภอปักธงชัย, นครราชสีมา, 30150",
    "ตำบลตะขบ, อำเภอปักธงชัย, นครราชสีมา, 30150",
    "ตำบลตะคุ, อำเภอปักธงชัย, นครราชสีมา, 30150",
    "ตำบลตูม, อำเภอปักธงชัย, นครราชสีมา, 30150",
    "ตำบลธงชัยเหนือ, อำเภอปักธงชัย, นครราชสีมา, 30150",
    "ตำบลนกออก, อำเภอปักธงชัย, นครราชสีมา, 30150",
    "ตำบลบ่อปลาทอง, อำเภอปักธงชัย, นครราชสีมา, 30150",
    "ตำบลภูหลวง, อำเภอปักธงชัย, นครราชสีมา, 30150",
    "ตำบลลำนางแก้ว, อำเภอปักธงชัย, นครราชสีมา, 30150",
    "ตำบลสะแกราช, อำเภอปักธงชัย, นครราชสีมา, 30150",
    "ตำบลสำโรง, อำเภอปักธงชัย, นครราชสีมา, 30150",
    "ตำบลสุขเกษม, อำเภอปักธงชัย, นครราชสีมา, 30150",
    "ตำบลระเริง, อำเภอวังน้ำเขียว, นครราชสีมา, 30150",
    "ตำบลเมืองปราสาท, อำเภอโนนสูง, นครราชสีมา, 30160",
    "ตำบลโตนด, อำเภอโนนสูง, นครราชสีมา, 30160",
    "ตำบลโนนสูง, อำเภอโนนสูง, นครราชสีมา, 30160",
    "ตำบลใหม่, อำเภอโนนสูง, นครราชสีมา, 30160",
    "ตำบลขามเฒ่า, อำเภอโนนสูง, นครราชสีมา, 30160",
    "ตำบลจันอัด, อำเภอโนนสูง, นครราชสีมา, 30160",
    "ตำบลดอนชมพู, อำเภอโนนสูง, นครราชสีมา, 30160",
    "ตำบลดอนหวาย, อำเภอโนนสูง, นครราชสีมา, 30160",
    "ตำบลด่านคล้า, อำเภอโนนสูง, นครราชสีมา, 30160",
    "ตำบลบิง, อำเภอโนนสูง, นครราชสีมา, 30160",
    "ตำบลพลสงคราม, อำเภอโนนสูง, นครราชสีมา, 30160",
    "ตำบลมะค่า, อำเภอโนนสูง, นครราชสีมา, 30160",
    "ตำบลลำคอหงษ์, อำเภอโนนสูง, นครราชสีมา, 30160",
    "ตำบลลำมูล, อำเภอโนนสูง, นครราชสีมา, 30160",
    "ตำบลหลุมข้าว, อำเภอโนนสูง, นครราชสีมา, 30160",
    "ตำบลเสมา, อำเภอสูงเนิน, นครราชสีมา, 30170",
    "ตำบลโค้งยาง, อำเภอสูงเนิน, นครราชสีมา, 30170",
    "ตำบลโคราช, อำเภอสูงเนิน, นครราชสีมา, 30170",
    "ตำบลโนนค่า, อำเภอสูงเนิน, นครราชสีมา, 30170",
    "ตำบลบุ่งขี้เหล็ก, อำเภอสูงเนิน, นครราชสีมา, 30170",
    "ตำบลมะเกลือเก่า, อำเภอสูงเนิน, นครราชสีมา, 30170",
    "ตำบลมะเกลือใหม่, อำเภอสูงเนิน, นครราชสีมา, 30170",
    "ตำบลสูงเนิน, อำเภอสูงเนิน, นครราชสีมา, 30170",
    "ตำบลเมืองโดน, อำเภอประทาย, นครราชสีมา, 30180",
    "ตำบลโคกกลาง, อำเภอประทาย, นครราชสีมา, 30180",
    "ตำบลโนนเพ็ด, อำเภอประทาย, นครราชสีมา, 30180",
    "ตำบลกระทุ่มราย, อำเภอประทาย, นครราชสีมา, 30180",
    "ตำบลดอนมัน, อำเภอประทาย, นครราชสีมา, 30180",
    "ตำบลตลาดไทร, อำเภอประทาย, นครราชสีมา, 30180",
    "ตำบลทุ่งสว่าง, อำเภอประทาย, นครราชสีมา, 30180",
    "ตำบลนางรำ, อำเภอประทาย, นครราชสีมา, 30180",
    "ตำบลประทาย, อำเภอประทาย, นครราชสีมา, 30180",
    "ตำบลวังไม้แดง, อำเภอประทาย, นครราชสีมา, 30180",
    "ตำบลหนองค่าย, อำเภอประทาย, นครราชสีมา, 30180",
    "ตำบลหนองพลวง, อำเภอประทาย, นครราชสีมา, 30180",
    "ตำบลหันห้วยทราย, อำเภอประทาย, นครราชสีมา, 30180",
    "ตำบลโชคชัย, อำเภอโชคชัย, นครราชสีมา, 30190",
    "ตำบลกระโทก, อำเภอโชคชัย, นครราชสีมา, 30190",
    "ตำบลด่านเกวียน, อำเภอโชคชัย, นครราชสีมา, 30190",
    "ตำบลท่าเยี่ยม, อำเภอโชคชัย, นครราชสีมา, 30190",
    "ตำบลท่าจะหลุง, อำเภอโชคชัย, นครราชสีมา, 30190",
    "ตำบลท่าลาดขาว, อำเภอโชคชัย, นครราชสีมา, 30190",
    "ตำบลท่าอ่าง, อำเภอโชคชัย, นครราชสีมา, 30190",
    "ตำบลทุ่งอรุณ, อำเภอโชคชัย, นครราชสีมา, 30190",
    "ตำบลพลับพลา, อำเภอโชคชัย, นครราชสีมา, 30190",
    "ตำบลละลมใหม่พัฒนา, อำเภอโชคชัย, นครราชสีมา, 30190",
    "ตำบลบึงปรือ, อำเภอเทพารักษ์, นครราชสีมา, 30210",
    "ตำบลวังยายทอง, อำเภอเทพารักษ์, นครราชสีมา, 30210",
    "ตำบลสำนักตะคร้อ, อำเภอเทพารักษ์, นครราชสีมา, 30210",
    "ตำบลหนองแวง, อำเภอเทพารักษ์, นครราชสีมา, 30210",
    "ตำบลโนนเมืองพัฒนา, อำเภอด่านขุนทด, นครราชสีมา, 30210",
    "ตำบลกุดพิมาน, อำเภอด่านขุนทด, นครราชสีมา, 30210",
    "ตำบลด่านใน, อำเภอด่านขุนทด, นครราชสีมา, 30210",
    "ตำบลด่านขุนทด, อำเภอด่านขุนทด, นครราชสีมา, 30210",
    "ตำบลด่านนอก, อำเภอด่านขุนทด, นครราชสีมา, 30210",
    "ตำบลตะเคียน, อำเภอด่านขุนทด, นครราชสีมา, 30210",
    "ตำบลบ้านเก่า, อำเภอด่านขุนทด, นครราชสีมา, 30210",
    "ตำบลพันชนะ, อำเภอด่านขุนทด, นครราชสีมา, 30210",
    "ตำบลสระจรเข้, อำเภอด่านขุนทด, นครราชสีมา, 30210",
    "ตำบลหนองกราด, อำเภอด่านขุนทด, นครราชสีมา, 30210",
    "ตำบลหนองบัวตะเกียด, อำเภอด่านขุนทด, นครราชสีมา, 30210",
    "ตำบลหนองบัวละคร, อำเภอด่านขุนทด, นครราชสีมา, 30210",
    "ตำบลห้วยบง, อำเภอด่านขุนทด, นครราชสีมา, 30210",
    "ตำบลหินดาด, อำเภอด่านขุนทด, นครราชสีมา, 30210",
    "ตำบลโนนไทย, อำเภอโนนไทย, นครราชสีมา, 30220",
    "ตำบลกำปัง, อำเภอโนนไทย, นครราชสีมา, 30220",
    "ตำบลค้างพลู, อำเภอโนนไทย, นครราชสีมา, 30220",
    "ตำบลด่านจาก, อำเภอโนนไทย, นครราชสีมา, 30220",
    "ตำบลถนนโพธิ์, อำเภอโนนไทย, นครราชสีมา, 30220",
    "ตำบลบัลลังก์, อำเภอโนนไทย, นครราชสีมา, 30220",
    "ตำบลบ้านวัง, อำเภอโนนไทย, นครราชสีมา, 30220",
    "ตำบลมะค่า, อำเภอโนนไทย, นครราชสีมา, 30220",
    "ตำบลสายออ, อำเภอโนนไทย, นครราชสีมา, 30220",
    "ตำบลสำโรง, อำเภอโนนไทย, นครราชสีมา, 30220",
    "ตำบลทัพรั้ง, อำเภอพระทองคำ, นครราชสีมา, 30220",
    "ตำบลพังเทียม, อำเภอพระทองคำ, นครราชสีมา, 30220",
    "ตำบลมาบกราด, อำเภอพระทองคำ, นครราชสีมา, 30220",
    "ตำบลสระพระ, อำเภอพระทองคำ, นครราชสีมา, 30220",
    "ตำบลหนองหอย, อำเภอพระทองคำ, นครราชสีมา, 30220",
    "ตำบลช้างทอง, อำเภอเฉลิมพระเกียรติ, นครราชสีมา, 30230",
    "ตำบลท่าช้าง, อำเภอเฉลิมพระเกียรติ, นครราชสีมา, 30230",
    "ตำบลพระพุทธ, อำเภอเฉลิมพระเกียรติ, นครราชสีมา, 30230",
    "ตำบลหนองยาง, อำเภอเฉลิมพระเกียรติ, นครราชสีมา, 30230",
    "ตำบลคลองเมือง, อำเภอจักราช, นครราชสีมา, 30230",
    "ตำบลจักราช, อำเภอจักราช, นครราชสีมา, 30230",
    "ตำบลทองหลาง, อำเภอจักราช, นครราชสีมา, 30230",
    "ตำบลศรีละกอ, อำเภอจักราช, นครราชสีมา, 30230",
    "ตำบลสีสุก, อำเภอจักราช, นครราชสีมา, 30230",
    "ตำบลหนองขาม, อำเภอจักราช, นครราชสีมา, 30230",
    "ตำบลหนองพลวง, อำเภอจักราช, นครราชสีมา, 30230",
    "ตำบลหินโคน, อำเภอจักราช, นครราชสีมา, 30230",
    "ตำบลเมืองพลับพลา, อำเภอห้วยแถลง, นครราชสีมา, 30240",
    "ตำบลกงรถ, อำเภอห้วยแถลง, นครราชสีมา, 30240",
    "ตำบลงิ้ว, อำเภอห้วยแถลง, นครราชสีมา, 30240",
    "ตำบลตะโก, อำเภอห้วยแถลง, นครราชสีมา, 30240",
    "ตำบลทับสวาย, อำเภอห้วยแถลง, นครราชสีมา, 30240",
    "ตำบลหลุ่งตะเคียน, อำเภอห้วยแถลง, นครราชสีมา, 30240",
    "ตำบลหลุ่งประดู่, อำเภอห้วยแถลง, นครราชสีมา, 30240",
    "ตำบลห้วยแคน, อำเภอห้วยแถลง, นครราชสีมา, 30240",
    "ตำบลห้วยแถลง, อำเภอห้วยแถลง, นครราชสีมา, 30240",
    "ตำบลหินดาด, อำเภอห้วยแถลง, นครราชสีมา, 30240",
    "ตำบลเฉลียง, อำเภอครบุรี, นครราชสีมา, 30250",
    "ตำบลแชะ, อำเภอครบุรี, นครราชสีมา, 30250",
    "ตำบลโคกกระชาย, อำเภอครบุรี, นครราชสีมา, 30250",
    "ตำบลครบุรี, อำเภอครบุรี, นครราชสีมา, 30250",
    "ตำบลครบุรีใต้, อำเภอครบุรี, นครราชสีมา, 30250",
    "ตำบลจระเข้หิน, อำเภอครบุรี, นครราชสีมา, 30250",
    "ตำบลตะแบกบาน, อำเภอครบุรี, นครราชสีมา, 30250",
    "ตำบลบ้านใหม่, อำเภอครบุรี, นครราชสีมา, 30250",
    "ตำบลมาบตะโกเอน, อำเภอครบุรี, นครราชสีมา, 30250",
    "ตำบลลำเพียก, อำเภอครบุรี, นครราชสีมา, 30250",
    "ตำบลสระว่านพระยา, อำเภอครบุรี, นครราชสีมา, 30250",
    "ตำบลอรพิมพ์, อำเภอครบุรี, นครราชสีมา, 30250",
    "ตำบลเทพาลัย, อำเภอคง, นครราชสีมา, 30260",
    "ตำบลเมืองคง, อำเภอคง, นครราชสีมา, 30260",
    "ตำบลโนนเต็ง, อำเภอคง, นครราชสีมา, 30260",
    "ตำบลขามสมบูรณ์, อำเภอคง, นครราชสีมา, 30260",
    "ตำบลคูขาด, อำเภอคง, นครราชสีมา, 30260",
    "ตำบลดอนใหญ่, อำเภอคง, นครราชสีมา, 30260",
    "ตำบลตาจั่น, อำเภอคง, นครราชสีมา, 30260",
    "ตำบลบ้านปรางค์, อำเภอคง, นครราชสีมา, 30260",
    "ตำบลหนองบัว, อำเภอคง, นครราชสีมา, 30260",
    "ตำบลหนองมะนาว, อำเภอคง, นครราชสีมา, 30260",
    "ตำบลเมืองยาง, อำเภอเมืองยาง, นครราชสีมา, 30270",
    "ตำบลโนนอุดม, อำเภอเมืองยาง, นครราชสีมา, 30270",
    "ตำบลกระเบื้องนอก, อำเภอเมืองยาง, นครราชสีมา, 30270",
    "ตำบลละหานปลาค้าว, อำเภอเมืองยาง, นครราชสีมา, 30270",
    "ตำบลโนนตูม, อำเภอชุมพวง, นครราชสีมา, 30270",
    "ตำบลโนนยอ, อำเภอชุมพวง, นครราชสีมา, 30270",
    "ตำบลโนนรัง, อำเภอชุมพวง, นครราชสีมา, 30270",
    "ตำบลชุมพวง, อำเภอชุมพวง, นครราชสีมา, 30270",
    "ตำบลตลาดไทร, อำเภอชุมพวง, นครราชสีมา, 30270",
    "ตำบลท่าลาด, อำเภอชุมพวง, นครราชสีมา, 30270",
    "ตำบลประสุข, อำเภอชุมพวง, นครราชสีมา, 30270",
    "ตำบลสาหร่าย, อำเภอชุมพวง, นครราชสีมา, 30270",
    "ตำบลหนองหลัก, อำเภอชุมพวง, นครราชสีมา, 30270",
    "ตำบลไพล, อำเภอลำทะเมนชัย, นครราชสีมา, 30270",
    "ตำบลขุย, อำเภอลำทะเมนชัย, นครราชสีมา, 30270",
    "ตำบลช่องแมว, อำเภอลำทะเมนชัย, นครราชสีมา, 30270",
    "ตำบลบ้านยาง, อำเภอลำทะเมนชัย, นครราชสีมา, 30270",
    "ตำบลโคกกรวด, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30280",
    "ตำบลโป่งแดง, อำเภอขามทะเลสอ, นครราชสีมา, 30280",
    "ตำบลขามทะเลสอ, อำเภอขามทะเลสอ, นครราชสีมา, 30280",
    "ตำบลบึงอ้อ, อำเภอขามทะเลสอ, นครราชสีมา, 30280",
    "ตำบลพันดุง, อำเภอขามทะเลสอ, นครราชสีมา, 30280",
    "ตำบลหนองสรวง, อำเภอขามทะเลสอ, นครราชสีมา, 30280",
    "ตำบลเมืองเกษตร, อำเภอขามสะแกแสง, นครราชสีมา, 30290",
    "ตำบลเมืองนาท, อำเภอขามสะแกแสง, นครราชสีมา, 30290",
    "ตำบลโนนเมือง, อำเภอขามสะแกแสง, นครราชสีมา, 30290",
    "ตำบลขามสะแกแสง, อำเภอขามสะแกแสง, นครราชสีมา, 30290",
    "ตำบลชีวึก, อำเภอขามสะแกแสง, นครราชสีมา, 30290",
    "ตำบลพะงาด, อำเภอขามสะแกแสง, นครราชสีมา, 30290",
    "ตำบลหนองหัวฟาน, อำเภอขามสะแกแสง, นครราชสีมา, 30290",
    "ตำบลโคกสูง, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30310",
    "ตำบลจอหอ, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30310",
    "ตำบลตลาด, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30310",
    "ตำบลบ้านโพธิ์, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30310",
    "ตำบลหนองไข่น้ำ, อำเภอเมืองนครราชสีมา, นครราชสีมา, 30310",
    "ตำบลกลางดง, อำเภอปากช่อง, นครราชสีมา, 30320",
    "ตำบลพญาเย็น, อำเภอปากช่อง, นครราชสีมา, 30320",
    "ตำบลเสิงสาง, อำเภอเสิงสาง, นครราชสีมา, 30330",
    "ตำบลโนนสมบูรณ์, อำเภอเสิงสาง, นครราชสีมา, 30330",
    "ตำบลกุดโบสถ์, อำเภอเสิงสาง, นครราชสีมา, 30330",
    "ตำบลบ้านราษฎร์, อำเภอเสิงสาง, นครราชสีมา, 30330",
    "ตำบลสระตะเคียน, อำเภอเสิงสาง, นครราชสีมา, 30330",
    "ตำบลสุขไพบูลย์, อำเภอเสิงสาง, นครราชสีมา, 30330",
    "ตำบลคลองไผ่, อำเภอสีคิ้ว, นครราชสีมา, 30340",
    "ตำบลลาดบัวขาว, อำเภอสีคิ้ว, นครราชสีมา, 30340",
    "ตำบลโคกกระเบื้อง, อำเภอบ้านเหลื่อม, นครราชสีมา, 30350",
    "ตำบลช่อระกา, อำเภอบ้านเหลื่อม, นครราชสีมา, 30350",
    "ตำบลบ้านเหลื่อม, อำเภอบ้านเหลื่อม, นครราชสีมา, 30350",
    "ตำบลวังโพธิ์, อำเภอบ้านเหลื่อม, นครราชสีมา, 30350",
    "ตำบลโนนแดง, อำเภอโนนแดง, นครราชสีมา, 30360",
    "ตำบลโนนตาเถร, อำเภอโนนแดง, นครราชสีมา, 30360",
    "ตำบลดอนยาวใหญ่, อำเภอโนนแดง, นครราชสีมา, 30360",
    "ตำบลวังหิน, อำเภอโนนแดง, นครราชสีมา, 30360",
    "ตำบลสำพะเนียง, อำเภอโนนแดง, นครราชสีมา, 30360",
    "ตำบลไทยสามัคคี, อำเภอวังน้ำเขียว, นครราชสีมา, 30370",
    "ตำบลวังน้ำเขียว, อำเภอวังน้ำเขียว, นครราชสีมา, 30370",
    "ตำบลวังหมี, อำเภอวังน้ำเขียว, นครราชสีมา, 30370",
    "ตำบลอุดมทรัพย์, อำเภอวังน้ำเขียว, นครราชสีมา, 30370",
    "ตำบลกุดจิก, อำเภอสูงเนิน, นครราชสีมา, 30380",
    "ตำบลนากลาง, อำเภอสูงเนิน, นครราชสีมา, 30380",
    "ตำบลหนองตะไก้, อำเภอสูงเนิน, นครราชสีมา, 30380",
    "ตำบลแหลมทอง, อำเภอหนองบุญมาก, นครราชสีมา, 30410",
    "ตำบลไทยเจริญ, อำเภอหนองบุญมาก, นครราชสีมา, 30410",
    "ตำบลบ้านใหม่, อำเภอหนองบุญมาก, นครราชสีมา, 30410",
    "ตำบลลุงเขว้า, อำเภอหนองบุญมาก, นครราชสีมา, 30410",
    "ตำบลสารภี, อำเภอหนองบุญมาก, นครราชสีมา, 30410",
    "ตำบลหนองไม้ไผ่, อำเภอหนองบุญมาก, นครราชสีมา, 30410",
    "ตำบลหนองตะไก้, อำเภอหนองบุญมาก, นครราชสีมา, 30410",
    "ตำบลหนองบุนนาก, อำเภอหนองบุญมาก, นครราชสีมา, 30410",
    "ตำบลหนองหัวแรต, อำเภอหนองบุญมาก, นครราชสีมา, 30410",
    "ตำบลธารปราสาท, อำเภอโนนสูง, นครราชสีมา, 30420",
    "ตำบลโนนประดู่, อำเภอสีดา, นครราชสีมา, 30430",
    "ตำบลโพนทอง, อำเภอสีดา, นครราชสีมา, 30430",
    "ตำบลสามเมือง, อำเภอสีดา, นครราชสีมา, 30430",
    "ตำบลสีดา, อำเภอสีดา, นครราชสีมา, 30430",
    "ตำบลหนองตาดใหญ่, อำเภอสีดา, นครราชสีมา, 30430",
    "ตำบลแก้งสนามนาง, อำเภอแก้งสนามนาง, นครราชสีมา, 30440",
    "ตำบลโนนสำราญ, อำเภอแก้งสนามนาง, นครราชสีมา, 30440",
    "ตำบลบึงพะไล, อำเภอแก้งสนามนาง, นครราชสีมา, 30440",
    "ตำบลบึงสำโรง, อำเภอแก้งสนามนาง, นครราชสีมา, 30440",
    "ตำบลสีสุก, อำเภอแก้งสนามนาง, นครราชสีมา, 30440",
    "ตำบลเมืองฝาง, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลเสม็ด, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลในเมือง, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลกระสัง, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลกลันทา, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลชุมเห็ด, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลถลุงเหล็ก, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลบัวทอง, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลบ้านบัว, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลบ้านยาง, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลพระครู, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลลุมปุ๊ก, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลสวายจีก, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลสองห้อง, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลสะแกโพรง, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลสะแกซำ, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลหนองตาด, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลหลักเขต, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลอิสาณ, อำเภอเมืองบุรีรัมย์, บุรีรัมย์, 31000",
    "ตำบลโนนขวาง, อำเภอบ้านด่าน, บุรีรัมย์, 31000",
    "ตำบลบ้านด่าน, อำเภอบ้านด่าน, บุรีรัมย์, 31000",
    "ตำบลปราสาท, อำเภอบ้านด่าน, บุรีรัมย์, 31000",
    "ตำบลวังเหนือ, อำเภอบ้านด่าน, บุรีรัมย์, 31000",
    "ตำบลเมืองโพธิ์, อำเภอห้วยราช, บุรีรัมย์, 31000",
    "ตำบลโคกเหล็ก, อำเภอห้วยราช, บุรีรัมย์, 31000",
    "ตำบลตาเสา, อำเภอห้วยราช, บุรีรัมย์, 31000",
    "ตำบลบ้านตะโก, อำเภอห้วยราช, บุรีรัมย์, 31000",
    "ตำบลสนวน, อำเภอห้วยราช, บุรีรัมย์, 31000",
    "ตำบลสามแวง, อำเภอห้วยราช, บุรีรัมย์, 31000",
    "ตำบลห้วยราช, อำเภอห้วยราช, บุรีรัมย์, 31000",
    "ตำบลห้วยราชา, อำเภอห้วยราช, บุรีรัมย์, 31000",
    "ตำบลเจริญสุข, อำเภอเฉลิมพระเกียรติ, บุรีรัมย์, 31110",
    "ตำบลตาเป๊ก, อำเภอเฉลิมพระเกียรติ, บุรีรัมย์, 31110",
    "ตำบลอีสานเขต, อำเภอเฉลิมพระเกียรติ, บุรีรัมย์, 31110",
    "ตำบลโกรกแก้ว, อำเภอโนนสุวรรณ, บุรีรัมย์, 31110",
    "ตำบลโนนสุวรรณ, อำเภอโนนสุวรรณ, บุรีรัมย์, 31110",
    "ตำบลดงอีจาน, อำเภอโนนสุวรรณ, บุรีรัมย์, 31110",
    "ตำบลทุ่งจังหัน, อำเภอโนนสุวรรณ, บุรีรัมย์, 31110",
    "ตำบลเมืองยาง, อำเภอชำนิ, บุรีรัมย์, 31110",
    "ตำบลโคกสนวน, อำเภอชำนิ, บุรีรัมย์, 31110",
    "ตำบลช่อผกา, อำเภอชำนิ, บุรีรัมย์, 31110",
    "ตำบลชำนิ, อำเภอชำนิ, บุรีรัมย์, 31110",
    "ตำบลละลวด, อำเภอชำนิ, บุรีรัมย์, 31110",
    "ตำบลหนองปล่อง, อำเภอชำนิ, บุรีรัมย์, 31110",
    "ตำบลก้านเหลือง, อำเภอนางรอง, บุรีรัมย์, 31110",
    "ตำบลชุมแสง, อำเภอนางรอง, บุรีรัมย์, 31110",
    "ตำบลถนนหัก, อำเภอนางรอง, บุรีรัมย์, 31110",
    "ตำบลทรัพย์พระยา, อำเภอนางรอง, บุรีรัมย์, 31110",
    "ตำบลทุ่งแสงทอง, อำเภอนางรอง, บุรีรัมย์, 31110",
    "ตำบลนางรอง, อำเภอนางรอง, บุรีรัมย์, 31110",
    "ตำบลบ้านสิงห์, อำเภอนางรอง, บุรีรัมย์, 31110",
    "ตำบลลำไทรโยง, อำเภอนางรอง, บุรีรัมย์, 31110",
    "ตำบลสะเดา, อำเภอนางรอง, บุรีรัมย์, 31110",
    "ตำบลหนองโบสถ์, อำเภอนางรอง, บุรีรัมย์, 31110",
    "ตำบลหนองโสน, อำเภอนางรอง, บุรีรัมย์, 31110",
    "ตำบลหนองไทร, อำเภอนางรอง, บุรีรัมย์, 31110",
    "ตำบลหนองกง, อำเภอนางรอง, บุรีรัมย์, 31110",
    "ตำบลหนองยายพิมพ์, อำเภอนางรอง, บุรีรัมย์, 31110",
    "ตำบลหัวถนน, อำเภอนางรอง, บุรีรัมย์, 31110",
    "ตำบลแดงใหญ่, อำเภอบ้านใหม่ไชยพจน์, บุรีรัมย์, 31120",
    "ตำบลกู่สวนแตง, อำเภอบ้านใหม่ไชยพจน์, บุรีรัมย์, 31120",
    "ตำบลทองหลาง, อำเภอบ้านใหม่ไชยพจน์, บุรีรัมย์, 31120",
    "ตำบลหนองเยือง, อำเภอบ้านใหม่ไชยพจน์, บุรีรัมย์, 31120",
    "ตำบลหนองแวง, อำเภอบ้านใหม่ไชยพจน์, บุรีรัมย์, 31120",
    "ตำบลบ้านเป้า, อำเภอพุทไธสง, บุรีรัมย์, 31120",
    "ตำบลบ้านแวง, อำเภอพุทไธสง, บุรีรัมย์, 31120",
    "ตำบลบ้านจาน, อำเภอพุทไธสง, บุรีรัมย์, 31120",
    "ตำบลบ้านยาง, อำเภอพุทไธสง, บุรีรัมย์, 31120",
    "ตำบลพุทไธสง, อำเภอพุทไธสง, บุรีรัมย์, 31120",
    "ตำบลมะเฟือง, อำเภอพุทไธสง, บุรีรัมย์, 31120",
    "ตำบลหายโศก, อำเภอพุทไธสง, บุรีรัมย์, 31120",
    "ตำบลเมืองแฝก, อำเภอลำปลายมาศ, บุรีรัมย์, 31130",
    "ตำบลแสลงพัน, อำเภอลำปลายมาศ, บุรีรัมย์, 31130",
    "ตำบลโคกกลาง, อำเภอลำปลายมาศ, บุรีรัมย์, 31130",
    "ตำบลโคกล่าม, อำเภอลำปลายมาศ, บุรีรัมย์, 31130",
    "ตำบลโคกสะอาด, อำเภอลำปลายมาศ, บุรีรัมย์, 31130",
    "ตำบลตลาดโพธิ์, อำเภอลำปลายมาศ, บุรีรัมย์, 31130",
    "ตำบลทะเมนชัย, อำเภอลำปลายมาศ, บุรีรัมย์, 31130",
    "ตำบลบ้านยาง, อำเภอลำปลายมาศ, บุรีรัมย์, 31130",
    "ตำบลบุโพธิ์, อำเภอลำปลายมาศ, บุรีรัมย์, 31130",
    "ตำบลผไทรินทร์, อำเภอลำปลายมาศ, บุรีรัมย์, 31130",
    "ตำบลลำปลายมาศ, อำเภอลำปลายมาศ, บุรีรัมย์, 31130",
    "ตำบลหนองโดน, อำเภอลำปลายมาศ, บุรีรัมย์, 31130",
    "ตำบลหนองกะทิง, อำเภอลำปลายมาศ, บุรีรัมย์, 31130",
    "ตำบลหนองคู, อำเภอลำปลายมาศ, บุรีรัมย์, 31130",
    "ตำบลหนองบัวโคก, อำเภอลำปลายมาศ, บุรีรัมย์, 31130",
    "ตำบลหินโคน, อำเภอลำปลายมาศ, บุรีรัมย์, 31130",
    "ตำบลเขาคอก, อำเภอประโคนชัย, บุรีรัมย์, 31140",
    "ตำบลแสลงโทน, อำเภอประโคนชัย, บุรีรัมย์, 31140",
    "ตำบลโคกตูม, อำเภอประโคนชัย, บุรีรัมย์, 31140",
    "ตำบลโคกมะขาม, อำเภอประโคนชัย, บุรีรัมย์, 31140",
    "ตำบลโคกม้า, อำเภอประโคนชัย, บุรีรัมย์, 31140",
    "ตำบลโคกย่าง, อำเภอประโคนชัย, บุรีรัมย์, 31140",
    "ตำบลไพศาล, อำเภอประโคนชัย, บุรีรัมย์, 31140",
    "ตำบลจรเข้มาก, อำเภอประโคนชัย, บุรีรัมย์, 31140",
    "ตำบลตะโกตาพิ, อำเภอประโคนชัย, บุรีรัมย์, 31140",
    "ตำบลบ้านไทร, อำเภอประโคนชัย, บุรีรัมย์, 31140",
    "ตำบลประโคนชัย, อำเภอประโคนชัย, บุรีรัมย์, 31140",
    "ตำบลประทัดบุ, อำเภอประโคนชัย, บุรีรัมย์, 31140",
    "ตำบลปังกู, อำเภอประโคนชัย, บุรีรัมย์, 31140",
    "ตำบลละเวี้ย, อำเภอประโคนชัย, บุรีรัมย์, 31140",
    "ตำบลสี่เหลี่ยม, อำเภอประโคนชัย, บุรีรัมย์, 31140",
    "ตำบลหนองบอน, อำเภอประโคนชัย, บุรีรัมย์, 31140",
    "ตำบลแคนดง, อำเภอแคนดง, บุรีรัมย์, 31150",
    "ตำบลดงพลอง, อำเภอแคนดง, บุรีรัมย์, 31150",
    "ตำบลสระบัว, อำเภอแคนดง, บุรีรัมย์, 31150",
    "ตำบลหัวฝาย, อำเภอแคนดง, บุรีรัมย์, 31150",
    "ตำบลเมืองแก, อำเภอสตึก, บุรีรัมย์, 31150",
    "ตำบลกระสัง, อำเภอสตึก, บุรีรัมย์, 31150",
    "ตำบลชุมแสง, อำเภอสตึก, บุรีรัมย์, 31150",
    "ตำบลดอนมนต์, อำเภอสตึก, บุรีรัมย์, 31150",
    "ตำบลท่าม่วง, อำเภอสตึก, บุรีรัมย์, 31150",
    "ตำบลทุ่งวัง, อำเภอสตึก, บุรีรัมย์, 31150",
    "ตำบลนิคม, อำเภอสตึก, บุรีรัมย์, 31150",
    "ตำบลร่อนทอง, อำเภอสตึก, บุรีรัมย์, 31150",
    "ตำบลสตึก, อำเภอสตึก, บุรีรัมย์, 31150",
    "ตำบลสนามชัย, อำเภอสตึก, บุรีรัมย์, 31150",
    "ตำบลสะแก, อำเภอสตึก, บุรีรัมย์, 31150",
    "ตำบลหนองใหญ่, อำเภอสตึก, บุรีรัมย์, 31150",
    "ตำบลเมืองไผ่, อำเภอกระสัง, บุรีรัมย์, 31160",
    "ตำบลกระสัง, อำเภอกระสัง, บุรีรัมย์, 31160",
    "ตำบลกันทรารมย์, อำเภอกระสัง, บุรีรัมย์, 31160",
    "ตำบลชุมแสง, อำเภอกระสัง, บุรีรัมย์, 31160",
    "ตำบลบ้านปรือ, อำเภอกระสัง, บุรีรัมย์, 31160",
    "ตำบลลำดวน, อำเภอกระสัง, บุรีรัมย์, 31160",
    "ตำบลศรีภูมิ, อำเภอกระสัง, บุรีรัมย์, 31160",
    "ตำบลสองชั้น, อำเภอกระสัง, บุรีรัมย์, 31160",
    "ตำบลสูงเนิน, อำเภอกระสัง, บุรีรัมย์, 31160",
    "ตำบลหนองเต็ง, อำเภอกระสัง, บุรีรัมย์, 31160",
    "ตำบลห้วยสำราญ, อำเภอกระสัง, บุรีรัมย์, 31160",
    "ตำบลถาวร, อำเภอเฉลิมพระเกียรติ, บุรีรัมย์, 31170",
    "ตำบลยายแย้มวัฒนา, อำเภอเฉลิมพระเกียรติ, บุรีรัมย์, 31170",
    "ตำบลโคกว่าน, อำเภอละหานทราย, บุรีรัมย์, 31170",
    "ตำบลตาจง, อำเภอละหานทราย, บุรีรัมย์, 31170",
    "ตำบลละหานทราย, อำเภอละหานทราย, บุรีรัมย์, 31170",
    "ตำบลสำโรงใหม่, อำเภอละหานทราย, บุรีรัมย์, 31170",
    "ตำบลหนองแวง, อำเภอละหานทราย, บุรีรัมย์, 31170",
    "ตำบลหนองตะครอง, อำเภอละหานทราย, บุรีรัมย์, 31170",
    "ตำบลเขาดินเหนือ, อำเภอบ้านกรวด, บุรีรัมย์, 31180",
    "ตำบลโนนเจริญ, อำเภอบ้านกรวด, บุรีรัมย์, 31180",
    "ตำบลจันทบเพชร, อำเภอบ้านกรวด, บุรีรัมย์, 31180",
    "ตำบลบ้านกรวด, อำเภอบ้านกรวด, บุรีรัมย์, 31180",
    "ตำบลบึงเจริญ, อำเภอบ้านกรวด, บุรีรัมย์, 31180",
    "ตำบลปราสาท, อำเภอบ้านกรวด, บุรีรัมย์, 31180",
    "ตำบลสายตะกู, อำเภอบ้านกรวด, บุรีรัมย์, 31180",
    "ตำบลหนองไม้งาม, อำเภอบ้านกรวด, บุรีรัมย์, 31180",
    "ตำบลหินลาด, อำเภอบ้านกรวด, บุรีรัมย์, 31180",
    "ตำบลคูเมือง, อำเภอคูเมือง, บุรีรัมย์, 31190",
    "ตำบลตูมใหญ่, อำเภอคูเมือง, บุรีรัมย์, 31190",
    "ตำบลบ้านแพ, อำเภอคูเมือง, บุรีรัมย์, 31190",
    "ตำบลปะเคียบ, อำเภอคูเมือง, บุรีรัมย์, 31190",
    "ตำบลพรสำราญ, อำเภอคูเมือง, บุรีรัมย์, 31190",
    "ตำบลหนองขมาร, อำเภอคูเมือง, บุรีรัมย์, 31190",
    "ตำบลหินเหล็กไฟ, อำเภอคูเมือง, บุรีรัมย์, 31190",
    "ตำบลเมืองไผ่, อำเภอหนองกี่, บุรีรัมย์, 31210",
    "ตำบลเย้ยปราสาท, อำเภอหนองกี่, บุรีรัมย์, 31210",
    "ตำบลโคกสว่าง, อำเภอหนองกี่, บุรีรัมย์, 31210",
    "ตำบลโคกสูง, อำเภอหนองกี่, บุรีรัมย์, 31210",
    "ตำบลดอนอะราง, อำเภอหนองกี่, บุรีรัมย์, 31210",
    "ตำบลท่าโพธิ์ชัย, อำเภอหนองกี่, บุรีรัมย์, 31210",
    "ตำบลทุ่งกระเต็น, อำเภอหนองกี่, บุรีรัมย์, 31210",
    "ตำบลทุ่งกระตาดพัฒนา, อำเภอหนองกี่, บุรีรัมย์, 31210",
    "ตำบลบุกระสัง, อำเภอหนองกี่, บุรีรัมย์, 31210",
    "ตำบลหนองกี่, อำเภอหนองกี่, บุรีรัมย์, 31210",
    "ตำบลโคกมะม่วง, อำเภอปะคำ, บุรีรัมย์, 31220",
    "ตำบลไทยเจริญ, อำเภอปะคำ, บุรีรัมย์, 31220",
    "ตำบลปะคำ, อำเภอปะคำ, บุรีรัมย์, 31220",
    "ตำบลหนองบัว, อำเภอปะคำ, บุรีรัมย์, 31220",
    "ตำบลหูทำนบ, อำเภอปะคำ, บุรีรัมย์, 31220",
    "ตำบลดอนกอก, อำเภอนาโพธิ์, บุรีรัมย์, 31230",
    "ตำบลนาโพธิ์, อำเภอนาโพธิ์, บุรีรัมย์, 31230",
    "ตำบลบ้านคู, อำเภอนาโพธิ์, บุรีรัมย์, 31230",
    "ตำบลบ้านดู่, อำเภอนาโพธิ์, บุรีรัมย์, 31230",
    "ตำบลศรีสว่าง, อำเภอนาโพธิ์, บุรีรัมย์, 31230",
    "ตำบลเมืองฝ้าย, อำเภอหนองหงส์, บุรีรัมย์, 31240",
    "ตำบลเสาเดียว, อำเภอหนองหงส์, บุรีรัมย์, 31240",
    "ตำบลไทยสามัคคี, อำเภอหนองหงส์, บุรีรัมย์, 31240",
    "ตำบลสระแก้ว, อำเภอหนองหงส์, บุรีรัมย์, 31240",
    "ตำบลสระทอง, อำเภอหนองหงส์, บุรีรัมย์, 31240",
    "ตำบลหนองชัยศรี, อำเภอหนองหงส์, บุรีรัมย์, 31240",
    "ตำบลห้วยหิน, อำเภอหนองหงส์, บุรีรัมย์, 31240",
    "ตำบลโคกขมิ้น, อำเภอพลับพลาชัย, บุรีรัมย์, 31250",
    "ตำบลจันดุม, อำเภอพลับพลาชัย, บุรีรัมย์, 31250",
    "ตำบลป่าชัน, อำเภอพลับพลาชัย, บุรีรัมย์, 31250",
    "ตำบลสะเดา, อำเภอพลับพลาชัย, บุรีรัมย์, 31250",
    "ตำบลสำโรง, อำเภอพลับพลาชัย, บุรีรัมย์, 31250",
    "ตำบลโนนดินแดง, อำเภอโนนดินแดง, บุรีรัมย์, 31260",
    "ตำบลลำนางรอง, อำเภอโนนดินแดง, บุรีรัมย์, 31260",
    "ตำบลส้มป่อย, อำเภอโนนดินแดง, บุรีรัมย์, 31260",
    "ตำบลเขวาสินรินทร์, อำเภอเขวาสินรินทร์, สุรินทร์, 32000",
    "ตำบลตากูก, อำเภอเขวาสินรินทร์, สุรินทร์, 32000",
    "ตำบลบ้านแร่, อำเภอเขวาสินรินทร์, สุรินทร์, 32000",
    "ตำบลบึง, อำเภอเขวาสินรินทร์, สุรินทร์, 32000",
    "ตำบลปราสาททอง, อำเภอเขวาสินรินทร์, สุรินทร์, 32000",
    "ตำบลเฉนียง, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลเทนมีย์, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลเพี้ยราม, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลเมืองที, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลแกใหญ่, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลแสลงพันธ์, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลในเมือง, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลกาเกาะ, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลคอโค, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลตระแสง, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลตั้งใจ, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลตาอ็อง, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลท่าสว่าง, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลนอกเมือง, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลนาดี, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลนาบัว, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลบุฤาษี, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลราม, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลสลักได, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลสวาย, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลสำโรง, อำเภอเมืองสุรินทร์, สุรินทร์, 32000",
    "ตำบลแตล, อำเภอศีขรภูมิ, สุรินทร์, 32110",
    "ตำบลกุดหวาย, อำเภอศีขรภูมิ, สุรินทร์, 32110",
    "ตำบลขวาวใหญ่, อำเภอศีขรภูมิ, สุรินทร์, 32110",
    "ตำบลคาละแมะ, อำเภอศีขรภูมิ, สุรินทร์, 32110",
    "ตำบลจารพัต, อำเภอศีขรภูมิ, สุรินทร์, 32110",
    "ตำบลช่างปี่, อำเภอศีขรภูมิ, สุรินทร์, 32110",
    "ตำบลตรมไพร, อำเภอศีขรภูมิ, สุรินทร์, 32110",
    "ตำบลตรึม, อำเภอศีขรภูมิ, สุรินทร์, 32110",
    "ตำบลนารุ่ง, อำเภอศีขรภูมิ, สุรินทร์, 32110",
    "ตำบลผักไหม, อำเภอศีขรภูมิ, สุรินทร์, 32110",
    "ตำบลยาง, อำเภอศีขรภูมิ, สุรินทร์, 32110",
    "ตำบลระแงง, อำเภอศีขรภูมิ, สุรินทร์, 32110",
    "ตำบลหนองเหล็ก, อำเภอศีขรภูมิ, สุรินทร์, 32110",
    "ตำบลหนองขวาว, อำเภอศีขรภูมิ, สุรินทร์, 32110",
    "ตำบลหนองบัว, อำเภอศีขรภูมิ, สุรินทร์, 32110",
    "ตำบลเมืองแก, อำเภอท่าตูม, สุรินทร์, 32120",
    "ตำบลโพนครก, อำเภอท่าตูม, สุรินทร์, 32120",
    "ตำบลกระโพ, อำเภอท่าตูม, สุรินทร์, 32120",
    "ตำบลท่าตูม, อำเภอท่าตูม, สุรินทร์, 32120",
    "ตำบลทุ่งกุลา, อำเภอท่าตูม, สุรินทร์, 32120",
    "ตำบลบะ, อำเภอท่าตูม, สุรินทร์, 32120",
    "ตำบลบัวโคก, อำเภอท่าตูม, สุรินทร์, 32120",
    "ตำบลพรมเทพ, อำเภอท่าตูม, สุรินทร์, 32120",
    "ตำบลหนองเมธี, อำเภอท่าตูม, สุรินทร์, 32120",
    "ตำบลหนองบัว, อำเภอท่าตูม, สุรินทร์, 32120",
    "ตำบลโนน, อำเภอโนนนารายณ์, สุรินทร์, 32130",
    "ตำบลคำผง, อำเภอโนนนารายณ์, สุรินทร์, 32130",
    "ตำบลระเวียง, อำเภอโนนนารายณ์, สุรินทร์, 32130",
    "ตำบลหนองเทพ, อำเภอโนนนารายณ์, สุรินทร์, 32130",
    "ตำบลหนองหลวง, อำเภอโนนนารายณ์, สุรินทร์, 32130",
    "ตำบลเบิด, อำเภอรัตนบุรี, สุรินทร์, 32130",
    "ตำบลแก, อำเภอรัตนบุรี, สุรินทร์, 32130",
    "ตำบลไผ่, อำเภอรัตนบุรี, สุรินทร์, 32130",
    "ตำบลกุดขาคีม, อำเภอรัตนบุรี, สุรินทร์, 32130",
    "ตำบลดอนแรด, อำเภอรัตนบุรี, สุรินทร์, 32130",
    "ตำบลทับใหญ่, อำเภอรัตนบุรี, สุรินทร์, 32130",
    "ตำบลธาตุ, อำเภอรัตนบุรี, สุรินทร์, 32130",
    "ตำบลน้ำเขียว, อำเภอรัตนบุรี, สุรินทร์, 32130",
    "ตำบลยางสว่าง, อำเภอรัตนบุรี, สุรินทร์, 32130",
    "ตำบลรัตนบุรี, อำเภอรัตนบุรี, สุรินทร์, 32130",
    "ตำบลหนองบัวทอง, อำเภอรัตนบุรี, สุรินทร์, 32130",
    "ตำบลหนองบัวบาน, อำเภอรัตนบุรี, สุรินทร์, 32130",
    "ตำบลเชื้อเพลิง, อำเภอปราสาท, สุรินทร์, 32140",
    "ตำบลโคกยาง, อำเภอปราสาท, สุรินทร์, 32140",
    "ตำบลโคกสะอาด, อำเภอปราสาท, สุรินทร์, 32140",
    "ตำบลโชคนาสาม, อำเภอปราสาท, สุรินทร์, 32140",
    "ตำบลไพล, อำเภอปราสาท, สุรินทร์, 32140",
    "ตำบลกังแอน, อำเภอปราสาท, สุรินทร์, 32140",
    "ตำบลกันตวจระมวล, อำเภอปราสาท, สุรินทร์, 32140",
    "ตำบลตาเบา, อำเภอปราสาท, สุรินทร์, 32140",
    "ตำบลตานี, อำเภอปราสาท, สุรินทร์, 32140",
    "ตำบลทมอ, อำเภอปราสาท, สุรินทร์, 32140",
    "ตำบลทุ่งมน, อำเภอปราสาท, สุรินทร์, 32140",
    "ตำบลบ้านไทร, อำเภอปราสาท, สุรินทร์, 32140",
    "ตำบลบ้านพลวง, อำเภอปราสาท, สุรินทร์, 32140",
    "ตำบลประทัดบุ, อำเภอปราสาท, สุรินทร์, 32140",
    "ตำบลปราสาททนง, อำเภอปราสาท, สุรินทร์, 32140",
    "ตำบลปรือ, อำเภอปราสาท, สุรินทร์, 32140",
    "ตำบลสมุด, อำเภอปราสาท, สุรินทร์, 32140",
    "ตำบลหนองใหญ่, อำเภอปราสาท, สุรินทร์, 32140",
    "ตำบลโคกกลาง, อำเภอพนมดงรัก, สุรินทร์, 32140",
    "ตำบลจีกแดก, อำเภอพนมดงรัก, สุรินทร์, 32140",
    "ตำบลตาเมียง, อำเภอพนมดงรัก, สุรินทร์, 32140",
    "ตำบลบักได, อำเภอพนมดงรัก, สุรินทร์, 32140",
    "ตำบลแจนแวน, อำเภอศรีณรงค์, สุรินทร์, 32150",
    "ตำบลณรงค์, อำเภอศรีณรงค์, สุรินทร์, 32150",
    "ตำบลตรวจ, อำเภอศรีณรงค์, สุรินทร์, 32150",
    "ตำบลศรีสุข, อำเภอศรีณรงค์, สุรินทร์, 32150",
    "ตำบลหนองแวง, อำเภอศรีณรงค์, สุรินทร์, 32150",
    "ตำบลเทพรักษา, อำเภอสังขะ, สุรินทร์, 32150",
    "ตำบลกระเทียม, อำเภอสังขะ, สุรินทร์, 32150",
    "ตำบลขอนแตก, อำเภอสังขะ, สุรินทร์, 32150",
    "ตำบลดม, อำเภอสังขะ, สุรินทร์, 32150",
    "ตำบลตาคง, อำเภอสังขะ, สุรินทร์, 32150",
    "ตำบลตาตุม, อำเภอสังขะ, สุรินทร์, 32150",
    "ตำบลทับทัน, อำเภอสังขะ, สุรินทร์, 32150",
    "ตำบลบ้านจารย์, อำเภอสังขะ, สุรินทร์, 32150",
    "ตำบลบ้านชบ, อำเภอสังขะ, สุรินทร์, 32150",
    "ตำบลพระแก้ว, อำเภอสังขะ, สุรินทร์, 32150",
    "ตำบลสะกาด, อำเภอสังขะ, สุรินทร์, 32150",
    "ตำบลสังขะ, อำเภอสังขะ, สุรินทร์, 32150",
    "ตำบลแคน, อำเภอสนม, สุรินทร์, 32160",
    "ตำบลโพนโก, อำเภอสนม, สุรินทร์, 32160",
    "ตำบลนานวน, อำเภอสนม, สุรินทร์, 32160",
    "ตำบลสนม, อำเภอสนม, สุรินทร์, 32160",
    "ตำบลหนองระฆัง, อำเภอสนม, สุรินทร์, 32160",
    "ตำบลหนองอียอ, อำเภอสนม, สุรินทร์, 32160",
    "ตำบลหัวงัว, อำเภอสนม, สุรินทร์, 32160",
    "ตำบลเกาะแก้ว, อำเภอสำโรงทาบ, สุรินทร์, 32170",
    "ตำบลเสม็จ, อำเภอสำโรงทาบ, สุรินทร์, 32170",
    "ตำบลกระออม, อำเภอสำโรงทาบ, สุรินทร์, 32170",
    "ตำบลประดู่, อำเภอสำโรงทาบ, สุรินทร์, 32170",
    "ตำบลศรีสุข, อำเภอสำโรงทาบ, สุรินทร์, 32170",
    "ตำบลสะโน, อำเภอสำโรงทาบ, สุรินทร์, 32170",
    "ตำบลสำโรงทาบ, อำเภอสำโรงทาบ, สุรินทร์, 32170",
    "ตำบลหนองไผ่ล้อม, อำเภอสำโรงทาบ, สุรินทร์, 32170",
    "ตำบลหนองฮะ, อำเภอสำโรงทาบ, สุรินทร์, 32170",
    "ตำบลหมื่นศรี, อำเภอสำโรงทาบ, สุรินทร์, 32170",
    "ตำบลเป็นสุข, อำเภอจอมพระ, สุรินทร์, 32180",
    "ตำบลเมืองลีง, อำเภอจอมพระ, สุรินทร์, 32180",
    "ตำบลกระหาด, อำเภอจอมพระ, สุรินทร์, 32180",
    "ตำบลจอมพระ, อำเภอจอมพระ, สุรินทร์, 32180",
    "ตำบลชุมแสง, อำเภอจอมพระ, สุรินทร์, 32180",
    "ตำบลบ้านผือ, อำเภอจอมพระ, สุรินทร์, 32180",
    "ตำบลบุแกรง, อำเภอจอมพระ, สุรินทร์, 32180",
    "ตำบลลุ่มระวี, อำเภอจอมพระ, สุรินทร์, 32180",
    "ตำบลหนองสนิท, อำเภอจอมพระ, สุรินทร์, 32180",
    "ตำบลเมืองบัว, อำเภอชุมพลบุรี, สุรินทร์, 32190",
    "ตำบลไพรขลา, อำเภอชุมพลบุรี, สุรินทร์, 32190",
    "ตำบลกระเบื้อง, อำเภอชุมพลบุรี, สุรินทร์, 32190",
    "ตำบลชุมพลบุรี, อำเภอชุมพลบุรี, สุรินทร์, 32190",
    "ตำบลนาหนองไผ่, อำเภอชุมพลบุรี, สุรินทร์, 32190",
    "ตำบลยะวึก, อำเภอชุมพลบุรี, สุรินทร์, 32190",
    "ตำบลศรีณรงค์, อำเภอชุมพลบุรี, สุรินทร์, 32190",
    "ตำบลสระขุด, อำเภอชุมพลบุรี, สุรินทร์, 32190",
    "ตำบลหนองเรือ, อำเภอชุมพลบุรี, สุรินทร์, 32190",
    "ตำบลแนงมุด, อำเภอกาบเชิง, สุรินทร์, 32210",
    "ตำบลโคกตะเคียน, อำเภอกาบเชิง, สุรินทร์, 32210",
    "ตำบลกาบเชิง, อำเภอกาบเชิง, สุรินทร์, 32210",
    "ตำบลคูตัน, อำเภอกาบเชิง, สุรินทร์, 32210",
    "ตำบลด่าน, อำเภอกาบเชิง, สุรินทร์, 32210",
    "ตำบลตะเคียน, อำเภอกาบเชิง, สุรินทร์, 32210",
    "ตำบลโชคเหนือ, อำเภอลำดวน, สุรินทร์, 32220",
    "ตำบลตระเปียงเตีย, อำเภอลำดวน, สุรินทร์, 32220",
    "ตำบลตรำดม, อำเภอลำดวน, สุรินทร์, 32220",
    "ตำบลลำดวน, อำเภอลำดวน, สุรินทร์, 32220",
    "ตำบลอู่โลก, อำเภอลำดวน, สุรินทร์, 32220",
    "ตำบลจรัส, อำเภอบัวเชด, สุรินทร์, 32230",
    "ตำบลตาวัง, อำเภอบัวเชด, สุรินทร์, 32230",
    "ตำบลบัวเชด, อำเภอบัวเชด, สุรินทร์, 32230",
    "ตำบลสะเดา, อำเภอบัวเชด, สุรินทร์, 32230",
    "ตำบลสำเภาลูน, อำเภอบัวเชด, สุรินทร์, 32230",
    "ตำบลอาโพน, อำเภอบัวเชด, สุรินทร์, 32230",
    "ตำบลเมืองเหนือ, อำเภอเมืองศรีสะเกษ, ศรีสะเกษ, 33000",
    "ตำบลเมืองใต้, อำเภอเมืองศรีสะเกษ, ศรีสะเกษ, 33000",
    "ตำบลโพธิ์, อำเภอเมืองศรีสะเกษ, ศรีสะเกษ, 33000",
    "ตำบลโพนเขวา, อำเภอเมืองศรีสะเกษ, ศรีสะเกษ, 33000",
    "ตำบลโพนข่า, อำเภอเมืองศรีสะเกษ, ศรีสะเกษ, 33000",
    "ตำบลโพนค้อ, อำเภอเมืองศรีสะเกษ, ศรีสะเกษ, 33000",
    "ตำบลคูซอด, อำเภอเมืองศรีสะเกษ, ศรีสะเกษ, 33000",
    "ตำบลจาน, อำเภอเมืองศรีสะเกษ, ศรีสะเกษ, 33000",
    "ตำบลซำ, อำเภอเมืองศรีสะเกษ, ศรีสะเกษ, 33000",
    "ตำบลตะดอบ, อำเภอเมืองศรีสะเกษ, ศรีสะเกษ, 33000",
    "ตำบลทุ่ม, อำเภอเมืองศรีสะเกษ, ศรีสะเกษ, 33000",
    "ตำบลน้ำคำ, อำเภอเมืองศรีสะเกษ, ศรีสะเกษ, 33000",
    "ตำบลหญ้าปล้อง, อำเภอเมืองศรีสะเกษ, ศรีสะเกษ, 33000",
    "ตำบลหนองแก้ว, อำเภอเมืองศรีสะเกษ, ศรีสะเกษ, 33000",
    "ตำบลหนองไผ่, อำเภอเมืองศรีสะเกษ, ศรีสะเกษ, 33000",
    "ตำบลหนองไฮ, อำเภอเมืองศรีสะเกษ, ศรีสะเกษ, 33000",
    "ตำบลหนองครก, อำเภอเมืองศรีสะเกษ, ศรีสะเกษ, 33000",
    "ตำบลหมากเขียบ, อำเภอเมืองศรีสะเกษ, ศรีสะเกษ, 33000",
    "ตำบลเสียว, อำเภอเบญจลักษ์, ศรีสะเกษ, 33110",
    "ตำบลท่าคล้อ, อำเภอเบญจลักษ์, ศรีสะเกษ, 33110",
    "ตำบลหนองงูเหลือม, อำเภอเบญจลักษ์, ศรีสะเกษ, 33110",
    "ตำบลหนองหว้า, อำเภอเบญจลักษ์, ศรีสะเกษ, 33110",
    "ตำบลหนองฮาง, อำเภอเบญจลักษ์, ศรีสะเกษ, 33110",
    "ตำบลเมือง, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลเวียงเหนือ, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลเสาธงชัย, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลโนนสำราญ, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลกระแชง, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลกุดเสลา, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลขนุน, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลจานใหญ่, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลชำ, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลตระกาจ, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลทุ่งใหญ่, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลน้ำอ้อม, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลบึงมะลู, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลภูเงิน, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลภูผาหมอก, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลรุง, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลละลาย, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลสวนกล้วย, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลสังเม็ก, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลหนองหญ้าลาด, อำเภอกันทรลักษ์, ศรีสะเกษ, 33110",
    "ตำบลเมืองจันทร์, อำเภอเมืองจันทร์, ศรีสะเกษ, 33120",
    "ตำบลตาโกน, อำเภอเมืองจันทร์, ศรีสะเกษ, 33120",
    "ตำบลหนองใหญ่, อำเภอเมืองจันทร์, ศรีสะเกษ, 33120",
    "ตำบลเสียว, อำเภอโพธิ์ศรีสุวรรณ, ศรีสะเกษ, 33120",
    "ตำบลโดด, อำเภอโพธิ์ศรีสุวรรณ, ศรีสะเกษ, 33120",
    "ตำบลผือใหญ่, อำเภอโพธิ์ศรีสุวรรณ, ศรีสะเกษ, 33120",
    "ตำบลหนองม้า, อำเภอโพธิ์ศรีสุวรรณ, ศรีสะเกษ, 33120",
    "ตำบลอีเซ, อำเภอโพธิ์ศรีสุวรรณ, ศรีสะเกษ, 33120",
    "ตำบลแข้, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลแขม, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลแต้, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลโคกจาน, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลโคกหล่าม, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลโพธิ์ชัย, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลก้านเหลือง, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลกำแพง, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลขะยูง, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลตาเกษ, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลทุ่งไชย, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลปะอาว, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลรังแร้ง, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลสระกำแพงใหญ่, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลสำโรง, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลหนองไฮ, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลหนองห้าง, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลหัวช้าง, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลอี่หล่ำ, อำเภออุทุมพรพิสัย, ศรีสะเกษ, 33120",
    "ตำบลเมืองน้อย, อำเภอกันทรารมย์, ศรีสะเกษ, 33130",
    "ตำบลโนนสัง, อำเภอกันทรารมย์, ศรีสะเกษ, 33130",
    "ตำบลคำเนียม, อำเภอกันทรารมย์, ศรีสะเกษ, 33130",
    "ตำบลจาน, อำเภอกันทรารมย์, ศรีสะเกษ, 33130",
    "ตำบลดู่, อำเภอกันทรารมย์, ศรีสะเกษ, 33130",
    "ตำบลดูน, อำเภอกันทรารมย์, ศรีสะเกษ, 33130",
    "ตำบลทาม, อำเภอกันทรารมย์, ศรีสะเกษ, 33130",
    "ตำบลบัวน้อย, อำเภอกันทรารมย์, ศรีสะเกษ, 33130",
    "ตำบลผักแพว, อำเภอกันทรารมย์, ศรีสะเกษ, 33130",
    "ตำบลยาง, อำเภอกันทรารมย์, ศรีสะเกษ, 33130",
    "ตำบลละทาย, อำเภอกันทรารมย์, ศรีสะเกษ, 33130",
    "ตำบลหนองแก้ว, อำเภอกันทรารมย์, ศรีสะเกษ, 33130",
    "ตำบลหนองแวง, อำเภอกันทรารมย์, ศรีสะเกษ, 33130",
    "ตำบลหนองบัว, อำเภอกันทรารมย์, ศรีสะเกษ, 33130",
    "ตำบลหนองหัวช้าง, อำเภอกันทรารมย์, ศรีสะเกษ, 33130",
    "ตำบลอีปาด, อำเภอกันทรารมย์, ศรีสะเกษ, 33130",
    "ตำบลเขิน, อำเภอน้ำเกลี้ยง, ศรีสะเกษ, 33130",
    "ตำบลคูบ, อำเภอน้ำเกลี้ยง, ศรีสะเกษ, 33130",
    "ตำบลตองปิด, อำเภอน้ำเกลี้ยง, ศรีสะเกษ, 33130",
    "ตำบลน้ำเกลี้ยง, อำเภอน้ำเกลี้ยง, ศรีสะเกษ, 33130",
    "ตำบลรุ่งระวี, อำเภอน้ำเกลี้ยง, ศรีสะเกษ, 33130",
    "ตำบลละเอาะ, อำเภอน้ำเกลี้ยง, ศรีสะเกษ, 33130",
    "ตำบลโคกเพชร, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลโสน, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลใจดี, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลกฤษณา, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลกันทรารมย์, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลจะกง, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลดองกำเม็ด, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลตะเคียน, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลตาอุด, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลนิคมพัฒนา, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลปราสาท, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลปรือใหญ่, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลลมศักดิ์, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลศรีตระกูล, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลศรีสะอาด, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลสะเดาใหญ่, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลสำโรงตาเจ็น, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลหนองฉลอง, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลห้วยเหนือ, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลห้วยใต้, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลห้วยสำราญ, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลหัวเสือ, อำเภอขุขันธ์, ศรีสะเกษ, 33140",
    "ตำบลโคกตาล, อำเภอภูสิงห์, ศรีสะเกษ, 33140",
    "ตำบลไพรพัฒนา, อำเภอภูสิงห์, ศรีสะเกษ, 33140",
    "ตำบลดงรัก, อำเภอภูสิงห์, ศรีสะเกษ, 33140",
    "ตำบลตะเคียนราม, อำเภอภูสิงห์, ศรีสะเกษ, 33140",
    "ตำบลละลม, อำเภอภูสิงห์, ศรีสะเกษ, 33140",
    "ตำบลห้วยตามอญ, อำเภอภูสิงห์, ศรีสะเกษ, 33140",
    "ตำบลห้วยตึ๊กชู, อำเภอภูสิงห์, ศรีสะเกษ, 33140",
    "ตำบลโนนสูง, อำเภอขุนหาญ, ศรีสะเกษ, 33150",
    "ตำบลโพธิ์กระสังข์, อำเภอขุนหาญ, ศรีสะเกษ, 33150",
    "ตำบลโพธิ์วงศ์, อำเภอขุนหาญ, ศรีสะเกษ, 33150",
    "ตำบลไพร, อำเภอขุนหาญ, ศรีสะเกษ, 33150",
    "ตำบลกระหวัน, อำเภอขุนหาญ, ศรีสะเกษ, 33150",
    "ตำบลกันทรอม, อำเภอขุนหาญ, ศรีสะเกษ, 33150",
    "ตำบลขุนหาญ, อำเภอขุนหาญ, ศรีสะเกษ, 33150",
    "ตำบลบักดอง, อำเภอขุนหาญ, ศรีสะเกษ, 33150",
    "ตำบลพราน, อำเภอขุนหาญ, ศรีสะเกษ, 33150",
    "ตำบลภูฝ้าย, อำเภอขุนหาญ, ศรีสะเกษ, 33150",
    "ตำบลสิ, อำเภอขุนหาญ, ศรีสะเกษ, 33150",
    "ตำบลห้วยจันทร์, อำเภอขุนหาญ, ศรีสะเกษ, 33150",
    "ตำบลเมืองแคน, อำเภอราษีไศล, ศรีสะเกษ, 33160",
    "ตำบลเมืองคง, อำเภอราษีไศล, ศรีสะเกษ, 33160",
    "ตำบลไผ่, อำเภอราษีไศล, ศรีสะเกษ, 33160",
    "ตำบลจิกสังข์ทอง, อำเภอราษีไศล, ศรีสะเกษ, 33160",
    "ตำบลด่าน, อำเภอราษีไศล, ศรีสะเกษ, 33160",
    "ตำบลดู่, อำเภอราษีไศล, ศรีสะเกษ, 33160",
    "ตำบลบัวหุ่ง, อำเภอราษีไศล, ศรีสะเกษ, 33160",
    "ตำบลส้มป่อย, อำเภอราษีไศล, ศรีสะเกษ, 33160",
    "ตำบลสร้างปี่, อำเภอราษีไศล, ศรีสะเกษ, 33160",
    "ตำบลหนองแค, อำเภอราษีไศล, ศรีสะเกษ, 33160",
    "ตำบลหนองหมี, อำเภอราษีไศล, ศรีสะเกษ, 33160",
    "ตำบลหนองอึ่ง, อำเภอราษีไศล, ศรีสะเกษ, 33160",
    "ตำบลหว้านคำ, อำเภอราษีไศล, ศรีสะเกษ, 33160",
    "ตำบลโจดม่วง, อำเภอศิลาลาด, ศรีสะเกษ, 33160",
    "ตำบลกุง, อำเภอศิลาลาด, ศรีสะเกษ, 33160",
    "ตำบลคลีกลิ้ง, อำเภอศิลาลาด, ศรีสะเกษ, 33160",
    "ตำบลหนองบัวดง, อำเภอศิลาลาด, ศรีสะเกษ, 33160",
    "ตำบลโพธิ์ศรี, อำเภอปรางค์กู่, ศรีสะเกษ, 33170",
    "ตำบลกู่, อำเภอปรางค์กู่, ศรีสะเกษ, 33170",
    "ตำบลดู่, อำเภอปรางค์กู่, ศรีสะเกษ, 33170",
    "ตำบลตูม, อำเภอปรางค์กู่, ศรีสะเกษ, 33170",
    "ตำบลพิมาย, อำเภอปรางค์กู่, ศรีสะเกษ, 33170",
    "ตำบลพิมายเหนือ, อำเภอปรางค์กู่, ศรีสะเกษ, 33170",
    "ตำบลสมอ, อำเภอปรางค์กู่, ศรีสะเกษ, 33170",
    "ตำบลสวาย, อำเภอปรางค์กู่, ศรีสะเกษ, 33170",
    "ตำบลสำโรงปราสาท, อำเภอปรางค์กู่, ศรีสะเกษ, 33170",
    "ตำบลหนองเชียงทูน, อำเภอปรางค์กู่, ศรีสะเกษ, 33170",
    "ตำบลโนนปูน, อำเภอไพรบึง, ศรีสะเกษ, 33180",
    "ตำบลไพรบึง, อำเภอไพรบึง, ศรีสะเกษ, 33180",
    "ตำบลดินแดง, อำเภอไพรบึง, ศรีสะเกษ, 33180",
    "ตำบลปราสาทเยอ, อำเภอไพรบึง, ศรีสะเกษ, 33180",
    "ตำบลสำโรงพลัน, อำเภอไพรบึง, ศรีสะเกษ, 33180",
    "ตำบลสุขสวัสดิ์, อำเภอไพรบึง, ศรีสะเกษ, 33180",
    "ตำบลโนนคูณ, อำเภอยางชุมน้อย, ศรีสะเกษ, 33190",
    "ตำบลกุดเมืองฮาม, อำเภอยางชุมน้อย, ศรีสะเกษ, 33190",
    "ตำบลคอนกาม, อำเภอยางชุมน้อย, ศรีสะเกษ, 33190",
    "ตำบลบึงบอน, อำเภอยางชุมน้อย, ศรีสะเกษ, 33190",
    "ตำบลยางชุมใหญ่, อำเภอยางชุมน้อย, ศรีสะเกษ, 33190",
    "ตำบลยางชุมน้อย, อำเภอยางชุมน้อย, ศรีสะเกษ, 33190",
    "ตำบลลิ้นฟ้า, อำเภอยางชุมน้อย, ศรีสะเกษ, 33190",
    "ตำบลเมืองหลวง, อำเภอห้วยทับทัน, ศรีสะเกษ, 33210",
    "ตำบลกล้วยกว้าง, อำเภอห้วยทับทัน, ศรีสะเกษ, 33210",
    "ตำบลจานแสนไชย, อำเภอห้วยทับทัน, ศรีสะเกษ, 33210",
    "ตำบลปราสาท, อำเภอห้วยทับทัน, ศรีสะเกษ, 33210",
    "ตำบลผักไหม, อำเภอห้วยทับทัน, ศรีสะเกษ, 33210",
    "ตำบลห้วยทับทัน, อำเภอห้วยทับทัน, ศรีสะเกษ, 33210",
    "ตำบลเป๊าะ, อำเภอบึงบูรพ์, ศรีสะเกษ, 33220",
    "ตำบลบึงบูรพ์, อำเภอบึงบูรพ์, ศรีสะเกษ, 33220",
    "ตำบลโนนเพ็ก, อำเภอพยุห์, ศรีสะเกษ, 33230",
    "ตำบลตำแย, อำเภอพยุห์, ศรีสะเกษ, 33230",
    "ตำบลพยุห์, อำเภอพยุห์, ศรีสะเกษ, 33230",
    "ตำบลพรหมสวัสดิ์, อำเภอพยุห์, ศรีสะเกษ, 33230",
    "ตำบลหนองค้า, อำเภอพยุห์, ศรีสะเกษ, 33230",
    "ตำบลเสื่องข้าว, อำเภอศรีรัตนะ, ศรีสะเกษ, 33240",
    "ตำบลตูม, อำเภอศรีรัตนะ, ศรีสะเกษ, 33240",
    "ตำบลพิงพวย, อำเภอศรีรัตนะ, ศรีสะเกษ, 33240",
    "ตำบลศรีแก้ว, อำเภอศรีรัตนะ, ศรีสะเกษ, 33240",
    "ตำบลศรีโนนงาม, อำเภอศรีรัตนะ, ศรีสะเกษ, 33240",
    "ตำบลสระเยาว์, อำเภอศรีรัตนะ, ศรีสะเกษ, 33240",
    "ตำบลสะพุง, อำเภอศรีรัตนะ, ศรีสะเกษ, 33240",
    "ตำบลเหล่ากวาง, อำเภอโนนคูณ, ศรีสะเกษ, 33250",
    "ตำบลโนนค้อ, อำเภอโนนคูณ, ศรีสะเกษ, 33250",
    "ตำบลโพธิ์, อำเภอโนนคูณ, ศรีสะเกษ, 33250",
    "ตำบลบก, อำเภอโนนคูณ, ศรีสะเกษ, 33250",
    "ตำบลหนองกุง, อำเภอโนนคูณ, ศรีสะเกษ, 33250",
    "ตำบลโพนยาง, อำเภอวังหิน, ศรีสะเกษ, 33270",
    "ตำบลดวนใหญ่, อำเภอวังหิน, ศรีสะเกษ, 33270",
    "ตำบลทุ่งสว่าง, อำเภอวังหิน, ศรีสะเกษ, 33270",
    "ตำบลธาตุ, อำเภอวังหิน, ศรีสะเกษ, 33270",
    "ตำบลบ่อแก้ว, อำเภอวังหิน, ศรีสะเกษ, 33270",
    "ตำบลบุสูง, อำเภอวังหิน, ศรีสะเกษ, 33270",
    "ตำบลวังหิน, อำเภอวังหิน, ศรีสะเกษ, 33270",
    "ตำบลศรีสำราญ, อำเภอวังหิน, ศรีสะเกษ, 33270",
    "ตำบลแจระแม, อำเภอเมืองอุบลราชธานี, อุบลราชธานี, 34000",
    "ตำบลในเมือง, อำเภอเมืองอุบลราชธานี, อุบลราชธานี, 34000",
    "ตำบลไร่น้อย, อำเภอเมืองอุบลราชธานี, อุบลราชธานี, 34000",
    "ตำบลกระโสบ, อำเภอเมืองอุบลราชธานี, อุบลราชธานี, 34000",
    "ตำบลกุดลาด, อำเภอเมืองอุบลราชธานี, อุบลราชธานี, 34000",
    "ตำบลขามใหญ่, อำเภอเมืองอุบลราชธานี, อุบลราชธานี, 34000",
    "ตำบลขี้เหล็ก, อำเภอเมืองอุบลราชธานี, อุบลราชธานี, 34000",
    "ตำบลปทุม, อำเภอเมืองอุบลราชธานี, อุบลราชธานี, 34000",
    "ตำบลปะอาว, อำเภอเมืองอุบลราชธานี, อุบลราชธานี, 34000",
    "ตำบลหนองขอน, อำเภอเมืองอุบลราชธานี, อุบลราชธานี, 34000",
    "ตำบลหนองบ่อ, อำเภอเมืองอุบลราชธานี, อุบลราชธานี, 34000",
    "ตำบลหัวเรือ, อำเภอเมืองอุบลราชธานี, อุบลราชธานี, 34000",
    "ตำบลเหล่าเสือโก้ก, อำเภอเหล่าเสือโก้ก, อุบลราชธานี, 34000",
    "ตำบลแพงใหญ่, อำเภอเหล่าเสือโก้ก, อุบลราชธานี, 34000",
    "ตำบลโพนเมือง, อำเภอเหล่าเสือโก้ก, อุบลราชธานี, 34000",
    "ตำบลหนองบก, อำเภอเหล่าเสือโก้ก, อุบลราชธานี, 34000",
    "ตำบลเหล่าแดง, อำเภอดอนมดแดง, อุบลราชธานี, 34000",
    "ตำบลคำไฮใหญ่, อำเภอดอนมดแดง, อุบลราชธานี, 34000",
    "ตำบลดอนมดแดง, อำเภอดอนมดแดง, อุบลราชธานี, 34000",
    "ตำบลท่าเมือง, อำเภอดอนมดแดง, อุบลราชธานี, 34000",
    "ตำบลโนนกลาง, อำเภอพิบูลมังสาหาร, อุบลราชธานี, 34110",
    "ตำบลโนนกาหลง, อำเภอพิบูลมังสาหาร, อุบลราชธานี, 34110",
    "ตำบลโพธิ์ไทร, อำเภอพิบูลมังสาหาร, อุบลราชธานี, 34110",
    "ตำบลโพธิ์ศรี, อำเภอพิบูลมังสาหาร, อุบลราชธานี, 34110",
    "ตำบลไร่ใต้, อำเภอพิบูลมังสาหาร, อุบลราชธานี, 34110",
    "ตำบลกุดชมภู, อำเภอพิบูลมังสาหาร, อุบลราชธานี, 34110",
    "ตำบลดอนจิก, อำเภอพิบูลมังสาหาร, อุบลราชธานี, 34110",
    "ตำบลทรายมูล, อำเภอพิบูลมังสาหาร, อุบลราชธานี, 34110",
    "ตำบลนาโพธิ์, อำเภอพิบูลมังสาหาร, อุบลราชธานี, 34110",
    "ตำบลบ้านแขม, อำเภอพิบูลมังสาหาร, อุบลราชธานี, 34110",
    "ตำบลพิบูล, อำเภอพิบูลมังสาหาร, อุบลราชธานี, 34110",
    "ตำบลระเว, อำเภอพิบูลมังสาหาร, อุบลราชธานี, 34110",
    "ตำบลหนองบัวฮี, อำเภอพิบูลมังสาหาร, อุบลราชธานี, 34110",
    "ตำบลอ่างศิลา, อำเภอพิบูลมังสาหาร, อุบลราชธานี, 34110",
    "ตำบลเกษม, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลเซเป็ด, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลเป้า, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลโคกจาน, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลโนนกุง, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลไหล่ทุ่ง, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลกระเดียน, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลกุดยาลวน, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลกุศกร, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลขามเปี้ย, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลขุหลุ, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลคอนสาย, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลคำเจริญ, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลตระการ, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลตากแดด, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลถ้ำแข้, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลท่าหลวง, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลนาพิน, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลนาสะไม, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลบ้านแดง, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลสะพือ, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลหนองเต่า, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลห้วยฝ้ายพัฒนา, อำเภอตระการพืชผล, อุบลราชธานี, 34130",
    "ตำบลเตย, อำเภอม่วงสามสิบ, อุบลราชธานี, 34140",
    "ตำบลเหล่าบก, อำเภอม่วงสามสิบ, อุบลราชธานี, 34140",
    "ตำบลโพนแพง, อำเภอม่วงสามสิบ, อุบลราชธานี, 34140",
    "ตำบลไผ่ใหญ่, อำเภอม่วงสามสิบ, อุบลราชธานี, 34140",
    "ตำบลดุมใหญ่, อำเภอม่วงสามสิบ, อุบลราชธานี, 34140",
    "ตำบลนาเลิง, อำเภอม่วงสามสิบ, อุบลราชธานี, 34140",
    "ตำบลม่วงสามสิบ, อำเภอม่วงสามสิบ, อุบลราชธานี, 34140",
    "ตำบลยางโยภาพ, อำเภอม่วงสามสิบ, อุบลราชธานี, 34140",
    "ตำบลยางสักกระโพหลุ่ม, อำเภอม่วงสามสิบ, อุบลราชธานี, 34140",
    "ตำบลหนองเมือง, อำเภอม่วงสามสิบ, อุบลราชธานี, 34140",
    "ตำบลหนองเหล่า, อำเภอม่วงสามสิบ, อุบลราชธานี, 34140",
    "ตำบลหนองไข่นก, อำเภอม่วงสามสิบ, อุบลราชธานี, 34140",
    "ตำบลหนองช้างใหญ่, อำเภอม่วงสามสิบ, อุบลราชธานี, 34140",
    "ตำบลหนองฮาง, อำเภอม่วงสามสิบ, อุบลราชธานี, 34140",
    "ตำบลเขื่องใน, อำเภอเขื่องใน, อุบลราชธานี, 34150",
    "ตำบลแดงหม้อ, อำเภอเขื่องใน, อุบลราชธานี, 34150",
    "ตำบลก่อเอ้, อำเภอเขื่องใน, อุบลราชธานี, 34150",
    "ตำบลค้อทอง, อำเภอเขื่องใน, อุบลราชธานี, 34150",
    "ตำบลชีทวน, อำเภอเขื่องใน, อุบลราชธานี, 34150",
    "ตำบลท่าไห, อำเภอเขื่องใน, อุบลราชธานี, 34150",
    "ตำบลธาตุน้อย, อำเภอเขื่องใน, อุบลราชธานี, 34150",
    "ตำบลนาคำใหญ่, อำเภอเขื่องใน, อุบลราชธานี, 34150",
    "ตำบลยางขี้นก, อำเภอเขื่องใน, อุบลราชธานี, 34150",
    "ตำบลศรีสุข, อำเภอเขื่องใน, อุบลราชธานี, 34150",
    "ตำบลสร้างถ่อ, อำเภอเขื่องใน, อุบลราชธานี, 34150",
    "ตำบลสหธาตุ, อำเภอเขื่องใน, อุบลราชธานี, 34150",
    "ตำบลหนองเหล่า, อำเภอเขื่องใน, อุบลราชธานี, 34150",
    "ตำบลหัวดอน, อำเภอเขื่องใน, อุบลราชธานี, 34150",
    "ตำบลเมืองเดช, อำเภอเดชอุดม, อุบลราชธานี, 34160",
    "ตำบลแก้ง, อำเภอเดชอุดม, อุบลราชธานี, 34160",
    "ตำบลโนนสมบูรณ์, อำเภอเดชอุดม, อุบลราชธานี, 34160",
    "ตำบลโพนงาม, อำเภอเดชอุดม, อุบลราชธานี, 34160",
    "ตำบลกลาง, อำเภอเดชอุดม, อุบลราชธานี, 34160",
    "ตำบลกุดประทาย, อำเภอเดชอุดม, อุบลราชธานี, 34160",
    "ตำบลคำครั่ง, อำเภอเดชอุดม, อุบลราชธานี, 34160",
    "ตำบลตบหู, อำเภอเดชอุดม, อุบลราชธานี, 34160",
    "ตำบลท่าโพธิ์ศรี, อำเภอเดชอุดม, อุบลราชธานี, 34160",
    "ตำบลทุ่งเทิง, อำเภอเดชอุดม, อุบลราชธานี, 34160",
    "ตำบลนาเจริญ, อำเภอเดชอุดม, อุบลราชธานี, 34160",
    "ตำบลนากระแซง, อำเภอเดชอุดม, อุบลราชธานี, 34160",
    "ตำบลนาส่วง, อำเภอเดชอุดม, อุบลราชธานี, 34160",
    "ตำบลบัวงาม, อำเภอเดชอุดม, อุบลราชธานี, 34160",
    "ตำบลป่าโมง, อำเภอเดชอุดม, อุบลราชธานี, 34160",
    "ตำบลสมสะอาด, อำเภอเดชอุดม, อุบลราชธานี, 34160",
    "ตำบลโคกชำแระ, อำเภอทุ่งศรีอุดม, อุบลราชธานี, 34160",
    "ตำบลกุดเรือ, อำเภอทุ่งศรีอุดม, อุบลราชธานี, 34160",
    "ตำบลนาเกษม, อำเภอทุ่งศรีอุดม, อุบลราชธานี, 34160",
    "ตำบลนาห่อม, อำเภอทุ่งศรีอุดม, อุบลราชธานี, 34160",
    "ตำบลหนองอ้ม, อำเภอทุ่งศรีอุดม, อุบลราชธานี, 34160",
    "ตำบลนาเยีย, อำเภอนาเยีย, อุบลราชธานี, 34160",
    "ตำบลนาเรือง, อำเภอนาเยีย, อุบลราชธานี, 34160",
    "ตำบลนาดี, อำเภอนาเยีย, อุบลราชธานี, 34160",
    "ตำบลเขมราฐ, อำเภอเขมราฐ, อุบลราชธานี, 34170",
    "ตำบลเจียด, อำเภอเขมราฐ, อุบลราชธานี, 34170",
    "ตำบลแก้งเหนือ, อำเภอเขมราฐ, อุบลราชธานี, 34170",
    "ตำบลขามป้อม, อำเภอเขมราฐ, อุบลราชธานี, 34170",
    "ตำบลนาแวง, อำเภอเขมราฐ, อุบลราชธานี, 34170",
    "ตำบลหนองนกทา, อำเภอเขมราฐ, อุบลราชธานี, 34170",
    "ตำบลหนองผือ, อำเภอเขมราฐ, อุบลราชธานี, 34170",
    "ตำบลหนองสิม, อำเภอเขมราฐ, อุบลราชธานี, 34170",
    "ตำบลหัวนา, อำเภอเขมราฐ, อุบลราชธานี, 34170",
    "ตำบลกองโพน, อำเภอนาตาล, อุบลราชธานี, 34170",
    "ตำบลนาตาล, อำเภอนาตาล, อุบลราชธานี, 34170",
    "ตำบลพะลาน, อำเภอนาตาล, อุบลราชธานี, 34170",
    "ตำบลพังเคน, อำเภอนาตาล, อุบลราชธานี, 34170",
    "ตำบลเมืองศรีไค, อำเภอวารินชำราบ, อุบลราชธานี, 34190",
    "ตำบลแสนสุข, อำเภอวารินชำราบ, อุบลราชธานี, 34190",
    "ตำบลโนนโหนน, อำเภอวารินชำราบ, อุบลราชธานี, 34190",
    "ตำบลโนนผึ้ง, อำเภอวารินชำราบ, อุบลราชธานี, 34190",
    "ตำบลโพธิ์ใหญ่, อำเภอวารินชำราบ, อุบลราชธานี, 34190",
    "ตำบลคำขวาง, อำเภอวารินชำราบ, อุบลราชธานี, 34190",
    "ตำบลคำน้ำแซบ, อำเภอวารินชำราบ, อุบลราชธานี, 34190",
    "ตำบลคูเมือง, อำเภอวารินชำราบ, อุบลราชธานี, 34190",
    "ตำบลธาตุ, อำเภอวารินชำราบ, อุบลราชธานี, 34190",
    "ตำบลบุ่งไหม, อำเภอวารินชำราบ, อุบลราชธานี, 34190",
    "ตำบลวารินชำราบ, อำเภอวารินชำราบ, อุบลราชธานี, 34190",
    "ตำบลสระสมิง, อำเภอวารินชำราบ, อุบลราชธานี, 34190",
    "ตำบลหนองกินเพล, อำเภอวารินชำราบ, อุบลราชธานี, 34190",
    "ตำบลแก่งโดม, อำเภอสว่างวีระวงศ์, อุบลราชธานี, 34190",
    "ตำบลท่าช้าง, อำเภอสว่างวีระวงศ์, อุบลราชธานี, 34190",
    "ตำบลบุ่งมะแลง, อำเภอสว่างวีระวงศ์, อุบลราชธานี, 34190",
    "ตำบลสว่าง, อำเภอสว่างวีระวงศ์, อุบลราชธานี, 34190",
    "ตำบลโขงเจียม, อำเภอโขงเจียม, อุบลราชธานี, 34220",
    "ตำบลนาโพธิ์กลาง, อำเภอโขงเจียม, อุบลราชธานี, 34220",
    "ตำบลหนองแสงใหญ่, อำเภอโขงเจียม, อุบลราชธานี, 34220",
    "ตำบลห้วยไผ่, อำเภอโขงเจียม, อุบลราชธานี, 34220",
    "ตำบลห้วยยาง, อำเภอโขงเจียม, อุบลราชธานี, 34220",
    "ตำบลโนนค้อ, อำเภอบุณฑริก, อุบลราชธานี, 34230",
    "ตำบลโพนงาม, อำเภอบุณฑริก, อุบลราชธานี, 34230",
    "ตำบลคอแลน, อำเภอบุณฑริก, อุบลราชธานี, 34230",
    "ตำบลนาโพธิ์, อำเภอบุณฑริก, อุบลราชธานี, 34230",
    "ตำบลบัวงาม, อำเภอบุณฑริก, อุบลราชธานี, 34230",
    "ตำบลบ้านแมด, อำเภอบุณฑริก, อุบลราชธานี, 34230",
    "ตำบลหนองสะโน, อำเภอบุณฑริก, อุบลราชธานี, 34230",
    "ตำบลห้วยข่า, อำเภอบุณฑริก, อุบลราชธานี, 34230",
    "ตำบลเอือดใหญ่, อำเภอศรีเมืองใหม่, อุบลราชธานี, 34250",
    "ตำบลแก้งกอก, อำเภอศรีเมืองใหม่, อุบลราชธานี, 34250",
    "ตำบลคำไหล, อำเภอศรีเมืองใหม่, อุบลราชธานี, 34250",
    "ตำบลดอนใหญ่, อำเภอศรีเมืองใหม่, อุบลราชธานี, 34250",
    "ตำบลตะบ่าย, อำเภอศรีเมืองใหม่, อุบลราชธานี, 34250",
    "ตำบลนาเลิน, อำเภอศรีเมืองใหม่, อุบลราชธานี, 34250",
    "ตำบลนาคำ, อำเภอศรีเมืองใหม่, อุบลราชธานี, 34250",
    "ตำบลลาดควาย, อำเภอศรีเมืองใหม่, อุบลราชธานี, 34250",
    "ตำบลวาริน, อำเภอศรีเมืองใหม่, อุบลราชธานี, 34250",
    "ตำบลสงยาง, อำเภอศรีเมืองใหม่, อุบลราชธานี, 34250",
    "ตำบลหนามแท่ง, อำเภอศรีเมืองใหม่, อุบลราชธานี, 34250",
    "ตำบลโคกสะอาด, อำเภอน้ำขุ่น, อุบลราชธานี, 34260",
    "ตำบลไพบูลย์, อำเภอน้ำขุ่น, อุบลราชธานี, 34260",
    "ตำบลขี้เหล็ก, อำเภอน้ำขุ่น, อุบลราชธานี, 34260",
    "ตำบลตาเกา, อำเภอน้ำขุ่น, อุบลราชธานี, 34260",
    "ตำบลเก่าขาม, อำเภอน้ำยืน, อุบลราชธานี, 34260",
    "ตำบลโซง, อำเภอน้ำยืน, อุบลราชธานี, 34260",
    "ตำบลโดมประดิษฐ์, อำเภอน้ำยืน, อุบลราชธานี, 34260",
    "ตำบลบุเปือย, อำเภอน้ำยืน, อุบลราชธานี, 34260",
    "ตำบลยาง, อำเภอน้ำยืน, อุบลราชธานี, 34260",
    "ตำบลยางใหญ่, อำเภอน้ำยืน, อุบลราชธานี, 34260",
    "ตำบลสีวิเชียร, อำเภอน้ำยืน, อุบลราชธานี, 34260",
    "ตำบลแก่งเค็ง, อำเภอกุดข้าวปุ้น, อุบลราชธานี, 34270",
    "ตำบลโนนสวาง, อำเภอกุดข้าวปุ้น, อุบลราชธานี, 34270",
    "ตำบลกาบิน, อำเภอกุดข้าวปุ้น, อุบลราชธานี, 34270",
    "ตำบลข้าวปุ้น, อำเภอกุดข้าวปุ้น, อุบลราชธานี, 34270",
    "ตำบลหนองทันน้ำ, อำเภอกุดข้าวปุ้น, อุบลราชธานี, 34270",
    "ตำบลโนนสมบูรณ์, อำเภอนาจะหลวย, อุบลราชธานี, 34280",
    "ตำบลโนนสวรรค์, อำเภอนาจะหลวย, อุบลราชธานี, 34280",
    "ตำบลโสกแสง, อำเภอนาจะหลวย, อุบลราชธานี, 34280",
    "ตำบลนาจะหลวย, อำเภอนาจะหลวย, อุบลราชธานี, 34280",
    "ตำบลบ้านตูม, อำเภอนาจะหลวย, อุบลราชธานี, 34280",
    "ตำบลพรสวรรค์, อำเภอนาจะหลวย, อุบลราชธานี, 34280",
    "ตำบลท่าลาด, อำเภอวารินชำราบ, อุบลราชธานี, 34310",
    "ตำบลบุ่งหวาย, อำเภอวารินชำราบ, อุบลราชธานี, 34310",
    "ตำบลห้วยขะยูง, อำเภอวารินชำราบ, อุบลราชธานี, 34310",
    "ตำบลโนนรัง, อำเภอเขื่องใน, อุบลราชธานี, 34320",
    "ตำบลกลางใหญ่, อำเภอเขื่องใน, อุบลราชธานี, 34320",
    "ตำบลบ้านไทย, อำเภอเขื่องใน, อุบลราชธานี, 34320",
    "ตำบลบ้านกอก, อำเภอเขื่องใน, อุบลราชธานี, 34320",
    "ตำบลคำหว้า, อำเภอตาลสุม, อุบลราชธานี, 34330",
    "ตำบลจิกเทิง, อำเภอตาลสุม, อุบลราชธานี, 34330",
    "ตำบลตาลสุม, อำเภอตาลสุม, อุบลราชธานี, 34330",
    "ตำบลนาคาย, อำเภอตาลสุม, อุบลราชธานี, 34330",
    "ตำบลสำโรง, อำเภอตาลสุม, อุบลราชธานี, 34330",
    "ตำบลหนองกุง, อำเภอตาลสุม, อุบลราชธานี, 34330",
    "ตำบลเหล่างาม, อำเภอโพธิ์ไทร, อุบลราชธานี, 34340",
    "ตำบลโพธิ์ไทร, อำเภอโพธิ์ไทร, อุบลราชธานี, 34340",
    "ตำบลม่วงใหญ่, อำเภอโพธิ์ไทร, อุบลราชธานี, 34340",
    "ตำบลสองคอน, อำเภอโพธิ์ไทร, อุบลราชธานี, 34340",
    "ตำบลสารภี, อำเภอโพธิ์ไทร, อุบลราชธานี, 34340",
    "ตำบลสำโรง, อำเภอโพธิ์ไทร, อุบลราชธานี, 34340",
    "ตำบลโนนก่อ, อำเภอสิรินธร, อุบลราชธานี, 34350",
    "ตำบลคันไร่, อำเภอสิรินธร, อุบลราชธานี, 34350",
    "ตำบลคำเขื่อนแก้ว, อำเภอสิรินธร, อุบลราชธานี, 34350",
    "ตำบลช่องเม็ก, อำเภอสิรินธร, อุบลราชธานี, 34350",
    "ตำบลนิคมสร้างตนเองลำโดมน้อย, อำเภอสิรินธร, อุบลราชธานี, 34350",
    "ตำบลฝางคำ, อำเภอสิรินธร, อุบลราชธานี, 34350",
    "ตำบลโคกก่อง, อำเภอสำโรง, อุบลราชธานี, 34360",
    "ตำบลโคกสว่าง, อำเภอสำโรง, อุบลราชธานี, 34360",
    "ตำบลโนนกลาง, อำเภอสำโรง, อุบลราชธานี, 34360",
    "ตำบลโนนกาเล็น, อำเภอสำโรง, อุบลราชธานี, 34360",
    "ตำบลขามป้อม, อำเภอสำโรง, อุบลราชธานี, 34360",
    "ตำบลค้อน้อย, อำเภอสำโรง, อุบลราชธานี, 34360",
    "ตำบลบอน, อำเภอสำโรง, อุบลราชธานี, 34360",
    "ตำบลสำโรง, อำเภอสำโรง, อุบลราชธานี, 34360",
    "ตำบลหนองไฮ, อำเภอสำโรง, อุบลราชธานี, 34360",
    "ตำบลเขื่องคำ, อำเภอเมืองยโสธร, ยโสธร, 35000",
    "ตำบลเดิด, อำเภอเมืองยโสธร, ยโสธร, 35000",
    "ตำบลในเมือง, อำเภอเมืองยโสธร, ยโสธร, 35000",
    "ตำบลขั้นไดใหญ่, อำเภอเมืองยโสธร, ยโสธร, 35000",
    "ตำบลขุมเงิน, อำเภอเมืองยโสธร, ยโสธร, 35000",
    "ตำบลค้อเหนือ, อำเภอเมืองยโสธร, ยโสธร, 35000",
    "ตำบลดู่ทุ่ง, อำเภอเมืองยโสธร, ยโสธร, 35000",
    "ตำบลตาดทอง, อำเภอเมืองยโสธร, ยโสธร, 35000",
    "ตำบลทุ่งแต้, อำเภอเมืองยโสธร, ยโสธร, 35000",
    "ตำบลทุ่งนางโอก, อำเภอเมืองยโสธร, ยโสธร, 35000",
    "ตำบลนาสะไมย์, อำเภอเมืองยโสธร, ยโสธร, 35000",
    "ตำบลน้ำคำใหญ่, อำเภอเมืองยโสธร, ยโสธร, 35000",
    "ตำบลสำราญ, อำเภอเมืองยโสธร, ยโสธร, 35000",
    "ตำบลสิงห์, อำเภอเมืองยโสธร, ยโสธร, 35000",
    "ตำบลหนองเป็ด, อำเภอเมืองยโสธร, ยโสธร, 35000",
    "ตำบลหนองเรือ, อำเภอเมืองยโสธร, ยโสธร, 35000",
    "ตำบลหนองคู, อำเภอเมืองยโสธร, ยโสธร, 35000",
    "ตำบลหนองหิน, อำเภอเมืองยโสธร, ยโสธร, 35000",
    "ตำบลเหล่าไฮ, อำเภอคำเขื่อนแก้ว, ยโสธร, 35110",
    "ตำบลโพนทัน, อำเภอคำเขื่อนแก้ว, ยโสธร, 35110",
    "ตำบลกุดกุง, อำเภอคำเขื่อนแก้ว, ยโสธร, 35110",
    "ตำบลกู่จาน, อำเภอคำเขื่อนแก้ว, ยโสธร, 35110",
    "ตำบลดงเจริญ, อำเภอคำเขื่อนแก้ว, ยโสธร, 35110",
    "ตำบลทุ่งมน, อำเภอคำเขื่อนแก้ว, ยโสธร, 35110",
    "ตำบลย่อ, อำเภอคำเขื่อนแก้ว, ยโสธร, 35110",
    "ตำบลลุมพุก, อำเภอคำเขื่อนแก้ว, ยโสธร, 35110",
    "ตำบลสงเปือย, อำเภอคำเขื่อนแก้ว, ยโสธร, 35110",
    "ตำบลโคกสำราญ, อำเภอเลิงนกทา, ยโสธร, 35120",
    "ตำบลกุดเชียงหมี, อำเภอเลิงนกทา, ยโสธร, 35120",
    "ตำบลกุดแห่, อำเภอเลิงนกทา, ยโสธร, 35120",
    "ตำบลบุ่งค้า, อำเภอเลิงนกทา, ยโสธร, 35120",
    "ตำบลศรีแก้ว, อำเภอเลิงนกทา, ยโสธร, 35120",
    "ตำบลสร้างมิ่ง, อำเภอเลิงนกทา, ยโสธร, 35120",
    "ตำบลสวาท, อำเภอเลิงนกทา, ยโสธร, 35120",
    "ตำบลสามแยก, อำเภอเลิงนกทา, ยโสธร, 35120",
    "ตำบลสามัคคี, อำเภอเลิงนกทา, ยโสธร, 35120",
    "ตำบลห้องแซง, อำเภอเลิงนกทา, ยโสธร, 35120",
    "ตำบลไทยเจริญ, อำเภอไทยเจริญ, ยโสธร, 35120",
    "ตำบลคำเตย, อำเภอไทยเจริญ, ยโสธร, 35120",
    "ตำบลคำไผ่, อำเภอไทยเจริญ, ยโสธร, 35120",
    "ตำบลน้ำคำ, อำเภอไทยเจริญ, ยโสธร, 35120",
    "ตำบลส้มผ่อ, อำเภอไทยเจริญ, ยโสธร, 35120",
    "ตำบลโนนทราย, อำเภอมหาชนะชัย, ยโสธร, 35130",
    "ตำบลคูเมือง, อำเภอมหาชนะชัย, ยโสธร, 35130",
    "ตำบลบากเรือ, อำเภอมหาชนะชัย, ยโสธร, 35130",
    "ตำบลบึงแก, อำเภอมหาชนะชัย, ยโสธร, 35130",
    "ตำบลผือฮี, อำเภอมหาชนะชัย, ยโสธร, 35130",
    "ตำบลพระเสาร์, อำเภอมหาชนะชัย, ยโสธร, 35130",
    "ตำบลฟ้าหยาด, อำเภอมหาชนะชัย, ยโสธร, 35130",
    "ตำบลม่วง, อำเภอมหาชนะชัย, ยโสธร, 35130",
    "ตำบลสงยาง, อำเภอมหาชนะชัย, ยโสธร, 35130",
    "ตำบลหัวเมือง, อำเภอมหาชนะชัย, ยโสธร, 35130",
    "ตำบลโนนเปือย, อำเภอกุดชุม, ยโสธร, 35140",
    "ตำบลโพนงาม, อำเภอกุดชุม, ยโสธร, 35140",
    "ตำบลกำแมด, อำเภอกุดชุม, ยโสธร, 35140",
    "ตำบลกุดชุม, อำเภอกุดชุม, ยโสธร, 35140",
    "ตำบลคำน้ำสร้าง, อำเภอกุดชุม, ยโสธร, 35140",
    "ตำบลนาโส่, อำเภอกุดชุม, ยโสธร, 35140",
    "ตำบลหนองแหน, อำเภอกุดชุม, ยโสธร, 35140",
    "ตำบลหนองหมี, อำเภอกุดชุม, ยโสธร, 35140",
    "ตำบลห้วยแก้ง, อำเภอกุดชุม, ยโสธร, 35140",
    "ตำบลเชียงเพ็ง, อำเภอป่าติ้ว, ยโสธร, 35150",
    "ตำบลโคกนาโก, อำเภอป่าติ้ว, ยโสธร, 35150",
    "ตำบลโพธิ์ไทร, อำเภอป่าติ้ว, ยโสธร, 35150",
    "ตำบลกระจาย, อำเภอป่าติ้ว, ยโสธร, 35150",
    "ตำบลศรีฐาน, อำเภอป่าติ้ว, ยโสธร, 35150",
    "ตำบลกุดน้ำใส, อำเภอค้อวัง, ยโสธร, 35160",
    "ตำบลค้อวัง, อำเภอค้อวัง, ยโสธร, 35160",
    "ตำบลน้ำอ้อม, อำเภอค้อวัง, ยโสธร, 35160",
    "ตำบลฟ้าห่วน, อำเภอค้อวัง, ยโสธร, 35160",
    "ตำบลไผ่, อำเภอทรายมูล, ยโสธร, 35170",
    "ตำบลดงมะไฟ, อำเภอทรายมูล, ยโสธร, 35170",
    "ตำบลดู่ลาด, อำเภอทรายมูล, ยโสธร, 35170",
    "ตำบลทรายมูล, อำเภอทรายมูล, ยโสธร, 35170",
    "ตำบลนาเวียง, อำเภอทรายมูล, ยโสธร, 35170",
    "ตำบลแคนน้อย, อำเภอคำเขื่อนแก้ว, ยโสธร, 35180",
    "ตำบลดงแคนใหญ่, อำเภอคำเขื่อนแก้ว, ยโสธร, 35180",
    "ตำบลนาแก, อำเภอคำเขื่อนแก้ว, ยโสธร, 35180",
    "ตำบลนาคำ, อำเภอคำเขื่อนแก้ว, ยโสธร, 35180",
    "ตำบลโคกสูง, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36000",
    "ตำบลโพนทอง, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36000",
    "ตำบลในเมือง, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36000",
    "ตำบลกุดตุ้ม, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36000",
    "ตำบลชีลอง, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36000",
    "ตำบลซับสีทอง, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36000",
    "ตำบลท่าหินโงม, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36000",
    "ตำบลนาเสียว, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36000",
    "ตำบลนาฝาย, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36000",
    "ตำบลบ้านเล่า, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36000",
    "ตำบลบุ่งคล้า, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36000",
    "ตำบลรอบเมือง, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36000",
    "ตำบลลาดใหญ่, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36000",
    "ตำบลหนองนาแซง, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36000",
    "ตำบลห้วยต้อน, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36000",
    "ตำบลห้วยบง, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36000",
    "ตำบลโคกสะอาด, อำเภอภูเขียว, ชัยภูมิ, 36110",
    "ตำบลโอโล, อำเภอภูเขียว, ชัยภูมิ, 36110",
    "ตำบลกวางโจน, อำเภอภูเขียว, ชัยภูมิ, 36110",
    "ตำบลกุดยม, อำเภอภูเขียว, ชัยภูมิ, 36110",
    "ตำบลธาตุทอง, อำเภอภูเขียว, ชัยภูมิ, 36110",
    "ตำบลบ้านเพชร, อำเภอภูเขียว, ชัยภูมิ, 36110",
    "ตำบลบ้านแก้ง, อำเภอภูเขียว, ชัยภูมิ, 36110",
    "ตำบลบ้านดอน, อำเภอภูเขียว, ชัยภูมิ, 36110",
    "ตำบลผักปัง, อำเภอภูเขียว, ชัยภูมิ, 36110",
    "ตำบลหนองคอนไทย, อำเภอภูเขียว, ชัยภูมิ, 36110",
    "ตำบลหนองตูม, อำเภอภูเขียว, ชัยภูมิ, 36110",
    "ตำบลโนนกอก, อำเภอเกษตรสมบูรณ์, ชัยภูมิ, 36120",
    "ตำบลโนนทอง, อำเภอเกษตรสมบูรณ์, ชัยภูมิ, 36120",
    "ตำบลกุดเลาะ, อำเภอเกษตรสมบูรณ์, ชัยภูมิ, 36120",
    "ตำบลบ้านเดื่อ, อำเภอเกษตรสมบูรณ์, ชัยภูมิ, 36120",
    "ตำบลบ้านเป้า, อำเภอเกษตรสมบูรณ์, ชัยภูมิ, 36120",
    "ตำบลบ้านบัว, อำเภอเกษตรสมบูรณ์, ชัยภูมิ, 36120",
    "ตำบลบ้านยาง, อำเภอเกษตรสมบูรณ์, ชัยภูมิ, 36120",
    "ตำบลบ้านหัน, อำเภอเกษตรสมบูรณ์, ชัยภูมิ, 36120",
    "ตำบลสระโพนทอง, อำเภอเกษตรสมบูรณ์, ชัยภูมิ, 36120",
    "ตำบลหนองโพนงาม, อำเภอเกษตรสมบูรณ์, ชัยภูมิ, 36120",
    "ตำบลหนองข่า, อำเภอเกษตรสมบูรณ์, ชัยภูมิ, 36120",
    "ตำบลกะฮาด, อำเภอเนินสง่า, ชัยภูมิ, 36130",
    "ตำบลตาเนิน, อำเภอเนินสง่า, ชัยภูมิ, 36130",
    "ตำบลรังงาม, อำเภอเนินสง่า, ชัยภูมิ, 36130",
    "ตำบลหนองฉิม, อำเภอเนินสง่า, ชัยภูมิ, 36130",
    "ตำบลกุดน้ำใส, อำเภอจัตุรัส, ชัยภูมิ, 36130",
    "ตำบลบ้านกอก, อำเภอจัตุรัส, ชัยภูมิ, 36130",
    "ตำบลบ้านขาม, อำเภอจัตุรัส, ชัยภูมิ, 36130",
    "ตำบลละหาน, อำเภอจัตุรัส, ชัยภูมิ, 36130",
    "ตำบลส้มป่อย, อำเภอจัตุรัส, ชัยภูมิ, 36130",
    "ตำบลหนองโดน, อำเภอจัตุรัส, ชัยภูมิ, 36130",
    "ตำบลหนองบัวใหญ่, อำเภอจัตุรัส, ชัยภูมิ, 36130",
    "ตำบลหนองบัวบาน, อำเภอจัตุรัส, ชัยภูมิ, 36130",
    "ตำบลซับใหญ่, อำเภอซับใหญ่, ชัยภูมิ, 36130",
    "ตำบลตะโกทอง, อำเภอซับใหญ่, ชัยภูมิ, 36130",
    "ตำบลท่ากูบ, อำเภอซับใหญ่, ชัยภูมิ, 36130",
    "ตำบลโคกมั่งงอย, อำเภอคอนสวรรค์, ชัยภูมิ, 36140",
    "ตำบลโนนสะอาด, อำเภอคอนสวรรค์, ชัยภูมิ, 36140",
    "ตำบลคอนสวรรค์, อำเภอคอนสวรรค์, ชัยภูมิ, 36140",
    "ตำบลช่องสามหมอ, อำเภอคอนสวรรค์, ชัยภูมิ, 36140",
    "ตำบลบ้านโสก, อำเภอคอนสวรรค์, ชัยภูมิ, 36140",
    "ตำบลยางหวาย, อำเภอคอนสวรรค์, ชัยภูมิ, 36140",
    "ตำบลศรีสำราญ, อำเภอคอนสวรรค์, ชัยภูมิ, 36140",
    "ตำบลหนองขาม, อำเภอคอนสวรรค์, ชัยภูมิ, 36140",
    "ตำบลห้วยไร่, อำเภอคอนสวรรค์, ชัยภูมิ, 36140",
    "ตำบลเก่าย่าดี, อำเภอแก้งคร้อ, ชัยภูมิ, 36150",
    "ตำบลโคกกุง, อำเภอแก้งคร้อ, ชัยภูมิ, 36150",
    "ตำบลช่องสามหมอ, อำเภอแก้งคร้อ, ชัยภูมิ, 36150",
    "ตำบลท่ามะไฟหวาน, อำเภอแก้งคร้อ, ชัยภูมิ, 36150",
    "ตำบลนาหนองทุ่ม, อำเภอแก้งคร้อ, ชัยภูมิ, 36150",
    "ตำบลบ้านแก้ง, อำเภอแก้งคร้อ, ชัยภูมิ, 36150",
    "ตำบลหนองไผ่, อำเภอแก้งคร้อ, ชัยภูมิ, 36150",
    "ตำบลหนองขาม, อำเภอแก้งคร้อ, ชัยภูมิ, 36150",
    "ตำบลหนองสังข์, อำเภอแก้งคร้อ, ชัยภูมิ, 36150",
    "ตำบลหลุบคา, อำเภอแก้งคร้อ, ชัยภูมิ, 36150",
    "ตำบลเกาะมะนาว, อำเภอบำเหน็จณรงค์, ชัยภูมิ, 36160",
    "ตำบลโคกเพชรพัฒนา, อำเภอบำเหน็จณรงค์, ชัยภูมิ, 36160",
    "ตำบลโคกเริงรมย์, อำเภอบำเหน็จณรงค์, ชัยภูมิ, 36160",
    "ตำบลบ้านเพชร, อำเภอบำเหน็จณรงค์, ชัยภูมิ, 36160",
    "ตำบลบ้านชวน, อำเภอบำเหน็จณรงค์, ชัยภูมิ, 36160",
    "ตำบลโนนแดง, อำเภอบ้านเขว้า, ชัยภูมิ, 36170",
    "ตำบลชีบน, อำเภอบ้านเขว้า, ชัยภูมิ, 36170",
    "ตำบลตลาดแร้ง, อำเภอบ้านเขว้า, ชัยภูมิ, 36170",
    "ตำบลบ้านเขว้า, อำเภอบ้านเขว้า, ชัยภูมิ, 36170",
    "ตำบลภูแลนคา, อำเภอบ้านเขว้า, ชัยภูมิ, 36170",
    "ตำบลลุ่มลำชี, อำเภอบ้านเขว้า, ชัยภูมิ, 36170",
    "ตำบลโนนคูณ, อำเภอคอนสาร, ชัยภูมิ, 36180",
    "ตำบลคอนสาร, อำเภอคอนสาร, ชัยภูมิ, 36180",
    "ตำบลดงกลาง, อำเภอคอนสาร, ชัยภูมิ, 36180",
    "ตำบลดงบัง, อำเภอคอนสาร, ชัยภูมิ, 36180",
    "ตำบลทุ่งนาเลา, อำเภอคอนสาร, ชัยภูมิ, 36180",
    "ตำบลทุ่งพระ, อำเภอคอนสาร, ชัยภูมิ, 36180",
    "ตำบลทุ่งลุยลาย, อำเภอคอนสาร, ชัยภูมิ, 36180",
    "ตำบลห้วยยาง, อำเภอคอนสาร, ชัยภูมิ, 36180",
    "ตำบลบ้านเต่า, อำเภอบ้านแท่น, ชัยภูมิ, 36190",
    "ตำบลบ้านแท่น, อำเภอบ้านแท่น, ชัยภูมิ, 36190",
    "ตำบลสระพัง, อำเภอบ้านแท่น, ชัยภูมิ, 36190",
    "ตำบลสามสวน, อำเภอบ้านแท่น, ชัยภูมิ, 36190",
    "ตำบลหนองคู, อำเภอบ้านแท่น, ชัยภูมิ, 36190",
    "ตำบลกุดชุมแสง, อำเภอหนองบัวแดง, ชัยภูมิ, 36210",
    "ตำบลคูเมือง, อำเภอหนองบัวแดง, ชัยภูมิ, 36210",
    "ตำบลถ้ำวัวแดง, อำเภอหนองบัวแดง, ชัยภูมิ, 36210",
    "ตำบลท่าใหญ่, อำเภอหนองบัวแดง, ชัยภูมิ, 36210",
    "ตำบลนางแดด, อำเภอหนองบัวแดง, ชัยภูมิ, 36210",
    "ตำบลวังชมภู, อำเภอหนองบัวแดง, ชัยภูมิ, 36210",
    "ตำบลหนองแวง, อำเภอหนองบัวแดง, ชัยภูมิ, 36210",
    "ตำบลหนองบัวแดง, อำเภอหนองบัวแดง, ชัยภูมิ, 36210",
    "ตำบลหนองบัวโคก, อำเภอจัตุรัส, ชัยภูมิ, 36220",
    "ตำบลบ้านตาล, อำเภอบำเหน็จณรงค์, ชัยภูมิ, 36220",
    "ตำบลหัวทะเล, อำเภอบำเหน็จณรงค์, ชัยภูมิ, 36220",
    "ตำบลบ้านแปรง, อำเภอด่านขุนทด, นครราชสีมา, 36220",
    "ตำบลหนองไทร, อำเภอด่านขุนทด, นครราชสีมา, 36220",
    "ตำบลโป่งนก, อำเภอเทพสถิต, ชัยภูมิ, 36230",
    "ตำบลนายางกลัก, อำเภอเทพสถิต, ชัยภูมิ, 36230",
    "ตำบลบ้านไร่, อำเภอเทพสถิต, ชัยภูมิ, 36230",
    "ตำบลวะตะแบก, อำเภอเทพสถิต, ชัยภูมิ, 36230",
    "ตำบลห้วยยายจิ๋ว, อำเภอเทพสถิต, ชัยภูมิ, 36230",
    "ตำบลโนนสำราญ, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36240",
    "ตำบลบ้านค่าย, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36240",
    "ตำบลหนองไผ่, อำเภอเมืองชัยภูมิ, ชัยภูมิ, 36240",
    "ตำบลโคกสะอาด, อำเภอหนองบัวระเหว, ชัยภูมิ, 36250",
    "ตำบลโสกปลาดุก, อำเภอหนองบัวระเหว, ชัยภูมิ, 36250",
    "ตำบลวังตะเฆ่, อำเภอหนองบัวระเหว, ชัยภูมิ, 36250",
    "ตำบลหนองบัวระเหว, อำเภอหนองบัวระเหว, ชัยภูมิ, 36250",
    "ตำบลห้วยแย้, อำเภอหนองบัวระเหว, ชัยภูมิ, 36250",
    "ตำบลเจาทอง, อำเภอภักดีชุมพล, ชัยภูมิ, 36260",
    "ตำบลแหลมทอง, อำเภอภักดีชุมพล, ชัยภูมิ, 36260",
    "ตำบลบ้านเจียง, อำเภอภักดีชุมพล, ชัยภูมิ, 36260",
    "ตำบลวังทอง, อำเภอภักดีชุมพล, ชัยภูมิ, 36260",
    "ตำบลเหล่าพรวน, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลโนนโพธิ์, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลโนนหนามแท่ง, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลไก่คำ, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลกุดปลาดุก, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลคึมใหญ่, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลดอนเมย, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลนาแต้, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลนาจิก, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลนาผือ, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลนายม, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลนาวัง, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลนาหมอม้า, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลน้ำปลีก, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลบุ่ง, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลปลาค้าว, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลสร้างนกทา, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลหนองมะแซว, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลห้วยไร่, อำเภอเมืองอำนาจเจริญ, อำนาจเจริญ, 37000",
    "ตำบลเปือย, อำเภอลืออำนาจ, อำนาจเจริญ, 37000",
    "ตำบลแมด, อำเภอลืออำนาจ, อำนาจเจริญ, 37000",
    "ตำบลโคกกลาง, อำเภอลืออำนาจ, อำนาจเจริญ, 37000",
    "ตำบลไร่ขี, อำเภอลืออำนาจ, อำนาจเจริญ, 37000",
    "ตำบลดงบัง, อำเภอลืออำนาจ, อำนาจเจริญ, 37000",
    "ตำบลดงมะยาง, อำเภอลืออำนาจ, อำนาจเจริญ, 37000",
    "ตำบลอำนาจ, อำเภอลืออำนาจ, อำนาจเจริญ, 37000",
    "ตำบลโนนงาม, อำเภอปทุมราชวงศา, อำนาจเจริญ, 37110",
    "ตำบลคำโพน, อำเภอปทุมราชวงศา, อำนาจเจริญ, 37110",
    "ตำบลนาป่าแซง, อำเภอปทุมราชวงศา, อำนาจเจริญ, 37110",
    "ตำบลนาหว้า, อำเภอปทุมราชวงศา, อำนาจเจริญ, 37110",
    "ตำบลลือ, อำเภอปทุมราชวงศา, อำนาจเจริญ, 37110",
    "ตำบลหนองข่า, อำเภอปทุมราชวงศา, อำนาจเจริญ, 37110",
    "ตำบลห้วย, อำเภอปทุมราชวงศา, อำนาจเจริญ, 37110",
    "ตำบลไม้กลอน, อำเภอพนา, อำนาจเจริญ, 37180",
    "ตำบลจานลาน, อำเภอพนา, อำนาจเจริญ, 37180",
    "ตำบลพนา, อำเภอพนา, อำนาจเจริญ, 37180",
    "ตำบลพระเหลา, อำเภอพนา, อำนาจเจริญ, 37180",
    "ตำบลโคกก่ง, อำเภอชานุมาน, อำนาจเจริญ, 37210",
    "ตำบลโคกสาร, อำเภอชานุมาน, อำนาจเจริญ, 37210",
    "ตำบลคำเขื่อนแก้ว, อำเภอชานุมาน, อำนาจเจริญ, 37210",
    "ตำบลชานุมาน, อำเภอชานุมาน, อำนาจเจริญ, 37210",
    "ตำบลป่าก่อ, อำเภอชานุมาน, อำนาจเจริญ, 37210",
    "ตำบลเค็งใหญ่, อำเภอหัวตะพาน, อำนาจเจริญ, 37240",
    "ตำบลโพนเมืองน้อย, อำเภอหัวตะพาน, อำนาจเจริญ, 37240",
    "ตำบลคำพระ, อำเภอหัวตะพาน, อำนาจเจริญ, 37240",
    "ตำบลจิกดู่, อำเภอหัวตะพาน, อำนาจเจริญ, 37240",
    "ตำบลรัตนวารี, อำเภอหัวตะพาน, อำนาจเจริญ, 37240",
    "ตำบลสร้างถ่อน้อย, อำเภอหัวตะพาน, อำนาจเจริญ, 37240",
    "ตำบลหนองแก้ว, อำเภอหัวตะพาน, อำนาจเจริญ, 37240",
    "ตำบลหัวตะพาน, อำเภอหัวตะพาน, อำนาจเจริญ, 37240",
    "ตำบลเสนางคนิคม, อำเภอเสนางคนิคม, อำนาจเจริญ, 37290",
    "ตำบลโพนทอง, อำเภอเสนางคนิคม, อำนาจเจริญ, 37290",
    "ตำบลไร่สีสุก, อำเภอเสนางคนิคม, อำนาจเจริญ, 37290",
    "ตำบลนาเวียง, อำเภอเสนางคนิคม, อำนาจเจริญ, 37290",
    "ตำบลหนองไฮ, อำเภอเสนางคนิคม, อำนาจเจริญ, 37290",
    "ตำบลหนองสามสี, อำเภอเสนางคนิคม, อำนาจเจริญ, 37290",
    "ตำบลโคกก่อง, อำเภอเมืองบึงกาฬ, บึงกาฬ, 38000",
    "ตำบลโนนสมบูรณ์, อำเภอเมืองบึงกาฬ, บึงกาฬ, 38000",
    "ตำบลโนนสว่าง, อำเภอเมืองบึงกาฬ, บึงกาฬ, 38000",
    "ตำบลโป่งเปือย, อำเภอเมืองบึงกาฬ, บึงกาฬ, 38000",
    "ตำบลไคสี, อำเภอเมืองบึงกาฬ, บึงกาฬ, 38000",
    "ตำบลคำนาดี, อำเภอเมืองบึงกาฬ, บึงกาฬ, 38000",
    "ตำบลชัยพร, อำเภอเมืองบึงกาฬ, บึงกาฬ, 38000",
    "ตำบลนาสวรรค์, อำเภอเมืองบึงกาฬ, บึงกาฬ, 38000",
    "ตำบลบึงกาฬ, อำเภอเมืองบึงกาฬ, บึงกาฬ, 38000",
    "ตำบลวิศิษฐ์, อำเภอเมืองบึงกาฬ, บึงกาฬ, 38000",
    "ตำบลหนองเลิง, อำเภอเมืองบึงกาฬ, บึงกาฬ, 38000",
    "ตำบลหอคำ, อำเภอเมืองบึงกาฬ, บึงกาฬ, 38000",
    "ตำบลโคกกว้าง, อำเภอบุ่งคล้า, บึงกาฬ, 38000",
    "ตำบลบุ่งคล้า, อำเภอบุ่งคล้า, บึงกาฬ, 38000",
    "ตำบลหนองเดิ่น, อำเภอบุ่งคล้า, บึงกาฬ, 38000",
    "ตำบลเซกา, อำเภอเซกา, บึงกาฬ, 38150",
    "ตำบลโสกก่าม, อำเภอเซกา, บึงกาฬ, 38150",
    "ตำบลซาง, อำเภอเซกา, บึงกาฬ, 38150",
    "ตำบลท่ากกแดง, อำเภอเซกา, บึงกาฬ, 38150",
    "ตำบลท่าสะอาด, อำเภอเซกา, บึงกาฬ, 38150",
    "ตำบลน้ำจั้น, อำเภอเซกา, บึงกาฬ, 38150",
    "ตำบลบ้านต้อง, อำเภอเซกา, บึงกาฬ, 38150",
    "ตำบลป่งไฮ, อำเภอเซกา, บึงกาฬ, 38150",
    "ตำบลหนองทุ่ม, อำเภอเซกา, บึงกาฬ, 38150",
    "ตำบลเหล่าทอง, อำเภอโซ่พิสัย, บึงกาฬ, 38170",
    "ตำบลโซ่, อำเภอโซ่พิสัย, บึงกาฬ, 38170",
    "ตำบลคำแก้ว, อำเภอโซ่พิสัย, บึงกาฬ, 38170",
    "ตำบลถ้ำเจริญ, อำเภอโซ่พิสัย, บึงกาฬ, 38170",
    "ตำบลบัวตูม, อำเภอโซ่พิสัย, บึงกาฬ, 38170",
    "ตำบลศรีชมภู, อำเภอโซ่พิสัย, บึงกาฬ, 38170",
    "ตำบลหนองพันทา, อำเภอโซ่พิสัย, บึงกาฬ, 38170",
    "ตำบลดอนหญ้านาง, อำเภอพรเจริญ, บึงกาฬ, 38180",
    "ตำบลป่าแฝก, อำเภอพรเจริญ, บึงกาฬ, 38180",
    "ตำบลพรเจริญ, อำเภอพรเจริญ, บึงกาฬ, 38180",
    "ตำบลวังชมภู, อำเภอพรเจริญ, บึงกาฬ, 38180",
    "ตำบลศรีชมภู, อำเภอพรเจริญ, บึงกาฬ, 38180",
    "ตำบลศรีสำราญ, อำเภอพรเจริญ, บึงกาฬ, 38180",
    "ตำบลหนองหัวช้าง, อำเภอพรเจริญ, บึงกาฬ, 38180",
    "ตำบลโนนศิลา, อำเภอปากคาด, บึงกาฬ, 38190",
    "ตำบลนากั้ง, อำเภอปากคาด, บึงกาฬ, 38190",
    "ตำบลนาดง, อำเภอปากคาด, บึงกาฬ, 38190",
    "ตำบลปากคาด, อำเภอปากคาด, บึงกาฬ, 38190",
    "ตำบลสมสนุก, อำเภอปากคาด, บึงกาฬ, 38190",
    "ตำบลหนองยอง, อำเภอปากคาด, บึงกาฬ, 38190",
    "ตำบลชุมภูพร, อำเภอศรีวิไล, บึงกาฬ, 38210",
    "ตำบลนาแสง, อำเภอศรีวิไล, บึงกาฬ, 38210",
    "ตำบลนาสะแบง, อำเภอศรีวิไล, บึงกาฬ, 38210",
    "ตำบลนาสิงห์, อำเภอศรีวิไล, บึงกาฬ, 38210",
    "ตำบลศรีวิไล, อำเภอศรีวิไล, บึงกาฬ, 38210",
    "ตำบลโพธิ์หมากแข้ง, อำเภอบึงโขงหลง, บึงกาฬ, 38220",
    "ตำบลดงบัง, อำเภอบึงโขงหลง, บึงกาฬ, 38220",
    "ตำบลท่าดอกคำ, อำเภอบึงโขงหลง, บึงกาฬ, 38220",
    "ตำบลบึงโขงหลง, อำเภอบึงโขงหลง, บึงกาฬ, 38220",
    "ตำบลโนนขมิ้น, อำเภอเมืองหนองบัวลำภู, หนองบัวลำภู, 39000",
    "ตำบลโนนทัน, อำเภอเมืองหนองบัวลำภู, หนองบัวลำภู, 39000",
    "ตำบลโพธิ์ชัย, อำเภอเมืองหนองบัวลำภู, หนองบัวลำภู, 39000",
    "ตำบลกุดจิก, อำเภอเมืองหนองบัวลำภู, หนองบัวลำภู, 39000",
    "ตำบลนาคำไฮ, อำเภอเมืองหนองบัวลำภู, หนองบัวลำภู, 39000",
    "ตำบลนามะเฟือง, อำเภอเมืองหนองบัวลำภู, หนองบัวลำภู, 39000",
    "ตำบลบ้านขาม, อำเภอเมืองหนองบัวลำภู, หนองบัวลำภู, 39000",
    "ตำบลบ้านพร้าว, อำเภอเมืองหนองบัวลำภู, หนองบัวลำภู, 39000",
    "ตำบลป่าไม้งาม, อำเภอเมืองหนองบัวลำภู, หนองบัวลำภู, 39000",
    "ตำบลลำภู, อำเภอเมืองหนองบัวลำภู, หนองบัวลำภู, 39000",
    "ตำบลหนองบัว, อำเภอเมืองหนองบัวลำภู, หนองบัวลำภู, 39000",
    "ตำบลหนองภัยศูนย์, อำเภอเมืองหนองบัวลำภู, หนองบัวลำภู, 39000",
    "ตำบลหนองสวรรค์, อำเภอเมืองหนองบัวลำภู, หนองบัวลำภู, 39000",
    "ตำบลหนองหว้า, อำเภอเมืองหนองบัวลำภู, หนองบัวลำภู, 39000",
    "ตำบลหัวนา, อำเภอเมืองหนองบัวลำภู, หนองบัวลำภู, 39000",
    "ตำบลโคกใหญ่, อำเภอโนนสัง, หนองบัวลำภู, 39140",
    "ตำบลโคกม่วง, อำเภอโนนสัง, หนองบัวลำภู, 39140",
    "ตำบลโนนเมือง, อำเภอโนนสัง, หนองบัวลำภู, 39140",
    "ตำบลโนนสัง, อำเภอโนนสัง, หนองบัวลำภู, 39140",
    "ตำบลกุดดู่, อำเภอโนนสัง, หนองบัวลำภู, 39140",
    "ตำบลนิคมพัฒนา, อำเภอโนนสัง, หนองบัวลำภู, 39140",
    "ตำบลบ้านค้อ, อำเภอโนนสัง, หนองบัวลำภู, 39140",
    "ตำบลบ้านถิ่น, อำเภอโนนสัง, หนองบัวลำภู, 39140",
    "ตำบลปางกู่, อำเภอโนนสัง, หนองบัวลำภู, 39140",
    "ตำบลหนองเรือ, อำเภอโนนสัง, หนองบัวลำภู, 39140",
    "ตำบลโนนเมือง, อำเภอนากลาง, หนองบัวลำภู, 39170",
    "ตำบลกุดแห่, อำเภอนากลาง, หนองบัวลำภู, 39170",
    "ตำบลด่านช้าง, อำเภอนากลาง, หนองบัวลำภู, 39170",
    "ตำบลนากลาง, อำเภอนากลาง, หนองบัวลำภู, 39170",
    "ตำบลฝั่งแดง, อำเภอนากลาง, หนองบัวลำภู, 39170",
    "ตำบลอุทัยสวรรค์, อำเภอนากลาง, หนองบัวลำภู, 39170",
    "ตำบลเทพคีรี, อำเภอนาวัง, หนองบัวลำภู, 39170",
    "ตำบลนาเหล่า, อำเภอนาวัง, หนองบัวลำภู, 39170",
    "ตำบลนาแก, อำเภอนาวัง, หนองบัวลำภู, 39170",
    "ตำบลวังทอง, อำเภอนาวัง, หนองบัวลำภู, 39170",
    "ตำบลวังปลาป้อม, อำเภอนาวัง, หนองบัวลำภู, 39170",
    "ตำบลเมืองใหม่, อำเภอศรีบุญเรือง, หนองบัวลำภู, 39180",
    "ตำบลโนนม่วง, อำเภอศรีบุญเรือง, หนองบัวลำภู, 39180",
    "ตำบลโนนสะอาด, อำเภอศรีบุญเรือง, หนองบัวลำภู, 39180",
    "ตำบลกุดสะเทียน, อำเภอศรีบุญเรือง, หนองบัวลำภู, 39180",
    "ตำบลทรายทอง, อำเภอศรีบุญเรือง, หนองบัวลำภู, 39180",
    "ตำบลนากอก, อำเภอศรีบุญเรือง, หนองบัวลำภู, 39180",
    "ตำบลยางหล่อ, อำเภอศรีบุญเรือง, หนองบัวลำภู, 39180",
    "ตำบลศรีบุญเรือง, อำเภอศรีบุญเรือง, หนองบัวลำภู, 39180",
    "ตำบลหนองแก, อำเภอศรีบุญเรือง, หนองบัวลำภู, 39180",
    "ตำบลหนองกุงแก้ว, อำเภอศรีบุญเรือง, หนองบัวลำภู, 39180",
    "ตำบลหนองบัวใต้, อำเภอศรีบุญเรือง, หนองบัวลำภู, 39180",
    "ตำบลหันนางาม, อำเภอศรีบุญเรือง, หนองบัวลำภู, 39180",
    "ตำบลกุดผึ้ง, อำเภอสุวรรณคูหา, หนองบัวลำภู, 39270",
    "ตำบลดงมะไฟ, อำเภอสุวรรณคูหา, หนองบัวลำภู, 39270",
    "ตำบลนาด่าน, อำเภอสุวรรณคูหา, หนองบัวลำภู, 39270",
    "ตำบลนาดี, อำเภอสุวรรณคูหา, หนองบัวลำภู, 39270",
    "ตำบลนาสี, อำเภอสุวรรณคูหา, หนองบัวลำภู, 39270",
    "ตำบลบ้านโคก, อำเภอสุวรรณคูหา, หนองบัวลำภู, 39270",
    "ตำบลบุญทัน, อำเภอสุวรรณคูหา, หนองบัวลำภู, 39270",
    "ตำบลสุวรรณคูหา, อำเภอสุวรรณคูหา, หนองบัวลำภู, 39270",
    "ตำบลเก่ากลอย, อำเภอนากลาง, หนองบัวลำภู, 39350",
    "ตำบลกุดดินจี่, อำเภอนากลาง, หนองบัวลำภู, 39350",
    "ตำบลดงสวรรค์, อำเภอนากลาง, หนองบัวลำภู, 39350",
    "ตำบลเมืองเก่า, อำเภอเมืองขอนแก่น, ขอนแก่น, 40000",
    "ตำบลแดงใหญ่, อำเภอเมืองขอนแก่น, ขอนแก่น, 40000",
    "ตำบลโคกสี, อำเภอเมืองขอนแก่น, ขอนแก่น, 40000",
    "ตำบลโนนท่อน, อำเภอเมืองขอนแก่น, ขอนแก่น, 40000",
    "ตำบลในเมือง, อำเภอเมืองขอนแก่น, ขอนแก่น, 40000",
    "ตำบลดอนช้าง, อำเภอเมืองขอนแก่น, ขอนแก่น, 40000",
    "ตำบลบ้านเป็ด, อำเภอเมืองขอนแก่น, ขอนแก่น, 40000",
    "ตำบลบ้านค้อ, อำเภอเมืองขอนแก่น, ขอนแก่น, 40000",
    "ตำบลบ้านทุ่ม, อำเภอเมืองขอนแก่น, ขอนแก่น, 40000",
    "ตำบลบ้านหว้า, อำเภอเมืองขอนแก่น, ขอนแก่น, 40000",
    "ตำบลบึงเนียม, อำเภอเมืองขอนแก่น, ขอนแก่น, 40000",
    "ตำบลพระลับ, อำเภอเมืองขอนแก่น, ขอนแก่น, 40000",
    "ตำบลศิลา, อำเภอเมืองขอนแก่น, ขอนแก่น, 40000",
    "ตำบลสาวะถี, อำเภอเมืองขอนแก่น, ขอนแก่น, 40000",
    "ตำบลสำราญ, อำเภอเมืองขอนแก่น, ขอนแก่น, 40000",
    "ตำบลหนองตูม, อำเภอเมืองขอนแก่น, ขอนแก่น, 40000",
    "ตำบลเปือยใหญ่, อำเภอโนนศิลา, ขอนแก่น, 40110",
    "ตำบลโนนแดง, อำเภอโนนศิลา, ขอนแก่น, 40110",
    "ตำบลโนนศิลา, อำเภอโนนศิลา, ขอนแก่น, 40110",
    "ตำบลบ้านหัน, อำเภอโนนศิลา, ขอนแก่น, 40110",
    "ตำบลหนองปลาหมอ, อำเภอโนนศิลา, ขอนแก่น, 40110",
    "ตำบลโคกสำราญ, อำเภอบ้านแฮด, ขอนแก่น, 40110",
    "ตำบลโนนสมบูรณ์, อำเภอบ้านแฮด, ขอนแก่น, 40110",
    "ตำบลบ้านแฮด, อำเภอบ้านแฮด, ขอนแก่น, 40110",
    "ตำบลหนองแซง, อำเภอบ้านแฮด, ขอนแก่น, 40110",
    "ตำบลเมืองเพีย, อำเภอบ้านไผ่, ขอนแก่น, 40110",
    "ตำบลแคนเหนือ, อำเภอบ้านไผ่, ขอนแก่น, 40110",
    "ตำบลในเมือง, อำเภอบ้านไผ่, ขอนแก่น, 40110",
    "ตำบลบ้านไผ่, อำเภอบ้านไผ่, ขอนแก่น, 40110",
    "ตำบลบ้านลาน, อำเภอบ้านไผ่, ขอนแก่น, 40110",
    "ตำบลป่าปอ, อำเภอบ้านไผ่, ขอนแก่น, 40110",
    "ตำบลภูเหล็ก, อำเภอบ้านไผ่, ขอนแก่น, 40110",
    "ตำบลหนองน้ำใส, อำเภอบ้านไผ่, ขอนแก่น, 40110",
    "ตำบลหัวหนอง, อำเภอบ้านไผ่, ขอนแก่น, 40110",
    "ตำบลหินตั้ง, อำเภอบ้านไผ่, ขอนแก่น, 40110",
    "ตำบลเก่างิ้ว, อำเภอพล, ขอนแก่น, 40120",
    "ตำบลเพ็กใหญ่, อำเภอพล, ขอนแก่น, 40120",
    "ตำบลเมืองพล, อำเภอพล, ขอนแก่น, 40120",
    "ตำบลโคกสง่า, อำเภอพล, ขอนแก่น, 40120",
    "ตำบลโจดหนองแก, อำเภอพล, ขอนแก่น, 40120",
    "ตำบลโนนข่า, อำเภอพล, ขอนแก่น, 40120",
    "ตำบลโสกนกเต็น, อำเภอพล, ขอนแก่น, 40120",
    "ตำบลลอมคอม, อำเภอพล, ขอนแก่น, 40120",
    "ตำบลหนองแวงโสกพระ, อำเภอพล, ขอนแก่น, 40120",
    "ตำบลหนองแวงนางเบ้า, อำเภอพล, ขอนแก่น, 40120",
    "ตำบลหนองมะเขือ, อำเภอพล, ขอนแก่น, 40120",
    "ตำบลหัวทุ่ง, อำเภอพล, ขอนแก่น, 40120",
    "ตำบลโนนอุดม, อำเภอชุมแพ, ขอนแก่น, 40130",
    "ตำบลไชยสอ, อำเภอชุมแพ, ขอนแก่น, 40130",
    "ตำบลขัวเรียง, อำเภอชุมแพ, ขอนแก่น, 40130",
    "ตำบลชุมแพ, อำเภอชุมแพ, ขอนแก่น, 40130",
    "ตำบลนาเพียง, อำเภอชุมแพ, ขอนแก่น, 40130",
    "ตำบลวังหินลาด, อำเภอชุมแพ, ขอนแก่น, 40130",
    "ตำบลหนองเสาเล้า, อำเภอชุมแพ, ขอนแก่น, 40130",
    "ตำบลหนองไผ่, อำเภอชุมแพ, ขอนแก่น, 40130",
    "ตำบลทรายมูล, อำเภอน้ำพอง, ขอนแก่น, 40140",
    "ตำบลท่ากระเสริม, อำเภอน้ำพอง, ขอนแก่น, 40140",
    "ตำบลน้ำพอง, อำเภอน้ำพอง, ขอนแก่น, 40140",
    "ตำบลบัวเงิน, อำเภอน้ำพอง, ขอนแก่น, 40140",
    "ตำบลบัวใหญ่, อำเภอน้ำพอง, ขอนแก่น, 40140",
    "ตำบลบ้านขาม, อำเภอน้ำพอง, ขอนแก่น, 40140",
    "ตำบลพังทุย, อำเภอน้ำพอง, ขอนแก่น, 40140",
    "ตำบลวังชัย, อำเภอน้ำพอง, ขอนแก่น, 40140",
    "ตำบลหนองกุง, อำเภอน้ำพอง, ขอนแก่น, 40140",
    "ตำบลเขาน้อย, อำเภอเวียงเก่า, ขอนแก่น, 40150",
    "ตำบลเมืองเก่าพัฒนา, อำเภอเวียงเก่า, ขอนแก่น, 40150",
    "ตำบลในเมือง, อำเภอเวียงเก่า, ขอนแก่น, 40150",
    "ตำบลกุดขอนแก่น, อำเภอภูเวียง, ขอนแก่น, 40150",
    "ตำบลดินดำ, อำเภอภูเวียง, ขอนแก่น, 40150",
    "ตำบลทุ่งชมพู, อำเภอภูเวียง, ขอนแก่น, 40150",
    "ตำบลนาชุมแสง, อำเภอภูเวียง, ขอนแก่น, 40150",
    "ตำบลนาหว้า, อำเภอภูเวียง, ขอนแก่น, 40150",
    "ตำบลบ้านเรือ, อำเภอภูเวียง, ขอนแก่น, 40150",
    "ตำบลภูเวียง, อำเภอภูเวียง, ขอนแก่น, 40150",
    "ตำบลสงเปือย, อำเภอภูเวียง, ขอนแก่น, 40150",
    "ตำบลหนองกุงเซิน, อำเภอภูเวียง, ขอนแก่น, 40150",
    "ตำบลหนองกุงธนสาร, อำเภอภูเวียง, ขอนแก่น, 40150",
    "ตำบลหว้าทอง, อำเภอภูเวียง, ขอนแก่น, 40150",
    "ตำบลกุดธาตุ, อำเภอหนองนาคำ, ขอนแก่น, 40150",
    "ตำบลขนวน, อำเภอหนองนาคำ, ขอนแก่น, 40150",
    "ตำบลบ้านโคก, อำเภอหนองนาคำ, ขอนแก่น, 40150",
    "ตำบลโพธิ์ไชย, อำเภอโคกโพธิ์ไชย, ขอนแก่น, 40160",
    "ตำบลซับสมบูรณ์, อำเภอโคกโพธิ์ไชย, ขอนแก่น, 40160",
    "ตำบลนาแพง, อำเภอโคกโพธิ์ไชย, ขอนแก่น, 40160",
    "ตำบลบ้านโคก, อำเภอโคกโพธิ์ไชย, ขอนแก่น, 40160",
    "ตำบลโพนเพ็ก, อำเภอมัญจาคีรี, ขอนแก่น, 40160",
    "ตำบลกุดเค้า, อำเภอมัญจาคีรี, ขอนแก่น, 40160",
    "ตำบลคำแคน, อำเภอมัญจาคีรี, ขอนแก่น, 40160",
    "ตำบลท่าศาลา, อำเภอมัญจาคีรี, ขอนแก่น, 40160",
    "ตำบลนาข่า, อำเภอมัญจาคีรี, ขอนแก่น, 40160",
    "ตำบลนางาม, อำเภอมัญจาคีรี, ขอนแก่น, 40160",
    "ตำบลสวนหม่อน, อำเภอมัญจาคีรี, ขอนแก่น, 40160",
    "ตำบลหนองแปน, อำเภอมัญจาคีรี, ขอนแก่น, 40160",
    "ตำบลดูนสาด, อำเภอกระนวน, ขอนแก่น, 40170",
    "ตำบลน้ำอ้อม, อำเภอกระนวน, ขอนแก่น, 40170",
    "ตำบลบ้านฝาง, อำเภอกระนวน, ขอนแก่น, 40170",
    "ตำบลหนองโก, อำเภอกระนวน, ขอนแก่น, 40170",
    "ตำบลหนองโน, อำเภอกระนวน, ขอนแก่น, 40170",
    "ตำบลหนองกุงใหญ่, อำเภอกระนวน, ขอนแก่น, 40170",
    "ตำบลห้วยโจด, อำเภอกระนวน, ขอนแก่น, 40170",
    "ตำบลห้วยยาง, อำเภอกระนวน, ขอนแก่น, 40170",
    "ตำบลหัวนาคำ, อำเภอกระนวน, ขอนแก่น, 40170",
    "ตำบลกระนวน, อำเภอซำสูง, ขอนแก่น, 40170",
    "ตำบลคำแมด, อำเภอซำสูง, ขอนแก่น, 40170",
    "ตำบลคูคำ, อำเภอซำสูง, ขอนแก่น, 40170",
    "ตำบลบ้านโนน, อำเภอซำสูง, ขอนแก่น, 40170",
    "ตำบลห้วยเตย, อำเภอซำสูง, ขอนแก่น, 40170",
    "ตำบลโนนพะยอม, อำเภอชนบท, ขอนแก่น, 40180",
    "ตำบลกุดเพียขอม, อำเภอชนบท, ขอนแก่น, 40180",
    "ตำบลชนบท, อำเภอชนบท, ขอนแก่น, 40180",
    "ตำบลบ้านแท่น, อำเภอชนบท, ขอนแก่น, 40180",
    "ตำบลปอแดง, อำเภอชนบท, ขอนแก่น, 40180",
    "ตำบลวังแสง, อำเภอชนบท, ขอนแก่น, 40180",
    "ตำบลศรีบุญเรือง, อำเภอชนบท, ขอนแก่น, 40180",
    "ตำบลห้วยแก, อำเภอชนบท, ขอนแก่น, 40180",
    "ตำบลโนนธาตุ, อำเภอหนองสองห้อง, ขอนแก่น, 40190",
    "ตำบลคึมชาด, อำเภอหนองสองห้อง, ขอนแก่น, 40190",
    "ตำบลดงเค็ง, อำเภอหนองสองห้อง, ขอนแก่น, 40190",
    "ตำบลดอนดั่ง, อำเภอหนองสองห้อง, ขอนแก่น, 40190",
    "ตำบลดอนดู่, อำเภอหนองสองห้อง, ขอนแก่น, 40190",
    "ตำบลตะกั่วป่า, อำเภอหนองสองห้อง, ขอนแก่น, 40190",
    "ตำบลวังหิน, อำเภอหนองสองห้อง, ขอนแก่น, 40190",
    "ตำบลสำโรง, อำเภอหนองสองห้อง, ขอนแก่น, 40190",
    "ตำบลหนองเม็ก, อำเภอหนองสองห้อง, ขอนแก่น, 40190",
    "ตำบลหนองไผ่ล้อม, อำเภอหนองสองห้อง, ขอนแก่น, 40190",
    "ตำบลหนองสองห้อง, อำเภอหนองสองห้อง, ขอนแก่น, 40190",
    "ตำบลหันโจด, อำเภอหนองสองห้อง, ขอนแก่น, 40190",
    "ตำบลโนนทอง, อำเภอหนองเรือ, ขอนแก่น, 40210",
    "ตำบลโนนทัน, อำเภอหนองเรือ, ขอนแก่น, 40210",
    "ตำบลโนนสะอาด, อำเภอหนองเรือ, ขอนแก่น, 40210",
    "ตำบลกุดกว้าง, อำเภอหนองเรือ, ขอนแก่น, 40210",
    "ตำบลบ้านเม็ง, อำเภอหนองเรือ, ขอนแก่น, 40210",
    "ตำบลหนองเรือ, อำเภอหนองเรือ, ขอนแก่น, 40210",
    "ตำบลซำยาง, อำเภอสีชมพู, ขอนแก่น, 40220",
    "ตำบลดงลาน, อำเภอสีชมพู, ขอนแก่น, 40220",
    "ตำบลนาจาน, อำเภอสีชมพู, ขอนแก่น, 40220",
    "ตำบลบริบูรณ์, อำเภอสีชมพู, ขอนแก่น, 40220",
    "ตำบลบ้านใหม่, อำเภอสีชมพู, ขอนแก่น, 40220",
    "ตำบลภูห่าน, อำเภอสีชมพู, ขอนแก่น, 40220",
    "ตำบลวังเพิ่ม, อำเภอสีชมพู, ขอนแก่น, 40220",
    "ตำบลศรีสุข, อำเภอสีชมพู, ขอนแก่น, 40220",
    "ตำบลสีชมพู, อำเภอสีชมพู, ขอนแก่น, 40220",
    "ตำบลหนองแดง, อำเภอสีชมพู, ขอนแก่น, 40220",
    "ตำบลแวงน้อย, อำเภอแวงน้อย, ขอนแก่น, 40230",
    "ตำบลก้านเหลือง, อำเภอแวงน้อย, ขอนแก่น, 40230",
    "ตำบลทางขวาง, อำเภอแวงน้อย, ขอนแก่น, 40230",
    "ตำบลท่านางแนว, อำเภอแวงน้อย, ขอนแก่น, 40230",
    "ตำบลท่าวัด, อำเภอแวงน้อย, ขอนแก่น, 40230",
    "ตำบลละหานนา, อำเภอแวงน้อย, ขอนแก่น, 40230",
    "ตำบลจระเข้, อำเภอหนองเรือ, ขอนแก่น, 40240",
    "ตำบลบ้านกง, อำเภอหนองเรือ, ขอนแก่น, 40240",
    "ตำบลบ้านผือ, อำเภอหนองเรือ, ขอนแก่น, 40240",
    "ตำบลยางคำ, อำเภอหนองเรือ, ขอนแก่น, 40240",
    "ตำบลเขื่อนอุบลรัตน์, อำเภออุบลรัตน์, ขอนแก่น, 40250",
    "ตำบลโคกสูง, อำเภออุบลรัตน์, ขอนแก่น, 40250",
    "ตำบลทุ่งโป่ง, อำเภออุบลรัตน์, ขอนแก่น, 40250",
    "ตำบลนาคำ, อำเภออุบลรัตน์, ขอนแก่น, 40250",
    "ตำบลบ้านดง, อำเภออุบลรัตน์, ขอนแก่น, 40250",
    "ตำบลศรีสุขสำราญ, อำเภออุบลรัตน์, ขอนแก่น, 40250",
    "ตำบลดอนหัน, อำเภอเมืองขอนแก่น, ขอนแก่น, 40260",
    "ตำบลท่าพระ, อำเภอเมืองขอนแก่น, ขอนแก่น, 40260",
    "ตำบลโคกงาม, อำเภอบ้านฝาง, ขอนแก่น, 40270",
    "ตำบลโนนฆ้อง, อำเภอบ้านฝาง, ขอนแก่น, 40270",
    "ตำบลบ้านเหล่า, อำเภอบ้านฝาง, ขอนแก่น, 40270",
    "ตำบลบ้านฝาง, อำเภอบ้านฝาง, ขอนแก่น, 40270",
    "ตำบลป่ามะนาว, อำเภอบ้านฝาง, ขอนแก่น, 40270",
    "ตำบลป่าหวายนั่ง, อำเภอบ้านฝาง, ขอนแก่น, 40270",
    "ตำบลหนองบัว, อำเภอบ้านฝาง, ขอนแก่น, 40270",
    "ตำบลเขาสวนกวาง, อำเภอเขาสวนกวาง, ขอนแก่น, 40280",
    "ตำบลโนนสมบูรณ์, อำเภอเขาสวนกวาง, ขอนแก่น, 40280",
    "ตำบลคำม่วง, อำเภอเขาสวนกวาง, ขอนแก่น, 40280",
    "ตำบลดงเมืองแอม, อำเภอเขาสวนกวาง, ขอนแก่น, 40280",
    "ตำบลนางิ้ว, อำเภอเขาสวนกวาง, ขอนแก่น, 40280",
    "ตำบลโนนสะอาด, อำเภอชุมแพ, ขอนแก่น, 40290",
    "ตำบลโนนหัน, อำเภอชุมแพ, ขอนแก่น, 40290",
    "ตำบลนาหนองทุ่ม, อำเภอชุมแพ, ขอนแก่น, 40290",
    "ตำบลหนองเขียด, อำเภอชุมแพ, ขอนแก่น, 40290",
    "ตำบลกุดน้ำใส, อำเภอน้ำพอง, ขอนแก่น, 40310",
    "ตำบลม่วงหวาน, อำเภอน้ำพอง, ขอนแก่น, 40310",
    "ตำบลสะอาด, อำเภอน้ำพอง, ขอนแก่น, 40310",
    "ตำบลขามป้อม, อำเภอพระยืน, ขอนแก่น, 40320",
    "ตำบลบ้านโต้น, อำเภอพระยืน, ขอนแก่น, 40320",
    "ตำบลพระบุ, อำเภอพระยืน, ขอนแก่น, 40320",
    "ตำบลพระยืน, อำเภอพระยืน, ขอนแก่น, 40320",
    "ตำบลหนองแวง, อำเภอพระยืน, ขอนแก่น, 40320",
    "ตำบลแวงใหญ่, อำเภอแวงใหญ่, ขอนแก่น, 40330",
    "ตำบลโนนทอง, อำเภอแวงใหญ่, ขอนแก่น, 40330",
    "ตำบลโนนสะอาด, อำเภอแวงใหญ่, ขอนแก่น, 40330",
    "ตำบลใหม่นาเพียง, อำเภอแวงใหญ่, ขอนแก่น, 40330",
    "ตำบลคอนฉิม, อำเภอแวงใหญ่, ขอนแก่น, 40330",
    "ตำบลเปือยน้อย, อำเภอเปือยน้อย, ขอนแก่น, 40340",
    "ตำบลขามป้อม, อำเภอเปือยน้อย, ขอนแก่น, 40340",
    "ตำบลวังม่วง, อำเภอเปือยน้อย, ขอนแก่น, 40340",
    "ตำบลสระแก้ว, อำเภอเปือยน้อย, ขอนแก่น, 40340",
    "ตำบลโนนคอม, อำเภอภูผาม่าน, ขอนแก่น, 40350",
    "ตำบลนาฝาย, อำเภอภูผาม่าน, ขอนแก่น, 40350",
    "ตำบลภูผาม่าน, อำเภอภูผาม่าน, ขอนแก่น, 40350",
    "ตำบลวังสวาบ, อำเภอภูผาม่าน, ขอนแก่น, 40350",
    "ตำบลห้วยม่วง, อำเภอภูผาม่าน, ขอนแก่น, 40350",
    "ตำบลเชียงพิณ, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลเชียงยืน, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลโคกสะอาด, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลกุดสระ, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลนากว้าง, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลนาข่า, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลนาดี, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลนิคมสงเคราะห์, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลบ้านเลื่อม, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลบ้านขาว, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลบ้านจั่น, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลบ้านตาด, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลสามพร้าว, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลหนองไฮ, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลหนองขอนกว้าง, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลหนองนาคำ, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลหนองบัว, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลหมากแข้ง, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลหมูม่น, อำเภอเมืองอุดรธานี, อุดรธานี, 41000",
    "ตำบลเชียงแหว, อำเภอกุมภวาปี, อุดรธานี, 41110",
    "ตำบลเวียงคำ, อำเภอกุมภวาปี, อุดรธานี, 41110",
    "ตำบลแชแล, อำเภอกุมภวาปี, อุดรธานี, 41110",
    "ตำบลกุมภวาปี, อำเภอกุมภวาปี, อุดรธานี, 41110",
    "ตำบลตูมใต้, อำเภอกุมภวาปี, อุดรธานี, 41110",
    "ตำบลท่าลี่, อำเภอกุมภวาปี, อุดรธานี, 41110",
    "ตำบลสีออ, อำเภอกุมภวาปี, อุดรธานี, 41110",
    "ตำบลหนองหว้า, อำเภอกุมภวาปี, อุดรธานี, 41110",
    "ตำบลห้วยเกิ้ง, อำเภอกุมภวาปี, อุดรธานี, 41110",
    "ตำบลนาม่วง, อำเภอประจักษ์ศิลปาคม, อุดรธานี, 41110",
    "ตำบลห้วยสามพาด, อำเภอประจักษ์ศิลปาคม, อุดรธานี, 41110",
    "ตำบลอุ่มจาน, อำเภอประจักษ์ศิลปาคม, อุดรธานี, 41110",
    "ตำบลโนนทองอินทร์, อำเภอกู่แก้ว, อุดรธานี, 41130",
    "ตำบลค้อใหญ่, อำเภอกู่แก้ว, อุดรธานี, 41130",
    "ตำบลคอนสาย, อำเภอกู่แก้ว, อุดรธานี, 41130",
    "ตำบลบ้านจีต, อำเภอกู่แก้ว, อุดรธานี, 41130",
    "ตำบลดอนกลอย, อำเภอพิบูลย์รักษ์, อุดรธานี, 41130",
    "ตำบลนาทราย, อำเภอพิบูลย์รักษ์, อุดรธานี, 41130",
    "ตำบลบ้านแดง, อำเภอพิบูลย์รักษ์, อุดรธานี, 41130",
    "ตำบลโพนงาม, อำเภอหนองหาน, อุดรธานี, 41130",
    "ตำบลดอนหายโศก, อำเภอหนองหาน, อุดรธานี, 41130",
    "ตำบลผักตบ, อำเภอหนองหาน, อุดรธานี, 41130",
    "ตำบลพังงู, อำเภอหนองหาน, อุดรธานี, 41130",
    "ตำบลสร้อยพร้าว, อำเภอหนองหาน, อุดรธานี, 41130",
    "ตำบลสะแบง, อำเภอหนองหาน, อุดรธานี, 41130",
    "ตำบลหนองเม็ก, อำเภอหนองหาน, อุดรธานี, 41130",
    "ตำบลหนองไผ่, อำเภอหนองหาน, อุดรธานี, 41130",
    "ตำบลหนองหาน, อำเภอหนองหาน, อุดรธานี, 41130",
    "ตำบลเชียงหวาง, อำเภอเพ็ญ, อุดรธานี, 41150",
    "ตำบลเตาไห, อำเภอเพ็ญ, อุดรธานี, 41150",
    "ตำบลเพ็ญ, อำเภอเพ็ญ, อุดรธานี, 41150",
    "ตำบลโคกกลาง, อำเภอเพ็ญ, อุดรธานี, 41150",
    "ตำบลจอมศรี, อำเภอเพ็ญ, อุดรธานี, 41150",
    "ตำบลนาบัว, อำเภอเพ็ญ, อุดรธานี, 41150",
    "ตำบลนาพู่, อำเภอเพ็ญ, อุดรธานี, 41150",
    "ตำบลบ้านเหล่า, อำเภอเพ็ญ, อุดรธานี, 41150",
    "ตำบลบ้านธาตุ, อำเภอเพ็ญ, อุดรธานี, 41150",
    "ตำบลสร้างแป้น, อำเภอเพ็ญ, อุดรธานี, 41150",
    "ตำบลสุมเส้า, อำเภอเพ็ญ, อุดรธานี, 41150",
    "ตำบลเขือน้ำ, อำเภอบ้านผือ, อุดรธานี, 41160",
    "ตำบลเมืองพาน, อำเภอบ้านผือ, อุดรธานี, 41160",
    "ตำบลโนนทอง, อำเภอบ้านผือ, อุดรธานี, 41160",
    "ตำบลกลางใหญ่, อำเภอบ้านผือ, อุดรธานี, 41160",
    "ตำบลข้าวสาร, อำเภอบ้านผือ, อุดรธานี, 41160",
    "ตำบลคำด้วง, อำเภอบ้านผือ, อุดรธานี, 41160",
    "ตำบลคำบง, อำเภอบ้านผือ, อุดรธานี, 41160",
    "ตำบลจำปาโมง, อำเภอบ้านผือ, อุดรธานี, 41160",
    "ตำบลบ้านค้อ, อำเภอบ้านผือ, อุดรธานี, 41160",
    "ตำบลบ้านผือ, อำเภอบ้านผือ, อุดรธานี, 41160",
    "ตำบลหนองแวง, อำเภอบ้านผือ, อุดรธานี, 41160",
    "ตำบลหนองหัวคู, อำเภอบ้านผือ, อุดรธานี, 41160",
    "ตำบลหายโศก, อำเภอบ้านผือ, อุดรธานี, 41160",
    "ตำบลโพนสูง, อำเภอบ้านดุง, อุดรธานี, 41190",
    "ตำบลดงเย็น, อำเภอบ้านดุง, อุดรธานี, 41190",
    "ตำบลถ่อนนาลับ, อำเภอบ้านดุง, อุดรธานี, 41190",
    "ตำบลนาไหม, อำเภอบ้านดุง, อุดรธานี, 41190",
    "ตำบลนาคำ, อำเภอบ้านดุง, อุดรธานี, 41190",
    "ตำบลบ้านจันทน์, อำเภอบ้านดุง, อุดรธานี, 41190",
    "ตำบลบ้านชัย, อำเภอบ้านดุง, อุดรธานี, 41190",
    "ตำบลบ้านดุง, อำเภอบ้านดุง, อุดรธานี, 41190",
    "ตำบลบ้านตาด, อำเภอบ้านดุง, อุดรธานี, 41190",
    "ตำบลบ้านม่วง, อำเภอบ้านดุง, อุดรธานี, 41190",
    "ตำบลวังทอง, อำเภอบ้านดุง, อุดรธานี, 41190",
    "ตำบลศรีสุทโธ, อำเภอบ้านดุง, อุดรธานี, 41190",
    "ตำบลอ้อมกอ, อำเภอบ้านดุง, อุดรธานี, 41190",
    "ตำบลโสมเยี่ยม, อำเภอน้ำโสม, อุดรธานี, 41210",
    "ตำบลนางัว, อำเภอน้ำโสม, อุดรธานี, 41210",
    "ตำบลน้ำโสม, อำเภอน้ำโสม, อุดรธานี, 41210",
    "ตำบลบ้านหยวก, อำเภอน้ำโสม, อุดรธานี, 41210",
    "ตำบลศรีสำราญ, อำเภอน้ำโสม, อุดรธานี, 41210",
    "ตำบลสามัคคี, อำเภอน้ำโสม, อุดรธานี, 41210",
    "ตำบลหนองแวง, อำเภอน้ำโสม, อุดรธานี, 41210",
    "ตำบลโนนหวาย, อำเภอหนองวัวซอ, อุดรธานี, 41220",
    "ตำบลกุดหมากไฟ, อำเภอหนองวัวซอ, อุดรธานี, 41220",
    "ตำบลหนองอ้อ, อำเภอหนองวัวซอ, อุดรธานี, 41220",
    "ตำบลอูบมุง, อำเภอหนองวัวซอ, อุดรธานี, 41220",
    "ตำบลจำปี, อำเภอศรีธาตุ, อุดรธานี, 41230",
    "ตำบลตาดทอง, อำเภอศรีธาตุ, อุดรธานี, 41230",
    "ตำบลนายูง, อำเภอศรีธาตุ, อุดรธานี, 41230",
    "ตำบลบ้านโปร่ง, อำเภอศรีธาตุ, อุดรธานี, 41230",
    "ตำบลศรีธาตุ, อำเภอศรีธาตุ, อุดรธานี, 41230",
    "ตำบลหนองนกเขียน, อำเภอศรีธาตุ, อุดรธานี, 41230",
    "ตำบลหัวนาคำ, อำเภอศรีธาตุ, อุดรธานี, 41230",
    "ตำบลโคกกลาง, อำเภอโนนสะอาด, อุดรธานี, 41240",
    "ตำบลโนนสะอาด, อำเภอโนนสะอาด, อุดรธานี, 41240",
    "ตำบลโพธิ์ศรีสำราญ, อำเภอโนนสะอาด, อุดรธานี, 41240",
    "ตำบลทมนางาม, อำเภอโนนสะอาด, อุดรธานี, 41240",
    "ตำบลบุ่งแก้ว, อำเภอโนนสะอาด, อุดรธานี, 41240",
    "ตำบลหนองกุงศรี, อำเภอโนนสะอาด, อุดรธานี, 41240",
    "ตำบลเชียงเพ็ง, อำเภอกุดจับ, อุดรธานี, 41250",
    "ตำบลเมืองเพีย, อำเภอกุดจับ, อุดรธานี, 41250",
    "ตำบลกุดจับ, อำเภอกุดจับ, อุดรธานี, 41250",
    "ตำบลขอนยูง, อำเภอกุดจับ, อุดรธานี, 41250",
    "ตำบลตาลเลียน, อำเภอกุดจับ, อุดรธานี, 41250",
    "ตำบลปะโค, อำเภอกุดจับ, อุดรธานี, 41250",
    "ตำบลสร้างก่อ, อำเภอกุดจับ, อุดรธานี, 41250",
    "ตำบลเชียงดา, อำเภอสร้างคอม, อุดรธานี, 41260",
    "ตำบลนาสะอาด, อำเภอสร้างคอม, อุดรธานี, 41260",
    "ตำบลบ้านโคก, อำเภอสร้างคอม, อุดรธานี, 41260",
    "ตำบลบ้านยวด, อำเภอสร้างคอม, อุดรธานี, 41260",
    "ตำบลบ้านหินโงม, อำเภอสร้างคอม, อุดรธานี, 41260",
    "ตำบลสร้างคอม, อำเภอสร้างคอม, อุดรธานี, 41260",
    "ตำบลคำโคกสูง, อำเภอวังสามหมอ, อุดรธานี, 41280",
    "ตำบลบะยาว, อำเภอวังสามหมอ, อุดรธานี, 41280",
    "ตำบลผาสุก, อำเภอวังสามหมอ, อุดรธานี, 41280",
    "ตำบลวังสามหมอ, อำเภอวังสามหมอ, อุดรธานี, 41280",
    "ตำบลหนองกุงทับม้า, อำเภอวังสามหมอ, อุดรธานี, 41280",
    "ตำบลหนองหญ้าไซ, อำเภอวังสามหมอ, อุดรธานี, 41280",
    "ตำบลโพนสูง, อำเภอไชยวาน, อุดรธานี, 41290",
    "ตำบลไชยวาน, อำเภอไชยวาน, อุดรธานี, 41290",
    "ตำบลคำเลาะ, อำเภอไชยวาน, อุดรธานี, 41290",
    "ตำบลหนองหลัก, อำเภอไชยวาน, อุดรธานี, 41290",
    "ตำบลทุ่งใหญ่, อำเภอทุ่งฝน, อุดรธานี, 41310",
    "ตำบลทุ่งฝน, อำเภอทุ่งฝน, อุดรธานี, 41310",
    "ตำบลนาชุมแสง, อำเภอทุ่งฝน, อุดรธานี, 41310",
    "ตำบลนาทม, อำเภอทุ่งฝน, อุดรธานี, 41310",
    "ตำบลบ้านเชียง, อำเภอหนองหาน, อุดรธานี, 41320",
    "ตำบลบ้านยา, อำเภอหนองหาน, อุดรธานี, 41320",
    "ตำบลหนองสระปลา, อำเภอหนองหาน, อุดรธานี, 41320",
    "ตำบลโนนสูง, อำเภอเมืองอุดรธานี, อุดรธานี, 41330",
    "ตำบลหนองไผ่, อำเภอเมืองอุดรธานี, อุดรธานี, 41330",
    "ตำบลแสงสว่าง, อำเภอหนองแสง, อุดรธานี, 41340",
    "ตำบลทับกุง, อำเภอหนองแสง, อุดรธานี, 41340",
    "ตำบลนาดี, อำเภอหนองแสง, อุดรธานี, 41340",
    "ตำบลหนองแสง, อำเภอหนองแสง, อุดรธานี, 41340",
    "ตำบลน้ำพ่น, อำเภอหนองวัวซอ, อุดรธานี, 41360",
    "ตำบลหนองบัวบาน, อำเภอหนองวัวซอ, อุดรธานี, 41360",
    "ตำบลหนองวัวซอ, อำเภอหนองวัวซอ, อุดรธานี, 41360",
    "ตำบลหมากหญ้า, อำเภอหนองวัวซอ, อุดรธานี, 41360",
    "ตำบลเสอเพลอ, อำเภอกุมภวาปี, อุดรธานี, 41370",
    "ตำบลปะโค, อำเภอกุมภวาปี, อุดรธานี, 41370",
    "ตำบลผาสุก, อำเภอกุมภวาปี, อุดรธานี, 41370",
    "ตำบลพันดอน, อำเภอกุมภวาปี, อุดรธานี, 41370",
    "ตำบลโนนทอง, อำเภอนายูง, อุดรธานี, 41380",
    "ตำบลนาแค, อำเภอนายูง, อุดรธานี, 41380",
    "ตำบลนายูง, อำเภอนายูง, อุดรธานี, 41380",
    "ตำบลบ้านก้อง, อำเภอนายูง, อุดรธานี, 41380",
    "ตำบลเมือง, อำเภอเมืองเลย, เลย, 42000",
    "ตำบลเสี้ยว, อำเภอเมืองเลย, เลย, 42000",
    "ตำบลกกดู่, อำเภอเมืองเลย, เลย, 42000",
    "ตำบลกกทอง, อำเภอเมืองเลย, เลย, 42000",
    "ตำบลกุดป่อง, อำเภอเมืองเลย, เลย, 42000",
    "ตำบลชัยพฤกษ์, อำเภอเมืองเลย, เลย, 42000",
    "ตำบลนาแขม, อำเภอเมืองเลย, เลย, 42000",
    "ตำบลนาโป่ง, อำเภอเมืองเลย, เลย, 42000",
    "ตำบลนาดินดำ, อำเภอเมืองเลย, เลย, 42000",
    "ตำบลนาอาน, อำเภอเมืองเลย, เลย, 42000",
    "ตำบลน้ำสวย, อำเภอเมืองเลย, เลย, 42000",
    "ตำบลน้ำหมาน, อำเภอเมืองเลย, เลย, 42000",
    "ตำบลนาอ้อ, อำเภอเมืองเลย, เลย, 42100",
    "ตำบลศรีสองรัก, อำเภอเมืองเลย, เลย, 42100",
    "ตำบลเขาแก้ว, อำเภอเชียงคาน, เลย, 42110",
    "ตำบลเชียงคาน, อำเภอเชียงคาน, เลย, 42110",
    "ตำบลจอมศรี, อำเภอเชียงคาน, เลย, 42110",
    "ตำบลธาตุ, อำเภอเชียงคาน, เลย, 42110",
    "ตำบลนาซ่าว, อำเภอเชียงคาน, เลย, 42110",
    "ตำบลบุฮม, อำเภอเชียงคาน, เลย, 42110",
    "ตำบลปากตม, อำเภอเชียงคาน, เลย, 42110",
    "ตำบลหาดทรายขาว, อำเภอเชียงคาน, เลย, 42110",
    "ตำบลโคกงาม, อำเภอด่านซ้าย, เลย, 42120",
    "ตำบลโป่ง, อำเภอด่านซ้าย, เลย, 42120",
    "ตำบลโพนสูง, อำเภอด่านซ้าย, เลย, 42120",
    "ตำบลกกสะทอน, อำเภอด่านซ้าย, เลย, 42120",
    "ตำบลด่านซ้าย, อำเภอด่านซ้าย, เลย, 42120",
    "ตำบลนาดี, อำเภอด่านซ้าย, เลย, 42120",
    "ตำบลนาหอ, อำเภอด่านซ้าย, เลย, 42120",
    "ตำบลปากหมัน, อำเภอด่านซ้าย, เลย, 42120",
    "ตำบลวังยาว, อำเภอด่านซ้าย, เลย, 42120",
    "ตำบลอิปุ่ม, อำเภอด่านซ้าย, เลย, 42120",
    "ตำบลเขาหลวง, อำเภอวังสะพุง, เลย, 42130",
    "ตำบลโคกขมิ้น, อำเภอวังสะพุง, เลย, 42130",
    "ตำบลทรายขาว, อำเภอวังสะพุง, เลย, 42130",
    "ตำบลปากปวน, อำเภอวังสะพุง, เลย, 42130",
    "ตำบลผาน้อย, อำเภอวังสะพุง, เลย, 42130",
    "ตำบลผาบิ้ง, อำเภอวังสะพุง, เลย, 42130",
    "ตำบลวังสะพุง, อำเภอวังสะพุง, เลย, 42130",
    "ตำบลศรีสงคราม, อำเภอวังสะพุง, เลย, 42130",
    "ตำบลหนองงิ้ว, อำเภอวังสะพุง, เลย, 42130",
    "ตำบลหนองหญ้าปล้อง, อำเภอวังสะพุง, เลย, 42130",
    "ตำบลโคกใหญ่, อำเภอท่าลี่, เลย, 42140",
    "ตำบลท่าลี่, อำเภอท่าลี่, เลย, 42140",
    "ตำบลน้ำแคม, อำเภอท่าลี่, เลย, 42140",
    "ตำบลน้ำทูน, อำเภอท่าลี่, เลย, 42140",
    "ตำบลหนองผือ, อำเภอท่าลี่, เลย, 42140",
    "ตำบลอาฮี, อำเภอท่าลี่, เลย, 42140",
    "ตำบลเชียงกลม, อำเภอปากชม, เลย, 42150",
    "ตำบลชมเจริญ, อำเภอปากชม, เลย, 42150",
    "ตำบลปากชม, อำเภอปากชม, เลย, 42150",
    "ตำบลห้วยบ่อซืน, อำเภอปากชม, เลย, 42150",
    "ตำบลห้วยพิชัย, อำเภอปากชม, เลย, 42150",
    "ตำบลหาดคัมภีร์, อำเภอปากชม, เลย, 42150",
    "ตำบลท่าศาลา, อำเภอภูเรือ, เลย, 42160",
    "ตำบลปลาบ่า, อำเภอภูเรือ, เลย, 42160",
    "ตำบลร่องจิก, อำเภอภูเรือ, เลย, 42160",
    "ตำบลลาดค่าง, อำเภอภูเรือ, เลย, 42160",
    "ตำบลสานตม, อำเภอภูเรือ, เลย, 42160",
    "ตำบลหนองบัว, อำเภอภูเรือ, เลย, 42160",
    "ตำบลเหล่ากอหก, อำเภอนาแห้ว, เลย, 42170",
    "ตำบลแสงภา, อำเภอนาแห้ว, เลย, 42170",
    "ตำบลนาแห้ว, อำเภอนาแห้ว, เลย, 42170",
    "ตำบลนาพึง, อำเภอนาแห้ว, เลย, 42170",
    "ตำบลนามาลา, อำเภอนาแห้ว, เลย, 42170",
    "ตำบลผานกเค้า, อำเภอภูกระดึง, เลย, 42180",
    "ตำบลภูกระดึง, อำเภอภูกระดึง, เลย, 42180",
    "ตำบลศรีฐาน, อำเภอภูกระดึง, เลย, 42180",
    "ตำบลห้วยส้ม, อำเภอภูกระดึง, เลย, 42180",
    "ตำบลตาดข่า, อำเภอหนองหิน, เลย, 42190",
    "ตำบลปวนพุ, อำเภอหนองหิน, เลย, 42190",
    "ตำบลหนองหิน, อำเภอหนองหิน, เลย, 42190",
    "ตำบลท่าสวรรค์, อำเภอนาด้วง, เลย, 42210",
    "ตำบลท่าสะอาด, อำเภอนาด้วง, เลย, 42210",
    "ตำบลนาด้วง, อำเภอนาด้วง, เลย, 42210",
    "ตำบลนาดอกคำ, อำเภอนาด้วง, เลย, 42210",
    "ตำบลเอราวัณ, อำเภอเอราวัณ, เลย, 42220",
    "ตำบลทรัพย์ไพวัลย์, อำเภอเอราวัณ, เลย, 42220",
    "ตำบลผาสามยอด, อำเภอเอราวัณ, เลย, 42220",
    "ตำบลผาอินทร์แปลง, อำเภอเอราวัณ, เลย, 42220",
    "ตำบลเลยวังไสย์, อำเภอภูหลวง, เลย, 42230",
    "ตำบลแก่งศรีภูมิ, อำเภอภูหลวง, เลย, 42230",
    "ตำบลภูหอ, อำเภอภูหลวง, เลย, 42230",
    "ตำบลหนองคัน, อำเภอภูหลวง, เลย, 42230",
    "ตำบลห้วยสีเสียด, อำเภอภูหลวง, เลย, 42230",
    "ตำบลโนนปอแดง, อำเภอผาขาว, เลย, 42240",
    "ตำบลโนนป่าซาง, อำเภอผาขาว, เลย, 42240",
    "ตำบลท่าช้างคล้อง, อำเภอผาขาว, เลย, 42240",
    "ตำบลบ้านเพิ่ม, อำเภอผาขาว, เลย, 42240",
    "ตำบลผาขาว, อำเภอผาขาว, เลย, 42240",
    "ตำบลเมืองหมี, อำเภอเมืองหนองคาย, หนองคาย, 43000",
    "ตำบลเวียงคุก, อำเภอเมืองหนองคาย, หนองคาย, 43000",
    "ตำบลโพธิ์ชัย, อำเภอเมืองหนองคาย, หนองคาย, 43000",
    "ตำบลในเมือง, อำเภอเมืองหนองคาย, หนองคาย, 43000",
    "ตำบลกวนวัน, อำเภอเมืองหนองคาย, หนองคาย, 43000",
    "ตำบลบ้านเดื่อ, อำเภอเมืองหนองคาย, หนองคาย, 43000",
    "ตำบลปะโค, อำเภอเมืองหนองคาย, หนองคาย, 43000",
    "ตำบลมีชัย, อำเภอเมืองหนองคาย, หนองคาย, 43000",
    "ตำบลวัดธาตุ, อำเภอเมืองหนองคาย, หนองคาย, 43000",
    "ตำบลสีกาย, อำเภอเมืองหนองคาย, หนองคาย, 43000",
    "ตำบลหนองกอมเกาะ, อำเภอเมืองหนองคาย, หนองคาย, 43000",
    "ตำบลหาดคำ, อำเภอเมืองหนองคาย, หนองคาย, 43000",
    "ตำบลหินโงม, อำเภอเมืองหนองคาย, หนองคาย, 43000",
    "ตำบลโพนสว่าง, อำเภอเมืองหนองคาย, หนองคาย, 43100",
    "ตำบลค่ายบกหวาน, อำเภอเมืองหนองคาย, หนองคาย, 43100",
    "ตำบลพระธาตุบังพวน, อำเภอเมืองหนองคาย, หนองคาย, 43100",
    "ตำบลคอกช้าง, อำเภอสระใคร, หนองคาย, 43100",
    "ตำบลบ้านฝาง, อำเภอสระใคร, หนองคาย, 43100",
    "ตำบลสระใคร, อำเภอสระใคร, หนองคาย, 43100",
    "ตำบลโคกคอน, อำเภอท่าบ่อ, หนองคาย, 43110",
    "ตำบลโพนสา, อำเภอท่าบ่อ, หนองคาย, 43110",
    "ตำบลกองนาง, อำเภอท่าบ่อ, หนองคาย, 43110",
    "ตำบลท่าบ่อ, อำเภอท่าบ่อ, หนองคาย, 43110",
    "ตำบลนาข่า, อำเภอท่าบ่อ, หนองคาย, 43110",
    "ตำบลน้ำโมง, อำเภอท่าบ่อ, หนองคาย, 43110",
    "ตำบลบ้านเดื่อ, อำเภอท่าบ่อ, หนองคาย, 43110",
    "ตำบลบ้านถ่อน, อำเภอท่าบ่อ, หนองคาย, 43110",
    "ตำบลบ้านว่าน, อำเภอท่าบ่อ, หนองคาย, 43110",
    "ตำบลหนองนาง, อำเภอท่าบ่อ, หนองคาย, 43110",
    "ตำบลเฝ้าไร่, อำเภอเฝ้าไร่, หนองคาย, 43120",
    "ตำบลนาดี, อำเภอเฝ้าไร่, หนองคาย, 43120",
    "ตำบลวังหลวง, อำเภอเฝ้าไร่, หนองคาย, 43120",
    "ตำบลหนองหลวง, อำเภอเฝ้าไร่, หนองคาย, 43120",
    "ตำบลอุดมพร, อำเภอเฝ้าไร่, หนองคาย, 43120",
    "ตำบลเซิม, อำเภอโพนพิสัย, หนองคาย, 43120",
    "ตำบลเหล่าต่างคำ, อำเภอโพนพิสัย, หนองคาย, 43120",
    "ตำบลกุดบง, อำเภอโพนพิสัย, หนองคาย, 43120",
    "ตำบลจุมพล, อำเภอโพนพิสัย, หนองคาย, 43120",
    "ตำบลชุมช้าง, อำเภอโพนพิสัย, หนองคาย, 43120",
    "ตำบลทุ่งหลวง, อำเภอโพนพิสัย, หนองคาย, 43120",
    "ตำบลนาหนัง, อำเภอโพนพิสัย, หนองคาย, 43120",
    "ตำบลบ้านโพธิ์, อำเภอโพนพิสัย, หนองคาย, 43120",
    "ตำบลบ้านผือ, อำเภอโพนพิสัย, หนองคาย, 43120",
    "ตำบลวัดหลวง, อำเภอโพนพิสัย, หนองคาย, 43120",
    "ตำบลสร้างนางขาว, อำเภอโพนพิสัย, หนองคาย, 43120",
    "ตำบลโพนแพง, อำเภอรัตนวาปี, หนองคาย, 43120",
    "ตำบลนาทับไฮ, อำเภอรัตนวาปี, หนองคาย, 43120",
    "ตำบลบ้านต้อน, อำเภอรัตนวาปี, หนองคาย, 43120",
    "ตำบลพระบาทนาสิงห์, อำเภอรัตนวาปี, หนองคาย, 43120",
    "ตำบลรัตนวาปี, อำเภอรัตนวาปี, หนองคาย, 43120",
    "ตำบลโพธิ์ตาก, อำเภอโพธิ์ตาก, หนองคาย, 43130",
    "ตำบลโพนทอง, อำเภอโพธิ์ตาก, หนองคาย, 43130",
    "ตำบลด่านศรีสุข, อำเภอโพธิ์ตาก, หนองคาย, 43130",
    "ตำบลบ้านหม้อ, อำเภอศรีเชียงใหม่, หนองคาย, 43130",
    "ตำบลพระพุทธบาท, อำเภอศรีเชียงใหม่, หนองคาย, 43130",
    "ตำบลพานพร้าว, อำเภอศรีเชียงใหม่, หนองคาย, 43130",
    "ตำบลหนองปลาปาก, อำเภอศรีเชียงใหม่, หนองคาย, 43130",
    "ตำบลแก้งไก่, อำเภอสังคม, หนองคาย, 43160",
    "ตำบลนางิ้ว, อำเภอสังคม, หนองคาย, 43160",
    "ตำบลบ้านม่วง, อำเภอสังคม, หนองคาย, 43160",
    "ตำบลผาตั้ง, อำเภอสังคม, หนองคาย, 43160",
    "ตำบลสังคม, อำเภอสังคม, หนองคาย, 43160",
    "ตำบลเกิ้ง, อำเภอเมืองมหาสารคาม, มหาสารคาม, 44000",
    "ตำบลเขวา, อำเภอเมืองมหาสารคาม, มหาสารคาม, 44000",
    "ตำบลแก่งเลิงจาน, อำเภอเมืองมหาสารคาม, มหาสารคาม, 44000",
    "ตำบลแวงน่าง, อำเภอเมืองมหาสารคาม, มหาสารคาม, 44000",
    "ตำบลโคกก่อ, อำเภอเมืองมหาสารคาม, มหาสารคาม, 44000",
    "ตำบลดอนหว่าน, อำเภอเมืองมหาสารคาม, มหาสารคาม, 44000",
    "ตำบลตลาด, อำเภอเมืองมหาสารคาม, มหาสารคาม, 44000",
    "ตำบลท่าตูม, อำเภอเมืองมหาสารคาม, มหาสารคาม, 44000",
    "ตำบลท่าสองคอน, อำเภอเมืองมหาสารคาม, มหาสารคาม, 44000",
    "ตำบลบัวค้อ, อำเภอเมืองมหาสารคาม, มหาสารคาม, 44000",
    "ตำบลลาดพัฒนา, อำเภอเมืองมหาสารคาม, มหาสารคาม, 44000",
    "ตำบลหนองโน, อำเภอเมืองมหาสารคาม, มหาสารคาม, 44000",
    "ตำบลหนองปลิง, อำเภอเมืองมหาสารคาม, มหาสารคาม, 44000",
    "ตำบลห้วยแอ่ง, อำเภอเมืองมหาสารคาม, มหาสารคาม, 44000",
    "ตำบลเม็กดำ, อำเภอพยัคฆภูมิพิสัย, มหาสารคาม, 44110",
    "ตำบลเมืองเตา, อำเภอพยัคฆภูมิพิสัย, มหาสารคาม, 44110",
    "ตำบลเมืองเสือ, อำเภอพยัคฆภูมิพิสัย, มหาสารคาม, 44110",
    "ตำบลเวียงชัย, อำเภอพยัคฆภูมิพิสัย, มหาสารคาม, 44110",
    "ตำบลเวียงสะอาด, อำเภอพยัคฆภูมิพิสัย, มหาสารคาม, 44110",
    "ตำบลก้ามปู, อำเภอพยัคฆภูมิพิสัย, มหาสารคาม, 44110",
    "ตำบลนาสีนวล, อำเภอพยัคฆภูมิพิสัย, มหาสารคาม, 44110",
    "ตำบลปะหลาน, อำเภอพยัคฆภูมิพิสัย, มหาสารคาม, 44110",
    "ตำบลภารแอ่น, อำเภอพยัคฆภูมิพิสัย, มหาสารคาม, 44110",
    "ตำบลราษฎร์เจริญ, อำเภอพยัคฆภูมิพิสัย, มหาสารคาม, 44110",
    "ตำบลราษฎร์พัฒนา, อำเภอพยัคฆภูมิพิสัย, มหาสารคาม, 44110",
    "ตำบลลานสะแก, อำเภอพยัคฆภูมิพิสัย, มหาสารคาม, 44110",
    "ตำบลหนองบัว, อำเภอพยัคฆภูมิพิสัย, มหาสารคาม, 44110",
    "ตำบลหนองบัวแก้ว, อำเภอพยัคฆภูมิพิสัย, มหาสารคาม, 44110",
    "ตำบลเสือโก้ก, อำเภอวาปีปทุม, มหาสารคาม, 44120",
    "ตำบลแคน, อำเภอวาปีปทุม, มหาสารคาม, 44120",
    "ตำบลโคกสีทองหลาง, อำเภอวาปีปทุม, มหาสารคาม, 44120",
    "ตำบลโพธิ์ชัย, อำเภอวาปีปทุม, มหาสารคาม, 44120",
    "ตำบลขามป้อม, อำเภอวาปีปทุม, มหาสารคาม, 44120",
    "ตำบลงัวบา, อำเภอวาปีปทุม, มหาสารคาม, 44120",
    "ตำบลดงใหญ่, อำเภอวาปีปทุม, มหาสารคาม, 44120",
    "ตำบลนาข่า, อำเภอวาปีปทุม, มหาสารคาม, 44120",
    "ตำบลบ้านหวาย, อำเภอวาปีปทุม, มหาสารคาม, 44120",
    "ตำบลประชาพัฒนา, อำเภอวาปีปทุม, มหาสารคาม, 44120",
    "ตำบลหนองแสง, อำเภอวาปีปทุม, มหาสารคาม, 44120",
    "ตำบลหนองแสน, อำเภอวาปีปทุม, มหาสารคาม, 44120",
    "ตำบลหนองไฮ, อำเภอวาปีปทุม, มหาสารคาม, 44120",
    "ตำบลหนองทุ่ม, อำเภอวาปีปทุม, มหาสารคาม, 44120",
    "ตำบลหัวเรือ, อำเภอวาปีปทุม, มหาสารคาม, 44120",
    "ตำบลเลิงแฝก, อำเภอกุดรัง, มหาสารคาม, 44130",
    "ตำบลกุดรัง, อำเภอกุดรัง, มหาสารคาม, 44130",
    "ตำบลนาโพธิ์, อำเภอกุดรัง, มหาสารคาม, 44130",
    "ตำบลหนองแวง, อำเภอกุดรัง, มหาสารคาม, 44130",
    "ตำบลห้วยเตย, อำเภอกุดรัง, มหาสารคาม, 44130",
    "ตำบลโนนแดง, อำเภอบรบือ, มหาสารคาม, 44130",
    "ตำบลโนนราษี, อำเภอบรบือ, มหาสารคาม, 44130",
    "ตำบลกำพี้, อำเภอบรบือ, มหาสารคาม, 44130",
    "ตำบลดอนงัว, อำเภอบรบือ, มหาสารคาม, 44130",
    "ตำบลบรบือ, อำเภอบรบือ, มหาสารคาม, 44130",
    "ตำบลบ่อใหญ่, อำเภอบรบือ, มหาสารคาม, 44130",
    "ตำบลบัวมาศ, อำเภอบรบือ, มหาสารคาม, 44130",
    "ตำบลยาง, อำเภอบรบือ, มหาสารคาม, 44130",
    "ตำบลวังใหม่, อำเภอบรบือ, มหาสารคาม, 44130",
    "ตำบลวังไชย, อำเภอบรบือ, มหาสารคาม, 44130",
    "ตำบลหนองโก, อำเภอบรบือ, มหาสารคาม, 44130",
    "ตำบลหนองคูขาด, อำเภอบรบือ, มหาสารคาม, 44130",
    "ตำบลหนองจิก, อำเภอบรบือ, มหาสารคาม, 44130",
    "ตำบลหนองม่วง, อำเภอบรบือ, มหาสารคาม, 44130",
    "ตำบลหนองสิม, อำเภอบรบือ, มหาสารคาม, 44130",
    "ตำบลเขวาไร่, อำเภอโกสุมพิสัย, มหาสารคาม, 44140",
    "ตำบลเขื่อน, อำเภอโกสุมพิสัย, มหาสารคาม, 44140",
    "ตำบลเลิงใต้, อำเภอโกสุมพิสัย, มหาสารคาม, 44140",
    "ตำบลเหล่า, อำเภอโกสุมพิสัย, มหาสารคาม, 44140",
    "ตำบลแก้งแก, อำเภอโกสุมพิสัย, มหาสารคาม, 44140",
    "ตำบลแพง, อำเภอโกสุมพิสัย, มหาสารคาม, 44140",
    "ตำบลแห่ใต้, อำเภอโกสุมพิสัย, มหาสารคาม, 44140",
    "ตำบลโพนงาม, อำเภอโกสุมพิสัย, มหาสารคาม, 44140",
    "ตำบลดอนกลาง, อำเภอโกสุมพิสัย, มหาสารคาม, 44140",
    "ตำบลยางท่าแจ้ง, อำเภอโกสุมพิสัย, มหาสารคาม, 44140",
    "ตำบลยางน้อย, อำเภอโกสุมพิสัย, มหาสารคาม, 44140",
    "ตำบลวังยาว, อำเภอโกสุมพิสัย, มหาสารคาม, 44140",
    "ตำบลหนองเหล็ก, อำเภอโกสุมพิสัย, มหาสารคาม, 44140",
    "ตำบลหนองกุงสวรรค์, อำเภอโกสุมพิสัย, มหาสารคาม, 44140",
    "ตำบลหนองบอน, อำเภอโกสุมพิสัย, มหาสารคาม, 44140",
    "ตำบลหนองบัว, อำเภอโกสุมพิสัย, มหาสารคาม, 44140",
    "ตำบลหัวขวาง, อำเภอโกสุมพิสัย, มหาสารคาม, 44140",
    "ตำบลเขวาใหญ่, อำเภอกันทรวิชัย, มหาสารคาม, 44150",
    "ตำบลโคกพระ, อำเภอกันทรวิชัย, มหาสารคาม, 44150",
    "ตำบลกุดใส้จ่อ, อำเภอกันทรวิชัย, มหาสารคาม, 44150",
    "ตำบลขามเฒ่าพัฒนา, อำเภอกันทรวิชัย, มหาสารคาม, 44150",
    "ตำบลขามเรียง, อำเภอกันทรวิชัย, มหาสารคาม, 44150",
    "ตำบลคันธารราษฎร์, อำเภอกันทรวิชัย, มหาสารคาม, 44150",
    "ตำบลท่าขอนยาง, อำเภอกันทรวิชัย, มหาสารคาม, 44150",
    "ตำบลนาสีนวน, อำเภอกันทรวิชัย, มหาสารคาม, 44150",
    "ตำบลมะค่า, อำเภอกันทรวิชัย, มหาสารคาม, 44150",
    "ตำบลศรีสุข, อำเภอกันทรวิชัย, มหาสารคาม, 44150",
    "ตำบลเชียงยืน, อำเภอเชียงยืน, มหาสารคาม, 44160",
    "ตำบลเสือเฒ่า, อำเภอเชียงยืน, มหาสารคาม, 44160",
    "ตำบลเหล่าบัวบาน, อำเภอเชียงยืน, มหาสารคาม, 44160",
    "ตำบลโพนทอง, อำเภอเชียงยืน, มหาสารคาม, 44160",
    "ตำบลกู่ทอง, อำเภอเชียงยืน, มหาสารคาม, 44160",
    "ตำบลดอนเงิน, อำเภอเชียงยืน, มหาสารคาม, 44160",
    "ตำบลนาทอง, อำเภอเชียงยืน, มหาสารคาม, 44160",
    "ตำบลหนองซอน, อำเภอเชียงยืน, มหาสารคาม, 44160",
    "ตำบลเหล่าดอกไม้, อำเภอชื่นชม, มหาสารคาม, 44160",
    "ตำบลกุดปลาดุก, อำเภอชื่นชม, มหาสารคาม, 44160",
    "ตำบลชื่นชม, อำเภอชื่นชม, มหาสารคาม, 44160",
    "ตำบลหนองกุง, อำเภอชื่นชม, มหาสารคาม, 44160",
    "ตำบลเขวาไร่, อำเภอนาเชือก, มหาสารคาม, 44170",
    "ตำบลนาเชือก, อำเภอนาเชือก, มหาสารคาม, 44170",
    "ตำบลปอพาน, อำเภอนาเชือก, มหาสารคาม, 44170",
    "ตำบลสันป่าตอง, อำเภอนาเชือก, มหาสารคาม, 44170",
    "ตำบลสำโรง, อำเภอนาเชือก, มหาสารคาม, 44170",
    "ตำบลหนองเม็ก, อำเภอนาเชือก, มหาสารคาม, 44170",
    "ตำบลหนองเรือ, อำเภอนาเชือก, มหาสารคาม, 44170",
    "ตำบลหนองแดง, อำเภอนาเชือก, มหาสารคาม, 44170",
    "ตำบลหนองโพธิ์, อำเภอนาเชือก, มหาสารคาม, 44170",
    "ตำบลหนองกุง, อำเภอนาเชือก, มหาสารคาม, 44170",
    "ตำบลกู่สันตรัตน์, อำเภอนาดูน, มหาสารคาม, 44180",
    "ตำบลดงดวน, อำเภอนาดูน, มหาสารคาม, 44180",
    "ตำบลดงบัง, อำเภอนาดูน, มหาสารคาม, 44180",
    "ตำบลดงยาง, อำเภอนาดูน, มหาสารคาม, 44180",
    "ตำบลนาดูน, อำเภอนาดูน, มหาสารคาม, 44180",
    "ตำบลพระธาตุ, อำเภอนาดูน, มหาสารคาม, 44180",
    "ตำบลหนองไผ่, อำเภอนาดูน, มหาสารคาม, 44180",
    "ตำบลหนองคู, อำเภอนาดูน, มหาสารคาม, 44180",
    "ตำบลหัวดง, อำเภอนาดูน, มหาสารคาม, 44180",
    "ตำบลแกดำ, อำเภอแกดำ, มหาสารคาม, 44190",
    "ตำบลโนนภิบาล, อำเภอแกดำ, มหาสารคาม, 44190",
    "ตำบลมิตรภาพ, อำเภอแกดำ, มหาสารคาม, 44190",
    "ตำบลวังแสง, อำเภอแกดำ, มหาสารคาม, 44190",
    "ตำบลหนองกุง, อำเภอแกดำ, มหาสารคาม, 44190",
    "ตำบลแวงดง, อำเภอยางสีสุราช, มหาสารคาม, 44210",
    "ตำบลดงเมือง, อำเภอยางสีสุราช, มหาสารคาม, 44210",
    "ตำบลนาภู, อำเภอยางสีสุราช, มหาสารคาม, 44210",
    "ตำบลบ้านกู่, อำเภอยางสีสุราช, มหาสารคาม, 44210",
    "ตำบลยางสีสุราช, อำเภอยางสีสุราช, มหาสารคาม, 44210",
    "ตำบลสร้างแซ่ง, อำเภอยางสีสุราช, มหาสารคาม, 44210",
    "ตำบลหนองบัวสันตุ, อำเภอยางสีสุราช, มหาสารคาม, 44210",
    "ตำบลเชียงขวัญ, อำเภอเชียงขวัญ, ร้อยเอ็ด, 45000",
    "ตำบลบ้านเขือง, อำเภอเชียงขวัญ, ร้อยเอ็ด, 45000",
    "ตำบลพระเจ้า, อำเภอเชียงขวัญ, ร้อยเอ็ด, 45000",
    "ตำบลพระธาตุ, อำเภอเชียงขวัญ, ร้อยเอ็ด, 45000",
    "ตำบลเมืองทอง, อำเภอเมืองร้อยเอ็ด, ร้อยเอ็ด, 45000",
    "ตำบลเหนือเมือง, อำเภอเมืองร้อยเอ็ด, ร้อยเอ็ด, 45000",
    "ตำบลแคนใหญ่, อำเภอเมืองร้อยเอ็ด, ร้อยเอ็ด, 45000",
    "ตำบลโนนตาล, อำเภอเมืองร้อยเอ็ด, ร้อยเอ็ด, 45000",
    "ตำบลโนนรัง, อำเภอเมืองร้อยเอ็ด, ร้อยเอ็ด, 45000",
    "ตำบลในเมือง, อำเภอเมืองร้อยเอ็ด, ร้อยเอ็ด, 45000",
    "ตำบลขอนแก่น, อำเภอเมืองร้อยเอ็ด, ร้อยเอ็ด, 45000",
    "ตำบลดงลาน, อำเภอเมืองร้อยเอ็ด, ร้อยเอ็ด, 45000",
    "ตำบลนาโพธิ์, อำเภอเมืองร้อยเอ็ด, ร้อยเอ็ด, 45000",
    "ตำบลปอภาร  (ปอพาน), อำเภอเมืองร้อยเอ็ด, ร้อยเอ็ด, 45000",
    "ตำบลรอบเมือง, อำเภอเมืองร้อยเอ็ด, ร้อยเอ็ด, 45000",
    "ตำบลสะอาดสมบูรณ์, อำเภอเมืองร้อยเอ็ด, ร้อยเอ็ด, 45000",
    "ตำบลสีแก้ว, อำเภอเมืองร้อยเอ็ด, ร้อยเอ็ด, 45000",
    "ตำบลหนองแก้ว, อำเภอเมืองร้อยเอ็ด, ร้อยเอ็ด, 45000",
    "ตำบลหนองแวง, อำเภอเมืองร้อยเอ็ด, ร้อยเอ็ด, 45000",
    "ตำบลแสนชาติ, อำเภอจังหาร, ร้อยเอ็ด, 45000",
    "ตำบลจังหาร, อำเภอจังหาร, ร้อยเอ็ด, 45000",
    "ตำบลดงสิงห์, อำเภอจังหาร, ร้อยเอ็ด, 45000",
    "ตำบลดินดำ, อำเภอจังหาร, ร้อยเอ็ด, 45000",
    "ตำบลปาฝา, อำเภอจังหาร, ร้อยเอ็ด, 45000",
    "ตำบลผักแว่น, อำเภอจังหาร, ร้อยเอ็ด, 45000",
    "ตำบลม่วงลาด, อำเภอจังหาร, ร้อยเอ็ด, 45000",
    "ตำบลยางใหญ่, อำเภอจังหาร, ร้อยเอ็ด, 45000",
    "ตำบลเมืองเปลือย, อำเภอศรีสมเด็จ, ร้อยเอ็ด, 45000",
    "ตำบลโพธิ์ทอง, อำเภอศรีสมเด็จ, ร้อยเอ็ด, 45000",
    "ตำบลบ้านบาก, อำเภอศรีสมเด็จ, ร้อยเอ็ด, 45000",
    "ตำบลศรีสมเด็จ, อำเภอศรีสมเด็จ, ร้อยเอ็ด, 45000",
    "ตำบลหนองแวงควง, อำเภอศรีสมเด็จ, ร้อยเอ็ด, 45000",
    "ตำบลหนองใหญ่, อำเภอศรีสมเด็จ, ร้อยเอ็ด, 45000",
    "ตำบลแวง, อำเภอโพนทอง, ร้อยเอ็ด, 45110",
    "ตำบลโคกกกม่วง, อำเภอโพนทอง, ร้อยเอ็ด, 45110",
    "ตำบลโคกสูง, อำเภอโพนทอง, ร้อยเอ็ด, 45110",
    "ตำบลโนนชัยศรี, อำเภอโพนทอง, ร้อยเอ็ด, 45110",
    "ตำบลโพธิ์ทอง, อำเภอโพนทอง, ร้อยเอ็ด, 45110",
    "ตำบลโพธิ์ศรีสว่าง, อำเภอโพนทอง, ร้อยเอ็ด, 45110",
    "ตำบลคำนาดี, อำเภอโพนทอง, ร้อยเอ็ด, 45110",
    "ตำบลนาอุดม, อำเภอโพนทอง, ร้อยเอ็ด, 45110",
    "ตำบลพรมสวรรค์, อำเภอโพนทอง, ร้อยเอ็ด, 45110",
    "ตำบลวังสามัคคี, อำเภอโพนทอง, ร้อยเอ็ด, 45110",
    "ตำบลสระนกแก้ว, อำเภอโพนทอง, ร้อยเอ็ด, 45110",
    "ตำบลสว่าง, อำเภอโพนทอง, ร้อยเอ็ด, 45110",
    "ตำบลหนองใหญ่, อำเภอโพนทอง, ร้อยเอ็ด, 45110",
    "ตำบลอุ่มเม่า, อำเภอโพนทอง, ร้อยเอ็ด, 45110",
    "ตำบลเกาะแก้ว, อำเภอเสลภูมิ, ร้อยเอ็ด, 45120",
    "ตำบลเมืองไพร, อำเภอเสลภูมิ, ร้อยเอ็ด, 45120",
    "ตำบลเหล่าน้อย, อำเภอเสลภูมิ, ร้อยเอ็ด, 45120",
    "ตำบลโพธิ์ทอง, อำเภอเสลภูมิ, ร้อยเอ็ด, 45120",
    "ตำบลกลาง, อำเภอเสลภูมิ, ร้อยเอ็ด, 45120",
    "ตำบลขวัญเมือง, อำเภอเสลภูมิ, ร้อยเอ็ด, 45120",
    "ตำบลขวาว, อำเภอเสลภูมิ, ร้อยเอ็ด, 45120",
    "ตำบลท่าม่วง, อำเภอเสลภูมิ, ร้อยเอ็ด, 45120",
    "ตำบลนาเมือง, อำเภอเสลภูมิ, ร้อยเอ็ด, 45120",
    "ตำบลนาเลิง, อำเภอเสลภูมิ, ร้อยเอ็ด, 45120",
    "ตำบลนาแซง, อำเภอเสลภูมิ, ร้อยเอ็ด, 45120",
    "ตำบลนางาม, อำเภอเสลภูมิ, ร้อยเอ็ด, 45120",
    "ตำบลบึงเกลือ, อำเภอเสลภูมิ, ร้อยเอ็ด, 45120",
    "ตำบลพรสวรรค์, อำเภอเสลภูมิ, ร้อยเอ็ด, 45120",
    "ตำบลภูเงิน, อำเภอเสลภูมิ, ร้อยเอ็ด, 45120",
    "ตำบลวังหลวง, อำเภอเสลภูมิ, ร้อยเอ็ด, 45120",
    "ตำบลศรีวิลัย, อำเภอเสลภูมิ, ร้อยเอ็ด, 45120",
    "ตำบลหนองหลวง, อำเภอเสลภูมิ, ร้อยเอ็ด, 45120",
    "ตำบลเมืองทุ่ง, อำเภอสุวรรณภูมิ, ร้อยเอ็ด, 45130",
    "ตำบลจำปาขัน, อำเภอสุวรรณภูมิ, ร้อยเอ็ด, 45130",
    "ตำบลช้างเผือก, อำเภอสุวรรณภูมิ, ร้อยเอ็ด, 45130",
    "ตำบลดอกไม้, อำเภอสุวรรณภูมิ, ร้อยเอ็ด, 45130",
    "ตำบลทุ่งกุลา, อำเภอสุวรรณภูมิ, ร้อยเอ็ด, 45130",
    "ตำบลทุ่งศรีเมือง, อำเภอสุวรรณภูมิ, ร้อยเอ็ด, 45130",
    "ตำบลทุ่งหลวง, อำเภอสุวรรณภูมิ, ร้อยเอ็ด, 45130",
    "ตำบลนาใหญ่, อำเภอสุวรรณภูมิ, ร้อยเอ็ด, 45130",
    "ตำบลน้ำคำ, อำเภอสุวรรณภูมิ, ร้อยเอ็ด, 45130",
    "ตำบลบ่อพันขัน, อำเภอสุวรรณภูมิ, ร้อยเอ็ด, 45130",
    "ตำบลสระคู, อำเภอสุวรรณภูมิ, ร้อยเอ็ด, 45130",
    "ตำบลห้วยหินลาด, อำเภอสุวรรณภูมิ, ร้อยเอ็ด, 45130",
    "ตำบลหัวโทน, อำเภอสุวรรณภูมิ, ร้อยเอ็ด, 45130",
    "ตำบลหัวช้าง, อำเภอสุวรรณภูมิ, ร้อยเอ็ด, 45130",
    "ตำบลหินกอง, อำเภอสุวรรณภูมิ, ร้อยเอ็ด, 45130",
    "ตำบลแสนสุข, อำเภอพนมไพร, ร้อยเอ็ด, 45140",
    "ตำบลโคกสว่าง, อำเภอพนมไพร, ร้อยเอ็ด, 45140",
    "ตำบลโพธิ์ใหญ่, อำเภอพนมไพร, ร้อยเอ็ด, 45140",
    "ตำบลโพธิ์ชัย, อำเภอพนมไพร, ร้อยเอ็ด, 45140",
    "ตำบลกุดน้ำใส, อำเภอพนมไพร, ร้อยเอ็ด, 45140",
    "ตำบลค้อใหญ่, อำเภอพนมไพร, ร้อยเอ็ด, 45140",
    "ตำบลคำไฮ, อำเภอพนมไพร, ร้อยเอ็ด, 45140",
    "ตำบลชานุวรรณ, อำเภอพนมไพร, ร้อยเอ็ด, 45140",
    "ตำบลนานวล, อำเภอพนมไพร, ร้อยเอ็ด, 45140",
    "ตำบลพนมไพร, อำเภอพนมไพร, ร้อยเอ็ด, 45140",
    "ตำบลวารีสวัสดิ์, อำเภอพนมไพร, ร้อยเอ็ด, 45140",
    "ตำบลสระแก้ว, อำเภอพนมไพร, ร้อยเอ็ด, 45140",
    "ตำบลหนองทัพไทย, อำเภอพนมไพร, ร้อยเอ็ด, 45140",
    "ตำบลเด่นราษฎร์, อำเภอหนองฮี, ร้อยเอ็ด, 45140",
    "ตำบลดูกอึ่ง, อำเภอหนองฮี, ร้อยเอ็ด, 45140",
    "ตำบลสาวแห, อำเภอหนองฮี, ร้อยเอ็ด, 45140",
    "ตำบลหนองฮี, อำเภอหนองฮี, ร้อยเอ็ด, 45140",
    "ตำบลเกษตรวิสัย, อำเภอเกษตรวิสัย, ร้อยเอ็ด, 45150",
    "ตำบลเมืองบัว, อำเภอเกษตรวิสัย, ร้อยเอ็ด, 45150",
    "ตำบลเหล่าหลวง, อำเภอเกษตรวิสัย, ร้อยเอ็ด, 45150",
    "ตำบลโนนสว่าง, อำเภอเกษตรวิสัย, ร้อยเอ็ด, 45150",
    "ตำบลกำแพง, อำเภอเกษตรวิสัย, ร้อยเอ็ด, 45150",
    "ตำบลกู่กาสิงห์, อำเภอเกษตรวิสัย, ร้อยเอ็ด, 45150",
    "ตำบลดงครั่งใหญ่, อำเภอเกษตรวิสัย, ร้อยเอ็ด, 45150",
    "ตำบลดงครั่งน้อย, อำเภอเกษตรวิสัย, ร้อยเอ็ด, 45150",
    "ตำบลทุ่งทอง, อำเภอเกษตรวิสัย, ร้อยเอ็ด, 45150",
    "ตำบลน้ำอ้อม, อำเภอเกษตรวิสัย, ร้อยเอ็ด, 45150",
    "ตำบลบ้านฝาง, อำเภอเกษตรวิสัย, ร้อยเอ็ด, 45150",
    "ตำบลสิงห์โคก, อำเภอเกษตรวิสัย, ร้อยเอ็ด, 45150",
    "ตำบลหนองแวง, อำเภอเกษตรวิสัย, ร้อยเอ็ด, 45150",
    "ตำบลโพนเมือง, อำเภออาจสามารถ, ร้อยเอ็ด, 45160",
    "ตำบลโหรา, อำเภออาจสามารถ, ร้อยเอ็ด, 45160",
    "ตำบลขี้เหล็ก, อำเภออาจสามารถ, ร้อยเอ็ด, 45160",
    "ตำบลบ้านแจ้ง, อำเภออาจสามารถ, ร้อยเอ็ด, 45160",
    "ตำบลบ้านดู่, อำเภออาจสามารถ, ร้อยเอ็ด, 45160",
    "ตำบลหนองขาม, อำเภออาจสามารถ, ร้อยเอ็ด, 45160",
    "ตำบลหนองบัว, อำเภออาจสามารถ, ร้อยเอ็ด, 45160",
    "ตำบลหนองหมื่นถ่าน, อำเภออาจสามารถ, ร้อยเอ็ด, 45160",
    "ตำบลหน่อม, อำเภออาจสามารถ, ร้อยเอ็ด, 45160",
    "ตำบลอาจสามารถ, อำเภออาจสามารถ, ร้อยเอ็ด, 45160",
    "ตำบลพลับพลา, อำเภอเชียงขวัญ, ร้อยเอ็ด, 45170",
    "ตำบลหมูม้น, อำเภอเชียงขวัญ, ร้อยเอ็ด, 45170",
    "ตำบลเทอดไทย, อำเภอทุ่งเขาหลวง, ร้อยเอ็ด, 45170",
    "ตำบลเหล่า, อำเภอทุ่งเขาหลวง, ร้อยเอ็ด, 45170",
    "ตำบลทุ่งเขาหลวง, อำเภอทุ่งเขาหลวง, ร้อยเอ็ด, 45170",
    "ตำบลบึงงาม, อำเภอทุ่งเขาหลวง, ร้อยเอ็ด, 45170",
    "ตำบลมะบ้า, อำเภอทุ่งเขาหลวง, ร้อยเอ็ด, 45170",
    "ตำบลเขวาทุ่ง, อำเภอธวัชบุรี, ร้อยเอ็ด, 45170",
    "ตำบลเมืองน้อย, อำเภอธวัชบุรี, ร้อยเอ็ด, 45170",
    "ตำบลไพศาล, อำเภอธวัชบุรี, ร้อยเอ็ด, 45170",
    "ตำบลธงธานี, อำเภอธวัชบุรี, ร้อยเอ็ด, 45170",
    "ตำบลธวัชบุรี, อำเภอธวัชบุรี, ร้อยเอ็ด, 45170",
    "ตำบลนิเวศน์, อำเภอธวัชบุรี, ร้อยเอ็ด, 45170",
    "ตำบลบึงนคร, อำเภอธวัชบุรี, ร้อยเอ็ด, 45170",
    "ตำบลมะอึ, อำเภอธวัชบุรี, ร้อยเอ็ด, 45170",
    "ตำบลราชธานี, อำเภอธวัชบุรี, ร้อยเอ็ด, 45170",
    "ตำบลหนองไผ่, อำเภอธวัชบุรี, ร้อยเอ็ด, 45170",
    "ตำบลหนองพอก, อำเภอธวัชบุรี, ร้อยเอ็ด, 45170",
    "ตำบลอุ่มเม้า, อำเภอธวัชบุรี, ร้อยเอ็ด, 45170",
    "ตำบลเมืองหงส์, อำเภอจตุรพักตรพิมาน, ร้อยเอ็ด, 45180",
    "ตำบลโคกล่าม, อำเภอจตุรพักตรพิมาน, ร้อยเอ็ด, 45180",
    "ตำบลดงแดง, อำเภอจตุรพักตรพิมาน, ร้อยเอ็ด, 45180",
    "ตำบลดงกลาง, อำเภอจตุรพักตรพิมาน, ร้อยเอ็ด, 45180",
    "ตำบลดู่น้อย, อำเภอจตุรพักตรพิมาน, ร้อยเอ็ด, 45180",
    "ตำบลน้ำใส, อำเภอจตุรพักตรพิมาน, ร้อยเอ็ด, 45180",
    "ตำบลป่าสังข์, อำเภอจตุรพักตรพิมาน, ร้อยเอ็ด, 45180",
    "ตำบลลิ้นฟ้า, อำเภอจตุรพักตรพิมาน, ร้อยเอ็ด, 45180",
    "ตำบลศรีโคตร, อำเภอจตุรพักตรพิมาน, ร้อยเอ็ด, 45180",
    "ตำบลหนองผือ, อำเภอจตุรพักตรพิมาน, ร้อยเอ็ด, 45180",
    "ตำบลหัวช้าง, อำเภอจตุรพักตรพิมาน, ร้อยเอ็ด, 45180",
    "ตำบลอีง่อง, อำเภอจตุรพักตรพิมาน, ร้อยเอ็ด, 45180",
    "ตำบลโนนสง่า, อำเภอปทุมรัตต์, ร้อยเอ็ด, 45190",
    "ตำบลโนนสวรรค์, อำเภอปทุมรัตต์, ร้อยเอ็ด, 45190",
    "ตำบลโพนสูง, อำเภอปทุมรัตต์, ร้อยเอ็ด, 45190",
    "ตำบลขี้เหล็ก, อำเภอปทุมรัตต์, ร้อยเอ็ด, 45190",
    "ตำบลดอกล้ำ, อำเภอปทุมรัตต์, ร้อยเอ็ด, 45190",
    "ตำบลบัวแดง, อำเภอปทุมรัตต์, ร้อยเอ็ด, 45190",
    "ตำบลสระบัว, อำเภอปทุมรัตต์, ร้อยเอ็ด, 45190",
    "ตำบลหนองแคน, อำเภอปทุมรัตต์, ร้อยเอ็ด, 45190",
    "ตำบลโคกสว่าง, อำเภอหนองพอก, ร้อยเอ็ด, 45210",
    "ตำบลกกโพธิ์, อำเภอหนองพอก, ร้อยเอ็ด, 45210",
    "ตำบลท่าสีดา, อำเภอหนองพอก, ร้อยเอ็ด, 45210",
    "ตำบลบึงงาม, อำเภอหนองพอก, ร้อยเอ็ด, 45210",
    "ตำบลผาน้ำย้อย, อำเภอหนองพอก, ร้อยเอ็ด, 45210",
    "ตำบลภูเขาทอง, อำเภอหนองพอก, ร้อยเอ็ด, 45210",
    "ตำบลรอบเมือง, อำเภอหนองพอก, ร้อยเอ็ด, 45210",
    "ตำบลหนองขุ่นใหญ่, อำเภอหนองพอก, ร้อยเอ็ด, 45210",
    "ตำบลหนองพอก, อำเภอหนองพอก, ร้อยเอ็ด, 45210",
    "ตำบลเมืองสรวง, อำเภอเมืองสรวง, ร้อยเอ็ด, 45220",
    "ตำบลกกกุง, อำเภอเมืองสรวง, ร้อยเอ็ด, 45220",
    "ตำบลคูเมือง, อำเภอเมืองสรวง, ร้อยเอ็ด, 45220",
    "ตำบลหนองผือ, อำเภอเมืองสรวง, ร้อยเอ็ด, 45220",
    "ตำบลหนองหิน, อำเภอเมืองสรวง, ร้อยเอ็ด, 45220",
    "ตำบลเชียงใหม่, อำเภอโพธิ์ชัย, ร้อยเอ็ด, 45230",
    "ตำบลโพธิ์ศรี, อำเภอโพธิ์ชัย, ร้อยเอ็ด, 45230",
    "ตำบลขามเปี้ย, อำเภอโพธิ์ชัย, ร้อยเอ็ด, 45230",
    "ตำบลคำพอุง, อำเภอโพธิ์ชัย, ร้อยเอ็ด, 45230",
    "ตำบลดอนโอง, อำเภอโพธิ์ชัย, ร้อยเอ็ด, 45230",
    "ตำบลบัวคำ, อำเภอโพธิ์ชัย, ร้อยเอ็ด, 45230",
    "ตำบลสะอาด, อำเภอโพธิ์ชัย, ร้อยเอ็ด, 45230",
    "ตำบลหนองตาไก้, อำเภอโพธิ์ชัย, ร้อยเอ็ด, 45230",
    "ตำบลอัคคะคำ, อำเภอโพธิ์ชัย, ร้อยเอ็ด, 45230",
    "ตำบลโพนทราย, อำเภอโพนทราย, ร้อยเอ็ด, 45240",
    "ตำบลท่าหาดยาว, อำเภอโพนทราย, ร้อยเอ็ด, 45240",
    "ตำบลยางคำ, อำเภอโพนทราย, ร้อยเอ็ด, 45240",
    "ตำบลศรีสว่าง, อำเภอโพนทราย, ร้อยเอ็ด, 45240",
    "ตำบลสามขา, อำเภอโพนทราย, ร้อยเอ็ด, 45240",
    "ตำบลเมยวดี, อำเภอเมยวดี, ร้อยเอ็ด, 45250",
    "ตำบลชมสะอาด, อำเภอเมยวดี, ร้อยเอ็ด, 45250",
    "ตำบลชุมพร, อำเภอเมยวดี, ร้อยเอ็ด, 45250",
    "ตำบลบุ่งเลิศ, อำเภอเมยวดี, ร้อยเอ็ด, 45250",
    "ตำบลโพธิ์สัย, อำเภอศรีสมเด็จ, ร้อยเอ็ด, 45280",
    "ตำบลสวนจิก, อำเภอศรีสมเด็จ, ร้อยเอ็ด, 45280",
    "ตำบลเชียงเครือ, อำเภอเมืองกาฬสินธุ์, กาฬสินธุ์, 46000",
    "ตำบลเหนือ, อำเภอเมืองกาฬสินธุ์, กาฬสินธุ์, 46000",
    "ตำบลโพนทอง, อำเภอเมืองกาฬสินธุ์, กาฬสินธุ์, 46000",
    "ตำบลไผ่, อำเภอเมืองกาฬสินธุ์, กาฬสินธุ์, 46000",
    "ตำบลกลางหมื่น, อำเภอเมืองกาฬสินธุ์, กาฬสินธุ์, 46000",
    "ตำบลกาฬสินธุ์, อำเภอเมืองกาฬสินธุ์, กาฬสินธุ์, 46000",
    "ตำบลขมิ้น, อำเภอเมืองกาฬสินธุ์, กาฬสินธุ์, 46000",
    "ตำบลนาจารย์, อำเภอเมืองกาฬสินธุ์, กาฬสินธุ์, 46000",
    "ตำบลบึงวิชัย, อำเภอเมืองกาฬสินธุ์, กาฬสินธุ์, 46000",
    "ตำบลภูดิน, อำเภอเมืองกาฬสินธุ์, กาฬสินธุ์, 46000",
    "ตำบลภูปอ, อำเภอเมืองกาฬสินธุ์, กาฬสินธุ์, 46000",
    "ตำบลลำคลอง, อำเภอเมืองกาฬสินธุ์, กาฬสินธุ์, 46000",
    "ตำบลลำปาว, อำเภอเมืองกาฬสินธุ์, กาฬสินธุ์, 46000",
    "ตำบลลำพาน, อำเภอเมืองกาฬสินธุ์, กาฬสินธุ์, 46000",
    "ตำบลหนองกุง, อำเภอเมืองกาฬสินธุ์, กาฬสินธุ์, 46000",
    "ตำบลหลุบ, อำเภอเมืองกาฬสินธุ์, กาฬสินธุ์, 46000",
    "ตำบลห้วยโพธิ์, อำเภอเมืองกาฬสินธุ์, กาฬสินธุ์, 46000",
    "ตำบลดงพยุง, อำเภอดอนจาน, กาฬสินธุ์, 46000",
    "ตำบลดอนจาน, อำเภอดอนจาน, กาฬสินธุ์, 46000",
    "ตำบลนาจำปา, อำเภอดอนจาน, กาฬสินธุ์, 46000",
    "ตำบลม่วงนา, อำเภอดอนจาน, กาฬสินธุ์, 46000",
    "ตำบลสะอาดไชยศรี, อำเภอดอนจาน, กาฬสินธุ์, 46000",
    "ตำบลเหล่าใหญ่, อำเภอกุฉินารายณ์, กาฬสินธุ์, 46110",
    "ตำบลเหล่าไฮงาม, อำเภอกุฉินารายณ์, กาฬสินธุ์, 46110",
    "ตำบลแจนแลน, อำเภอกุฉินารายณ์, กาฬสินธุ์, 46110",
    "ตำบลกุดค้าว, อำเภอกุฉินารายณ์, กาฬสินธุ์, 46110",
    "ตำบลกุดหว้า, อำเภอกุฉินารายณ์, กาฬสินธุ์, 46110",
    "ตำบลจุมจัง, อำเภอกุฉินารายณ์, กาฬสินธุ์, 46110",
    "ตำบลนาโก, อำเภอกุฉินารายณ์, กาฬสินธุ์, 46110",
    "ตำบลนาขาม, อำเภอกุฉินารายณ์, กาฬสินธุ์, 46110",
    "ตำบลบัวขาว, อำเภอกุฉินารายณ์, กาฬสินธุ์, 46110",
    "ตำบลสมสะอาด, อำเภอกุฉินารายณ์, กาฬสินธุ์, 46110",
    "ตำบลสามขา, อำเภอกุฉินารายณ์, กาฬสินธุ์, 46110",
    "ตำบลหนองห้าง, อำเภอกุฉินารายณ์, กาฬสินธุ์, 46110",
    "ตำบลเขาพระนอน, อำเภอยางตลาด, กาฬสินธุ์, 46120",
    "ตำบลเว่อ, อำเภอยางตลาด, กาฬสินธุ์, 46120",
    "ตำบลโนนสูง, อำเภอยางตลาด, กาฬสินธุ์, 46120",
    "ตำบลคลองขาม, อำเภอยางตลาด, กาฬสินธุ์, 46120",
    "ตำบลดอนสมบูรณ์, อำเภอยางตลาด, กาฬสินธุ์, 46120",
    "ตำบลนาเชือก, อำเภอยางตลาด, กาฬสินธุ์, 46120",
    "ตำบลนาดี, อำเภอยางตลาด, กาฬสินธุ์, 46120",
    "ตำบลบัวบาน, อำเภอยางตลาด, กาฬสินธุ์, 46120",
    "ตำบลยางตลาด, อำเภอยางตลาด, กาฬสินธุ์, 46120",
    "ตำบลหนองตอกแป้น, อำเภอยางตลาด, กาฬสินธุ์, 46120",
    "ตำบลหนองอิเฒ่า, อำเภอยางตลาด, กาฬสินธุ์, 46120",
    "ตำบลหัวงัว, อำเภอยางตลาด, กาฬสินธุ์, 46120",
    "ตำบลหัวนาคำ, อำเภอยางตลาด, กาฬสินธุ์, 46120",
    "ตำบลอิตื้อ, อำเภอยางตลาด, กาฬสินธุ์, 46120",
    "ตำบลอุ่มเม่า, อำเภอยางตลาด, กาฬสินธุ์, 46120",
    "ตำบลเจ้าท่า, อำเภอกมลาไสย, กาฬสินธุ์, 46130",
    "ตำบลโคกสมบูรณ์, อำเภอกมลาไสย, กาฬสินธุ์, 46130",
    "ตำบลโพนงาม, อำเภอกมลาไสย, กาฬสินธุ์, 46130",
    "ตำบลกมลาไสย, อำเภอกมลาไสย, กาฬสินธุ์, 46130",
    "ตำบลดงลิง, อำเภอกมลาไสย, กาฬสินธุ์, 46130",
    "ตำบลธัญญา, อำเภอกมลาไสย, กาฬสินธุ์, 46130",
    "ตำบลหนองแปน, อำเภอกมลาไสย, กาฬสินธุ์, 46130",
    "ตำบลหลักเมือง, อำเภอกมลาไสย, กาฬสินธุ์, 46130",
    "ตำบลเหล่ากลาง, อำเภอฆ้องชัย, กาฬสินธุ์, 46130",
    "ตำบลโคกสะอาด, อำเภอฆ้องชัย, กาฬสินธุ์, 46130",
    "ตำบลโนนศิลาเลิง, อำเภอฆ้องชัย, กาฬสินธุ์, 46130",
    "ตำบลฆ้องชัยพัฒนา, อำเภอฆ้องชัย, กาฬสินธุ์, 46130",
    "ตำบลลำชี, อำเภอฆ้องชัย, กาฬสินธุ์, 46130",
    "ตำบลโนนแหลมทอง, อำเภอสหัสขันธ์, กาฬสินธุ์, 46140",
    "ตำบลโนนน้ำเกลี้ยง, อำเภอสหัสขันธ์, กาฬสินธุ์, 46140",
    "ตำบลโนนบุรี, อำเภอสหัสขันธ์, กาฬสินธุ์, 46140",
    "ตำบลโนนศิลา, อำเภอสหัสขันธ์, กาฬสินธุ์, 46140",
    "ตำบลนามะเขือ, อำเภอสหัสขันธ์, กาฬสินธุ์, 46140",
    "ตำบลนิคม, อำเภอสหัสขันธ์, กาฬสินธุ์, 46140",
    "ตำบลภูสิงห์, อำเภอสหัสขันธ์, กาฬสินธุ์, 46140",
    "ตำบลสหัสขันธ์, อำเภอสหัสขันธ์, กาฬสินธุ์, 46140",
    "ตำบลแซงบาดาล, อำเภอสมเด็จ, กาฬสินธุ์, 46150",
    "ตำบลผาเสวย, อำเภอสมเด็จ, กาฬสินธุ์, 46150",
    "ตำบลมหาไชย, อำเภอสมเด็จ, กาฬสินธุ์, 46150",
    "ตำบลลำห้วยหลัว, อำเภอสมเด็จ, กาฬสินธุ์, 46150",
    "ตำบลศรีสมเด็จ, อำเภอสมเด็จ, กาฬสินธุ์, 46150",
    "ตำบลสมเด็จ, อำเภอสมเด็จ, กาฬสินธุ์, 46150",
    "ตำบลหนองแวง, อำเภอสมเด็จ, กาฬสินธุ์, 46150",
    "ตำบลหมูม่น, อำเภอสมเด็จ, กาฬสินธุ์, 46150",
    "ตำบลกุดปลาค้าว, อำเภอเขาวง, กาฬสินธุ์, 46160",
    "ตำบลกุดสิมคุ้มใหม่, อำเภอเขาวง, กาฬสินธุ์, 46160",
    "ตำบลคุ้มเก่า, อำเภอเขาวง, กาฬสินธุ์, 46160",
    "ตำบลสงเปลือย, อำเภอเขาวง, กาฬสินธุ์, 46160",
    "ตำบลสระพังทอง, อำเภอเขาวง, กาฬสินธุ์, 46160",
    "ตำบลหนองผือ, อำเภอเขาวง, กาฬสินธุ์, 46160",
    "ตำบลโนนนาจาน, อำเภอนาคู, กาฬสินธุ์, 46160",
    "ตำบลนาคู, อำเภอนาคู, กาฬสินธุ์, 46160",
    "ตำบลบ่อแก้ว, อำเภอนาคู, กาฬสินธุ์, 46160",
    "ตำบลภูแล่นช้าง, อำเภอนาคู, กาฬสินธุ์, 46160",
    "ตำบลสายนาวัง, อำเภอนาคู, กาฬสินธุ์, 46160",
    "ตำบลโนนสะอาด, อำเภอห้วยเม็ก, กาฬสินธุ์, 46170",
    "ตำบลกุดโดน, อำเภอห้วยเม็ก, กาฬสินธุ์, 46170",
    "ตำบลคำเหมือดแก้ว, อำเภอห้วยเม็ก, กาฬสินธุ์, 46170",
    "ตำบลคำใหญ่, อำเภอห้วยเม็ก, กาฬสินธุ์, 46170",
    "ตำบลทรายทอง, อำเภอห้วยเม็ก, กาฬสินธุ์, 46170",
    "ตำบลบึงนาเรียง, อำเภอห้วยเม็ก, กาฬสินธุ์, 46170",
    "ตำบลพิมูล, อำเภอห้วยเม็ก, กาฬสินธุ์, 46170",
    "ตำบลห้วยเม็ก, อำเภอห้วยเม็ก, กาฬสินธุ์, 46170",
    "ตำบลหัวหิน, อำเภอห้วยเม็ก, กาฬสินธุ์, 46170",
    "ตำบลเนินยาง, อำเภอคำม่วง, กาฬสินธุ์, 46180",
    "ตำบลโพน, อำเภอคำม่วง, กาฬสินธุ์, 46180",
    "ตำบลดินจี่, อำเภอคำม่วง, กาฬสินธุ์, 46180",
    "ตำบลทุ่งคลอง, อำเภอคำม่วง, กาฬสินธุ์, 46180",
    "ตำบลนาทัน, อำเภอคำม่วง, กาฬสินธุ์, 46180",
    "ตำบลนาบอน, อำเภอคำม่วง, กาฬสินธุ์, 46180",
    "ตำบลคำสร้างเที่ยง, อำเภอสามชัย, กาฬสินธุ์, 46180",
    "ตำบลสำราญ, อำเภอสามชัย, กาฬสินธุ์, 46180",
    "ตำบลสำราญใต้, อำเภอสามชัย, กาฬสินธุ์, 46180",
    "ตำบลหนองช้าง, อำเภอสามชัย, กาฬสินธุ์, 46180",
    "ตำบลกุงเก่า, อำเภอท่าคันโท, กาฬสินธุ์, 46190",
    "ตำบลกุดจิก, อำเภอท่าคันโท, กาฬสินธุ์, 46190",
    "ตำบลดงสมบูรณ์, อำเภอท่าคันโท, กาฬสินธุ์, 46190",
    "ตำบลท่าคันโท, อำเภอท่าคันโท, กาฬสินธุ์, 46190",
    "ตำบลนาตาล, อำเภอท่าคันโท, กาฬสินธุ์, 46190",
    "ตำบลยางอู้ม, อำเภอท่าคันโท, กาฬสินธุ์, 46190",
    "ตำบลเหล่าอ้อย, อำเภอร่องคำ, กาฬสินธุ์, 46210",
    "ตำบลร่องคำ, อำเภอร่องคำ, กาฬสินธุ์, 46210",
    "ตำบลสามัคคี, อำเภอร่องคำ, กาฬสินธุ์, 46210",
    "ตำบลเสาเล้า, อำเภอหนองกุงศรี, กาฬสินธุ์, 46220",
    "ตำบลโคกเครือ, อำเภอหนองกุงศรี, กาฬสินธุ์, 46220",
    "ตำบลดงมูล, อำเภอหนองกุงศรี, กาฬสินธุ์, 46220",
    "ตำบลลำหนองแสน, อำเภอหนองกุงศรี, กาฬสินธุ์, 46220",
    "ตำบลหนองใหญ่, อำเภอหนองกุงศรี, กาฬสินธุ์, 46220",
    "ตำบลหนองกุงศรี, อำเภอหนองกุงศรี, กาฬสินธุ์, 46220",
    "ตำบลหนองบัว, อำเภอหนองกุงศรี, กาฬสินธุ์, 46220",
    "ตำบลหนองสรวง, อำเภอหนองกุงศรี, กาฬสินธุ์, 46220",
    "ตำบลหนองหิน, อำเภอหนองกุงศรี, กาฬสินธุ์, 46220",
    "ตำบลนามน, อำเภอนามน, กาฬสินธุ์, 46230",
    "ตำบลยอดแกง, อำเภอนามน, กาฬสินธุ์, 46230",
    "ตำบลสงเปลือย, อำเภอนามน, กาฬสินธุ์, 46230",
    "ตำบลหนองบัว, อำเภอนามน, กาฬสินธุ์, 46230",
    "ตำบลหลักเหลี่ยม, อำเภอนามน, กาฬสินธุ์, 46230",
    "ตำบลไค้นุ่น, อำเภอห้วยผึ้ง, กาฬสินธุ์, 46240",
    "ตำบลคำบง, อำเภอห้วยผึ้ง, กาฬสินธุ์, 46240",
    "ตำบลนิคมห้วยผึ้ง, อำเภอห้วยผึ้ง, กาฬสินธุ์, 46240",
    "ตำบลหนองอีบุตร, อำเภอห้วยผึ้ง, กาฬสินธุ์, 46240",
    "ตำบลเชียงเครือ, อำเภอเมืองสกลนคร, สกลนคร, 47000",
    "ตำบลเหล่าปอแดง, อำเภอเมืองสกลนคร, สกลนคร, 47000",
    "ตำบลโคกก่อง, อำเภอเมืองสกลนคร, สกลนคร, 47000",
    "ตำบลโนนหอม, อำเภอเมืองสกลนคร, สกลนคร, 47000",
    "ตำบลงิ้วด่อน, อำเภอเมืองสกลนคร, สกลนคร, 47000",
    "ตำบลดงชน, อำเภอเมืองสกลนคร, สกลนคร, 47000",
    "ตำบลดงมะไฟ, อำเภอเมืองสกลนคร, สกลนคร, 47000",
    "ตำบลธาตุเชิงชุม, อำเภอเมืองสกลนคร, สกลนคร, 47000",
    "ตำบลธาตุนาเวง, อำเภอเมืองสกลนคร, สกลนคร, 47000",
    "ตำบลพังขว้าง, อำเภอเมืองสกลนคร, สกลนคร, 47000",
    "ตำบลม่วงลาย, อำเภอเมืองสกลนคร, สกลนคร, 47000",
    "ตำบลห้วยยาง, อำเภอเมืองสกลนคร, สกลนคร, 47000",
    "ตำบลฮางโฮง, อำเภอเมืองสกลนคร, สกลนคร, 47000",
    "ตำบลโคกสี, อำเภอสว่างแดนดิน, สกลนคร, 47110",
    "ตำบลโพนสูง, อำเภอสว่างแดนดิน, สกลนคร, 47110",
    "ตำบลค้อใต้, อำเภอสว่างแดนดิน, สกลนคร, 47110",
    "ตำบลคำสะอาด, อำเภอสว่างแดนดิน, สกลนคร, 47110",
    "ตำบลทรายมูล, อำเภอสว่างแดนดิน, สกลนคร, 47110",
    "ตำบลบงเหนือ, อำเภอสว่างแดนดิน, สกลนคร, 47110",
    "ตำบลบงใต้, อำเภอสว่างแดนดิน, สกลนคร, 47110",
    "ตำบลบ้านต้าย, อำเภอสว่างแดนดิน, สกลนคร, 47110",
    "ตำบลบ้านถ่อน, อำเภอสว่างแดนดิน, สกลนคร, 47110",
    "ตำบลสว่างแดนดิน, อำเภอสว่างแดนดิน, สกลนคร, 47110",
    "ตำบลหนองหลวง, อำเภอสว่างแดนดิน, สกลนคร, 47110",
    "ตำบลเดื่อศรีคันไชย, อำเภอวานรนิวาส, สกลนคร, 47120",
    "ตำบลกุดเรือคำ, อำเภอวานรนิวาส, สกลนคร, 47120",
    "ตำบลขัวก่าย, อำเภอวานรนิวาส, สกลนคร, 47120",
    "ตำบลคอนสวรรค์, อำเภอวานรนิวาส, สกลนคร, 47120",
    "ตำบลคูสะคาม, อำเภอวานรนิวาส, สกลนคร, 47120",
    "ตำบลธาตุ, อำเภอวานรนิวาส, สกลนคร, 47120",
    "ตำบลนาคำ, อำเภอวานรนิวาส, สกลนคร, 47120",
    "ตำบลนาซอ, อำเภอวานรนิวาส, สกลนคร, 47120",
    "ตำบลวานรนิวาส, อำเภอวานรนิวาส, สกลนคร, 47120",
    "ตำบลศรีวิชัย, อำเภอวานรนิวาส, สกลนคร, 47120",
    "ตำบลหนองแวง, อำเภอวานรนิวาส, สกลนคร, 47120",
    "ตำบลหนองแวงใต้, อำเภอวานรนิวาส, สกลนคร, 47120",
    "ตำบลหนองสนม, อำเภอวานรนิวาส, สกลนคร, 47120",
    "ตำบลอินทร์แปลง, อำเภอวานรนิวาส, สกลนคร, 47120",
    "ตำบลเชิงชุม, อำเภอพรรณานิคม, สกลนคร, 47130",
    "ตำบลไร่, อำเภอพรรณานิคม, สกลนคร, 47130",
    "ตำบลช้างมิ่ง, อำเภอพรรณานิคม, สกลนคร, 47130",
    "ตำบลนาใน, อำเภอพรรณานิคม, สกลนคร, 47130",
    "ตำบลบะฮี, อำเภอพรรณานิคม, สกลนคร, 47130",
    "ตำบลพรรณา, อำเภอพรรณานิคม, สกลนคร, 47130",
    "ตำบลวังยาง, อำเภอพรรณานิคม, สกลนคร, 47130",
    "ตำบลสว่าง, อำเภอพรรณานิคม, สกลนคร, 47130",
    "ตำบลโนนสะอาด, อำเภอบ้านม่วง, สกลนคร, 47140",
    "ตำบลดงเหนือ, อำเภอบ้านม่วง, สกลนคร, 47140",
    "ตำบลดงหม้อทอง, อำเภอบ้านม่วง, สกลนคร, 47140",
    "ตำบลดงหม้อทองใต้, อำเภอบ้านม่วง, สกลนคร, 47140",
    "ตำบลบ่อแก้ว, อำเภอบ้านม่วง, สกลนคร, 47140",
    "ตำบลม่วง, อำเภอบ้านม่วง, สกลนคร, 47140",
    "ตำบลมาย, อำเภอบ้านม่วง, สกลนคร, 47140",
    "ตำบลหนองกวั่ง, อำเภอบ้านม่วง, สกลนคร, 47140",
    "ตำบลห้วยหลัว, อำเภอบ้านม่วง, สกลนคร, 47140",
    "ตำบลค้อเขียว, อำเภอวาริชภูมิ, สกลนคร, 47150",
    "ตำบลคำบ่อ, อำเภอวาริชภูมิ, สกลนคร, 47150",
    "ตำบลปลาโหล, อำเภอวาริชภูมิ, สกลนคร, 47150",
    "ตำบลวาริชภูมิ, อำเภอวาริชภูมิ, สกลนคร, 47150",
    "ตำบลหนองลาด, อำเภอวาริชภูมิ, สกลนคร, 47150",
    "ตำบลแร่, อำเภอพังโคน, สกลนคร, 47160",
    "ตำบลไฮหย่อง, อำเภอพังโคน, สกลนคร, 47160",
    "ตำบลต้นผึ้ง, อำเภอพังโคน, สกลนคร, 47160",
    "ตำบลพังโคน, อำเภอพังโคน, สกลนคร, 47160",
    "ตำบลม่วงไข่, อำเภอพังโคน, สกลนคร, 47160",
    "ตำบลโพนแพง, อำเภออากาศอำนวย, สกลนคร, 47170",
    "ตำบลโพนงาม, อำเภออากาศอำนวย, สกลนคร, 47170",
    "ตำบลท่าก้อน, อำเภออากาศอำนวย, สกลนคร, 47170",
    "ตำบลนาฮี, อำเภออากาศอำนวย, สกลนคร, 47170",
    "ตำบลบะหว้า, อำเภออากาศอำนวย, สกลนคร, 47170",
    "ตำบลวาใหญ่, อำเภออากาศอำนวย, สกลนคร, 47170",
    "ตำบลสามัคคีพัฒนา, อำเภออากาศอำนวย, สกลนคร, 47170",
    "ตำบลอากาศ, อำเภออากาศอำนวย, สกลนคร, 47170",
    "ตำบลกุดไห, อำเภอกุดบาก, สกลนคร, 47180",
    "ตำบลกุดบาก, อำเภอกุดบาก, สกลนคร, 47180",
    "ตำบลนาม่อง, อำเภอกุดบาก, สกลนคร, 47180",
    "ตำบลโคกภู, อำเภอภูพาน, สกลนคร, 47180",
    "ตำบลกกปลาซิว, อำเภอภูพาน, สกลนคร, 47180",
    "ตำบลสร้างค้อ, อำเภอภูพาน, สกลนคร, 47180",
    "ตำบลหลุบเลา, อำเภอภูพาน, สกลนคร, 47180",
    "ตำบลท่าศิลา, อำเภอส่องดาว, สกลนคร, 47190",
    "ตำบลปทุมวาปี, อำเภอส่องดาว, สกลนคร, 47190",
    "ตำบลวัฒนา, อำเภอส่องดาว, สกลนคร, 47190",
    "ตำบลส่องดาว, อำเภอส่องดาว, สกลนคร, 47190",
    "ตำบลโพธิไพศาล, อำเภอกุสุมาลย์, สกลนคร, 47210",
    "ตำบลกุสุมาลย์, อำเภอกุสุมาลย์, สกลนคร, 47210",
    "ตำบลนาโพธิ์, อำเภอกุสุมาลย์, สกลนคร, 47210",
    "ตำบลขมิ้น, อำเภอเมืองสกลนคร, สกลนคร, 47220",
    "ตำบลหนองลาด, อำเภอเมืองสกลนคร, สกลนคร, 47220",
    "ตำบลนาหัวบ่อ, อำเภอพรรณานิคม, สกลนคร, 47220",
    "ตำบลพอกน้อย, อำเภอพรรณานิคม, สกลนคร, 47220",
    "ตำบลท่าแร่, อำเภอเมืองสกลนคร, สกลนคร, 47230",
    "ตำบลเชียงสือ, อำเภอโพนนาแก้ว, สกลนคร, 47230",
    "ตำบลนาแก้ว, อำเภอโพนนาแก้ว, สกลนคร, 47230",
    "ตำบลนาตงวัฒนา, อำเภอโพนนาแก้ว, สกลนคร, 47230",
    "ตำบลบ้านแป้น, อำเภอโพนนาแก้ว, สกลนคร, 47230",
    "ตำบลบ้านโพน, อำเภอโพนนาแก้ว, สกลนคร, 47230",
    "ตำบลนาเพียง, อำเภอกุสุมาลย์, สกลนคร, 47230",
    "ตำบลอุ่มจาน, อำเภอกุสุมาลย์, สกลนคร, 47230",
    "ตำบลแวง, อำเภอสว่างแดนดิน, สกลนคร, 47240",
    "ตำบลตาลเนิ้ง, อำเภอสว่างแดนดิน, สกลนคร, 47240",
    "ตำบลตาลโกน, อำเภอสว่างแดนดิน, สกลนคร, 47240",
    "ตำบลธาตุทอง, อำเภอสว่างแดนดิน, สกลนคร, 47240",
    "ตำบลพันนา, อำเภอสว่างแดนดิน, สกลนคร, 47240",
    "ตำบลแพด, อำเภอคำตากล้า, สกลนคร, 47250",
    "ตำบลคำตากล้า, อำเภอคำตากล้า, สกลนคร, 47250",
    "ตำบลนาแต้, อำเภอคำตากล้า, สกลนคร, 47250",
    "ตำบลหนองบัวสิม, อำเภอคำตากล้า, สกลนคร, 47250",
    "ตำบลเต่างอย, อำเภอเต่างอย, สกลนคร, 47260",
    "ตำบลจันทร์เพ็ญ, อำเภอเต่างอย, สกลนคร, 47260",
    "ตำบลนาตาล, อำเภอเต่างอย, สกลนคร, 47260",
    "ตำบลบึงทวาย, อำเภอเต่างอย, สกลนคร, 47260",
    "ตำบลนิคมน้ำอูน, อำเภอนิคมน้ำอูน, สกลนคร, 47270",
    "ตำบลสุวรรณคาม, อำเภอนิคมน้ำอูน, สกลนคร, 47270",
    "ตำบลหนองบัว, อำเภอนิคมน้ำอูน, สกลนคร, 47270",
    "ตำบลหนองปลิง, อำเภอนิคมน้ำอูน, สกลนคร, 47270",
    "ตำบลเหล่าโพนค้อ, อำเภอโคกศรีสุพรรณ, สกลนคร, 47280",
    "ตำบลแมดนาท่ม, อำเภอโคกศรีสุพรรณ, สกลนคร, 47280",
    "ตำบลด่านม่วงคำ, อำเภอโคกศรีสุพรรณ, สกลนคร, 47280",
    "ตำบลตองโขบ, อำเภอโคกศรีสุพรรณ, สกลนคร, 47280",
    "ตำบลเจริญศิลป์, อำเภอเจริญศิลป์, สกลนคร, 47290",
    "ตำบลโคกศิลา, อำเภอเจริญศิลป์, สกลนคร, 47290",
    "ตำบลทุ่งแก, อำเภอเจริญศิลป์, สกลนคร, 47290",
    "ตำบลบ้านเหล่า, อำเภอเจริญศิลป์, สกลนคร, 47290",
    "ตำบลหนองแปน, อำเภอเจริญศิลป์, สกลนคร, 47290",
    "ตำบลโพธิ์ตาก, อำเภอเมืองนครพนม, นครพนม, 48000",
    "ตำบลในเมือง, อำเภอเมืองนครพนม, นครพนม, 48000",
    "ตำบลกุรุคุ, อำเภอเมืองนครพนม, นครพนม, 48000",
    "ตำบลขามเฒ่า, อำเภอเมืองนครพนม, นครพนม, 48000",
    "ตำบลคำเตย, อำเภอเมืองนครพนม, นครพนม, 48000",
    "ตำบลดงขวาง, อำเภอเมืองนครพนม, นครพนม, 48000",
    "ตำบลท่าค้อ, อำเภอเมืองนครพนม, นครพนม, 48000",
    "ตำบลนาทราย, อำเภอเมืองนครพนม, นครพนม, 48000",
    "ตำบลนาราชควาย, อำเภอเมืองนครพนม, นครพนม, 48000",
    "ตำบลบ้านกลาง, อำเภอเมืองนครพนม, นครพนม, 48000",
    "ตำบลบ้านผึ้ง, อำเภอเมืองนครพนม, นครพนม, 48000",
    "ตำบลวังตามัว, อำเภอเมืองนครพนม, นครพนม, 48000",
    "ตำบลหนองแสง, อำเภอเมืองนครพนม, นครพนม, 48000",
    "ตำบลหนองญาติ, อำเภอเมืองนครพนม, นครพนม, 48000",
    "ตำบลอาจสามารถ, อำเภอเมืองนครพนม, นครพนม, 48000",
    "ตำบลแสนพัน, อำเภอธาตุพนม, นครพนม, 48110",
    "ตำบลโพนแพง, อำเภอธาตุพนม, นครพนม, 48110",
    "ตำบลกุดฉิม, อำเภอธาตุพนม, นครพนม, 48110",
    "ตำบลดอนนางหงส์, อำเภอธาตุพนม, นครพนม, 48110",
    "ตำบลธาตุพนม, อำเภอธาตุพนม, นครพนม, 48110",
    "ตำบลธาตุพนมเหนือ, อำเภอธาตุพนม, นครพนม, 48110",
    "ตำบลนาถ่อน, อำเภอธาตุพนม, นครพนม, 48110",
    "ตำบลนาหนาด, อำเภอธาตุพนม, นครพนม, 48110",
    "ตำบลน้ำก่ำ, อำเภอธาตุพนม, นครพนม, 48110",
    "ตำบลฝั่งแดง, อำเภอธาตุพนม, นครพนม, 48110",
    "ตำบลพระกลางทุ่ง, อำเภอธาตุพนม, นครพนม, 48110",
    "ตำบลอุ่มเหม้า, อำเภอธาตุพนม, นครพนม, 48110",
    "ตำบลเวินพระบาท, อำเภอท่าอุเทน, นครพนม, 48120",
    "ตำบลโนนตาล, อำเภอท่าอุเทน, นครพนม, 48120",
    "ตำบลไชยบุรี, อำเภอท่าอุเทน, นครพนม, 48120",
    "ตำบลท่าจำปา, อำเภอท่าอุเทน, นครพนม, 48120",
    "ตำบลท่าอุเทน, อำเภอท่าอุเทน, นครพนม, 48120",
    "ตำบลพนอม, อำเภอท่าอุเทน, นครพนม, 48120",
    "ตำบลพะทาย, อำเภอท่าอุเทน, นครพนม, 48120",
    "ตำบลรามราช, อำเภอท่าอุเทน, นครพนม, 48120",
    "ตำบลหนองเทา, อำเภอท่าอุเทน, นครพนม, 48120",
    "ตำบลก้านเหลือง, อำเภอนาแก, นครพนม, 48130",
    "ตำบลคำพี้, อำเภอนาแก, นครพนม, 48130",
    "ตำบลนาเลียง, อำเภอนาแก, นครพนม, 48130",
    "ตำบลนาแก, อำเภอนาแก, นครพนม, 48130",
    "ตำบลนาคู่, อำเภอนาแก, นครพนม, 48130",
    "ตำบลบ้านแก้ง, อำเภอนาแก, นครพนม, 48130",
    "ตำบลพระซอง, อำเภอนาแก, นครพนม, 48130",
    "ตำบลพิมาน, อำเภอนาแก, นครพนม, 48130",
    "ตำบลพุ่มแก, อำเภอนาแก, นครพนม, 48130",
    "ตำบลสีชมพู, อำเภอนาแก, นครพนม, 48130",
    "ตำบลหนองบ่อ, อำเภอนาแก, นครพนม, 48130",
    "ตำบลหนองสังข์, อำเภอนาแก, นครพนม, 48130",
    "ตำบลโคกสี, อำเภอวังยาง, นครพนม, 48130",
    "ตำบลยอดชาด, อำเภอวังยาง, นครพนม, 48130",
    "ตำบลวังยาง, อำเภอวังยาง, นครพนม, 48130",
    "ตำบลหนองโพธิ์, อำเภอวังยาง, นครพนม, 48130",
    "ตำบลดอนเตย, อำเภอนาทม, นครพนม, 48140",
    "ตำบลนาทม, อำเภอนาทม, นครพนม, 48140",
    "ตำบลหนองซน, อำเภอนาทม, นครพนม, 48140",
    "ตำบลโพนทอง, อำเภอบ้านแพง, นครพนม, 48140",
    "ตำบลไผ่ล้อม, อำเภอบ้านแพง, นครพนม, 48140",
    "ตำบลนาเข, อำเภอบ้านแพง, นครพนม, 48140",
    "ตำบลนางัว, อำเภอบ้านแพง, นครพนม, 48140",
    "ตำบลบ้านแพง, อำเภอบ้านแพง, นครพนม, 48140",
    "ตำบลหนองแวง, อำเภอบ้านแพง, นครพนม, 48140",
    "ตำบลโพนสว่าง, อำเภอศรีสงคราม, นครพนม, 48150",
    "ตำบลท่าบ่อสงคราม, อำเภอศรีสงคราม, นครพนม, 48150",
    "ตำบลนาเดื่อ, อำเภอศรีสงคราม, นครพนม, 48150",
    "ตำบลนาคำ, อำเภอศรีสงคราม, นครพนม, 48150",
    "ตำบลบ้านเอื้อง, อำเภอศรีสงคราม, นครพนม, 48150",
    "ตำบลบ้านข่า, อำเภอศรีสงคราม, นครพนม, 48150",
    "ตำบลศรีสงคราม, อำเภอศรีสงคราม, นครพนม, 48150",
    "ตำบลสามผง, อำเภอศรีสงคราม, นครพนม, 48150",
    "ตำบลหาดแพง, อำเภอศรีสงคราม, นครพนม, 48150",
    "ตำบลโคกสว่าง, อำเภอปลาปาก, นครพนม, 48160",
    "ตำบลโคกสูง, อำเภอปลาปาก, นครพนม, 48160",
    "ตำบลกุตาไก้, อำเภอปลาปาก, นครพนม, 48160",
    "ตำบลนามะเขือ, อำเภอปลาปาก, นครพนม, 48160",
    "ตำบลปลาปาก, อำเภอปลาปาก, นครพนม, 48160",
    "ตำบลมหาชัย, อำเภอปลาปาก, นครพนม, 48160",
    "ตำบลหนองเทาใหญ่, อำเภอปลาปาก, นครพนม, 48160",
    "ตำบลหนองฮี, อำเภอปลาปาก, นครพนม, 48160",
    "ตำบลเรณู, อำเภอเรณูนคร, นครพนม, 48170",
    "ตำบลเรณูใต้, อำเภอเรณูนคร, นครพนม, 48170",
    "ตำบลโคกหินแฮ่, อำเภอเรณูนคร, นครพนม, 48170",
    "ตำบลโพนทอง, อำเภอเรณูนคร, นครพนม, 48170",
    "ตำบลท่าลาด, อำเภอเรณูนคร, นครพนม, 48170",
    "ตำบลนาขาม, อำเภอเรณูนคร, นครพนม, 48170",
    "ตำบลนางาม, อำเภอเรณูนคร, นครพนม, 48170",
    "ตำบลหนองย่างชิ้น, อำเภอเรณูนคร, นครพนม, 48170",
    "ตำบลเหล่าพัฒนา, อำเภอนาหว้า, นครพนม, 48180",
    "ตำบลท่าเรือ, อำเภอนาหว้า, นครพนม, 48180",
    "ตำบลนาคูณใหญ่, อำเภอนาหว้า, นครพนม, 48180",
    "ตำบลนางัว, อำเภอนาหว้า, นครพนม, 48180",
    "ตำบลนาหว้า, อำเภอนาหว้า, นครพนม, 48180",
    "ตำบลบ้านเสียว, อำเภอนาหว้า, นครพนม, 48180",
    "ตำบลโพนจาน, อำเภอโพนสวรรค์, นครพนม, 48190",
    "ตำบลโพนบก, อำเภอโพนสวรรค์, นครพนม, 48190",
    "ตำบลโพนสวรรค์, อำเภอโพนสวรรค์, นครพนม, 48190",
    "ตำบลนาใน, อำเภอโพนสวรรค์, นครพนม, 48190",
    "ตำบลนาขมิ้น, อำเภอโพนสวรรค์, นครพนม, 48190",
    "ตำบลนาหัวบ่อ, อำเภอโพนสวรรค์, นครพนม, 48190",
    "ตำบลบ้านค้อ, อำเภอโพนสวรรค์, นครพนม, 48190",
    "ตำบลโพนทราย, อำเภอเมืองมุกดาหาร, มุกดาหาร, 49000",
    "ตำบลกุดแข้, อำเภอเมืองมุกดาหาร, มุกดาหาร, 49000",
    "ตำบลคำป่าหลาย, อำเภอเมืองมุกดาหาร, มุกดาหาร, 49000",
    "ตำบลคำอาฮวน, อำเภอเมืองมุกดาหาร, มุกดาหาร, 49000",
    "ตำบลดงเย็น, อำเภอเมืองมุกดาหาร, มุกดาหาร, 49000",
    "ตำบลดงมอน, อำเภอเมืองมุกดาหาร, มุกดาหาร, 49000",
    "ตำบลนาโสก, อำเภอเมืองมุกดาหาร, มุกดาหาร, 49000",
    "ตำบลนาสีนวน, อำเภอเมืองมุกดาหาร, มุกดาหาร, 49000",
    "ตำบลบางทรายใหญ่, อำเภอเมืองมุกดาหาร, มุกดาหาร, 49000",
    "ตำบลบ้านโคก, อำเภอเมืองมุกดาหาร, มุกดาหาร, 49000",
    "ตำบลผึ่งแดด, อำเภอเมืองมุกดาหาร, มุกดาหาร, 49000",
    "ตำบลมุกดาหาร, อำเภอเมืองมุกดาหาร, มุกดาหาร, 49000",
    "ตำบลศรีบุญเรือง, อำเภอเมืองมุกดาหาร, มุกดาหาร, 49000",
    "ตำบลเหล่าสร้างถ่อ, อำเภอคำชะอี, มุกดาหาร, 49110",
    "ตำบลโพนงาม, อำเภอคำชะอี, มุกดาหาร, 49110",
    "ตำบลคำชะอี, อำเภอคำชะอี, มุกดาหาร, 49110",
    "ตำบลคำบก, อำเภอคำชะอี, มุกดาหาร, 49110",
    "ตำบลน้ำเที่ยง, อำเภอคำชะอี, มุกดาหาร, 49110",
    "ตำบลบ้านเหล่า, อำเภอคำชะอี, มุกดาหาร, 49110",
    "ตำบลบ้านค้อ, อำเภอคำชะอี, มุกดาหาร, 49110",
    "ตำบลบ้านซ่ง, อำเภอคำชะอี, มุกดาหาร, 49110",
    "ตำบลหนองเอี่ยน, อำเภอคำชะอี, มุกดาหาร, 49110",
    "ตำบลเหล่าหมี, อำเภอดอนตาล, มุกดาหาร, 49120",
    "ตำบลโพธิ์ไทร, อำเภอดอนตาล, มุกดาหาร, 49120",
    "ตำบลดอนตาล, อำเภอดอนตาล, มุกดาหาร, 49120",
    "ตำบลนาสะเม็ง, อำเภอดอนตาล, มุกดาหาร, 49120",
    "ตำบลบ้านแก้ง, อำเภอดอนตาล, มุกดาหาร, 49120",
    "ตำบลบ้านบาก, อำเภอดอนตาล, มุกดาหาร, 49120",
    "ตำบลป่าไร่, อำเภอดอนตาล, มุกดาหาร, 49120",
    "ตำบลโชคชัย, อำเภอนิคมคำสร้อย, มุกดาหาร, 49130",
    "ตำบลกกแดง, อำเภอนิคมคำสร้อย, มุกดาหาร, 49130",
    "ตำบลนากอก, อำเภอนิคมคำสร้อย, มุกดาหาร, 49130",
    "ตำบลนาอุดม, อำเภอนิคมคำสร้อย, มุกดาหาร, 49130",
    "ตำบลนิคมคำสร้อย, อำเภอนิคมคำสร้อย, มุกดาหาร, 49130",
    "ตำบลร่มเกล้า, อำเภอนิคมคำสร้อย, มุกดาหาร, 49130",
    "ตำบลหนองแวง, อำเภอนิคมคำสร้อย, มุกดาหาร, 49130",
    "ตำบลกกตูม, อำเภอดงหลวง, มุกดาหาร, 49140",
    "ตำบลชะโนดน้อย, อำเภอดงหลวง, มุกดาหาร, 49140",
    "ตำบลดงหลวง, อำเภอดงหลวง, มุกดาหาร, 49140",
    "ตำบลพังแดง, อำเภอดงหลวง, มุกดาหาร, 49140",
    "ตำบลหนองแคน, อำเภอดงหลวง, มุกดาหาร, 49140",
    "ตำบลหนองบัว, อำเภอดงหลวง, มุกดาหาร, 49140",
    "ตำบลชะโนด, อำเภอหว้านใหญ่, มุกดาหาร, 49150",
    "ตำบลดงหมู, อำเภอหว้านใหญ่, มุกดาหาร, 49150",
    "ตำบลบางทรายน้อย, อำเภอหว้านใหญ่, มุกดาหาร, 49150",
    "ตำบลป่งขาม, อำเภอหว้านใหญ่, มุกดาหาร, 49150",
    "ตำบลหว้านใหญ่, อำเภอหว้านใหญ่, มุกดาหาร, 49150",
    "ตำบลโนนยาง, อำเภอหนองสูง, มุกดาหาร, 49160",
    "ตำบลบ้านเป้า, อำเภอหนองสูง, มุกดาหาร, 49160",
    "ตำบลภูวง, อำเภอหนองสูง, มุกดาหาร, 49160",
    "ตำบลหนองสูง, อำเภอหนองสูง, มุกดาหาร, 49160",
    "ตำบลหนองสูงเหนือ, อำเภอหนองสูง, มุกดาหาร, 49160",
    "ตำบลหนองสูงใต้, อำเภอหนองสูง, มุกดาหาร, 49160",
    "ตำบลท่าศาลา, อำเภอเมืองเชียงใหม่, เชียงใหม่, 50000",
    "ตำบลฟ้าฮ่าม, อำเภอเมืองเชียงใหม่, เชียงใหม่, 50000",
    "ตำบลวัดเกต, อำเภอเมืองเชียงใหม่, เชียงใหม่, 50000",
    "ตำบลหนองป่าครั่ง, อำเภอเมืองเชียงใหม่, เชียงใหม่, 50000",
    "ตำบลหนองหอย, อำเภอเมืองเชียงใหม่, เชียงใหม่, 50000",
    "ตำบลแม่เหียะ, อำเภอเมืองเชียงใหม่, เชียงใหม่, 50100",
    "ตำบลช้างคลาน, อำเภอเมืองเชียงใหม่, เชียงใหม่, 50100",
    "ตำบลป่าแดด, อำเภอเมืองเชียงใหม่, เชียงใหม่, 50100",
    "ตำบลหายยา, อำเภอเมืองเชียงใหม่, เชียงใหม่, 50100",
    "ตำบลเวียง, อำเภอฝาง, เชียงใหม่, 50110",
    "ตำบลแม่คะ, อำเภอฝาง, เชียงใหม่, 50110",
    "ตำบลแม่สูน, อำเภอฝาง, เชียงใหม่, 50110",
    "ตำบลโป่งน้ำร้อน, อำเภอฝาง, เชียงใหม่, 50110",
    "ตำบลม่อนปิ่น, อำเภอฝาง, เชียงใหม่, 50110",
    "ตำบลสันทราย, อำเภอฝาง, เชียงใหม่, 50110",
    "ตำบลแม่ก๊า, อำเภอสันป่าตอง, เชียงใหม่, 50120",
    "ตำบลท่าวังพร้าว, อำเภอสันป่าตอง, เชียงใหม่, 50120",
    "ตำบลทุ่งต้อม, อำเภอสันป่าตอง, เชียงใหม่, 50120",
    "ตำบลทุ่งสะโตก, อำเภอสันป่าตอง, เชียงใหม่, 50120",
    "ตำบลน้ำบ่อหลวง, อำเภอสันป่าตอง, เชียงใหม่, 50120",
    "ตำบลบ้านแม, อำเภอสันป่าตอง, เชียงใหม่, 50120",
    "ตำบลบ้านกลาง, อำเภอสันป่าตอง, เชียงใหม่, 50120",
    "ตำบลมะขามหลวง, อำเภอสันป่าตอง, เชียงใหม่, 50120",
    "ตำบลมะขุนหวาน, อำเภอสันป่าตอง, เชียงใหม่, 50120",
    "ตำบลยุหว่า, อำเภอสันป่าตอง, เชียงใหม่, 50120",
    "ตำบลสันกลาง, อำเภอสันป่าตอง, เชียงใหม่, 50120",
    "ตำบลแม่ทา, อำเภอแม่ออน, เชียงใหม่, 50130",
    "ตำบลทาเหนือ, อำเภอแม่ออน, เชียงใหม่, 50130",
    "ตำบลบ้านสหกรณ์, อำเภอแม่ออน, เชียงใหม่, 50130",
    "ตำบลห้วยแก้ว, อำเภอแม่ออน, เชียงใหม่, 50130",
    "ตำบลออนเหนือ, อำเภอแม่ออน, เชียงใหม่, 50130",
    "ตำบลออนกลาง, อำเภอแม่ออน, เชียงใหม่, 50130",
    "ตำบลแช่ช้าง, อำเภอสันกำแพง, เชียงใหม่, 50130",
    "ตำบลแม่ปูคา, อำเภอสันกำแพง, เชียงใหม่, 50130",
    "ตำบลต้นเปา, อำเภอสันกำแพง, เชียงใหม่, 50130",
    "ตำบลทรายมูล, อำเภอสันกำแพง, เชียงใหม่, 50130",
    "ตำบลบวกค้าง, อำเภอสันกำแพง, เชียงใหม่, 50130",
    "ตำบลร้องวัวแดง, อำเภอสันกำแพง, เชียงใหม่, 50130",
    "ตำบลสันกลาง, อำเภอสันกำแพง, เชียงใหม่, 50130",
    "ตำบลสันกำแพง, อำเภอสันกำแพง, เชียงใหม่, 50130",
    "ตำบลห้วยทราย, อำเภอสันกำแพง, เชียงใหม่, 50130",
    "ตำบลออนใต้, อำเภอสันกำแพง, เชียงใหม่, 50130",
    "ตำบลไชยสถาน, อำเภอสารภี, เชียงใหม่, 50140",
    "ตำบลขัวมุง, อำเภอสารภี, เชียงใหม่, 50140",
    "ตำบลชมภู, อำเภอสารภี, เชียงใหม่, 50140",
    "ตำบลดอนแก้ว, อำเภอสารภี, เชียงใหม่, 50140",
    "ตำบลท่ากว้าง, อำเภอสารภี, เชียงใหม่, 50140",
    "ตำบลท่าวังตาล, อำเภอสารภี, เชียงใหม่, 50140",
    "ตำบลป่าบง, อำเภอสารภี, เชียงใหม่, 50140",
    "ตำบลยางเนิ้ง, อำเภอสารภี, เชียงใหม่, 50140",
    "ตำบลสันทราย, อำเภอสารภี, เชียงใหม่, 50140",
    "ตำบลสารภี, อำเภอสารภี, เชียงใหม่, 50140",
    "ตำบลหนองแฝก, อำเภอสารภี, เชียงใหม่, 50140",
    "ตำบลหนองผึ้ง, อำเภอสารภี, เชียงใหม่, 50140",
    "ตำบลเมืองก๋าย, อำเภอแม่แตง, เชียงใหม่, 50150",
    "ตำบลแม่แตง, อำเภอแม่แตง, เชียงใหม่, 50150",
    "ตำบลแม่หอพระ, อำเภอแม่แตง, เชียงใหม่, 50150",
    "ตำบลกื้ดช้าง, อำเภอแม่แตง, เชียงใหม่, 50150",
    "ตำบลขี้เหล็ก, อำเภอแม่แตง, เชียงใหม่, 50150",
    "ตำบลช่อแล, อำเภอแม่แตง, เชียงใหม่, 50150",
    "ตำบลบ้านเป้า, อำเภอแม่แตง, เชียงใหม่, 50150",
    "ตำบลบ้านช้าง, อำเภอแม่แตง, เชียงใหม่, 50150",
    "ตำบลป่าแป๋, อำเภอแม่แตง, เชียงใหม่, 50150",
    "ตำบลสบเปิง, อำเภอแม่แตง, เชียงใหม่, 50150",
    "ตำบลสมก๋าย, อำเภอแม่แตง, เชียงใหม่, 50150",
    "ตำบลสันมหาพน, อำเภอแม่แตง, เชียงใหม่, 50150",
    "ตำบลอินทขิล, อำเภอแม่แตง, เชียงใหม่, 50150",
    "ตำบลข่วงเปา, อำเภอจอมทอง, เชียงใหม่, 50160",
    "ตำบลดอยแก้ว, อำเภอจอมทอง, เชียงใหม่, 50160",
    "ตำบลบ้านหลวง, อำเภอจอมทอง, เชียงใหม่, 50160",
    "ตำบลสบเตี๊ยะ, อำเภอจอมทอง, เชียงใหม่, 50160",
    "ตำบลดอยหล่อ, อำเภอดอยหล่อ, เชียงใหม่, 50160",
    "ตำบลยางคราม, อำเภอดอยหล่อ, เชียงใหม่, 50160",
    "ตำบลสองแคว, อำเภอดอยหล่อ, เชียงใหม่, 50160",
    "ตำบลสันติสุข, อำเภอดอยหล่อ, เชียงใหม่, 50160",
    "ตำบลเชียงดาว, อำเภอเชียงดาว, เชียงใหม่, 50170",
    "ตำบลเมืองคอง, อำเภอเชียงดาว, เชียงใหม่, 50170",
    "ตำบลเมืองงาย, อำเภอเชียงดาว, เชียงใหม่, 50170",
    "ตำบลเมืองนะ, อำเภอเชียงดาว, เชียงใหม่, 50170",
    "ตำบลแม่นะ, อำเภอเชียงดาว, เชียงใหม่, 50170",
    "ตำบลทุ่งข้าวพวง, อำเภอเชียงดาว, เชียงใหม่, 50170",
    "ตำบลปิงโค้ง, อำเภอเชียงดาว, เชียงใหม่, 50170",
    "ตำบลเหมืองแก้ว, อำเภอแม่ริม, เชียงใหม่, 50180",
    "ตำบลแม่แรม, อำเภอแม่ริม, เชียงใหม่, 50180",
    "ตำบลแม่สา, อำเภอแม่ริม, เชียงใหม่, 50180",
    "ตำบลโป่งแยง, อำเภอแม่ริม, เชียงใหม่, 50180",
    "ตำบลขี้เหล็ก, อำเภอแม่ริม, เชียงใหม่, 50180",
    "ตำบลดอนแก้ว, อำเภอแม่ริม, เชียงใหม่, 50180",
    "ตำบลริมเหนือ, อำเภอแม่ริม, เชียงใหม่, 50180",
    "ตำบลริมใต้, อำเภอแม่ริม, เชียงใหม่, 50180",
    "ตำบลสันโป่ง, อำเภอแม่ริม, เชียงใหม่, 50180",
    "ตำบลห้วยทราย, อำเภอแม่ริม, เชียงใหม่, 50180",
    "ตำบลเขื่อนผาก, อำเภอพร้าว, เชียงใหม่, 50190",
    "ตำบลเวียง, อำเภอพร้าว, เชียงใหม่, 50190",
    "ตำบลแม่แวน, อำเภอพร้าว, เชียงใหม่, 50190",
    "ตำบลแม่ปั๋ง, อำเภอพร้าว, เชียงใหม่, 50190",
    "ตำบลโหล่งขอด, อำเภอพร้าว, เชียงใหม่, 50190",
    "ตำบลทุ่งหลวง, อำเภอพร้าว, เชียงใหม่, 50190",
    "ตำบลน้ำแพร่, อำเภอพร้าว, เชียงใหม่, 50190",
    "ตำบลบ้านโป่ง, อำเภอพร้าว, เชียงใหม่, 50190",
    "ตำบลป่าไหน่, อำเภอพร้าว, เชียงใหม่, 50190",
    "ตำบลป่าตุ้ม, อำเภอพร้าว, เชียงใหม่, 50190",
    "ตำบลสันทราย, อำเภอพร้าว, เชียงใหม่, 50190",
    "ตำบลพระสิงห์, อำเภอเมืองเชียงใหม่, เชียงใหม่, 50200",
    "ตำบลศรีภูมิ, อำเภอเมืองเชียงใหม่, เชียงใหม่, 50200",
    "ตำบลสุเทพ, อำเภอเมืองเชียงใหม่, เชียงใหม่, 50200",
    "ตำบลเมืองเล็น, อำเภอสันทราย, เชียงใหม่, 50210",
    "ตำบลป่าไผ่, อำเภอสันทราย, เชียงใหม่, 50210",
    "ตำบลสันทรายน้อย, อำเภอสันทราย, เชียงใหม่, 50210",
    "ตำบลสันทรายหลวง, อำเภอสันทราย, เชียงใหม่, 50210",
    "ตำบลสันนาเม็ง, อำเภอสันทราย, เชียงใหม่, 50210",
    "ตำบลสันป่าเปา, อำเภอสันทราย, เชียงใหม่, 50210",
    "ตำบลสันพระเนตร, อำเภอสันทราย, เชียงใหม่, 50210",
    "ตำบลหนองแหย่ง, อำเภอสันทราย, เชียงใหม่, 50210",
    "ตำบลหนองจ๊อม, อำเภอสันทราย, เชียงใหม่, 50210",
    "ตำบลเชิงดอย, อำเภอดอยสะเก็ด, เชียงใหม่, 50220",
    "ตำบลเทพเสด็จ, อำเภอดอยสะเก็ด, เชียงใหม่, 50220",
    "ตำบลแม่โป่ง, อำเภอดอยสะเก็ด, เชียงใหม่, 50220",
    "ตำบลแม่คือ, อำเภอดอยสะเก็ด, เชียงใหม่, 50220",
    "ตำบลแม่ฮ้อยเงิน, อำเภอดอยสะเก็ด, เชียงใหม่, 50220",
    "ตำบลตลาดใหญ่, อำเภอดอยสะเก็ด, เชียงใหม่, 50220",
    "ตำบลตลาดขวัญ, อำเภอดอยสะเก็ด, เชียงใหม่, 50220",
    "ตำบลป่าเมี่ยง, อำเภอดอยสะเก็ด, เชียงใหม่, 50220",
    "ตำบลป่าป้อง, อำเภอดอยสะเก็ด, เชียงใหม่, 50220",
    "ตำบลป่าลาน, อำเภอดอยสะเก็ด, เชียงใหม่, 50220",
    "ตำบลลวงเหนือ, อำเภอดอยสะเก็ด, เชียงใหม่, 50220",
    "ตำบลสง่าบ้าน, อำเภอดอยสะเก็ด, เชียงใหม่, 50220",
    "ตำบลสันปูเลย, อำเภอดอยสะเก็ด, เชียงใหม่, 50220",
    "ตำบลสำราญราษฎร์, อำเภอดอยสะเก็ด, เชียงใหม่, 50220",
    "ตำบลขุนคง, อำเภอหางดง, เชียงใหม่, 50230",
    "ตำบลน้ำแพร่, อำเภอหางดง, เชียงใหม่, 50230",
    "ตำบลบ้านแหวน, อำเภอหางดง, เชียงใหม่, 50230",
    "ตำบลบ้านปง, อำเภอหางดง, เชียงใหม่, 50230",
    "ตำบลสบแม่ข่า, อำเภอหางดง, เชียงใหม่, 50230",
    "ตำบลสันผักหวาน, อำเภอหางดง, เชียงใหม่, 50230",
    "ตำบลหนองแก๋ว, อำเภอหางดง, เชียงใหม่, 50230",
    "ตำบลหนองควาย, อำเภอหางดง, เชียงใหม่, 50230",
    "ตำบลหางดง, อำเภอหางดง, เชียงใหม่, 50230",
    "ตำบลหารแก้ว, อำเภอหางดง, เชียงใหม่, 50230",
    "ตำบลแม่สอย, อำเภอจอมทอง, เชียงใหม่, 50240",
    "ตำบลบ้านแปะ, อำเภอจอมทอง, เชียงใหม่, 50240",
    "ตำบลนาคอเรือ, อำเภอฮอด, เชียงใหม่, 50240",
    "ตำบลบ่อสลี, อำเภอฮอด, เชียงใหม่, 50240",
    "ตำบลบ่อหลวง, อำเภอฮอด, เชียงใหม่, 50240",
    "ตำบลบ้านตาล, อำเภอฮอด, เชียงใหม่, 50240",
    "ตำบลหางดง, อำเภอฮอด, เชียงใหม่, 50240",
    "ตำบลฮอด, อำเภอฮอด, เชียงใหม่, 50240",
    "ตำบลแม่สาบ, อำเภอสะเมิง, เชียงใหม่, 50250",
    "ตำบลบ่อแก้ว, อำเภอสะเมิง, เชียงใหม่, 50250",
    "ตำบลยั้งเมิน, อำเภอสะเมิง, เชียงใหม่, 50250",
    "ตำบลสะเมิงเหนือ, อำเภอสะเมิง, เชียงใหม่, 50250",
    "ตำบลสะเมิงใต้, อำเภอสะเมิง, เชียงใหม่, 50250",
    "ตำบลโปงทุ่ง, อำเภอดอยเต่า, เชียงใหม่, 50260",
    "ตำบลดอยเต่า, อำเภอดอยเต่า, เชียงใหม่, 50260",
    "ตำบลท่าเดื่อ, อำเภอดอยเต่า, เชียงใหม่, 50260",
    "ตำบลบงตัน, อำเภอดอยเต่า, เชียงใหม่, 50260",
    "ตำบลบ้านแอ่น, อำเภอดอยเต่า, เชียงใหม่, 50260",
    "ตำบลมืดกา, อำเภอดอยเต่า, เชียงใหม่, 50260",
    "ตำบลแม่นาจร, อำเภอแม่แจ่ม, เชียงใหม่, 50270",
    "ตำบลแม่ศึก, อำเภอแม่แจ่ม, เชียงใหม่, 50270",
    "ตำบลกองแขก, อำเภอแม่แจ่ม, เชียงใหม่, 50270",
    "ตำบลช่างเคิ่ง, อำเภอแม่แจ่ม, เชียงใหม่, 50270",
    "ตำบลท่าผา, อำเภอแม่แจ่ม, เชียงใหม่, 50270",
    "ตำบลบ้านทับ, อำเภอแม่แจ่ม, เชียงใหม่, 50270",
    "ตำบลปางหินฝน, อำเภอแม่แจ่ม, เชียงใหม่, 50270",
    "ตำบลแม่นาวาง, อำเภอแม่อาย, เชียงใหม่, 50280",
    "ตำบลแม่สาว, อำเภอแม่อาย, เชียงใหม่, 50280",
    "ตำบลแม่อาย, อำเภอแม่อาย, เชียงใหม่, 50280",
    "ตำบลท่าตอน, อำเภอแม่อาย, เชียงใหม่, 50280",
    "ตำบลบ้านหลวง, อำเภอแม่อาย, เชียงใหม่, 50280",
    "ตำบลมะลิกา, อำเภอแม่อาย, เชียงใหม่, 50280",
    "ตำบลสันต้นหมื้อ, อำเภอแม่อาย, เชียงใหม่, 50280",
    "ตำบลแม่แฝก, อำเภอสันทราย, เชียงใหม่, 50290",
    "ตำบลแม่แฝกใหม่, อำเภอสันทราย, เชียงใหม่, 50290",
    "ตำบลหนองหาร, อำเภอสันทราย, เชียงใหม่, 50290",
    "ตำบลช้างเผือก, อำเภอเมืองเชียงใหม่, เชียงใหม่, 50300",
    "ตำบลช้างม่อย, อำเภอเมืองเชียงใหม่, เชียงใหม่, 50300",
    "ตำบลป่าตัน, อำเภอเมืองเชียงใหม่, เชียงใหม่, 50300",
    "ตำบลสันผีเสื้อ, อำเภอเมืองเชียงใหม่, เชียงใหม่, 50300",
    "ตำบลแม่ตื่น, อำเภออมก๋อย, เชียงใหม่, 50310",
    "ตำบลนาเกียน, อำเภออมก๋อย, เชียงใหม่, 50310",
    "ตำบลม่อนจอง, อำเภออมก๋อย, เชียงใหม่, 50310",
    "ตำบลยางเปียง, อำเภออมก๋อย, เชียงใหม่, 50310",
    "ตำบลสบโขง, อำเภออมก๋อย, เชียงใหม่, 50310",
    "ตำบลอมก๋อย, อำเภออมก๋อย, เชียงใหม่, 50310",
    "ตำบลแม่ทะลบ, อำเภอไชยปราการ, เชียงใหม่, 50320",
    "ตำบลปงตำ, อำเภอไชยปราการ, เชียงใหม่, 50320",
    "ตำบลศรีดงเย็น, อำเภอไชยปราการ, เชียงใหม่, 50320",
    "ตำบลหนองบัว, อำเภอไชยปราการ, เชียงใหม่, 50320",
    "ตำบลแม่ข่า, อำเภอฝาง, เชียงใหม่, 50320",
    "ตำบลแม่งอน, อำเภอฝาง, เชียงใหม่, 50320",
    "ตำบลสันป่ายาง, อำเภอแม่แตง, เชียงใหม่, 50330",
    "ตำบลสะลวง, อำเภอแม่ริม, เชียงใหม่, 50330",
    "ตำบลหนองตอง, อำเภอหางดง, เชียงใหม่, 50340",
    "ตำบลเปียงหลวง, อำเภอเวียงแหง, เชียงใหม่, 50350",
    "ตำบลเมืองแหง, อำเภอเวียงแหง, เชียงใหม่, 50350",
    "ตำบลแสนไห, อำเภอเวียงแหง, เชียงใหม่, 50350",
    "ตำบลแม่วิน, อำเภอแม่วาง, เชียงใหม่, 50360",
    "ตำบลดอนเปา, อำเภอแม่วาง, เชียงใหม่, 50360",
    "ตำบลทุ่งปี๊, อำเภอแม่วาง, เชียงใหม่, 50360",
    "ตำบลทุ่งรวงทอง, อำเภอแม่วาง, เชียงใหม่, 50360",
    "ตำบลบ้านกาด, อำเภอแม่วาง, เชียงใหม่, 50360",
    "ตำบลเวียงยอง, อำเภอเมืองลำพูน, ลำพูน, 51000",
    "ตำบลเหมืองง่า, อำเภอเมืองลำพูน, ลำพูน, 51000",
    "ตำบลเหมืองจี้, อำเภอเมืองลำพูน, ลำพูน, 51000",
    "ตำบลในเมือง, อำเภอเมืองลำพูน, ลำพูน, 51000",
    "ตำบลต้นธง, อำเภอเมืองลำพูน, ลำพูน, 51000",
    "ตำบลบ้านแป้น, อำเภอเมืองลำพูน, ลำพูน, 51000",
    "ตำบลบ้านกลาง, อำเภอเมืองลำพูน, ลำพูน, 51000",
    "ตำบลประตูป่า, อำเภอเมืองลำพูน, ลำพูน, 51000",
    "ตำบลป่าสัก, อำเภอเมืองลำพูน, ลำพูน, 51000",
    "ตำบลมะเขือแจ้, อำเภอเมืองลำพูน, ลำพูน, 51000",
    "ตำบลริมปิง, อำเภอเมืองลำพูน, ลำพูน, 51000",
    "ตำบลศรีบัวบาน, อำเภอเมืองลำพูน, ลำพูน, 51000",
    "ตำบลหนองหนาม, อำเภอเมืองลำพูน, ลำพูน, 51000",
    "ตำบลแม่ตืน, อำเภอลี้, ลำพูน, 51110",
    "ตำบลแม่ลาน, อำเภอลี้, ลำพูน, 51110",
    "ตำบลก้อ, อำเภอลี้, ลำพูน, 51110",
    "ตำบลดงดำ, อำเภอลี้, ลำพูน, 51110",
    "ตำบลนาทราย, อำเภอลี้, ลำพูน, 51110",
    "ตำบลป่าไผ่, อำเภอลี้, ลำพูน, 51110",
    "ตำบลลี้, อำเภอลี้, ลำพูน, 51110",
    "ตำบลศรีวิชัย, อำเภอลี้, ลำพูน, 51110",
    "ตำบลวังผาง, อำเภอเวียงหนองล่อง, ลำพูน, 51120",
    "ตำบลหนองยวง, อำเภอเวียงหนองล่อง, ลำพูน, 51120",
    "ตำบลหนองล่อง, อำเภอเวียงหนองล่อง, ลำพูน, 51120",
    "ตำบลแม่แรง, อำเภอป่าซาง, ลำพูน, 51120",
    "ตำบลท่าตุ้ม, อำเภอป่าซาง, ลำพูน, 51120",
    "ตำบลนครเจดีย์, อำเภอป่าซาง, ลำพูน, 51120",
    "ตำบลน้ำดิบ, อำเภอป่าซาง, ลำพูน, 51120",
    "ตำบลบ้านเรือน, อำเภอป่าซาง, ลำพูน, 51120",
    "ตำบลปากบ่อง, อำเภอป่าซาง, ลำพูน, 51120",
    "ตำบลป่าซาง, อำเภอป่าซาง, ลำพูน, 51120",
    "ตำบลม่วงน้อย, อำเภอป่าซาง, ลำพูน, 51120",
    "ตำบลมะกอก, อำเภอป่าซาง, ลำพูน, 51120",
    "ตำบลเหล่ายาว, อำเภอบ้านโฮ่ง, ลำพูน, 51130",
    "ตำบลบ้านโฮ่ง, อำเภอบ้านโฮ่ง, ลำพูน, 51130",
    "ตำบลป่าพลู, อำเภอบ้านโฮ่ง, ลำพูน, 51130",
    "ตำบลศรีเตี้ย, อำเภอบ้านโฮ่ง, ลำพูน, 51130",
    "ตำบลหนองปลาสะวาย, อำเภอบ้านโฮ่ง, ลำพูน, 51130",
    "ตำบลทาปลาดุก, อำเภอแม่ทา, ลำพูน, 51140",
    "ตำบลทาสบเส้า, อำเภอแม่ทา, ลำพูน, 51140",
    "ตำบลหนองช้างคืน, อำเภอเมืองลำพูน, ลำพูน, 51150",
    "ตำบลอุโมงค์, อำเภอเมืองลำพูน, ลำพูน, 51150",
    "ตำบลตะเคียนปม, อำเภอทุ่งหัวช้าง, ลำพูน, 51160",
    "ตำบลทุ่งหัวช้าง, อำเภอทุ่งหัวช้าง, ลำพูน, 51160",
    "ตำบลบ้านปวง, อำเภอทุ่งหัวช้าง, ลำพูน, 51160",
    "ตำบลทาแม่ลอบ, อำเภอแม่ทา, ลำพูน, 51170",
    "ตำบลทากาศ, อำเภอแม่ทา, ลำพูน, 51170",
    "ตำบลทาขุมเงิน, อำเภอแม่ทา, ลำพูน, 51170",
    "ตำบลทาทุ่งหลวง, อำเภอแม่ทา, ลำพูน, 51170",
    "ตำบลบ้านธิ, อำเภอบ้านธิ, ลำพูน, 51180",
    "ตำบลห้วยยาบ, อำเภอบ้านธิ, ลำพูน, 51180",
    "ตำบลเวียงเหนือ, อำเภอเมืองลำปาง, ลำปาง, 52000",
    "ตำบลกล้วยแพะ, อำเภอเมืองลำปาง, ลำปาง, 52000",
    "ตำบลต้นธงชัย, อำเภอเมืองลำปาง, ลำปาง, 52000",
    "ตำบลทุ่งฝาย, อำเภอเมืองลำปาง, ลำปาง, 52000",
    "ตำบลนิคมพัฒนา, อำเภอเมืองลำปาง, ลำปาง, 52000",
    "ตำบลบ้านเสด็จ, อำเภอเมืองลำปาง, ลำปาง, 52000",
    "ตำบลบ้านแลง, อำเภอเมืองลำปาง, ลำปาง, 52000",
    "ตำบลบุญนาคพัฒนา, อำเภอเมืองลำปาง, ลำปาง, 52000",
    "ตำบลพระบาท, อำเภอเมืองลำปาง, ลำปาง, 52000",
    "ตำบลพิชัย, อำเภอเมืองลำปาง, ลำปาง, 52000",
    "ตำบลหัวเวียง, อำเภอเมืองลำปาง, ลำปาง, 52000",
    "ตำบลชมพู, อำเภอเมืองลำปาง, ลำปาง, 52100",
    "ตำบลบ่อแฮ้ว, อำเภอเมืองลำปาง, ลำปาง, 52100",
    "ตำบลบ้านเป้า, อำเภอเมืองลำปาง, ลำปาง, 52100",
    "ตำบลบ้านเอื้อม, อำเภอเมืองลำปาง, ลำปาง, 52100",
    "ตำบลบ้านค่า, อำเภอเมืองลำปาง, ลำปาง, 52100",
    "ตำบลปงแสนทอง, อำเภอเมืองลำปาง, ลำปาง, 52100",
    "ตำบลสบตุ๋ย, อำเภอเมืองลำปาง, ลำปาง, 52100",
    "ตำบลสวนดอก, อำเภอเมืองลำปาง, ลำปาง, 52100",
    "ตำบลแม่ตีบ, อำเภองาว, ลำปาง, 52110",
    "ตำบลนาแก, อำเภองาว, ลำปาง, 52110",
    "ตำบลบ้านแหง, อำเภองาว, ลำปาง, 52110",
    "ตำบลบ้านโป่ง, อำเภองาว, ลำปาง, 52110",
    "ตำบลบ้านร้อง, อำเภองาว, ลำปาง, 52110",
    "ตำบลบ้านหวด, อำเภองาว, ลำปาง, 52110",
    "ตำบลบ้านอ้อน, อำเภองาว, ลำปาง, 52110",
    "ตำบลปงเตา, อำเภองาว, ลำปาง, 52110",
    "ตำบลหลวงเหนือ, อำเภองาว, ลำปาง, 52110",
    "ตำบลหลวงใต้, อำเภองาว, ลำปาง, 52110",
    "ตำบลเมืองมาย, อำเภอแจ้ห่ม, ลำปาง, 52120",
    "ตำบลแจ้ห่ม, อำเภอแจ้ห่ม, ลำปาง, 52120",
    "ตำบลแม่สุก, อำเภอแจ้ห่ม, ลำปาง, 52120",
    "ตำบลทุ่งผึ้ง, อำเภอแจ้ห่ม, ลำปาง, 52120",
    "ตำบลบ้านสา, อำเภอแจ้ห่ม, ลำปาง, 52120",
    "ตำบลปงดอน, อำเภอแจ้ห่ม, ลำปาง, 52120",
    "ตำบลวิเชตนคร, อำเภอแจ้ห่ม, ลำปาง, 52120",
    "ตำบลเกาะคา, อำเภอเกาะคา, ลำปาง, 52130",
    "ตำบลใหม่พัฒนา, อำเภอเกาะคา, ลำปาง, 52130",
    "ตำบลไหล่หิน, อำเภอเกาะคา, ลำปาง, 52130",
    "ตำบลท่าผา, อำเภอเกาะคา, ลำปาง, 52130",
    "ตำบลนาแก้ว, อำเภอเกาะคา, ลำปาง, 52130",
    "ตำบลนาแส่ง, อำเภอเกาะคา, ลำปาง, 52130",
    "ตำบลลำปางหลวง, อำเภอเกาะคา, ลำปาง, 52130",
    "ตำบลวังพร้าว, อำเภอเกาะคา, ลำปาง, 52130",
    "ตำบลศาลา, อำเภอเกาะคา, ลำปาง, 52130",
    "ตำบลทุ่งฮั้ว, อำเภอวังเหนือ, ลำปาง, 52140",
    "ตำบลร่องเคาะ, อำเภอวังเหนือ, ลำปาง, 52140",
    "ตำบลวังเหนือ, อำเภอวังเหนือ, ลำปาง, 52140",
    "ตำบลวังแก้ว, อำเภอวังเหนือ, ลำปาง, 52140",
    "ตำบลวังใต้, อำเภอวังเหนือ, ลำปาง, 52140",
    "ตำบลวังซ้าย, อำเภอวังเหนือ, ลำปาง, 52140",
    "ตำบลวังทรายคำ, อำเภอวังเหนือ, ลำปาง, 52140",
    "ตำบลวังทอง, อำเภอวังเหนือ, ลำปาง, 52140",
    "ตำบลแม่ทะ, อำเภอแม่ทะ, ลำปาง, 52150",
    "ตำบลดอนไฟ, อำเภอแม่ทะ, ลำปาง, 52150",
    "ตำบลนาครัว, อำเภอแม่ทะ, ลำปาง, 52150",
    "ตำบลน้ำโจ้, อำเภอแม่ทะ, ลำปาง, 52150",
    "ตำบลบ้านกิ่ว, อำเภอแม่ทะ, ลำปาง, 52150",
    "ตำบลบ้านบอม, อำเภอแม่ทะ, ลำปาง, 52150",
    "ตำบลป่าตัน, อำเภอแม่ทะ, ลำปาง, 52150",
    "ตำบลวังเงิน, อำเภอแม่ทะ, ลำปาง, 52150",
    "ตำบลสันดอนแก้ว, อำเภอแม่ทะ, ลำปาง, 52150",
    "ตำบลหัวเสือ, อำเภอแม่ทะ, ลำปาง, 52150",
    "ตำบลเถินบุรี, อำเภอเถิน, ลำปาง, 52160",
    "ตำบลเวียงมอก, อำเภอเถิน, ลำปาง, 52160",
    "ตำบลแม่ถอด, อำเภอเถิน, ลำปาง, 52160",
    "ตำบลแม่ปะ, อำเภอเถิน, ลำปาง, 52160",
    "ตำบลแม่มอก, อำเภอเถิน, ลำปาง, 52160",
    "ตำบลนาโป่ง, อำเภอเถิน, ลำปาง, 52160",
    "ตำบลล้อมแรด, อำเภอเถิน, ลำปาง, 52160",
    "ตำบลแม่กัวะ, อำเภอสบปราบ, ลำปาง, 52170",
    "ตำบลนายาง, อำเภอสบปราบ, ลำปาง, 52170",
    "ตำบลสบปราบ, อำเภอสบปราบ, ลำปาง, 52170",
    "ตำบลสมัย, อำเภอสบปราบ, ลำปาง, 52170",
    "ตำบลแม่ปุ, อำเภอแม่พริก, ลำปาง, 52180",
    "ตำบลแม่พริก, อำเภอแม่พริก, ลำปาง, 52180",
    "ตำบลผาปัง, อำเภอแม่พริก, ลำปาง, 52180",
    "ตำบลพระบาทวังตวง, อำเภอแม่พริก, ลำปาง, 52180",
    "ตำบลเมืองยาว, อำเภอห้างฉัตร, ลำปาง, 52190",
    "ตำบลเวียงตาล, อำเภอห้างฉัตร, ลำปาง, 52190",
    "ตำบลแม่สัน, อำเภอห้างฉัตร, ลำปาง, 52190",
    "ตำบลปงยางคก, อำเภอห้างฉัตร, ลำปาง, 52190",
    "ตำบลวอแก้ว, อำเภอห้างฉัตร, ลำปาง, 52190",
    "ตำบลหนองหล่ม, อำเภอห้างฉัตร, ลำปาง, 52190",
    "ตำบลห้างฉัตร, อำเภอห้างฉัตร, ลำปาง, 52190",
    "ตำบลเสริมกลาง, อำเภอเสริมงาม, ลำปาง, 52210",
    "ตำบลเสริมขวา, อำเภอเสริมงาม, ลำปาง, 52210",
    "ตำบลเสริมซ้าย, อำเภอเสริมงาม, ลำปาง, 52210",
    "ตำบลทุ่งงาม, อำเภอเสริมงาม, ลำปาง, 52210",
    "ตำบลแม่เมาะ, อำเภอแม่เมาะ, ลำปาง, 52220",
    "ตำบลจางเหนือ, อำเภอแม่เมาะ, ลำปาง, 52220",
    "ตำบลนาสัก, อำเภอแม่เมาะ, ลำปาง, 52220",
    "ตำบลบ้านดง, อำเภอแม่เมาะ, ลำปาง, 52220",
    "ตำบลสบป้าด, อำเภอแม่เมาะ, ลำปาง, 52220",
    "ตำบลแม่วะ, อำเภอเถิน, ลำปาง, 52230",
    "ตำบลเมืองปาน, อำเภอเมืองปาน, ลำปาง, 52240",
    "ตำบลแจ้ซ้อน, อำเภอเมืองปาน, ลำปาง, 52240",
    "ตำบลทุ่งกว๋าว, อำเภอเมืองปาน, ลำปาง, 52240",
    "ตำบลบ้านขอ, อำเภอเมืองปาน, ลำปาง, 52240",
    "ตำบลหัวเมือง, อำเภอเมืองปาน, ลำปาง, 52240",
    "ตำบลแสนตอ, อำเภอเมืองอุตรดิตถ์, อุตรดิตถ์, 53000",
    "ตำบลขุนฝาง, อำเภอเมืองอุตรดิตถ์, อุตรดิตถ์, 53000",
    "ตำบลคุ้งตะเภา, อำเภอเมืองอุตรดิตถ์, อุตรดิตถ์, 53000",
    "ตำบลงิ้วงาม, อำเภอเมืองอุตรดิตถ์, อุตรดิตถ์, 53000",
    "ตำบลถ้ำฉลอง, อำเภอเมืองอุตรดิตถ์, อุตรดิตถ์, 53000",
    "ตำบลท่าเสา, อำเภอเมืองอุตรดิตถ์, อุตรดิตถ์, 53000",
    "ตำบลท่าอิฐ, อำเภอเมืองอุตรดิตถ์, อุตรดิตถ์, 53000",
    "ตำบลน้ำริด, อำเภอเมืองอุตรดิตถ์, อุตรดิตถ์, 53000",
    "ตำบลบ้านเกาะ, อำเภอเมืองอุตรดิตถ์, อุตรดิตถ์, 53000",
    "ตำบลบ้านด่าน, อำเภอเมืองอุตรดิตถ์, อุตรดิตถ์, 53000",
    "ตำบลบ้านด่านนาขาม, อำเภอเมืองอุตรดิตถ์, อุตรดิตถ์, 53000",
    "ตำบลป่าเซ่า, อำเภอเมืองอุตรดิตถ์, อุตรดิตถ์, 53000",
    "ตำบลผาจุก, อำเภอเมืองอุตรดิตถ์, อุตรดิตถ์, 53000",
    "ตำบลวังดิน, อำเภอเมืองอุตรดิตถ์, อุตรดิตถ์, 53000",
    "ตำบลหาดกรวด, อำเภอเมืองอุตรดิตถ์, อุตรดิตถ์, 53000",
    "ตำบลหาดงิ้ว, อำเภอเมืองอุตรดิตถ์, อุตรดิตถ์, 53000",
    "ตำบลท่าแฝก, อำเภอท่าปลา, อุตรดิตถ์, 53110",
    "ตำบลเด่นเหล็ก, อำเภอน้ำปาด, อุตรดิตถ์, 53110",
    "ตำบลแสนตอ, อำเภอน้ำปาด, อุตรดิตถ์, 53110",
    "ตำบลน้ำไคร้, อำเภอน้ำปาด, อุตรดิตถ์, 53110",
    "ตำบลน้ำไผ่, อำเภอน้ำปาด, อุตรดิตถ์, 53110",
    "ตำบลบ้านฝาย, อำเภอน้ำปาด, อุตรดิตถ์, 53110",
    "ตำบลห้วยมุ่น, อำเภอน้ำปาด, อุตรดิตถ์, 53110",
    "ตำบลในเมือง, อำเภอพิชัย, อุตรดิตถ์, 53120",
    "ตำบลไร่อ้อย, อำเภอพิชัย, อุตรดิตถ์, 53120",
    "ตำบลคอรุม, อำเภอพิชัย, อุตรดิตถ์, 53120",
    "ตำบลท่ามะเฟือง, อำเภอพิชัย, อุตรดิตถ์, 53120",
    "ตำบลนายาง, อำเภอพิชัย, อุตรดิตถ์, 53120",
    "ตำบลนาอิน, อำเภอพิชัย, อุตรดิตถ์, 53120",
    "ตำบลบ้านโคน, อำเภอพิชัย, อุตรดิตถ์, 53120",
    "ตำบลบ้านหม้อ, อำเภอพิชัย, อุตรดิตถ์, 53120",
    "ตำบลพญาแมน, อำเภอพิชัย, อุตรดิตถ์, 53120",
    "ตำบลแม่พูล, อำเภอลับแล, อุตรดิตถ์, 53130",
    "ตำบลชัยจุมพล, อำเภอลับแล, อุตรดิตถ์, 53130",
    "ตำบลนานกกก, อำเภอลับแล, อุตรดิตถ์, 53130",
    "ตำบลฝายหลวง, อำเภอลับแล, อุตรดิตถ์, 53130",
    "ตำบลศรีพนมมาศ, อำเภอลับแล, อุตรดิตถ์, 53130",
    "ตำบลข่อยสูง, อำเภอตรอน, อุตรดิตถ์, 53140",
    "ตำบลน้ำอ่าง, อำเภอตรอน, อุตรดิตถ์, 53140",
    "ตำบลบ้านแก่ง, อำเภอตรอน, อุตรดิตถ์, 53140",
    "ตำบลวังแดง, อำเภอตรอน, อุตรดิตถ์, 53140",
    "ตำบลหาดสองแคว, อำเภอตรอน, อุตรดิตถ์, 53140",
    "ตำบลจริม, อำเภอท่าปลา, อุตรดิตถ์, 53150",
    "ตำบลท่าปลา, อำเภอท่าปลา, อุตรดิตถ์, 53150",
    "ตำบลนางพญา, อำเภอท่าปลา, อุตรดิตถ์, 53150",
    "ตำบลน้ำหมัน, อำเภอท่าปลา, อุตรดิตถ์, 53150",
    "ตำบลหาดล้า, อำเภอท่าปลา, อุตรดิตถ์, 53150",
    "ตำบลบ้านเสี้ยว, อำเภอฟากท่า, อุตรดิตถ์, 53160",
    "ตำบลฟากท่า, อำเภอฟากท่า, อุตรดิตถ์, 53160",
    "ตำบลสองคอน, อำเภอฟากท่า, อุตรดิตถ์, 53160",
    "ตำบลสองห้อง, อำเภอฟากท่า, อุตรดิตถ์, 53160",
    "ตำบลวังกะพี้, อำเภอเมืองอุตรดิตถ์, อุตรดิตถ์, 53170",
    "ตำบลนาขุม, อำเภอบ้านโคก, อุตรดิตถ์, 53180",
    "ตำบลบ่อเบี้ย, อำเภอบ้านโคก, อุตรดิตถ์, 53180",
    "ตำบลบ้านโคก, อำเภอบ้านโคก, อุตรดิตถ์, 53180",
    "ตำบลม่วงเจ็ดต้น, อำเภอบ้านโคก, อุตรดิตถ์, 53180",
    "ตำบลผาเลือด, อำเภอท่าปลา, อุตรดิตถ์, 53190",
    "ตำบลร่วมจิต, อำเภอท่าปลา, อุตรดิตถ์, 53190",
    "ตำบลไผ่ล้อม, อำเภอลับแล, อุตรดิตถ์, 53210",
    "ตำบลด่านแม่คำมัน, อำเภอลับแล, อุตรดิตถ์, 53210",
    "ตำบลทุ่งยั้ง, อำเภอลับแล, อุตรดิตถ์, 53210",
    "ตำบลท่าสัก, อำเภอพิชัย, อุตรดิตถ์, 53220",
    "ตำบลบ้านดารา, อำเภอพิชัย, อุตรดิตถ์, 53220",
    "ตำบลน้ำพี้, อำเภอทองแสนขัน, อุตรดิตถ์, 53230",
    "ตำบลบ่อทอง, อำเภอทองแสนขัน, อุตรดิตถ์, 53230",
    "ตำบลป่าคาย, อำเภอทองแสนขัน, อุตรดิตถ์, 53230",
    "ตำบลผักขวง, อำเภอทองแสนขัน, อุตรดิตถ์, 53230",
    "ตำบลเหมืองหม้อ, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลแม่คำมี, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลแม่ยม, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลแม่หล่าย, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลในเวียง, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลกาญจนา, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลช่อแฮ, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลท่าข้าม, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลทุ่งโฮ้ง, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลทุ่งกวาว, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลนาจักร, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลน้ำชำ, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลบ้านถิ่น, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลป่าแดง, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลป่าแมต, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลร่องฟอง, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลวังธง, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลวังหงส์, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลสวนเขื่อน, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลห้วยม้า, อำเภอเมืองแพร่, แพร่, 54000",
    "ตำบลเวียงทอง, อำเภอสูงเม่น, แพร่, 54000",
    "ตำบลเด่นชัย, อำเภอเด่นชัย, แพร่, 54110",
    "ตำบลแม่จั๊วะ, อำเภอเด่นชัย, แพร่, 54110",
    "ตำบลไทรย้อย, อำเภอเด่นชัย, แพร่, 54110",
    "ตำบลปงป่าหวาย, อำเภอเด่นชัย, แพร่, 54110",
    "ตำบลห้วยไร่, อำเภอเด่นชัย, แพร่, 54110",
    "ตำบลเตาปูน, อำเภอสอง, แพร่, 54120",
    "ตำบลแดนชุมพล, อำเภอสอง, แพร่, 54120",
    "ตำบลทุ่งน้าว, อำเภอสอง, แพร่, 54120",
    "ตำบลบ้านกลาง, อำเภอสอง, แพร่, 54120",
    "ตำบลบ้านหนุน, อำเภอสอง, แพร่, 54120",
    "ตำบลสะเอียบ, อำเภอสอง, แพร่, 54120",
    "ตำบลห้วยหม้าย, อำเภอสอง, แพร่, 54120",
    "ตำบลหัวเมือง, อำเภอสอง, แพร่, 54120",
    "ตำบลดอนมูล, อำเภอสูงเม่น, แพร่, 54130",
    "ตำบลน้ำชำ, อำเภอสูงเม่น, แพร่, 54130",
    "ตำบลบ้านเหล่า, อำเภอสูงเม่น, แพร่, 54130",
    "ตำบลบ้านกวาง, อำเภอสูงเม่น, แพร่, 54130",
    "ตำบลบ้านกาศ, อำเภอสูงเม่น, แพร่, 54130",
    "ตำบลบ้านปง, อำเภอสูงเม่น, แพร่, 54130",
    "ตำบลพระหลวง, อำเภอสูงเม่น, แพร่, 54130",
    "ตำบลร่องกาศ, อำเภอสูงเม่น, แพร่, 54130",
    "ตำบลสบสาย, อำเภอสูงเม่น, แพร่, 54130",
    "ตำบลสูงเม่น, อำเภอสูงเม่น, แพร่, 54130",
    "ตำบลหัวฝาย, อำเภอสูงเม่น, แพร่, 54130",
    "ตำบลแม่ทราย, อำเภอร้องกวาง, แพร่, 54140",
    "ตำบลแม่ยางตาล, อำเภอร้องกวาง, แพร่, 54140",
    "ตำบลแม่ยางร้อง, อำเภอร้องกวาง, แพร่, 54140",
    "ตำบลแม่ยางฮ่อ, อำเภอร้องกวาง, แพร่, 54140",
    "ตำบลไผ่โทน, อำเภอร้องกวาง, แพร่, 54140",
    "ตำบลทุ่งศรี, อำเภอร้องกวาง, แพร่, 54140",
    "ตำบลน้ำเลา, อำเภอร้องกวาง, แพร่, 54140",
    "ตำบลบ้านเวียง, อำเภอร้องกวาง, แพร่, 54140",
    "ตำบลร้องเข็ม, อำเภอร้องกวาง, แพร่, 54140",
    "ตำบลร้องกวาง, อำเภอร้องกวาง, แพร่, 54140",
    "ตำบลห้วยโรง, อำเภอร้องกวาง, แพร่, 54140",
    "ตำบลเวียงต้า, อำเภอลอง, แพร่, 54150",
    "ตำบลแม่ปาน, อำเภอลอง, แพร่, 54150",
    "ตำบลต้าผามอก, อำเภอลอง, แพร่, 54150",
    "ตำบลทุ่งแล้ง, อำเภอลอง, แพร่, 54150",
    "ตำบลบ่อเหล็กลอง, อำเภอลอง, แพร่, 54150",
    "ตำบลบ้านปิน, อำเภอลอง, แพร่, 54150",
    "ตำบลปากกาง, อำเภอลอง, แพร่, 54150",
    "ตำบลห้วยอ้อ, อำเภอลอง, แพร่, 54150",
    "ตำบลหัวทุ่ง, อำเภอลอง, แพร่, 54150",
    "ตำบลแม่เกิ๋ง, อำเภอวังชิ้น, แพร่, 54160",
    "ตำบลแม่ป้าก, อำเภอวังชิ้น, แพร่, 54160",
    "ตำบลแม่พุง, อำเภอวังชิ้น, แพร่, 54160",
    "ตำบลนาพูน, อำเภอวังชิ้น, แพร่, 54160",
    "ตำบลป่าสัก, อำเภอวังชิ้น, แพร่, 54160",
    "ตำบลวังชิ้น, อำเภอวังชิ้น, แพร่, 54160",
    "ตำบลสรอย, อำเภอวังชิ้น, แพร่, 54160",
    "ตำบลแม่คำมี, อำเภอหนองม่วงไข่, แพร่, 54170",
    "ตำบลตำหนักธรรม, อำเภอหนองม่วงไข่, แพร่, 54170",
    "ตำบลทุ่งแค้ว, อำเภอหนองม่วงไข่, แพร่, 54170",
    "ตำบลน้ำรัด, อำเภอหนองม่วงไข่, แพร่, 54170",
    "ตำบลวังหลวง, อำเภอหนองม่วงไข่, แพร่, 54170",
    "ตำบลหนองม่วงไข่, อำเภอหนองม่วงไข่, แพร่, 54170",
    "ตำบลเรือง, อำเภอเมืองน่าน, น่าน, 55000",
    "ตำบลในเวียง, อำเภอเมืองน่าน, น่าน, 55000",
    "ตำบลไชยสถาน, อำเภอเมืองน่าน, น่าน, 55000",
    "ตำบลกองควาย, อำเภอเมืองน่าน, น่าน, 55000",
    "ตำบลดู่ใต้, อำเภอเมืองน่าน, น่าน, 55000",
    "ตำบลถืมตอง, อำเภอเมืองน่าน, น่าน, 55000",
    "ตำบลนาซาว, อำเภอเมืองน่าน, น่าน, 55000",
    "ตำบลบ่อ, อำเภอเมืองน่าน, น่าน, 55000",
    "ตำบลบ่อสวก, อำเภอเมืองน่าน, น่าน, 55000",
    "ตำบลผาสิงห์, อำเภอเมืองน่าน, น่าน, 55000",
    "ตำบลสะเนียน, อำเภอเมืองน่าน, น่าน, 55000",
    "ตำบลเมืองจัง, อำเภอภูเพียง, น่าน, 55000",
    "ตำบลท่าน้าว, อำเภอภูเพียง, น่าน, 55000",
    "ตำบลนาปัง, อำเภอภูเพียง, น่าน, 55000",
    "ตำบลน้ำเกี๋ยน, อำเภอภูเพียง, น่าน, 55000",
    "ตำบลน้ำแก่น, อำเภอภูเพียง, น่าน, 55000",
    "ตำบลฝายแก้ว, อำเภอภูเพียง, น่าน, 55000",
    "ตำบลม่วงตึ๊ด, อำเภอภูเพียง, น่าน, 55000",
    "ตำบลแม่ขะนิง, อำเภอเวียงสา, น่าน, 55110",
    "ตำบลแม่สา, อำเภอเวียงสา, น่าน, 55110",
    "ตำบลแม่สาคร, อำเภอเวียงสา, น่าน, 55110",
    "ตำบลไหล่น่าน, อำเภอเวียงสา, น่าน, 55110",
    "ตำบลกลางเวียง, อำเภอเวียงสา, น่าน, 55110",
    "ตำบลขึ่ง, อำเภอเวียงสา, น่าน, 55110",
    "ตำบลจอมจันทร์, อำเภอเวียงสา, น่าน, 55110",
    "ตำบลตาลชุม, อำเภอเวียงสา, น่าน, 55110",
    "ตำบลทุ่งศรีทอง, อำเภอเวียงสา, น่าน, 55110",
    "ตำบลนาเหลือง, อำเภอเวียงสา, น่าน, 55110",
    "ตำบลน้ำปั้ว, อำเภอเวียงสา, น่าน, 55110",
    "ตำบลน้ำมวบ, อำเภอเวียงสา, น่าน, 55110",
    "ตำบลปงสนุก, อำเภอเวียงสา, น่าน, 55110",
    "ตำบลยาบหัวนา, อำเภอเวียงสา, น่าน, 55110",
    "ตำบลส้าน, อำเภอเวียงสา, น่าน, 55110",
    "ตำบลส้านนาหนองใหม่, อำเภอเวียงสา, น่าน, 55110",
    "ตำบลอ่ายนาไลย, อำเภอเวียงสา, น่าน, 55110",
    "ตำบลเจดีย์ชัย, อำเภอปัว, น่าน, 55120",
    "ตำบลแงง, อำเภอปัว, น่าน, 55120",
    "ตำบลไชยวัฒนา, อำเภอปัว, น่าน, 55120",
    "ตำบลปัว, อำเภอปัว, น่าน, 55120",
    "ตำบลป่ากลาง, อำเภอปัว, น่าน, 55120",
    "ตำบลภูคา, อำเภอปัว, น่าน, 55120",
    "ตำบลวรนคร, อำเภอปัว, น่าน, 55120",
    "ตำบลศิลาเพชร, อำเภอปัว, น่าน, 55120",
    "ตำบลศิลาแลง, อำเภอปัว, น่าน, 55120",
    "ตำบลสกาด, อำเภอปัว, น่าน, 55120",
    "ตำบลสถาน, อำเภอปัว, น่าน, 55120",
    "ตำบลอวน, อำเภอปัว, น่าน, 55120",
    "ตำบลขุนน่าน, อำเภอเฉลิมพระเกียรติ, น่าน, 55130",
    "ตำบลห้วยโก๋น, อำเภอเฉลิมพระเกียรติ, น่าน, 55130",
    "ตำบลและ, อำเภอทุ่งช้าง, น่าน, 55130",
    "ตำบลงอบ, อำเภอทุ่งช้าง, น่าน, 55130",
    "ตำบลทุ่งช้าง, อำเภอทุ่งช้าง, น่าน, 55130",
    "ตำบลปอน, อำเภอทุ่งช้าง, น่าน, 55130",
    "ตำบลแสนทอง, อำเภอท่าวังผา, น่าน, 55140",
    "ตำบลจอมพระ, อำเภอท่าวังผา, น่าน, 55140",
    "ตำบลตาลชุม, อำเภอท่าวังผา, น่าน, 55140",
    "ตำบลท่าวังผา, อำเภอท่าวังผา, น่าน, 55140",
    "ตำบลป่าคา, อำเภอท่าวังผา, น่าน, 55140",
    "ตำบลผาตอ, อำเภอท่าวังผา, น่าน, 55140",
    "ตำบลผาทอง, อำเภอท่าวังผา, น่าน, 55140",
    "ตำบลยม, อำเภอท่าวังผา, น่าน, 55140",
    "ตำบลริม, อำเภอท่าวังผา, น่าน, 55140",
    "ตำบลศรีภูมิ, อำเภอท่าวังผา, น่าน, 55140",
    "ตำบลเชียงของ, อำเภอนาน้อย, น่าน, 55150",
    "ตำบลนาน้อย, อำเภอนาน้อย, น่าน, 55150",
    "ตำบลน้ำตก, อำเภอนาน้อย, น่าน, 55150",
    "ตำบลบัวใหญ่, อำเภอนาน้อย, น่าน, 55150",
    "ตำบลศรีษะเกษ, อำเภอนาน้อย, น่าน, 55150",
    "ตำบลสถาน, อำเภอนาน้อย, น่าน, 55150",
    "ตำบลสันทะ, อำเภอนาน้อย, น่าน, 55150",
    "ตำบลเชียงกลาง, อำเภอเชียงกลาง, น่าน, 55160",
    "ตำบลเชียงคาน, อำเภอเชียงกลาง, น่าน, 55160",
    "ตำบลเปือ, อำเภอเชียงกลาง, น่าน, 55160",
    "ตำบลพญาแก้ว, อำเภอเชียงกลาง, น่าน, 55160",
    "ตำบลพระธาตุ, อำเภอเชียงกลาง, น่าน, 55160",
    "ตำบลพระพุทธบาท, อำเภอเชียงกลาง, น่าน, 55160",
    "ตำบลชนแดน, อำเภอสองแคว, น่าน, 55160",
    "ตำบลนาไร่หลวง, อำเภอสองแคว, น่าน, 55160",
    "ตำบลยอด, อำเภอสองแคว, น่าน, 55160",
    "ตำบลแม่จริม, อำเภอแม่จริม, น่าน, 55170",
    "ตำบลน้ำปาย, อำเภอแม่จริม, น่าน, 55170",
    "ตำบลน้ำพาง, อำเภอแม่จริม, น่าน, 55170",
    "ตำบลหนองแดง, อำเภอแม่จริม, น่าน, 55170",
    "ตำบลหมอเมือง, อำเภอแม่จริม, น่าน, 55170",
    "ตำบลเมืองลี, อำเภอนาหมื่น, น่าน, 55180",
    "ตำบลนาทะนุง, อำเภอนาหมื่น, น่าน, 55180",
    "ตำบลบ่อแก้ว, อำเภอนาหมื่น, น่าน, 55180",
    "ตำบลปิงหลวง, อำเภอนาหมื่น, น่าน, 55180",
    "ตำบลบ้านพี้, อำเภอบ้านหลวง, น่าน, 55190",
    "ตำบลบ้านฟ้า, อำเภอบ้านหลวง, น่าน, 55190",
    "ตำบลป่าคาหลวง, อำเภอบ้านหลวง, น่าน, 55190",
    "ตำบลสวด, อำเภอบ้านหลวง, น่าน, 55190",
    "ตำบลดู่พงษ์, อำเภอสันติสุข, น่าน, 55210",
    "ตำบลป่าแลวหลวง, อำเภอสันติสุข, น่าน, 55210",
    "ตำบลพงษ์, อำเภอสันติสุข, น่าน, 55210",
    "ตำบลดงพญา, อำเภอบ่อเกลือ, น่าน, 55220",
    "ตำบลบ่อเกลือเหนือ, อำเภอบ่อเกลือ, น่าน, 55220",
    "ตำบลบ่อเกลือใต้, อำเภอบ่อเกลือ, น่าน, 55220",
    "ตำบลภูฟ้า, อำเภอบ่อเกลือ, น่าน, 55220",
    "ตำบลเวียง, อำเภอเมืองพะเยา, พะเยา, 56000",
    "ตำบลแม่ใส, อำเภอเมืองพะเยา, พะเยา, 56000",
    "ตำบลแม่กา, อำเภอเมืองพะเยา, พะเยา, 56000",
    "ตำบลแม่ต๋ำ, อำเภอเมืองพะเยา, พะเยา, 56000",
    "ตำบลแม่นาเรือ, อำเภอเมืองพะเยา, พะเยา, 56000",
    "ตำบลแม่ปืม, อำเภอเมืองพะเยา, พะเยา, 56000",
    "ตำบลจำป่าหวาย, อำเภอเมืองพะเยา, พะเยา, 56000",
    "ตำบลท่าจำปี, อำเภอเมืองพะเยา, พะเยา, 56000",
    "ตำบลท่าวังทอง, อำเภอเมืองพะเยา, พะเยา, 56000",
    "ตำบลบ้านใหม่, อำเภอเมืองพะเยา, พะเยา, 56000",
    "ตำบลบ้านต๋อม, อำเภอเมืองพะเยา, พะเยา, 56000",
    "ตำบลบ้านต๊ำ, อำเภอเมืองพะเยา, พะเยา, 56000",
    "ตำบลบ้านตุ่น, อำเภอเมืองพะเยา, พะเยา, 56000",
    "ตำบลบ้านสาง, อำเภอเมืองพะเยา, พะเยา, 56000",
    "ตำบลสันป่าม่วง, อำเภอเมืองพะเยา, พะเยา, 56000",
    "ตำบลแม่อิง, อำเภอภูกามยาว, พะเยา, 56000",
    "ตำบลดงเจน, อำเภอภูกามยาว, พะเยา, 56000",
    "ตำบลห้วยแก้ว, อำเภอภูกามยาว, พะเยา, 56000",
    "ตำบลเจดีย์คำ, อำเภอเชียงคำ, พะเยา, 56110",
    "ตำบลเชียงบาน, อำเภอเชียงคำ, พะเยา, 56110",
    "ตำบลเวียง, อำเภอเชียงคำ, พะเยา, 56110",
    "ตำบลแม่ลาว, อำเภอเชียงคำ, พะเยา, 56110",
    "ตำบลทุ่งผาสุข, อำเภอเชียงคำ, พะเยา, 56110",
    "ตำบลน้ำแวน, อำเภอเชียงคำ, พะเยา, 56110",
    "ตำบลฝายกวาง, อำเภอเชียงคำ, พะเยา, 56110",
    "ตำบลร่มเย็น, อำเภอเชียงคำ, พะเยา, 56110",
    "ตำบลหย่วน, อำเภอเชียงคำ, พะเยา, 56110",
    "ตำบลอ่างทอง, อำเภอเชียงคำ, พะเยา, 56110",
    "ตำบลเชียงแรง, อำเภอภูซาง, พะเยา, 56110",
    "ตำบลทุ่งกล้วย, อำเภอภูซาง, พะเยา, 56110",
    "ตำบลป่าสัก, อำเภอภูซาง, พะเยา, 56110",
    "ตำบลภูซาง, อำเภอภูซาง, พะเยา, 56110",
    "ตำบลสบบง, อำเภอภูซาง, พะเยา, 56110",
    "ตำบลคือเวียง, อำเภอดอกคำใต้, พะเยา, 56120",
    "ตำบลดงสุวรรณ, อำเภอดอกคำใต้, พะเยา, 56120",
    "ตำบลดอกคำใต้, อำเภอดอกคำใต้, พะเยา, 56120",
    "ตำบลดอนศรีชุม, อำเภอดอกคำใต้, พะเยา, 56120",
    "ตำบลบ้านถ้ำ, อำเภอดอกคำใต้, พะเยา, 56120",
    "ตำบลบ้านปิน, อำเภอดอกคำใต้, พะเยา, 56120",
    "ตำบลบุญเกิด, อำเภอดอกคำใต้, พะเยา, 56120",
    "ตำบลป่าซาง, อำเภอดอกคำใต้, พะเยา, 56120",
    "ตำบลสว่างอารมณ์, อำเภอดอกคำใต้, พะเยา, 56120",
    "ตำบลสันโค้ง, อำเภอดอกคำใต้, พะเยา, 56120",
    "ตำบลหนองหล่ม, อำเภอดอกคำใต้, พะเยา, 56120",
    "ตำบลห้วยลาน, อำเภอดอกคำใต้, พะเยา, 56120",
    "ตำบลเจริญราษฎร์, อำเภอแม่ใจ, พะเยา, 56130",
    "ตำบลแม่ใจ, อำเภอแม่ใจ, พะเยา, 56130",
    "ตำบลแม่สุก, อำเภอแม่ใจ, พะเยา, 56130",
    "ตำบลบ้านเหล่า, อำเภอแม่ใจ, พะเยา, 56130",
    "ตำบลป่าแฝก, อำเภอแม่ใจ, พะเยา, 56130",
    "ตำบลศรีถ้อย, อำเภอแม่ใจ, พะเยา, 56130",
    "ตำบลขุนควร, อำเภอปง, พะเยา, 56140",
    "ตำบลควร, อำเภอปง, พะเยา, 56140",
    "ตำบลงิม, อำเภอปง, พะเยา, 56140",
    "ตำบลนาปรัง, อำเภอปง, พะเยา, 56140",
    "ตำบลปง, อำเภอปง, พะเยา, 56140",
    "ตำบลผาช้างน้อย, อำเภอปง, พะเยา, 56140",
    "ตำบลออย, อำเภอปง, พะเยา, 56140",
    "ตำบลจุน, อำเภอจุน, พะเยา, 56150",
    "ตำบลทุ่งรวงทอง, อำเภอจุน, พะเยา, 56150",
    "ตำบลพระธาตุขิงแกง, อำเภอจุน, พะเยา, 56150",
    "ตำบลลอ, อำเภอจุน, พะเยา, 56150",
    "ตำบลหงส์หิน, อำเภอจุน, พะเยา, 56150",
    "ตำบลห้วยข้าวก่ำ, อำเภอจุน, พะเยา, 56150",
    "ตำบลห้วยยางขาม, อำเภอจุน, พะเยา, 56150",
    "ตำบลเชียงม่วน, อำเภอเชียงม่วน, พะเยา, 56160",
    "ตำบลบ้านมาง, อำเภอเชียงม่วน, พะเยา, 56160",
    "ตำบลสระ, อำเภอเชียงม่วน, พะเยา, 56160",
    "ตำบลเวียง, อำเภอเมืองเชียงราย, เชียงราย, 57000",
    "ตำบลแม่กรณ์, อำเภอเมืองเชียงราย, เชียงราย, 57000",
    "ตำบลดอยลาน, อำเภอเมืองเชียงราย, เชียงราย, 57000",
    "ตำบลดอยฮาง, อำเภอเมืองเชียงราย, เชียงราย, 57000",
    "ตำบลท่าสาย, อำเภอเมืองเชียงราย, เชียงราย, 57000",
    "ตำบลป่าอ้อดอนชัย, อำเภอเมืองเชียงราย, เชียงราย, 57000",
    "ตำบลรอบเวียง, อำเภอเมืองเชียงราย, เชียงราย, 57000",
    "ตำบลสันทราย, อำเภอเมืองเชียงราย, เชียงราย, 57000",
    "ตำบลห้วยชมภู, อำเภอเมืองเชียงราย, เชียงราย, 57000",
    "ตำบลห้วยสัก, อำเภอเมืองเชียงราย, เชียงราย, 57000",
    "ตำบลโป่งแพร่, อำเภอแม่ลาว, เชียงราย, 57000",
    "ตำบลแม่ข้าวต้ม, อำเภอเมืองเชียงราย, เชียงราย, 57100",
    "ตำบลแม่ยาว, อำเภอเมืองเชียงราย, เชียงราย, 57100",
    "ตำบลท่าสุด, อำเภอเมืองเชียงราย, เชียงราย, 57100",
    "ตำบลนางแล, อำเภอเมืองเชียงราย, เชียงราย, 57100",
    "ตำบลบ้านดู่, อำเภอเมืองเชียงราย, เชียงราย, 57100",
    "ตำบลริมกก, อำเภอเมืองเชียงราย, เชียงราย, 57100",
    "ตำบลแม่จัน, อำเภอแม่จัน, เชียงราย, 57110",
    "ตำบลจอมสวรรค์, อำเภอแม่จัน, เชียงราย, 57110",
    "ตำบลท่าข้าวเปลือก, อำเภอแม่จัน, เชียงราย, 57110",
    "ตำบลป่าซาง, อำเภอแม่จัน, เชียงราย, 57110",
    "ตำบลป่าตึง, อำเภอแม่จัน, เชียงราย, 57110",
    "ตำบลศรีค้ำ, อำเภอแม่จัน, เชียงราย, 57110",
    "ตำบลสันทราย, อำเภอแม่จัน, เชียงราย, 57110",
    "ตำบลแม่สลองใน, อำเภอแม่ฟ้าหลวง, เชียงราย, 57110",
    "ตำบลแม่สลองนอก, อำเภอแม่ฟ้าหลวง, เชียงราย, 57110",
    "ตำบลโชคชัย, อำเภอดอยหลวง, เชียงราย, 57110",
    "ตำบลปงน้อย, อำเภอดอยหลวง, เชียงราย, 57110",
    "ตำบลหนองป่าก่อ, อำเภอดอยหลวง, เชียงราย, 57110",
    "ตำบลเจริญเมือง, อำเภอพาน, เชียงราย, 57120",
    "ตำบลเมืองพาน, อำเภอพาน, เชียงราย, 57120",
    "ตำบลเวียงห้าว, อำเภอพาน, เชียงราย, 57120",
    "ตำบลแม่อ้อ, อำเภอพาน, เชียงราย, 57120",
    "ตำบลดอยงาม, อำเภอพาน, เชียงราย, 57120",
    "ตำบลทรายขาว, อำเภอพาน, เชียงราย, 57120",
    "ตำบลป่าหุ่ง, อำเภอพาน, เชียงราย, 57120",
    "ตำบลม่วงคำ, อำเภอพาน, เชียงราย, 57120",
    "ตำบลสันกลาง, อำเภอพาน, เชียงราย, 57120",
    "ตำบลสันติสุข, อำเภอพาน, เชียงราย, 57120",
    "ตำบลสันมะเค็ด, อำเภอพาน, เชียงราย, 57120",
    "ตำบลหัวง้ม, อำเภอพาน, เชียงราย, 57120",
    "ตำบลเกาะช้าง, อำเภอแม่สาย, เชียงราย, 57130",
    "ตำบลเวียงพางคำ, อำเภอแม่สาย, เชียงราย, 57130",
    "ตำบลแม่สาย, อำเภอแม่สาย, เชียงราย, 57130",
    "ตำบลโป่งงาม, อำเภอแม่สาย, เชียงราย, 57130",
    "ตำบลโป่งผา, อำเภอแม่สาย, เชียงราย, 57130",
    "ตำบลศรีเมืองชุม, อำเภอแม่สาย, เชียงราย, 57130",
    "ตำบลเวียง, อำเภอเชียงของ, เชียงราย, 57140",
    "ตำบลครึ่ง, อำเภอเชียงของ, เชียงราย, 57140",
    "ตำบลบุญเรือง, อำเภอเชียงของ, เชียงราย, 57140",
    "ตำบลริมโขง, อำเภอเชียงของ, เชียงราย, 57140",
    "ตำบลศรีดอนชัย, อำเภอเชียงของ, เชียงราย, 57140",
    "ตำบลสถาน, อำเภอเชียงของ, เชียงราย, 57140",
    "ตำบลห้วยซ้อ, อำเภอเชียงของ, เชียงราย, 57140",
    "ตำบลเวียง, อำเภอเชียงแสน, เชียงราย, 57150",
    "ตำบลแม่เงิน, อำเภอเชียงแสน, เชียงราย, 57150",
    "ตำบลโยนก, อำเภอเชียงแสน, เชียงราย, 57150",
    "ตำบลบ้านแซว, อำเภอเชียงแสน, เชียงราย, 57150",
    "ตำบลป่าสัก, อำเภอเชียงแสน, เชียงราย, 57150",
    "ตำบลศรีดอนมูล, อำเภอเชียงแสน, เชียงราย, 57150",
    "ตำบลเวียง, อำเภอเทิง, เชียงราย, 57160",
    "ตำบลงิ้ว, อำเภอเทิง, เชียงราย, 57160",
    "ตำบลตับเต่า, อำเภอเทิง, เชียงราย, 57160",
    "ตำบลสันทรายงาม, อำเภอเทิง, เชียงราย, 57160",
    "ตำบลหงาว, อำเภอเทิง, เชียงราย, 57160",
    "ตำบลเวียง, อำเภอเวียงป่าเป้า, เชียงราย, 57170",
    "ตำบลบ้านโป่ง, อำเภอเวียงป่าเป้า, เชียงราย, 57170",
    "ตำบลป่างิ้ว, อำเภอเวียงป่าเป้า, เชียงราย, 57170",
    "ตำบลสันสลี, อำเภอเวียงป่าเป้า, เชียงราย, 57170",
    "ตำบลเจดีย์หลวง, อำเภอแม่สรวย, เชียงราย, 57180",
    "ตำบลแม่พริก, อำเภอแม่สรวย, เชียงราย, 57180",
    "ตำบลแม่สรวย, อำเภอแม่สรวย, เชียงราย, 57180",
    "ตำบลท่าก๊อ, อำเภอแม่สรวย, เชียงราย, 57180",
    "ตำบลป่าแดด, อำเภอแม่สรวย, เชียงราย, 57180",
    "ตำบลวาวี, อำเภอแม่สรวย, เชียงราย, 57180",
    "ตำบลศรีถ้อย, อำเภอแม่สรวย, เชียงราย, 57180",
    "ตำบลโรงช้าง, อำเภอป่าแดด, เชียงราย, 57190",
    "ตำบลป่าแงะ, อำเภอป่าแดด, เชียงราย, 57190",
    "ตำบลป่าแดด, อำเภอป่าแดด, เชียงราย, 57190",
    "ตำบลศรีโพธิ์เงิน, อำเภอป่าแดด, เชียงราย, 57190",
    "ตำบลสันมะค่า, อำเภอป่าแดด, เชียงราย, 57190",
    "ตำบลดงมหาวัน, อำเภอเวียงเชียงรุ้ง, เชียงราย, 57210",
    "ตำบลทุ่งก่อ, อำเภอเวียงเชียงรุ้ง, เชียงราย, 57210",
    "ตำบลป่าซาง, อำเภอเวียงเชียงรุ้ง, เชียงราย, 57210",
    "ตำบลเมืองชุม, อำเภอเวียงชัย, เชียงราย, 57210",
    "ตำบลเวียงเหนือ, อำเภอเวียงชัย, เชียงราย, 57210",
    "ตำบลเวียงชัย, อำเภอเวียงชัย, เชียงราย, 57210",
    "ตำบลดอนศิลา, อำเภอเวียงชัย, เชียงราย, 57210",
    "ตำบลผางาม, อำเภอเวียงชัย, เชียงราย, 57210",
    "ตำบลบ้านด้าย, อำเภอแม่สาย, เชียงราย, 57220",
    "ตำบลห้วยไคร้, อำเภอแม่สาย, เชียงราย, 57220",
    "ตำบลเชียงเคี่ยน, อำเภอเทิง, เชียงราย, 57230",
    "ตำบลแม่ลอย, อำเภอเทิง, เชียงราย, 57230",
    "ตำบลปล้อง, อำเภอเทิง, เชียงราย, 57230",
    "ตำบลศรีดอนไชย, อำเภอเทิง, เชียงราย, 57230",
    "ตำบลหนองแรด, อำเภอเทิง, เชียงราย, 57230",
    "ตำบลแม่ไร่, อำเภอแม่จัน, เชียงราย, 57240",
    "ตำบลแม่คำ, อำเภอแม่จัน, เชียงราย, 57240",
    "ตำบลเทอดไทย, อำเภอแม่ฟ้าหลวง, เชียงราย, 57240",
    "ตำบลแม่ฟ้าหลวง, อำเภอแม่ฟ้าหลวง, เชียงราย, 57240",
    "ตำบลจอมหมอกแก้ว, อำเภอแม่ลาว, เชียงราย, 57250",
    "ตำบลดงมะดะ, อำเภอแม่ลาว, เชียงราย, 57250",
    "ตำบลบัวสลี, อำเภอแม่ลาว, เชียงราย, 57250",
    "ตำบลป่าก่อดำ, อำเภอแม่ลาว, เชียงราย, 57250",
    "ตำบลธารทอง, อำเภอพาน, เชียงราย, 57250",
    "ตำบลเวียงกาหลง, อำเภอเวียงป่าเป้า, เชียงราย, 57260",
    "ตำบลแม่เจดีย์, อำเภอเวียงป่าเป้า, เชียงราย, 57260",
    "ตำบลแม่เจดีย์ใหม่, อำเภอเวียงป่าเป้า, เชียงราย, 57260",
    "ตำบลจันจว้า, อำเภอแม่จัน, เชียงราย, 57270",
    "ตำบลจันจว้าใต้, อำเภอแม่จัน, เชียงราย, 57270",
    "ตำบลแม่เย็น, อำเภอพาน, เชียงราย, 57280",
    "ตำบลทานตะวัน, อำเภอพาน, เชียงราย, 57280",
    "ตำบลเม็งราย, อำเภอพญาเม็งราย, เชียงราย, 57290",
    "ตำบลแม่เปา, อำเภอพญาเม็งราย, เชียงราย, 57290",
    "ตำบลแม่ต๋ำ, อำเภอพญาเม็งราย, เชียงราย, 57290",
    "ตำบลไม้ยา, อำเภอพญาเม็งราย, เชียงราย, 57290",
    "ตำบลตาดควัน, อำเภอพญาเม็งราย, เชียงราย, 57290",
    "ตำบลท่าข้าม, อำเภอเวียงแก่น, เชียงราย, 57310",
    "ตำบลปอ, อำเภอเวียงแก่น, เชียงราย, 57310",
    "ตำบลม่วงยาย, อำเภอเวียงแก่น, เชียงราย, 57310",
    "ตำบลหล่ายงาว, อำเภอเวียงแก่น, เชียงราย, 57310",
    "ตำบลต้า, อำเภอขุนตาล, เชียงราย, 57340",
    "ตำบลป่าตาล, อำเภอขุนตาล, เชียงราย, 57340",
    "ตำบลยางฮอม, อำเภอขุนตาล, เชียงราย, 57340",
    "ตำบลจองคำ, อำเภอเมืองแม่ฮ่องสอน, แม่ฮ่องสอน, 58000",
    "ตำบลปางหมู, อำเภอเมืองแม่ฮ่องสอน, แม่ฮ่องสอน, 58000",
    "ตำบลผาบ่อง, อำเภอเมืองแม่ฮ่องสอน, แม่ฮ่องสอน, 58000",
    "ตำบลหมอกจำแป่, อำเภอเมืองแม่ฮ่องสอน, แม่ฮ่องสอน, 58000",
    "ตำบลห้วยโป่ง, อำเภอเมืองแม่ฮ่องสอน, แม่ฮ่องสอน, 58000",
    "ตำบลห้วยปูลิง, อำเภอเมืองแม่ฮ่องสอน, แม่ฮ่องสอน, 58000",
    "ตำบลห้วยผา, อำเภอเมืองแม่ฮ่องสอน, แม่ฮ่องสอน, 58000",
    "ตำบลเสาหิน, อำเภอแม่สะเรียง, แม่ฮ่องสอน, 58110",
    "ตำบลแม่เหาะ, อำเภอแม่สะเรียง, แม่ฮ่องสอน, 58110",
    "ตำบลแม่คง, อำเภอแม่สะเรียง, แม่ฮ่องสอน, 58110",
    "ตำบลแม่ยวม, อำเภอแม่สะเรียง, แม่ฮ่องสอน, 58110",
    "ตำบลแม่สะเรียง, อำเภอแม่สะเรียง, แม่ฮ่องสอน, 58110",
    "ตำบลบ้านกาศ, อำเภอแม่สะเรียง, แม่ฮ่องสอน, 58110",
    "ตำบลป่าแป๋, อำเภอแม่สะเรียง, แม่ฮ่องสอน, 58110",
    "ตำบลแม่คะตวน, อำเภอสบเมย, แม่ฮ่องสอน, 58110",
    "ตำบลแม่สวด, อำเภอสบเมย, แม่ฮ่องสอน, 58110",
    "ตำบลแม่สามแลบ, อำเภอสบเมย, แม่ฮ่องสอน, 58110",
    "ตำบลกองก๋อย, อำเภอสบเมย, แม่ฮ่องสอน, 58110",
    "ตำบลป่าโปง, อำเภอสบเมย, แม่ฮ่องสอน, 58110",
    "ตำบลสบเมย, อำเภอสบเมย, แม่ฮ่องสอน, 58110",
    "ตำบลแม่โถ, อำเภอแม่ลาน้อย, แม่ฮ่องสอน, 58120",
    "ตำบลแม่นาจาง, อำเภอแม่ลาน้อย, แม่ฮ่องสอน, 58120",
    "ตำบลแม่ลาน้อย, อำเภอแม่ลาน้อย, แม่ฮ่องสอน, 58120",
    "ตำบลแม่ลาหลวง, อำเภอแม่ลาน้อย, แม่ฮ่องสอน, 58120",
    "ตำบลขุนแม่ลาน้อย, อำเภอแม่ลาน้อย, แม่ฮ่องสอน, 58120",
    "ตำบลท่าผาปุ้ม, อำเภอแม่ลาน้อย, แม่ฮ่องสอน, 58120",
    "ตำบลสันติคีรี, อำเภอแม่ลาน้อย, แม่ฮ่องสอน, 58120",
    "ตำบลห้วยห้อม, อำเภอแม่ลาน้อย, แม่ฮ่องสอน, 58120",
    "ตำบลแจ่มหลวง, อำเภอกัลยาณิวัฒนา, เชียงใหม่, 58130",
    "ตำบลแม่แดด, อำเภอกัลยาณิวัฒนา, เชียงใหม่, 58130",
    "ตำบลบ้านจันทร์, อำเภอกัลยาณิวัฒนา, เชียงใหม่, 58130",
    "ตำบลเมืองแปง, อำเภอปาย, แม่ฮ่องสอน, 58130",
    "ตำบลเวียงเหนือ, อำเภอปาย, แม่ฮ่องสอน, 58130",
    "ตำบลเวียงใต้, อำเภอปาย, แม่ฮ่องสอน, 58130",
    "ตำบลแม่นาเติง, อำเภอปาย, แม่ฮ่องสอน, 58130",
    "ตำบลแม่ฮี้, อำเภอปาย, แม่ฮ่องสอน, 58130",
    "ตำบลโป่งสา, อำเภอปาย, แม่ฮ่องสอน, 58130",
    "ตำบลทุ่งยาว, อำเภอปาย, แม่ฮ่องสอน, 58130",
    "ตำบลเมืองปอน, อำเภอขุนยวม, แม่ฮ่องสอน, 58140",
    "ตำบลแม่เงา, อำเภอขุนยวม, แม่ฮ่องสอน, 58140",
    "ตำบลแม่กิ๊, อำเภอขุนยวม, แม่ฮ่องสอน, 58140",
    "ตำบลแม่ยวมน้อย, อำเภอขุนยวม, แม่ฮ่องสอน, 58140",
    "ตำบลแม่อูคอ, อำเภอขุนยวม, แม่ฮ่องสอน, 58140",
    "ตำบลขุนยวม, อำเภอขุนยวม, แม่ฮ่องสอน, 58140",
    "ตำบลถ้ำลอด, อำเภอปางมะผ้า, แม่ฮ่องสอน, 58150",
    "ตำบลนาปู่ป้อม, อำเภอปางมะผ้า, แม่ฮ่องสอน, 58150",
    "ตำบลปางมะผ้า, อำเภอปางมะผ้า, แม่ฮ่องสอน, 58150",
    "ตำบลสบป่อง, อำเภอปางมะผ้า, แม่ฮ่องสอน, 58150",
    "ตำบลเกรียงไกร, อำเภอเมืองนครสวรรค์, นครสวรรค์, 60000",
    "ตำบลแควใหญ่, อำเภอเมืองนครสวรรค์, นครสวรรค์, 60000",
    "ตำบลกลางแดด, อำเภอเมืองนครสวรรค์, นครสวรรค์, 60000",
    "ตำบลตะเคียนเลื่อน, อำเภอเมืองนครสวรรค์, นครสวรรค์, 60000",
    "ตำบลนครสวรรค์ตก, อำเภอเมืองนครสวรรค์, นครสวรรค์, 60000",
    "ตำบลนครสวรรค์ออก, อำเภอเมืองนครสวรรค์, นครสวรรค์, 60000",
    "ตำบลบางพระหลวง, อำเภอเมืองนครสวรรค์, นครสวรรค์, 60000",
    "ตำบลบางม่วง, อำเภอเมืองนครสวรรค์, นครสวรรค์, 60000",
    "ตำบลบ้านแก่ง, อำเภอเมืองนครสวรรค์, นครสวรรค์, 60000",
    "ตำบลบ้านมะเกลือ, อำเภอเมืองนครสวรรค์, นครสวรรค์, 60000",
    "ตำบลบึงเสนาท, อำเภอเมืองนครสวรรค์, นครสวรรค์, 60000",
    "ตำบลปากน้ำโพ, อำเภอเมืองนครสวรรค์, นครสวรรค์, 60000",
    "ตำบลพระนอน, อำเภอเมืองนครสวรรค์, นครสวรรค์, 60000",
    "ตำบลวัดไทร, อำเภอเมืองนครสวรรค์, นครสวรรค์, 60000",
    "ตำบลหนองปลิง, อำเภอเมืองนครสวรรค์, นครสวรรค์, 60000",
    "ตำบลทุ่งทอง, อำเภอหนองบัว, นครสวรรค์, 60110",
    "ตำบลธารทหาร, อำเภอหนองบัว, นครสวรรค์, 60110",
    "ตำบลวังบ่อ, อำเภอหนองบัว, นครสวรรค์, 60110",
    "ตำบลหนองกลับ, อำเภอหนองบัว, นครสวรรค์, 60110",
    "ตำบลหนองบัว, อำเภอหนองบัว, นครสวรรค์, 60110",
    "ตำบลห้วยใหญ่, อำเภอหนองบัว, นครสวรรค์, 60110",
    "ตำบลห้วยถั่วเหนือ, อำเภอหนองบัว, นครสวรรค์, 60110",
    "ตำบลห้วยถั่วใต้, อำเภอหนองบัว, นครสวรรค์, 60110",
    "ตำบลห้วยร่วม, อำเภอหนองบัว, นครสวรรค์, 60110",
    "ตำบลเกยไชย, อำเภอชุมแสง, นครสวรรค์, 60120",
    "ตำบลโคกหม้อ, อำเภอชุมแสง, นครสวรรค์, 60120",
    "ตำบลไผ่สิงห์, อำเภอชุมแสง, นครสวรรค์, 60120",
    "ตำบลฆะมัง, อำเภอชุมแสง, นครสวรรค์, 60120",
    "ตำบลชุมแสง, อำเภอชุมแสง, นครสวรรค์, 60120",
    "ตำบลท่าไม้, อำเภอชุมแสง, นครสวรรค์, 60120",
    "ตำบลบางเคียน, อำเภอชุมแสง, นครสวรรค์, 60120",
    "ตำบลพิกุล, อำเภอชุมแสง, นครสวรรค์, 60120",
    "ตำบลหนองกระเจา, อำเภอชุมแสง, นครสวรรค์, 60120",
    "ตำบลเขากะลา, อำเภอพยุหะคีรี, นครสวรรค์, 60130",
    "ตำบลเขาทอง, อำเภอพยุหะคีรี, นครสวรรค์, 60130",
    "ตำบลเนินมะกอก, อำเภอพยุหะคีรี, นครสวรรค์, 60130",
    "ตำบลท่าน้ำอ้อย, อำเภอพยุหะคีรี, นครสวรรค์, 60130",
    "ตำบลน้ำทรง, อำเภอพยุหะคีรี, นครสวรรค์, 60130",
    "ตำบลนิคมเขาบ่อแก้ว, อำเภอพยุหะคีรี, นครสวรรค์, 60130",
    "ตำบลพยุหะ, อำเภอพยุหะคีรี, นครสวรรค์, 60130",
    "ตำบลม่วงหัก, อำเภอพยุหะคีรี, นครสวรรค์, 60130",
    "ตำบลยางขาว, อำเภอพยุหะคีรี, นครสวรรค์, 60130",
    "ตำบลย่านมัทรี, อำเภอพยุหะคีรี, นครสวรรค์, 60130",
    "ตำบลสระทะเล, อำเภอพยุหะคีรี, นครสวรรค์, 60130",
    "ตำบลตาคลี, อำเภอตาคลี, นครสวรรค์, 60140",
    "ตำบลหนองโพ, อำเภอตาคลี, นครสวรรค์, 60140",
    "ตำบลหนองหม้อ, อำเภอตาคลี, นครสวรรค์, 60140",
    "ตำบลหัวหวาย, อำเภอตาคลี, นครสวรรค์, 60140",
    "ตำบลแม่เปิน, อำเภอแม่เปิน, นครสวรรค์, 60150",
    "ตำบลเขาชนกัน, อำเภอแม่วงก์, นครสวรรค์, 60150",
    "ตำบลแม่เล่ย์, อำเภอแม่วงก์, นครสวรรค์, 60150",
    "ตำบลแม่วงก์, อำเภอแม่วงก์, นครสวรรค์, 60150",
    "ตำบลวังซ่าน, อำเภอแม่วงก์, นครสวรรค์, 60150",
    "ตำบลชุมตาบง, อำเภอชุมตาบง, นครสวรรค์, 60150",
    "ตำบลปางสวรรค์, อำเภอชุมตาบง, นครสวรรค์, 60150",
    "ตำบลเนินขี้เหล็ก, อำเภอลาดยาว, นครสวรรค์, 60150",
    "ตำบลบ้านไร่, อำเภอลาดยาว, นครสวรรค์, 60150",
    "ตำบลมาบแก, อำเภอลาดยาว, นครสวรรค์, 60150",
    "ตำบลลาดยาว, อำเภอลาดยาว, นครสวรรค์, 60150",
    "ตำบลวังเมือง, อำเภอลาดยาว, นครสวรรค์, 60150",
    "ตำบลวังม้า, อำเภอลาดยาว, นครสวรรค์, 60150",
    "ตำบลศาลเจ้าไก่ต่อ, อำเภอลาดยาว, นครสวรรค์, 60150",
    "ตำบลสร้อยละคร, อำเภอลาดยาว, นครสวรรค์, 60150",
    "ตำบลสระแก้ว, อำเภอลาดยาว, นครสวรรค์, 60150",
    "ตำบลหนองนมวัว, อำเภอลาดยาว, นครสวรรค์, 60150",
    "ตำบลหนองยาว, อำเภอลาดยาว, นครสวรรค์, 60150",
    "ตำบลห้วยน้ำหอม, อำเภอลาดยาว, นครสวรรค์, 60150",
    "ตำบลดอนคา, อำเภอท่าตะโก, นครสวรรค์, 60160",
    "ตำบลท่าตะโก, อำเภอท่าตะโก, นครสวรรค์, 60160",
    "ตำบลทำนบ, อำเภอท่าตะโก, นครสวรรค์, 60160",
    "ตำบลพนมเศษ, อำเภอท่าตะโก, นครสวรรค์, 60160",
    "ตำบลพนมรอก, อำเภอท่าตะโก, นครสวรรค์, 60160",
    "ตำบลวังใหญ่, อำเภอท่าตะโก, นครสวรรค์, 60160",
    "ตำบลวังมหากร, อำเภอท่าตะโก, นครสวรรค์, 60160",
    "ตำบลสายลำโพง, อำเภอท่าตะโก, นครสวรรค์, 60160",
    "ตำบลหนองหลวง, อำเภอท่าตะโก, นครสวรรค์, 60160",
    "ตำบลหัวถนน, อำเภอท่าตะโก, นครสวรรค์, 60160",
    "ตำบลเนินกว้าว, อำเภอโกรกพระ, นครสวรรค์, 60170",
    "ตำบลเนินศาลา, อำเภอโกรกพระ, นครสวรรค์, 60170",
    "ตำบลโกรกพระ, อำเภอโกรกพระ, นครสวรรค์, 60170",
    "ตำบลนากลาง, อำเภอโกรกพระ, นครสวรรค์, 60170",
    "ตำบลบางประมุง, อำเภอโกรกพระ, นครสวรรค์, 60170",
    "ตำบลบางมะฝ่อ, อำเภอโกรกพระ, นครสวรรค์, 60170",
    "ตำบลยางตาล, อำเภอโกรกพระ, นครสวรรค์, 60170",
    "ตำบลศาลาแดง, อำเภอโกรกพระ, นครสวรรค์, 60170",
    "ตำบลหาดสูง, อำเภอโกรกพระ, นครสวรรค์, 60170",
    "ตำบลเจริญผล, อำเภอบรรพตพิสัย, นครสวรรค์, 60180",
    "ตำบลด่านช้าง, อำเภอบรรพตพิสัย, นครสวรรค์, 60180",
    "ตำบลตาขีด, อำเภอบรรพตพิสัย, นครสวรรค์, 60180",
    "ตำบลตาสัง, อำเภอบรรพตพิสัย, นครสวรรค์, 60180",
    "ตำบลท่างิ้ว, อำเภอบรรพตพิสัย, นครสวรรค์, 60180",
    "ตำบลบางแก้ว, อำเภอบรรพตพิสัย, นครสวรรค์, 60180",
    "ตำบลบางตาหงาย, อำเภอบรรพตพิสัย, นครสวรรค์, 60180",
    "ตำบลบ้านแดน, อำเภอบรรพตพิสัย, นครสวรรค์, 60180",
    "ตำบลบึงปลาทู, อำเภอบรรพตพิสัย, นครสวรรค์, 60180",
    "ตำบลหนองกรด, อำเภอบรรพตพิสัย, นครสวรรค์, 60180",
    "ตำบลหนองตางู, อำเภอบรรพตพิสัย, นครสวรรค์, 60180",
    "ตำบลหูกวาง, อำเภอบรรพตพิสัย, นครสวรรค์, 60180",
    "ตำบลอ่างทอง, อำเภอบรรพตพิสัย, นครสวรรค์, 60180",
    "ตำบลเขาชายธง, อำเภอตากฟ้า, นครสวรรค์, 60190",
    "ตำบลตากฟ้า, อำเภอตากฟ้า, นครสวรรค์, 60190",
    "ตำบลพุนกยูง, อำเภอตากฟ้า, นครสวรรค์, 60190",
    "ตำบลลำพยนต์, อำเภอตากฟ้า, นครสวรรค์, 60190",
    "ตำบลสุขสำราญ, อำเภอตากฟ้า, นครสวรรค์, 60190",
    "ตำบลหนองพิกุล, อำเภอตากฟ้า, นครสวรรค์, 60190",
    "ตำบลอุดมธัญญา, อำเภอตากฟ้า, นครสวรรค์, 60190",
    "ตำบลช่องแค, อำเภอตาคลี, นครสวรรค์, 60210",
    "ตำบลพรหมนิมิต, อำเภอตาคลี, นครสวรรค์, 60210",
    "ตำบลสร้อยทอง, อำเภอตาคลี, นครสวรรค์, 60210",
    "ตำบลห้วยหอม, อำเภอตาคลี, นครสวรรค์, 60210",
    "ตำบลโคกเดื่อ, อำเภอไพศาลี, นครสวรรค์, 60220",
    "ตำบลโพธิ์ประสาท, อำเภอไพศาลี, นครสวรรค์, 60220",
    "ตำบลไพศาลี, อำเภอไพศาลี, นครสวรรค์, 60220",
    "ตำบลตะคร้อ, อำเภอไพศาลี, นครสวรรค์, 60220",
    "ตำบลนาขอม, อำเภอไพศาลี, นครสวรรค์, 60220",
    "ตำบลวังข่อย, อำเภอไพศาลี, นครสวรรค์, 60220",
    "ตำบลวังน้ำลัด, อำเภอไพศาลี, นครสวรรค์, 60220",
    "ตำบลสำโรงชัย, อำเภอไพศาลี, นครสวรรค์, 60220",
    "ตำบลเก้าเลี้ยว, อำเภอเก้าเลี้ยว, นครสวรรค์, 60230",
    "ตำบลเขาดิน, อำเภอเก้าเลี้ยว, นครสวรรค์, 60230",
    "ตำบลมหาโพธิ, อำเภอเก้าเลี้ยว, นครสวรรค์, 60230",
    "ตำบลหนองเต่า, อำเภอเก้าเลี้ยว, นครสวรรค์, 60230",
    "ตำบลหัวดง, อำเภอเก้าเลี้ยว, นครสวรรค์, 60230",
    "ตำบลหนองกรด, อำเภอเมืองนครสวรรค์, นครสวรรค์, 60240",
    "ตำบลหนองกระโดน, อำเภอเมืองนครสวรรค์, นครสวรรค์, 60240",
    "ตำบลทับกฤช, อำเภอชุมแสง, นครสวรรค์, 60250",
    "ตำบลทับกฤชใต้, อำเภอชุมแสง, นครสวรรค์, 60250",
    "ตำบลพันลาน, อำเภอชุมแสง, นครสวรรค์, 60250",
    "ตำบลจันเสน, อำเภอตาคลี, นครสวรรค์, 60260",
    "ตำบลลาดทิพรส, อำเภอตาคลี, นครสวรรค์, 60260",
    "ตำบลเกาะเทโพ, อำเภอเมืองอุทัยธานี, อุทัยธานี, 61000",
    "ตำบลเนินแจง, อำเภอเมืองอุทัยธานี, อุทัยธานี, 61000",
    "ตำบลโนนเหล็ก, อำเภอเมืองอุทัยธานี, อุทัยธานี, 61000",
    "ตำบลดอนขวาง, อำเภอเมืองอุทัยธานี, อุทัยธานี, 61000",
    "ตำบลท่าซุง, อำเภอเมืองอุทัยธานี, อุทัยธานี, 61000",
    "ตำบลทุ่งใหญ่, อำเภอเมืองอุทัยธานี, อุทัยธานี, 61000",
    "ตำบลน้ำซึม, อำเภอเมืองอุทัยธานี, อุทัยธานี, 61000",
    "ตำบลสะแกกรัง, อำเภอเมืองอุทัยธานี, อุทัยธานี, 61000",
    "ตำบลหนองเต่า, อำเภอเมืองอุทัยธานี, อุทัยธานี, 61000",
    "ตำบลหนองแก, อำเภอเมืองอุทัยธานี, อุทัยธานี, 61000",
    "ตำบลหนองไผ่แบน, อำเภอเมืองอุทัยธานี, อุทัยธานี, 61000",
    "ตำบลหนองพังค่า, อำเภอเมืองอุทัยธานี, อุทัยธานี, 61000",
    "ตำบลหาดทนง, อำเภอเมืองอุทัยธานี, อุทัยธานี, 61000",
    "ตำบลอุทัยใหม่, อำเภอเมืองอุทัยธานี, อุทัยธานี, 61000",
    "ตำบลเขากวางทอง, อำเภอหนองฉาง, อุทัยธานี, 61110",
    "ตำบลทุ่งโพ, อำเภอหนองฉาง, อุทัยธานี, 61110",
    "ตำบลทุ่งพง, อำเภอหนองฉาง, อุทัยธานี, 61110",
    "ตำบลบ้านเก่า, อำเภอหนองฉาง, อุทัยธานี, 61110",
    "ตำบลหนองฉาง, อำเภอหนองฉาง, อุทัยธานี, 61110",
    "ตำบลหนองนางนวล, อำเภอหนองฉาง, อุทัยธานี, 61110",
    "ตำบลหนองยาง, อำเภอหนองฉาง, อุทัยธานี, 61110",
    "ตำบลหนองสรวง, อำเภอหนองฉาง, อุทัยธานี, 61110",
    "ตำบลอุทัยเก่า, อำเภอหนองฉาง, อุทัยธานี, 61110",
    "ตำบลเขาขี้ฝอย, อำเภอทัพทัน, อุทัยธานี, 61120",
    "ตำบลโคกหม้อ, อำเภอทัพทัน, อุทัยธานี, 61120",
    "ตำบลตลุกดู่, อำเภอทัพทัน, อุทัยธานี, 61120",
    "ตำบลทัพทัน, อำเภอทัพทัน, อุทัยธานี, 61120",
    "ตำบลทุ่งนาไทย, อำเภอทัพทัน, อุทัยธานี, 61120",
    "ตำบลหนองกระทุ่ม, อำเภอทัพทัน, อุทัยธานี, 61120",
    "ตำบลหนองกลางดง, อำเภอทัพทัน, อุทัยธานี, 61120",
    "ตำบลหนองยายดา, อำเภอทัพทัน, อุทัยธานี, 61120",
    "ตำบลหนองสระ, อำเภอทัพทัน, อุทัยธานี, 61120",
    "ตำบลหนองหญ้าปล้อง, อำเภอทัพทัน, อุทัยธานี, 61120",
    "ตำบลดงขวาง, อำเภอหนองขาหย่าง, อุทัยธานี, 61130",
    "ตำบลดอนกลอย, อำเภอหนองขาหย่าง, อุทัยธานี, 61130",
    "ตำบลท่าโพ, อำเภอหนองขาหย่าง, อุทัยธานี, 61130",
    "ตำบลทุ่งพึ่ง, อำเภอหนองขาหย่าง, อุทัยธานี, 61130",
    "ตำบลหนองไผ่, อำเภอหนองขาหย่าง, อุทัยธานี, 61130",
    "ตำบลหนองขาหย่าง, อำเภอหนองขาหย่าง, อุทัยธานี, 61130",
    "ตำบลหมกแถว, อำเภอหนองขาหย่าง, อุทัยธานี, 61130",
    "ตำบลหลุมเข้า, อำเภอหนองขาหย่าง, อุทัยธานี, 61130",
    "ตำบลห้วยรอบ, อำเภอหนองขาหย่าง, อุทัยธานี, 61130",
    "ตำบลเจ้าวัด, อำเภอบ้านไร่, อุทัยธานี, 61140",
    "ตำบลแก่นมะกรูด, อำเภอบ้านไร่, อุทัยธานี, 61140",
    "ตำบลคอกควาย, อำเภอบ้านไร่, อุทัยธานี, 61140",
    "ตำบลทัพหลวง, อำเภอบ้านไร่, อุทัยธานี, 61140",
    "ตำบลบ้านไร่, อำเภอบ้านไร่, อุทัยธานี, 61140",
    "ตำบลบ้านบึง, อำเภอบ้านไร่, อุทัยธานี, 61140",
    "ตำบลห้วยแห้ง, อำเภอบ้านไร่, อุทัยธานี, 61140",
    "ตำบลไผ่เขียว, อำเภอสว่างอารมณ์, อุทัยธานี, 61150",
    "ตำบลบ่อยาง, อำเภอสว่างอารมณ์, อุทัยธานี, 61150",
    "ตำบลพลวงสองนาง, อำเภอสว่างอารมณ์, อุทัยธานี, 61150",
    "ตำบลสว่างอารมณ์, อำเภอสว่างอารมณ์, อุทัยธานี, 61150",
    "ตำบลหนองหลวง, อำเภอสว่างอารมณ์, อุทัยธานี, 61150",
    "ตำบลทุ่งนางาม, อำเภอลานสัก, อุทัยธานี, 61160",
    "ตำบลน้ำรอบ, อำเภอลานสัก, อุทัยธานี, 61160",
    "ตำบลประดู่ยืน, อำเภอลานสัก, อุทัยธานี, 61160",
    "ตำบลป่าอ้อ, อำเภอลานสัก, อุทัยธานี, 61160",
    "ตำบลระบำ, อำเภอลานสัก, อุทัยธานี, 61160",
    "ตำบลลานสัก, อำเภอลานสัก, อุทัยธานี, 61160",
    "ตำบลเขาบางแกรก, อำเภอหนองฉาง, อุทัยธานี, 61170",
    "ตำบลทองหลาง, อำเภอห้วยคต, อุทัยธานี, 61170",
    "ตำบลสุขฤทัย, อำเภอห้วยคต, อุทัยธานี, 61170",
    "ตำบลห้วยคต, อำเภอห้วยคต, อุทัยธานี, 61170",
    "ตำบลเมืองการุ้ง, อำเภอบ้านไร่, อุทัยธานี, 61180",
    "ตำบลบ้านใหม่คลองเคียน, อำเภอบ้านไร่, อุทัยธานี, 61180",
    "ตำบลวังหิน, อำเภอบ้านไร่, อุทัยธานี, 61180",
    "ตำบลหนองจอก, อำเภอบ้านไร่, อุทัยธานี, 61180",
    "ตำบลหนองบ่มกล้วย, อำเภอบ้านไร่, อุทัยธานี, 61180",
    "ตำบลหูช้าง, อำเภอบ้านไร่, อุทัยธานี, 61180",
    "ตำบลเทพนคร, อำเภอเมืองกำแพงเพชร, กำแพงเพชร, 62000",
    "ตำบลในเมือง, อำเภอเมืองกำแพงเพชร, กำแพงเพชร, 62000",
    "ตำบลคณฑี, อำเภอเมืองกำแพงเพชร, กำแพงเพชร, 62000",
    "ตำบลคลองแม่ลาย, อำเภอเมืองกำแพงเพชร, กำแพงเพชร, 62000",
    "ตำบลทรงธรรม, อำเภอเมืองกำแพงเพชร, กำแพงเพชร, 62000",
    "ตำบลท่าขุนราม, อำเภอเมืองกำแพงเพชร, กำแพงเพชร, 62000",
    "ตำบลนครชุม, อำเภอเมืองกำแพงเพชร, กำแพงเพชร, 62000",
    "ตำบลนาบ่อคำ, อำเภอเมืองกำแพงเพชร, กำแพงเพชร, 62000",
    "ตำบลนิคมทุ่งโพธิ์ทะเล, อำเภอเมืองกำแพงเพชร, กำแพงเพชร, 62000",
    "ตำบลลานดอกไม้, อำเภอเมืองกำแพงเพชร, กำแพงเพชร, 62000",
    "ตำบลวังทอง, อำเภอเมืองกำแพงเพชร, กำแพงเพชร, 62000",
    "ตำบลสระแก้ว, อำเภอเมืองกำแพงเพชร, กำแพงเพชร, 62000",
    "ตำบลหนองปลิง, อำเภอเมืองกำแพงเพชร, กำแพงเพชร, 62000",
    "ตำบลอ่างทอง, อำเภอเมืองกำแพงเพชร, กำแพงเพชร, 62000",
    "ตำบลเพชรชมภู, อำเภอโกสัมพีนคร, กำแพงเพชร, 62000",
    "ตำบลโกสัมพี, อำเภอโกสัมพีนคร, กำแพงเพชร, 62000",
    "ตำบลลานดอกไม้ตก, อำเภอโกสัมพีนคร, กำแพงเพชร, 62000",
    "ตำบลเขาคีริส, อำเภอพรานกระต่าย, กำแพงเพชร, 62110",
    "ตำบลคลองพิไกร, อำเภอพรานกระต่าย, กำแพงเพชร, 62110",
    "ตำบลคุยบ้านโอง, อำเภอพรานกระต่าย, กำแพงเพชร, 62110",
    "ตำบลถ้ำกระต่ายทอง, อำเภอพรานกระต่าย, กำแพงเพชร, 62110",
    "ตำบลท่าไม้, อำเภอพรานกระต่าย, กำแพงเพชร, 62110",
    "ตำบลพรานกระต่าย, อำเภอพรานกระต่าย, กำแพงเพชร, 62110",
    "ตำบลวังควง, อำเภอพรานกระต่าย, กำแพงเพชร, 62110",
    "ตำบลวังตะแบก, อำเภอพรานกระต่าย, กำแพงเพชร, 62110",
    "ตำบลหนองหัววัว, อำเภอพรานกระต่าย, กำแพงเพชร, 62110",
    "ตำบลห้วยยั้ง, อำเภอพรานกระต่าย, กำแพงเพชร, 62110",
    "ตำบลแม่ลาด, อำเภอคลองขลุง, กำแพงเพชร, 62120",
    "ตำบลคลองขลุง, อำเภอคลองขลุง, กำแพงเพชร, 62120",
    "ตำบลคลองสมบูรณ์, อำเภอคลองขลุง, กำแพงเพชร, 62120",
    "ตำบลท่าพุทรา, อำเภอคลองขลุง, กำแพงเพชร, 62120",
    "ตำบลท่ามะเขือ, อำเภอคลองขลุง, กำแพงเพชร, 62120",
    "ตำบลวังแขม, อำเภอคลองขลุง, กำแพงเพชร, 62120",
    "ตำบลวังไทร, อำเภอคลองขลุง, กำแพงเพชร, 62120",
    "ตำบลวังบัว, อำเภอคลองขลุง, กำแพงเพชร, 62120",
    "ตำบลวังยาง, อำเภอคลองขลุง, กำแพงเพชร, 62120",
    "ตำบลหัวถนน, อำเภอคลองขลุง, กำแพงเพชร, 62120",
    "ตำบลโพธิ์ทอง, อำเภอปางศิลาทอง, กำแพงเพชร, 62120",
    "ตำบลปางตาไว, อำเภอปางศิลาทอง, กำแพงเพชร, 62120",
    "ตำบลหินดาต, อำเภอปางศิลาทอง, กำแพงเพชร, 62120",
    "ตำบลเกาะตาล, อำเภอขาณุวรลักษบุรี, กำแพงเพชร, 62130",
    "ตำบลแสนตอ, อำเภอขาณุวรลักษบุรี, กำแพงเพชร, 62130",
    "ตำบลป่าพุทรา, อำเภอขาณุวรลักษบุรี, กำแพงเพชร, 62130",
    "ตำบลยางสูง, อำเภอขาณุวรลักษบุรี, กำแพงเพชร, 62130",
    "ตำบลโค้งไผ่, อำเภอขาณุวรลักษบุรี, กำแพงเพชร, 62140",
    "ตำบลดอนแตง, อำเภอขาณุวรลักษบุรี, กำแพงเพชร, 62140",
    "ตำบลบ่อถ้ำ, อำเภอขาณุวรลักษบุรี, กำแพงเพชร, 62140",
    "ตำบลปางมะค่า, อำเภอขาณุวรลักษบุรี, กำแพงเพชร, 62140",
    "ตำบลวังชะพลู, อำเภอขาณุวรลักษบุรี, กำแพงเพชร, 62140",
    "ตำบลวังหามแห, อำเภอขาณุวรลักษบุรี, กำแพงเพชร, 62140",
    "ตำบลสลกบาตร, อำเภอขาณุวรลักษบุรี, กำแพงเพชร, 62140",
    "ตำบลไทรงาม, อำเภอไทรงาม, กำแพงเพชร, 62150",
    "ตำบลพานทอง, อำเภอไทรงาม, กำแพงเพชร, 62150",
    "ตำบลมหาชัย, อำเภอไทรงาม, กำแพงเพชร, 62150",
    "ตำบลหนองแม่แตง, อำเภอไทรงาม, กำแพงเพชร, 62150",
    "ตำบลหนองไม้กอง, อำเภอไทรงาม, กำแพงเพชร, 62150",
    "ตำบลหนองคล้า, อำเภอไทรงาม, กำแพงเพชร, 62150",
    "ตำบลหนองทอง, อำเภอไทรงาม, กำแพงเพชร, 62150",
    "ตำบลไตรตรึงษ์, อำเภอเมืองกำแพงเพชร, กำแพงเพชร, 62160",
    "ตำบลธำมรงค์, อำเภอเมืองกำแพงเพชร, กำแพงเพชร, 62160",
    "ตำบลโนนพลวง, อำเภอลานกระบือ, กำแพงเพชร, 62170",
    "ตำบลจันทิมา, อำเภอลานกระบือ, กำแพงเพชร, 62170",
    "ตำบลช่องลม, อำเภอลานกระบือ, กำแพงเพชร, 62170",
    "ตำบลบึงทับแรต, อำเภอลานกระบือ, กำแพงเพชร, 62170",
    "ตำบลประชาสุขสันต์, อำเภอลานกระบือ, กำแพงเพชร, 62170",
    "ตำบลลานกระบือ, อำเภอลานกระบือ, กำแพงเพชร, 62170",
    "ตำบลหนองหลวง, อำเภอลานกระบือ, กำแพงเพชร, 62170",
    "ตำบลโป่งน้ำร้อน, อำเภอคลองลาน, กำแพงเพชร, 62180",
    "ตำบลคลองน้ำไหล, อำเภอคลองลาน, กำแพงเพชร, 62180",
    "ตำบลคลองลานพัฒนา, อำเภอคลองลาน, กำแพงเพชร, 62180",
    "ตำบลสักงาม, อำเภอคลองลาน, กำแพงเพชร, 62180",
    "ตำบลถาวรวัฒนา, อำเภอทรายทองวัฒนา, กำแพงเพชร, 62190",
    "ตำบลทุ่งทราย, อำเภอทรายทองวัฒนา, กำแพงเพชร, 62190",
    "ตำบลทุ่งทอง, อำเภอทรายทองวัฒนา, กำแพงเพชร, 62190",
    "ตำบลเทพนิมิต, อำเภอบึงสามัคคี, กำแพงเพชร, 62210",
    "ตำบลบึงสามัคคี, อำเภอบึงสามัคคี, กำแพงเพชร, 62210",
    "ตำบลระหาน, อำเภอบึงสามัคคี, กำแพงเพชร, 62210",
    "ตำบลวังชะโอน, อำเภอบึงสามัคคี, กำแพงเพชร, 62210",
    "ตำบลเชียงเงิน, อำเภอเมืองตาก, ตาก, 63000",
    "ตำบลแม่ท้อ, อำเภอเมืองตาก, ตาก, 63000",
    "ตำบลโป่งแดง, อำเภอเมืองตาก, ตาก, 63000",
    "ตำบลไม้งาม, อำเภอเมืองตาก, ตาก, 63000",
    "ตำบลตลุกกลางทุ่ง, อำเภอเมืองตาก, ตาก, 63000",
    "ตำบลน้ำรึม, อำเภอเมืองตาก, ตาก, 63000",
    "ตำบลป่ามะม่วง, อำเภอเมืองตาก, ตาก, 63000",
    "ตำบลระแหง, อำเภอเมืองตาก, ตาก, 63000",
    "ตำบลวังประจบ, อำเภอเมืองตาก, ตาก, 63000",
    "ตำบลวังหิน, อำเภอเมืองตาก, ตาก, 63000",
    "ตำบลหนองบัวเหนือ, อำเภอเมืองตาก, ตาก, 63000",
    "ตำบลหนองบัวใต้, อำเภอเมืองตาก, ตาก, 63000",
    "ตำบลหนองหลวง, อำเภอเมืองตาก, ตาก, 63000",
    "ตำบลหัวเดียด, อำเภอเมืองตาก, ตาก, 63000",
    "ตำบลเชียงทอง, อำเภอวังเจ้า, ตาก, 63000",
    "ตำบลนาโบสถ์, อำเภอวังเจ้า, ตาก, 63000",
    "ตำบลประดาง, อำเภอวังเจ้า, ตาก, 63000",
    "ตำบลแม่กาษา, อำเภอแม่สอด, ตาก, 63110",
    "ตำบลแม่กุ, อำเภอแม่สอด, ตาก, 63110",
    "ตำบลแม่ตาว, อำเภอแม่สอด, ตาก, 63110",
    "ตำบลแม่ปะ, อำเภอแม่สอด, ตาก, 63110",
    "ตำบลแม่สอด, อำเภอแม่สอด, ตาก, 63110",
    "ตำบลด่านแม่ละเมา, อำเภอแม่สอด, ตาก, 63110",
    "ตำบลท่าสายลวด, อำเภอแม่สอด, ตาก, 63110",
    "ตำบลพระธาตุผาแดง, อำเภอแม่สอด, ตาก, 63110",
    "ตำบลพะวอ, อำเภอแม่สอด, ตาก, 63110",
    "ตำบลมหาวัน, อำเภอแม่สอด, ตาก, 63110",
    "ตำบลเกาะตะเภา, อำเภอบ้านตาก, ตาก, 63120",
    "ตำบลแม่สลิด, อำเภอบ้านตาก, ตาก, 63120",
    "ตำบลตากตก, อำเภอบ้านตาก, ตาก, 63120",
    "ตำบลตากออก, อำเภอบ้านตาก, ตาก, 63120",
    "ตำบลท้องฟ้า, อำเภอบ้านตาก, ตาก, 63120",
    "ตำบลทุ่งกระเชาะ, อำเภอบ้านตาก, ตาก, 63120",
    "ตำบลสมอโคน, อำเภอบ้านตาก, ตาก, 63120",
    "ตำบลบ้านนา, อำเภอสามเงา, ตาก, 63130",
    "ตำบลยกกระบัตร, อำเภอสามเงา, ตาก, 63130",
    "ตำบลย่านรี, อำเภอสามเงา, ตาก, 63130",
    "ตำบลวังจันทร์, อำเภอสามเงา, ตาก, 63130",
    "ตำบลวังหมัน, อำเภอสามเงา, ตาก, 63130",
    "ตำบลสามเงา, อำเภอสามเงา, ตาก, 63130",
    "ตำบลแม่จะเรา, อำเภอแม่ระมาด, ตาก, 63140",
    "ตำบลแม่ตื่น, อำเภอแม่ระมาด, ตาก, 63140",
    "ตำบลแม่ระมาด, อำเภอแม่ระมาด, ตาก, 63140",
    "ตำบลขะเนจื้อ, อำเภอแม่ระมาด, ตาก, 63140",
    "ตำบลพระธาตุ, อำเภอแม่ระมาด, ตาก, 63140",
    "ตำบลสามหมื่น, อำเภอแม่ระมาด, ตาก, 63140",
    "ตำบลแม่ต้าน, อำเภอท่าสองยาง, ตาก, 63150",
    "ตำบลแม่วะหลวง, อำเภอท่าสองยาง, ตาก, 63150",
    "ตำบลแม่สอง, อำเภอท่าสองยาง, ตาก, 63150",
    "ตำบลแม่หละ, อำเภอท่าสองยาง, ตาก, 63150",
    "ตำบลแม่อุสุ, อำเภอท่าสองยาง, ตาก, 63150",
    "ตำบลท่าสองยาง, อำเภอท่าสองยาง, ตาก, 63150",
    "ตำบลคีรีราษฎร์, อำเภอพบพระ, ตาก, 63160",
    "ตำบลช่องแคบ, อำเภอพบพระ, ตาก, 63160",
    "ตำบลพบพระ, อำเภอพบพระ, ตาก, 63160",
    "ตำบลรวมไทยพัฒนา, อำเภอพบพระ, ตาก, 63160",
    "ตำบลวาเล่ย์, อำเภอพบพระ, ตาก, 63160",
    "ตำบลแม่กลอง, อำเภออุ้มผาง, ตาก, 63170",
    "ตำบลแม่จัน, อำเภออุ้มผาง, ตาก, 63170",
    "ตำบลแม่ละมุ้ง, อำเภออุ้มผาง, ตาก, 63170",
    "ตำบลโมโกร, อำเภออุ้มผาง, ตาก, 63170",
    "ตำบลหนองหลวง, อำเภออุ้มผาง, ตาก, 63170",
    "ตำบลอุ้มผาง, อำเภออุ้มผาง, ตาก, 63170",
    "ตำบลธานี, อำเภอเมืองสุโขทัย, สุโขทัย, 64000",
    "ตำบลบ้านกล้วย, อำเภอเมืองสุโขทัย, สุโขทัย, 64000",
    "ตำบลบ้านหลุม, อำเภอเมืองสุโขทัย, สุโขทัย, 64000",
    "ตำบลปากแคว, อำเภอเมืองสุโขทัย, สุโขทัย, 64000",
    "ตำบลปากพระ, อำเภอเมืองสุโขทัย, สุโขทัย, 64000",
    "ตำบลยางซ้าย, อำเภอเมืองสุโขทัย, สุโขทัย, 64000",
    "ตำบลเมืองบางขลัง, อำเภอสวรรคโลก, สุโขทัย, 64110",
    "ตำบลเมืองบางยม, อำเภอสวรรคโลก, สุโขทัย, 64110",
    "ตำบลเมืองสวรรคโลก, อำเภอสวรรคโลก, สุโขทัย, 64110",
    "ตำบลในเมือง, อำเภอสวรรคโลก, สุโขทัย, 64110",
    "ตำบลคลองกระจง, อำเภอสวรรคโลก, สุโขทัย, 64110",
    "ตำบลคลองยาง, อำเภอสวรรคโลก, สุโขทัย, 64110",
    "ตำบลท่าทอง, อำเภอสวรรคโลก, สุโขทัย, 64110",
    "ตำบลนาทุ่ง, อำเภอสวรรคโลก, สุโขทัย, 64110",
    "ตำบลปากน้ำ, อำเภอสวรรคโลก, สุโขทัย, 64110",
    "ตำบลป่ากุมเกาะ, อำเภอสวรรคโลก, สุโขทัย, 64110",
    "ตำบลย่านยาว, อำเภอสวรรคโลก, สุโขทัย, 64110",
    "ตำบลวังไม้ขอน, อำเภอสวรรคโลก, สุโขทัย, 64110",
    "ตำบลวังพิณพาทย์, อำเภอสวรรคโลก, สุโขทัย, 64110",
    "ตำบลหนองกลับ, อำเภอสวรรคโลก, สุโขทัย, 64110",
    "ตำบลเกาะตาเลี้ยง, อำเภอศรีสำโรง, สุโขทัย, 64120",
    "ตำบลคลองตาล, อำเภอศรีสำโรง, สุโขทัย, 64120",
    "ตำบลทับผึ้ง, อำเภอศรีสำโรง, สุโขทัย, 64120",
    "ตำบลนาขุนไกร, อำเภอศรีสำโรง, สุโขทัย, 64120",
    "ตำบลบ้านไร่, อำเภอศรีสำโรง, สุโขทัย, 64120",
    "ตำบลบ้านซ่าน, อำเภอศรีสำโรง, สุโขทัย, 64120",
    "ตำบลบ้านนา, อำเภอศรีสำโรง, สุโขทัย, 64120",
    "ตำบลราวต้นจันทร์, อำเภอศรีสำโรง, สุโขทัย, 64120",
    "ตำบลวังใหญ่, อำเภอศรีสำโรง, สุโขทัย, 64120",
    "ตำบลวังทอง, อำเภอศรีสำโรง, สุโขทัย, 64120",
    "ตำบลวังลึก, อำเภอศรีสำโรง, สุโขทัย, 64120",
    "ตำบลวัดเกาะ, อำเภอศรีสำโรง, สุโขทัย, 64120",
    "ตำบลสามเรือน, อำเภอศรีสำโรง, สุโขทัย, 64120",
    "ตำบลแม่สำ, อำเภอศรีสัชนาลัย, สุโขทัย, 64130",
    "ตำบลแม่สิน, อำเภอศรีสัชนาลัย, สุโขทัย, 64130",
    "ตำบลดงคู่, อำเภอศรีสัชนาลัย, สุโขทัย, 64130",
    "ตำบลบ้านแก่ง, อำเภอศรีสัชนาลัย, สุโขทัย, 64130",
    "ตำบลบ้านตึก, อำเภอศรีสัชนาลัย, สุโขทัย, 64130",
    "ตำบลป่างิ้ว, อำเภอศรีสัชนาลัย, สุโขทัย, 64130",
    "ตำบลสารจิตร, อำเภอศรีสัชนาลัย, สุโขทัย, 64130",
    "ตำบลหนองอ้อ, อำเภอศรีสัชนาลัย, สุโขทัย, 64130",
    "ตำบลหาดเสี้ยว, อำเภอศรีสัชนาลัย, สุโขทัย, 64130",
    "ตำบลตลิ่งชัน, อำเภอบ้านด่านลานหอย, สุโขทัย, 64140",
    "ตำบลบ้านด่าน, อำเภอบ้านด่านลานหอย, สุโขทัย, 64140",
    "ตำบลลานหอย, อำเภอบ้านด่านลานหอย, สุโขทัย, 64140",
    "ตำบลวังตะคร้อ, อำเภอบ้านด่านลานหอย, สุโขทัย, 64140",
    "ตำบลวังน้ำขาว, อำเภอบ้านด่านลานหอย, สุโขทัย, 64140",
    "ตำบลวังลึก, อำเภอบ้านด่านลานหอย, สุโขทัย, 64140",
    "ตำบลหนองหญ้าปล้อง, อำเภอบ้านด่านลานหอย, สุโขทัย, 64140",
    "ตำบลไทยชนะศึก, อำเภอทุ่งเสลี่ยม, สุโขทัย, 64150",
    "ตำบลกลางดง, อำเภอทุ่งเสลี่ยม, สุโขทัย, 64150",
    "ตำบลทุ่งเสลี่ยม, อำเภอทุ่งเสลี่ยม, สุโขทัย, 64150",
    "ตำบลโตนด, อำเภอคีรีมาศ, สุโขทัย, 64160",
    "ตำบลทุ่งยางเมือง, อำเภอคีรีมาศ, สุโขทัย, 64160",
    "ตำบลทุ่งหลวง, อำเภอคีรีมาศ, สุโขทัย, 64160",
    "ตำบลนาเชิงคีรี, อำเภอคีรีมาศ, สุโขทัย, 64160",
    "ตำบลบ้านน้ำพุ, อำเภอคีรีมาศ, สุโขทัย, 64160",
    "ตำบลบ้านป้อม, อำเภอคีรีมาศ, สุโขทัย, 64160",
    "ตำบลศรีคีรีมาศ, อำเภอคีรีมาศ, สุโขทัย, 64160",
    "ตำบลสามพวง, อำเภอคีรีมาศ, สุโขทัย, 64160",
    "ตำบลหนองกระดิ่ง, อำเภอคีรีมาศ, สุโขทัย, 64160",
    "ตำบลหนองจิก, อำเภอคีรีมาศ, สุโขทัย, 64160",
    "ตำบลไกรใน, อำเภอกงไกรลาศ, สุโขทัย, 64170",
    "ตำบลไกรกลาง, อำเภอกงไกรลาศ, สุโขทัย, 64170",
    "ตำบลไกรนอก, อำเภอกงไกรลาศ, สุโขทัย, 64170",
    "ตำบลกกแรต, อำเภอกงไกรลาศ, สุโขทัย, 64170",
    "ตำบลกง, อำเภอกงไกรลาศ, สุโขทัย, 64170",
    "ตำบลดงเดือย, อำเภอกงไกรลาศ, สุโขทัย, 64170",
    "ตำบลท่าฉนวน, อำเภอกงไกรลาศ, สุโขทัย, 64170",
    "ตำบลบ้านใหม่สุขเกษม, อำเภอกงไกรลาศ, สุโขทัย, 64170",
    "ตำบลบ้านกร่าง, อำเภอกงไกรลาศ, สุโขทัย, 64170",
    "ตำบลป่าแฝก, อำเภอกงไกรลาศ, สุโขทัย, 64170",
    "ตำบลหนองตูม, อำเภอกงไกรลาศ, สุโขทัย, 64170",
    "ตำบลคลองมะพลับ, อำเภอศรีนคร, สุโขทัย, 64180",
    "ตำบลนครเดิฐ, อำเภอศรีนคร, สุโขทัย, 64180",
    "ตำบลน้ำขุม, อำเภอศรีนคร, สุโขทัย, 64180",
    "ตำบลศรีนคร, อำเภอศรีนคร, สุโขทัย, 64180",
    "ตำบลหนองบัว, อำเภอศรีนคร, สุโขทัย, 64180",
    "ตำบลท่าชัย, อำเภอศรีสัชนาลัย, สุโขทัย, 64190",
    "ตำบลศรีสัชนาลัย, อำเภอศรีสัชนาลัย, สุโขทัย, 64190",
    "ตำบลเมืองเก่า, อำเภอเมืองสุโขทัย, สุโขทัย, 64210",
    "ตำบลวังทองแดง, อำเภอเมืองสุโขทัย, สุโขทัย, 64210",
    "ตำบลตาลเตี้ย, อำเภอเมืองสุโขทัย, สุโขทัย, 64220",
    "ตำบลบ้านสวน, อำเภอเมืองสุโขทัย, สุโขทัย, 64220",
    "ตำบลเขาแก้วศรีสมบูรณ์, อำเภอทุ่งเสลี่ยม, สุโขทัย, 64230",
    "ตำบลบ้านใหม่ไชยมงคล, อำเภอทุ่งเสลี่ยม, สุโขทัย, 64230",
    "ตำบลในเมือง, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65000",
    "ตำบลไผ่ขอดอน, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65000",
    "ตำบลจอมทอง, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65000",
    "ตำบลดอนทอง, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65000",
    "ตำบลท่าโพธิ์, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65000",
    "ตำบลท่าทอง, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65000",
    "ตำบลบ้านกร่าง, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65000",
    "ตำบลบ้านคลอง, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65000",
    "ตำบลบ้านป่า, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65000",
    "ตำบลบึงพระ, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65000",
    "ตำบลปากโทก, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65000",
    "ตำบลพลายชุมพล, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65000",
    "ตำบลมะขามสูง, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65000",
    "ตำบลวัดจันทร์, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65000",
    "ตำบลสมอแข, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65000",
    "ตำบลหัวรอ, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65000",
    "ตำบลอรัญญิก, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65000",
    "ตำบลโคกสลุด, อำเภอบางกระทุ่ม, พิษณุโลก, 65110",
    "ตำบลไผ่ล้อม, อำเภอบางกระทุ่ม, พิษณุโลก, 65110",
    "ตำบลท่าตาล, อำเภอบางกระทุ่ม, พิษณุโลก, 65110",
    "ตำบลนครป่าหมาก, อำเภอบางกระทุ่ม, พิษณุโลก, 65110",
    "ตำบลบางกระทุ่ม, อำเภอบางกระทุ่ม, พิษณุโลก, 65110",
    "ตำบลบ้านไร่, อำเภอบางกระทุ่ม, พิษณุโลก, 65110",
    "ตำบลสนามคลี, อำเภอบางกระทุ่ม, พิษณุโลก, 65110",
    "ตำบลเนินเพิ่ม, อำเภอนครไทย, พิษณุโลก, 65120",
    "ตำบลนครไทย, อำเภอนครไทย, พิษณุโลก, 65120",
    "ตำบลนครชุม, อำเภอนครไทย, พิษณุโลก, 65120",
    "ตำบลนาบัว, อำเภอนครไทย, พิษณุโลก, 65120",
    "ตำบลน้ำกุ่ม, อำเภอนครไทย, พิษณุโลก, 65120",
    "ตำบลบ่อโพธิ์, อำเภอนครไทย, พิษณุโลก, 65120",
    "ตำบลบ้านแยง, อำเภอนครไทย, พิษณุโลก, 65120",
    "ตำบลบ้านพร้าว, อำเภอนครไทย, พิษณุโลก, 65120",
    "ตำบลยางโกลน, อำเภอนครไทย, พิษณุโลก, 65120",
    "ตำบลหนองกะท้าว, อำเภอนครไทย, พิษณุโลก, 65120",
    "ตำบลห้วยเฮี้ย, อำเภอนครไทย, พิษณุโลก, 65120",
    "ตำบลแม่ระกา, อำเภอวังทอง, พิษณุโลก, 65130",
    "ตำบลชัยนาม, อำเภอวังทอง, พิษณุโลก, 65130",
    "ตำบลดินทอง, อำเภอวังทอง, พิษณุโลก, 65130",
    "ตำบลท่าหมื่นราม, อำเภอวังทอง, พิษณุโลก, 65130",
    "ตำบลพันชาลี, อำเภอวังทอง, พิษณุโลก, 65130",
    "ตำบลวังทอง, อำเภอวังทอง, พิษณุโลก, 65130",
    "ตำบลวังนกแอ่น, อำเภอวังทอง, พิษณุโลก, 65130",
    "ตำบลวังพิกุล, อำเภอวังทอง, พิษณุโลก, 65130",
    "ตำบลหนองพระ, อำเภอวังทอง, พิษณุโลก, 65130",
    "ตำบลท่านางงาม, อำเภอบางระกำ, พิษณุโลก, 65140",
    "ตำบลนิคมพัฒนา, อำเภอบางระกำ, พิษณุโลก, 65140",
    "ตำบลบ่อทอง, อำเภอบางระกำ, พิษณุโลก, 65140",
    "ตำบลบางระกำ, อำเภอบางระกำ, พิษณุโลก, 65140",
    "ตำบลบึงกอก, อำเภอบางระกำ, พิษณุโลก, 65140",
    "ตำบลปลักแรด, อำเภอบางระกำ, พิษณุโลก, 65140",
    "ตำบลพันเสา, อำเภอบางระกำ, พิษณุโลก, 65140",
    "ตำบลวังอิทก, อำเภอบางระกำ, พิษณุโลก, 65140",
    "ตำบลหนองกุลา, อำเภอบางระกำ, พิษณุโลก, 65140",
    "ตำบลทับยายเชียง, อำเภอพรหมพิราม, พิษณุโลก, 65150",
    "ตำบลท่าช้าง, อำเภอพรหมพิราม, พิษณุโลก, 65150",
    "ตำบลพรหมพิราม, อำเภอพรหมพิราม, พิษณุโลก, 65150",
    "ตำบลมะตูม, อำเภอพรหมพิราม, พิษณุโลก, 65150",
    "ตำบลวังวน, อำเภอพรหมพิราม, พิษณุโลก, 65150",
    "ตำบลหนองแขม, อำเภอพรหมพิราม, พิษณุโลก, 65150",
    "ตำบลหอกลอง, อำเภอพรหมพิราม, พิษณุโลก, 65150",
    "ตำบลคันโช้ง, อำเภอวัดโบสถ์, พิษณุโลก, 65160",
    "ตำบลท้อแท้, อำเภอวัดโบสถ์, พิษณุโลก, 65160",
    "ตำบลท่างาม, อำเภอวัดโบสถ์, พิษณุโลก, 65160",
    "ตำบลบ้านยาง, อำเภอวัดโบสถ์, พิษณุโลก, 65160",
    "ตำบลวัดโบสถ์, อำเภอวัดโบสถ์, พิษณุโลก, 65160",
    "ตำบลหินลาด, อำเภอวัดโบสถ์, พิษณุโลก, 65160",
    "ตำบลชาติตระการ, อำเภอชาติตระการ, พิษณุโลก, 65170",
    "ตำบลท่าสะแก, อำเภอชาติตระการ, พิษณุโลก, 65170",
    "ตำบลบ่อภาค, อำเภอชาติตระการ, พิษณุโลก, 65170",
    "ตำบลบ้านดง, อำเภอชาติตระการ, พิษณุโลก, 65170",
    "ตำบลป่าแดง, อำเภอชาติตระการ, พิษณุโลก, 65170",
    "ตำบลสวนเมี่ยง, อำเภอชาติตระการ, พิษณุโลก, 65170",
    "ตำบลดงประคำ, อำเภอพรหมพิราม, พิษณุโลก, 65180",
    "ตำบลตลุกเทียม, อำเภอพรหมพิราม, พิษณุโลก, 65180",
    "ตำบลมะต้อง, อำเภอพรหมพิราม, พิษณุโลก, 65180",
    "ตำบลวงฆ้อง, อำเภอพรหมพิราม, พิษณุโลก, 65180",
    "ตำบลศรีภิรมย์, อำเภอพรหมพิราม, พิษณุโลก, 65180",
    "ตำบลเนินมะปราง, อำเภอเนินมะปราง, พิษณุโลก, 65190",
    "ตำบลไทรย้อย, อำเภอเนินมะปราง, พิษณุโลก, 65190",
    "ตำบลชมพู, อำเภอเนินมะปราง, พิษณุโลก, 65190",
    "ตำบลบ้านน้อยซุ้มขี้เหล็ก, อำเภอเนินมะปราง, พิษณุโลก, 65190",
    "ตำบลบ้านมุง, อำเภอเนินมะปราง, พิษณุโลก, 65190",
    "ตำบลวังโพรง, อำเภอเนินมะปราง, พิษณุโลก, 65190",
    "ตำบลวังยาง, อำเภอเนินมะปราง, พิษณุโลก, 65190",
    "ตำบลเนินกุ่ม, อำเภอบางกระทุ่ม, พิษณุโลก, 65210",
    "ตำบลวัดตายม, อำเภอบางกระทุ่ม, พิษณุโลก, 65210",
    "ตำบลแก่งโสภา, อำเภอวังทอง, พิษณุโลก, 65220",
    "ตำบลบ้านกลาง, อำเภอวังทอง, พิษณุโลก, 65220",
    "ตำบลงิ้วงาม, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65230",
    "ตำบลวังน้ำคู้, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65230",
    "ตำบลวัดพริก, อำเภอเมืองพิษณุโลก, พิษณุโลก, 65230",
    "ตำบลคุยม่วง, อำเภอบางระกำ, พิษณุโลก, 65240",
    "ตำบลชุมแสงสงคราม, อำเภอบางระกำ, พิษณุโลก, 65240",
    "ตำบลเมืองเก่า, อำเภอเมืองพิจิตร, พิจิตร, 66000",
    "ตำบลโรงช้าง, อำเภอเมืองพิจิตร, พิจิตร, 66000",
    "ตำบลในเมือง, อำเภอเมืองพิจิตร, พิจิตร, 66000",
    "ตำบลไผ่ขวาง, อำเภอเมืองพิจิตร, พิจิตร, 66000",
    "ตำบลคลองคะเชนทร์, อำเภอเมืองพิจิตร, พิจิตร, 66000",
    "ตำบลฆะมัง, อำเภอเมืองพิจิตร, พิจิตร, 66000",
    "ตำบลท่าหลวง, อำเภอเมืองพิจิตร, พิจิตร, 66000",
    "ตำบลท่าฬ่อ, อำเภอเมืองพิจิตร, พิจิตร, 66000",
    "ตำบลบ้านบุ่ง, อำเภอเมืองพิจิตร, พิจิตร, 66000",
    "ตำบลปากทาง, อำเภอเมืองพิจิตร, พิจิตร, 66000",
    "ตำบลป่ามะคาบ, อำเภอเมืองพิจิตร, พิจิตร, 66000",
    "ตำบลย่านยาว, อำเภอเมืองพิจิตร, พิจิตร, 66000",
    "ตำบลสายคำโห้, อำเภอเมืองพิจิตร, พิจิตร, 66000",
    "ตำบลไทรโรงโขน, อำเภอตะพานหิน, พิจิตร, 66110",
    "ตำบลไผ่หลวง, อำเภอตะพานหิน, พิจิตร, 66110",
    "ตำบลคลองคูณ, อำเภอตะพานหิน, พิจิตร, 66110",
    "ตำบลงิ้วราย, อำเภอตะพานหิน, พิจิตร, 66110",
    "ตำบลดงตะขบ, อำเภอตะพานหิน, พิจิตร, 66110",
    "ตำบลตะพานหิน, อำเภอตะพานหิน, พิจิตร, 66110",
    "ตำบลทับหมัน, อำเภอตะพานหิน, พิจิตร, 66110",
    "ตำบลวังสำโรง, อำเภอตะพานหิน, พิจิตร, 66110",
    "ตำบลวังหว้า, อำเภอตะพานหิน, พิจิตร, 66110",
    "ตำบลหนองพยอม, อำเภอตะพานหิน, พิจิตร, 66110",
    "ตำบลห้วยเกตุ, อำเภอตะพานหิน, พิจิตร, 66110",
    "ตำบลเนินมะกอก, อำเภอบางมูลนาก, พิจิตร, 66120",
    "ตำบลบางไผ่, อำเภอบางมูลนาก, พิจิตร, 66120",
    "ตำบลบางมูลนาก, อำเภอบางมูลนาก, พิจิตร, 66120",
    "ตำบลภูมิ, อำเภอบางมูลนาก, พิจิตร, 66120",
    "ตำบลลำประดา, อำเภอบางมูลนาก, พิจิตร, 66120",
    "ตำบลวังกรด, อำเภอบางมูลนาก, พิจิตร, 66120",
    "ตำบลวังสำโรง, อำเภอบางมูลนาก, พิจิตร, 66120",
    "ตำบลห้วยเขน, อำเภอบางมูลนาก, พิจิตร, 66120",
    "ตำบลหอไกร, อำเภอบางมูลนาก, พิจิตร, 66120",
    "ตำบลโพทะเล, อำเภอโพทะเล, พิจิตร, 66130",
    "ตำบลทะนง, อำเภอโพทะเล, พิจิตร, 66130",
    "ตำบลท่าเสา, อำเภอโพทะเล, พิจิตร, 66130",
    "ตำบลท่าขมิ้น, อำเภอโพทะเล, พิจิตร, 66130",
    "ตำบลท่านั่ง, อำเภอโพทะเล, พิจิตร, 66130",
    "ตำบลท่าบัว, อำเภอโพทะเล, พิจิตร, 66130",
    "ตำบลท้ายน้ำ, อำเภอโพทะเล, พิจิตร, 66130",
    "ตำบลทุ่งน้อย, อำเภอโพทะเล, พิจิตร, 66130",
    "ตำบลบางคลาน, อำเภอโพทะเล, พิจิตร, 66130",
    "ตำบลบ้านน้อย, อำเภอโพทะเล, พิจิตร, 66130",
    "ตำบลวัดขวาง, อำเภอโพทะเล, พิจิตร, 66130",
    "ตำบลแหลมรัง, อำเภอบึงนาราง, พิจิตร, 66130",
    "ตำบลโพธิ์ไทรงาม, อำเภอบึงนาราง, พิจิตร, 66130",
    "ตำบลบางลาย, อำเภอบึงนาราง, พิจิตร, 66130",
    "ตำบลบึงนาราง, อำเภอบึงนาราง, พิจิตร, 66130",
    "ตำบลห้วยแก้ว, อำเภอบึงนาราง, พิจิตร, 66130",
    "ตำบลบ้านนา, อำเภอวชิรบารมี, พิจิตร, 66140",
    "ตำบลบึงบัว, อำเภอวชิรบารมี, พิจิตร, 66140",
    "ตำบลวังโมกข์, อำเภอวชิรบารมี, พิจิตร, 66140",
    "ตำบลเนินปอ, อำเภอสามง่าม, พิจิตร, 66140",
    "ตำบลรังนก, อำเภอสามง่าม, พิจิตร, 66140",
    "ตำบลสามง่าม, อำเภอสามง่าม, พิจิตร, 66140",
    "ตำบลหนองโสน, อำเภอสามง่าม, พิจิตร, 66140",
    "ตำบลทุ่งโพธิ์, อำเภอตะพานหิน, พิจิตร, 66150",
    "ตำบลวังหลุม, อำเภอตะพานหิน, พิจิตร, 66150",
    "ตำบลทับคล้อ, อำเภอทับคล้อ, พิจิตร, 66150",
    "ตำบลท้ายทุ่ง, อำเภอทับคล้อ, พิจิตร, 66150",
    "ตำบลคลองทราย, อำเภอสากเหล็ก, พิจิตร, 66160",
    "ตำบลท่าเยี่ยม, อำเภอสากเหล็ก, พิจิตร, 66160",
    "ตำบลวังทับไทร, อำเภอสากเหล็ก, พิจิตร, 66160",
    "ตำบลสากเหล็ก, อำเภอสากเหล็ก, พิจิตร, 66160",
    "ตำบลหนองหญ้าไทร, อำเภอสากเหล็ก, พิจิตร, 66160",
    "ตำบลดงกลาง, อำเภอเมืองพิจิตร, พิจิตร, 66170",
    "ตำบลดงป่าคำ, อำเภอเมืองพิจิตร, พิจิตร, 66170",
    "ตำบลหัวดง, อำเภอเมืองพิจิตร, พิจิตร, 66170",
    "ตำบลวังทรายพูน, อำเภอวังทรายพูน, พิจิตร, 66180",
    "ตำบลหนองปล้อง, อำเภอวังทรายพูน, พิจิตร, 66180",
    "ตำบลหนองปลาไหล, อำเภอวังทรายพูน, พิจิตร, 66180",
    "ตำบลหนองพระ, อำเภอวังทรายพูน, พิจิตร, 66180",
    "ตำบลเนินสว่าง, อำเภอโพธิ์ประทับช้าง, พิจิตร, 66190",
    "ตำบลโพธิ์ประทับช้าง, อำเภอโพธิ์ประทับช้าง, พิจิตร, 66190",
    "ตำบลไผ่ท่าโพ, อำเภอโพธิ์ประทับช้าง, พิจิตร, 66190",
    "ตำบลไผ่รอบ, อำเภอโพธิ์ประทับช้าง, พิจิตร, 66190",
    "ตำบลดงเสือเหลือง, อำเภอโพธิ์ประทับช้าง, พิจิตร, 66190",
    "ตำบลทุ่งใหญ่, อำเภอโพธิ์ประทับช้าง, พิจิตร, 66190",
    "ตำบลวังจิก, อำเภอโพธิ์ประทับช้าง, พิจิตร, 66190",
    "ตำบลวังงิ้ว, อำเภอดงเจริญ, พิจิตร, 66210",
    "ตำบลวังงิ้วใต้, อำเภอดงเจริญ, พิจิตร, 66210",
    "ตำบลสำนักขุนเณร, อำเภอดงเจริญ, พิจิตร, 66210",
    "ตำบลห้วยพุก, อำเภอดงเจริญ, พิจิตร, 66210",
    "ตำบลห้วยร่วม, อำเภอดงเจริญ, พิจิตร, 66210",
    "ตำบลวังตะกู, อำเภอบางมูลนาก, พิจิตร, 66210",
    "ตำบลหนองหลุม, อำเภอวชิรบารมี, พิจิตร, 66220",
    "ตำบลกำแพงดิน, อำเภอสามง่าม, พิจิตร, 66220",
    "ตำบลเขาเจ็ดลูก, อำเภอทับคล้อ, พิจิตร, 66230",
    "ตำบลเขาทราย, อำเภอทับคล้อ, พิจิตร, 66230",
    "ตำบลในเมือง, อำเภอเมืองเพชรบูรณ์, เพชรบูรณ์, 67000",
    "ตำบลชอนไพร, อำเภอเมืองเพชรบูรณ์, เพชรบูรณ์, 67000",
    "ตำบลดงมูลเหล็ก, อำเภอเมืองเพชรบูรณ์, เพชรบูรณ์, 67000",
    "ตำบลตะเบาะ, อำเภอเมืองเพชรบูรณ์, เพชรบูรณ์, 67000",
    "ตำบลนางั่ว, อำเภอเมืองเพชรบูรณ์, เพชรบูรณ์, 67000",
    "ตำบลนาป่า, อำเภอเมืองเพชรบูรณ์, เพชรบูรณ์, 67000",
    "ตำบลน้ำร้อน, อำเภอเมืองเพชรบูรณ์, เพชรบูรณ์, 67000",
    "ตำบลบ้านโคก, อำเภอเมืองเพชรบูรณ์, เพชรบูรณ์, 67000",
    "ตำบลบ้านโตก, อำเภอเมืองเพชรบูรณ์, เพชรบูรณ์, 67000",
    "ตำบลป่าเลา, อำเภอเมืองเพชรบูรณ์, เพชรบูรณ์, 67000",
    "ตำบลสะเดียง, อำเภอเมืองเพชรบูรณ์, เพชรบูรณ์, 67000",
    "ตำบลห้วยใหญ่, อำเภอเมืองเพชรบูรณ์, เพชรบูรณ์, 67000",
    "ตำบลช้างตะลูด, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลตาลเดี่ยว, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลท่าอิบุญ, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลน้ำเฮี้ย, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลน้ำก้อ, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลน้ำชุน, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลบ้านโสก, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลบ้านไร่, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลบ้านกลาง, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลบ้านติ้ว, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลบ้านหวาย, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลบุ่งคล้า, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลบุ่งน้ำเต้า, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลปากช่อง, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลปากดุก, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลฝายนาแซง, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลลานบ่า, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลวัดป่า, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลสักหลง, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลหนองไขว่, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลหนองสว่าง, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลหล่มสัก, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลห้วยไร่, อำเภอหล่มสัก, เพชรบูรณ์, 67110",
    "ตำบลตาดกลอย, อำเภอหล่มเก่า, เพชรบูรณ์, 67120",
    "ตำบลนาเกาะ, อำเภอหล่มเก่า, เพชรบูรณ์, 67120",
    "ตำบลนาแซง, อำเภอหล่มเก่า, เพชรบูรณ์, 67120",
    "ตำบลนาซำ, อำเภอหล่มเก่า, เพชรบูรณ์, 67120",
    "ตำบลบ้านเนิน, อำเภอหล่มเก่า, เพชรบูรณ์, 67120",
    "ตำบลวังบาล, อำเภอหล่มเก่า, เพชรบูรณ์, 67120",
    "ตำบลศิลา, อำเภอหล่มเก่า, เพชรบูรณ์, 67120",
    "ตำบลหล่มเก่า, อำเภอหล่มเก่า, เพชรบูรณ์, 67120",
    "ตำบลหินฮาว, อำเภอหล่มเก่า, เพชรบูรณ์, 67120",
    "ตำบลโคกปรง, อำเภอวิเชียรบุรี, เพชรบูรณ์, 67130",
    "ตำบลท่าโรง, อำเภอวิเชียรบุรี, เพชรบูรณ์, 67130",
    "ตำบลน้ำร้อน, อำเภอวิเชียรบุรี, เพชรบูรณ์, 67130",
    "ตำบลบ่อรัง, อำเภอวิเชียรบุรี, เพชรบูรณ์, 67130",
    "ตำบลบึงกระจับ, อำเภอวิเชียรบุรี, เพชรบูรณ์, 67130",
    "ตำบลยางสาว, อำเภอวิเชียรบุรี, เพชรบูรณ์, 67130",
    "ตำบลสระประดู่, อำเภอวิเชียรบุรี, เพชรบูรณ์, 67130",
    "ตำบลสามแยก, อำเภอวิเชียรบุรี, เพชรบูรณ์, 67130",
    "ตำบลเพชรละคร, อำเภอหนองไผ่, เพชรบูรณ์, 67140",
    "ตำบลกองทูล, อำเภอหนองไผ่, เพชรบูรณ์, 67140",
    "ตำบลท่าแดง, อำเภอหนองไผ่, เพชรบูรณ์, 67140",
    "ตำบลท่าด้วง, อำเภอหนองไผ่, เพชรบูรณ์, 67140",
    "ตำบลบ่อไทย, อำเภอหนองไผ่, เพชรบูรณ์, 67140",
    "ตำบลบัววัฒนา, อำเภอหนองไผ่, เพชรบูรณ์, 67140",
    "ตำบลบ้านโภชน์, อำเภอหนองไผ่, เพชรบูรณ์, 67140",
    "ตำบลวังโบสถ์, อำเภอหนองไผ่, เพชรบูรณ์, 67140",
    "ตำบลวังท่าดี, อำเภอหนองไผ่, เพชรบูรณ์, 67140",
    "ตำบลหนองไผ่, อำเภอหนองไผ่, เพชรบูรณ์, 67140",
    "ตำบลชนแดน, อำเภอชนแดน, เพชรบูรณ์, 67150",
    "ตำบลซับพุทรา, อำเภอชนแดน, เพชรบูรณ์, 67150",
    "ตำบลท่าข้าม, อำเภอชนแดน, เพชรบูรณ์, 67150",
    "ตำบลพุทธบาท, อำเภอชนแดน, เพชรบูรณ์, 67150",
    "ตำบลลาดแค, อำเภอชนแดน, เพชรบูรณ์, 67150",
    "ตำบลศาลาลาย, อำเภอชนแดน, เพชรบูรณ์, 67150",
    "ตำบลกันจุ, อำเภอบึงสามพัน, เพชรบูรณ์, 67160",
    "ตำบลซับไม้แดง, อำเภอบึงสามพัน, เพชรบูรณ์, 67160",
    "ตำบลซับสมอทอด, อำเภอบึงสามพัน, เพชรบูรณ์, 67160",
    "ตำบลบึงสามพัน, อำเภอบึงสามพัน, เพชรบูรณ์, 67160",
    "ตำบลพญาวัง, อำเภอบึงสามพัน, เพชรบูรณ์, 67160",
    "ตำบลศรีมงคล, อำเภอบึงสามพัน, เพชรบูรณ์, 67160",
    "ตำบลสระแก้ว, อำเภอบึงสามพัน, เพชรบูรณ์, 67160",
    "ตำบลหนองแจง, อำเภอบึงสามพัน, เพชรบูรณ์, 67160",
    "ตำบลโคกสะอาด, อำเภอศรีเทพ, เพชรบูรณ์, 67170",
    "ตำบลคลองกระจัง, อำเภอศรีเทพ, เพชรบูรณ์, 67170",
    "ตำบลนาสนุ่น, อำเภอศรีเทพ, เพชรบูรณ์, 67170",
    "ตำบลประดู่งาม, อำเภอศรีเทพ, เพชรบูรณ์, 67170",
    "ตำบลศรีเทพ, อำเภอศรีเทพ, เพชรบูรณ์, 67170",
    "ตำบลสระกรวด, อำเภอศรีเทพ, เพชรบูรณ์, 67170",
    "ตำบลหนองย่างทอย, อำเภอศรีเทพ, เพชรบูรณ์, 67170",
    "ตำบลซับน้อย, อำเภอวิเชียรบุรี, เพชรบูรณ์, 67180",
    "ตำบลซับสมบูรณ์, อำเภอวิเชียรบุรี, เพชรบูรณ์, 67180",
    "ตำบลพุเตย, อำเภอวิเชียรบุรี, เพชรบูรณ์, 67180",
    "ตำบลพุขาม, อำเภอวิเชียรบุรี, เพชรบูรณ์, 67180",
    "ตำบลภูน้ำหยด, อำเภอวิเชียรบุรี, เพชรบูรณ์, 67180",
    "ตำบลวังใหญ่, อำเภอวิเชียรบุรี, เพชรบูรณ์, 67180",
    "ตำบลดงขุย, อำเภอชนแดน, เพชรบูรณ์, 67190",
    "ตำบลตะกุดไร, อำเภอชนแดน, เพชรบูรณ์, 67190",
    "ตำบลบ้านกล้วย, อำเภอชนแดน, เพชรบูรณ์, 67190",
    "ตำบลนายม, อำเภอเมืองเพชรบูรณ์, เพชรบูรณ์, 67210",
    "ตำบลระวิง, อำเภอเมืองเพชรบูรณ์, เพชรบูรณ์, 67210",
    "ตำบลวังชมภู, อำเภอเมืองเพชรบูรณ์, เพชรบูรณ์, 67210",
    "ตำบลห้วยสะแก, อำเภอเมืองเพชรบูรณ์, เพชรบูรณ์, 67210",
    "ตำบลนาเฉลียง, อำเภอหนองไผ่, เพชรบูรณ์, 67220",
    "ตำบลยางงาม, อำเภอหนองไผ่, เพชรบูรณ์, 67220",
    "ตำบลห้วยโป่ง, อำเภอหนองไผ่, เพชรบูรณ์, 67220",
    "ตำบลวังพิกุล, อำเภอบึงสามพัน, เพชรบูรณ์, 67230",
    "ตำบลซับเปิบ, อำเภอวังโป่ง, เพชรบูรณ์, 67240",
    "ตำบลท้ายดง, อำเภอวังโป่ง, เพชรบูรณ์, 67240",
    "ตำบลวังโป่ง, อำเภอวังโป่ง, เพชรบูรณ์, 67240",
    "ตำบลวังศาล, อำเภอวังโป่ง, เพชรบูรณ์, 67240",
    "ตำบลวังหิน, อำเภอวังโป่ง, เพชรบูรณ์, 67240",
    "ตำบลท่าพล, อำเภอเมืองเพชรบูรณ์, เพชรบูรณ์, 67250",
    "ตำบลโคกมน, อำเภอน้ำหนาว, เพชรบูรณ์, 67260",
    "ตำบลน้ำหนาว, อำเภอน้ำหนาว, เพชรบูรณ์, 67260",
    "ตำบลวังกวาง, อำเภอน้ำหนาว, เพชรบูรณ์, 67260",
    "ตำบลหลักด่าน, อำเภอน้ำหนาว, เพชรบูรณ์, 67260",
    "ตำบลเขาค้อ, อำเภอเขาค้อ, เพชรบูรณ์, 67270",
    "ตำบลทุ่งสมอ, อำเภอเขาค้อ, เพชรบูรณ์, 67270",
    "ตำบลริมสีม่วง, อำเภอเขาค้อ, เพชรบูรณ์, 67270",
    "ตำบลสะเดาะพง, อำเภอเขาค้อ, เพชรบูรณ์, 67270",
    "ตำบลหนองแม่นา, อำเภอเขาค้อ, เพชรบูรณ์, 67270",
    "ตำบลเข็กน้อย, อำเภอเขาค้อ, เพชรบูรณ์, 67280",
    "ตำบลแคมป์สน, อำเภอเขาค้อ, เพชรบูรณ์, 67280",
    "ตำบลเกาะพลับพลา, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลเขาแร้ง, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลเจดีย์หัก, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลโคกหม้อ, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลคุ้งกระถิน, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลคุ้งน้ำวน, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลคูบัว, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลดอนแร่, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลดอนตะโก, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลท่าราบ, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลน้ำพุ, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลบางป่า, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลบ้านไร่, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลพงสวาย, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลพิกุลทอง, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลสามเรือน, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลหนองกลางนา, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลหน้าเมือง, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลหลุมดิน, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลห้วยไผ่, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลหินกอง, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลอ่างทอง, อำเภอเมืองราชบุรี, ราชบุรี, 70000",
    "ตำบลเขาขลุง, อำเภอบ้านโป่ง, ราชบุรี, 70110",
    "ตำบลเบิกไพร, อำเภอบ้านโป่ง, ราชบุรี, 70110",
    "ตำบลคุ้งพยอม, อำเภอบ้านโป่ง, ราชบุรี, 70110",
    "ตำบลดอนกระเบื้อง, อำเภอบ้านโป่ง, ราชบุรี, 70110",
    "ตำบลท่าผา, อำเภอบ้านโป่ง, ราชบุรี, 70110",
    "ตำบลนครชุมน์, อำเภอบ้านโป่ง, ราชบุรี, 70110",
    "ตำบลบ้านโป่ง, อำเภอบ้านโป่ง, ราชบุรี, 70110",
    "ตำบลบ้านม่วง, อำเภอบ้านโป่ง, ราชบุรี, 70110",
    "ตำบลปากแรต, อำเภอบ้านโป่ง, ราชบุรี, 70110",
    "ตำบลลาดบัวขาว, อำเภอบ้านโป่ง, ราชบุรี, 70110",
    "ตำบลสวนกล้วย, อำเภอบ้านโป่ง, ราชบุรี, 70110",
    "ตำบลหนองกบ, อำเภอบ้านโป่ง, ราชบุรี, 70110",
    "ตำบลหนองปลาหมอ, อำเภอบ้านโป่ง, ราชบุรี, 70110",
    "ตำบลหนองอ้อ, อำเภอบ้านโป่ง, ราชบุรี, 70110",
    "ตำบลเขาชะงุ้ม, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลเจ็ดเสมียน, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลเตาปูน, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลโพธาราม, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลคลองข่อย, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลคลองตาคต, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลชำแระ, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลดอนกระเบื้อง, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลดอนทราย, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลท่าชุมพล, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลธรรมเสน, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลนางแก้ว, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลบางโตนด, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลบ้านเลือก, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลบ้านฆ้อง, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลบ้านสิงห์, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลสร้อยฟ้า, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลหนองโพ, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลหนองกวาง, อำเภอโพธาราม, ราชบุรี, 70120",
    "ตำบลแพงพวย, อำเภอดำเนินสะดวก, ราชบุรี, 70130",
    "ตำบลขุนพิทักษ์, อำเภอดำเนินสะดวก, ราชบุรี, 70130",
    "ตำบลดอนไผ่, อำเภอดำเนินสะดวก, ราชบุรี, 70130",
    "ตำบลดอนกรวย, อำเภอดำเนินสะดวก, ราชบุรี, 70130",
    "ตำบลดอนคลัง, อำเภอดำเนินสะดวก, ราชบุรี, 70130",
    "ตำบลดำเนินสะดวก, อำเภอดำเนินสะดวก, ราชบุรี, 70130",
    "ตำบลตาหลวง, อำเภอดำเนินสะดวก, ราชบุรี, 70130",
    "ตำบลท่านัด, อำเภอดำเนินสะดวก, ราชบุรี, 70130",
    "ตำบลบ้านไร่, อำเภอดำเนินสะดวก, ราชบุรี, 70130",
    "ตำบลศรีสุราษฎร์, อำเภอดำเนินสะดวก, ราชบุรี, 70130",
    "ตำบลสี่หมื่น, อำเภอดำเนินสะดวก, ราชบุรี, 70130",
    "ตำบลดอนทราย, อำเภอปากท่อ, ราชบุรี, 70140",
    "ตำบลทุ่งหลวง, อำเภอปากท่อ, ราชบุรี, 70140",
    "ตำบลบ่อกระดาน, อำเภอปากท่อ, ราชบุรี, 70140",
    "ตำบลป่าไก่, อำเภอปากท่อ, ราชบุรี, 70140",
    "ตำบลปากท่อ, อำเภอปากท่อ, ราชบุรี, 70140",
    "ตำบลยางหัก, อำเภอปากท่อ, ราชบุรี, 70140",
    "ตำบลวังมะนาว, อำเภอปากท่อ, ราชบุรี, 70140",
    "ตำบลวัดยางงาม, อำเภอปากท่อ, ราชบุรี, 70140",
    "ตำบลวันดาว, อำเภอปากท่อ, ราชบุรี, 70140",
    "ตำบลหนองกระทุ่ม, อำเภอปากท่อ, ราชบุรี, 70140",
    "ตำบลห้วยยางโทน, อำเภอปากท่อ, ราชบุรี, 70140",
    "ตำบลอ่างหิน, อำเภอปากท่อ, ราชบุรี, 70140",
    "ตำบลเบิกไพร, อำเภอจอมบึง, ราชบุรี, 70150",
    "ตำบลแก้มอ้น, อำเภอจอมบึง, ราชบุรี, 70150",
    "ตำบลจอมบึง, อำเภอจอมบึง, ราชบุรี, 70150",
    "ตำบลด่านทับตะโก, อำเภอจอมบึง, ราชบุรี, 70150",
    "ตำบลปากช่อง, อำเภอจอมบึง, ราชบุรี, 70150",
    "ตำบลรางบัว, อำเภอจอมบึง, ราชบุรี, 70150",
    "ตำบลโพหัก, อำเภอบางแพ, ราชบุรี, 70160",
    "ตำบลดอนใหญ่, อำเภอบางแพ, ราชบุรี, 70160",
    "ตำบลดอนคา, อำเภอบางแพ, ราชบุรี, 70160",
    "ตำบลบางแพ, อำเภอบางแพ, ราชบุรี, 70160",
    "ตำบลวังเย็น, อำเภอบางแพ, ราชบุรี, 70160",
    "ตำบลวัดแก้ว, อำเภอบางแพ, ราชบุรี, 70160",
    "ตำบลหัวโพ, อำเภอบางแพ, ราชบุรี, 70160",
    "ตำบลเกาะศาลพระ, อำเภอวัดเพลง, ราชบุรี, 70170",
    "ตำบลจอมประทัด, อำเภอวัดเพลง, ราชบุรี, 70170",
    "ตำบลวัดเพลง, อำเภอวัดเพลง, ราชบุรี, 70170",
    "ตำบลบ้านคา, อำเภอบ้านคา, ราชบุรี, 70180",
    "ตำบลบ้านบึง, อำเภอบ้านคา, ราชบุรี, 70180",
    "ตำบลหนองพันจันทร์, อำเภอบ้านคา, ราชบุรี, 70180",
    "ตำบลตะนาวศรี, อำเภอสวนผึ้ง, ราชบุรี, 70180",
    "ตำบลท่าเคย, อำเภอสวนผึ้ง, ราชบุรี, 70180",
    "ตำบลป่าหวาย, อำเภอสวนผึ้ง, ราชบุรี, 70180",
    "ตำบลสวนผึ้ง, อำเภอสวนผึ้ง, ราชบุรี, 70180",
    "ตำบลสนามแย้, อำเภอท่ามะกา, กาญจนบุรี, 70190",
    "ตำบลกรับใหญ่, อำเภอบ้านโป่ง, ราชบุรี, 70190",
    "ตำบลบัวงาม, อำเภอดำเนินสะดวก, ราชบุรี, 70210",
    "ตำบลประสาทสิทธิ์, อำเภอดำเนินสะดวก, ราชบุรี, 70210",
    "ตำบลเกาะสำโรง, อำเภอเมืองกาญจนบุรี, กาญจนบุรี, 71000",
    "ตำบลแก่งเสี้ยน, อำเภอเมืองกาญจนบุรี, กาญจนบุรี, 71000",
    "ตำบลท่ามะขาม, อำเภอเมืองกาญจนบุรี, กาญจนบุรี, 71000",
    "ตำบลบ้านเก่า, อำเภอเมืองกาญจนบุรี, กาญจนบุรี, 71000",
    "ตำบลบ้านเหนือ, อำเภอเมืองกาญจนบุรี, กาญจนบุรี, 71000",
    "ตำบลบ้านใต้, อำเภอเมืองกาญจนบุรี, กาญจนบุรี, 71000",
    "ตำบลปากแพรก, อำเภอเมืองกาญจนบุรี, กาญจนบุรี, 71000",
    "ตำบลวังเย็น, อำเภอเมืองกาญจนบุรี, กาญจนบุรี, 71000",
    "ตำบลหนองหญ้า, อำเภอเมืองกาญจนบุรี, กาญจนบุรี, 71000",
    "ตำบลเขาน้อย, อำเภอท่าม่วง, กาญจนบุรี, 71110",
    "ตำบลท่าม่วง, อำเภอท่าม่วง, กาญจนบุรี, 71110",
    "ตำบลท่าล้อ, อำเภอท่าม่วง, กาญจนบุรี, 71110",
    "ตำบลทุ่งทอง, อำเภอท่าม่วง, กาญจนบุรี, 71110",
    "ตำบลบ้านใหม่, อำเภอท่าม่วง, กาญจนบุรี, 71110",
    "ตำบลพังตรุ, อำเภอท่าม่วง, กาญจนบุรี, 71110",
    "ตำบลม่วงชุม, อำเภอท่าม่วง, กาญจนบุรี, 71110",
    "ตำบลรางสาลี่, อำเภอท่าม่วง, กาญจนบุรี, 71110",
    "ตำบลวังขนาย, อำเภอท่าม่วง, กาญจนบุรี, 71110",
    "ตำบลวังศาลา, อำเภอท่าม่วง, กาญจนบุรี, 71110",
    "ตำบลหนองขาว, อำเภอท่าม่วง, กาญจนบุรี, 71110",
    "ตำบลหนองตากยา, อำเภอท่าม่วง, กาญจนบุรี, 71110",
    "ตำบลเขาสามสิบหาบ, อำเภอท่ามะกา, กาญจนบุรี, 71120",
    "ตำบลโคกตะบอง, อำเภอท่ามะกา, กาญจนบุรี, 71120",
    "ตำบลดอนขมิ้น, อำเภอท่ามะกา, กาญจนบุรี, 71120",
    "ตำบลท่าเสา, อำเภอท่ามะกา, กาญจนบุรี, 71120",
    "ตำบลท่าไม้, อำเภอท่ามะกา, กาญจนบุรี, 71120",
    "ตำบลท่ามะกา, อำเภอท่ามะกา, กาญจนบุรี, 71120",
    "ตำบลพงตึก, อำเภอท่ามะกา, กาญจนบุรี, 71120",
    "ตำบลยางม่วง, อำเภอท่ามะกา, กาญจนบุรี, 71120",
    "ตำบลหวายเหนียว, อำเภอท่ามะกา, กาญจนบุรี, 71120",
    "ตำบลท่าตะคร้อ, อำเภอท่าม่วง, กาญจนบุรี, 71130",
    "ตำบลแสนตอ, อำเภอท่ามะกา, กาญจนบุรี, 71130",
    "ตำบลดอนชะเอม, อำเภอท่ามะกา, กาญจนบุรี, 71130",
    "ตำบลตะคร้ำเอน, อำเภอท่ามะกา, กาญจนบุรี, 71130",
    "ตำบลท่าเรือ, อำเภอท่ามะกา, กาญจนบุรี, 71130",
    "ตำบลพระแท่น, อำเภอท่ามะกา, กาญจนบุรี, 71130",
    "ตำบลหนองลาน, อำเภอท่ามะกา, กาญจนบุรี, 71130",
    "ตำบลอุโลกสี่หมื่น, อำเภอท่ามะกา, กาญจนบุรี, 71130",
    "ตำบลดอนเจดีย์, อำเภอพนมทวน, กาญจนบุรี, 71140",
    "ตำบลดอนตาเพชร, อำเภอพนมทวน, กาญจนบุรี, 71140",
    "ตำบลทุ่งสมอ, อำเภอพนมทวน, กาญจนบุรี, 71140",
    "ตำบลพนมทวน, อำเภอพนมทวน, กาญจนบุรี, 71140",
    "ตำบลพังตรุ, อำเภอพนมทวน, กาญจนบุรี, 71140",
    "ตำบลหนองโรง, อำเภอพนมทวน, กาญจนบุรี, 71140",
    "ตำบลหนองสาหร่าย, อำเภอพนมทวน, กาญจนบุรี, 71140",
    "ตำบลไทรโยค, อำเภอไทรโยค, กาญจนบุรี, 71150",
    "ตำบลท่าเสา, อำเภอไทรโยค, กาญจนบุรี, 71150",
    "ตำบลบ้องตี้, อำเภอไทรโยค, กาญจนบุรี, 71150",
    "ตำบลลุ่มสุ่ม, อำเภอไทรโยค, กาญจนบุรี, 71150",
    "ตำบลวังกระแจะ, อำเภอไทรโยค, กาญจนบุรี, 71150",
    "ตำบลศรีมงคล, อำเภอไทรโยค, กาญจนบุรี, 71150",
    "ตำบลสิงห์, อำเภอไทรโยค, กาญจนบุรี, 71150",
    "ตำบลช่องด่าน, อำเภอบ่อพลอย, กาญจนบุรี, 71160",
    "ตำบลบ่อพลอย, อำเภอบ่อพลอย, กาญจนบุรี, 71160",
    "ตำบลหนองกุ่ม, อำเภอบ่อพลอย, กาญจนบุรี, 71160",
    "ตำบลหลุมรัง, อำเภอบ่อพลอย, กาญจนบุรี, 71160",
    "ตำบลรางหวาย, อำเภอพนมทวน, กาญจนบุรี, 71170",
    "ตำบลดอนแสลบ, อำเภอห้วยกระเจา, กาญจนบุรี, 71170",
    "ตำบลวังไผ่, อำเภอห้วยกระเจา, กาญจนบุรี, 71170",
    "ตำบลสระลงเรือ, อำเภอห้วยกระเจา, กาญจนบุรี, 71170",
    "ตำบลห้วยกระเจา, อำเภอห้วยกระเจา, กาญจนบุรี, 71170",
    "ตำบลชะแล, อำเภอทองผาภูมิ, กาญจนบุรี, 71180",
    "ตำบลท่าขนุน, อำเภอทองผาภูมิ, กาญจนบุรี, 71180",
    "ตำบลปิล๊อก, อำเภอทองผาภูมิ, กาญจนบุรี, 71180",
    "ตำบลลิ่นถิ่น, อำเภอทองผาภูมิ, กาญจนบุรี, 71180",
    "ตำบลสหกรณ์นิคม, อำเภอทองผาภูมิ, กาญจนบุรี, 71180",
    "ตำบลห้วยเขย่ง, อำเภอทองผาภูมิ, กาญจนบุรี, 71180",
    "ตำบลหินดาด, อำเภอทองผาภูมิ, กาญจนบุรี, 71180",
    "ตำบลช่องสะเดา, อำเภอเมืองกาญจนบุรี, กาญจนบุรี, 71190",
    "ตำบลลาดหญ้า, อำเภอเมืองกาญจนบุรี, กาญจนบุรี, 71190",
    "ตำบลวังด้ง, อำเภอเมืองกาญจนบุรี, กาญจนบุรี, 71190",
    "ตำบลหนองบัว, อำเภอเมืองกาญจนบุรี, กาญจนบุรี, 71190",
    "ตำบลเลาขวัญ, อำเภอเลาขวัญ, กาญจนบุรี, 71210",
    "ตำบลทุ่งกระบ่ำ, อำเภอเลาขวัญ, กาญจนบุรี, 71210",
    "ตำบลหนองโสน, อำเภอเลาขวัญ, กาญจนบุรี, 71210",
    "ตำบลหนองนกแก้ว, อำเภอเลาขวัญ, กาญจนบุรี, 71210",
    "ตำบลหนองประดู่, อำเภอเลาขวัญ, กาญจนบุรี, 71210",
    "ตำบลหนองปลิง, อำเภอเลาขวัญ, กาญจนบุรี, 71210",
    "ตำบลหนองฝ้าย, อำเภอเลาขวัญ, กาญจนบุรี, 71210",
    "ตำบลหนองกร่าง, อำเภอบ่อพลอย, กาญจนบุรี, 71220",
    "ตำบลหนองรี, อำเภอบ่อพลอย, กาญจนบุรี, 71220",
    "ตำบลเขาโจด, อำเภอศรีสวัสดิ์, กาญจนบุรี, 71220",
    "ตำบลสมเด็จเจริญ, อำเภอหนองปรือ, กาญจนบุรี, 71220",
    "ตำบลหนองปรือ, อำเภอหนองปรือ, กาญจนบุรี, 71220",
    "ตำบลหนองปลาไหล, อำเภอหนองปรือ, กาญจนบุรี, 71220",
    "ตำบลไล่โว่, อำเภอสังขละบุรี, กาญจนบุรี, 71240",
    "ตำบลปรังเผล, อำเภอสังขละบุรี, กาญจนบุรี, 71240",
    "ตำบลหนองลู, อำเภอสังขละบุรี, กาญจนบุรี, 71240",
    "ตำบลแม่กระบุง, อำเภอศรีสวัสดิ์, กาญจนบุรี, 71250",
    "ตำบลด่านแม่แฉลบ, อำเภอศรีสวัสดิ์, กาญจนบุรี, 71250",
    "ตำบลท่ากระดาน, อำเภอศรีสวัสดิ์, กาญจนบุรี, 71250",
    "ตำบลนาสวน, อำเภอศรีสวัสดิ์, กาญจนบุรี, 71250",
    "ตำบลหนองเป็ด, อำเภอศรีสวัสดิ์, กาญจนบุรี, 71250",
    "ตำบลกลอนโด, อำเภอด่านมะขามเตี้ย, กาญจนบุรี, 71260",
    "ตำบลจรเข้เผือก, อำเภอด่านมะขามเตี้ย, กาญจนบุรี, 71260",
    "ตำบลด่านมะขามเตี้ย, อำเภอด่านมะขามเตี้ย, กาญจนบุรี, 71260",
    "ตำบลหนองไผ่, อำเภอด่านมะขามเตี้ย, กาญจนบุรี, 71260",
    "ตำบลโคกโคเฒ่า, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72000",
    "ตำบลโพธิ์พระยา, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72000",
    "ตำบลไผ่ขวาง, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72000",
    "ตำบลดอนโพธิ์ทอง, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72000",
    "ตำบลดอนกำยาน, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72000",
    "ตำบลดอนตาล, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72000",
    "ตำบลดอนมะสังข์, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72000",
    "ตำบลทับตีเหล็ก, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72000",
    "ตำบลท่าพี่เลี้ยง, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72000",
    "ตำบลท่าระหัด, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72000",
    "ตำบลบ้านโพธิ์, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72000",
    "ตำบลพิหารแดง, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72000",
    "ตำบลรั้วใหญ่, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72000",
    "ตำบลสนามชัย, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72000",
    "ตำบลเนินพระปรางค์, อำเภอสองพี่น้อง, สุพรรณบุรี, 72110",
    "ตำบลดอนมะนาว, อำเภอสองพี่น้อง, สุพรรณบุรี, 72110",
    "ตำบลต้นตาล, อำเภอสองพี่น้อง, สุพรรณบุรี, 72110",
    "ตำบลบางเลน, อำเภอสองพี่น้อง, สุพรรณบุรี, 72110",
    "ตำบลบางตะเคียน, อำเภอสองพี่น้อง, สุพรรณบุรี, 72110",
    "ตำบลบางตาเถร, อำเภอสองพี่น้อง, สุพรรณบุรี, 72110",
    "ตำบลบางพลับ, อำเภอสองพี่น้อง, สุพรรณบุรี, 72110",
    "ตำบลบ้านกุ่ม, อำเภอสองพี่น้อง, สุพรรณบุรี, 72110",
    "ตำบลบ้านช้าง, อำเภอสองพี่น้อง, สุพรรณบุรี, 72110",
    "ตำบลศรีสำราญ, อำเภอสองพี่น้อง, สุพรรณบุรี, 72110",
    "ตำบลสองพี่น้อง, อำเภอสองพี่น้อง, สุพรรณบุรี, 72110",
    "ตำบลหนองบ่อ, อำเภอสองพี่น้อง, สุพรรณบุรี, 72110",
    "ตำบลหัวโพธิ์, อำเภอสองพี่น้อง, สุพรรณบุรี, 72110",
    "ตำบลเขาดิน, อำเภอเดิมบางนางบวช, สุพรรณบุรี, 72120",
    "ตำบลเขาพระ, อำเภอเดิมบางนางบวช, สุพรรณบุรี, 72120",
    "ตำบลเดิมบาง, อำเภอเดิมบางนางบวช, สุพรรณบุรี, 72120",
    "ตำบลโคกช้าง, อำเภอเดิมบางนางบวช, สุพรรณบุรี, 72120",
    "ตำบลทุ่งคลี, อำเภอเดิมบางนางบวช, สุพรรณบุรี, 72120",
    "ตำบลนางบวช, อำเภอเดิมบางนางบวช, สุพรรณบุรี, 72120",
    "ตำบลบ่อกรุ, อำเภอเดิมบางนางบวช, สุพรรณบุรี, 72120",
    "ตำบลปากน้ำ, อำเภอเดิมบางนางบวช, สุพรรณบุรี, 72120",
    "ตำบลป่าสะแก, อำเภอเดิมบางนางบวช, สุพรรณบุรี, 72120",
    "ตำบลยางนอน, อำเภอเดิมบางนางบวช, สุพรรณบุรี, 72120",
    "ตำบลวังศรีราช, อำเภอเดิมบางนางบวช, สุพรรณบุรี, 72120",
    "ตำบลหนองกระทุ่ม, อำเภอเดิมบางนางบวช, สุพรรณบุรี, 72120",
    "ตำบลหัวเขา, อำเภอเดิมบางนางบวช, สุพรรณบุรี, 72120",
    "ตำบลหัวนา, อำเภอเดิมบางนางบวช, สุพรรณบุรี, 72120",
    "ตำบลกระเสียว, อำเภอสามชุก, สุพรรณบุรี, 72130",
    "ตำบลบ้านสระ, อำเภอสามชุก, สุพรรณบุรี, 72130",
    "ตำบลย่านยาว, อำเภอสามชุก, สุพรรณบุรี, 72130",
    "ตำบลวังลึก, อำเภอสามชุก, สุพรรณบุรี, 72130",
    "ตำบลสามชุก, อำเภอสามชุก, สุพรรณบุรี, 72130",
    "ตำบลหนองผักนาก, อำเภอสามชุก, สุพรรณบุรี, 72130",
    "ตำบลหนองสะเดา, อำเภอสามชุก, สุพรรณบุรี, 72130",
    "ตำบลดอนปรู, อำเภอศรีประจันต์, สุพรรณบุรี, 72140",
    "ตำบลบางงาม, อำเภอศรีประจันต์, สุพรรณบุรี, 72140",
    "ตำบลบ้านกร่าง, อำเภอศรีประจันต์, สุพรรณบุรี, 72140",
    "ตำบลปลายนา, อำเภอศรีประจันต์, สุพรรณบุรี, 72140",
    "ตำบลมดแดง, อำเภอศรีประจันต์, สุพรรณบุรี, 72140",
    "ตำบลวังน้ำซับ, อำเภอศรีประจันต์, สุพรรณบุรี, 72140",
    "ตำบลวังยาง, อำเภอศรีประจันต์, สุพรรณบุรี, 72140",
    "ตำบลวังหว้า, อำเภอศรีประจันต์, สุพรรณบุรี, 72140",
    "ตำบลศรีประจันต์, อำเภอศรีประจันต์, สุพรรณบุรี, 72140",
    "ตำบลโคกคราม, อำเภอบางปลาม้า, สุพรรณบุรี, 72150",
    "ตำบลไผ่กองดิน, อำเภอบางปลาม้า, สุพรรณบุรี, 72150",
    "ตำบลกฤษณา, อำเภอบางปลาม้า, สุพรรณบุรี, 72150",
    "ตำบลจรเข้ใหญ่, อำเภอบางปลาม้า, สุพรรณบุรี, 72150",
    "ตำบลตะค่า, อำเภอบางปลาม้า, สุพรรณบุรี, 72150",
    "ตำบลบางใหญ่, อำเภอบางปลาม้า, สุพรรณบุรี, 72150",
    "ตำบลบางปลาม้า, อำเภอบางปลาม้า, สุพรรณบุรี, 72150",
    "ตำบลบ้านแหลม, อำเภอบางปลาม้า, สุพรรณบุรี, 72150",
    "ตำบลมะขามล้ม, อำเภอบางปลาม้า, สุพรรณบุรี, 72150",
    "ตำบลวังน้ำเย็น, อำเภอบางปลาม้า, สุพรรณบุรี, 72150",
    "ตำบลวัดโบสถ์, อำเภอบางปลาม้า, สุพรรณบุรี, 72150",
    "ตำบลวัดดาว, อำเภอบางปลาม้า, สุพรรณบุรี, 72150",
    "ตำบลสาลี, อำเภอบางปลาม้า, สุพรรณบุรี, 72150",
    "ตำบลองครักษ์, อำเภอบางปลาม้า, สุพรรณบุรี, 72150",
    "ตำบลเจดีย์, อำเภออู่ทอง, สุพรรณบุรี, 72160",
    "ตำบลกระจัน, อำเภออู่ทอง, สุพรรณบุรี, 72160",
    "ตำบลจรเข้สามพัน, อำเภออู่ทอง, สุพรรณบุรี, 72160",
    "ตำบลดอนคา, อำเภออู่ทอง, สุพรรณบุรี, 72160",
    "ตำบลบ้านโข้ง, อำเภออู่ทอง, สุพรรณบุรี, 72160",
    "ตำบลบ้านดอน, อำเภออู่ทอง, สุพรรณบุรี, 72160",
    "ตำบลพลับพลาไชย, อำเภออู่ทอง, สุพรรณบุรี, 72160",
    "ตำบลยุ้งทะลาย, อำเภออู่ทอง, สุพรรณบุรี, 72160",
    "ตำบลหนองโอ่ง, อำเภออู่ทอง, สุพรรณบุรี, 72160",
    "ตำบลอู่ทอง, อำเภออู่ทอง, สุพรรณบุรี, 72160",
    "ตำบลไร่รถ, อำเภอดอนเจดีย์, สุพรรณบุรี, 72170",
    "ตำบลดอนเจดีย์, อำเภอดอนเจดีย์, สุพรรณบุรี, 72170",
    "ตำบลหนองสาหร่าย, อำเภอดอนเจดีย์, สุพรรณบุรี, 72170",
    "ตำบลด่านช้าง, อำเภอด่านช้าง, สุพรรณบุรี, 72180",
    "ตำบลนิคมกระเสียว, อำเภอด่านช้าง, สุพรรณบุรี, 72180",
    "ตำบลวังคัน, อำเภอด่านช้าง, สุพรรณบุรี, 72180",
    "ตำบลวังยาว, อำเภอด่านช้าง, สุพรรณบุรี, 72180",
    "ตำบลหนองมะค่าโมง, อำเภอด่านช้าง, สุพรรณบุรี, 72180",
    "ตำบลห้วยขมิ้น, อำเภอด่านช้าง, สุพรรณบุรี, 72180",
    "ตำบลองค์พระ, อำเภอด่านช้าง, สุพรรณบุรี, 72180",
    "ตำบลทุ่งคอก, อำเภอสองพี่น้อง, สุพรรณบุรี, 72190",
    "ตำบลบ่อสุพรรณ, อำเภอสองพี่น้อง, สุพรรณบุรี, 72190",
    "ตำบลหนองบ่อ, อำเภอสองพี่น้อง, สุพรรณบุรี, 72190",
    "ตำบลบางกุ้ง, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72210",
    "ตำบลศาลาขาว, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72210",
    "ตำบลสวนแตง, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72210",
    "ตำบลดอนมะเกลือ, อำเภออู่ทอง, สุพรรณบุรี, 72220",
    "ตำบลสระพังลาน, อำเภออู่ทอง, สุพรรณบุรี, 72220",
    "ตำบลสระยายโสม, อำเภออู่ทอง, สุพรรณบุรี, 72220",
    "ตำบลตลิ่งชัน, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72230",
    "ตำบลสนามคลี, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72230",
    "ตำบลสระแก้ว, อำเภอเมืองสุพรรณบุรี, สุพรรณบุรี, 72230",
    "ตำบลแจงงาม, อำเภอหนองหญ้าไซ, สุพรรณบุรี, 72240",
    "ตำบลทัพหลวง, อำเภอหนองหญ้าไซ, สุพรรณบุรี, 72240",
    "ตำบลหนองโพธิ์, อำเภอหนองหญ้าไซ, สุพรรณบุรี, 72240",
    "ตำบลหนองขาม, อำเภอหนองหญ้าไซ, สุพรรณบุรี, 72240",
    "ตำบลหนองราชวัตร, อำเภอหนองหญ้าไซ, สุพรรณบุรี, 72240",
    "ตำบลหนองหญ้าไซ, อำเภอหนองหญ้าไซ, สุพรรณบุรี, 72240",
    "ตำบลทะเลบก, อำเภอดอนเจดีย์, สุพรรณบุรี, 72250",
    "ตำบลสระกระโจม, อำเภอดอนเจดีย์, สุพรรณบุรี, 72250",
    "ตำบลโพรงมะเดื่อ, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลดอนยายหอม, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลตาก้อง, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลถนนขาด, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลทัพหลวง, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลทุ่งน้อย, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลธรรมศาลา, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลนครปฐม, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลบ่อพลับ, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลบางแขม, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลบ้านยาง, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลพระปฐมเจดีย์, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลพระประโทน, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลมาบแค, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลลำพยา, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลวังเย็น, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลวังตะกู, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลสนามจันทร์, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลสระกะเทียม, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลสวนป่าน, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลสามควายเผือก, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลหนองงูเหลือม, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลหนองดินแดง, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลหนองปากโลง, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลห้วยจรเข้, อำเภอเมืองนครปฐม, นครปฐม, 73000",
    "ตำบลคลองใหม่, อำเภอสามพราน, นครปฐม, 73110",
    "ตำบลคลองจินดา, อำเภอสามพราน, นครปฐม, 73110",
    "ตำบลตลาดจินดา, อำเภอสามพราน, นครปฐม, 73110",
    "ตำบลท่าข้าม, อำเภอสามพราน, นครปฐม, 73110",
    "ตำบลท่าตลาด, อำเภอสามพราน, นครปฐม, 73110",
    "ตำบลบางช้าง, อำเภอสามพราน, นครปฐม, 73110",
    "ตำบลบ้านใหม่, อำเภอสามพราน, นครปฐม, 73110",
    "ตำบลยายชา, อำเภอสามพราน, นครปฐม, 73110",
    "ตำบลสามพราน, อำเภอสามพราน, นครปฐม, 73110",
    "ตำบลหอมเกร็ด, อำเภอสามพราน, นครปฐม, 73110",
    "ตำบลแหลมบัว, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลโคกพระเจดีย์, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลไทยาวาส, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลขุนแก้ว, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลงิ้วราย, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลดอนแฝก, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลท่ากระชับ, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลท่าตำหนัก, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลท่าพระยา, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลนครชัยศรี, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลบางแก้ว, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลบางแก้วฟ้า, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลบางกระเบา, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลบางพระ, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลบางระกำ, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลพะเนียด, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลลานตากฟ้า, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลวัดแค, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลวัดละมุด, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลวัดสำโรง, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลศรีมหาโพธิ์, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลศรีษะทอง, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลสัมปทวน, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลห้วยพลู, อำเภอนครชัยศรี, นครปฐม, 73120",
    "ตำบลไทรงาม, อำเภอบางเลน, นครปฐม, 73130",
    "ตำบลไผ่หูช้าง, อำเภอบางเลน, นครปฐม, 73130",
    "ตำบลคลองนกกระทุง, อำเภอบางเลน, นครปฐม, 73130",
    "ตำบลดอนตูม, อำเภอบางเลน, นครปฐม, 73130",
    "ตำบลนราภิรมย์, อำเภอบางเลน, นครปฐม, 73130",
    "ตำบลนิลเพชร, อำเภอบางเลน, นครปฐม, 73130",
    "ตำบลบัวปากท่า, อำเภอบางเลน, นครปฐม, 73130",
    "ตำบลบางเลน, อำเภอบางเลน, นครปฐม, 73130",
    "ตำบลบางไทรป่า, อำเภอบางเลน, นครปฐม, 73130",
    "ตำบลบางปลา, อำเภอบางเลน, นครปฐม, 73130",
    "ตำบลบางภาษี, อำเภอบางเลน, นครปฐม, 73130",
    "ตำบลบางระกำ, อำเภอบางเลน, นครปฐม, 73130",
    "ตำบลลำพญา, อำเภอบางเลน, นครปฐม, 73130",
    "ตำบลกำแพงแสน, อำเภอกำแพงแสน, นครปฐม, 73140",
    "ตำบลดอนข่อย, อำเภอกำแพงแสน, นครปฐม, 73140",
    "ตำบลทุ่งกระพังโหม, อำเภอกำแพงแสน, นครปฐม, 73140",
    "ตำบลทุ่งขวาง, อำเภอกำแพงแสน, นครปฐม, 73140",
    "ตำบลทุ่งบัว, อำเภอกำแพงแสน, นครปฐม, 73140",
    "ตำบลทุ่งลูกนก, อำเภอกำแพงแสน, นครปฐม, 73140",
    "ตำบลรางพิกุล, อำเภอกำแพงแสน, นครปฐม, 73140",
    "ตำบลวังน้ำเขียว, อำเภอกำแพงแสน, นครปฐม, 73140",
    "ตำบลสระสี่มุม, อำเภอกำแพงแสน, นครปฐม, 73140",
    "ตำบลหนองกระทุ่ม, อำเภอกำแพงแสน, นครปฐม, 73140",
    "ตำบลห้วยขวาง, อำเภอกำแพงแสน, นครปฐม, 73140",
    "ตำบลห้วยหมอนทอง, อำเภอกำแพงแสน, นครปฐม, 73140",
    "ตำบลดอนพุทรา, อำเภอดอนตูม, นครปฐม, 73150",
    "ตำบลดอนรวก, อำเภอดอนตูม, นครปฐม, 73150",
    "ตำบลบ้านหลวง, อำเภอดอนตูม, นครปฐม, 73150",
    "ตำบลลำเหย, อำเภอดอนตูม, นครปฐม, 73150",
    "ตำบลลำลูกบัว, อำเภอดอนตูม, นครปฐม, 73150",
    "ตำบลสามง่าม, อำเภอดอนตูม, นครปฐม, 73150",
    "ตำบลห้วยด้วน, อำเภอดอนตูม, นครปฐม, 73150",
    "ตำบลห้วยพระ, อำเภอดอนตูม, นครปฐม, 73150",
    "ตำบลอ้อมใหญ่, อำเภอสามพราน, นครปฐม, 73160",
    "ตำบลคลองโยง, อำเภอพุทธมณฑล, นครปฐม, 73170",
    "ตำบลมหาสวัสดิ์, อำเภอพุทธมณฑล, นครปฐม, 73170",
    "ตำบลศาลายา, อำเภอพุทธมณฑล, นครปฐม, 73170",
    "ตำบลกระตีบ, อำเภอกำแพงแสน, นครปฐม, 73180",
    "ตำบลสระพัฒนา, อำเภอกำแพงแสน, นครปฐม, 73180",
    "ตำบลห้วยม่วง, อำเภอกำแพงแสน, นครปฐม, 73180",
    "ตำบลบางหลวง, อำเภอบางเลน, นครปฐม, 73190",
    "ตำบลหินมูล, อำเภอบางเลน, นครปฐม, 73190",
    "ตำบลไร่ขิง, อำเภอสามพราน, นครปฐม, 73210",
    "ตำบลทรงคนอง, อำเภอสามพราน, นครปฐม, 73210",
    "ตำบลบางเตย, อำเภอสามพราน, นครปฐม, 73210",
    "ตำบลบางกระทึก, อำเภอสามพราน, นครปฐม, 73210",
    "ตำบลกระทุ่มล้ม, อำเภอสามพราน, นครปฐม, 73220",
    "ตำบลโกรกกราก, อำเภอเมืองสมุทรสาคร, สมุทรสาคร, 74000",
    "ตำบลโคกขาม, อำเภอเมืองสมุทรสาคร, สมุทรสาคร, 74000",
    "ตำบลกาหลง, อำเภอเมืองสมุทรสาคร, สมุทรสาคร, 74000",
    "ตำบลคอกกระบือ, อำเภอเมืองสมุทรสาคร, สมุทรสาคร, 74000",
    "ตำบลชัยมงคล, อำเภอเมืองสมุทรสาคร, สมุทรสาคร, 74000",
    "ตำบลท่าจีน, อำเภอเมืองสมุทรสาคร, สมุทรสาคร, 74000",
    "ตำบลท่าฉลอม, อำเภอเมืองสมุทรสาคร, สมุทรสาคร, 74000",
    "ตำบลท่าทราย, อำเภอเมืองสมุทรสาคร, สมุทรสาคร, 74000",
    "ตำบลนาโคก, อำเภอเมืองสมุทรสาคร, สมุทรสาคร, 74000",
    "ตำบลนาดี, อำเภอเมืองสมุทรสาคร, สมุทรสาคร, 74000",
    "ตำบลบางโทรัด, อำเภอเมืองสมุทรสาคร, สมุทรสาคร, 74000",
    "ตำบลบางกระเจ้า, อำเภอเมืองสมุทรสาคร, สมุทรสาคร, 74000",
    "ตำบลบางน้ำจืด, อำเภอเมืองสมุทรสาคร, สมุทรสาคร, 74000",
    "ตำบลบางหญ้าแพรก, อำเภอเมืองสมุทรสาคร, สมุทรสาคร, 74000",
    "ตำบลบ้านเกาะ, อำเภอเมืองสมุทรสาคร, สมุทรสาคร, 74000",
    "ตำบลบ้านบ่อ, อำเภอเมืองสมุทรสาคร, สมุทรสาคร, 74000",
    "ตำบลพันท้ายนรสิงห์, อำเภอเมืองสมุทรสาคร, สมุทรสาคร, 74000",
    "ตำบลมหาชัย, อำเภอเมืองสมุทรสาคร, สมุทรสาคร, 74000",
    "ตำบลแคราย, อำเภอกระทุ่มแบน, สมุทรสาคร, 74110",
    "ตำบลคลองมะเดื่อ, อำเภอกระทุ่มแบน, สมุทรสาคร, 74110",
    "ตำบลดอนไก่ดี, อำเภอกระทุ่มแบน, สมุทรสาคร, 74110",
    "ตำบลตลาดกระทุ่มแบน, อำเภอกระทุ่มแบน, สมุทรสาคร, 74110",
    "ตำบลท่าเสา, อำเภอกระทุ่มแบน, สมุทรสาคร, 74110",
    "ตำบลท่าไม้, อำเภอกระทุ่มแบน, สมุทรสาคร, 74110",
    "ตำบลบางยาง, อำเภอกระทุ่มแบน, สมุทรสาคร, 74110",
    "ตำบลสวนหลวง, อำเภอกระทุ่มแบน, สมุทรสาคร, 74110",
    "ตำบลหนองนกไข่, อำเภอกระทุ่มแบน, สมุทรสาคร, 74110",
    "ตำบลเกษตรพัฒนา, อำเภอบ้านแพ้ว, สมุทรสาคร, 74120",
    "ตำบลเจ็ดริ้ว, อำเภอบ้านแพ้ว, สมุทรสาคร, 74120",
    "ตำบลโรงเข้, อำเภอบ้านแพ้ว, สมุทรสาคร, 74120",
    "ตำบลคลองตัน, อำเภอบ้านแพ้ว, สมุทรสาคร, 74120",
    "ตำบลบ้านแพ้ว, อำเภอบ้านแพ้ว, สมุทรสาคร, 74120",
    "ตำบลยกกระบัตร, อำเภอบ้านแพ้ว, สมุทรสาคร, 74120",
    "ตำบลสวนส้ม, อำเภอบ้านแพ้ว, สมุทรสาคร, 74120",
    "ตำบลหนองบัว, อำเภอบ้านแพ้ว, สมุทรสาคร, 74120",
    "ตำบลหนองสองห้อง, อำเภอบ้านแพ้ว, สมุทรสาคร, 74120",
    "ตำบลหลักสอง, อำเภอบ้านแพ้ว, สมุทรสาคร, 74120",
    "ตำบลหลักสาม, อำเภอบ้านแพ้ว, สมุทรสาคร, 74120",
    "ตำบลอำแพง, อำเภอบ้านแพ้ว, สมุทรสาคร, 74120",
    "ตำบลอ้อมน้อย, อำเภอกระทุ่มแบน, สมุทรสาคร, 74130",
    "ตำบลแม่กลอง, อำเภอเมืองสมุทรสงคราม, สมุทรสงคราม, 75000",
    "ตำบลแหลมใหญ่, อำเภอเมืองสมุทรสงคราม, สมุทรสงคราม, 75000",
    "ตำบลคลองเขิน, อำเภอเมืองสมุทรสงคราม, สมุทรสงคราม, 75000",
    "ตำบลคลองโคน, อำเภอเมืองสมุทรสงคราม, สมุทรสงคราม, 75000",
    "ตำบลท้ายหาด, อำเภอเมืองสมุทรสงคราม, สมุทรสงคราม, 75000",
    "ตำบลนางตะเคียน, อำเภอเมืองสมุทรสงคราม, สมุทรสงคราม, 75000",
    "ตำบลบางแก้ว, อำเภอเมืองสมุทรสงคราม, สมุทรสงคราม, 75000",
    "ตำบลบางขันแตก, อำเภอเมืองสมุทรสงคราม, สมุทรสงคราม, 75000",
    "ตำบลบางจะเกร็ง, อำเภอเมืองสมุทรสงคราม, สมุทรสงคราม, 75000",
    "ตำบลบ้านปรก, อำเภอเมืองสมุทรสงคราม, สมุทรสงคราม, 75000",
    "ตำบลลาดใหญ่, อำเภอเมืองสมุทรสงคราม, สมุทรสงคราม, 75000",
    "ตำบลเหมืองใหม่, อำเภออัมพวา, สมุทรสงคราม, 75110",
    "ตำบลแควอ้อม, อำเภออัมพวา, สมุทรสงคราม, 75110",
    "ตำบลแพรกหนามแดง, อำเภออัมพวา, สมุทรสงคราม, 75110",
    "ตำบลท่าคา, อำเภออัมพวา, สมุทรสงคราม, 75110",
    "ตำบลบางแค, อำเภออัมพวา, สมุทรสงคราม, 75110",
    "ตำบลบางช้าง, อำเภออัมพวา, สมุทรสงคราม, 75110",
    "ตำบลบางนางลี่, อำเภออัมพวา, สมุทรสงคราม, 75110",
    "ตำบลปลายโพงพาง, อำเภออัมพวา, สมุทรสงคราม, 75110",
    "ตำบลยี่สาร, อำเภออัมพวา, สมุทรสงคราม, 75110",
    "ตำบลวัดประดู่, อำเภออัมพวา, สมุทรสงคราม, 75110",
    "ตำบลสวนหลวง, อำเภออัมพวา, สมุทรสงคราม, 75110",
    "ตำบลอัมพวา, อำเภออัมพวา, สมุทรสงคราม, 75110",
    "ตำบลโรงหีบ, อำเภอบางคนที, สมุทรสงคราม, 75120",
    "ตำบลกระดังงา, อำเภอบางคนที, สมุทรสงคราม, 75120",
    "ตำบลจอมปลวก, อำเภอบางคนที, สมุทรสงคราม, 75120",
    "ตำบลดอนมะโนรา, อำเภอบางคนที, สมุทรสงคราม, 75120",
    "ตำบลบางกระบือ, อำเภอบางคนที, สมุทรสงคราม, 75120",
    "ตำบลบางกุ้ง, อำเภอบางคนที, สมุทรสงคราม, 75120",
    "ตำบลบางคนที, อำเภอบางคนที, สมุทรสงคราม, 75120",
    "ตำบลบางนกแขวก, อำเภอบางคนที, สมุทรสงคราม, 75120",
    "ตำบลบางพรม, อำเภอบางคนที, สมุทรสงคราม, 75120",
    "ตำบลบางยี่รงค์, อำเภอบางคนที, สมุทรสงคราม, 75120",
    "ตำบลบางสะแก, อำเภอบางคนที, สมุทรสงคราม, 75120",
    "ตำบลบ้านปราโมทย์, อำเภอบางคนที, สมุทรสงคราม, 75120",
    "ตำบลยายแพง, อำเภอบางคนที, สมุทรสงคราม, 75120",
    "ตำบลเวียงคอย, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลโพไร่หวาน, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลโพพระ, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลไร่ส้ม, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลคลองกระแชง, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลช่องสะแก, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลดอนยาง, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลต้นมะพร้าว, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลต้นมะม่วง, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลท่าราบ, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลธงชัย, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลนาพันสาม, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลนาวุ้ง, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลบางจาก, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลบางจาน, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลบ้านกุ่ม, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลบ้านหม้อ, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลวังตะโก, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลสำมะโรง, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลหนองโสน, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลหนองขนาน, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลหนองพลับ, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลหัวสะพาน, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76000",
    "ตำบลหาดเจ้าสำราญ, อำเภอเมืองเพชรบุรี, เพชรบุรี, 76100",
    "ตำบลแหลมผักเบี้ย, อำเภอบ้านแหลม, เพชรบุรี, 76100",
    "ตำบลท่าแร้ง, อำเภอบ้านแหลม, เพชรบุรี, 76110",
    "ตำบลท่าแร้งออก, อำเภอบ้านแหลม, เพชรบุรี, 76110",
    "ตำบลบางแก้ว, อำเภอบ้านแหลม, เพชรบุรี, 76110",
    "ตำบลบางขุนไทร, อำเภอบ้านแหลม, เพชรบุรี, 76110",
    "ตำบลบางครก, อำเภอบ้านแหลม, เพชรบุรี, 76110",
    "ตำบลบางตะบูน, อำเภอบ้านแหลม, เพชรบุรี, 76110",
    "ตำบลบางตะบูนออก, อำเภอบ้านแหลม, เพชรบุรี, 76110",
    "ตำบลบ้านแหลม, อำเภอบ้านแหลม, เพชรบุรี, 76110",
    "ตำบลปากทะเล, อำเภอบ้านแหลม, เพชรบุรี, 76110",
    "ตำบลเขาใหญ่, อำเภอชะอำ, เพชรบุรี, 76120",
    "ตำบลไร่ใหม่พัฒนา, อำเภอชะอำ, เพชรบุรี, 76120",
    "ตำบลชะอำ, อำเภอชะอำ, เพชรบุรี, 76120",
    "ตำบลดอนขุนห้วย, อำเภอชะอำ, เพชรบุรี, 76120",
    "ตำบลนายาง, อำเภอชะอำ, เพชรบุรี, 76120",
    "ตำบลบางเก่า, อำเภอชะอำ, เพชรบุรี, 76120",
    "ตำบลสามพระยา, อำเภอชะอำ, เพชรบุรี, 76120",
    "ตำบลหนองศาลา, อำเภอชะอำ, เพชรบุรี, 76120",
    "ตำบลห้วยทรายเหนือ, อำเภอชะอำ, เพชรบุรี, 76120",
    "ตำบลเขากระปุก, อำเภอท่ายาง, เพชรบุรี, 76130",
    "ตำบลกลัดหลวง, อำเภอท่ายาง, เพชรบุรี, 76130",
    "ตำบลท่าแลง, อำเภอท่ายาง, เพชรบุรี, 76130",
    "ตำบลท่าไม้รวก, อำเภอท่ายาง, เพชรบุรี, 76130",
    "ตำบลท่าคอย, อำเภอท่ายาง, เพชรบุรี, 76130",
    "ตำบลท่ายาง, อำเภอท่ายาง, เพชรบุรี, 76130",
    "ตำบลบ้านในดง, อำเภอท่ายาง, เพชรบุรี, 76130",
    "ตำบลปึกเตียน, อำเภอท่ายาง, เพชรบุรี, 76130",
    "ตำบลมาบปลาเค้า, อำเภอท่ายาง, เพชรบุรี, 76130",
    "ตำบลยางหย่อง, อำเภอท่ายาง, เพชรบุรี, 76130",
    "ตำบลวังไคร้, อำเภอท่ายาง, เพชรบุรี, 76130",
    "ตำบลหนองจอก, อำเภอท่ายาง, เพชรบุรี, 76130",
    "ตำบลเขาย้อย, อำเภอเขาย้อย, เพชรบุรี, 76140",
    "ตำบลทับคาง, อำเภอเขาย้อย, เพชรบุรี, 76140",
    "ตำบลบางเค็ม, อำเภอเขาย้อย, เพชรบุรี, 76140",
    "ตำบลสระพัง, อำเภอเขาย้อย, เพชรบุรี, 76140",
    "ตำบลหนองชุมพล, อำเภอเขาย้อย, เพชรบุรี, 76140",
    "ตำบลหนองชุมพลเหนือ, อำเภอเขาย้อย, เพชรบุรี, 76140",
    "ตำบลหนองปรง, อำเภอเขาย้อย, เพชรบุรี, 76140",
    "ตำบลหนองปลาไหล, อำเภอเขาย้อย, เพชรบุรี, 76140",
    "ตำบลห้วยโรง, อำเภอเขาย้อย, เพชรบุรี, 76140",
    "ตำบลห้วยท่าช้าง, อำเภอเขาย้อย, เพชรบุรี, 76140",
    "ตำบลโรงเข้, อำเภอบ้านลาด, เพชรบุรี, 76150",
    "ตำบลไร่โคก, อำเภอบ้านลาด, เพชรบุรี, 76150",
    "ตำบลไร่มะขาม, อำเภอบ้านลาด, เพชรบุรี, 76150",
    "ตำบลไร่สะท้อน, อำเภอบ้านลาด, เพชรบุรี, 76150",
    "ตำบลตำหรุ, อำเภอบ้านลาด, เพชรบุรี, 76150",
    "ตำบลถ้ำรงค์, อำเภอบ้านลาด, เพชรบุรี, 76150",
    "ตำบลท่าเสน, อำเภอบ้านลาด, เพชรบุรี, 76150",
    "ตำบลท่าช้าง, อำเภอบ้านลาด, เพชรบุรี, 76150",
    "ตำบลบ้านทาน, อำเภอบ้านลาด, เพชรบุรี, 76150",
    "ตำบลบ้านลาด, อำเภอบ้านลาด, เพชรบุรี, 76150",
    "ตำบลบ้านหาด, อำเภอบ้านลาด, เพชรบุรี, 76150",
    "ตำบลลาดโพธิ์, อำเภอบ้านลาด, เพชรบุรี, 76150",
    "ตำบลสมอพลือ, อำเภอบ้านลาด, เพชรบุรี, 76150",
    "ตำบลสะพานไกร, อำเภอบ้านลาด, เพชรบุรี, 76150",
    "ตำบลหนองกระเจ็ด, อำเภอบ้านลาด, เพชรบุรี, 76150",
    "ตำบลหนองกะปุ, อำเภอบ้านลาด, เพชรบุรี, 76150",
    "ตำบลห้วยข้อง, อำเภอบ้านลาด, เพชรบุรี, 76150",
    "ตำบลห้วยลึก, อำเภอบ้านลาด, เพชรบุรี, 76150",
    "ตำบลท่าตะคร้อ, อำเภอหนองหญ้าปล้อง, เพชรบุรี, 76160",
    "ตำบลยางน้ำกลัดเหนือ, อำเภอหนองหญ้าปล้อง, เพชรบุรี, 76160",
    "ตำบลยางน้ำกลัดใต้, อำเภอหนองหญ้าปล้อง, เพชรบุรี, 76160",
    "ตำบลหนองหญ้าปล้อง, อำเภอหนองหญ้าปล้อง, เพชรบุรี, 76160",
    "ตำบลแก่งกระจาน, อำเภอแก่งกระจาน, เพชรบุรี, 76170",
    "ตำบลป่าเด็ง, อำเภอแก่งกระจาน, เพชรบุรี, 76170",
    "ตำบลพุสวรรค์, อำเภอแก่งกระจาน, เพชรบุรี, 76170",
    "ตำบลวังจันทร์, อำเภอแก่งกระจาน, เพชรบุรี, 76170",
    "ตำบลสองพี่น้อง, อำเภอแก่งกระจาน, เพชรบุรี, 76170",
    "ตำบลห้วยแม่เพรียง, อำเภอแก่งกระจาน, เพชรบุรี, 76170",
    "ตำบลเกาะหลัก, อำเภอเมืองประจวบคีรีขันธ์, ประจวบคีรีขันธ์, 77000",
    "ตำบลคลองวาฬ, อำเภอเมืองประจวบคีรีขันธ์, ประจวบคีรีขันธ์, 77000",
    "ตำบลประจวบคีรีขันธ์, อำเภอเมืองประจวบคีรีขันธ์, ประจวบคีรีขันธ์, 77000",
    "ตำบลห้วยทราย, อำเภอเมืองประจวบคีรีขันธ์, ประจวบคีรีขันธ์, 77000",
    "ตำบลอ่าวน้อย, อำเภอเมืองประจวบคีรีขันธ์, ประจวบคีรีขันธ์, 77000",
    "ตำบลทับใต้, อำเภอหัวหิน, ประจวบคีรีขันธ์, 77110",
    "ตำบลบึงนคร, อำเภอหัวหิน, ประจวบคีรีขันธ์, 77110",
    "ตำบลหนองแก, อำเภอหัวหิน, ประจวบคีรีขันธ์, 77110",
    "ตำบลหนองพลับ, อำเภอหัวหิน, ประจวบคีรีขันธ์, 77110",
    "ตำบลห้วยสัตว์ใหญ่, อำเภอหัวหิน, ประจวบคีรีขันธ์, 77110",
    "ตำบลหัวหิน, อำเภอหัวหิน, ประจวบคีรีขันธ์, 77110",
    "ตำบลหินเหล็กไฟ, อำเภอหัวหิน, ประจวบคีรีขันธ์, 77110",
    "ตำบลเขาจ้าว, อำเภอปราณบุรี, ประจวบคีรีขันธ์, 77120",
    "ตำบลเขาน้อย, อำเภอปราณบุรี, ประจวบคีรีขันธ์, 77120",
    "ตำบลปราณบุรี, อำเภอปราณบุรี, ประจวบคีรีขันธ์, 77120",
    "ตำบลวังก์พง, อำเภอปราณบุรี, ประจวบคีรีขันธ์, 77120",
    "ตำบลหนองตาแต้ม, อำเภอปราณบุรี, ประจวบคีรีขันธ์, 77120",
    "ตำบลสามร้อยยอด, อำเภอสามร้อยยอด, ประจวบคีรีขันธ์, 77120",
    "ตำบลเขาล้าน, อำเภอทับสะแก, ประจวบคีรีขันธ์, 77130",
    "ตำบลแสงอรุณ, อำเภอทับสะแก, ประจวบคีรีขันธ์, 77130",
    "ตำบลทับสะแก, อำเภอทับสะแก, ประจวบคีรีขันธ์, 77130",
    "ตำบลนาหูกวาง, อำเภอทับสะแก, ประจวบคีรีขันธ์, 77130",
    "ตำบลห้วยยาง, อำเภอทับสะแก, ประจวบคีรีขันธ์, 77130",
    "ตำบลอ่างทอง, อำเภอทับสะแก, ประจวบคีรีขันธ์, 77130",
    "ตำบลแม่รำพึง, อำเภอบางสะพาน, ประจวบคีรีขันธ์, 77140",
    "ตำบลกำเนิดนพคุณ, อำเภอบางสะพาน, ประจวบคีรีขันธ์, 77140",
    "ตำบลพงศ์ประศาสน์, อำเภอบางสะพาน, ประจวบคีรีขันธ์, 77140",
    "ตำบลเขาแดง, อำเภอกุยบุรี, ประจวบคีรีขันธ์, 77150",
    "ตำบลกุยเหนือ, อำเภอกุยบุรี, ประจวบคีรีขันธ์, 77150",
    "ตำบลกุยบุรี, อำเภอกุยบุรี, ประจวบคีรีขันธ์, 77150",
    "ตำบลดอนยายหนู, อำเภอกุยบุรี, ประจวบคีรีขันธ์, 77150",
    "ตำบลสามกระทาย, อำเภอกุยบุรี, ประจวบคีรีขันธ์, 77150",
    "ตำบลหาดขาม, อำเภอกุยบุรี, ประจวบคีรีขันธ์, 77150",
    "ตำบลไชยราช, อำเภอบางสะพานน้อย, ประจวบคีรีขันธ์, 77170",
    "ตำบลช้างแรก, อำเภอบางสะพานน้อย, ประจวบคีรีขันธ์, 77170",
    "ตำบลทรายทอง, อำเภอบางสะพานน้อย, ประจวบคีรีขันธ์, 77170",
    "ตำบลบางสะพาน, อำเภอบางสะพานน้อย, ประจวบคีรีขันธ์, 77170",
    "ตำบลปากแพรก, อำเภอบางสะพานน้อย, ประจวบคีรีขันธ์, 77170",
    "ตำบลไร่เก่า, อำเภอสามร้อยยอด, ประจวบคีรีขันธ์, 77180",
    "ตำบลไร่ใหม่, อำเภอสามร้อยยอด, ประจวบคีรีขันธ์, 77180",
    "ตำบลศาลาลัย, อำเภอสามร้อยยอด, ประจวบคีรีขันธ์, 77180",
    "ตำบลศิลาลอย, อำเภอสามร้อยยอด, ประจวบคีรีขันธ์, 77180",
    "ตำบลชัยเกษม, อำเภอบางสะพาน, ประจวบคีรีขันธ์, 77190",
    "ตำบลธงชัย, อำเภอบางสะพาน, ประจวบคีรีขันธ์, 77190",
    "ตำบลบ่อนอก, อำเภอเมืองประจวบคีรีขันธ์, ประจวบคีรีขันธ์, 77210",
    "ตำบลปากน้ำปราณ, อำเภอปราณบุรี, ประจวบคีรีขันธ์, 77220",
    "ตำบลทองมงคล, อำเภอบางสะพาน, ประจวบคีรีขันธ์, 77230",
    "ตำบลร่อนทอง, อำเภอบางสะพาน, ประจวบคีรีขันธ์, 77230",
    "ตำบลโพธิ์เสด็จ, อำเภอเมืองนครศรีธรรมราช, นครศรีธรรมราช, 80000",
    "ตำบลในเมือง, อำเภอเมืองนครศรีธรรมราช, นครศรีธรรมราช, 80000",
    "ตำบลไชยมนตรี, อำเภอเมืองนครศรีธรรมราช, นครศรีธรรมราช, 80000",
    "ตำบลคลัง, อำเภอเมืองนครศรีธรรมราช, นครศรีธรรมราช, 80000",
    "ตำบลท่าเรือ, อำเภอเมืองนครศรีธรรมราช, นครศรีธรรมราช, 80000",
    "ตำบลท่าไร่, อำเภอเมืองนครศรีธรรมราช, นครศรีธรรมราช, 80000",
    "ตำบลท่าซัก, อำเภอเมืองนครศรีธรรมราช, นครศรีธรรมราช, 80000",
    "ตำบลท่าวัง, อำเภอเมืองนครศรีธรรมราช, นครศรีธรรมราช, 80000",
    "ตำบลนาเคียน, อำเภอเมืองนครศรีธรรมราช, นครศรีธรรมราช, 80000",
    "ตำบลปากนคร, อำเภอเมืองนครศรีธรรมราช, นครศรีธรรมราช, 80000",
    "ตำบลปากพูน, อำเภอเมืองนครศรีธรรมราช, นครศรีธรรมราช, 80000",
    "ตำบลมะม่วงสองต้น, อำเภอเมืองนครศรีธรรมราช, นครศรีธรรมราช, 80000",
    "ตำบลช้างซ้าย, อำเภอพระพรหม, นครศรีธรรมราช, 80000",
    "ตำบลท้ายสำเภา, อำเภอพระพรหม, นครศรีธรรมราช, 80000",
    "ตำบลนาพรุ, อำเภอพระพรหม, นครศรีธรรมราช, 80000",
    "ตำบลนาสาร, อำเภอพระพรหม, นครศรีธรรมราช, 80000",
    "ตำบลเขาโร, อำเภอทุ่งสง, นครศรีธรรมราช, 80110",
    "ตำบลเขาขาว, อำเภอทุ่งสง, นครศรีธรรมราช, 80110",
    "ตำบลควนกรด, อำเภอทุ่งสง, นครศรีธรรมราช, 80110",
    "ตำบลชะมาย, อำเภอทุ่งสง, นครศรีธรรมราช, 80110",
    "ตำบลถ้ำใหญ่, อำเภอทุ่งสง, นครศรีธรรมราช, 80110",
    "ตำบลที่วัง, อำเภอทุ่งสง, นครศรีธรรมราช, 80110",
    "ตำบลนาโพธิ์, อำเภอทุ่งสง, นครศรีธรรมราช, 80110",
    "ตำบลนาไม้ไผ่, อำเภอทุ่งสง, นครศรีธรรมราช, 80110",
    "ตำบลนาหลวงเสน, อำเภอทุ่งสง, นครศรีธรรมราช, 80110",
    "ตำบลน้ำตก, อำเภอทุ่งสง, นครศรีธรรมราช, 80110",
    "ตำบลปากแพรก, อำเภอทุ่งสง, นครศรีธรรมราช, 80110",
    "ตำบลหนองหงส์, อำเภอทุ่งสง, นครศรีธรรมราช, 80110",
    "ตำบลเขาน้อย, อำเภอสิชล, นครศรีธรรมราช, 80120",
    "ตำบลเปลี่ยน, อำเภอสิชล, นครศรีธรรมราช, 80120",
    "ตำบลฉลอง, อำเภอสิชล, นครศรีธรรมราช, 80120",
    "ตำบลทุ่งใส, อำเภอสิชล, นครศรีธรรมราช, 80120",
    "ตำบลทุ่งปรัง, อำเภอสิชล, นครศรีธรรมราช, 80120",
    "ตำบลสิชล, อำเภอสิชล, นครศรีธรรมราช, 80120",
    "ตำบลสี่ขีด, อำเภอสิชล, นครศรีธรรมราช, 80120",
    "ตำบลควนหนองคว้า, อำเภอจุฬาภรณ์, นครศรีธรรมราช, 80130",
    "ตำบลทุ่งโพธิ์, อำเภอจุฬาภรณ์, นครศรีธรรมราช, 80130",
    "ตำบลนาหมอบุญ, อำเภอจุฬาภรณ์, นครศรีธรรมราช, 80130",
    "ตำบลสามตำบล, อำเภอจุฬาภรณ์, นครศรีธรรมราช, 80130",
    "ตำบลควนเกย, อำเภอร่อนพิบูลย์, นครศรีธรรมราช, 80130",
    "ตำบลควนชุม, อำเภอร่อนพิบูลย์, นครศรีธรรมราช, 80130",
    "ตำบลควนพัง, อำเภอร่อนพิบูลย์, นครศรีธรรมราช, 80130",
    "ตำบลร่อนพิบูลย์, อำเภอร่อนพิบูลย์, นครศรีธรรมราช, 80130",
    "ตำบลแหลมตะลุมพุก, อำเภอปากพนัง, นครศรีธรรมราช, 80140",
    "ตำบลขนาบนาก, อำเภอปากพนัง, นครศรีธรรมราช, 80140",
    "ตำบลคลองกระบือ, อำเภอปากพนัง, นครศรีธรรมราช, 80140",
    "ตำบลท่าพยา, อำเภอปากพนัง, นครศรีธรรมราช, 80140",
    "ตำบลบางตะพง, อำเภอปากพนัง, นครศรีธรรมราช, 80140",
    "ตำบลบางพระ, อำเภอปากพนัง, นครศรีธรรมราช, 80140",
    "ตำบลบางศาลา, อำเภอปากพนัง, นครศรีธรรมราช, 80140",
    "ตำบลบ้านเพิง, อำเภอปากพนัง, นครศรีธรรมราช, 80140",
    "ตำบลบ้านใหม่, อำเภอปากพนัง, นครศรีธรรมราช, 80140",
    "ตำบลปากแพรก, อำเภอปากพนัง, นครศรีธรรมราช, 80140",
    "ตำบลปากพนัง, อำเภอปากพนัง, นครศรีธรรมราช, 80140",
    "ตำบลปากพนังฝั่งตะวันตก, อำเภอปากพนัง, นครศรีธรรมราช, 80140",
    "ตำบลปากพนังฝั่งตะวันออก, อำเภอปากพนัง, นครศรีธรรมราช, 80140",
    "ตำบลป่าระกำ, อำเภอปากพนัง, นครศรีธรรมราช, 80140",
    "ตำบลหูล่อง, อำเภอปากพนัง, นครศรีธรรมราช, 80140",
    "ตำบลไม้เรียง, อำเภอฉวาง, นครศรีธรรมราช, 80150",
    "ตำบลไสหร้า, อำเภอฉวาง, นครศรีธรรมราช, 80150",
    "ตำบลฉวาง, อำเภอฉวาง, นครศรีธรรมราช, 80150",
    "ตำบลนาแว, อำเภอฉวาง, นครศรีธรรมราช, 80150",
    "ตำบลนากะชะ, อำเภอฉวาง, นครศรีธรรมราช, 80150",
    "ตำบลโพธิ์ทอง, อำเภอท่าศาลา, นครศรีธรรมราช, 80160",
    "ตำบลโมคลาน, อำเภอท่าศาลา, นครศรีธรรมราช, 80160",
    "ตำบลไทยบุรี, อำเภอท่าศาลา, นครศรีธรรมราช, 80160",
    "ตำบลกลาย, อำเภอท่าศาลา, นครศรีธรรมราช, 80160",
    "ตำบลดอนตะโก, อำเภอท่าศาลา, นครศรีธรรมราช, 80160",
    "ตำบลตลิ่งชัน, อำเภอท่าศาลา, นครศรีธรรมราช, 80160",
    "ตำบลท่าขึ้น, อำเภอท่าศาลา, นครศรีธรรมราช, 80160",
    "ตำบลท่าศาลา, อำเภอท่าศาลา, นครศรีธรรมราช, 80160",
    "ตำบลสระแก้ว, อำเภอท่าศาลา, นครศรีธรรมราช, 80160",
    "ตำบลหัวตะพาน, อำเภอท่าศาลา, นครศรีธรรมราช, 80160",
    "ตำบลกรุงชิง, อำเภอนบพิตำ, นครศรีธรรมราช, 80160",
    "ตำบลกะหรอ, อำเภอนบพิตำ, นครศรีธรรมราช, 80160",
    "ตำบลนบพิตำ, อำเภอนบพิตำ, นครศรีธรรมราช, 80160",
    "ตำบลนาเหรง, อำเภอนบพิตำ, นครศรีธรรมราช, 80160",
    "ตำบลเกาะเพชร, อำเภอหัวไทร, นครศรีธรรมราช, 80170",
    "ตำบลเขาพังไกร, อำเภอหัวไทร, นครศรีธรรมราช, 80170",
    "ตำบลแหลม, อำเภอหัวไทร, นครศรีธรรมราช, 80170",
    "ตำบลควนชะลิก, อำเภอหัวไทร, นครศรีธรรมราช, 80170",
    "ตำบลทรายขาว, อำเภอหัวไทร, นครศรีธรรมราช, 80170",
    "ตำบลท่าซอม, อำเภอหัวไทร, นครศรีธรรมราช, 80170",
    "ตำบลบางนบ, อำเภอหัวไทร, นครศรีธรรมราช, 80170",
    "ตำบลบ้านราม, อำเภอหัวไทร, นครศรีธรรมราช, 80170",
    "ตำบลรามแก้ว, อำเภอหัวไทร, นครศรีธรรมราช, 80170",
    "ตำบลหน้าสตน, อำเภอหัวไทร, นครศรีธรรมราช, 80170",
    "ตำบลหัวไทร, อำเภอหัวไทร, นครศรีธรรมราช, 80170",
    "ตำบลบ้านควนมุด, อำเภอจุฬาภรณ์, นครศรีธรรมราช, 80180",
    "ตำบลบ้านชะอวด, อำเภอจุฬาภรณ์, นครศรีธรรมราช, 80180",
    "ตำบลเกาะขันธ์, อำเภอชะอวด, นครศรีธรรมราช, 80180",
    "ตำบลเขาพระทอง, อำเภอชะอวด, นครศรีธรรมราช, 80180",
    "ตำบลเคร็ง, อำเภอชะอวด, นครศรีธรรมราช, 80180",
    "ตำบลขอนหาด, อำเภอชะอวด, นครศรีธรรมราช, 80180",
    "ตำบลควนหนองหงษ์, อำเภอชะอวด, นครศรีธรรมราช, 80180",
    "ตำบลชะอวด, อำเภอชะอวด, นครศรีธรรมราช, 80180",
    "ตำบลท่าเสม็ด, อำเภอชะอวด, นครศรีธรรมราช, 80180",
    "ตำบลท่าประจะ, อำเภอชะอวด, นครศรีธรรมราช, 80180",
    "ตำบลนางหลง, อำเภอชะอวด, นครศรีธรรมราช, 80180",
    "ตำบลบ้านตูล, อำเภอชะอวด, นครศรีธรรมราช, 80180",
    "ตำบลวังอ่าง, อำเภอชะอวด, นครศรีธรรมราช, 80180",
    "ตำบลเชียรเขา, อำเภอเฉลิมพระเกียรติ, นครศรีธรรมราช, 80190",
    "ตำบลสวนหลวง, อำเภอเฉลิมพระเกียรติ, นครศรีธรรมราช, 80190",
    "ตำบลเขาพระบาท, อำเภอเชียรใหญ่, นครศรีธรรมราช, 80190",
    "ตำบลเชียรใหญ่, อำเภอเชียรใหญ่, นครศรีธรรมราช, 80190",
    "ตำบลเสือหึง, อำเภอเชียรใหญ่, นครศรีธรรมราช, 80190",
    "ตำบลแม่เจ้าอยู่หัว, อำเภอเชียรใหญ่, นครศรีธรรมราช, 80190",
    "ตำบลไสหมาก, อำเภอเชียรใหญ่, นครศรีธรรมราช, 80190",
    "ตำบลการะเกด, อำเภอเชียรใหญ่, นครศรีธรรมราช, 80190",
    "ตำบลท้องลำเจียก, อำเภอเชียรใหญ่, นครศรีธรรมราช, 80190",
    "ตำบลท่าขนาน, อำเภอเชียรใหญ่, นครศรีธรรมราช, 80190",
    "ตำบลบ้านเนิน, อำเภอเชียรใหญ่, นครศรีธรรมราช, 80190",
    "ตำบลบ้านกลาง, อำเภอเชียรใหญ่, นครศรีธรรมราช, 80190",
    "ตำบลขนอม, อำเภอขนอม, นครศรีธรรมราช, 80210",
    "ตำบลควนทอง, อำเภอขนอม, นครศรีธรรมราช, 80210",
    "ตำบลท้องเนียน, อำเภอขนอม, นครศรีธรรมราช, 80210",
    "ตำบลแก้วแสน, อำเภอนาบอน, นครศรีธรรมราช, 80220",
    "ตำบลทุ่งสง, อำเภอนาบอน, นครศรีธรรมราช, 80220",
    "ตำบลนาบอน, อำเภอนาบอน, นครศรีธรรมราช, 80220",
    "ตำบลเขาแก้ว, อำเภอลานสกา, นครศรีธรรมราช, 80230",
    "ตำบลกำโลน, อำเภอลานสกา, นครศรีธรรมราช, 80230",
    "ตำบลขุนทะเล, อำเภอลานสกา, นครศรีธรรมราช, 80230",
    "ตำบลท่าดี, อำเภอลานสกา, นครศรีธรรมราช, 80230",
    "ตำบลลานสกา, อำเภอลานสกา, นครศรีธรรมราช, 80230",
    "ตำบลโคกหาร, อำเภอเขาพนม, กระบี่, 80240",
    "ตำบลสินปุน, อำเภอเขาพนม, กระบี่, 80240",
    "ตำบลกรุงหยัน, อำเภอทุ่งใหญ่, นครศรีธรรมราช, 80240",
    "ตำบลกุแหระ, อำเภอทุ่งใหญ่, นครศรีธรรมราช, 80240",
    "ตำบลท่ายาง, อำเภอทุ่งใหญ่, นครศรีธรรมราช, 80240",
    "ตำบลทุ่งใหญ่, อำเภอทุ่งใหญ่, นครศรีธรรมราช, 80240",
    "ตำบลทุ่งสัง, อำเภอทุ่งใหญ่, นครศรีธรรมราช, 80240",
    "ตำบลบางรูป, อำเภอทุ่งใหญ่, นครศรีธรรมราช, 80240",
    "ตำบลปริก, อำเภอทุ่งใหญ่, นครศรีธรรมราช, 80240",
    "ตำบลจันดี, อำเภอฉวาง, นครศรีธรรมราช, 80250",
    "ตำบลละอาย, อำเภอฉวาง, นครศรีธรรมราช, 80250",
    "ตำบลช้างกลาง, อำเภอช้างกลาง, นครศรีธรรมราช, 80250",
    "ตำบลสวนขัน, อำเภอช้างกลาง, นครศรีธรรมราช, 80250",
    "ตำบลหลักช้าง, อำเภอช้างกลาง, นครศรีธรรมราช, 80250",
    "ตำบลกะเปียด, อำเภอฉวาง, นครศรีธรรมราช, 80260",
    "ตำบลนาเขลียง, อำเภอฉวาง, นครศรีธรรมราช, 80260",
    "ตำบลห้วยปริก, อำเภอฉวาง, นครศรีธรรมราช, 80260",
    "ตำบลคลองเส, อำเภอถ้ำพรรณรา, นครศรีธรรมราช, 80260",
    "ตำบลดุสิต, อำเภอถ้ำพรรณรา, นครศรีธรรมราช, 80260",
    "ตำบลถ้ำพรรณรา, อำเภอถ้ำพรรณรา, นครศรีธรรมราช, 80260",
    "ตำบลเขาพระ, อำเภอพิปูน, นครศรีธรรมราช, 80270",
    "ตำบลกะทูน, อำเภอพิปูน, นครศรีธรรมราช, 80270",
    "ตำบลควนกลาง, อำเภอพิปูน, นครศรีธรรมราช, 80270",
    "ตำบลพิปูน, อำเภอพิปูน, นครศรีธรรมราช, 80270",
    "ตำบลยางค้อม, อำเภอพิปูน, นครศรีธรรมราช, 80270",
    "ตำบลกำแพงเซา, อำเภอเมืองนครศรีธรรมราช, นครศรีธรรมราช, 80280",
    "ตำบลท่างิ้ว, อำเภอเมืองนครศรีธรรมราช, นครศรีธรรมราช, 80280",
    "ตำบลนาทราย, อำเภอเมืองนครศรีธรรมราช, นครศรีธรรมราช, 80280",
    "ตำบลดอนตรอ, อำเภอเฉลิมพระเกียรติ, นครศรีธรรมราช, 80290",
    "ตำบลทางพูน, อำเภอเฉลิมพระเกียรติ, นครศรีธรรมราช, 80290",
    "ตำบลกะปาง, อำเภอทุ่งสง, นครศรีธรรมราช, 80310",
    "ตำบลทอนหงส์, อำเภอพรหมคีรี, นครศรีธรรมราช, 80320",
    "ตำบลนาเรียง, อำเภอพรหมคีรี, นครศรีธรรมราช, 80320",
    "ตำบลบ้านเกาะ, อำเภอพรหมคีรี, นครศรีธรรมราช, 80320",
    "ตำบลพรหมโลก, อำเภอพรหมคีรี, นครศรีธรรมราช, 80320",
    "ตำบลอินคีรี, อำเภอพรหมคีรี, นครศรีธรรมราช, 80320",
    "ตำบลบางจาก, อำเภอเมืองนครศรีธรรมราช, นครศรีธรรมราช, 80330",
    "ตำบลเกาะทวด, อำเภอปากพนัง, นครศรีธรรมราช, 80330",
    "ตำบลคลองน้อย, อำเภอปากพนัง, นครศรีธรรมราช, 80330",
    "ตำบลชะเมา, อำเภอปากพนัง, นครศรีธรรมราช, 80330",
    "ตำบลเทพราช, อำเภอสิชล, นครศรีธรรมราช, 80340",
    "ตำบลเสาเภา, อำเภอสิชล, นครศรีธรรมราช, 80340",
    "ตำบลเสาธง, อำเภอร่อนพิบูลย์, นครศรีธรรมราช, 80350",
    "ตำบลหินตก, อำเภอร่อนพิบูลย์, นครศรีธรรมราช, 80350",
    "ตำบลบางขัน, อำเภอบางขัน, นครศรีธรรมราช, 80360",
    "ตำบลบ้านนิคม, อำเภอบางขัน, นครศรีธรรมราช, 80360",
    "ตำบลบ้านลำนาว, อำเภอบางขัน, นครศรีธรรมราช, 80360",
    "ตำบลวังหิน, อำเภอบางขัน, นครศรีธรรมราช, 80360",
    "ตำบลเขาคราม, อำเภอเมืองกระบี่, กระบี่, 81000",
    "ตำบลเขาทอง, อำเภอเมืองกระบี่, กระบี่, 81000",
    "ตำบลไสไทย, อำเภอเมืองกระบี่, กระบี่, 81000",
    "ตำบลกระบี่ใหญ่, อำเภอเมืองกระบี่, กระบี่, 81000",
    "ตำบลกระบี่น้อย, อำเภอเมืองกระบี่, กระบี่, 81000",
    "ตำบลคลองประสงค์, อำเภอเมืองกระบี่, กระบี่, 81000",
    "ตำบลทับปริก, อำเภอเมืองกระบี่, กระบี่, 81000",
    "ตำบลปากน้ำ, อำเภอเมืองกระบี่, กระบี่, 81000",
    "ตำบลหนองทะเล, อำเภอเมืองกระบี่, กระบี่, 81000",
    "ตำบลอ่าวนาง, อำเภอเมืองกระบี่, กระบี่, 81000",
    "ตำบลเขาใหญ่, อำเภออ่าวลึก, กระบี่, 81110",
    "ตำบลแหลมสัก, อำเภออ่าวลึก, กระบี่, 81110",
    "ตำบลคลองยา, อำเภออ่าวลึก, กระบี่, 81110",
    "ตำบลคลองหิน, อำเภออ่าวลึก, กระบี่, 81110",
    "ตำบลนาเหนือ, อำเภออ่าวลึก, กระบี่, 81110",
    "ตำบลบ้านกลาง, อำเภออ่าวลึก, กระบี่, 81110",
    "ตำบลอ่าวลึกเหนือ, อำเภออ่าวลึก, กระบี่, 81110",
    "ตำบลอ่าวลึกใต้, อำเภออ่าวลึก, กระบี่, 81110",
    "ตำบลอ่าวลึกน้อย, อำเภออ่าวลึก, กระบี่, 81110",
    "ตำบลเกาะกลาง, อำเภอเกาะลันตา, กระบี่, 81120",
    "ตำบลคลองยาง, อำเภอเกาะลันตา, กระบี่, 81120",
    "ตำบลเพหลา, อำเภอคลองท่อม, กระบี่, 81120",
    "ตำบลคลองท่อมเหนือ, อำเภอคลองท่อม, กระบี่, 81120",
    "ตำบลคลองท่อมใต้, อำเภอคลองท่อม, กระบี่, 81120",
    "ตำบลพรุดินนา, อำเภอคลองท่อม, กระบี่, 81120",
    "ตำบลห้วยน้ำขาว, อำเภอคลองท่อม, กระบี่, 81120",
    "ตำบลดินแดง, อำเภอลำทับ, กระบี่, 81120",
    "ตำบลดินอุดม, อำเภอลำทับ, กระบี่, 81120",
    "ตำบลทุ่งไทรทอง, อำเภอลำทับ, กระบี่, 81120",
    "ตำบลลำทับ, อำเภอลำทับ, กระบี่, 81120",
    "ตำบลเกาะศรีบอยา, อำเภอเหนือคลอง, กระบี่, 81130",
    "ตำบลเหนือคลอง, อำเภอเหนือคลอง, กระบี่, 81130",
    "ตำบลโคกยาง, อำเภอเหนือคลอง, กระบี่, 81130",
    "ตำบลคลองเขม้า, อำเภอเหนือคลอง, กระบี่, 81130",
    "ตำบลคลองขนาน, อำเภอเหนือคลอง, กระบี่, 81130",
    "ตำบลตลิ่งชัน, อำเภอเหนือคลอง, กระบี่, 81130",
    "ตำบลปกาสัย, อำเภอเหนือคลอง, กระบี่, 81130",
    "ตำบลห้วยยูง, อำเภอเหนือคลอง, กระบี่, 81130",
    "ตำบลเขาดิน, อำเภอเขาพนม, กระบี่, 81140",
    "ตำบลเขาพนม, อำเภอเขาพนม, กระบี่, 81140",
    "ตำบลพรุเตียว, อำเภอเขาพนม, กระบี่, 81140",
    "ตำบลหน้าเขา, อำเภอเขาพนม, กระบี่, 81140",
    "ตำบลเกาะลันตาใหญ่, อำเภอเกาะลันตา, กระบี่, 81150",
    "ตำบลเกาะลันตาน้อย, อำเภอเกาะลันตา, กระบี่, 81150",
    "ตำบลศาลาด่าน, อำเภอเกาะลันตา, กระบี่, 81150",
    "ตำบลเขาเขน, อำเภอปลายพระยา, กระบี่, 81160",
    "ตำบลเขาต่อ, อำเภอปลายพระยา, กระบี่, 81160",
    "ตำบลคีรีวง, อำเภอปลายพระยา, กระบี่, 81160",
    "ตำบลปลายพระยา, อำเภอปลายพระยา, กระบี่, 81160",
    "ตำบลคลองพน, อำเภอคลองท่อม, กระบี่, 81170",
    "ตำบลทรายขาว, อำเภอคลองท่อม, กระบี่, 81170",
    "ตำบลเกาะพีพี, อำเภอเมืองกระบี่, กระบี่, 81210",
    "ตำบลเกาะปันหยี, อำเภอเมืองพังงา, พังงา, 82000",
    "ตำบลตากแดด, อำเภอเมืองพังงา, พังงา, 82000",
    "ตำบลถ้ำน้ำผุด, อำเภอเมืองพังงา, พังงา, 82000",
    "ตำบลท้ายช้าง, อำเภอเมืองพังงา, พังงา, 82000",
    "ตำบลทุ่งคาโงก, อำเภอเมืองพังงา, พังงา, 82000",
    "ตำบลนบปริง, อำเภอเมืองพังงา, พังงา, 82000",
    "ตำบลบางเตย, อำเภอเมืองพังงา, พังงา, 82000",
    "ตำบลป่ากอ, อำเภอเมืองพังงา, พังงา, 82000",
    "ตำบลสองแพรก, อำเภอเมืองพังงา, พังงา, 82000",
    "ตำบลโคกเคียน, อำเภอตะกั่วป่า, พังงา, 82110",
    "ตำบลตะกั่วป่า, อำเภอตะกั่วป่า, พังงา, 82110",
    "ตำบลตำตัว, อำเภอตะกั่วป่า, พังงา, 82110",
    "ตำบลบางไทร, อำเภอตะกั่วป่า, พังงา, 82110",
    "ตำบลบางนายสี, อำเภอตะกั่วป่า, พังงา, 82110",
    "ตำบลท้ายเหมือง, อำเภอท้ายเหมือง, พังงา, 82120",
    "ตำบลทุ่งมะพร้าว, อำเภอท้ายเหมือง, พังงา, 82120",
    "ตำบลนาเตย, อำเภอท้ายเหมือง, พังงา, 82120",
    "ตำบลบางทอง, อำเภอท้ายเหมือง, พังงา, 82120",
    "ตำบลลำแก่น, อำเภอท้ายเหมือง, พังงา, 82120",
    "ตำบลลำภี, อำเภอท้ายเหมือง, พังงา, 82120",
    "ตำบลกระโสม, อำเภอตะกั่วทุ่ง, พังงา, 82130",
    "ตำบลกะไหล, อำเภอตะกั่วทุ่ง, พังงา, 82130",
    "ตำบลคลองเคียน, อำเภอตะกั่วทุ่ง, พังงา, 82130",
    "ตำบลถ้ำ, อำเภอตะกั่วทุ่ง, พังงา, 82130",
    "ตำบลท่าอยู่, อำเภอตะกั่วทุ่ง, พังงา, 82130",
    "ตำบลโคกกลอย, อำเภอตะกั่วทุ่ง, พังงา, 82140",
    "ตำบลหล่อยูง, อำเภอตะกั่วทุ่ง, พังงา, 82140",
    "ตำบลเกาะพระทอง, อำเภอคุระบุรี, พังงา, 82150",
    "ตำบลแม่นางขาว, อำเภอคุระบุรี, พังงา, 82150",
    "ตำบลคุระ, อำเภอคุระบุรี, พังงา, 82150",
    "ตำบลบางวัน, อำเภอคุระบุรี, พังงา, 82150",
    "ตำบลเกาะยาวใหญ่, อำเภอเกาะยาว, พังงา, 82160",
    "ตำบลเกาะยาวน้อย, อำเภอเกาะยาว, พังงา, 82160",
    "ตำบลพรุใน, อำเภอเกาะยาว, พังงา, 82160",
    "ตำบลเหมาะ, อำเภอกะปง, พังงา, 82170",
    "ตำบลเหล, อำเภอกะปง, พังงา, 82170",
    "ตำบลกะปง, อำเภอกะปง, พังงา, 82170",
    "ตำบลท่านา, อำเภอกะปง, พังงา, 82170",
    "ตำบลรมณีย์, อำเภอกะปง, พังงา, 82170",
    "ตำบลโคกเจริญ, อำเภอทับปุด, พังงา, 82180",
    "ตำบลถ้ำทองหลาง, อำเภอทับปุด, พังงา, 82180",
    "ตำบลทับปุด, อำเภอทับปุด, พังงา, 82180",
    "ตำบลบ่อแสน, อำเภอทับปุด, พังงา, 82180",
    "ตำบลบางเหรียง, อำเภอทับปุด, พังงา, 82180",
    "ตำบลมะรุ่ย, อำเภอทับปุด, พังงา, 82180",
    "ตำบลเกาะคอเขา, อำเภอตะกั่วป่า, พังงา, 82190",
    "ตำบลคึกคัก, อำเภอตะกั่วป่า, พังงา, 82190",
    "ตำบลบางม่วง, อำเภอตะกั่วป่า, พังงา, 82190",
    "ตำบลเกาะแก้ว, อำเภอเมืองภูเก็ต, ภูเก็ต, 83000",
    "ตำบลตลาดเหนือ, อำเภอเมืองภูเก็ต, ภูเก็ต, 83000",
    "ตำบลตลาดใหญ่, อำเภอเมืองภูเก็ต, ภูเก็ต, 83000",
    "ตำบลรัษฎา, อำเภอเมืองภูเก็ต, ภูเก็ต, 83000",
    "ตำบลวิชิต, อำเภอเมืองภูเก็ต, ภูเก็ต, 83000",
    "ตำบลกะรน, อำเภอเมืองภูเก็ต, ภูเก็ต, 83100",
    "ตำบลเชิงทะเล, อำเภอถลาง, ภูเก็ต, 83110",
    "ตำบลเทพกระษัตรี, อำเภอถลาง, ภูเก็ต, 83110",
    "ตำบลไม้ขาว, อำเภอถลาง, ภูเก็ต, 83110",
    "ตำบลป่าคลอก, อำเภอถลาง, ภูเก็ต, 83110",
    "ตำบลศรีสุนทร, อำเภอถลาง, ภูเก็ต, 83110",
    "ตำบลสาคู, อำเภอถลาง, ภูเก็ต, 83110",
    "ตำบลกะทู้, อำเภอกะทู้, ภูเก็ต, 83120",
    "ตำบลฉลอง, อำเภอเมืองภูเก็ต, ภูเก็ต, 83130",
    "ตำบลราไวย์, อำเภอเมืองภูเก็ต, ภูเก็ต, 83130",
    "ตำบลกมลา, อำเภอกะทู้, ภูเก็ต, 83150",
    "ตำบลป่าตอง, อำเภอกะทู้, ภูเก็ต, 83150",
    "ตำบลคลองฉนาก, อำเภอเมืองสุราษฎร์ธานี, สุราษฎร์ธานี, 84000",
    "ตำบลคลองน้อย, อำเภอเมืองสุราษฎร์ธานี, สุราษฎร์ธานี, 84000",
    "ตำบลตลาด, อำเภอเมืองสุราษฎร์ธานี, สุราษฎร์ธานี, 84000",
    "ตำบลบางโพธิ์, อำเภอเมืองสุราษฎร์ธานี, สุราษฎร์ธานี, 84000",
    "ตำบลบางใบไม้, อำเภอเมืองสุราษฎร์ธานี, สุราษฎร์ธานี, 84000",
    "ตำบลบางไทร, อำเภอเมืองสุราษฎร์ธานี, สุราษฎร์ธานี, 84000",
    "ตำบลบางกุ้ง, อำเภอเมืองสุราษฎร์ธานี, สุราษฎร์ธานี, 84000",
    "ตำบลบางชนะ, อำเภอเมืองสุราษฎร์ธานี, สุราษฎร์ธานี, 84000",
    "ตำบลมะขามเตี้ย, อำเภอเมืองสุราษฎร์ธานี, สุราษฎร์ธานี, 84000",
    "ตำบลวัดประดู่, อำเภอเมืองสุราษฎร์ธานี, สุราษฎร์ธานี, 84000",
    "ตำบลขุนทะเล, อำเภอเมืองสุราษฎร์ธานี, สุราษฎร์ธานี, 84100",
    "ตำบลเลม็ด, อำเภอไชยา, สุราษฎร์ธานี, 84110",
    "ตำบลเวียง, อำเภอไชยา, สุราษฎร์ธานี, 84110",
    "ตำบลโมถ่าย, อำเภอไชยา, สุราษฎร์ธานี, 84110",
    "ตำบลตลาดไชยา, อำเภอไชยา, สุราษฎร์ธานี, 84110",
    "ตำบลตะกรบ, อำเภอไชยา, สุราษฎร์ธานี, 84110",
    "ตำบลทุ่ง, อำเภอไชยา, สุราษฎร์ธานี, 84110",
    "ตำบลป่าเว, อำเภอไชยา, สุราษฎร์ธานี, 84110",
    "ตำบลปากหมาก, อำเภอไชยา, สุราษฎร์ธานี, 84110",
    "ตำบลพุมเรียง, อำเภอไชยา, สุราษฎร์ธานี, 84110",
    "ตำบลเพิ่มพูนทรัพย์, อำเภอบ้านนาสาร, สุราษฎร์ธานี, 84120",
    "ตำบลคลองปราบ, อำเภอบ้านนาสาร, สุราษฎร์ธานี, 84120",
    "ตำบลควนสุบรรณ, อำเภอบ้านนาสาร, สุราษฎร์ธานี, 84120",
    "ตำบลท่าชี, อำเภอบ้านนาสาร, สุราษฎร์ธานี, 84120",
    "ตำบลทุ่งเตา, อำเภอบ้านนาสาร, สุราษฎร์ธานี, 84120",
    "ตำบลทุ่งเตาใหม่, อำเภอบ้านนาสาร, สุราษฎร์ธานี, 84120",
    "ตำบลนาสาร, อำเภอบ้านนาสาร, สุราษฎร์ธานี, 84120",
    "ตำบลน้ำพุ, อำเภอบ้านนาสาร, สุราษฎร์ธานี, 84120",
    "ตำบลลำพูน, อำเภอบ้านนาสาร, สุราษฎร์ธานี, 84120",
    "ตำบลเขาหัวควาย, อำเภอพุนพิน, สุราษฎร์ธานี, 84130",
    "ตำบลกรูด, อำเภอพุนพิน, สุราษฎร์ธานี, 84130",
    "ตำบลตะปาน, อำเภอพุนพิน, สุราษฎร์ธานี, 84130",
    "ตำบลท่าโรงช้าง, อำเภอพุนพิน, สุราษฎร์ธานี, 84130",
    "ตำบลท่าข้าม, อำเภอพุนพิน, สุราษฎร์ธานี, 84130",
    "ตำบลท่าสะท้อน, อำเภอพุนพิน, สุราษฎร์ธานี, 84130",
    "ตำบลน้ำรอบ, อำเภอพุนพิน, สุราษฎร์ธานี, 84130",
    "ตำบลบางเดือน, อำเภอพุนพิน, สุราษฎร์ธานี, 84130",
    "ตำบลบางงอน, อำเภอพุนพิน, สุราษฎร์ธานี, 84130",
    "ตำบลบางมะเดื่อ, อำเภอพุนพิน, สุราษฎร์ธานี, 84130",
    "ตำบลพุนพิน, อำเภอพุนพิน, สุราษฎร์ธานี, 84130",
    "ตำบลมะลวน, อำเภอพุนพิน, สุราษฎร์ธานี, 84130",
    "ตำบลลีเล็ด, อำเภอพุนพิน, สุราษฎร์ธานี, 84130",
    "ตำบลศรีวิชัย, อำเภอพุนพิน, สุราษฎร์ธานี, 84130",
    "ตำบลหนองไทร, อำเภอพุนพิน, สุราษฎร์ธานี, 84130",
    "ตำบลหัวเตย, อำเภอพุนพิน, สุราษฎร์ธานี, 84130",
    "ตำบลตลิ่งงาม, อำเภอเกาะสมุย, สุราษฎร์ธานี, 84140",
    "ตำบลลิปะน้อย, อำเภอเกาะสมุย, สุราษฎร์ธานี, 84140",
    "ตำบลหน้าเมือง, อำเภอเกาะสมุย, สุราษฎร์ธานี, 84140",
    "ตำบลอ่างทอง, อำเภอเกาะสมุย, สุราษฎร์ธานี, 84140",
    "ตำบลเขาถ่าน, อำเภอท่าฉาง, สุราษฎร์ธานี, 84150",
    "ตำบลเสวียด, อำเภอท่าฉาง, สุราษฎร์ธานี, 84150",
    "ตำบลคลองไทร, อำเภอท่าฉาง, สุราษฎร์ธานี, 84150",
    "ตำบลท่าเคย, อำเภอท่าฉาง, สุราษฎร์ธานี, 84150",
    "ตำบลท่าฉาง, อำเภอท่าฉาง, สุราษฎร์ธานี, 84150",
    "ตำบลปากฉลุย, อำเภอท่าฉาง, สุราษฎร์ธานี, 84150",
    "ตำบลกรูด, อำเภอกาญจนดิษฐ์, สุราษฎร์ธานี, 84160",
    "ตำบลกะแดะ, อำเภอกาญจนดิษฐ์, สุราษฎร์ธานี, 84160",
    "ตำบลคลองสระ, อำเภอกาญจนดิษฐ์, สุราษฎร์ธานี, 84160",
    "ตำบลช้างขวา, อำเภอกาญจนดิษฐ์, สุราษฎร์ธานี, 84160",
    "ตำบลช้างซ้าย, อำเภอกาญจนดิษฐ์, สุราษฎร์ธานี, 84160",
    "ตำบลตะเคียนทอง, อำเภอกาญจนดิษฐ์, สุราษฎร์ธานี, 84160",
    "ตำบลท่าทอง, อำเภอกาญจนดิษฐ์, สุราษฎร์ธานี, 84160",
    "ตำบลท่าอุแท, อำเภอกาญจนดิษฐ์, สุราษฎร์ธานี, 84160",
    "ตำบลป่าร่อน, อำเภอกาญจนดิษฐ์, สุราษฎร์ธานี, 84160",
    "ตำบลพลายวาส, อำเภอกาญจนดิษฐ์, สุราษฎร์ธานี, 84160",
    "ตำบลชลคราม, อำเภอดอนสัก, สุราษฎร์ธานี, 84160",
    "ตำบลคลองพา, อำเภอท่าชนะ, สุราษฎร์ธานี, 84170",
    "ตำบลคันธุลี, อำเภอท่าชนะ, สุราษฎร์ธานี, 84170",
    "ตำบลท่าชนะ, อำเภอท่าชนะ, สุราษฎร์ธานี, 84170",
    "ตำบลประสงค์, อำเภอท่าชนะ, สุราษฎร์ธานี, 84170",
    "ตำบลวัง, อำเภอท่าชนะ, สุราษฎร์ธานี, 84170",
    "ตำบลสมอทอง, อำเภอท่าชนะ, สุราษฎร์ธานี, 84170",
    "ตำบลกะเปา, อำเภอคีรีรัฐนิคม, สุราษฎร์ธานี, 84180",
    "ตำบลถ้ำสิงขร, อำเภอคีรีรัฐนิคม, สุราษฎร์ธานี, 84180",
    "ตำบลท่ากระดาน, อำเภอคีรีรัฐนิคม, สุราษฎร์ธานี, 84180",
    "ตำบลท่าขนอน, อำเภอคีรีรัฐนิคม, สุราษฎร์ธานี, 84180",
    "ตำบลน้ำหัก, อำเภอคีรีรัฐนิคม, สุราษฎร์ธานี, 84180",
    "ตำบลบ้านทำเนียบ, อำเภอคีรีรัฐนิคม, สุราษฎร์ธานี, 84180",
    "ตำบลบ้านยาง, อำเภอคีรีรัฐนิคม, สุราษฎร์ธานี, 84180",
    "ตำบลย่านยาว, อำเภอคีรีรัฐนิคม, สุราษฎร์ธานี, 84180",
    "ตำบลตะกุกเหนือ, อำเภอวิภาวดี, สุราษฎร์ธานี, 84180",
    "ตำบลตะกุกใต้, อำเภอวิภาวดี, สุราษฎร์ธานี, 84180",
    "ตำบลเขานิพันธ์, อำเภอเวียงสระ, สุราษฎร์ธานี, 84190",
    "ตำบลเวียงสระ, อำเภอเวียงสระ, สุราษฎร์ธานี, 84190",
    "ตำบลคลองฉนวน, อำเภอเวียงสระ, สุราษฎร์ธานี, 84190",
    "ตำบลทุ่งหลวง, อำเภอเวียงสระ, สุราษฎร์ธานี, 84190",
    "ตำบลบ้านส้อง, อำเภอเวียงสระ, สุราษฎร์ธานี, 84190",
    "ตำบลพ่วงพรมคร, อำเภอเคียนซา, สุราษฎร์ธานี, 84210",
    "ตำบลไทรโสภา, อำเภอพระแสง, สุราษฎร์ธานี, 84210",
    "ตำบลไทรขึง, อำเภอพระแสง, สุราษฎร์ธานี, 84210",
    "ตำบลบางสวรรค์, อำเภอพระแสง, สุราษฎร์ธานี, 84210",
    "ตำบลสาคู, อำเภอพระแสง, สุราษฎร์ธานี, 84210",
    "ตำบลสินเจริญ, อำเภอพระแสง, สุราษฎร์ธานี, 84210",
    "ตำบลสินปุน, อำเภอพระแสง, สุราษฎร์ธานี, 84210",
    "ตำบลอิปัน, อำเภอพระแสง, สุราษฎร์ธานี, 84210",
    "ตำบลไชยคราม, อำเภอดอนสัก, สุราษฎร์ธานี, 84220",
    "ตำบลดอนสัก, อำเภอดอนสัก, สุราษฎร์ธานี, 84220",
    "ตำบลเขาพัง, อำเภอบ้านตาขุน, สุราษฎร์ธานี, 84230",
    "ตำบลเขาวง, อำเภอบ้านตาขุน, สุราษฎร์ธานี, 84230",
    "ตำบลพรุไทย, อำเภอบ้านตาขุน, สุราษฎร์ธานี, 84230",
    "ตำบลพะแสง, อำเภอบ้านตาขุน, สุราษฎร์ธานี, 84230",
    "ตำบลทรัพย์ทวี, อำเภอบ้านนาเดิม, สุราษฎร์ธานี, 84240",
    "ตำบลท่าเรือ, อำเภอบ้านนาเดิม, สุราษฎร์ธานี, 84240",
    "ตำบลนาใต้, อำเภอบ้านนาเดิม, สุราษฎร์ธานี, 84240",
    "ตำบลบ้านนา, อำเภอบ้านนาเดิม, สุราษฎร์ธานี, 84240",
    "ตำบลคลองชะอุ่น, อำเภอพนม, สุราษฎร์ธานี, 84250",
    "ตำบลคลองศก, อำเภอพนม, สุราษฎร์ธานี, 84250",
    "ตำบลต้นยวน, อำเภอพนม, สุราษฎร์ธานี, 84250",
    "ตำบลพนม, อำเภอพนม, สุราษฎร์ธานี, 84250",
    "ตำบลพลูเถื่อน, อำเภอพนม, สุราษฎร์ธานี, 84250",
    "ตำบลพังกาญจน์, อำเภอพนม, สุราษฎร์ธานี, 84250",
    "ตำบลเขาตอก, อำเภอเคียนซา, สุราษฎร์ธานี, 84260",
    "ตำบลเคียนซา, อำเภอเคียนซา, สุราษฎร์ธานี, 84260",
    "ตำบลบ้านเสด็จ, อำเภอเคียนซา, สุราษฎร์ธานี, 84260",
    "ตำบลอรัญคามวารี, อำเภอเคียนซา, สุราษฎร์ธานี, 84260",
    "ตำบลควนศรี, อำเภอบ้านนาสาร, สุราษฎร์ธานี, 84270",
    "ตำบลพรุพี, อำเภอบ้านนาสาร, สุราษฎร์ธานี, 84270",
    "ตำบลเกาะพะงัน, อำเภอเกาะพะงัน, สุราษฎร์ธานี, 84280",
    "ตำบลบ้านใต้, อำเภอเกาะพะงัน, สุราษฎร์ธานี, 84280",
    "ตำบลท่าทองใหม่, อำเภอกาญจนดิษฐ์, สุราษฎร์ธานี, 84290",
    "ตำบลทุ่งกง, อำเภอกาญจนดิษฐ์, สุราษฎร์ธานี, 84290",
    "ตำบลทุ่งรัง, อำเภอกาญจนดิษฐ์, สุราษฎร์ธานี, 84290",
    "ตำบลมะเร็ต, อำเภอเกาะสมุย, สุราษฎร์ธานี, 84310",
    "ตำบลบ่อผุด, อำเภอเกาะสมุย, สุราษฎร์ธานี, 84320",
    "ตำบลแม่น้ำ, อำเภอเกาะสมุย, สุราษฎร์ธานี, 84330",
    "ตำบลปากแพรก, อำเภอดอนสัก, สุราษฎร์ธานี, 84340",
    "ตำบลไทรทอง, อำเภอชัยบุรี, สุราษฎร์ธานี, 84350",
    "ตำบลคลองน้อย, อำเภอชัยบุรี, สุราษฎร์ธานี, 84350",
    "ตำบลชัยบุรี, อำเภอชัยบุรี, สุราษฎร์ธานี, 84350",
    "ตำบลสองแพรก, อำเภอชัยบุรี, สุราษฎร์ธานี, 84350",
    "ตำบลเกาะเต่า, อำเภอเกาะพะงัน, สุราษฎร์ธานี, 84360",
    "ตำบลเกาะพยาม, อำเภอเมืองระนอง, ระนอง, 85000",
    "ตำบลเขานิเวศน์, อำเภอเมืองระนอง, ระนอง, 85000",
    "ตำบลบางนอน, อำเภอเมืองระนอง, ระนอง, 85000",
    "ตำบลบางริ้น, อำเภอเมืองระนอง, ระนอง, 85000",
    "ตำบลปากน้ำ, อำเภอเมืองระนอง, ระนอง, 85000",
    "ตำบลราชกรูด, อำเภอเมืองระนอง, ระนอง, 85000",
    "ตำบลหงาว, อำเภอเมืองระนอง, ระนอง, 85000",
    "ตำบลหาดส้มแป้น, อำเภอเมืองระนอง, ระนอง, 85000",
    "ตำบลจ.ป.ร., อำเภอกระบุรี, ระนอง, 85110",
    "ตำบลน้ำจืด, อำเภอกระบุรี, ระนอง, 85110",
    "ตำบลน้ำจืดน้อย, อำเภอกระบุรี, ระนอง, 85110",
    "ตำบลบางใหญ่, อำเภอกระบุรี, ระนอง, 85110",
    "ตำบลปากจั่น, อำเภอกระบุรี, ระนอง, 85110",
    "ตำบลมะมุ, อำเภอกระบุรี, ระนอง, 85110",
    "ตำบลลำเลียง, อำเภอกระบุรี, ระนอง, 85110",
    "ตำบลเชี่ยวเหลียง, อำเภอกะเปอร์, ระนอง, 85120",
    "ตำบลกะเปอร์, อำเภอกะเปอร์, ระนอง, 85120",
    "ตำบลบางหิน, อำเภอกะเปอร์, ระนอง, 85120",
    "ตำบลบ้านนา, อำเภอกะเปอร์, ระนอง, 85120",
    "ตำบลม่วงกลวง, อำเภอกะเปอร์, ระนอง, 85120",
    "ตำบลกำพวน, อำเภอสุขสำราญ, ระนอง, 85120",
    "ตำบลนาคา, อำเภอสุขสำราญ, ระนอง, 85120",
    "ตำบลทรายแดง, อำเภอเมืองระนอง, ระนอง, 85130",
    "ตำบลในวงเหนือ, อำเภอละอุ่น, ระนอง, 85130",
    "ตำบลในวงใต้, อำเภอละอุ่น, ระนอง, 85130",
    "ตำบลบางแก้ว, อำเภอละอุ่น, ระนอง, 85130",
    "ตำบลบางพระเหนือ, อำเภอละอุ่น, ระนอง, 85130",
    "ตำบลบางพระใต้, อำเภอละอุ่น, ระนอง, 85130",
    "ตำบลละอุ่นเหนือ, อำเภอละอุ่น, ระนอง, 85130",
    "ตำบลละอุ่นใต้, อำเภอละอุ่น, ระนอง, 85130",
    "ตำบลขุนกระทิง, อำเภอเมืองชุมพร, ชุมพร, 86000",
    "ตำบลตากแดด, อำเภอเมืองชุมพร, ชุมพร, 86000",
    "ตำบลท่าตะเภา, อำเภอเมืองชุมพร, ชุมพร, 86000",
    "ตำบลท่ายาง, อำเภอเมืองชุมพร, ชุมพร, 86000",
    "ตำบลนาชะอัง, อำเภอเมืองชุมพร, ชุมพร, 86000",
    "ตำบลนาทุ่ง, อำเภอเมืองชุมพร, ชุมพร, 86000",
    "ตำบลบางลึก, อำเภอเมืองชุมพร, ชุมพร, 86000",
    "ตำบลบางหมาก, อำเภอเมืองชุมพร, ชุมพร, 86000",
    "ตำบลวังไผ่, อำเภอเมืองชุมพร, ชุมพร, 86000",
    "ตำบลหาดพันไกร, อำเภอเมืองชุมพร, ชุมพร, 86000",
    "ตำบลถ้ำสิงห์, อำเภอเมืองชุมพร, ชุมพร, 86100",
    "ตำบลทุ่งคา, อำเภอเมืองชุมพร, ชุมพร, 86100",
    "ตำบลวิสัยเหนือ, อำเภอเมืองชุมพร, ชุมพร, 86100",
    "ตำบลแหลมทราย, อำเภอหลังสวน, ชุมพร, 86110",
    "ตำบลขันเงิน, อำเภอหลังสวน, ชุมพร, 86110",
    "ตำบลท่ามะพลา, อำเภอหลังสวน, ชุมพร, 86110",
    "ตำบลนาขา, อำเภอหลังสวน, ชุมพร, 86110",
    "ตำบลนาพญา, อำเภอหลังสวน, ชุมพร, 86110",
    "ตำบลบางมะพร้าว, อำเภอหลังสวน, ชุมพร, 86110",
    "ตำบลบ้านควน, อำเภอหลังสวน, ชุมพร, 86110",
    "ตำบลพ้อแดง, อำเภอหลังสวน, ชุมพร, 86110",
    "ตำบลวังตะกอ, อำเภอหลังสวน, ชุมพร, 86110",
    "ตำบลหลังสวน, อำเภอหลังสวน, ชุมพร, 86110",
    "ตำบลหาดยาย, อำเภอหลังสวน, ชุมพร, 86110",
    "ตำบลปากน้ำ, อำเภอเมืองชุมพร, ชุมพร, 86120",
    "ตำบลหาดทรายรี, อำเภอเมืองชุมพร, ชุมพร, 86120",
    "ตำบลเขาค่าย, อำเภอสวี, ชุมพร, 86130",
    "ตำบลเขาทะลุ, อำเภอสวี, ชุมพร, 86130",
    "ตำบลครน, อำเภอสวี, ชุมพร, 86130",
    "ตำบลด่านสวี, อำเภอสวี, ชุมพร, 86130",
    "ตำบลท่าหิน, อำเภอสวี, ชุมพร, 86130",
    "ตำบลทุ่งระยะ, อำเภอสวี, ชุมพร, 86130",
    "ตำบลนาโพธิ์, อำเภอสวี, ชุมพร, 86130",
    "ตำบลนาสัก, อำเภอสวี, ชุมพร, 86130",
    "ตำบลปากแพรก, อำเภอสวี, ชุมพร, 86130",
    "ตำบลวิสัยใต้, อำเภอสวี, ชุมพร, 86130",
    "ตำบลสวี, อำเภอสวี, ชุมพร, 86130",
    "ตำบลคุริง, อำเภอท่าแซะ, ชุมพร, 86140",
    "ตำบลทรัพย์อนันต์, อำเภอท่าแซะ, ชุมพร, 86140",
    "ตำบลท่าแซะ, อำเภอท่าแซะ, ชุมพร, 86140",
    "ตำบลท่าข้าม, อำเภอท่าแซะ, ชุมพร, 86140",
    "ตำบลนากระตาม, อำเภอท่าแซะ, ชุมพร, 86140",
    "ตำบลรับร่อ, อำเภอท่าแซะ, ชุมพร, 86140",
    "ตำบลสลุย, อำเภอท่าแซะ, ชุมพร, 86140",
    "ตำบลสองพี่น้อง, อำเภอท่าแซะ, ชุมพร, 86140",
    "ตำบลหงษ์เจริญ, อำเภอท่าแซะ, ชุมพร, 86140",
    "ตำบลบางน้ำจืด, อำเภอหลังสวน, ชุมพร, 86150",
    "ตำบลปากน้ำ, อำเภอหลังสวน, ชุมพร, 86150",
    "ตำบลชุมโค, อำเภอปะทิว, ชุมพร, 86160",
    "ตำบลทะเลทรัพย์, อำเภอปะทิว, ชุมพร, 86160",
    "ตำบลบางสน, อำเภอปะทิว, ชุมพร, 86160",
    "ตำบลทุ่งคาวัด, อำเภอละแม, ชุมพร, 86170",
    "ตำบลทุ่งหลวง, อำเภอละแม, ชุมพร, 86170",
    "ตำบลละแม, อำเภอละแม, ชุมพร, 86170",
    "ตำบลสวนแตง, อำเภอละแม, ชุมพร, 86170",
    "ตำบลปังหวาน, อำเภอพะโต๊ะ, ชุมพร, 86180",
    "ตำบลปากทรง, อำเภอพะโต๊ะ, ชุมพร, 86180",
    "ตำบลพระรักษ์, อำเภอพะโต๊ะ, ชุมพร, 86180",
    "ตำบลพะโต๊ะ, อำเภอพะโต๊ะ, ชุมพร, 86180",
    "ตำบลบ้านนา, อำเภอเมืองชุมพร, ชุมพร, 86190",
    "ตำบลวังใหม่, อำเภอเมืองชุมพร, ชุมพร, 86190",
    "ตำบลหินแก้ว, อำเภอท่าแซะ, ชุมพร, 86190",
    "ตำบลเขาไชยราช, อำเภอปะทิว, ชุมพร, 86210",
    "ตำบลดอนยาง, อำเภอปะทิว, ชุมพร, 86210",
    "ตำบลปากคลอง, อำเภอปะทิว, ชุมพร, 86210",
    "ตำบลช่องไม้แก้ว, อำเภอทุ่งตะโก, ชุมพร, 86220",
    "ตำบลตะโก, อำเภอทุ่งตะโก, ชุมพร, 86220",
    "ตำบลทุ่งตะไคร, อำเภอทุ่งตะโก, ชุมพร, 86220",
    "ตำบลปากตะโก, อำเภอทุ่งตะโก, ชุมพร, 86220",
    "ตำบลสะพลี, อำเภอปะทิว, ชุมพร, 86230",
    "ตำบลเกาะแต้ว, อำเภอเมืองสงขลา, สงขลา, 90000",
    "ตำบลเขารูปช้าง, อำเภอเมืองสงขลา, สงขลา, 90000",
    "ตำบลทุ่งหวัง, อำเภอเมืองสงขลา, สงขลา, 90000",
    "ตำบลบ่อยาง, อำเภอเมืองสงขลา, สงขลา, 90000",
    "ตำบลเกาะยอ, อำเภอเมืองสงขลา, สงขลา, 90100",
    "ตำบลพะวง, อำเภอเมืองสงขลา, สงขลา, 90100",
    "ตำบลแม่ทอม, อำเภอบางกล่ำ, สงขลา, 90110",
    "ตำบลท่าช้าง, อำเภอบางกล่ำ, สงขลา, 90110",
    "ตำบลบางกล่ำ, อำเภอบางกล่ำ, สงขลา, 90110",
    "ตำบลบ้านหาร, อำเภอบางกล่ำ, สงขลา, 90110",
    "ตำบลคลองแห, อำเภอหาดใหญ่, สงขลา, 90110",
    "ตำบลคลองอู่ตะเภา, อำเภอหาดใหญ่, สงขลา, 90110",
    "ตำบลควนลัง, อำเภอหาดใหญ่, สงขลา, 90110",
    "ตำบลคอหงส์, อำเภอหาดใหญ่, สงขลา, 90110",
    "ตำบลคูเต่า, อำเภอหาดใหญ่, สงขลา, 90110",
    "ตำบลฉลุง, อำเภอหาดใหญ่, สงขลา, 90110",
    "ตำบลท่าข้าม, อำเภอหาดใหญ่, สงขลา, 90110",
    "ตำบลทุ่งใหญ่, อำเภอหาดใหญ่, สงขลา, 90110",
    "ตำบลทุ่งตำเสา, อำเภอหาดใหญ่, สงขลา, 90110",
    "ตำบลน้ำน้อย, อำเภอหาดใหญ่, สงขลา, 90110",
    "ตำบลหาดใหญ่, อำเภอหาดใหญ่, สงขลา, 90110",
    "ตำบลคลองหลา, อำเภอคลองหอยโข่ง, สงขลา, 90115",
    "ตำบลปริก, อำเภอสะเดา, สงขลา, 90120",
    "ตำบลสะเดา, อำเภอสะเดา, สงขลา, 90120",
    "ตำบลสำนักแต้ว, อำเภอสะเดา, สงขลา, 90120",
    "ตำบลสำนักขาม, อำเภอสะเดา, สงขลา, 90120",
    "ตำบลแค, อำเภอจะนะ, สงขลา, 90130",
    "ตำบลขุนตัดหวาย, อำเภอจะนะ, สงขลา, 90130",
    "ตำบลคลองเปียะ, อำเภอจะนะ, สงขลา, 90130",
    "ตำบลคู, อำเภอจะนะ, สงขลา, 90130",
    "ตำบลจะโหนง, อำเภอจะนะ, สงขลา, 90130",
    "ตำบลตลิ่งชัน, อำเภอจะนะ, สงขลา, 90130",
    "ตำบลท่าหมอไทร, อำเภอจะนะ, สงขลา, 90130",
    "ตำบลนาทับ, อำเภอจะนะ, สงขลา, 90130",
    "ตำบลนาหว้า, อำเภอจะนะ, สงขลา, 90130",
    "ตำบลน้ำขาว, อำเภอจะนะ, สงขลา, 90130",
    "ตำบลบ้านนา, อำเภอจะนะ, สงขลา, 90130",
    "ตำบลป่าชิง, อำเภอจะนะ, สงขลา, 90130",
    "ตำบลสะกอม, อำเภอจะนะ, สงขลา, 90130",
    "ตำบลสะพานไม้แก่น, อำเภอจะนะ, สงขลา, 90130",
    "ตำบลแดนสงวน, อำเภอระโนด, สงขลา, 90140",
    "ตำบลคลองแดน, อำเภอระโนด, สงขลา, 90140",
    "ตำบลตะเครียะ, อำเภอระโนด, สงขลา, 90140",
    "ตำบลท่าบอน, อำเภอระโนด, สงขลา, 90140",
    "ตำบลบ่อตรุ, อำเภอระโนด, สงขลา, 90140",
    "ตำบลบ้านใหม่, อำเภอระโนด, สงขลา, 90140",
    "ตำบลบ้านขาว, อำเภอระโนด, สงขลา, 90140",
    "ตำบลปากแตระ, อำเภอระโนด, สงขลา, 90140",
    "ตำบลพังยาง, อำเภอระโนด, สงขลา, 90140",
    "ตำบลระโนด, อำเภอระโนด, สงขลา, 90140",
    "ตำบลระวะ, อำเภอระโนด, สงขลา, 90140",
    "ตำบลวัดสน, อำเภอระโนด, สงขลา, 90140",
    "ตำบลเกาะสะบ้า, อำเภอเทพา, สงขลา, 90150",
    "ตำบลเทพา, อำเภอเทพา, สงขลา, 90150",
    "ตำบลท่าม่วง, อำเภอเทพา, สงขลา, 90150",
    "ตำบลปากบาง, อำเภอเทพา, สงขลา, 90150",
    "ตำบลสะกอม, อำเภอเทพา, สงขลา, 90150",
    "ตำบลคลองกวาง, อำเภอนาทวี, สงขลา, 90160",
    "ตำบลคลองทราย, อำเภอนาทวี, สงขลา, 90160",
    "ตำบลฉาง, อำเภอนาทวี, สงขลา, 90160",
    "ตำบลทับช้าง, อำเภอนาทวี, สงขลา, 90160",
    "ตำบลท่าประดู่, อำเภอนาทวี, สงขลา, 90160",
    "ตำบลนาทวี, อำเภอนาทวี, สงขลา, 90160",
    "ตำบลนาหมอศรี, อำเภอนาทวี, สงขลา, 90160",
    "ตำบลประกอบ, อำเภอนาทวี, สงขลา, 90160",
    "ตำบลปลักหนู, อำเภอนาทวี, สงขลา, 90160",
    "ตำบลสะท้อน, อำเภอนาทวี, สงขลา, 90160",
    "ตำบลเขามีเกียรติ, อำเภอสะเดา, สงขลา, 90170",
    "ตำบลท่าโพธิ์, อำเภอสะเดา, สงขลา, 90170",
    "ตำบลพังลา, อำเภอสะเดา, สงขลา, 90170",
    "ตำบลเขาพระ, อำเภอรัตภูมิ, สงขลา, 90180",
    "ตำบลกำแพงเพชร, อำเภอรัตภูมิ, สงขลา, 90180",
    "ตำบลควนรู, อำเภอรัตภูมิ, สงขลา, 90180",
    "ตำบลคูหาใต้, อำเภอรัตภูมิ, สงขลา, 90180",
    "ตำบลท่าชะมวง, อำเภอรัตภูมิ, สงขลา, 90180",
    "ตำบลกระดังงา, อำเภอสทิงพระ, สงขลา, 90190",
    "ตำบลคลองรี, อำเภอสทิงพระ, สงขลา, 90190",
    "ตำบลคูขุด, อำเภอสทิงพระ, สงขลา, 90190",
    "ตำบลจะทิ้งพระ, อำเภอสทิงพระ, สงขลา, 90190",
    "ตำบลชุมพล, อำเภอสทิงพระ, สงขลา, 90190",
    "ตำบลดีหลวง, อำเภอสทิงพระ, สงขลา, 90190",
    "ตำบลท่าหิน, อำเภอสทิงพระ, สงขลา, 90190",
    "ตำบลบ่อแดง, อำเภอสทิงพระ, สงขลา, 90190",
    "ตำบลบ่อดาน, อำเภอสทิงพระ, สงขลา, 90190",
    "ตำบลวัดจันทร์, อำเภอสทิงพระ, สงขลา, 90190",
    "ตำบลสนามชัย, อำเภอสทิงพระ, สงขลา, 90190",
    "ตำบลเขาแดง, อำเภอสะบ้าย้อย, สงขลา, 90210",
    "ตำบลเปียน, อำเภอสะบ้าย้อย, สงขลา, 90210",
    "ตำบลคูหา, อำเภอสะบ้าย้อย, สงขลา, 90210",
    "ตำบลจะแหน, อำเภอสะบ้าย้อย, สงขลา, 90210",
    "ตำบลทุ่งพอ, อำเภอสะบ้าย้อย, สงขลา, 90210",
    "ตำบลธารคีรี, อำเภอสะบ้าย้อย, สงขลา, 90210",
    "ตำบลบาโหย, อำเภอสะบ้าย้อย, สงขลา, 90210",
    "ตำบลบ้านโหนด, อำเภอสะบ้าย้อย, สงขลา, 90210",
    "ตำบลสะบ้าย้อย, อำเภอสะบ้าย้อย, สงขลา, 90210",
    "ตำบลควนโส, อำเภอควนเนียง, สงขลา, 90220",
    "ตำบลบางเหรียง, อำเภอควนเนียง, สงขลา, 90220",
    "ตำบลรัตภูมิ, อำเภอควนเนียง, สงขลา, 90220",
    "ตำบลห้วยลึก, อำเภอควนเนียง, สงขลา, 90220",
    "ตำบลโคกม่วง, อำเภอคลองหอยโข่ง, สงขลา, 90230",
    "ตำบลคลองหอยโข่ง, อำเภอคลองหอยโข่ง, สงขลา, 90230",
    "ตำบลทุ่งลาน, อำเภอคลองหอยโข่ง, สงขลา, 90230",
    "ตำบลพะตง, อำเภอหาดใหญ่, สงขลา, 90230",
    "ตำบลทุ่งหมอ, อำเภอสะเดา, สงขลา, 90240",
    "ตำบลปาดังเบซาร์, อำเภอสะเดา, สงขลา, 90240",
    "ตำบลบ้านพรุ, อำเภอหาดใหญ่, สงขลา, 90250",
    "ตำบลลำไพล, อำเภอเทพา, สงขลา, 90260",
    "ตำบลวังใหญ่, อำเภอเทพา, สงขลา, 90260",
    "ตำบลเกาะใหญ่, อำเภอกระแสสินธุ์, สงขลา, 90270",
    "ตำบลเชิงแส, อำเภอกระแสสินธุ์, สงขลา, 90270",
    "ตำบลโรง, อำเภอกระแสสินธุ์, สงขลา, 90270",
    "ตำบลกระแสสินธุ์, อำเภอกระแสสินธุ์, สงขลา, 90270",
    "ตำบลชิงโค, อำเภอสิงหนคร, สงขลา, 90280",
    "ตำบลทำนบ, อำเภอสิงหนคร, สงขลา, 90280",
    "ตำบลสทิงหม้อ, อำเภอสิงหนคร, สงขลา, 90280",
    "ตำบลหัวเขา, อำเภอสิงหนคร, สงขลา, 90280",
    "ตำบลคลองหรัง, อำเภอนาหม่อม, สงขลา, 90310",
    "ตำบลทุ่งขมิ้น, อำเภอนาหม่อม, สงขลา, 90310",
    "ตำบลนาหม่อม, อำเภอนาหม่อม, สงขลา, 90310",
    "ตำบลพิจิตร, อำเภอนาหม่อม, สงขลา, 90310",
    "ตำบลชะแล้, อำเภอสิงหนคร, สงขลา, 90330",
    "ตำบลบางเขียด, อำเภอสิงหนคร, สงขลา, 90330",
    "ตำบลปากรอ, อำเภอสิงหนคร, สงขลา, 90330",
    "ตำบลป่าขาด, อำเภอสิงหนคร, สงขลา, 90330",
    "ตำบลม่วงงาม, อำเภอสิงหนคร, สงขลา, 90330",
    "ตำบลรำแดง, อำเภอสิงหนคร, สงขลา, 90330",
    "ตำบลวัดขนุน, อำเภอสิงหนคร, สงขลา, 90330",
    "ตำบลเกาะสาหร่าย, อำเภอเมืองสตูล, สตูล, 91000",
    "ตำบลเจ๊ะบิลัง, อำเภอเมืองสตูล, สตูล, 91000",
    "ตำบลคลองขุด, อำเภอเมืองสตูล, สตูล, 91000",
    "ตำบลควนขัน, อำเภอเมืองสตูล, สตูล, 91000",
    "ตำบลตันหยงโป, อำเภอเมืองสตูล, สตูล, 91000",
    "ตำบลตำมะลัง, อำเภอเมืองสตูล, สตูล, 91000",
    "ตำบลปูยู, อำเภอเมืองสตูล, สตูล, 91000",
    "ตำบลพิมาน, อำเภอเมืองสตูล, สตูล, 91000",
    "ตำบลเขาขาว, อำเภอละงู, สตูล, 91110",
    "ตำบลแหลมสน, อำเภอละงู, สตูล, 91110",
    "ตำบลกำแพง, อำเภอละงู, สตูล, 91110",
    "ตำบลน้ำผุด, อำเภอละงู, สตูล, 91110",
    "ตำบลปากน้ำ, อำเภอละงู, สตูล, 91110",
    "ตำบลละงู, อำเภอละงู, สตูล, 91110",
    "ตำบลขอนคลาน, อำเภอทุ่งหว้า, สตูล, 91120",
    "ตำบลทุ่งบุหลัง, อำเภอทุ่งหว้า, สตูล, 91120",
    "ตำบลทุ่งหว้า, อำเภอทุ่งหว้า, สตูล, 91120",
    "ตำบลนาทอน, อำเภอทุ่งหว้า, สตูล, 91120",
    "ตำบลป่าแก่บ่อหิน, อำเภอทุ่งหว้า, สตูล, 91120",
    "ตำบลควนกาหลง, อำเภอควนกาหลง, สตูล, 91130",
    "ตำบลทุ่งนุ้ย, อำเภอควนกาหลง, สตูล, 91130",
    "ตำบลอุใดเจริญ, อำเภอควนกาหลง, สตูล, 91130",
    "ตำบลนิคมพัฒนา, อำเภอมะนัง, สตูล, 91130",
    "ตำบลปาล์มพัฒนา, อำเภอมะนัง, สตูล, 91130",
    "ตำบลเกตรี, อำเภอเมืองสตูล, สตูล, 91140",
    "ตำบลควนโพธิ์, อำเภอเมืองสตูล, สตูล, 91140",
    "ตำบลฉลุง, อำเภอเมืองสตูล, สตูล, 91140",
    "ตำบลบ้านควน, อำเภอเมืองสตูล, สตูล, 91140",
    "ตำบลแป-ระ, อำเภอท่าแพ, สตูล, 91150",
    "ตำบลท่าเรือ, อำเภอท่าแพ, สตูล, 91150",
    "ตำบลท่าแพ, อำเภอท่าแพ, สตูล, 91150",
    "ตำบลสาคร, อำเภอท่าแพ, สตูล, 91150",
    "ตำบลควนโดน, อำเภอควนโดน, สตูล, 91160",
    "ตำบลควนสตอ, อำเภอควนโดน, สตูล, 91160",
    "ตำบลย่านซื่อ, อำเภอควนโดน, สตูล, 91160",
    "ตำบลวังประจัน, อำเภอควนโดน, สตูล, 91160",
    "ตำบลโคกหล่อ, อำเภอเมืองตรัง, ตรัง, 92000",
    "ตำบลควนปริง, อำเภอเมืองตรัง, ตรัง, 92000",
    "ตำบลทับเที่ยง, อำเภอเมืองตรัง, ตรัง, 92000",
    "ตำบลนาโต๊ะหมิง, อำเภอเมืองตรัง, ตรัง, 92000",
    "ตำบลนาตาล่วง, อำเภอเมืองตรัง, ตรัง, 92000",
    "ตำบลนาบินหลา, อำเภอเมืองตรัง, ตรัง, 92000",
    "ตำบลนาพละ, อำเภอเมืองตรัง, ตรัง, 92000",
    "ตำบลน้ำผุด, อำเภอเมืองตรัง, ตรัง, 92000",
    "ตำบลบางรัก, อำเภอเมืองตรัง, ตรัง, 92000",
    "ตำบลบ้านโพธิ์, อำเภอเมืองตรัง, ตรัง, 92000",
    "ตำบลบ้านควน, อำเภอเมืองตรัง, ตรัง, 92000",
    "ตำบลหนองตรุด, อำเภอเมืองตรัง, ตรัง, 92000",
    "ตำบลท่าสะบ้า, อำเภอวังวิเศษ, ตรัง, 92000",
    "ตำบลนาเมืองเพชร, อำเภอสิเกา, ตรัง, 92000",
    "ตำบลเกาะลิบง, อำเภอกันตัง, ตรัง, 92110",
    "ตำบลโคกยาง, อำเภอกันตัง, ตรัง, 92110",
    "ตำบลกันตัง, อำเภอกันตัง, ตรัง, 92110",
    "ตำบลกันตังใต้, อำเภอกันตัง, ตรัง, 92110",
    "ตำบลคลองชีล้อม, อำเภอกันตัง, ตรัง, 92110",
    "ตำบลคลองลุ, อำเภอกันตัง, ตรัง, 92110",
    "ตำบลควนธานี, อำเภอกันตัง, ตรัง, 92110",
    "ตำบลนาเกลือ, อำเภอกันตัง, ตรัง, 92110",
    "ตำบลบ่อน้ำร้อน, อำเภอกันตัง, ตรัง, 92110",
    "ตำบลบางเป้า, อำเภอกันตัง, ตรัง, 92110",
    "ตำบลบางสัก, อำเภอกันตัง, ตรัง, 92110",
    "ตำบลบางหมาก, อำเภอกันตัง, ตรัง, 92110",
    "ตำบลย่านซื่อ, อำเภอกันตัง, ตรัง, 92110",
    "ตำบลวังวน, อำเภอกันตัง, ตรัง, 92110",
    "ตำบลเกาะสุกร, อำเภอปะเหลียน, ตรัง, 92120",
    "ตำบลท่าข้าม, อำเภอปะเหลียน, ตรัง, 92120",
    "ตำบลสุโสะ, อำเภอปะเหลียน, ตรัง, 92120",
    "ตำบลตะเสะ, อำเภอหาดสำราญ, ตรัง, 92120",
    "ตำบลบ้าหวี, อำเภอหาดสำราญ, ตรัง, 92120",
    "ตำบลหาดสำราญ, อำเภอหาดสำราญ, ตรัง, 92120",
    "ตำบลหนองปรือ, อำเภอรัษฎา, ตรัง, 92130",
    "ตำบลเขากอบ, อำเภอห้วยยอด, ตรัง, 92130",
    "ตำบลเขาขาว, อำเภอห้วยยอด, ตรัง, 92130",
    "ตำบลเขาปูน, อำเภอห้วยยอด, ตรัง, 92130",
    "ตำบลในเตา, อำเภอห้วยยอด, ตรัง, 92130",
    "ตำบลท่างิ้ว, อำเภอห้วยยอด, ตรัง, 92130",
    "ตำบลทุ่งต่อ, อำเภอห้วยยอด, ตรัง, 92130",
    "ตำบลปากคม, อำเภอห้วยยอด, ตรัง, 92130",
    "ตำบลหนองช้างแล่น, อำเภอห้วยยอด, ตรัง, 92130",
    "ตำบลห้วยนาง, อำเภอห้วยยอด, ตรัง, 92130",
    "ตำบลห้วยยอด, อำเภอห้วยยอด, ตรัง, 92130",
    "ตำบลท่าพญา, อำเภอปะเหลียน, ตรัง, 92140",
    "ตำบลบางด้วน, อำเภอปะเหลียน, ตรัง, 92140",
    "ตำบลบ้านนา, อำเภอปะเหลียน, ตรัง, 92140",
    "ตำบลเกาะเปียะ, อำเภอย่านตาขาว, ตรัง, 92140",
    "ตำบลโพรงจระเข้, อำเภอย่านตาขาว, ตรัง, 92140",
    "ตำบลในควน, อำเภอย่านตาขาว, ตรัง, 92140",
    "ตำบลทุ่งกระบือ, อำเภอย่านตาขาว, ตรัง, 92140",
    "ตำบลทุ่งค่าย, อำเภอย่านตาขาว, ตรัง, 92140",
    "ตำบลนาชุมเห็ด, อำเภอย่านตาขาว, ตรัง, 92140",
    "ตำบลย่านตาขาว, อำเภอย่านตาขาว, ตรัง, 92140",
    "ตำบลหนองบ่อ, อำเภอย่านตาขาว, ตรัง, 92140",
    "ตำบลเขาไม้แก้ว, อำเภอสิเกา, ตรัง, 92150",
    "ตำบลไม้ฝาด, อำเภอสิเกา, ตรัง, 92150",
    "ตำบลกะลาเส, อำเภอสิเกา, ตรัง, 92150",
    "ตำบลบ่อหิน, อำเภอสิเกา, ตรัง, 92150",
    "ตำบลเขาไพร, อำเภอรัษฎา, ตรัง, 92160",
    "ตำบลคลองปาง, อำเภอรัษฎา, ตรัง, 92160",
    "ตำบลควนเมา, อำเภอรัษฎา, ตรัง, 92160",
    "ตำบลหนองบัว, อำเภอรัษฎา, ตรัง, 92160",
    "ตำบลนาโยงใต้, อำเภอเมืองตรัง, ตรัง, 92170",
    "ตำบลโคกสะบ้า, อำเภอนาโยง, ตรัง, 92170",
    "ตำบลช่อง, อำเภอนาโยง, ตรัง, 92170",
    "ตำบลนาโยงเหนือ, อำเภอนาโยง, ตรัง, 92170",
    "ตำบลนาข้าวเสีย, อำเภอนาโยง, ตรัง, 92170",
    "ตำบลนาหมื่นศรี, อำเภอนาโยง, ตรัง, 92170",
    "ตำบลละมอ, อำเภอนาโยง, ตรัง, 92170",
    "ตำบลแหลมสอม, อำเภอปะเหลียน, ตรัง, 92180",
    "ตำบลทุ่งยาว, อำเภอปะเหลียน, ตรัง, 92180",
    "ตำบลปะเหลียน, อำเภอปะเหลียน, ตรัง, 92180",
    "ตำบลลิพัง, อำเภอปะเหลียน, ตรัง, 92180",
    "ตำบลนาท่ามเหนือ, อำเภอเมืองตรัง, ตรัง, 92190",
    "ตำบลนาท่ามใต้, อำเภอเมืองตรัง, ตรัง, 92190",
    "ตำบลปากแจ่ม, อำเภอห้วยยอด, ตรัง, 92190",
    "ตำบลลำภูรา, อำเภอห้วยยอด, ตรัง, 92190",
    "ตำบลนาวง, อำเภอห้วยยอด, ตรัง, 92210",
    "ตำบลบางกุ้ง, อำเภอห้วยยอด, ตรัง, 92210",
    "ตำบลบางดี, อำเภอห้วยยอด, ตรัง, 92210",
    "ตำบลวังคีรี, อำเภอห้วยยอด, ตรัง, 92210",
    "ตำบลเขาวิเศษ, อำเภอวังวิเศษ, ตรัง, 92220",
    "ตำบลวังมะปราง, อำเภอวังวิเศษ, ตรัง, 92220",
    "ตำบลวังมะปรางเหนือ, อำเภอวังวิเศษ, ตรัง, 92220",
    "ตำบลอ่าวตง, อำเภอวังวิเศษ, ตรัง, 92220",
    "ตำบลเขาเจียก, อำเภอเมืองพัทลุง, พัทลุง, 93000",
    "ตำบลโคกชะงาย, อำเภอเมืองพัทลุง, พัทลุง, 93000",
    "ตำบลควนมะพร้าว, อำเภอเมืองพัทลุง, พัทลุง, 93000",
    "ตำบลคูหาสวรรค์, อำเภอเมืองพัทลุง, พัทลุง, 93000",
    "ตำบลชัยบุรี, อำเภอเมืองพัทลุง, พัทลุง, 93000",
    "ตำบลตำนาน, อำเภอเมืองพัทลุง, พัทลุง, 93000",
    "ตำบลท่าแค, อำเภอเมืองพัทลุง, พัทลุง, 93000",
    "ตำบลท่ามิหรำ, อำเภอเมืองพัทลุง, พัทลุง, 93000",
    "ตำบลนาโหนด, อำเภอเมืองพัทลุง, พัทลุง, 93000",
    "ตำบลนาท่อม, อำเภอเมืองพัทลุง, พัทลุง, 93000",
    "ตำบลปรางหมู่, อำเภอเมืองพัทลุง, พัทลุง, 93000",
    "ตำบลพญาขัน, อำเภอเมืองพัทลุง, พัทลุง, 93000",
    "ตำบลร่มเมือง, อำเภอเมืองพัทลุง, พัทลุง, 93000",
    "ตำบลลำปำ, อำเภอเมืองพัทลุง, พัทลุง, 93000",
    "ตำบลชะรัด, อำเภอกงหรา, พัทลุง, 93000",
    "ตำบลสมหวัง, อำเภอกงหรา, พัทลุง, 93000",
    "ตำบลชุมพล, อำเภอศรีนครินทร์, พัทลุง, 93000",
    "ตำบลบ้านนา, อำเภอศรีนครินทร์, พัทลุง, 93000",
    "ตำบลลำสินธุ์, อำเภอศรีนครินทร์, พัทลุง, 93000",
    "ตำบลอ่างทอง, อำเภอศรีนครินทร์, พัทลุง, 93000",
    "ตำบลแพรกหา, อำเภอควนขนุน, พัทลุง, 93110",
    "ตำบลแหลมโตนด, อำเภอควนขนุน, พัทลุง, 93110",
    "ตำบลโตนดด้วน, อำเภอควนขนุน, พัทลุง, 93110",
    "ตำบลควนขนุน, อำเภอควนขนุน, พัทลุง, 93110",
    "ตำบลชะมวง, อำเภอควนขนุน, พัทลุง, 93110",
    "ตำบลดอนทราย, อำเภอควนขนุน, พัทลุง, 93110",
    "ตำบลนาขยาด, อำเภอควนขนุน, พัทลุง, 93110",
    "ตำบลปันแต, อำเภอควนขนุน, พัทลุง, 93110",
    "ตำบลพนมวังก์, อำเภอควนขนุน, พัทลุง, 93110",
    "ตำบลเกาะเต่า, อำเภอป่าพะยอม, พัทลุง, 93110",
    "ตำบลบ้านพร้าว, อำเภอป่าพะยอม, พัทลุง, 93110",
    "ตำบลป่าพะยอม, อำเภอป่าพะยอม, พัทลุง, 93110",
    "ตำบลลานข่อย, อำเภอป่าพะยอม, พัทลุง, 93110",
    "ตำบลเกาะนางคำ, อำเภอปากพะยูน, พัทลุง, 93120",
    "ตำบลเกาะหมาก, อำเภอปากพะยูน, พัทลุง, 93120",
    "ตำบลดอนทราย, อำเภอปากพะยูน, พัทลุง, 93120",
    "ตำบลดอนประดู่, อำเภอปากพะยูน, พัทลุง, 93120",
    "ตำบลปากพะยูน, อำเภอปากพะยูน, พัทลุง, 93120",
    "ตำบลฝาละมี, อำเภอปากพะยูน, พัทลุง, 93120",
    "ตำบลหารเทา, อำเภอปากพะยูน, พัทลุง, 93120",
    "ตำบลเขาชัยสน, อำเภอเขาชัยสน, พัทลุง, 93130",
    "ตำบลโคกม่วง, อำเภอเขาชัยสน, พัทลุง, 93130",
    "ตำบลควนขนุน, อำเภอเขาชัยสน, พัทลุง, 93130",
    "ตำบลจองถนน, อำเภอเขาชัยสน, พัทลุง, 93130",
    "ตำบลหานโพธิ์, อำเภอเขาชัยสน, พัทลุง, 93130",
    "ตำบลโคกสัก, อำเภอบางแก้ว, พัทลุง, 93140",
    "ตำบลท่ามะเดื่อ, อำเภอบางแก้ว, พัทลุง, 93140",
    "ตำบลนาปะขอ, อำเภอบางแก้ว, พัทลุง, 93140",
    "ตำบลทะเลน้อย, อำเภอควนขนุน, พัทลุง, 93150",
    "ตำบลพนางตุง, อำเภอควนขนุน, พัทลุง, 93150",
    "ตำบลมะกอกเหนือ, อำเภอควนขนุน, พัทลุง, 93150",
    "ตำบลแม่ขรี, อำเภอตะโหมด, พัทลุง, 93160",
    "ตำบลคลองใหญ่, อำเภอตะโหมด, พัทลุง, 93160",
    "ตำบลตะโหมด, อำเภอตะโหมด, พัทลุง, 93160",
    "ตำบลโคกทราย, อำเภอป่าบอน, พัทลุง, 93170",
    "ตำบลทุ่งนารี, อำเภอป่าบอน, พัทลุง, 93170",
    "ตำบลป่าบอน, อำเภอป่าบอน, พัทลุง, 93170",
    "ตำบลวังใหม่, อำเภอป่าบอน, พัทลุง, 93170",
    "ตำบลหนองธง, อำเภอป่าบอน, พัทลุง, 93170",
    "ตำบลกงหรา, อำเภอกงหรา, พัทลุง, 93180",
    "ตำบลคลองเฉลิม, อำเภอกงหรา, พัทลุง, 93180",
    "ตำบลคลองทรายขาว, อำเภอกงหรา, พัทลุง, 93180",
    "ตำบลเขาปู่, อำเภอศรีบรรพต, พัทลุง, 93190",
    "ตำบลเขาย่า, อำเภอศรีบรรพต, พัทลุง, 93190",
    "ตำบลตะแพน, อำเภอศรีบรรพต, พัทลุง, 93190",
    "ตำบลกะมิยอ, อำเภอเมืองปัตตานี, ปัตตานี, 94000",
    "ตำบลคลองมานิง, อำเภอเมืองปัตตานี, ปัตตานี, 94000",
    "ตำบลจะบังติกอ, อำเภอเมืองปัตตานี, ปัตตานี, 94000",
    "ตำบลตะลุโบะ, อำเภอเมืองปัตตานี, ปัตตานี, 94000",
    "ตำบลตันหยงลุโละ, อำเภอเมืองปัตตานี, ปัตตานี, 94000",
    "ตำบลบานา, อำเภอเมืองปัตตานี, ปัตตานี, 94000",
    "ตำบลบาราเฮาะ, อำเภอเมืองปัตตานี, ปัตตานี, 94000",
    "ตำบลบาราโหม, อำเภอเมืองปัตตานี, ปัตตานี, 94000",
    "ตำบลปะกาฮะรัง, อำเภอเมืองปัตตานี, ปัตตานี, 94000",
    "ตำบลปุยุด, อำเภอเมืองปัตตานี, ปัตตานี, 94000",
    "ตำบลรูสะมิแล, อำเภอเมืองปัตตานี, ปัตตานี, 94000",
    "ตำบลสะบารัง, อำเภอเมืองปัตตานี, ปัตตานี, 94000",
    "ตำบลอาเนาะรู, อำเภอเมืองปัตตานี, ปัตตานี, 94000",
    "ตำบลเตราะบอน, อำเภอสายบุรี, ปัตตานี, 94110",
    "ตำบลแป้น, อำเภอสายบุรี, ปัตตานี, 94110",
    "ตำบลกะดุนง, อำเภอสายบุรี, ปัตตานี, 94110",
    "ตำบลตะบิ้ง, อำเภอสายบุรี, ปัตตานี, 94110",
    "ตำบลตะลุบัน, อำเภอสายบุรี, ปัตตานี, 94110",
    "ตำบลบางเก่า, อำเภอสายบุรี, ปัตตานี, 94110",
    "ตำบลบือเระ, อำเภอสายบุรี, ปัตตานี, 94110",
    "ตำบลปะเสยะวอ, อำเภอสายบุรี, ปัตตานี, 94110",
    "ตำบลมะนังดาลำ, อำเภอสายบุรี, ปัตตานี, 94110",
    "ตำบลละหาร, อำเภอสายบุรี, ปัตตานี, 94110",
    "ตำบลโคกโพธิ์, อำเภอโคกโพธิ์, ปัตตานี, 94120",
    "ตำบลช้างให้ตก, อำเภอโคกโพธิ์, ปัตตานี, 94120",
    "ตำบลทรายขาว, อำเภอโคกโพธิ์, ปัตตานี, 94120",
    "ตำบลท่าเรือ, อำเภอโคกโพธิ์, ปัตตานี, 94120",
    "ตำบลนาเกตุ, อำเภอโคกโพธิ์, ปัตตานี, 94120",
    "ตำบลบางโกระ, อำเภอโคกโพธิ์, ปัตตานี, 94120",
    "ตำบลป่าบอน, อำเภอโคกโพธิ์, ปัตตานี, 94120",
    "ตำบลมะกรูด, อำเภอโคกโพธิ์, ปัตตานี, 94120",
    "ตำบลคอกกระบือ, อำเภอปะนาเระ, ปัตตานี, 94130",
    "ตำบลดอน, อำเภอปะนาเระ, ปัตตานี, 94130",
    "ตำบลท่าข้าม, อำเภอปะนาเระ, ปัตตานี, 94130",
    "ตำบลท่าน้ำ, อำเภอปะนาเระ, ปัตตานี, 94130",
    "ตำบลบ้านกลาง, อำเภอปะนาเระ, ปัตตานี, 94130",
    "ตำบลบ้านนอก, อำเภอปะนาเระ, ปัตตานี, 94130",
    "ตำบลบ้านน้ำบ่อ, อำเภอปะนาเระ, ปัตตานี, 94130",
    "ตำบลปะนาเระ, อำเภอปะนาเระ, ปัตตานี, 94130",
    "ตำบลพ่อมิ่ง, อำเภอปะนาเระ, ปัตตานี, 94130",
    "ตำบลตะโละแมะนา, อำเภอทุ่งยางแดง, ปัตตานี, 94140",
    "ตำบลน้ำดำ, อำเภอทุ่งยางแดง, ปัตตานี, 94140",
    "ตำบลปากู, อำเภอทุ่งยางแดง, ปัตตานี, 94140",
    "ตำบลพิเทน, อำเภอทุ่งยางแดง, ปัตตานี, 94140",
    "ตำบลเกาะจัน, อำเภอมายอ, ปัตตานี, 94140",
    "ตำบลกระเสาะ, อำเภอมายอ, ปัตตานี, 94140",
    "ตำบลกระหวะ, อำเภอมายอ, ปัตตานี, 94140",
    "ตำบลตรัง, อำเภอมายอ, ปัตตานี, 94140",
    "ตำบลถนน, อำเภอมายอ, ปัตตานี, 94140",
    "ตำบลปะโด, อำเภอมายอ, ปัตตานี, 94140",
    "ตำบลปานัน, อำเภอมายอ, ปัตตานี, 94140",
    "ตำบลมายอ, อำเภอมายอ, ปัตตานี, 94140",
    "ตำบลลุโบะยิไร, อำเภอมายอ, ปัตตานี, 94140",
    "ตำบลสะกำ, อำเภอมายอ, ปัตตานี, 94140",
    "ตำบลสาคอใต้, อำเภอมายอ, ปัตตานี, 94140",
    "ตำบลสาคอบน, อำเภอมายอ, ปัตตานี, 94140",
    "ตำบลแหลมโพธิ์, อำเภอยะหริ่ง, ปัตตานี, 94150",
    "ตำบลจะรัง, อำเภอยะหริ่ง, ปัตตานี, 94150",
    "ตำบลตอหลัง, อำเภอยะหริ่ง, ปัตตานี, 94150",
    "ตำบลตะโละ, อำเภอยะหริ่ง, ปัตตานี, 94150",
    "ตำบลตะโละกาโปร์, อำเภอยะหริ่ง, ปัตตานี, 94150",
    "ตำบลตันหยงดาลอ, อำเภอยะหริ่ง, ปัตตานี, 94150",
    "ตำบลตาแกะ, อำเภอยะหริ่ง, ปัตตานี, 94150",
    "ตำบลตาลีอายร์, อำเภอยะหริ่ง, ปัตตานี, 94150",
    "ตำบลบางปู, อำเภอยะหริ่ง, ปัตตานี, 94150",
    "ตำบลปิยามุมัง, อำเภอยะหริ่ง, ปัตตานี, 94150",
    "ตำบลปุลากง, อำเภอยะหริ่ง, ปัตตานี, 94150",
    "ตำบลมะนังยง, อำเภอยะหริ่ง, ปัตตานี, 94150",
    "ตำบลยามู, อำเภอยะหริ่ง, ปัตตานี, 94150",
    "ตำบลราตาปันยัง, อำเภอยะหริ่ง, ปัตตานี, 94150",
    "ตำบลสาบัน, อำเภอยะหริ่ง, ปัตตานี, 94150",
    "ตำบลหนองแรต, อำเภอยะหริ่ง, ปัตตานี, 94150",
    "ตำบลเขาตูม, อำเภอยะรัง, ปัตตานี, 94160",
    "ตำบลเมาะมาวี, อำเภอยะรัง, ปัตตานี, 94160",
    "ตำบลกระโด, อำเภอยะรัง, ปัตตานี, 94160",
    "ตำบลกอลำ, อำเภอยะรัง, ปัตตานี, 94160",
    "ตำบลคลองใหม่, อำเภอยะรัง, ปัตตานี, 94160",
    "ตำบลประจัน, อำเภอยะรัง, ปัตตานี, 94160",
    "ตำบลปิตูมุดี, อำเภอยะรัง, ปัตตานี, 94160",
    "ตำบลยะรัง, อำเภอยะรัง, ปัตตานี, 94160",
    "ตำบลระแว้ง, อำเภอยะรัง, ปัตตานี, 94160",
    "ตำบลวัด, อำเภอยะรัง, ปัตตานี, 94160",
    "ตำบลสะดาวา, อำเภอยะรัง, ปัตตานี, 94160",
    "ตำบลสะนอ, อำเภอยะรัง, ปัตตานี, 94160",
    "ตำบลเกาะเปาะ, อำเภอหนองจิก, ปัตตานี, 94170",
    "ตำบลคอลอตันหยง, อำเภอหนองจิก, ปัตตานี, 94170",
    "ตำบลดอนรัก, อำเภอหนองจิก, ปัตตานี, 94170",
    "ตำบลดาโต๊ะ, อำเภอหนองจิก, ปัตตานี, 94170",
    "ตำบลตุยง, อำเภอหนองจิก, ปัตตานี, 94170",
    "ตำบลท่ากำชำ, อำเภอหนองจิก, ปัตตานี, 94170",
    "ตำบลบ่อทอง, อำเภอหนองจิก, ปัตตานี, 94170",
    "ตำบลบางเขา, อำเภอหนองจิก, ปัตตานี, 94170",
    "ตำบลบางตาวา, อำเภอหนองจิก, ปัตตานี, 94170",
    "ตำบลปุโละปุโย, อำเภอหนองจิก, ปัตตานี, 94170",
    "ตำบลยาบี, อำเภอหนองจิก, ปัตตานี, 94170",
    "ตำบลลิปะสะโง, อำเภอหนองจิก, ปัตตานี, 94170",
    "ตำบลแม่ลาน, อำเภอแม่ลาน, ปัตตานี, 94180",
    "ตำบลป่าไร่, อำเภอแม่ลาน, ปัตตานี, 94180",
    "ตำบลม่วงเตี้ย, อำเภอแม่ลาน, ปัตตานี, 94180",
    "ตำบลควนโนรี, อำเภอโคกโพธิ์, ปัตตานี, 94180",
    "ตำบลทุ่งพลา, อำเภอโคกโพธิ์, ปัตตานี, 94180",
    "ตำบลนาประดู่, อำเภอโคกโพธิ์, ปัตตานี, 94180",
    "ตำบลปากล่อ, อำเภอโคกโพธิ์, ปัตตานี, 94180",
    "ตำบลควน, อำเภอปะนาเระ, ปัตตานี, 94190",
    "ตำบลลางา, อำเภอมายอ, ปัตตานี, 94190",
    "ตำบลตันหยงจึงงา, อำเภอยะหริ่ง, ปัตตานี, 94190",
    "ตำบลบาโลย, อำเภอยะหริ่ง, ปัตตานี, 94190",
    "ตำบลทุ่งคล้า, อำเภอสายบุรี, ปัตตานี, 94190",
    "ตำบลไทรทอง, อำเภอไม้แก่น, ปัตตานี, 94220",
    "ตำบลไม้แก่น, อำเภอไม้แก่น, ปัตตานี, 94220",
    "ตำบลดอนทราย, อำเภอไม้แก่น, ปัตตานี, 94220",
    "ตำบลตะโละไกรทอง, อำเภอไม้แก่น, ปัตตานี, 94220",
    "ตำบลกะรุบี, อำเภอกะพ้อ, ปัตตานี, 94230",
    "ตำบลตะโละดือรามัน, อำเภอกะพ้อ, ปัตตานี, 94230",
    "ตำบลปล่องหอย, อำเภอกะพ้อ, ปัตตานี, 94230",
    "ตำบลเปาะเส้ง, อำเภอเมืองยะลา, ยะลา, 95000",
    "ตำบลตาเซะ, อำเภอเมืองยะลา, ยะลา, 95000",
    "ตำบลท่าสาป, อำเภอเมืองยะลา, ยะลา, 95000",
    "ตำบลบันนังสาเรง, อำเภอเมืองยะลา, ยะลา, 95000",
    "ตำบลบุดี, อำเภอเมืองยะลา, ยะลา, 95000",
    "ตำบลยะลา, อำเภอเมืองยะลา, ยะลา, 95000",
    "ตำบลยุโป, อำเภอเมืองยะลา, ยะลา, 95000",
    "ตำบลสะเตง, อำเภอเมืองยะลา, ยะลา, 95000",
    "ตำบลสะเตงนอก, อำเภอเมืองยะลา, ยะลา, 95000",
    "ตำบลหน้าถ้ำ, อำเภอเมืองยะลา, ยะลา, 95000",
    "ตำบลกรงปินัง, อำเภอกรงปินัง, ยะลา, 95000",
    "ตำบลปุโรง, อำเภอกรงปินัง, ยะลา, 95000",
    "ตำบลสะเอะ, อำเภอกรงปินัง, ยะลา, 95000",
    "ตำบลห้วยกระทิง, อำเภอกรงปินัง, ยะลา, 95000",
    "ตำบลเบตง, อำเภอเบตง, ยะลา, 95110",
    "ตำบลตาเนาะแมเราะ, อำเภอเบตง, ยะลา, 95110",
    "ตำบลธารน้ำทิพย์, อำเภอเบตง, ยะลา, 95110",
    "ตำบลยะรม, อำเภอเบตง, ยะลา, 95110",
    "ตำบลอัยเยอร์เวง, อำเภอเบตง, ยะลา, 95110",
    "ตำบลกาบัง, อำเภอกาบัง, ยะลา, 95120",
    "ตำบลบาละ, อำเภอกาบัง, ยะลา, 95120",
    "ตำบลกาตอง, อำเภอยะหา, ยะลา, 95120",
    "ตำบลตาชี, อำเภอยะหา, ยะลา, 95120",
    "ตำบลบาโงยซิแน, อำเภอยะหา, ยะลา, 95120",
    "ตำบลบาโร๊ะ, อำเภอยะหา, ยะลา, 95120",
    "ตำบลปะแต, อำเภอยะหา, ยะลา, 95120",
    "ตำบลยะหา, อำเภอยะหา, ยะลา, 95120",
    "ตำบลละแอ, อำเภอยะหา, ยะลา, 95120",
    "ตำบลเขื่อนบางลาง, อำเภอบันนังสตา, ยะลา, 95130",
    "ตำบลตลิ่งชัน, อำเภอบันนังสตา, ยะลา, 95130",
    "ตำบลตาเนาะปูเต๊ะ, อำเภอบันนังสตา, ยะลา, 95130",
    "ตำบลถ้ำทะลุ, อำเภอบันนังสตา, ยะลา, 95130",
    "ตำบลบันนังสตา, อำเภอบันนังสตา, ยะลา, 95130",
    "ตำบลบาเจาะ, อำเภอบันนังสตา, ยะลา, 95130",
    "ตำบลเกะรอ, อำเภอรามัน, ยะลา, 95140",
    "ตำบลเนินงาม, อำเภอรามัน, ยะลา, 95140",
    "ตำบลโกตาบารู, อำเภอรามัน, ยะลา, 95140",
    "ตำบลกอตอตือร๊ะ, อำเภอรามัน, ยะลา, 95140",
    "ตำบลกายูบอเกาะ, อำเภอรามัน, ยะลา, 95140",
    "ตำบลกาลอ, อำเภอรามัน, ยะลา, 95140",
    "ตำบลกาลูปัง, อำเภอรามัน, ยะลา, 95140",
    "ตำบลจะกว๊ะ, อำเภอรามัน, ยะลา, 95140",
    "ตำบลตะโล๊ะหะลอ, อำเภอรามัน, ยะลา, 95140",
    "ตำบลท่าธง, อำเภอรามัน, ยะลา, 95140",
    "ตำบลบาโงย, อำเภอรามัน, ยะลา, 95140",
    "ตำบลบาลอ, อำเภอรามัน, ยะลา, 95140",
    "ตำบลบือมัง, อำเภอรามัน, ยะลา, 95140",
    "ตำบลยะต๊ะ, อำเภอรามัน, ยะลา, 95140",
    "ตำบลวังพญา, อำเภอรามัน, ยะลา, 95140",
    "ตำบลอาซ่อง, อำเภอรามัน, ยะลา, 95140",
    "ตำบลคีรีเขต, อำเภอธารโต, ยะลา, 95150",
    "ตำบลธารโต, อำเภอธารโต, ยะลา, 95150",
    "ตำบลบ้านแหร, อำเภอธารโต, ยะลา, 95150",
    "ตำบลพร่อน, อำเภอเมืองยะลา, ยะลา, 95160",
    "ตำบลลำใหม่, อำเภอเมืองยะลา, ยะลา, 95160",
    "ตำบลลำพะยา, อำเภอเมืองยะลา, ยะลา, 95160",
    "ตำบลลิดล, อำเภอเมืองยะลา, ยะลา, 95160",
    "ตำบลแม่หวาด, อำเภอธารโต, ยะลา, 95170",
    "ตำบลโคกเคียน, อำเภอเมืองนราธิวาส, นราธิวาส, 96000",
    "ตำบลกะลุวอ, อำเภอเมืองนราธิวาส, นราธิวาส, 96000",
    "ตำบลกะลุวอเหนือ, อำเภอเมืองนราธิวาส, นราธิวาส, 96000",
    "ตำบลบางนาค, อำเภอเมืองนราธิวาส, นราธิวาส, 96000",
    "ตำบลบางปอ, อำเภอเมืองนราธิวาส, นราธิวาส, 96000",
    "ตำบลมะนังตายอ, อำเภอเมืองนราธิวาส, นราธิวาส, 96000",
    "ตำบลลำภู, อำเภอเมืองนราธิวาส, นราธิวาส, 96000",
    "ตำบลเกาะสะท้อน, อำเภอตากใบ, นราธิวาส, 96110",
    "ตำบลเจ๊ะเห, อำเภอตากใบ, นราธิวาส, 96110",
    "ตำบลโฆษิต, อำเภอตากใบ, นราธิวาส, 96110",
    "ตำบลไพรวัน, อำเภอตากใบ, นราธิวาส, 96110",
    "ตำบลนานาค, อำเภอตากใบ, นราธิวาส, 96110",
    "ตำบลบางขุนทอง, อำเภอตากใบ, นราธิวาส, 96110",
    "ตำบลพร่อน, อำเภอตากใบ, นราธิวาส, 96110",
    "ตำบลศาลาใหม่, อำเภอตากใบ, นราธิวาส, 96110",
    "ตำบลปาเสมัส, อำเภอสุไหงโกลก, นราธิวาส, 96120",
    "ตำบลปูโยะ, อำเภอสุไหงโกลก, นราธิวาส, 96120",
    "ตำบลมูโนะ, อำเภอสุไหงโกลก, นราธิวาส, 96120",
    "ตำบลสุไหงโก-ลก, อำเภอสุไหงโกลก, นราธิวาส, 96120",
    "ตำบลจวบ, อำเภอเจาะไอร้อง, นราธิวาส, 96130",
    "ตำบลบูกิต, อำเภอเจาะไอร้อง, นราธิวาส, 96130",
    "ตำบลมะรือโบออก, อำเภอเจาะไอร้อง, นราธิวาส, 96130",
    "ตำบลเฉลิม, อำเภอระแงะ, นราธิวาส, 96130",
    "ตำบลกาลิซา, อำเภอระแงะ, นราธิวาส, 96130",
    "ตำบลตันหยงมัส, อำเภอระแงะ, นราธิวาส, 96130",
    "ตำบลตันหยงลิมอ, อำเภอระแงะ, นราธิวาส, 96130",
    "ตำบลบาโงสะโต, อำเภอระแงะ, นราธิวาส, 96130",
    "ตำบลมะรือโบตก, อำเภอระแงะ, นราธิวาส, 96130",
    "ตำบลโต๊ะเด็ง, อำเภอสุไหงปาดี, นราธิวาส, 96140",
    "ตำบลกาวะ, อำเภอสุไหงปาดี, นราธิวาส, 96140",
    "ตำบลปะลุรู, อำเภอสุไหงปาดี, นราธิวาส, 96140",
    "ตำบลริโก๋, อำเภอสุไหงปาดี, นราธิวาส, 96140",
    "ตำบลสากอ, อำเภอสุไหงปาดี, นราธิวาส, 96140",
    "ตำบลสุไหงปาดี, อำเภอสุไหงปาดี, นราธิวาส, 96140",
    "ตำบลเรียง, อำเภอรือเสาะ, นราธิวาส, 96150",
    "ตำบลโคกสะตอ, อำเภอรือเสาะ, นราธิวาส, 96150",
    "ตำบลบาตง, อำเภอรือเสาะ, นราธิวาส, 96150",
    "ตำบลรือเสาะ, อำเภอรือเสาะ, นราธิวาส, 96150",
    "ตำบลรือเสาะออก, อำเภอรือเสาะ, นราธิวาส, 96150",
    "ตำบลลาโละ, อำเภอรือเสาะ, นราธิวาส, 96150",
    "ตำบลสามัคคี, อำเภอรือเสาะ, นราธิวาส, 96150",
    "ตำบลสาวอ, อำเภอรือเสาะ, นราธิวาส, 96150",
    "ตำบลสุวารี, อำเภอรือเสาะ, นราธิวาส, 96150",
    "ตำบลเอราวัณ, อำเภอแว้ง, นราธิวาส, 96160",
    "ตำบลแม่ดง, อำเภอแว้ง, นราธิวาส, 96160",
    "ตำบลแว้ง, อำเภอแว้ง, นราธิวาส, 96160",
    "ตำบลโละจูด, อำเภอแว้ง, นราธิวาส, 96160",
    "ตำบลกายูคละ, อำเภอแว้ง, นราธิวาส, 96160",
    "ตำบลฆอเลาะ, อำเภอแว้ง, นราธิวาส, 96160",
    "ตำบลกาเยาะมาตี, อำเภอบาเจาะ, นราธิวาส, 96170",
    "ตำบลบาเจาะ, อำเภอบาเจาะ, นราธิวาส, 96170",
    "ตำบลบาเระเหนือ, อำเภอบาเจาะ, นราธิวาส, 96170",
    "ตำบลบาเระใต้, อำเภอบาเจาะ, นราธิวาส, 96170",
    "ตำบลปะลุกาสาเมาะ, อำเภอบาเจาะ, นราธิวาส, 96170",
    "ตำบลลุโบะสาวอ, อำเภอบาเจาะ, นราธิวาส, 96170",
    "ตำบลจอเบาะ, อำเภอยี่งอ, นราธิวาส, 96180",
    "ตำบลตะปอเยาะ, อำเภอยี่งอ, นราธิวาส, 96180",
    "ตำบลยี่งอ, อำเภอยี่งอ, นราธิวาส, 96180",
    "ตำบลละหาร, อำเภอยี่งอ, นราธิวาส, 96180",
    "ตำบลลุโบะบายะ, อำเภอยี่งอ, นราธิวาส, 96180",
    "ตำบลลุโบะบือซา, อำเภอยี่งอ, นราธิวาส, 96180",
    "ตำบลเกียร์, อำเภอสุคิริน, นราธิวาส, 96190",
    "ตำบลภูเขาทอง, อำเภอสุคิริน, นราธิวาส, 96190",
    "ตำบลมาโมง, อำเภอสุคิริน, นราธิวาส, 96190",
    "ตำบลร่มไทร, อำเภอสุคิริน, นราธิวาส, 96190",
    "ตำบลสุคิริน, อำเภอสุคิริน, นราธิวาส, 96190",
    "ตำบลเชิงคีรี, อำเภอศรีสาคร, นราธิวาส, 96210",
    "ตำบลกาหลง, อำเภอศรีสาคร, นราธิวาส, 96210",
    "ตำบลซากอ, อำเภอศรีสาคร, นราธิวาส, 96210",
    "ตำบลตะมะยูง, อำเภอศรีสาคร, นราธิวาส, 96210",
    "ตำบลศรีบรรพต, อำเภอศรีสาคร, นราธิวาส, 96210",
    "ตำบลศรีสาคร, อำเภอศรีสาคร, นราธิวาส, 96210",
    "ตำบลจะแนะ, อำเภอจะแนะ, นราธิวาส, 96220",
    "ตำบลช้างเผือก, อำเภอจะแนะ, นราธิวาส, 96220",
    "ตำบลดุซงญอ, อำเภอจะแนะ, นราธิวาส, 96220",
    "ตำบลผดุงมาตร, อำเภอจะแนะ, นราธิวาส, 96220",
    "ตำบลบองอ, อำเภอระแงะ, นราธิวาส, 96220",
];


/***/ }),

/***/ "Ncag":
/*!**************************************************************!*\
  !*** ./src/app/user/components/contact/contact.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/form.service */ "nLB4");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/http.service */ "aX0s");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














const _c0 = ["FormDirective"];
function ContactComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_mat_error_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Subject is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_mat_error_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Post content is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactComponent {
    constructor(fb, fs, http) {
        this.fb = fb;
        this.fs = fs;
        this.http = http;
        this.matcher = new _shared_services_form_service__WEBPACK_IMPORTED_MODULE_2__["MyErrorStateMatcher"]();
        this.createContactForm();
    }
    ngOnInit() { }
    onSend() {
        if (this.cform.invalid)
            return;
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
    createContactForm() {
        this.cform = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
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
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], viewQuery: function ContactComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdform = _t.first);
    } }, decls: 64, vars: 10, consts: [[1, "mb-50"], [1, "container"], [1, "row", "text-center"], [1, "header"], [1, "container-content"], ["fxLayout", "row", "fxLayout.lt-sm", "column"], ["fxflex", "100", "fxFlex.gt-sm", "60", 1, "left-info"], [1, "title"], ["mat-card-avatar", ""], ["fxflex", "100", "fxFlex.gt-sm", "60", 1, "right-contact"], [3, "formGroup", "submit"], ["FormDirective", "ngForm"], ["matInput", "", "formControlName", "name", 3, "errorStateMatcher"], [4, "ngIf"], ["matInput", "", "formControlName", "email", "placeholder", "Ex. pat@example.com", 3, "errorStateMatcher"], ["matInput", "", "formControlName", "subject", 3, "errorStateMatcher"], ["matInput", "", "rows", "6", "formControlName", "content", 3, "errorStateMatcher"], ["type", "submit", "mat-raised-button", "", 1, "send-btn"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "086-257-8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "timetrendofficial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "timetrend@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "form", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ContactComponent_Template_form_submit_39_listener() { return ctx.onSend(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Your Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ContactComponent_mat_error_45_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Your Email *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ContactComponent_mat_error_50_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ContactComponent_mat_error_51_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Subject *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ContactComponent_mat_error_56_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Post content *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ContactComponent_mat_error_61_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.cform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.hasError("email") && !ctx.email.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subject.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content.hasError("required"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: [".left-info[_ngcontent-%COMP%] {\n  padding-right: 100px;\n}\n.left-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #ff3d71;\n}\n.left-info[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: 1px solid #e8e8e8;\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n.right-contact[_ngcontent-%COMP%] {\n  position: relative;\n}\n.right-contact[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  width: 100%;\n}\n.title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 28px;\n  color: #383838;\n}\n.send-btn[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  min-width: -webkit-max-content;\n  min-width: max-content;\n  border-radius: 1.25rem;\n  background-color: #1e90ff;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFJQTtFQUNFLGtCQUFBO0FBREY7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQURKO0FBS0E7RUFDRSxtQkFBQTtBQUZGO0FBR0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBREo7QUFLQTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUFBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1pbmZvIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6ICNmZjNkNzE7XHJcbiAgfVxyXG5cclxuICBociB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucmlnaHQtY29udGFjdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiAjMzgzODM4O1xyXG4gIH1cclxufVxyXG5cclxuLnNlbmQtYnRuIHtcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcclxuICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTkwZmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_services_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"] }, { type: _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }]; }, { cdform: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['FormDirective']
        }] }); })();


/***/ }),

/***/ "Sm8t":
/*!*********************************************************!*\
  !*** ./src/app/user/layouts/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["shop"]; };
const _c1 = function () { return ["shop/megirm"]; };
const _c2 = function () { return ["shop/megirw"]; };
const _c3 = function () { return ["shop/cadisen"]; };
const _c4 = function () { return ["shop/ruimas"]; };
const _c5 = function () { return ["home"]; };
const _c6 = function () { return ["track"]; };
const _c7 = function () { return ["contact"]; };
class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 107, vars: 16, consts: [[1, "info-bar"], [1, "row", "text-center"], [1, "col"], [1, "bar-icon"], ["src", "../../../../assets/img/free-shipping.png", "alt", "Services"], [1, "bar-caption"], ["src", "../../../../assets/img/guarantee.png", "alt", "Services"], ["src", "../../../../assets/img/cash.png", "alt", "Services"], ["src", "../../../../assets/img/24-hours.png", "alt", "Services"], [1, "footer-area"], [1, "row", "d-flex", "justify-content-between"], [1, "col-1", "mb-35"], [1, "footer-title", "mb-35"], [1, "footer-descrption", "mb-35"], [1, "menu-social"], ["href", "https://www.facebook.com/timetrendofficial", "target", "_blank"], [1, "icon"], [1, "col-2", "mb-35"], [1, "footer-heading"], [3, "routerLink"], [1, "footer-heading", "mb-35"], [1, "footer-bottom-area"], [1, "container"], [1, "footer-copy-right"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Fast & Free Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Free delivery on all orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Warranty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "1-year warranty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Money back Guarantee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "100% money back guarantee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Online Support 24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Call us: 086-657-7599");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "timetrend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \u0E19\u0E32\u0E2C\u0E34\u0E01\u0E32\u0E02\u0E49\u0E2D\u0E21\u0E37\u0E2D\u0E15\u0E31\u0E27\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E0D\u0E35\u0E48\u0E1B\u0E38\u0E48\u0E19 \u0E23\u0E30\u0E1A\u0E1A\u0E42\u0E04\u0E23\u0E42\u0E19\u0E01\u0E23\u0E32\u0E1F\u0E17\u0E35\u0E48\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33\u0E2A\u0E39\u0E07 \u0E01\u0E31\u0E19\u0E19\u0E49\u0E33 3 ATM \u0E19\u0E32\u0E2C\u0E34\u0E01\u0E32\u0E2A\u0E38\u0E14\u0E40\u0E17\u0E48 \u0E43\u0E2A\u0E48\u0E44\u0E14\u0E49\u0E17\u0E38\u0E01\u0E27\u0E31\u0E22 \u0E14\u0E35\u0E44\u0E0B\u0E19\u0E4C\u0E17\u0E31\u0E19\u0E2A\u0E21\u0E31\u0E22\u0E2A\u0E27\u0E22\u0E07\u0E32\u0E21 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "shop category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Megir M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Megir W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Cadisen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Ruimas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Order track");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Customer Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "086-257-8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "timetrendofficial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "timetrend@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\u00A9 2020 TimeTrend. All Rights Reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c7));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".info-bar[_ngcontent-%COMP%] {\n  padding: 120px 60px 120px 60px;\n  background-color: #fff;\n}\n\n.bar-icon[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 26px;\n}\n\n.bar-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n\n.bar-caption[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 20px;\n  font-weight: 500;\n  text-transform: capitalize;\n  color: #2b2b2b;\n}\n\n.bar-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #57667e;\n}\n\n.footer-area[_ngcontent-%COMP%] {\n  background-color: #333333;\n  padding: 105px 100px 50px 100px;\n}\n\n.footer-bottom-area[_ngcontent-%COMP%] {\n  background-color: #232323;\n  padding: 18px 0 5px;\n}\n\n.footer-copy-right[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.footer-copy-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 2;\n  color: #fff;\n}\n\n.footer-title[_ngcontent-%COMP%] {\n  display: block;\n  font-family: \"Cinzel\", serif;\n  font-size: 30px;\n  font-weight: 500;\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  color: #fff;\n}\n\n.footer-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  vertical-align: middle;\n}\n\n.footer-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 4px;\n}\n\n.footer-heading[_ngcontent-%COMP%] {\n  display: block;\n  color: #fff;\n}\n\n.footer-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n}\n\n.footer-heading[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.footer-heading[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.footer-heading[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 400;\n  text-decoration: none;\n  transition: 0.4s;\n  color: #e2e2e2;\n}\n\n.footer-heading[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ff4584;\n  padding-left: 5px;\n}\n\n.footer-heading[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  vertical-align: middle;\n}\n\n.footer-heading[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  margin-top: 2px;\n  font-size: 16px;\n  font-weight: 400;\n  text-decoration: none;\n  color: #e2e2e2;\n}\n\n.footer-descrption[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  color: #fff;\n}\n\n.menu-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 8px;\n  margin-bottom: 8px;\n  color: #fff;\n  width: 40px;\n  height: 40px;\n  font-size: 26px;\n  line-height: 40px;\n  text-align: center;\n  transition: 0.4s;\n  border-radius: 50%;\n  border: 1px solid #fff;\n}\n\n.menu-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    > mat-icon[_ngcontent-%COMP%] {\n  color: #1e90ff;\n  background-color: #fff;\n}\n\n.menu-social[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: inherit;\n}\n\n.menu-social[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 8px;\n  color: #1d2547;\n  width: 40px;\n  height: 40px;\n  font-size: 26px;\n  line-height: 40px;\n  text-align: center;\n  transition: 0.4s;\n  border-radius: 50%;\n  border: 1px solid rgba(29, 37, 71, 0.12);\n}\n\n.menu-social[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover    > mat-icon[_ngcontent-%COMP%] {\n  color: dodgerblue;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n@media (min-width: 576px) {\n  .col-1[_ngcontent-%COMP%] {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n\n  .col-2[_ngcontent-%COMP%] {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n}\n\n@media (min-width: 768px) {\n  .col-1[_ngcontent-%COMP%] {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n\n  .col-2[_ngcontent-%COMP%] {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-1[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-2[_ngcontent-%COMP%] {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-1[_ngcontent-%COMP%] {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n\n  .col-2[_ngcontent-%COMP%] {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw4QkFBQTtFQUNBLHNCQUpXO0FBR2I7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBREo7O0FBTUU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUFISjs7QUFNRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSko7O0FBUUE7RUFDRSx5QkFBQTtFQUNBLCtCQUFBO0FBTEY7O0FBUUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtBQUxGOztBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBbERTO0FBNkNiOztBQVNBO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBN0RXO0FBdURiOztBQVFFO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtBQU5KOztBQVNFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBUEo7O0FBV0E7RUFDRSxjQUFBO0VBQ0EsV0E1RVc7QUFvRWI7O0FBVUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFSSjs7QUFXRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFUSjs7QUFXSTtFQUNFLG1CQUFBO0FBVE47O0FBV007RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFUUjs7QUFZTTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQVZSOztBQWFNO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtBQVhSOztBQWNNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQVpSOztBQWtCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBaklXO0FBa0hiOztBQWtCQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBeElXO0VBeUlYLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFmRjs7QUFrQkE7RUFDRSxjQUFBO0VBQ0Esc0JBckpXO0FBc0liOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWZGOztBQWtCQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQWZGOztBQWtCQTtFQUNFLGlCQUFBO0FBZkY7O0FBa0JBOztFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBZkY7O0FBa0JBO0VBQ0U7SUFDRSxvQkFBQTtJQUNBLHFCQUFBO0VBZkY7O0VBa0JBO0lBQ0Usb0JBQUE7SUFDQSxxQkFBQTtFQWZGO0FBQ0Y7O0FBa0JBO0VBQ0U7SUFDRSxvQkFBQTtJQUNBLHFCQUFBO0VBaEJGOztFQW1CQTtJQUNFLG9CQUFBO0lBQ0EscUJBQUE7RUFoQkY7QUFDRjs7QUFtQkE7RUFDRTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VBakJGOztFQW9CQTtJQUNFLG9CQUFBO0lBQ0EscUJBQUE7RUFqQkY7QUFDRjs7QUFvQkE7RUFDRTtJQUNFLG9CQUFBO0lBQ0EscUJBQUE7RUFsQkY7O0VBcUJBO0lBQ0Usb0JBQUE7SUFDQSxxQkFBQTtFQWxCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udC13aGl0ZTogI2ZmZjtcclxuXHJcbi5pbmZvLWJhciB7XHJcbiAgcGFkZGluZzogMTIwcHggNjBweCAxMjBweCA2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRmb250LXdoaXRlO1xyXG59XHJcblxyXG4uYmFyLWljb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDI2cHg7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJhci1jYXB0aW9uIHtcclxuICBoNSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBjb2xvcjogIzJiMmIyYjtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM1NzY2N2U7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyLWFyZWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgcGFkZGluZzogMTA1cHggMTAwcHggNTBweCAxMDBweDtcclxufVxyXG5cclxuLmZvb3Rlci1ib3R0b20tYXJlYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcclxuICBwYWRkaW5nOiAxOHB4IDAgNXB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWNvcHktcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICBjb2xvcjogJGZvbnQtd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyLXRpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogXCJDaW56ZWxcIiwgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICRmb250LXdoaXRlO1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb290ZXItaGVhZGluZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICRmb250LXdoaXRlO1xyXG5cclxuICBoNCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgY29sb3I6ICNlMmUyZTI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZmY0NTg0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNlMmUyZTI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb290ZXItZGVzY3JwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICRmb250LXdoaXRlO1xyXG59XHJcblxyXG4ubWVudS1zb2NpYWwgYSA+IG1hdC1pY29uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGNvbG9yOiAkZm9udC13aGl0ZTtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkZm9udC13aGl0ZTtcclxufVxyXG5cclxuLm1lbnUtc29jaWFsIGE6aG92ZXIgPiBtYXQtaWNvbiB7XHJcbiAgY29sb3I6ICMxZTkwZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZvbnQtd2hpdGU7XHJcbn1cclxuXHJcbi5tZW51LXNvY2lhbCBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubWVudS1zb2NpYWwgYnV0dG9uID4gbWF0LWljb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBjb2xvcjogIzFkMjU0NztcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI5LCAzNywgNzEsIDAuMTIpO1xyXG59XHJcblxyXG4ubWVudS1zb2NpYWwgYnV0dG9uOmhvdmVyID4gbWF0LWljb24ge1xyXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xyXG59XHJcblxyXG4uY29sLTEsXHJcbi5jb2wtMiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDFweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLmNvbC0xIHtcclxuICAgIGZsZXg6IDAgMCA2Ni42NjY2NjclO1xyXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC0yIHtcclxuICAgIGZsZXg6IDAgMCAzMy4zMzMzMzMlO1xyXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbC0xIHtcclxuICAgIGZsZXg6IDAgMCA2Ni42NjY2NjclO1xyXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC0yIHtcclxuICAgIGZsZXg6IDAgMCAzMy4zMzMzMzMlO1xyXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmNvbC0xIHtcclxuICAgIGZsZXg6IDAgMCAyNSU7XHJcbiAgICBtYXgtd2lkdGg6IDI1JTtcclxuICB9XHJcblxyXG4gIC5jb2wtMiB7XHJcbiAgICBmbGV4OiAwIDAgMTYuNjY2NjY3JTtcclxuICAgIG1heC13aWR0aDogMTYuNjY2NjY3JTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuY29sLTEge1xyXG4gICAgZmxleDogMCAwIDMzLjMzMzMzMyU7XHJcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLTIge1xyXG4gICAgZmxleDogMCAwIDE2LjY2NjY2NyU7XHJcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY2NyU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "X6Av":
/*!**********************************************************!*\
  !*** ./src/app/user/components/track/track.component.ts ***!
  \**********************************************************/
/*! exports provided: TrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackComponent", function() { return TrackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/http.service */ "aX0s");
/* harmony import */ var _shared_services_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/form.service */ "nLB4");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_command_focus_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/command/focus.directive */ "n5nQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
















function TrackComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrackComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.searchValue = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrackComponent_div_15_table_51_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function TrackComponent_div_15_table_51_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r6.url + element_r17.cover), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TrackComponent_div_15_table_51_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrackComponent_div_15_table_51_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", element_r18.code, "-", element_r18.color, " ");
} }
function TrackComponent_div_15_table_51_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrackComponent_div_15_table_51_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r19.sale), " ");
} }
function TrackComponent_div_15_table_51_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrackComponent_div_15_table_51_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r20.quantity);
} }
function TrackComponent_div_15_table_51_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrackComponent_div_15_table_51_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r21.sale * element_r21.quantity), " ");
} }
function TrackComponent_div_15_table_51_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 43);
} }
function TrackComponent_div_15_table_51_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 44);
} }
function TrackComponent_div_15_table_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TrackComponent_div_15_table_51_th_2_Template, 2, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TrackComponent_div_15_table_51_td_3_Template, 3, 3, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TrackComponent_div_15_table_51_th_5_Template, 2, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TrackComponent_div_15_table_51_td_6_Template, 2, 2, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TrackComponent_div_15_table_51_th_8_Template, 2, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TrackComponent_div_15_table_51_td_9_Template, 3, 3, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TrackComponent_div_15_table_51_th_11_Template, 2, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TrackComponent_div_15_table_51_td_12_Template, 3, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TrackComponent_div_15_table_51_th_14_Template, 2, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TrackComponent_div_15_table_51_td_15_Template, 3, 3, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TrackComponent_div_15_table_51_tr_16_Template, 1, 0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TrackComponent_div_15_table_51_tr_17_Template, 1, 0, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r4.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r4.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r4.displayedColumns);
} }
const _c1 = function (a0) { return { completed: a0 }; };
function TrackComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Order:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0E08\u0E31\u0E14\u0E2A\u0E48\u0E07\u0E1E\u0E31\u0E2A\u0E14\u0E38");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u0E2D\u0E22\u0E39\u0E48\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E02\u0E19\u0E2A\u0E48\u0E07");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, TrackComponent_div_15_table_51_Template, 18, 3, "table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.order.track);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.order.logistic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.order.logistic_track);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx_r1.order.orderTrack[0].status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.order.orderTrack[0].date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, ctx_r1.order.orderTrack[1].status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.order.orderTrack[1].date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx_r1.order.orderTrack[2].status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.order.orderTrack[2].date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx_r1.order.orderTrack[3].status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.order.orderTrack[3].date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dataSource.data.length > 0);
} }
class TrackComponent {
    constructor(http, fs) {
        this.http = http;
        this.fs = fs;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].localhost;
        this.searchValue = '';
        this.status = false;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.displayedColumns = [
            'product',
            'code',
            'price',
            'quantity',
            'total',
        ];
    }
    ngOnInit() { }
    onSearch(track) {
        this.http
            .getTrack(track)
            .then((result) => {
            this.status = true;
            this.order = result;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.order.orderList);
        })
            .catch((resError) => {
            this.status = false;
            this.fs.openSnackBar('The tracking ID is invalid. Please check if you entered the tracking ID correctly.', 'X');
        });
    }
}
TrackComponent.ɵfac = function TrackComponent_Factory(t) { return new (t || TrackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"])); };
TrackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrackComponent, selectors: [["app-track"]], decls: 16, vars: 3, consts: [[1, "mb-50"], [1, "container"], [1, "row", "text-center"], [1, "header"], ["fxLayout", "row", "fxFlex", "65", "fxFlex.xs", "100", 1, "search"], ["fxFlex", "100", "fxLayoutAlign", "space-between center", 1, "font"], [1, "search-box"], ["matInput", "", "matInputFocus", "", "type", "text", 3, "ngModel", "ngModelChange", "keyup.enter"], ["type", "button", "mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["type", "button", "mat-flat-button", "", "color", "primary", 1, "search-btn", 3, "click"], ["class", "mb-50", 4, "ngIf"], ["type", "button", "mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [1, "container-content", "bg-white"], [1, "track-content"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "space-between", 1, "mb-50"], ["fxFlex", "70", 1, "track-header"], [1, "left"], ["fxFlex", "30", 1, "track-header"], [1, "right"], ["fxLayout", "row"], [1, "order-tracking", 3, "ngClass"], [1, "is-complete"], ["src", "assets/img/track/purchase-order.png"], ["src", "assets/img/track/box.png"], ["src", "assets/img/track/transit.png"], ["src", "assets/img/track/shipped.png"], [1, "table-container"], ["mat-table", "", 3, "dataSource", 4, "ngIf"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "product"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "code"], ["matColumnDef", "price"], ["matColumnDef", "quantity"], ["matColumnDef", "total"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "cart-col-image"], [1, "cart-image", 3, "src"], [1, "cart-quan"], ["mat-header-row", ""], ["mat-row", ""]], template: function TrackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Order tracking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order tracking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrackComponent_Template_input_ngModelChange_11_listener($event) { return ctx.searchValue = $event; })("keyup.enter", function TrackComponent_Template_input_keyup_enter_11_listener() { return ctx.onSearch(ctx.searchValue); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TrackComponent_button_12_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrackComponent_Template_button_click_13_listener() { return ctx.onSearch(ctx.searchValue); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TrackComponent_div_15_Template, 52, 20, "div", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _shared_command_focus_directive__WEBPACK_IMPORTED_MODULE_9__["FocusDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultClassDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"]], styles: [".bg-white[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.search[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.search[_ngcontent-%COMP%]   .font[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.search[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: 20px;\n}\n\n.search[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  min-width: -webkit-max-content;\n  min-width: max-content;\n  border-radius: 1.25rem;\n  background-color: #1e90ff;\n}\n\n.track-content[_ngcontent-%COMP%] {\n  padding: 45px 35px 35px 35px;\n  margin-top: 20px;\n}\n\n.track-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 0;\n}\n\n.track-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  color: dodgerblue;\n}\n\n.track-header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  padding-left: 15%;\n}\n\n.track-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  padding-right: 37%;\n  text-align: right;\n}\n\n.track-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fd7202;\n  margin-bottom: -10px !important;\n}\n\n@media (max-width: 599px) {\n  .track-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 15%;\n    text-align: left;\n  }\n}\n\n@media (max-width: 768px) {\n  .track-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n}\n\n.order-tracking[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 25%;\n  position: relative;\n  display: block;\n}\n\n.order-tracking[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100px;\n  max-height: auto;\n  padding-top: 12px;\n  opacity: 0.4;\n}\n\n.order-tracking[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a4a4a4;\n  font-size: 16px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  line-height: 20px;\n}\n\n.order-tracking[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.order-tracking[_ngcontent-%COMP%]   .is-complete[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  border: 0px solid #afafaf;\n  background-color: #f7be16;\n  margin: 0 auto;\n  transition: background 0.25s linear;\n  z-index: 2;\n}\n\n.order-tracking[_ngcontent-%COMP%]   .is-complete[_ngcontent-%COMP%]:after {\n  display: block;\n  position: absolute;\n  content: \"\";\n  height: 14px;\n  width: 7px;\n  top: -2px;\n  bottom: 0;\n  left: 5px;\n  margin: auto 0;\n  border: 0px solid #afafaf;\n  border-width: 0px 2px 2px 0;\n  transform: rotate(45deg);\n  opacity: 0;\n}\n\n.order-tracking.completed[_ngcontent-%COMP%]   .is-complete[_ngcontent-%COMP%] {\n  border-color: #27aa80;\n  border-width: 0px;\n  background-color: #27aa80;\n}\n\n.order-tracking.completed[_ngcontent-%COMP%]   .is-complete[_ngcontent-%COMP%]:after {\n  border-color: #fff;\n  border-width: 0px 3px 3px 0;\n  width: 7px;\n  left: 11px;\n  opacity: 1;\n}\n\n.order-tracking.completed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.order-tracking.completed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.order-tracking[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  height: 3px;\n  width: calc(100% - 40px);\n  background-color: #f7be16;\n  top: 13px;\n  position: absolute;\n  left: calc(-50% + 20px);\n  z-index: 0;\n}\n\n.order-tracking[_ngcontent-%COMP%]:first-child:before {\n  display: none;\n}\n\n.order-tracking.completed[_ngcontent-%COMP%]:before {\n  background-color: #27aa80;\n}\n\n@media (max-width: 450px) {\n  .order-tracking[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 50px;\n  }\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  padding: 0 35px 35px 35px;\n  position: relative;\n  max-height: 800px;\n  max-width: 100%;\n  overflow: auto;\n}\n\n.cart-col-image[_ngcontent-%COMP%] {\n  display: block;\n  width: 100px;\n  height: 100px;\n  padding: 8px;\n}\n\n.cart-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.cart-quan[_ngcontent-%COMP%] {\n  padding: 0 2px;\n  font-size: 16px;\n}\n\n@media (max-width: 600px) {\n  table[_ngcontent-%COMP%] {\n    width: 600px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3RyYWNrL3RyYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFDRTtFQUNFLGVBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQUEsc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBS0E7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBTUU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQUhKOztBQUtJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUhOOztBQU9FO0VBQ0UsaUJBQUE7QUFMSjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFOSjs7QUFRSTtFQUNFLGNBQUE7RUFDQSwrQkFBQTtBQU5OOztBQVVFO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUFSSjtBQUNGOztBQVlBO0VBRUk7SUFDRSxnQkFBQTtFQVZKO0FBQ0Y7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFaRjs7QUFjRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFaSjs7QUFlRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFiSjs7QUFjSTtFQUNFLGVBQUE7QUFaTjs7QUFnQkU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7QUFkSjs7QUFpQkU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQWZKOztBQW9CRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQWpCSjs7QUFvQkU7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBbEJKOztBQXVCRTtFQUNFLFVBQUE7QUFwQko7O0FBdUJFO0VBQ0UsV0FBQTtBQXJCSjs7QUF5QkE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBdEJGOztBQXlCQTtFQUNFLGFBQUE7QUF0QkY7O0FBeUJBO0VBQ0UseUJBQUE7QUF0QkY7O0FBeUJBO0VBRUk7SUFDRSxlQUFBO0VBdkJKO0FBQ0Y7O0FBMkJBO0VBQ0UsV0FBQTtBQXpCRjs7QUE0QkE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXpCRjs7QUE0QkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBekJGOztBQTRCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBekJGOztBQTRCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBekJGOztBQTRCQTtFQUNFO0lBQ0UsWUFBQTtFQXpCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9jb21wb25lbnRzL3RyYWNrL3RyYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgLmZvbnQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1ib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWJ0biB7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTkwZmY7XHJcbiAgfVxyXG59XHJcblxyXG4udHJhY2stY29udGVudCB7XHJcbiAgcGFkZGluZzogNDVweCAzNXB4IDM1cHggMzVweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udHJhY2staGVhZGVyIHtcclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sZWZ0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTUlO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM3JTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6ICNmZDcyMDI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgIC5yaWdodCB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTUlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRyYWNrLWhlYWRlciB7XHJcbiAgICAucmlnaHQge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm9yZGVyLXRyYWNraW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogI2E0YTRhNDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaXMtY29tcGxldGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICNhZmFmYWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdiZTE2O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjVzIGxpbmVhcjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5cclxuICAuaXMtY29tcGxldGU6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIHRvcDogLTJweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDVweDtcclxuICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2FmYWZhZjtcclxuICAgIGJvcmRlci13aWR0aDogMHB4IDJweCAycHggMDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ub3JkZXItdHJhY2tpbmcuY29tcGxldGVkIHtcclxuICAuaXMtY29tcGxldGUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjdhYTgwO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhYTgwO1xyXG4gIH1cclxuXHJcbiAgLmlzLWNvbXBsZXRlOmFmdGVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci13aWR0aDogMHB4IDNweCAzcHggMDtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgICBsZWZ0OiAxMXB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5vcmRlci10cmFja2luZy5jb21wbGV0ZWQge1xyXG4gIGltZyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbn1cclxuXHJcbi5vcmRlci10cmFja2luZzo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdiZTE2O1xyXG4gIHRvcDogMTNweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogY2FsYygtNTAlICsgMjBweCk7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLm9yZGVyLXRyYWNraW5nOmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm9yZGVyLXRyYWNraW5nLmNvbXBsZXRlZDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2FhODA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gIC5vcmRlci10cmFja2luZyB7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50YWJsZS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMzVweCAzNXB4IDM1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC1oZWlnaHQ6IDgwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmNhcnQtY29sLWltYWdlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJ0LWltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5jYXJ0LXF1YW4ge1xyXG4gIHBhZGRpbmc6IDAgMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-track',
                templateUrl: './track.component.html',
                styleUrls: ['./track.component.scss'],
            }]
    }], function () { return [{ type: _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: _shared_services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"] }]; }, null); })();


/***/ }),

/***/ "XZNO":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngmodule/material-carousel/__ivy_ngcc__/fesm2015/ngmodule-material-carousel.js ***!
  \******************************************************************************************************/
/*! exports provided: MatCarouselComponent, MatCarouselHammerConfig, MatCarouselModule, MatCarouselSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCarouselComponent", function() { return MatCarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCarouselHammerConfig", function() { return MatCarouselHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCarouselModule", function() { return MatCarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCarouselSlideComponent", function() { return MatCarouselSlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





function MatCarouselSlideComponent_ng_template_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r1.overlayColor);
} }
function MatCarouselSlideComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatCarouselSlideComponent_ng_template_0_div_3_Template, 1, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx_r0.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.hideOverlay);
} }
const _c0 = ["*"];
const _c1 = ["carouselContainer"];
const _c2 = ["carouselList"];
function MatCarouselComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("panleft", function MatCarouselComponent_li_4_Template_li_panleft_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onPan($event, _r7); })("panright", function MatCarouselComponent_li_4_Template_li_panright_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onPan($event, _r7); })("panend", function MatCarouselComponent_li_4_Template_li_panend_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onPanEnd($event, _r7); })("pancancel", function MatCarouselComponent_li_4_Template_li_pancancel_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onPanEnd($event, _r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-bottom", ctx_r2.maintainAspectRatio && ctx_r2.proportion ? ctx_r2.proportion + "%" : "0px")("height", !ctx_r2.maintainAspectRatio && ctx_r2.slideHeight ? ctx_r2.slideHeight : "0px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", slide_r6.templateRef);
} }
function MatCarouselComponent_button_5_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 13);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", ctx_r13.svgIconOverrides.arrowBack);
} }
function MatCarouselComponent_button_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MatCarouselComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCarouselComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatCarouselComponent_button_5_mat_icon_1_Template, 1, 1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatCarouselComponent_button_5_ng_template_2_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r3.color)("disabled", !ctx_r3.loop && ctx_r3.currentIndex == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.svgIconOverrides == null ? null : ctx_r3.svgIconOverrides.arrowBack)("ngIfElse", _r14);
} }
function MatCarouselComponent_button_6_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 13);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", ctx_r18.svgIconOverrides.arrowForward);
} }
function MatCarouselComponent_button_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MatCarouselComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCarouselComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatCarouselComponent_button_6_mat_icon_1_Template, 1, 1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatCarouselComponent_button_6_ng_template_2_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r4.color)("disabled", !ctx_r4.loop && ctx_r4.currentIndex == ctx_r4.slidesList.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.svgIconOverrides == null ? null : ctx_r4.svgIconOverrides.arrowForward)("ngIfElse", _r19);
} }
function MatCarouselComponent_div_7_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCarouselComponent_div_7_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const i_r25 = ctx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.slideTo(i_r25); })("focus", function MatCarouselComponent_div_7_button_1_Template_button_focus_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r25 = ctx.index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r23.color)("disabled", i_r25 == ctx_r23.currentIndex);
} }
function MatCarouselComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatCarouselComponent_div_7_button_1_Template, 1, 2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex-direction", ctx_r5.orientation === "rtl" ? "row-reverse" : "row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.slidesList);
} }
class MatCarouselSlideComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.overlayColor = '#00000040';
        this.hideOverlay = false;
        this.disabled = false; // implements ListKeyManagerOption
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.image) {
            this.image = this.sanitizer.bypassSecurityTrustStyle(`url("${this.image}")`);
        }
    }
}
MatCarouselSlideComponent.ɵfac = function MatCarouselSlideComponent_Factory(t) { return new (t || MatCarouselSlideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
MatCarouselSlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatCarouselSlideComponent, selectors: [["mat-carousel-slide"]], viewQuery: function MatCarouselSlideComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
    } }, inputs: { overlayColor: "overlayColor", hideOverlay: "hideOverlay", disabled: "disabled", image: "image" }, ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[1, "carousel-slide"], [1, "carousel-slide-content"], ["class", "carousel-slide-overlay", 3, "background-color", 4, "ngIf"], [1, "carousel-slide-overlay"]], template: function MatCarouselSlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatCarouselSlideComponent_ng_template_0_Template, 4, 3, "ng-template");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".carousel-slide[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;z-index:auto;background-size:cover;background-repeat:no-repeat;background-position:center}.carousel-slide-overlay[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;z-index:auto}.carousel-slide-content[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;z-index:1}"] });
/** @nocollapse */
MatCarouselSlideComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
];
MatCarouselSlideComponent.propDecorators = {
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    overlayColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hideOverlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    templateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCarouselSlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-carousel-slide',
                template: "<ng-template>\n  <div class=\"carousel-slide\" [style.background-image]=\"image\">\n    <div class=\"carousel-slide-content\"><ng-content></ng-content></div>\n    <div\n      *ngIf=\"!hideOverlay\"\n      class=\"carousel-slide-overlay\"\n      [style.background-color]=\"overlayColor\"\n    ></div>\n  </div>\n</ng-template>\n",
                styles: [".carousel-slide{width:100%;height:100%;position:absolute;z-index:auto;background-size:cover;background-repeat:no-repeat;background-position:center}.carousel-slide-overlay{width:100%;height:100%;position:absolute;z-index:auto}.carousel-slide-content{width:100%;height:100%;position:absolute;z-index:1}"]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { overlayColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideOverlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const Direction = {
    Left: 0,
    Right: 1,
    Index: 2,
};
Direction[Direction.Left] = 'Left';
Direction[Direction.Right] = 'Right';
Direction[Direction.Index] = 'Index';
class MatCarouselComponent {
    /**
     * @param {?} animationBuilder
     * @param {?} renderer
     * @param {?} platformId
     */
    constructor(animationBuilder, renderer, platformId) {
        this.animationBuilder = animationBuilder;
        this.renderer = renderer;
        this.platformId = platformId;
        this.timings = '250ms ease-in';
        this.hideArrows = true;
        this.hideIndicators = true;
        this.color = 'accent';
        this.maintainAspectRatio = true;
        this.proportion = 25;
        this.slideHeight = '100%';
        this.useKeyboard = false;
        this.useMouseWheel = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._autoplay = true;
        this.autoplay$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.interval$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](5000);
        this.slides$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this._maxWidth = 'auto';
        this.maxWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._loop = true;
        this.loop$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._orientation = 'ltr';
        this.orientation$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.timerStop$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.playing = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set autoplay(value) {
        this.autoplay$.next(value);
        this._autoplay = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set interval(value) {
        this.interval$.next(value);
    }
    /**
     * @return {?}
     */
    get loop() {
        return this._loop;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set loop(value) {
        this.loop$.next(value);
        this._loop = value;
    }
    /**
     * @return {?}
     */
    get maxWidth() {
        return this._maxWidth;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxWidth(value) {
        this._maxWidth = value;
        this.maxWidth$.next();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set slides(value) {
        this.slides$.next(value);
    }
    /**
     * @return {?}
     */
    get orientation() {
        return this._orientation;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set orientation(value) {
        this.orientation$.next(value);
        this._orientation = value;
    }
    /**
     * @return {?}
     */
    get currentIndex() {
        if (this.listKeyManager) {
            return this.listKeyManager.activeItemIndex;
        }
        return 0;
    }
    /**
     * @return {?}
     */
    get currentSlide() {
        if (this.listKeyManager) {
            return this.listKeyManager.activeItem;
        }
        return null;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.listKeyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["ListKeyManager"](this.slidesList)
            .withVerticalOrientation(false)
            .withHorizontalOrientation(this._orientation)
            .withWrap(this._loop);
        this.listKeyManager.updateActiveItem(0);
        this.listKeyManager.change
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe(() => this.playAnimation());
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.autoplay$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(value => {
            this.stopTimer();
            this.startTimer(value);
        });
        this.interval$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(value => {
            this.stopTimer();
            this.resetTimer(value);
            this.startTimer(this._autoplay);
        });
        this.maxWidth$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe(() => this.slideTo(0));
        this.loop$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe(value => this.listKeyManager.withWrap(value));
        this.orientation$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe(value => this.listKeyManager.withHorizontalOrientation(value));
        this.slides$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(value => value && value < this.slidesList.length))
            .subscribe(value => this.resetSlides(value));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    next() {
        this.goto(Direction.Right);
    }
    /**
     * @return {?}
     */
    previous() {
        this.goto(Direction.Left);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    slideTo(index) {
        this.goto(Direction.Index, index);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUp(event) {
        if (this.useKeyboard && !this.playing) {
            this.listKeyManager.onKeydown(event);
        }
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        this.stopTimer();
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        this.startTimer(this._autoplay);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseWheel(event) {
        if (this.useMouseWheel) {
            event.preventDefault(); // prevent window to scroll
            // prevent window to scroll
            /** @type {?} */
            const Δ = Math.sign(event.wheelDelta);
            if (Δ < 0) {
                this.next();
            }
            else if (Δ > 0) {
                this.previous();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        // Reset carousel when window is resized
        // in order to avoid major glitches.
        this.slideTo(0);
    }
    /**
     * @param {?} event
     * @param {?} slideElem
     * @return {?}
     */
    onPan(event, slideElem) {
        // https://github.com/angular/angular/issues/10541#issuecomment-346539242
        // if y velocity is greater, it's a panup/pandown, so ignore.
        if (Math.abs(event.velocityY) > Math.abs(event.velocityX)) {
            return;
        }
        /** @type {?} */
        let Δx = event.deltaX;
        if (this.isOutOfBounds()) {
            Δx *= 0.2; // decelerate movement;
        }
        this.renderer.setStyle(slideElem, 'cursor', 'grabbing');
        this.renderer.setStyle(this.carouselList.nativeElement, 'transform', this.getTranslation(this.getOffset() + Δx));
    }
    /**
     * @param {?} event
     * @param {?} slideElem
     * @return {?}
     */
    onPanEnd(event, slideElem) {
        this.renderer.removeStyle(slideElem, 'cursor');
        if (!this.isOutOfBounds() &&
            Math.abs(event.deltaX) > this.getWidth() * 0.25) {
            if (event.deltaX <= 0) {
                this.next();
                return;
            }
            this.previous();
            return;
        }
        this.playAnimation(); // slide back, don't change current index
    }
    /**
     * @private
     * @return {?}
     */
    isOutOfBounds() {
        /** @type {?} */
        const sign = this.orientation === 'rtl' ? -1 : 1;
        /** @type {?} */
        const left = sign *
            (this.carouselList.nativeElement.getBoundingClientRect().left -
                this.carouselList.nativeElement.offsetParent.getBoundingClientRect()
                    .left);
        /** @type {?} */
        const lastIndex = this.slidesList.length - 1;
        /** @type {?} */
        const width = -this.getWidth() * lastIndex;
        return ((this.listKeyManager.activeItemIndex === 0 && left >= 0) ||
            (this.listKeyManager.activeItemIndex === lastIndex && left <= width));
    }
    /**
     * @private
     * @return {?}
     */
    isVisible() {
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            return false;
        }
        /** @type {?} */
        const elem = this.carouselContainer.nativeElement;
        /** @type {?} */
        const docViewTop = window.pageYOffset;
        /** @type {?} */
        const docViewBottom = docViewTop + window.innerHeight;
        /** @type {?} */
        const elemOffset = elem.getBoundingClientRect();
        /** @type {?} */
        const elemTop = docViewTop + elemOffset.top;
        /** @type {?} */
        const elemBottom = elemTop + elemOffset.height;
        return elemBottom <= docViewBottom || elemTop >= docViewTop;
    }
    /**
     * @private
     * @return {?}
     */
    getOffset() {
        /** @type {?} */
        const offset = this.listKeyManager.activeItemIndex * this.getWidth();
        /** @type {?} */
        const sign = this.orientation === 'rtl' ? 1 : -1;
        return sign * offset;
    }
    /**
     * @private
     * @param {?} offset
     * @return {?}
     */
    getTranslation(offset) {
        return `translateX(${offset}px)`;
    }
    /**
     * @private
     * @return {?}
     */
    getWidth() {
        return this.carouselContainer.nativeElement.clientWidth;
    }
    /**
     * @private
     * @param {?} direction
     * @param {?=} index
     * @return {?}
     */
    goto(direction, index) {
        if (!this.playing) {
            /** @type {?} */
            const rtl = this.orientation === 'rtl';
            switch (direction) {
                case Direction.Left:
                    return rtl
                        ? this.listKeyManager.setNextItemActive()
                        : this.listKeyManager.setPreviousItemActive();
                case Direction.Right:
                    return rtl
                        ? this.listKeyManager.setPreviousItemActive()
                        : this.listKeyManager.setNextItemActive();
                case Direction.Index:
                    return this.listKeyManager.setActiveItem(index);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    playAnimation() {
        /** @type {?} */
        const translation = this.getTranslation(this.getOffset());
        /** @type {?} */
        const factory = this.animationBuilder.build(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(this.timings, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: translation })));
        /** @type {?} */
        const animation = factory.create(this.carouselList.nativeElement);
        animation.onStart(() => (this.playing = true));
        animation.onDone(() => {
            this.change.emit(this.currentIndex);
            this.playing = false;
            this.renderer.setStyle(this.carouselList.nativeElement, 'transform', translation);
            animation.destroy();
        });
        animation.play();
    }
    /**
     * @private
     * @param {?} slides
     * @return {?}
     */
    resetSlides(slides) {
        this.slidesList.reset(this.slidesList.toArray().slice(0, slides));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    resetTimer(value) {
        this.timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(value);
    }
    /**
     * @private
     * @param {?} autoplay
     * @return {?}
     */
    startTimer(autoplay) {
        if (!autoplay) {
            return;
        }
        this.timer$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.timerStop$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => this.isVisible()))
            .subscribe(() => {
            this.listKeyManager.withWrap(true).setNextItemActive();
            this.listKeyManager.withWrap(this.loop);
        });
    }
    /**
     * @private
     * @return {?}
     */
    stopTimer() {
        this.timerStop$.next();
    }
}
MatCarouselComponent.ɵfac = function MatCarouselComponent_Factory(t) { return new (t || MatCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
MatCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatCarouselComponent, selectors: [["mat-carousel"]], contentQueries: function MatCarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatCarouselSlideComponent, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slidesList = _t);
    } }, viewQuery: function MatCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carouselContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carouselList = _t.first);
    } }, hostBindings: function MatCarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function MatCarouselComponent_keyup_HostBindingHandler($event) { return ctx.onKeyUp($event); })("mouseenter", function MatCarouselComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MatCarouselComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); })("mousewheel", function MatCarouselComponent_mousewheel_HostBindingHandler($event) { return ctx.onMouseWheel($event); })("resize", function MatCarouselComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { timings: "timings", hideArrows: "hideArrows", hideIndicators: "hideIndicators", color: "color", maintainAspectRatio: "maintainAspectRatio", proportion: "proportion", slideHeight: "slideHeight", useKeyboard: "useKeyboard", useMouseWheel: "useMouseWheel", autoplay: "autoplay", interval: "interval", loop: "loop", maxWidth: "maxWidth", slides: "slides", orientation: "orientation", svgIconOverrides: "svgIconOverrides" }, outputs: { change: "change" }, decls: 8, vars: 12, consts: [["tabindex", "0", 1, "carousel"], ["carouselContainer", ""], ["role", "listbox", 1, "carousel-list"], ["carouselList", ""], ["class", "carousel-slide", "role", "option", 3, "padding-bottom", "height", "panleft", "panright", "panend", "pancancel", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "type", "button", "tabindex", "-1", 3, "color", "disabled", "click", 4, "ngIf"], ["class", "carousel-indicators", "tabindex", "-1", 3, "flex-direction", 4, "ngIf"], ["role", "option", 1, "carousel-slide", 3, "panleft", "panright", "panend", "pancancel"], ["carouselSlide", ""], [3, "ngTemplateOutlet"], ["mat-icon-button", "", "type", "button", "tabindex", "-1", 3, "color", "disabled", "click"], [3, "svgIcon", 4, "ngIf", "ngIfElse"], ["defaultArrowBack", ""], [3, "svgIcon"], ["defaultArrowForward", ""], ["tabindex", "-1", 1, "carousel-indicators"], ["type", "button", "tabindex", "-1", "mat-mini-fab", "", 3, "color", "disabled", "click", "focus", 4, "ngFor", "ngForOf"], ["type", "button", "tabindex", "-1", "mat-mini-fab", "", 3, "color", "disabled", "click", "focus"]], template: function MatCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatCarouselComponent_li_4_Template, 3, 5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatCarouselComponent_button_5_Template, 4, 4, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatCarouselComponent_button_6_Template, 4, 4, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MatCarouselComponent_div_7_Template, 2, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", ctx.maxWidth)("height", !ctx.maintainAspectRatio ? "100%" : "auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex-direction", ctx.orientation === "rtl" ? "row-reverse" : "row")("height", !ctx.maintainAspectRatio ? "100%" : "auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slidesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideArrows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideArrows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideIndicators);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: [".carousel[_ngcontent-%COMP%]{width:100%;position:relative;overflow:hidden;outline:0}.carousel[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{position:absolute;z-index:1;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.carousel[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:first-of-type{left:30px}.carousel[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:last-of-type{right:30px}.carousel-list[_ngcontent-%COMP%]{width:100%;margin:0;padding:0;list-style:none;display:flex;position:relative}.carousel-slide[_ngcontent-%COMP%]{width:100%;height:0;display:flex;flex-shrink:0;position:relative}.carousel-slide[_ngcontent-%COMP%]:hover{cursor:-webkit-grab;cursor:grab}.carousel-indicators[_ngcontent-%COMP%]{display:flex;position:absolute;bottom:15px;z-index:1;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);outline:0}.carousel-indicators[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:10px;height:10px;margin:7.5px}"] });
/** @nocollapse */
MatCarouselComponent.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
MatCarouselComponent.propDecorators = {
    timings: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    svgIconOverrides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    interval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hideArrows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hideIndicators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maintainAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    proportion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    slideHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    useKeyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    useMouseWheel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    slidesList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatCarouselSlideComponent,] }],
    carouselContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['carouselContainer',] }],
    carouselList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['carouselList',] }],
    onKeyUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup', ['$event'],] }],
    onMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter',] }],
    onMouseLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] }],
    onMouseWheel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousewheel', ['$event'],] }],
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-carousel',
                template: "<div\n  #carouselContainer\n  class=\"carousel\"\n  tabindex=\"0\"\n  [style.max-width]=\"maxWidth\"\n  [style.height]=\"!maintainAspectRatio ? '100%' : 'auto'\"\n>\n  <ul\n    #carouselList\n    class=\"carousel-list\"\n    role=\"listbox\"\n    [style.flex-direction]=\"orientation === 'rtl' ? 'row-reverse' : 'row'\"\n    [style.height]=\"!maintainAspectRatio ? '100%' : 'auto'\"\n  >\n    <li\n      #carouselSlide\n      *ngFor=\"let slide of slidesList\"\n      class=\"carousel-slide\"\n      role=\"option\"\n      [style.padding-bottom]=\"maintainAspectRatio && proportion ? proportion + '%': '0px'\"\n      [style.height]=\"!maintainAspectRatio && slideHeight ? slideHeight : '0px'\"\n      (panleft)=\"onPan($event, carouselSlide)\"\n      (panright)=\"onPan($event, carouselSlide)\"\n      (panend)=\"onPanEnd($event, carouselSlide)\"\n      (pancancel)=\"onPanEnd($event, carouselSlide)\"\n    >\n      <ng-container [ngTemplateOutlet]=\"slide.templateRef\"></ng-container>\n    </li>\n  </ul>\n\n  <button\n    *ngIf=\"!hideArrows\"\n    mat-icon-button\n    type=\"button\"\n    tabindex=\"-1\"\n    [color]=\"color\"\n    [disabled]=\"!loop && currentIndex == 0\"\n    (click)=\"previous()\"\n  >\n    <mat-icon\n      *ngIf=\"svgIconOverrides?.arrowBack; else: defaultArrowBack\"\n      [svgIcon]=\"svgIconOverrides.arrowBack\"\n    ></mat-icon>\n    <ng-template #defaultArrowBack>\n      <mat-icon>arrow_back</mat-icon>\n    </ng-template>\n  </button>\n  <button\n    *ngIf=\"!hideArrows\"\n    mat-icon-button\n    type=\"button\"\n    tabindex=\"-1\"\n    [color]=\"color\"\n    [disabled]=\"!loop && currentIndex == slidesList.length - 1\"\n    (click)=\"next()\"\n  >\n    <mat-icon\n      *ngIf=\"svgIconOverrides?.arrowForward; else: defaultArrowForward\"\n      [svgIcon]=\"svgIconOverrides.arrowForward\"\n    ></mat-icon>\n    <ng-template #defaultArrowForward>\n      <mat-icon>arrow_forward</mat-icon>\n    </ng-template>\n  </button>\n\n  <div\n    *ngIf=\"!hideIndicators\"\n    class=\"carousel-indicators\"\n    tabindex=\"-1\"\n    [style.flex-direction]=\"orientation === 'rtl' ? 'row-reverse' : 'row'\"\n  >\n    <button\n      *ngFor=\"let slide of slidesList; let i = index\"\n      type=\"button\"\n      tabindex=\"-1\"\n      mat-mini-fab\n      [color]=\"color\"\n      [disabled]=\"i == currentIndex\"\n      (click)=\"slideTo(i)\"\n      (focus)=\"carouselContainer.focus()\"\n    ></button>\n  </div>\n</div>\n",
                styles: [".carousel{width:100%;position:relative;overflow:hidden;outline:0}.carousel>button{position:absolute;z-index:1;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.carousel>button:first-of-type{left:30px}.carousel>button:last-of-type{right:30px}.carousel-list{width:100%;margin:0;padding:0;list-style:none;display:flex;position:relative}.carousel-slide{width:100%;height:0;display:flex;flex-shrink:0;position:relative}.carousel-slide:hover{cursor:-webkit-grab;cursor:grab}.carousel-indicators{display:flex;position:absolute;bottom:15px;z-index:1;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);outline:0}.carousel-indicators>button{width:10px;height:10px;margin:7.5px}"]
            }]
    }], function () { return [{ type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, { timings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideArrows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maintainAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], proportion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], slideHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], useKeyboard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], useMouseWheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], autoplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], interval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], slides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keyup', ['$event']]
        }], 
    /**
     * @return {?}
     */
    onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], 
    /**
     * @return {?}
     */
    onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseWheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousewheel', ['$event']]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }], svgIconOverrides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], slidesList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MatCarouselSlideComponent]
        }], carouselContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['carouselContainer']
        }], carouselList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['carouselList']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// https://github.com/angular/angular/issues/10541#issuecomment-300761387
class MatCarouselHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false }
        };
    }
}
class MatCarouselModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: MatCarouselModule,
            providers: [
                { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"], useClass: MatCarouselHammerConfig }
            ]
        };
    }
}
MatCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatCarouselModule });
MatCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatCarouselModule_Factory(t) { return new (t || MatCarouselModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCarouselModule, { declarations: function () { return [MatCarouselComponent, MatCarouselSlideComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]]; }, exports: function () { return [MatCarouselComponent, MatCarouselSlideComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [MatCarouselComponent, MatCarouselSlideComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]],
                exports: [MatCarouselComponent, MatCarouselSlideComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdtb2R1bGUtbWF0ZXJpYWwtY2Fyb3VzZWwuanMiLCJzb3VyY2VzIjpbIkBuZ21vZHVsZS9tYXRlcmlhbC1jYXJvdXNlbC9saWIvY2Fyb3VzZWwtc2xpZGUvY2Fyb3VzZWwtc2xpZGUuY29tcG9uZW50LnRzIiwiQG5nbW9kdWxlL21hdGVyaWFsLWNhcm91c2VsL2xpYi9jYXJvdXNlbC5jb21wb25lbnQudHMiLCJAbmdtb2R1bGUvbWF0ZXJpYWwtY2Fyb3VzZWwvbGliL2Nhcm91c2VsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsTUFnQmEseUJBQXlCO0FBQ3BDO0FBQVE7QUFBNEI7QUFBUSxJQVE1QyxZQUFtQixTQUF1QjtBQUM1QyxRQURxQixjQUFTLEdBQVQsU0FBUyxDQUFjO0FBQUMsUUFOM0IsaUJBQVksR0FBRyxXQUFXLENBQUM7QUFDN0MsUUFBa0IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7QUFDdEMsUUFBa0IsYUFBUSxHQUFHLEtBQUssQ0FBQztBQUNuQyxLQUlHO0FBQ0g7QUFDTztBQUFtQjtBQUNwQixJQURHLFFBQVE7QUFBSyxRQUNsQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDcEIsWUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztBQUNuRixTQUFLO0FBQ0wsS0FBRztBQUNIO3FEQXRCQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLG9CQUFvQixrQkFDOUI7Ozs7O2lCQUE4QzsrUUFFL0M7Ozt5WkFDRztBQUFDO0FBQW1CO0FBQ1ksWUFWM0IsWUFBWTtBQUFHO0FBQUc7QUFFekIsb0JBU0MsS0FBSztBQUFLLDJCQUNWLEtBQUs7QUFBSywwQkFDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLDBCQUVWLFNBQVMsU0FBQyxXQUFXO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQztBQUFDO0FBQUk7QUFFbkM7QUFLRjtBQy9CRDtBQUFzQjtBQUFvQixJQTRCeEMsT0FBSTtBQUNOLElBQUUsUUFBSztBQUNQLElBQUUsUUFBSztBQUNOO0FBRUE7QUFDdUI7QUFDVTtBQUdsQyxNQUFhLG9CQUFvQjtBQUMvQjtBQUFRO0FBQW1DO0FBQzVDO0FBQTZCO0FBQVEsSUF5R3BDLFlBQ1UsZ0JBQWtDLEVBQ2xDLFFBQW1CLEVBQ0UsVUFBVTtBQUN4QyxRQUhTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7QUFBQyxRQUNuQyxhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUFDQyxlQUFVLEdBQVYsVUFBVSxDQUFBO0FBQzNDLFFBN0drQixZQUFPLEdBQUcsZUFBZSxDQUFDO0FBQzVDLFFBc0JrQixlQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3BDLFFBQWtCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO0FBQ3hDLFFBQWtCLFVBQUssR0FBaUIsUUFBUSxDQUFDO0FBQ2pELFFBVWtCLHdCQUFtQixHQUFHLElBQUksQ0FBQztBQUM3QyxRQUFrQixlQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ2xDLFFBQWtCLGdCQUFXLEdBQUcsTUFBTSxDQUFDO0FBQ3ZDLFFBTWtCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0FBQ3RDLFFBQWtCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0FBQ3hDLFFBV1MsV0FBTSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO0FBQ25FLFFBeUJVLGNBQVMsR0FBRyxJQUFJLENBQUM7QUFDM0IsUUFBVSxjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztBQUM3QyxRQUNVLGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztBQUN4RCxRQUFVLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztBQUN0RCxRQUNVLGNBQVMsR0FBRyxNQUFNLENBQUM7QUFDN0IsUUFBVSxjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVMsQ0FBQztBQUMzQyxRQUNVLFVBQUssR0FBRyxJQUFJLENBQUM7QUFDdkIsUUFBVSxVQUFLLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztBQUN6QyxRQUNVLGlCQUFZLEdBQWdCLEtBQUssQ0FBQztBQUM1QyxRQUFVLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQWUsQ0FBQztBQUNwRCxRQUVVLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBUyxDQUFDO0FBQzVDLFFBQ1UsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFTLENBQUM7QUFDMUMsUUFBVSxZQUFPLEdBQUcsS0FBSyxDQUFDO0FBQzFCLEtBS007QUFDTjtBQUNPO0FBQXdCO0FBQ25CO0FBQVEsSUE3R2xCLElBQ1csUUFBUSxDQUFDLEtBQWM7QUFDcEMsUUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixRQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzNCLEtBQUc7QUFDSDtBQUNPO0FBQ2E7QUFDcEI7QUFBUSxJQUZOLElBQ1csUUFBUSxDQUFDLEtBQWE7QUFDbkMsUUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixLQUFHO0FBQ0g7QUFDTztBQUFtQjtBQUN2QixJQURELElBQVcsSUFBSTtBQUFLLFFBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN0QixLQUFHO0FBQ0g7QUFBUTtBQUNhO0FBQ2pCO0FBQVEsSUFGVixJQUNXLElBQUksQ0FBQyxLQUFjO0FBQ2hDLFFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsUUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUN2QixLQUFHO0FBQ0g7QUFDTztBQUFtQjtBQUFRLElBSWhDLElBQVcsUUFBUTtBQUFLLFFBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMxQixLQUFHO0FBQ0g7QUFBUTtBQUNhO0FBQ3BCO0FBQVEsSUFGUCxJQUNXLFFBQVEsQ0FBQyxLQUFhO0FBQ25DLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7QUFDM0IsUUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzFCLEtBQUc7QUFDSDtBQUNPO0FBQXdCO0FBQzNCO0FBQVEsSUFHVixJQUNXLE1BQU0sQ0FBQyxLQUFhO0FBQ2pDLFFBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0IsS0FBRztBQUNIO0FBQ087QUFBbUI7QUFBUSxJQUdoQyxJQUFXLFdBQVc7QUFBSyxRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7QUFDN0IsS0FBRztBQUNIO0FBQVE7QUFDYTtBQUFtQjtBQUN2QyxJQUZDLElBQ1csV0FBVyxDQUFDLEtBQWtCO0FBQzNDLFFBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEMsUUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUM5QixLQUFHO0FBQ0g7QUFDTztBQUNPO0FBQVEsSUFFcEIsSUFBVyxZQUFZO0FBQUssUUFDMUIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQzdCLFlBQU0sT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQztBQUNqRCxTQUFLO0FBQ0wsUUFDSSxPQUFPLENBQUMsQ0FBQztBQUNiLEtBQUc7QUFDSDtBQUFRO0FBQW1CO0FBQVEsSUFBakMsSUFBVyxZQUFZO0FBQUssUUFDMUIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQzdCLFlBQU0sT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQztBQUM1QyxTQUFLO0FBQ0wsUUFDSSxPQUFPLElBQUksQ0FBQztBQUNoQixLQUFHO0FBQ0g7QUFDTztBQUFtQjtBQUFRLElBb0N6QixrQkFBa0I7QUFBSyxRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDN0QsYUFBTyx1QkFBdUIsQ0FBQyxLQUFLLENBQUM7QUFDckMsYUFBTyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0FBQ25ELGFBQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1QixRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUMsUUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU07QUFDOUIsYUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxhQUFPLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLEtBQUc7QUFDSDtBQUNPO0FBQW1CO0FBQVEsSUFBekIsZUFBZTtBQUFLLFFBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSztBQUNqRSxZQUFNLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN2QixZQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0IsU0FBSyxDQUFDLENBQUM7QUFDUCxRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSztBQUNqRSxZQUFNLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN2QixZQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0IsWUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN0QyxTQUFLLENBQUMsQ0FBQztBQUNQLFFBQ0ksSUFBSSxDQUFDLFNBQVM7QUFDbEIsYUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxhQUFPLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QyxRQUNJLElBQUksQ0FBQyxLQUFLO0FBQ2QsYUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxhQUFPLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMvRCxRQUNJLElBQUksQ0FBQyxZQUFZO0FBQ3JCLGFBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckMsYUFBTyxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNoRixRQUNJLElBQUksQ0FBQyxPQUFPO0FBQ2hCLGFBQU8sSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3hCLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUN6RDtBQUNQLGFBQU8sU0FBUyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDbkQsS0FBRztBQUNIO0FBQ087QUFBbUI7QUFDdkIsSUFETSxXQUFXO0FBQUssUUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6QixRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDN0IsS0FBRztBQUNIO0FBQ087QUFDTDtBQUFRLElBREQsSUFBSTtBQUFLLFFBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsS0FBRztBQUNIO0FBQ087QUFBbUI7QUFDcEIsSUFERyxRQUFRO0FBQUssUUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsS0FBRztBQUNIO0FBQ087QUFBd0I7QUFDckI7QUFBUSxJQURULE9BQU8sQ0FBQyxLQUFhO0FBQUksUUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLEtBQUc7QUFDSDtBQUNPO0FBQXdCO0FBQ2xCO0FBQVEsSUFBWixPQUFPLENBQUMsS0FBb0I7QUFBSSxRQUNyQyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQzNDLFlBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0MsU0FBSztBQUNMLEtBQUc7QUFDSDtBQUNPO0FBQW1CO0FBQ3RCLElBQUssWUFBWTtBQUFLLFFBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNyQixLQUFHO0FBQ0g7QUFDTztBQUFtQjtBQUN0QixJQUFLLFlBQVk7QUFBSyxRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwQyxLQUFHO0FBQ0g7QUFDTztBQUF3QjtBQUN2QjtBQUFRLElBQVAsWUFBWSxDQUFDLEtBQXNCO0FBQUksUUFDNUMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO0FBQzVCLFlBQU0sS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzdCO0FBQXdDO0FBR3RDLGtCQUhVLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7QUFBRSxZQUV2QyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFBRSxnQkFDWCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDcEIsYUFBTztBQUFDLGlCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUFFLGdCQUNsQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDeEIsYUFBTztBQUNQLFNBQUs7QUFDTCxLQUFHO0FBQ0g7QUFDTztBQUF3QjtBQUMxQjtBQUFRLElBQUosUUFBUSxDQUFDLEtBQVk7QUFBSTtBQUNTO0FBRXpDLFFBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQixLQUFHO0FBQ0g7QUFDTztBQUF3QjtBQUMvQjtBQUFtQjtBQUFRLElBRGxCLEtBQUssQ0FBQyxLQUFVLEVBQUUsU0FBc0I7QUFBSTtBQUN1QjtBQUUxRSxRQUFFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDL0QsWUFBTSxPQUFPO0FBQ2IsU0FBSztBQUNMO0FBQXlCLFlBQWpCLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTTtBQUFFLFFBQ3ZCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO0FBQzlCLFlBQU0sRUFBRSxJQUFJLEdBQUcsQ0FBQztBQUF5QixTQUNwQztBQUNMLFFBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUM1RCxRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFDL0IsV0FBVyxFQUNYLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUMzQyxDQUFDO0FBQ04sS0FBRztBQUNIO0FBQ087QUFBd0I7QUFBNEI7QUFDM0M7QUFBUSxJQURmLFFBQVEsQ0FBQyxLQUFVLEVBQUUsU0FBc0I7QUFBSSxRQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDbkQsUUFDSSxJQUNFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUMzQixZQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLEVBQy9DO0FBQ04sWUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQzdCLGdCQUFRLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNwQixnQkFBUSxPQUFPO0FBQ2YsYUFBTztBQUNQLFlBQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3RCLFlBQU0sT0FBTztBQUNiLFNBQUs7QUFDTCxRQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUN6QixLQUFHO0FBQ0g7QUFDTztBQUFnQjtBQUNsQjtBQUFRLElBREgsYUFBYTtBQUFLO0FBQ1osY0FBTixJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUNwRDtBQUNRLGNBREUsSUFBSSxHQUNSLElBQUk7QUFDVixhQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSTtBQUNuRSxnQkFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUU7QUFDNUUscUJBQVcsSUFBSSxDQUFDO0FBQ2hCO0FBQXlCLGNBQWYsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUM7QUFDaEQ7QUFBeUIsY0FBZixLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsU0FBUztBQUM5QyxRQUNJLFFBQ0UsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFDN0QsYUFBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsS0FBSyxTQUFTLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUNwRTtBQUNOLEtBQUc7QUFDSDtBQUNPO0FBQWdCO0FBQ2Q7QUFBUSxJQURQLFNBQVM7QUFBSyxRQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQzdDLFlBQU0sT0FBTyxLQUFLLENBQUM7QUFDbkIsU0FBSztBQUNMO0FBQ3dCLGNBQWQsSUFBSSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhO0FBQ3JEO0FBQXlCLGNBQWYsVUFBVSxHQUFHLE1BQU0sQ0FBQyxXQUFXO0FBQ3pDO0FBQXlCLGNBQWYsYUFBYSxHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVztBQUN6RDtBQUF5QixjQUFmLFVBQVUsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUU7QUFDbkQ7QUFBeUIsY0FBZixPQUFPLEdBQUcsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHO0FBQy9DO0FBQXlCLGNBQWYsVUFBVSxHQUFHLE9BQU8sR0FBRyxVQUFVLENBQUMsTUFBTTtBQUNsRCxRQUNJLE9BQU8sVUFBVSxJQUFJLGFBQWEsSUFBSSxPQUFPLElBQUksVUFBVSxDQUFDO0FBQ2hFLEtBQUc7QUFDSDtBQUNPO0FBQWdCO0FBQ2I7QUFBUSxJQURSLFNBQVM7QUFBSztBQUNQLGNBQVAsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDeEU7QUFBeUIsY0FBZixJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwRCxRQUFJLE9BQU8sSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUN6QixLQUFHO0FBQ0g7QUFDTztBQUFnQjtBQUF5QjtBQUNoQztBQUFRLElBRGQsY0FBYyxDQUFDLE1BQWM7QUFBSSxRQUN2QyxPQUFPLGNBQWMsTUFBTSxLQUFLLENBQUM7QUFDckMsS0FBRztBQUNIO0FBQ087QUFBZ0I7QUFDWjtBQUFRLElBRFQsUUFBUTtBQUFLLFFBQ25CLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDNUQsS0FBRztBQUNIO0FBQ087QUFBZ0I7QUFBNEI7QUFDcEM7QUFDTjtBQUFRLElBRlAsSUFBSSxDQUFDLFNBQW9CLEVBQUUsS0FBYztBQUFJLFFBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ3ZCO0FBQTZCLGtCQUFqQixHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLO0FBQzVDLFlBQ00sUUFBUSxTQUFTO0FBQ3ZCLGdCQUFRLEtBQUssU0FBUyxDQUFDLElBQUk7QUFDM0Isb0JBQVUsT0FBTyxHQUFHO0FBQ3BCLDBCQUFjLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLEVBQUU7QUFDckQsMEJBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQzFELGdCQUFRLEtBQUssU0FBUyxDQUFDLEtBQUs7QUFDNUIsb0JBQVUsT0FBTyxHQUFHO0FBQ3BCLDBCQUFjLElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLEVBQUU7QUFDekQsMEJBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQ3RELGdCQUFRLEtBQUssU0FBUyxDQUFDLEtBQUs7QUFDNUIsb0JBQVUsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxRCxhQUFPO0FBQ1AsU0FBSztBQUNMLEtBQUc7QUFDSDtBQUNPO0FBQWdCO0FBQ2Y7QUFBUSxJQUROLGFBQWE7QUFBSztBQUNULGNBQVQsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQzdEO0FBQXlCLGNBQWYsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQ3pEO0FBQ0w7QUFBeUIsY0FBZixTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztBQUNyRSxRQUNJLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbkQsUUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQ3JCLFlBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzFDLFlBQU0sSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDM0IsWUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQy9CLFdBQVcsRUFDWCxXQUFXLENBQ1osQ0FBQztBQUNSLFlBQU0sU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzFCLFNBQUssQ0FBQyxDQUFDO0FBQ1AsUUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDckIsS0FBRztBQUNIO0FBQ087QUFBZ0I7QUFDckI7QUFBbUI7QUFBUSxJQURuQixXQUFXLENBQUMsTUFBYztBQUFJLFFBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLEtBQUc7QUFDSDtBQUNPO0FBQWdCO0FBQ3BCO0FBQW1CO0FBQVEsSUFEcEIsVUFBVSxDQUFDLEtBQWE7QUFBSSxRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsQyxLQUFHO0FBQ0g7QUFDTztBQUFnQjtBQUNyQjtBQUNGO0FBQVEsSUFGRSxVQUFVLENBQUMsUUFBaUI7QUFBSSxRQUN0QyxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ25CLFlBQU0sT0FBTztBQUNiLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxNQUFNO0FBQ2YsYUFBTyxJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDMUIsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQy9CO0FBQ1AsYUFBTyxTQUFTLENBQUM7QUFDakIsWUFBUSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQy9ELFlBQVEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hELFNBQU8sQ0FBQyxDQUFDO0FBQ1QsS0FBRztBQUNIO0FBQ087QUFBZ0I7QUFDWDtBQUFRLElBRFYsU0FBUztBQUFLLFFBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDM0IsS0FBRztBQUNIO2dEQTlXQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGNBQWMsa0JBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7NjJCQUF3QyxndkJBRXpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a2tDQUNHO0FBQUM7QUFBbUI7QUFDWSxZQXZDWCxnQkFBZ0I7QUFBSSxZQWlCM0MsU0FBUztBQUNULDRDQWtJRyxNQUFNLFNBQUMsV0FBVztBQUFRO0FBQUc7QUFHWixzQkEvR25CLEtBQUs7QUFBSywrQkFDVixLQUFLO0FBQUssdUJBRVYsS0FBSztBQUNOLHVCQUtDLEtBQUs7QUFDTixtQkFPQyxLQUFLO0FBQ04seUJBS0MsS0FBSztBQUFLLDZCQUNWLEtBQUs7QUFBSyxvQkFDVixLQUFLO0FBQUssdUJBS1YsS0FBSztBQUNOLGtDQUtDLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssMEJBQ1YsS0FBSztBQUFLLHFCQUVWLEtBQUs7QUFDTiwwQkFJQyxLQUFLO0FBQUssNEJBQ1YsS0FBSztBQUFLLDBCQUtWLEtBQUs7QUFDTixxQkFLQyxNQUFNO0FBQ1AseUJBaUJDLGVBQWUsU0FBQyx5QkFBeUI7QUFBTyxnQ0FHaEQsU0FBUyxTQUFDLG1CQUFtQjtBQUFPLDJCQUdwQyxTQUFTLFNBQUMsY0FBYztBQUFPLHNCQTJGL0IsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztBQUM5QiwyQkFNRixZQUFZLFNBQUMsWUFBWTtBQUN2QiwyQkFJRixZQUFZLFNBQUMsWUFBWTtBQUN2QiwyQkFJRixZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDO0FBQ25DLHVCQWFGLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUM7QUFBQztBQUFJO0FBQ047QUFHTjtBQ3hQQTtBQWNBLE1BQWEsdUJBQXdCLFNBQVEsbUJBQW1CO0FBQ2hFLElBREE7QUFBZ0I7QUFBNkIsUUFDM0MsY0FBUyxHQUFHO0FBQ2QsWUFBSSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQzVCLFlBQUksTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUM3QixTQUFHLENBQUM7QUFDSixLQUFDO0FBQ0QsQ0FEQztBQUNELE1BS2EsaUJBQWlCO0FBQzlCO0FBQVE7QUFBbUI7QUFBUSxJQUFqQyxPQUFPLE9BQU87QUFBSyxRQUNqQixPQUFPO0FBQ1gsWUFBTSxRQUFRLEVBQUUsaUJBQWlCO0FBQ2pDLFlBQU0sU0FBUyxFQUFFO0FBQ2pCLGdCQUFRLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRTtBQUM3RSxhQUFPO0FBQ1AsU0FBSyxDQUFDO0FBQ04sS0FBRztBQUNIOzZDQWRDLFFBQVEsU0FBQztDQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLHlCQUF5QixDQUFDLGtCQUMvRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQyxrQkFDdkQsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUU7UUFBeUIsQ0FBQyxjQUMzRDs7Ozs7Ozs7MEJBQ0k7QUFBQztBQUFDO0FBQUk7QUFDQztBQUlSO0FBQUk7QUFBQztBQUFJO0FBQWtDO0FBS0U7QUFBSTtBQUFDO0FBQUk7QUFBa0M7QUFBcUc7QUFBSTtBQUFDO0FBQUk7QUFBa0M7QUFBcUc7QUFBSTtBQUFDOztBRmxDQSxBQWdCQSxBQUFBLEFBU0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQU5BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUtBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFyQkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFSQSxBQUFBLEFBV0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFDeEJBLEFBNEJBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQVFBLEFBQUEsQUFBQSxBQTJHQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUZBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQTVHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBdUJBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBWUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUEwQkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFNQSxBQTFHQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFNQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQU1BLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBS0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBS0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFzQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQTdXQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQXJDQSxBQUFBLEFBaUJBLEFBQUEsQUFtSUEsQUFBQSxBQUFBLEFBQUEsQUE1R0EsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBTUEsQUFBQSxBQVFBLEFBQUEsQUFNQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFLQSxBQUFBLEFBTUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUtBLEFBQUEsQUFDQSxBQUFBLEFBS0EsQUFBQSxBQU1BLEFBQUEsQUFrQkEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBMkZBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFPQSxBQUFBLEFBQUEsQUFBQSxBQUtBLEFBQUEsQUFBQSxBQUFBLEFBS0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQWNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUNuUEEsQUFjQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBTUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQ0EsQUFiQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0S2V5TWFuYWdlck9wdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IE1hdENhcm91c2VsU2xpZGUgfSBmcm9tICcuL2Nhcm91c2VsLXNsaWRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWNhcm91c2VsLXNsaWRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLXNsaWRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2Fyb3VzZWwtc2xpZGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRDYXJvdXNlbFNsaWRlQ29tcG9uZW50XG4gIGltcGxlbWVudHMgTGlzdEtleU1hbmFnZXJPcHRpb24sIE1hdENhcm91c2VsU2xpZGUsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBpbWFnZTogU2FmZVN0eWxlO1xuICBASW5wdXQoKSBwdWJsaWMgb3ZlcmxheUNvbG9yID0gJyMwMDAwMDA0MCc7XG4gIEBJbnB1dCgpIHB1YmxpYyBoaWRlT3ZlcmxheSA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTsgLy8gaW1wbGVtZW50cyBMaXN0S2V5TWFuYWdlck9wdGlvblxuXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBcbiAgY29uc3RydWN0b3IocHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW1hZ2UpIHtcbiAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYHVybChcIiR7dGhpcy5pbWFnZX1cIilgKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCBBbmltYXRpb25CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBMaXN0S2V5TWFuYWdlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFBMQVRGT1JNX0lELFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBpbnRlcnZhbCwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTWF0Q2Fyb3VzZWwsIE9yaWVudGF0aW9uLCBTdmdJY29uT3ZlcnJpZGVzIH0gZnJvbSAnLi9jYXJvdXNlbCc7XG5pbXBvcnQgeyBNYXRDYXJvdXNlbFNsaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC1zbGlkZS9jYXJvdXNlbC1zbGlkZS5jb21wb25lbnQnO1xuXG5lbnVtIERpcmVjdGlvbiB7XG4gIExlZnQsXG4gIFJpZ2h0LFxuICBJbmRleFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdENhcm91c2VsQ29tcG9uZW50XG4gIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgTWF0Q2Fyb3VzZWwsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHB1YmxpYyB0aW1pbmdzID0gJzI1MG1zIGVhc2UtaW4nO1xuICBASW5wdXQoKSBwdWJsaWMgc3ZnSWNvbk92ZXJyaWRlczogU3ZnSWNvbk92ZXJyaWRlcztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGF1dG9wbGF5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5hdXRvcGxheSQubmV4dCh2YWx1ZSk7XG4gICAgdGhpcy5fYXV0b3BsYXkgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuaW50ZXJ2YWwkLm5leHQodmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGdldCBsb29wKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sb29wO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbG9vcCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMubG9vcCQubmV4dCh2YWx1ZSk7XG4gICAgdGhpcy5fbG9vcCA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KCkgcHVibGljIGhpZGVBcnJvd3MgPSB0cnVlO1xuICBASW5wdXQoKSBwdWJsaWMgaGlkZUluZGljYXRvcnMgPSB0cnVlO1xuICBASW5wdXQoKSBwdWJsaWMgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdhY2NlbnQnO1xuXG4gIHB1YmxpYyBnZXQgbWF4V2lkdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4V2lkdGg7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXhXaWR0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWF4V2lkdGggPSB2YWx1ZTtcbiAgICB0aGlzLm1heFdpZHRoJC5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKSBwdWJsaWMgbWFpbnRhaW5Bc3BlY3RSYXRpbyA9IHRydWU7XG4gIEBJbnB1dCgpIHB1YmxpYyBwcm9wb3J0aW9uID0gMjU7XG4gIEBJbnB1dCgpIHB1YmxpYyBzbGlkZUhlaWdodCA9ICcxMDAlJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNsaWRlcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5zbGlkZXMkLm5leHQodmFsdWUpO1xuICB9XG5cbiAgQElucHV0KCkgcHVibGljIHVzZUtleWJvYXJkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyB1c2VNb3VzZVdoZWVsID0gZmFsc2U7XG5cbiAgcHVibGljIGdldCBvcmllbnRhdGlvbigpOiBPcmllbnRhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX29yaWVudGF0aW9uO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgb3JpZW50YXRpb24odmFsdWU6IE9yaWVudGF0aW9uKSB7XG4gICAgdGhpcy5vcmllbnRhdGlvbiQubmV4dCh2YWx1ZSk7XG4gICAgdGhpcy5fb3JpZW50YXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIHB1YmxpYyBnZXQgY3VycmVudEluZGV4KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMubGlzdEtleU1hbmFnZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmxpc3RLZXlNYW5hZ2VyLmFjdGl2ZUl0ZW1JbmRleDtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfVxuICBwdWJsaWMgZ2V0IGN1cnJlbnRTbGlkZSgpOiBNYXRDYXJvdXNlbFNsaWRlQ29tcG9uZW50IHtcbiAgICBpZiAodGhpcy5saXN0S2V5TWFuYWdlcikge1xuICAgICAgcmV0dXJuIHRoaXMubGlzdEtleU1hbmFnZXIuYWN0aXZlSXRlbTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oTWF0Q2Fyb3VzZWxTbGlkZUNvbXBvbmVudCkgcHVibGljIHNsaWRlc0xpc3Q6IFF1ZXJ5TGlzdDxcbiAgICBNYXRDYXJvdXNlbFNsaWRlQ29tcG9uZW50XG4gID47XG4gIEBWaWV3Q2hpbGQoJ2Nhcm91c2VsQ29udGFpbmVyJykgcHJpdmF0ZSBjYXJvdXNlbENvbnRhaW5lcjogRWxlbWVudFJlZjxcbiAgICBIVE1MRGl2RWxlbWVudFxuICA+O1xuICBAVmlld0NoaWxkKCdjYXJvdXNlbExpc3QnKSBwcml2YXRlIGNhcm91c2VsTGlzdDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIHB1YmxpYyBsaXN0S2V5TWFuYWdlcjogTGlzdEtleU1hbmFnZXI8TWF0Q2Fyb3VzZWxTbGlkZUNvbXBvbmVudD47XG5cbiAgcHJpdmF0ZSBfYXV0b3BsYXkgPSB0cnVlO1xuICBwcml2YXRlIGF1dG9wbGF5JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgcHJpdmF0ZSBpbnRlcnZhbCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oNTAwMCk7XG4gIHByaXZhdGUgc2xpZGVzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPihudWxsKTtcblxuICBwcml2YXRlIF9tYXhXaWR0aCA9ICdhdXRvJztcbiAgcHJpdmF0ZSBtYXhXaWR0aCQgPSBuZXcgU3ViamVjdDxuZXZlcj4oKTtcblxuICBwcml2YXRlIF9sb29wID0gdHJ1ZTtcbiAgcHJpdmF0ZSBsb29wJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgcHJpdmF0ZSBfb3JpZW50YXRpb246IE9yaWVudGF0aW9uID0gJ2x0cic7XG4gIHByaXZhdGUgb3JpZW50YXRpb24kID0gbmV3IFN1YmplY3Q8T3JpZW50YXRpb24+KCk7XG5cbiAgcHJpdmF0ZSB0aW1lciQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgcHJpdmF0ZSB0aW1lclN0b3AkID0gbmV3IFN1YmplY3Q8bmV2ZXI+KCk7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PG5ldmVyPigpO1xuICBwcml2YXRlIHBsYXlpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFuaW1hdGlvbkJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZFxuICApIHt9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RLZXlNYW5hZ2VyID0gbmV3IExpc3RLZXlNYW5hZ2VyKHRoaXMuc2xpZGVzTGlzdClcbiAgICAgIC53aXRoVmVydGljYWxPcmllbnRhdGlvbihmYWxzZSlcbiAgICAgIC53aXRoSG9yaXpvbnRhbE9yaWVudGF0aW9uKHRoaXMuX29yaWVudGF0aW9uKVxuICAgICAgLndpdGhXcmFwKHRoaXMuX2xvb3ApO1xuXG4gICAgdGhpcy5saXN0S2V5TWFuYWdlci51cGRhdGVBY3RpdmVJdGVtKDApO1xuICAgIHRoaXMubGlzdEtleU1hbmFnZXIuY2hhbmdlXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucGxheUFuaW1hdGlvbigpKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRvcGxheSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgICAgdGhpcy5zdGFydFRpbWVyKHZhbHVlKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaW50ZXJ2YWwkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICAgIHRoaXMucmVzZXRUaW1lcih2YWx1ZSk7XG4gICAgICB0aGlzLnN0YXJ0VGltZXIodGhpcy5fYXV0b3BsYXkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5tYXhXaWR0aCRcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zbGlkZVRvKDApKTtcblxuICAgIHRoaXMubG9vcCRcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5saXN0S2V5TWFuYWdlci53aXRoV3JhcCh2YWx1ZSkpO1xuXG4gICAgdGhpcy5vcmllbnRhdGlvbiRcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5saXN0S2V5TWFuYWdlci53aXRoSG9yaXpvbnRhbE9yaWVudGF0aW9uKHZhbHVlKSk7XG5cbiAgICB0aGlzLnNsaWRlcyRcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAmJiB2YWx1ZSA8IHRoaXMuc2xpZGVzTGlzdC5sZW5ndGgpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMucmVzZXRTbGlkZXModmFsdWUpKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwdWJsaWMgbmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG8oRGlyZWN0aW9uLlJpZ2h0KTtcbiAgfVxuXG4gIHB1YmxpYyBwcmV2aW91cygpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG8oRGlyZWN0aW9uLkxlZnQpO1xuICB9XG5cbiAgcHVibGljIHNsaWRlVG8oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ290byhEaXJlY3Rpb24uSW5kZXgsIGluZGV4KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51c2VLZXlib2FyZCAmJiAhdGhpcy5wbGF5aW5nKSB7XG4gICAgICB0aGlzLmxpc3RLZXlNYW5hZ2VyLm9uS2V5ZG93bihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIHB1YmxpYyBvbk1vdXNlRW50ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBwdWJsaWMgb25Nb3VzZUxlYXZlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRUaW1lcih0aGlzLl9hdXRvcGxheSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZXdoZWVsJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uTW91c2VXaGVlbChldmVudDogTW91c2VXaGVlbEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudXNlTW91c2VXaGVlbCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCB3aW5kb3cgdG8gc2Nyb2xsXG4gICAgICBjb25zdCDDjsKUID0gTWF0aC5zaWduKGV2ZW50LndoZWVsRGVsdGEpO1xuXG4gICAgICBpZiAow47ClCA8IDApIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKMOOwpQgPiAwKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uUmVzaXplKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIC8vIFJlc2V0IGNhcm91c2VsIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcbiAgICAvLyBpbiBvcmRlciB0byBhdm9pZCBtYWpvciBnbGl0Y2hlcy5cbiAgICB0aGlzLnNsaWRlVG8oMCk7XG4gIH1cblxuICBwdWJsaWMgb25QYW4oZXZlbnQ6IGFueSwgc2xpZGVFbGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwNTQxI2lzc3VlY29tbWVudC0zNDY1MzkyNDJcbiAgICAvLyBpZiB5IHZlbG9jaXR5IGlzIGdyZWF0ZXIsIGl0J3MgYSBwYW51cC9wYW5kb3duLCBzbyBpZ25vcmUuXG4gICAgaWYgKE1hdGguYWJzKGV2ZW50LnZlbG9jaXR5WSkgPiBNYXRoLmFicyhldmVudC52ZWxvY2l0eVgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCDDjsKUeCA9IGV2ZW50LmRlbHRhWDtcbiAgICBpZiAodGhpcy5pc091dE9mQm91bmRzKCkpIHtcbiAgICAgIMOOwpR4ICo9IDAuMjsgLy8gZGVjZWxlcmF0ZSBtb3ZlbWVudDtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHNsaWRlRWxlbSwgJ2N1cnNvcicsICdncmFiYmluZycpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICB0aGlzLmNhcm91c2VsTGlzdC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICB0aGlzLmdldFRyYW5zbGF0aW9uKHRoaXMuZ2V0T2Zmc2V0KCkgKyDDjsKUeClcbiAgICApO1xuICB9XG5cbiAgcHVibGljIG9uUGFuRW5kKGV2ZW50OiBhbnksIHNsaWRlRWxlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHNsaWRlRWxlbSwgJ2N1cnNvcicpO1xuXG4gICAgaWYgKFxuICAgICAgIXRoaXMuaXNPdXRPZkJvdW5kcygpICYmXG4gICAgICBNYXRoLmFicyhldmVudC5kZWx0YVgpID4gdGhpcy5nZXRXaWR0aCgpICogMC4yNVxuICAgICkge1xuICAgICAgaWYgKGV2ZW50LmRlbHRhWCA8PSAwKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnByZXZpb3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGxheUFuaW1hdGlvbigpOyAvLyBzbGlkZSBiYWNrLCBkb24ndCBjaGFuZ2UgY3VycmVudCBpbmRleFxuICB9XG5cbiAgcHJpdmF0ZSBpc091dE9mQm91bmRzKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHNpZ24gPSB0aGlzLm9yaWVudGF0aW9uID09PSAncnRsJyA/IC0xIDogMTtcbiAgICBjb25zdCBsZWZ0ID1cbiAgICAgIHNpZ24gKlxuICAgICAgKHRoaXMuY2Fyb3VzZWxMaXN0Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxMaXN0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0UGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgLmxlZnQpO1xuICAgIGNvbnN0IGxhc3RJbmRleCA9IHRoaXMuc2xpZGVzTGlzdC5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHdpZHRoID0gLXRoaXMuZ2V0V2lkdGgoKSAqIGxhc3RJbmRleDtcblxuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5saXN0S2V5TWFuYWdlci5hY3RpdmVJdGVtSW5kZXggPT09IDAgJiYgbGVmdCA+PSAwKSB8fFxuICAgICAgKHRoaXMubGlzdEtleU1hbmFnZXIuYWN0aXZlSXRlbUluZGV4ID09PSBsYXN0SW5kZXggJiYgbGVmdCA8PSB3aWR0aClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbSA9IHRoaXMuY2Fyb3VzZWxDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBkb2NWaWV3VG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIGNvbnN0IGRvY1ZpZXdCb3R0b20gPSBkb2NWaWV3VG9wICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGVsZW1PZmZzZXQgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGVsZW1Ub3AgPSBkb2NWaWV3VG9wICsgZWxlbU9mZnNldC50b3A7XG4gICAgY29uc3QgZWxlbUJvdHRvbSA9IGVsZW1Ub3AgKyBlbGVtT2Zmc2V0LmhlaWdodDtcblxuICAgIHJldHVybiBlbGVtQm90dG9tIDw9IGRvY1ZpZXdCb3R0b20gfHwgZWxlbVRvcCA+PSBkb2NWaWV3VG9wO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPZmZzZXQoKTogbnVtYmVyIHtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmxpc3RLZXlNYW5hZ2VyLmFjdGl2ZUl0ZW1JbmRleCAqIHRoaXMuZ2V0V2lkdGgoKTtcbiAgICBjb25zdCBzaWduID0gdGhpcy5vcmllbnRhdGlvbiA9PT0gJ3J0bCcgPyAxIDogLTE7XG4gICAgcmV0dXJuIHNpZ24gKiBvZmZzZXQ7XG4gIH1cblxuICBwcml2YXRlIGdldFRyYW5zbGF0aW9uKG9mZnNldDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYHRyYW5zbGF0ZVgoJHtvZmZzZXR9cHgpYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jYXJvdXNlbENvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBnb3RvKGRpcmVjdGlvbjogRGlyZWN0aW9uLCBpbmRleD86IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF5aW5nKSB7XG4gICAgICBjb25zdCBydGwgPSB0aGlzLm9yaWVudGF0aW9uID09PSAncnRsJztcblxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBEaXJlY3Rpb24uTGVmdDpcbiAgICAgICAgICByZXR1cm4gcnRsXG4gICAgICAgICAgICA/IHRoaXMubGlzdEtleU1hbmFnZXIuc2V0TmV4dEl0ZW1BY3RpdmUoKVxuICAgICAgICAgICAgOiB0aGlzLmxpc3RLZXlNYW5hZ2VyLnNldFByZXZpb3VzSXRlbUFjdGl2ZSgpO1xuICAgICAgICBjYXNlIERpcmVjdGlvbi5SaWdodDpcbiAgICAgICAgICByZXR1cm4gcnRsXG4gICAgICAgICAgICA/IHRoaXMubGlzdEtleU1hbmFnZXIuc2V0UHJldmlvdXNJdGVtQWN0aXZlKClcbiAgICAgICAgICAgIDogdGhpcy5saXN0S2V5TWFuYWdlci5zZXROZXh0SXRlbUFjdGl2ZSgpO1xuICAgICAgICBjYXNlIERpcmVjdGlvbi5JbmRleDpcbiAgICAgICAgICByZXR1cm4gdGhpcy5saXN0S2V5TWFuYWdlci5zZXRBY3RpdmVJdGVtKGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHBsYXlBbmltYXRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSB0aGlzLmdldFRyYW5zbGF0aW9uKHRoaXMuZ2V0T2Zmc2V0KCkpO1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmFuaW1hdGlvbkJ1aWxkZXIuYnVpbGQoXG4gICAgICBhbmltYXRlKHRoaXMudGltaW5ncywgc3R5bGUoeyB0cmFuc2Zvcm06IHRyYW5zbGF0aW9uIH0pKVxuICAgICk7XG4gICAgY29uc3QgYW5pbWF0aW9uID0gZmFjdG9yeS5jcmVhdGUodGhpcy5jYXJvdXNlbExpc3QubmF0aXZlRWxlbWVudCk7XG5cbiAgICBhbmltYXRpb24ub25TdGFydCgoKSA9PiAodGhpcy5wbGF5aW5nID0gdHJ1ZSkpO1xuICAgIGFuaW1hdGlvbi5vbkRvbmUoKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmN1cnJlbnRJbmRleCk7XG4gICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxMaXN0Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICB0cmFuc2xhdGlvblxuICAgICAgKTtcbiAgICAgIGFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgYW5pbWF0aW9uLnBsYXkoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRTbGlkZXMoc2xpZGVzOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNsaWRlc0xpc3QucmVzZXQodGhpcy5zbGlkZXNMaXN0LnRvQXJyYXkoKS5zbGljZSgwLCBzbGlkZXMpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRUaW1lcih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy50aW1lciQgPSBpbnRlcnZhbCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0VGltZXIoYXV0b3BsYXk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIWF1dG9wbGF5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50aW1lciRcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy50aW1lclN0b3AkKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5pc1Zpc2libGUoKSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmxpc3RLZXlNYW5hZ2VyLndpdGhXcmFwKHRydWUpLnNldE5leHRJdGVtQWN0aXZlKCk7XG4gICAgICAgIHRoaXMubGlzdEtleU1hbmFnZXIud2l0aFdyYXAodGhpcy5sb29wKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdG9wVGltZXIoKTogdm9pZCB7XG4gICAgdGhpcy50aW1lclN0b3AkLm5leHQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuXG5pbXBvcnQgeyBNYXRDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdENhcm91c2VsU2xpZGVDb21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLXNsaWRlL2Nhcm91c2VsLXNsaWRlLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBIYW1tZXJHZXN0dXJlQ29uZmlnLFxuICBIQU1NRVJfR0VTVFVSRV9DT05GSUdcbn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2NvcmUnO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDU0MSNpc3N1ZWNvbW1lbnQtMzAwNzYxMzg3XG5leHBvcnQgY2xhc3MgTWF0Q2Fyb3VzZWxIYW1tZXJDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcbiAgb3ZlcnJpZGVzID0ge1xuICAgIHBpbmNoOiB7IGVuYWJsZTogZmFsc2UgfSxcbiAgICByb3RhdGU6IHsgZW5hYmxlOiBmYWxzZSB9XG4gIH07XG59XG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNYXRDYXJvdXNlbENvbXBvbmVudCwgTWF0Q2Fyb3VzZWxTbGlkZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtNYXRDYXJvdXNlbENvbXBvbmVudCwgTWF0Q2Fyb3VzZWxTbGlkZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2Fyb3VzZWxNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1hdENhcm91c2VsTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogSEFNTUVSX0dFU1RVUkVfQ09ORklHLCB1c2VDbGFzczogTWF0Q2Fyb3VzZWxIYW1tZXJDb25maWcgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "Yu5h":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "mUWD");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "3nXK");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shop/shop.component */ "zRJ8");
/* harmony import */ var _components_track_track_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/track/track.component */ "X6Av");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ "Ncag");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product/product.component */ "3bPX");
/* harmony import */ var _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/check-out/check-out.component */ "rlWh");
/* harmony import */ var _components_paid_paid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/paid/paid.component */ "laRj");












const routes = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'shop', component: _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_4__["ShopComponent"] },
            { path: 'shop/:brand', component: _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_4__["ShopComponent"] },
            { path: 'track', component: _components_track_track_component__WEBPACK_IMPORTED_MODULE_5__["TrackComponent"] },
            { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
            { path: 'shop/product/:id', component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"] },
            { path: 'checkout', component: _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_8__["CheckOutComponent"] },
            { path: 'paid', component: _components_paid_paid_component__WEBPACK_IMPORTED_MODULE_9__["PaidComponent"] },
        ],
    },
];
class UserRoutingModule {
}
UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserRoutingModule });
UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserRoutingModule_Factory(t) { return new (t || UserRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "aX0s":
/*!******************************************************!*\
  !*** ./src/app/user/shared/services/http.service.ts ***!
  \******************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class HttpService {
    constructor(http) {
        this.http = http;
    }
    getBestSeller(limit) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUserUrl}best/${limit}`)
            .toPromise();
    }
    getProduct() {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUserUrl}/product`)
            .toPromise();
    }
    getProductById(id) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUserUrl}/product/${id}`)
            .toPromise();
    }
    getTrack(track) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUserUrl}/track/${track}`)
            .toPromise();
    }
    createOrder(body) {
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUserUrl}order`, body, {
            withCredentials: true,
        })
            .toPromise();
    }
    createInbox(body) {
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUserUrl}inbox`, body, {
            withCredentials: true,
        })
            .toPromise();
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "i7Yu":
/*!*******************************************************************************!*\
  !*** ./node_modules/ngx-drag-scroll/__ivy_ngcc__/fesm2015/ngx-drag-scroll.js ***!
  \*******************************************************************************/
/*! exports provided: DragScrollComponent, DragScrollItemDirective, DragScrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragScrollComponent", function() { return DragScrollComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragScrollItemDirective", function() { return DragScrollItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragScrollModule", function() { return DragScrollModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "5GWw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["contentRef"];
const _c1 = ["*"];
let DragScrollItemDirective = class DragScrollItemDirective {
    constructor(elementRef) {
        this.display = 'inline-block';
        this._dragDisabled = false;
        this._elementRef = elementRef;
    }
    get dragDisabled() { return this._dragDisabled; }
    set dragDisabled(value) { this._dragDisabled = value; }
};
DragScrollItemDirective.ɵfac = function DragScrollItemDirective_Factory(t) { return new (t || DragScrollItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
DragScrollItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DragScrollItemDirective, selectors: [["", "drag-scroll-item", ""]], hostVars: 2, hostBindings: function DragScrollItemDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.display);
    } }, inputs: { dragDisabled: ["drag-disabled", "dragDisabled"] } });
DragScrollItemDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.display'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], DragScrollItemDirective.prototype, "display", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('drag-disabled'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], DragScrollItemDirective.prototype, "dragDisabled", null);
DragScrollItemDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], DragScrollItemDirective);

let DragScrollComponent = class DragScrollComponent {
    constructor(_elementRef, _renderer, _document) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._document = _document;
        this._index = 0;
        this._scrollbarHidden = false;
        this._disabled = false;
        this._xDisabled = false;
        this._xWheelEnabled = false;
        this._yDisabled = false;
        this._dragDisabled = false;
        this._snapDisabled = false;
        this._snapOffset = 0;
        this._snapDuration = 500;
        this._isDragging = false;
        /**
         * Is the user currently pressing the element
         */
        this.isPressed = false;
        /**
         * Is the user currently scrolling the element
         */
        this.isScrolling = false;
        this.scrollTimer = -1;
        this.scrollToTimer = -1;
        /**
         * The x coordinates on the element
         */
        this.downX = 0;
        /**
         * The y coordinates on the element
         */
        this.downY = 0;
        this.displayType = 'block';
        this.elWidth = null;
        this.elHeight = null;
        this._pointerEvents = 'auto';
        this.scrollbarWidth = null;
        this.isAnimating = false;
        this.prevChildrenLength = 0;
        this.indexBound = 0;
        this.dsInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.indexChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reachesLeftBound = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reachesRightBound = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.snapAnimationFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scrollbarWidth = `${this.getScrollbarWidth()}px`;
    }
    /**
     * Is the user currently dragging the element
     */
    get isDragging() {
        return this._isDragging;
    }
    get currIndex() { return this._index; }
    set currIndex(value) {
        if (value !== this._index) {
            this._index = value;
            this.indexChanged.emit(value);
        }
    }
    /**
     * Whether the scrollbar is hidden
     */
    get scrollbarHidden() { return this._scrollbarHidden; }
    set scrollbarHidden(value) { this._scrollbarHidden = value; }
    /**
     * Whether horizontally and vertically draging and scrolling is be disabled
     */
    get disabled() { return this._disabled; }
    set disabled(value) { this._disabled = value; }
    /**
     * Whether horizontally dragging and scrolling is be disabled
     */
    get xDisabled() { return this._xDisabled; }
    set xDisabled(value) { this._xDisabled = value; }
    /**
     * Whether vertically dragging and scrolling events is disabled
     */
    get yDisabled() { return this._yDisabled; }
    set yDisabled(value) { this._yDisabled = value; }
    /**
     * Whether scrolling horizontally with mouse wheel is enabled
     */
    get xWheelEnabled() { return this._xWheelEnabled; }
    set xWheelEnabled(value) { this._xWheelEnabled = value; }
    get dragDisabled() { return this._dragDisabled; }
    set dragDisabled(value) { this._dragDisabled = value; }
    get snapDisabled() { return this._snapDisabled; }
    set snapDisabled(value) { this._snapDisabled = value; }
    get snapOffset() { return this._snapOffset; }
    set snapOffset(value) { this._snapOffset = value; }
    get snapDuration() { return this._snapDuration; }
    set snapDuration(value) { this._snapDuration = value; }
    ngOnChanges() {
        this.setScrollBar();
        if (this.xDisabled || this.disabled || this._scrollbarHidden) {
            this.disableScroll('x');
        }
        else {
            this.enableScroll('x');
        }
        if (this.yDisabled || this.disabled) {
            this.disableScroll('y');
        }
        else {
            this.enableScroll('y');
        }
    }
    ngAfterViewInit() {
        // auto assign computed css
        this._renderer.setAttribute(this._contentRef.nativeElement, 'drag-scroll', 'true');
        this.displayType = typeof window !== 'undefined' ? window.getComputedStyle(this._elementRef.nativeElement).display : 'block';
        this._renderer.setStyle(this._contentRef.nativeElement, 'display', this.displayType);
        this._renderer.setStyle(this._contentRef.nativeElement, 'whiteSpace', 'noWrap');
        // store ele width height for later user
        this.markElDimension();
        this._renderer.setStyle(this._contentRef.nativeElement, 'width', this.elWidth);
        this._renderer.setStyle(this._contentRef.nativeElement, 'height', this.elHeight);
        if (this.wrapper) {
            this.checkScrollbar();
        }
        this._onMouseDownListener = this._renderer.listen(this._contentRef.nativeElement, 'mousedown', this.onMouseDownHandler.bind(this));
        this._onScrollListener = this._renderer.listen(this._contentRef.nativeElement, 'scroll', this.onScrollHandler.bind(this));
        // prevent Firefox from dragging images
        this._onDragStartListener = this._renderer.listen('document', 'dragstart', (e) => {
            e.preventDefault();
        });
        this.checkNavStatus();
        this.dsInitialized.emit();
        this.adjustMarginToLastChild();
    }
    ngAfterViewChecked() {
        // avoid extra checks
        if (this._children.length !== this.prevChildrenLength) {
            this.markElDimension();
            this.checkScrollbar();
            this.prevChildrenLength = this._children.length;
            this.checkNavStatus();
        }
    }
    ngOnDestroy() {
        this._renderer.setAttribute(this._contentRef.nativeElement, 'drag-scroll', 'false');
        if (this._onMouseDownListener) {
            this._onMouseDownListener = this._onMouseDownListener();
        }
        if (this._onScrollListener) {
            this._onScrollListener = this._onScrollListener();
        }
        if (this._onDragStartListener) {
            this._onDragStartListener = this._onDragStartListener();
        }
    }
    onMouseMoveHandler(event) {
        this.onMouseMove(event);
    }
    onMouseMove(event) {
        if (this.isPressed && !this.disabled) {
            // Workaround for prevent scroll stuck if browser lost focus
            // MouseEvent.buttons not support by Safari
            // tslint:disable-next-line:deprecation
            if (!event.buttons && !event.which) {
                return this.onMouseUpHandler(event);
            }
            this._pointerEvents = 'none';
            this._setIsDragging(true);
            // Drag X
            if (!this.xDisabled && !this.dragDisabled) {
                const clientX = event.clientX;
                this._contentRef.nativeElement.scrollLeft =
                    this._contentRef.nativeElement.scrollLeft - clientX + this.downX;
                this.downX = clientX;
            }
            // Drag Y
            if (!this.yDisabled && !this.dragDisabled) {
                const clientY = event.clientY;
                this._contentRef.nativeElement.scrollTop =
                    this._contentRef.nativeElement.scrollTop - clientY + this.downY;
                this.downY = clientY;
            }
        }
    }
    onMouseDownHandler(event) {
        const dragScrollItem = this.locateDragScrollItem(event.target);
        if (dragScrollItem && dragScrollItem.dragDisabled) {
            return;
        }
        const isTouchEvent = event.type === 'touchstart';
        this._startGlobalListening(isTouchEvent);
        this.isPressed = true;
        const mouseEvent = event;
        this.downX = mouseEvent.clientX;
        this.downY = mouseEvent.clientY;
        clearTimeout(this.scrollToTimer);
    }
    onScrollHandler() {
        this.checkNavStatus();
        if (!this.isPressed && !this.isAnimating && !this.snapDisabled) {
            this.isScrolling = true;
            clearTimeout(this.scrollTimer);
            this.scrollTimer = setTimeout(() => {
                this.isScrolling = false;
                this.locateCurrentIndex(true);
            }, 500);
        }
        else {
            this.locateCurrentIndex();
        }
    }
    onMouseUpHandler(event) {
        if (this.isPressed) {
            this.isPressed = false;
            this._pointerEvents = 'auto';
            this._setIsDragging(false);
            if (!this.snapDisabled) {
                this.locateCurrentIndex(true);
            }
            else {
                this.locateCurrentIndex();
            }
            this._stopGlobalListening();
        }
    }
    /*
     * Nav button
     */
    moveLeft() {
        if ((this.currIndex !== 0 || this.snapDisabled)) {
            this.currIndex--;
            clearTimeout(this.scrollToTimer);
            this.scrollTo(this._contentRef.nativeElement, this.toChildrenLocation(), this.snapDuration);
        }
    }
    moveRight() {
        const container = this.wrapper || this.parentNode;
        const containerWidth = container ? container.clientWidth : 0;
        if (!this.isScrollReachesRightEnd() && this.currIndex < this.maximumIndex(containerWidth, this._children.toArray())) {
            this.currIndex++;
            clearTimeout(this.scrollToTimer);
            this.scrollTo(this._contentRef.nativeElement, this.toChildrenLocation(), this.snapDuration);
        }
    }
    moveTo(index) {
        const container = this.wrapper || this.parentNode;
        const containerWidth = container ? container.clientWidth : 0;
        if (index >= 0 &&
            index !== this.currIndex &&
            this.currIndex <= this.maximumIndex(containerWidth, this._children.toArray())) {
            this.currIndex = Math.min(index, this.maximumIndex(containerWidth, this._children.toArray()));
            clearTimeout(this.scrollToTimer);
            this.scrollTo(this._contentRef.nativeElement, this.toChildrenLocation(), this.snapDuration);
        }
    }
    checkNavStatus() {
        setTimeout(() => {
            const onlyOneItem = Boolean(this._children.length <= 1);
            const containerIsLargerThanContent = Boolean(this._contentRef.nativeElement.scrollWidth <=
                this._contentRef.nativeElement.clientWidth);
            if (onlyOneItem || containerIsLargerThanContent) {
                // only one element
                this.reachesLeftBound.emit(true);
                this.reachesRightBound.emit(true);
            }
            else if (this.isScrollReachesRightEnd()) {
                // reached right end
                this.reachesLeftBound.emit(false);
                this.reachesRightBound.emit(true);
            }
            else if (this._contentRef.nativeElement.scrollLeft === 0 &&
                this._contentRef.nativeElement.scrollWidth > this._contentRef.nativeElement.clientWidth) {
                // reached left end
                this.reachesLeftBound.emit(true);
                this.reachesRightBound.emit(false);
            }
            else {
                // in the middle
                this.reachesLeftBound.emit(false);
                this.reachesRightBound.emit(false);
            }
        }, 0);
    }
    onWheel(event) {
        if (this._xWheelEnabled) {
            event.preventDefault();
            if (this._snapDisabled) {
                this._contentRef.nativeElement.scrollBy(event.deltaY, 0);
            }
            else {
                if (event.deltaY < 0) {
                    this.moveLeft();
                }
                else if (event.deltaY > 0) {
                    this.moveRight();
                }
            }
        }
    }
    onWindowResize() {
        this.refreshWrapperDimensions();
        this.checkNavStatus();
    }
    _setIsDragging(value) {
        if (this._isDragging === value) {
            return;
        }
        this._isDragging = value;
        value ? this.dragStart.emit() : this.dragEnd.emit();
    }
    _startGlobalListening(isTouchEvent) {
        if (!this._onMouseMoveListener) {
            const eventName = isTouchEvent ? 'touchmove' : 'mousemove';
            this._onMouseMoveListener = this._renderer.listen('document', eventName, this.onMouseMoveHandler.bind(this));
        }
        if (!this._onMouseUpListener) {
            const eventName = isTouchEvent ? 'touchend' : 'mouseup';
            this._onMouseUpListener = this._renderer.listen('document', eventName, this.onMouseUpHandler.bind(this));
        }
    }
    _stopGlobalListening() {
        if (this._onMouseMoveListener) {
            this._onMouseMoveListener = this._onMouseMoveListener();
        }
        if (this._onMouseUpListener) {
            this._onMouseUpListener = this._onMouseUpListener();
        }
    }
    disableScroll(axis) {
        this._renderer.setStyle(this._contentRef.nativeElement, `overflow-${axis}`, 'hidden');
    }
    enableScroll(axis) {
        this._renderer.setStyle(this._contentRef.nativeElement, `overflow-${axis}`, 'auto');
    }
    hideScrollbar() {
        if (this._contentRef.nativeElement.style.display !== 'none' && !this.wrapper) {
            this.parentNode = this._contentRef.nativeElement.parentNode;
            // create container element
            this.wrapper = this._renderer.createElement('div');
            this._renderer.setAttribute(this.wrapper, 'class', 'drag-scroll-wrapper');
            this._renderer.addClass(this.wrapper, 'drag-scroll-container');
            this.refreshWrapperDimensions();
            this._renderer.setStyle(this.wrapper, 'overflow', 'hidden');
            this._renderer.setStyle(this._contentRef.nativeElement, 'width', `calc(100% + ${this.scrollbarWidth})`);
            this._renderer.setStyle(this._contentRef.nativeElement, 'height', `calc(100% + ${this.scrollbarWidth})`);
            // Append container element to component element.
            this._renderer.appendChild(this._elementRef.nativeElement, this.wrapper);
            // Append content element to container element.
            this._renderer.appendChild(this.wrapper, this._contentRef.nativeElement);
            this.adjustMarginToLastChild();
        }
    }
    showScrollbar() {
        if (this.wrapper) {
            this._renderer.setStyle(this._contentRef.nativeElement, 'width', '100%');
            this._renderer.setStyle(this._contentRef.nativeElement, 'height', this.wrapper.style.height);
            if (this.parentNode !== null) {
                this.parentNode.removeChild(this.wrapper);
                this.parentNode.appendChild(this._contentRef.nativeElement);
            }
            this.wrapper = null;
            this.adjustMarginToLastChild();
        }
    }
    checkScrollbar() {
        if (this._contentRef.nativeElement.scrollWidth <= this._contentRef.nativeElement.clientWidth) {
            this._renderer.setStyle(this._contentRef.nativeElement, 'height', '100%');
        }
        else {
            this._renderer.setStyle(this._contentRef.nativeElement, 'height', `calc(100% + ${this.scrollbarWidth})`);
        }
        if (this._contentRef.nativeElement.scrollHeight <= this._contentRef.nativeElement.clientHeight) {
            this._renderer.setStyle(this._contentRef.nativeElement, 'width', '100%');
        }
        else {
            this._renderer.setStyle(this._contentRef.nativeElement, 'width', `calc(100% + ${this.scrollbarWidth})`);
        }
    }
    setScrollBar() {
        if (this.scrollbarHidden) {
            this.hideScrollbar();
        }
        else {
            this.showScrollbar();
        }
    }
    getScrollbarWidth() {
        /**
         * Browser Scrollbar Widths (2016)
         * OSX (Chrome, Safari, Firefox) - 15px
         * Windows XP (IE7, Chrome, Firefox) - 17px
         * Windows 7 (IE10, IE11, Chrome, Firefox) - 17px
         * Windows 8.1 (IE11, Chrome, Firefox) - 17px
         * Windows 10 (IE11, Chrome, Firefox) - 17px
         * Windows 10 (Edge 12/13) - 12px
         */
        const outer = this._renderer.createElement('div');
        this._renderer.setStyle(outer, 'visibility', 'hidden');
        this._renderer.setStyle(outer, 'width', '100px');
        this._renderer.setStyle(outer, 'msOverflowStyle', 'scrollbar'); // needed for WinJS apps
        // document.body.appendChild(outer);
        this._renderer.appendChild(this._document.body, outer);
        // this._renderer.appendChild(this._renderer.selectRootElement('body'), outer);
        const widthNoScroll = outer.offsetWidth;
        // force scrollbars
        this._renderer.setStyle(outer, 'overflow', 'scroll');
        // add innerdiv
        const inner = this._renderer.createElement('div');
        this._renderer.setStyle(inner, 'width', '100%');
        this._renderer.appendChild(outer, inner);
        const widthWithScroll = inner.offsetWidth;
        // remove divs
        this._renderer.removeChild(this._document.body, outer);
        /**
         * Scrollbar width will be 0 on Mac OS with the
         * default "Only show scrollbars when scrolling" setting (Yosemite and up).
         * setting default width to 20;
         */
        return widthNoScroll - widthWithScroll || 20;
    }
    refreshWrapperDimensions() {
        if (this.wrapper) {
            this._renderer.setStyle(this.wrapper, 'width', '100%');
            this._renderer.setStyle(this.wrapper, 'height', this._elementRef.nativeElement.style.height
                || this._elementRef.nativeElement.offsetHeight + 'px');
        }
    }
    /*
    * The below solution is heavily inspired from
    * https://gist.github.com/andjosh/6764939
    */
    scrollTo(element, to, duration) {
        const self = this;
        self.isAnimating = true;
        const start = element.scrollLeft, change = to - start - this.snapOffset, increment = 20;
        let currentTime = 0;
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        const easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) {
                return c / 2 * t * t + b;
            }
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        const animateScroll = function () {
            currentTime += increment;
            element.scrollLeft = easeInOutQuad(currentTime, start, change, duration);
            if (currentTime < duration) {
                self.scrollToTimer = setTimeout(animateScroll, increment);
            }
            else {
                // run one more frame to make sure the animation is fully finished
                setTimeout(() => {
                    self.isAnimating = false;
                    self.snapAnimationFinished.emit(self.currIndex);
                }, increment);
            }
        };
        animateScroll();
    }
    locateCurrentIndex(snap) {
        this.currentChildWidth((currentChildWidth, nextChildrenWidth, childrenWidth, idx, stop) => {
            if ((this._contentRef.nativeElement.scrollLeft >= childrenWidth &&
                this._contentRef.nativeElement.scrollLeft <= nextChildrenWidth)) {
                if (nextChildrenWidth - this._contentRef.nativeElement.scrollLeft > currentChildWidth / 2 && !this.isScrollReachesRightEnd()) {
                    // roll back scrolling
                    if (!this.isAnimating) {
                        this.currIndex = idx;
                    }
                    if (snap) {
                        this.scrollTo(this._contentRef.nativeElement, childrenWidth, this.snapDuration);
                    }
                }
                else if (this._contentRef.nativeElement.scrollLeft !== 0) {
                    // forward scrolling
                    if (!this.isAnimating) {
                        this.currIndex = idx + 1;
                    }
                    if (snap) {
                        this.scrollTo(this._contentRef.nativeElement, childrenWidth + currentChildWidth, this.snapDuration);
                    }
                }
                stop();
            }
            else if ((idx + 1) === (this._children.length - 1)) {
                // reaches last index
                if (!this.isAnimating) {
                    this.currIndex = idx + 1;
                }
                stop();
            }
        });
    }
    currentChildWidth(cb) {
        let childrenWidth = 0;
        let shouldBreak = false;
        const breakFunc = function () {
            shouldBreak = true;
        };
        const childrenArr = this._children.toArray();
        for (let i = 0; i < childrenArr.length; i++) {
            if (i === childrenArr.length - 1) {
                break;
            }
            if (shouldBreak) {
                break;
            }
            const nextChildrenWidth = childrenWidth + childrenArr[i + 1]._elementRef.nativeElement.clientWidth;
            const currentClildWidth = childrenArr[i]._elementRef.nativeElement.clientWidth;
            cb(currentClildWidth, nextChildrenWidth, childrenWidth, i, breakFunc);
            childrenWidth += currentClildWidth;
        }
    }
    toChildrenLocation() {
        let to = 0;
        const childrenArr = this._children.toArray();
        for (let i = 0; i < this.currIndex; i++) {
            to += childrenArr[i]._elementRef.nativeElement.clientWidth;
        }
        return to;
    }
    locateDragScrollItem(element) {
        let item = null;
        const childrenArr = this._children.toArray();
        for (let i = 0; i < childrenArr.length; i++) {
            if (element === childrenArr[i]._elementRef.nativeElement) {
                item = childrenArr[i];
            }
        }
        return item;
    }
    markElDimension() {
        if (this.wrapper) {
            this.elWidth = this.wrapper.style.width;
            this.elHeight = this.wrapper.style.height;
        }
        else {
            this.elWidth = this._elementRef.nativeElement.style.width || (this._elementRef.nativeElement.offsetWidth + 'px');
            this.elHeight = this._elementRef.nativeElement.style.height || (this._elementRef.nativeElement.offsetHeight + 'px');
        }
        const container = this.wrapper || this.parentNode;
        const containerWidth = container ? container.clientWidth : 0;
        if (this._children.length > 1) {
            this.indexBound = this.maximumIndex(containerWidth, this._children.toArray());
        }
    }
    maximumIndex(containerWidth, childrenElements) {
        let count = 0;
        let childrenWidth = 0;
        for (let i = 0; i <= childrenElements.length; i++) {
            // last N element
            const dragScrollItemDirective = childrenElements[childrenElements.length - 1 - i];
            if (!dragScrollItemDirective) {
                break;
            }
            else {
                const nativeElement = dragScrollItemDirective._elementRef.nativeElement;
                let itemWidth = nativeElement.clientWidth;
                if (itemWidth === 0 && nativeElement.firstElementChild) {
                    itemWidth = dragScrollItemDirective._elementRef.nativeElement.firstElementChild.clientWidth;
                }
                childrenWidth += itemWidth;
                if (childrenWidth < containerWidth) {
                    count++;
                }
                else {
                    break;
                }
            }
        }
        return childrenElements.length - count;
    }
    isScrollReachesRightEnd() {
        const scrollLeftPos = this._contentRef.nativeElement.scrollLeft + this._contentRef.nativeElement.offsetWidth;
        return scrollLeftPos >= this._contentRef.nativeElement.scrollWidth;
    }
    /**
     * adds a margin right style to the last child element which will resolve the issue
     * of last item gets cutoff.
     */
    adjustMarginToLastChild() {
        if (this._children && this._children.length > 0 && this.hideScrollbar) {
            const childrenArr = this._children.toArray();
            const lastItem = childrenArr[childrenArr.length - 1]._elementRef.nativeElement;
            if (this.wrapper && childrenArr.length > 1) {
                this._renderer.setStyle(lastItem, 'margin-right', this.scrollbarWidth);
            }
            else {
                this._renderer.setStyle(lastItem, 'margin-right', 0);
            }
        }
    }
};
DragScrollComponent.ɵfac = function DragScrollComponent_Factory(t) { return new (t || DragScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
DragScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DragScrollComponent, selectors: [["drag-scroll"]], contentQueries: function DragScrollComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DragScrollItemDirective, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._children = _t);
    } }, viewQuery: function DragScrollComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentRef = _t.first);
    } }, hostVars: 2, hostBindings: function DragScrollComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("wheel", function DragScrollComponent_wheel_HostBindingHandler($event) { return ctx.onWheel($event); })("resize", function DragScrollComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("pointer-events", ctx._pointerEvents);
    } }, inputs: { scrollbarHidden: ["scrollbar-hidden", "scrollbarHidden"], disabled: ["drag-scroll-disabled", "disabled"], xDisabled: ["drag-scroll-x-disabled", "xDisabled"], yDisabled: ["drag-scroll-y-disabled", "yDisabled"], xWheelEnabled: ["scroll-x-wheel-enabled", "xWheelEnabled"], dragDisabled: ["drag-disabled", "dragDisabled"], snapDisabled: ["snap-disabled", "snapDisabled"], snapOffset: ["snap-offset", "snapOffset"], snapDuration: ["snap-duration", "snapDuration"] }, outputs: { dsInitialized: "dsInitialized", indexChanged: "indexChanged", reachesLeftBound: "reachesLeftBound", reachesRightBound: "reachesRightBound", snapAnimationFinished: "snapAnimationFinished", dragStart: "dragStart", dragEnd: "dragEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 3, vars: 0, consts: [[1, "drag-scroll-content"], ["contentRef", ""]], template: function DragScrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n      overflow: hidden;\n      display: block;\n    }\n    .drag-scroll-content[_ngcontent-%COMP%] {\n      height: 100%;\n      overflow: auto;\n      white-space: nowrap;\n    }"] });
DragScrollComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentRef', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DragScrollComponent.prototype, "_contentRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(DragScrollItemDirective),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], DragScrollComponent.prototype, "_children", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.pointer-events'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], DragScrollComponent.prototype, "_pointerEvents", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], DragScrollComponent.prototype, "dsInitialized", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], DragScrollComponent.prototype, "indexChanged", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], DragScrollComponent.prototype, "reachesLeftBound", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], DragScrollComponent.prototype, "reachesRightBound", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], DragScrollComponent.prototype, "snapAnimationFinished", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], DragScrollComponent.prototype, "dragStart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], DragScrollComponent.prototype, "dragEnd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('scrollbar-hidden'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], DragScrollComponent.prototype, "scrollbarHidden", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('drag-scroll-disabled'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], DragScrollComponent.prototype, "disabled", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('drag-scroll-x-disabled'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], DragScrollComponent.prototype, "xDisabled", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('drag-scroll-y-disabled'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], DragScrollComponent.prototype, "yDisabled", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('scroll-x-wheel-enabled'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], DragScrollComponent.prototype, "xWheelEnabled", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('drag-disabled'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], DragScrollComponent.prototype, "dragDisabled", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('snap-disabled'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], DragScrollComponent.prototype, "snapDisabled", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('snap-offset'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])
], DragScrollComponent.prototype, "snapOffset", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('snap-duration'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])
], DragScrollComponent.prototype, "snapDuration", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('wheel', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [WheelEvent]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], DragScrollComponent.prototype, "onWheel", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], DragScrollComponent.prototype, "onWindowResize", null);
DragScrollComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], Object])
], DragScrollComponent);

let DragScrollModule = class DragScrollModule {
};
DragScrollModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DragScrollModule });
DragScrollModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DragScrollModule_Factory(t) { return new (t || DragScrollModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragScrollItemDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[drag-scroll-item]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]
            }] }]; }, { display: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.display']
        }], dragDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['drag-disabled']
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragScrollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'drag-scroll',
                template: `
    <div class="drag-scroll-content" #contentRef>
      <ng-content></ng-content>
    </div>
  `,
                styles: [`
    :host {
      overflow: hidden;
      display: block;
    }
    .drag-scroll-content {
      height: 100%;
      overflow: auto;
      white-space: nowrap;
    }
    `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, { _pointerEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.pointer-events']
        }], dsInitialized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], indexChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], reachesLeftBound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], reachesRightBound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], snapAnimationFinished: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], scrollbarHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['scrollbar-hidden']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['drag-scroll-disabled']
        }], xDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['drag-scroll-x-disabled']
        }], yDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['drag-scroll-y-disabled']
        }], xWheelEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['scroll-x-wheel-enabled']
        }], dragDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['drag-disabled']
        }], snapDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['snap-disabled']
        }], snapOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['snap-offset']
        }], snapDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['snap-duration']
        }], onWheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['wheel', ['$event']]
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize']
        }], _contentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['contentRef', { static: true }]
        }], _children: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [DragScrollItemDirective]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DragScrollModule, { declarations: [DragScrollComponent, DragScrollItemDirective], exports: [DragScrollComponent, DragScrollItemDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragScrollModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                exports: [
                    DragScrollComponent,
                    DragScrollItemDirective
                ],
                declarations: [
                    DragScrollComponent,
                    DragScrollItemDirective
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-drag-scroll
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-drag-scroll.js.map

/***/ }),

/***/ "lBxW":
/*!***********************************************************!*\
  !*** ./src/app/user/layouts/sidenav/sidenav.component.ts ***!
  \***********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["home"]; };
const _c2 = function () { return ["active"]; };
const _c3 = function () { return ["shop"]; };
const _c4 = function () { return ["track"]; };
const _c5 = function () { return ["contact"]; };
class SidenavComponent {
    constructor() {
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onSidenavClose() {
        this.sidenavClose.emit();
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], outputs: { sidenavClose: "sidenavClose" }, decls: 25, vars: 18, consts: [["matSubheader", "", 2, "margin-top", "16px"], [3, "routerLink", "click"], ["src", "../../../../assets/img/logo-shop.png", 1, "logo"], ["mat-list-item", "", 3, "routerLink", "routerLinkActive", "click"], [1, "nav-caption"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_1_listener() { return ctx.onSidenavClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_5_listener() { return ctx.onSidenavClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_10_listener() { return ctx.onSidenavClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_15_listener() { return ctx.onSidenavClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "local_shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Track Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_20_listener() { return ctx.onSidenavClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c5))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListSubheaderCssMatStyler"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".nav-caption[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: 6px;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: dodgerblue;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 200px;\n  height: auto;\n  margin: 0 auto;\n}\n\n.mat-list-item[_ngcontent-%COMP%] {\n  padding-left: 16px !important;\n}\n\na[_ngcontent-%COMP%] {\n  display: contents;\n  text-decoration: none;\n}\n\nhr[_ngcontent-%COMP%] {\n  width: 75%;\n  margin-top: -5px;\n  border: 2px solid darkslateblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sYXlvdXRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9sYXlvdXRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtY2FwdGlvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctbGVmdDogNnB4O1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtbGlzdC1pdGVtIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuYSB7XHJcbiAgZGlzcGxheTogY29udGVudHM7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5ociB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtzbGF0ZWJsdWU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss'],
            }]
    }], function () { return []; }, { sidenavClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "laRj":
/*!********************************************************!*\
  !*** ./src/app/user/components/paid/paid.component.ts ***!
  \********************************************************/
/*! exports provided: PaidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaidComponent", function() { return PaidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/form.service */ "nLB4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









const _c0 = function () { return ["/home"]; };
function PaidComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "check_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Transaction Successful!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Thank you");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Order Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "BACK TO HOME ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.track);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
class PaidComponent {
    constructor(fs) {
        this.fs = fs;
        this.track = '';
    }
    ngOnInit() {
        this.track = this.fs.track;
    }
}
PaidComponent.ɵfac = function PaidComponent_Factory(t) { return new (t || PaidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_form_service__WEBPACK_IMPORTED_MODULE_1__["FormService"])); };
PaidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaidComponent, selectors: [["app-paid"]], decls: 2, vars: 1, consts: [[1, "mb-50"], ["class", "container-content", 4, "ngIf"], [1, "container-content"], ["fxFlex", "100", "fxLayout", "row", 1, "text-center"], [1, "paid"], [1, "check"], [2, "color", "#616161"], ["mat-button", "", 3, "routerLink"], [1, "back"]], template: function PaidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaidComponent_div_1_Template, 19, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.track);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], styles: [".paid[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.paid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #696969;\n}\n.paid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1e90ff;\n}\n.paid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6495ed;\n}\n.paid[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  font-size: 100px;\n  color: #46a35e;\n}\n.paid[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: 14px;\n  height: 14px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3BhaWQvcGFpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLGNBQUE7QUFBSjtBQUdFO0VBQ0UsY0FBQTtBQURKO0FBSUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZKO0FBS0U7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvdXNlci9jb21wb25lbnRzL3BhaWQvcGFpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWlkIHtcclxuICB3aWR0aDogODAlO1xyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM2OTY5Njk7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAjMWU5MGZmO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzY0OTVlZDtcclxuICB9XHJcblxyXG4gIC5jaGVjayB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGNvbG9yOiAjNDZhMzVlO1xyXG4gIH1cclxuXHJcbiAgLmJhY2sge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-paid',
                templateUrl: './paid.component.html',
                styleUrls: ['./paid.component.scss'],
            }]
    }], function () { return [{ type: _shared_services_form_service__WEBPACK_IMPORTED_MODULE_1__["FormService"] }]; }, null); })();


/***/ }),

/***/ "lpJk":
/*!*********************************************************!*\
  !*** ./src/app/user/layouts/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/cart.service */ "09FT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");







const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["home"]; };
const _c2 = function () { return ["active"]; };
const _c3 = function () { return ["shop"]; };
const _c4 = function () { return ["track"]; };
const _c5 = function () { return ["contact"]; };
const _c6 = function () { return ["/checkout"]; };
class HeaderComponent {
    constructor(cs) {
        this.cs = cs;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listItem = 0;
    }
    ngOnInit() {
        this.cs.list$.subscribe((list) => {
            this.listItem = this.cs.getListItems;
        });
    }
    onToggleSidenav() {
        this.sidenavToggle.emit();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { sidenavToggle: "sidenavToggle" }, decls: 33, vars: 21, consts: [[1, "menu-warpper"], [1, "header-left", "menu-center"], [1, "logo"], [3, "routerLink"], ["src", "../../../../assets/img/logo-shop.png", "alt", "TimeTrend", 1, "resize-img"], [1, "mobile-menu", "d-block"], [2, "margin-bottom", "8px"], ["mat-icon-button", "", 3, "click"], [1, "icon-navbar"], [1, "main-menu", "d-none"], [3, "routerLink", "routerLinkActive"], [1, "header-right", "menu-center"], [1, "menu-social"], ["href", "https://www.facebook.com/timetrendofficial", "target", "_blank"], [1, "icon", "flip"], ["matBadgeColor", "warn", 1, "icon", 3, "matBadge"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_7_listener() { return ctx.onToggleSidenav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Order Track");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c4))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c5))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx.listItem);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadge"]], styles: ["ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 200px;\n  height: auto;\n}\n\n@media (max-width: 380px) {\n  .logo[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n}\n\n.resize-img[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n\n.menu-warpper[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin: 12px 0;\n}\n\n.menu-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.main-memu[_ngcontent-%COMP%] {\n  margin-left: 60px;\n  display: block;\n}\n\n.main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  list-style: none;\n  z-index: 1;\n  margin: 40px 20px;\n}\n\n.main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: block;\n  color: #1d2547;\n  font-size: 16px;\n  font-weight: 500;\n  padding-bottom: 5px;\n  transition: 0.3s;\n  text-transform: uppercase;\n}\n\n.main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n}\n\n.main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  height: 2px;\n  left: 50%;\n  position: absolute;\n  background: dodgerblue;\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n\n.main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: dodgerblue !important;\n}\n\n.active[_ngcontent-%COMP%]:after {\n  background: dodgerblue !important;\n  width: 100% !important;\n  left: 0 !important;\n}\n\n.d-none[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.d-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n@media (min-width: 992px) {\n  .d-none[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .d-block[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.menu-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 8px;\n  margin-bottom: 8px;\n  color: #1d2547;\n  width: 40px;\n  height: 40px;\n  font-size: 26px;\n  line-height: 40px;\n  text-align: center;\n  transition: 0.4s;\n  border-radius: 50%;\n  border: 1px solid rgba(29, 37, 71, 0.12);\n}\n\n.menu-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    > mat-icon[_ngcontent-%COMP%] {\n  color: dodgerblue;\n}\n\n.flip[_ngcontent-%COMP%]:hover {\n  transform: rotateY(180deg);\n}\n\n.mobile-menu[_ngcontent-%COMP%] {\n  margin: 28.5px 20px;\n}\n\n@media (max-width: 420px) {\n  .mobile-menu[_ngcontent-%COMP%] {\n    margin: 0px;\n  }\n}\n\n.icon-navbar[_ngcontent-%COMP%] {\n  font-size: 26px;\n  transition: 0.4s;\n}\n\n.icon-navbar[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n}\n\n.mat-button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: dodgerblue;\n}\n\n.cart-list[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n\n.cart-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500 !important;\n  color: #333;\n}\n\n.cart-price[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #777;\n}\n\n.cart-delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #909090;\n}\n\n.cart-delete[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n}\n\n.cart-total[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #ff3d71;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sYXlvdXRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsOENBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpREFBQTtFQUNBLFFBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxPQUFBO0FBQUY7O0FBR0E7RUFDRSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLGNBQUE7RUFBRjs7RUFHQTtJQUNFLGFBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0FBREY7O0FBSUE7RUFDRSwwQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsV0FBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xheW91dHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xyXG4gIC5sb2dvIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5yZXNpemUtaW1nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1lbnUtd2FycHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbjogMTJweCAwO1xyXG59XHJcblxyXG4ubWVudS1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW4tbWVtdSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgdWwgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1hcmdpbjogNDBweCAyMHB4O1xyXG59XHJcblxyXG4ubWFpbi1tZW51IHVsIGxpID4gYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICMxZDI1NDc7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgdWwgbGkgPiBhOmhvdmVyIHtcclxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxufVxyXG5cclxuLm1haW4tbWVudSB1bCBsaSA+IGE6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgdWwgbGkgPiBhOmhvdmVyOmFmdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBjb2xvcjogZG9kZ2VyYmx1ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aXZlOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kLW5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5kLWJsb2NrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmQtbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5kLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudS1zb2NpYWwgYSA+IG1hdC1pY29uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGNvbG9yOiAjMWQyNTQ3O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjksIDM3LCA3MSwgMC4xMik7XHJcbn1cclxuXHJcbi5tZW51LXNvY2lhbCBhOmhvdmVyID4gbWF0LWljb24ge1xyXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xyXG59XHJcblxyXG4uZmxpcDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5tb2JpbGUtbWVudSB7XHJcbiAgbWFyZ2luOiAyOC41cHggMjBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgLm1vYmlsZS1tZW51IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmljb24tbmF2YmFyIHtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmljb24tbmF2YmFyOmhvdmVyIHtcclxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxufVxyXG5cclxuLm1hdC1idXR0b24ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbn1cclxuXHJcbi5jYXJ0LWxpc3Qge1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4uY2FydC1uYW1lIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uY2FydC1wcmljZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5jYXJ0LWRlbGV0ZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjOTA5MDkwO1xyXG59XHJcblxyXG4uY2FydC1kZWxldGU6aG92ZXIge1xyXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xyXG59XHJcblxyXG4uY2FydC10b3RhbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogI2ZmM2Q3MTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return [{ type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }]; }, { sidenavToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "mUWD":
/*!********************************************************!*\
  !*** ./src/app/user/components/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_services_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/form.service */ "nLB4");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/cart.service */ "09FT");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/http.service */ "aX0s");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngmodule/material-carousel */ "XZNO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












function HomeComponent_mat_carousel_slide_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-carousel-slide", 19, 20);
} if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", slide_r2.image)("hideOverlay", true);
} }
const _c0 = function (a0) { return [a0]; };
function HomeComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_50_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const card_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addToCart(card_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, "/shop/product/" + card_r5.id_product));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx_r1.url + card_r5.cover), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r5.brand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u0E23\u0E2B\u0E31\u0E2A: ", card_r5.code, "-", card_r5.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, card_r5.sale), "\u0E3F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 9, card_r5.price), "\u0E3F");
} }
const _c1 = function () { return ["/shop"]; };
class HomeComponent {
    constructor(fs, cs, http) {
        this.fs = fs;
        this.cs = cs;
        this.http = http;
        this.slides = [
            { image: 'assets/img/home/carousel/1.png' },
            { image: 'assets/img/home/carousel/2.png' },
            { image: 'assets/img/home/carousel/3.png' },
        ];
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localhost;
        this.item = [];
    }
    ngOnInit() {
        this.getBestSeller();
    }
    addToCart(item) {
        const cartItem = this.getCartItem(item);
        const stock = cartItem.detail.stock;
        if (this.cs.getQuantity(cartItem) >= stock) {
            this.cs.checkQuantity(cartItem);
            return this.fs.openSnackBar(`You can not choose more items than available. In stock ${stock} items.`, 'X');
        }
        else {
            this.cs.addNewItem(cartItem);
            this.fs.openSnackBar(`The product ${cartItem.detail.code}-${cartItem.detail.color} has been added to cart`, 'X');
        }
    }
    getCartItem(item) {
        const cartItem = {
            detail: {
                id_product: item.id_product,
                code: item.code,
                brand: item.brand,
                color: item.color,
                sale: item.sale,
                price: item.price,
                stock: item.stock,
                cover: item.cover,
            },
            quantity: 1,
        };
        return cartItem;
    }
    getBestSeller() {
        this.http.getBestSeller(8).then((result) => (this.item = result));
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 51, vars: 16, consts: [[1, "mb-50", "fade-in"], [1, "carousel-container"], ["timings", "300ms ease-in", "interval", "3000", "color", "accent", "maxWidth", "auto", "proportion", "43", "slides", "3", "orientation", "ltr", 3, "autoplay", "loop", "hideArrows", "hideIndicators", "useKeyboard", "useMouseWheel"], ["overlayColor", "#00000040", 3, "image", "hideOverlay", 4, "ngFor", "ngForOf"], [1, "mb-50"], [1, "row"], [1, "col"], [1, "item", "fade-up"], ["src", "../../../../assets/img/home/megir.png", "alt", "shop", 1, "img-size"], [1, "img-cap"], [1, "img-link"], [1, "img-btn", 3, "routerLink"], ["src", "../../../../assets/img/home/megirw.png", "alt", "shop", 1, "img-size"], ["src", "../../../../assets/img/home/cadisen.png", "alt", "shop", 1, "img-size"], ["src", "../../../../assets/img/home/ruimas.png", "alt", "shop", 1, "img-size"], [1, "container"], [1, "row", "text-center", "mb-50"], [1, "header"], ["class", "col", 4, "ngFor", "ngForOf"], ["overlayColor", "#00000040", 3, "image", "hideOverlay"], ["matCarouselSlide", ""], [1, "item", "item-content"], [3, "routerLink"], ["mat-card-image", "", "alt", "Best Seller", 3, "src"], [1, "sub-title"], [1, "item-title"], [1, "content"], [1, "text-content"], [1, "text-danger"], [1, "text-gray"], ["mat-mini-fab", "", 1, "btn-icon", 3, "click"], [1, "icon-display"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_mat_carousel_slide_3_Template, 2, 2, "mat-carousel-slide", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Megir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Megir W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cadisen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Ruimas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " seller ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, HomeComponent_div_50_Template, 21, 15, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", true)("loop", true)("hideArrows", false)("hideIndicators", false)("useKeyboard", false)("useMouseWheel", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.item);
    } }, directives: [_ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_5__["MatCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_5__["MatCarouselSlideComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], styles: ["hr[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.item[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 22px;\n}\n\n.item-content[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 13px 20px rgba(88, 84, 84, 0.2);\n}\n\n.item-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.item-content[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #848484;\n  text-transform: capitalize;\n}\n\n.item-content[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin-bottom: 10px;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-transform: capitalize;\n}\n\n.item-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  place-content: center space-between;\n  align-items: center;\n}\n\n.item-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 500;\n}\n\n.item-content[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: #ff3d71;\n  margin-right: 8px;\n}\n\n.item-content[_ngcontent-%COMP%]   .text-gray[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9e9e9e;\n  text-decoration: line-through;\n}\n\n.btn-icon[_ngcontent-%COMP%] {\n  background-color: #1e90ff;\n}\n\n.icon-display[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n.img-size[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: -webkit-max-content;\n  max-height: max-content;\n}\n\n.img-cap[_ngcontent-%COMP%] {\n  position: absolute;\n  visibility: hidden;\n  bottom: -20%;\n  width: 100%;\n  opacity: 0;\n  transition: 0.4s;\n}\n\n.img-link[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  right: 0;\n  opacity: 0;\n  visibility: hidden;\n  left: 0;\n  margin: 0 auto;\n  text-align: center;\n  transition: 0.4s;\n}\n\n.img-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n  margin: 0;\n  padding: 27px 44px;\n  color: #fff;\n  background: #60b0f4;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  border: 0;\n  font-weight: 500;\n  font-size: 18px;\n  letter-spacing: 1px;\n  line-height: 0;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: 0.5s;\n  border-radius: 4px;\n}\n\n.img-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: inset 8em 0 0 #1E90FF;\n}\n\n.img-cap[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  background: rgba(29, 37, 71, 0.5);\n  padding: 20px 0;\n  display: block;\n  font-size: 30px;\n  font-weight: 400;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.fade-up[_ngcontent-%COMP%]:hover   .img-cap[_ngcontent-%COMP%] {\n  visibility: visible;\n  bottom: 1%;\n  opacity: 1;\n}\n\n.fade-up[_ngcontent-%COMP%]:hover   .img-link[_ngcontent-%COMP%] {\n  visibility: visible;\n  top: 40%;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsK0NBQUE7QUFDRjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBREo7O0FBSUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQUZKOztBQUtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBSko7O0FBT0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFRRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUFOSjs7QUFVQTtFQUNFLHlCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFQRjs7QUFVQTtFQUNFLFdBQUE7RUFDQSwrQkFBQTtFQUFBLHVCQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxpQ0FBQTtBQVBGOztBQVdFO0VBQ0UsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBUko7O0FBYUU7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBVko7O0FBYUU7RUFDRSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBWEoiLCJmaWxlIjoic3JjL2FwcC91c2VyL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDIycHg7XHJcbn1cclxuXHJcbi5pdGVtLWNvbnRlbnQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDIwcHggcmdiYSg4OCwgODQsIDg0LCAwLjIpO1xyXG59XHJcblxyXG4uaXRlbS1jb250ZW50IHtcclxuICBoNiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLnN1Yi10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzg0ODQ4NDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tdGl0bGUge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnRleHQtY29udGVudCB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLnRleHQtZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjZmYzZDcxO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAudGV4dC1ncmF5IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLWljb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTkwZmY7XHJcbn1cclxuXHJcbi5pY29uLWRpc3BsYXkge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbn1cclxuXHJcbi5pbWctc2l6ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5pbWctY2FwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJvdHRvbTogLTIwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5pbWctbGluayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzAlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5pbWctYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMjdweCA0NHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICM2MGIwZjQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uaW1nLWJ0bjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgOGVtIDAgMCMxRTkwRkY7XHJcbn1cclxuXHJcbi5pbWctY2FwIHtcclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyOSwgMzcsIDcxLCAwLjUpO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbn1cclxuXHJcbi5mYWRlLXVwOmhvdmVyIHtcclxuICAuaW1nLWNhcCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgYm90dG9tOiAxJTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAuaW1nLWxpbmsge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _shared_services_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"] }, { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }, { type: _shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "n5nQ":
/*!********************************************************!*\
  !*** ./src/app/user/shared/command/focus.directive.ts ***!
  \********************************************************/
/*! exports provided: FocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusDirective", function() { return FocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ "qFsG");



class FocusDirective {
    constructor(mi) {
        this.mi = mi;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.mi.focus();
        }, 100);
    }
}
FocusDirective.ɵfac = function FocusDirective_Factory(t) { return new (t || FocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInput"])); };
FocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FocusDirective, selectors: [["", "matInputFocus", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matInputFocus]',
            }]
    }], function () { return [{ type: _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInput"] }]; }, null); })();


/***/ }),

/***/ "nLB4":
/*!******************************************************!*\
  !*** ./src/app/user/shared/services/form.service.ts ***!
  \******************************************************/
/*! exports provided: FormService, HighlightPipe, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightPipe", function() { return HighlightPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_subdistrict__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/subdistrict */ "DjzE");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");




class FormService {
    constructor(snackbar) {
        this.snackbar = snackbar;
        this.track = '';
        this.options = src_app_subdistrict__WEBPACK_IMPORTED_MODULE_1__["SubDistrict"];
        this.toHighlight = '';
    }
    onScrolltoTop(el, duration) {
        let to = 0;
        let start = el.scrollTop, change = to - start, currentTime = 0, increment = 20;
        const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1)
                return (c / 2) * t * t + b;
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
        if (el.scrollTop > 100)
            animateScroll();
    }
    openSnackBar(message, action) {
        this.snackbar.open(message, action, {
            duration: 2000,
        });
    }
    filter(value) {
        if (!value)
            return;
        const filterValue = value.toLowerCase();
        this.toHighlight = value;
        return this.options
            .filter((option) => option.toLowerCase().includes(filterValue))
            .slice(0, 20);
    }
}
FormService.ɵfac = function FormService_Factory(t) { return new (t || FormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
FormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FormService, factory: FormService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, null); })();
class HighlightPipe {
    transform(text, search) {
        const pattern = search
            .replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
            .split(' ')
            .filter((t) => t.length > 0)
            .join('|');
        const regex = new RegExp(pattern, 'gi');
        return search ? text.replace(regex, (match) => `<b>${match}</b>`) : text;
    }
}
HighlightPipe.ɵfac = function HighlightPipe_Factory(t) { return new (t || HighlightPipe)(); };
HighlightPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "highlight", type: HighlightPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'highlight' }]
    }], null, null); })();
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control &&
            control.invalid &&
            (control.dirty || control.touched || isSubmitted));
    }
}


/***/ }),

/***/ "oJWT":
/*!**********************************************************************!*\
  !*** ./src/app/user/components/check-out/nocart/nocart.component.ts ***!
  \**********************************************************************/
/*! exports provided: NocartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NocartComponent", function() { return NocartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/shop"]; };
class NocartComponent {
    constructor() {
        this.img = 'assets/img/shopping-cart.png';
    }
    ngOnInit() { }
}
NocartComponent.ɵfac = function NocartComponent_Factory(t) { return new (t || NocartComponent)(); };
NocartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NocartComponent, selectors: [["app-nocart"]], decls: 8, vars: 3, consts: [[1, "no-cart"], [1, "text-center"], ["alt", "No items", 3, "src"], ["mat-button", "", 3, "routerLink"]], template: function NocartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You have no items in your shopping cart.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Continue Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".no-cart[_ngcontent-%COMP%] {\n  width: 480px;\n  margin: 0 auto;\n}\n.no-cart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  height: auto;\n}\n.no-cart[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #dc143c;\n}\n.no-cart[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  color: #fff;\n  background-color: #1e90ff;\n}\n@media (max-width: 380px) {\n  .no-cart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 600px) {\n  .no-cart[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL2NoZWNrLW91dC9ub2NhcnQvbm9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFDSjtBQUVFO0VBQ0UsY0FBQTtBQUFKO0FBR0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBREo7QUFLQTtFQUVJO0lBQ0UsV0FBQTtFQUhKO0FBQ0Y7QUFPQTtFQUNFO0lBQ0UsV0FBQTtFQUxGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL2NvbXBvbmVudHMvY2hlY2stb3V0L25vY2FydC9ub2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tY2FydCB7XHJcbiAgd2lkdGg6IDQ4MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgY29sb3I6ICNkYzE0M2M7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU5MGZmO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgLm5vLWNhcnQge1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubm8tY2FydCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NocartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nocart',
                templateUrl: './nocart.component.html',
                styleUrls: ['./nocart.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rlWh":
/*!******************************************************************!*\
  !*** ./src/app/user/components/check-out/check-out.component.ts ***!
  \******************************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/form.service */ "nLB4");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/cart.service */ "09FT");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/http.service */ "aX0s");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nocart_nocart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nocart/nocart.component */ "oJWT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

























const _c0 = ["fileInput"];
function CheckOutComponent_app_nocart_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nocart");
} }
function CheckOutComponent_div_6_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return [a0]; };
function CheckOutComponent_div_6_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r6.url + element_r26.detail.cover), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c2 = function () { return ["/shop"]; };
function CheckOutComponent_div_6_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Continue Shopping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function CheckOutComponent_div_6_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckOutComponent_div_6_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", element_r27.detail.code, "-", element_r27.detail.color, " ");
} }
function CheckOutComponent_div_6_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 27);
} }
function CheckOutComponent_div_6_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckOutComponent_div_6_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r28.detail.sale), " ");
} }
function CheckOutComponent_div_6_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 27);
} }
function CheckOutComponent_div_6_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckOutComponent_div_6_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckOutComponent_div_6_td_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const element_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.Remove(element_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckOutComponent_div_6_td_16_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const element_r29 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.Add(element_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r29.quantity);
} }
function CheckOutComponent_div_6_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 27);
} }
function CheckOutComponent_div_6_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckOutComponent_div_6_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r33.quantity * element_r33.detail.sale), " ");
} }
function CheckOutComponent_div_6_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r19.total), "\u0E3F");
} }
function CheckOutComponent_div_6_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckOutComponent_div_6_td_24_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckOutComponent_div_6_td_24_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const element_r34 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.onDelete(element_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckOutComponent_div_6_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 27);
} }
function CheckOutComponent_div_6_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 32);
} }
function CheckOutComponent_div_6_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 33);
} }
function CheckOutComponent_div_6_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 34);
} }
function CheckOutComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CheckOutComponent_div_6_th_3_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CheckOutComponent_div_6_td_4_Template, 3, 3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CheckOutComponent_div_6_td_5_Template, 3, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CheckOutComponent_div_6_th_7_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CheckOutComponent_div_6_td_8_Template, 2, 2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CheckOutComponent_div_6_td_9_Template, 1, 0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CheckOutComponent_div_6_th_11_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CheckOutComponent_div_6_td_12_Template, 3, 3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CheckOutComponent_div_6_td_13_Template, 1, 0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CheckOutComponent_div_6_th_15_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CheckOutComponent_div_6_td_16_Template, 9, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CheckOutComponent_div_6_td_17_Template, 1, 0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CheckOutComponent_div_6_th_19_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CheckOutComponent_div_6_td_20_Template, 3, 3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CheckOutComponent_div_6_td_21_Template, 4, 3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CheckOutComponent_div_6_th_23_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CheckOutComponent_div_6_td_24_Template, 4, 0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CheckOutComponent_div_6_td_25_Template, 1, 0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CheckOutComponent_div_6_tr_26_Template, 1, 0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CheckOutComponent_div_6_tr_27_Template, 1, 0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CheckOutComponent_div_6_tr_28_Template, 1, 0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r2.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matFooterRowDef", ctx_r2.displayedColumns);
} }
function CheckOutComponent_app_nocart_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nocart");
} }
function CheckOutComponent_div_9_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Full-Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckOutComponent_div_9_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckOutComponent_div_9_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sub-district / District / Province / Postal Code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckOutComponent_div_9_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r47 = ctx.$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, option_r47, ctx_r42.fs.toHighlight), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function CheckOutComponent_div_9_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckOutComponent_div_9_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckOutComponent_div_9_ngx_dropzone_image_preview_52_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-image-preview", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function CheckOutComponent_div_9_ngx_dropzone_image_preview_52_Template_ngx_dropzone_image_preview_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const file_r48 = ctx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r49.onRemoveReceipt(file_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", file_r48)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", file_r48.name, " (", file_r48.type, ")");
} }
function CheckOutComponent_div_9_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", item_r51.detail.code, "-", item_r51.detail.color, " \u00D7 ", item_r51.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, item_r51.detail.sale), "\u0E3F ");
} }
function CheckOutComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CheckOutComponent_div_9_Template_form_submit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Full Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "account_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CheckOutComponent_div_9_mat_error_9_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Address *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CheckOutComponent_div_9_mat_error_16_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sub-district / District / Province / Postal Code *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "home_work");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CheckOutComponent_div_9_mat_error_23_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-autocomplete", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CheckOutComponent_div_9_mat_option_26_Template, 4, 5, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CheckOutComponent_div_9_mat_error_34_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CheckOutComponent_div_9_mat_error_35_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Phone *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "stay_primary_portrait");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-hint", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Remark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "textarea", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ngx-dropzone", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckOutComponent_div_9_Template_ngx_dropzone_change_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.onSelectReceipt($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Drop images");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, CheckOutComponent_div_9_ngx_dropzone_image_preview_52_Template, 3, 4, "ngx-dropzone-image-preview", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h2", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, CheckOutComponent_div_9_div_65_Template, 6, 6, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.sform);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx_r4.matcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.fullname.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx_r4.matcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.address1.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r41)("errorStateMatcher", ctx_r4.matcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.address2.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 19, ctx_r4.filteredOptions));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx_r4.matcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.email.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.email.hasError("email") && !ctx_r4.email.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx_r4.matcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r4.phone == null ? null : ctx_r4.phone.value.length) || 0, " / 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", "image/*")("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.receiptFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.cartItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 21, ctx_r4.total), "\u0E3F");
} }
class CheckOutComponent {
    constructor(router, fb, cs, fs, http) {
        this.router = router;
        this.fb = fb;
        this.cs = cs;
        this.fs = fs;
        this.http = http;
        this.cartItem = this.cs.getItem;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].localhost;
        this.receiptFile = [];
        this.matcher = new _shared_services_form_service__WEBPACK_IMPORTED_MODULE_4__["MyErrorStateMatcher"]();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.displayedColumns = [
            'product',
            'code',
            'price',
            'quantity',
            'total',
            'action',
        ];
        this.total = 0;
        this.createShoppingForm();
    }
    ngOnInit() {
        this.subscription = this.cs.list$.subscribe((list) => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](list);
            this.total = this.cs.getTotal;
        });
        this.addressFilter();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onSubmit() {
        if (this.invalid)
            return;
        const formData = new FormData();
        this.setFormData = formData;
        this.newOrder(formData);
    }
    newOrder(body) {
        this.fs.track = '';
        this.http
            .createOrder(body)
            .then((result) => {
            this.fs.track = result.track;
            this.cs.removeCartItem();
            this.router.navigate(['paid']);
        })
            .catch((resError) => {
            this.fs.openSnackBar('Error. Please contact us.', 'X');
        });
    }
    onSelectReceipt(event) {
        if (this.receiptFile.length >= 1)
            this.onRemoveReceipt(event);
        this.receiptFile.push(...event.addedFiles);
        this.receipt.setValue(this.getReceiptName);
    }
    onRemoveReceipt(event) {
        this.receiptFile.splice(this.receiptFile.indexOf(event), 1);
        this.receipt.setValue(this.getReceiptName);
    }
    Add(item) {
        const stock = item.detail.stock;
        if (this.cs.getQuantity(item) >= stock) {
            return this.fs.openSnackBar(`You can not choose more items than available. In stock ${stock} items.`, 'X');
        }
        else {
            this.cs.addQuantity(item);
        }
    }
    Remove(item) {
        if (this.cs.getQuantity(item) <= 1)
            return;
        else
            this.cs.removeQuantity(item);
    }
    onDelete(item) {
        this.cs.removeItem(item);
    }
    addressFilter() {
        this.filteredOptions = this.sform.controls['address2'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((value) => this.fs.filter(value)));
    }
    createShoppingForm() {
        this.sform = this.fb.group({
            fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            phone: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(`^[0]{1}[6,8,9]{1}[0-9]{8}`),
                ],
            ],
            remark: [''],
            receipt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    set setFormData(formData) {
        formData.append('fullname', this.fullname.value);
        formData.append('address1', this.address1.value);
        formData.append('address2', this.address2.value);
        formData.append('email', this.email.value);
        formData.append('phone', this.phone.value);
        formData.append('remark', this.remark.value);
        formData.append('receipt', this.receiptFile[0]);
        formData.append('cartItem', JSON.stringify(this.cartItem));
    }
    get fullname() {
        return this.sform.get('fullname');
    }
    get address1() {
        return this.sform.get('address1');
    }
    get address2() {
        return this.sform.get('address2');
    }
    get email() {
        return this.sform.get('email');
    }
    get phone() {
        return this.sform.get('phone');
    }
    get remark() {
        return this.sform.get('remark');
    }
    get receipt() {
        return this.sform.get('receipt');
    }
    get getReceiptName() {
        return this.receiptFile.map((file) => file.name).join(', ');
    }
    get invalid() {
        return this.sform.invalid;
    }
}
CheckOutComponent.ɵfac = function CheckOutComponent_Factory(t) { return new (t || CheckOutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"])); };
CheckOutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckOutComponent, selectors: [["app-check-out"]], viewQuery: function CheckOutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, decls: 10, vars: 5, consts: [[1, "mb-50"], [1, "container-content"], ["stepper", ""], ["label", "Cart"], [4, "ngIf"], ["class", "table-container", 4, "ngIf"], ["label", "Details", 3, "stepControl"], ["fxLayout", "row warp", 4, "ngIf"], [1, "table-container"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "product"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "code"], ["matColumnDef", "price"], ["matColumnDef", "quantity"], ["matColumnDef", "total"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["matStepperNext", "", 1, "btn-grad", "btn-center"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "cart-col-image"], [1, "cart-image", 3, "src"], ["mat-footer-cell", ""], ["mat-button", "", 1, "btn", 3, "routerLink"], ["mat-icon-button", "", 3, "click"], [1, "cart-quan"], [1, "total"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""], ["fxLayout", "row warp"], ["fxFlex", "100", "fxFlex.gt-sm", "50", "ngClass.gt-sm", "pr-15"], ["fxLayout", "row warp", 3, "formGroup", "submit"], ["matInput", "", "formControlName", "fullname", 3, "errorStateMatcher"], ["matSuffix", ""], ["matInput", "", "formControlName", "address1", 3, "errorStateMatcher"], ["matInput", "", "formControlName", "address2", 3, "matAutocomplete", "errorStateMatcher"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], ["style", "font-size: 14px", 3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.gt-xs", "50", "ngClass.gt-xs", "pr-5"], ["matInput", "", "formControlName", "email", 3, "errorStateMatcher"], ["fxFlex", "100", "fxFlex.gt-xs", "50", "ngClass.gt-xs", "pl-5"], ["matInput", "", "formControlName", "phone", 3, "errorStateMatcher"], ["align", "end"], ["matInput", "", "formControlName", "remark"], ["fxFlex", "100"], ["id", "cover", 3, "accept", "multiple", "change"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngFor", "ngForOf"], ["matInput", "", "readonly", "", "formControlName", "receipt"], ["type", "submit", 1, "btn-grad", "btn-center"], ["fxFlex", "100", "fxFlex.gt-sm", "50", "ngClass.gt-sm", "pl-15"], [1, "main-order"], ["fxLayout", "row", "fxLayoutAlign", "space-between"], [1, "col-60"], [1, "col-40"], ["fxLayout", "row", "fxLayoutAlign", "space-between", "class", "main-text", 4, "ngFor", "ngForOf"], [1, "col-40", "total"], ["fxLayout", "row"], ["src", "../../../../assets/img/bank.jpg"], [2, "font-size", "14px", 3, "value"], [3, "innerHTML"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed"], ["fxLayout", "row", "fxLayoutAlign", "space-between", 1, "main-text"], [1, "col-60", "text-product"], [1, "col-40", "text-total"]], template: function CheckOutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-horizontal-stepper", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CheckOutComponent_app_nocart_5_Template, 1, 0, "app-nocart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheckOutComponent_div_6_Template, 31, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CheckOutComponent_app_nocart_8_Template, 1, 0, "app-nocart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CheckOutComponent_div_9_Template, 76, 23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.sform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length > 0);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStep"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _nocart_nocart_component__WEBPACK_IMPORTED_MODULE_11__["NocartComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatFooterRowDef"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperNext"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatFooterCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatFooterRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatSuffix"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatHint"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_19__["NgxDropzoneComponent"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_19__["ɵb"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_19__["NgxDropzoneImagePreviewComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _shared_services_form_service__WEBPACK_IMPORTED_MODULE_4__["HighlightPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  max-height: 800px;\n  max-width: 100%;\n  overflow: auto;\n}\n\n.cart-col-image[_ngcontent-%COMP%] {\n  display: block;\n  width: 100px;\n  height: 100px;\n  padding: 8px;\n}\n\n.cart-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.cart-quan[_ngcontent-%COMP%] {\n  padding: 0 2px;\n  font-size: 16px;\n}\n\n@media (max-width: 400px) {\n  img[_ngcontent-%COMP%] {\n    max-height: 210px;\n  }\n}\n\n@media (max-width: 600px) {\n  table[_ngcontent-%COMP%] {\n    width: 600px;\n  }\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  color: #fff;\n  background-color: #1e90ff;\n}\n\n.btn-grad[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #00c6ff 0%, #0072ff 51%, #00c6ff 100%);\n}\n\n.btn-grad[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding: 15px 45px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: 0.5s;\n  background-size: 200% auto;\n  color: white;\n  box-shadow: 0 0 20px #eee;\n  border-radius: 10px;\n  display: block;\n  cursor: pointer;\n}\n\n.btn-grad[_ngcontent-%COMP%]:hover {\n  background-position: right center;\n  color: #fff;\n  text-decoration: none;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #ff3d71;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  width: 100%;\n}\n\n.mat-toolbar-single-row[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.mat-toolbar-single-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n#uploadFile[_ngcontent-%COMP%] {\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  z-index: 9;\n  opacity: 0;\n  height: 100%;\n  cursor: pointer;\n  position: absolute;\n}\n\n.main-order[_ngcontent-%COMP%] {\n  border: 1px solid #d9d9d9;\n  padding: 30px;\n}\n\n.main-order[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .main-order[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.main-order[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.main-order[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 40px;\n}\n\n.main-order[_ngcontent-%COMP%]   .col-40[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.main-order[_ngcontent-%COMP%]   .col-60[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.bank[_ngcontent-%COMP%] {\n  background: #00a950;\n}\n\n.btn-center[_ngcontent-%COMP%] {\n  margin: 12px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL2NoZWNrLW91dC9jaGVjay1vdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLGtGQUFBO0FBREY7O0FBUUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFMRjs7QUFRQTtFQUNFLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBTEY7O0FBUUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTEY7O0FBUUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFMRjs7QUFRQTtFQUNFLHVCQUFBO0FBTEY7O0FBUUE7RUFDRSxZQUFBO0FBTEY7O0FBUUE7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQUxGOztBQU9FOztFQUVFLFNBQUE7RUFDQSxVQUFBO0FBTEo7O0FBUUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQU5KOztBQVNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFQSjs7QUFVRTtFQUNFLFVBQUE7QUFSSjs7QUFXRTtFQUNFLFVBQUE7QUFUSjs7QUFhQTtFQUNFLG1CQUFBO0FBVkY7O0FBYUE7RUFDRSxpQkFBQTtBQVZGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9jb21wb25lbnRzL2NoZWNrLW91dC9jaGVjay1vdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50YWJsZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtaGVpZ2h0OiA4MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5jYXJ0LWNvbC1pbWFnZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uY2FydC1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY2FydC1xdWFuIHtcclxuICBwYWRkaW5nOiAwIDJweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlOTBmZjtcclxufVxyXG5cclxuLmJ0bi1ncmFkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCxcclxuICAgICMwMGM2ZmYgMCUsXHJcbiAgICAjMDA3MmZmIDUxJSxcclxuICAgICMwMGM2ZmYgMTAwJVxyXG4gICk7XHJcbn1cclxuLmJ0bi1ncmFkIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZzogMTVweCA0NXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4ICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4tZ3JhZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnRvdGFsIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogI2ZmM2Q3MTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cgYnV0dG9uIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbiN1cGxvYWRGaWxlIHtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogOTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ubWFpbi1vcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG5cclxuICBoMixcclxuICBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuY29sLTQwIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG5cclxuICAuY29sLTYwIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFuayB7XHJcbiAgYmFja2dyb3VuZDogIzAwYTk1MDtcclxufVxyXG5cclxuLmJ0bi1jZW50ZXIge1xyXG4gIG1hcmdpbjogMTJweCBhdXRvO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckOutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-check-out',
                templateUrl: './check-out.component.html',
                styleUrls: ['./check-out.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"] }, { type: _shared_services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"] }, { type: _shared_services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"] }]; }, { fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput']
        }] }); })();


/***/ }),

/***/ "wf0l":
/*!***********************************************************************************!*\
  !*** ./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js ***!
  \***********************************************************************************/
/*! exports provided: Hooks, IntersectionObserverHooks, LAZYLOAD_IMAGE_HOOKS, LazyLoadImageDirective, LazyLoadImageModule, ScrollHooks, SharedHooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hooks", function() { return Hooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectionObserverHooks", function() { return IntersectionObserverHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZYLOAD_IMAGE_HOOKS", function() { return LAZYLOAD_IMAGE_HOOKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadImageDirective", function() { return LazyLoadImageDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadImageModule", function() { return LazyLoadImageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollHooks", function() { return ScrollHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedHooks", function() { return SharedHooks; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






function getNavigator() {
    return typeof window !== 'undefined' ? window.navigator : undefined;
}
function isChildOfPicture(element) {
    return Boolean(element.parentElement && element.parentElement.nodeName.toLowerCase() === 'picture');
}
function isImageElement(element) {
    return element.nodeName.toLowerCase() === 'img';
}
function setImage(element, imagePath, useSrcset) {
    if (isImageElement(element)) {
        if (useSrcset && 'srcset' in element) {
            element.srcset = imagePath;
        }
        else {
            element.src = imagePath;
        }
    }
    else {
        element.style.backgroundImage = `url('${imagePath}')`;
    }
    return element;
}
function setSources(attrName) {
    return (image) => {
        const sources = image.parentElement.getElementsByTagName('source');
        for (let i = 0; i < sources.length; i++) {
            const attrValue = sources[i].getAttribute(attrName);
            if (attrValue) {
                // Check if `srcset` is supported by the current browser
                if ('srcset' in sources[i]) {
                    sources[i].srcset = attrValue;
                }
                else {
                    sources[i].src = attrValue;
                }
            }
        }
    };
}
const setSourcesToDefault = setSources('defaultImage');
const setSourcesToLazy = setSources('lazyLoad');
const setSourcesToError = setSources('errorImage');
function setImageAndSources(setSourcesFn) {
    return (element, imagePath, useSrcset) => {
        if (isImageElement(element) && isChildOfPicture(element)) {
            setSourcesFn(element);
        }
        if (imagePath) {
            setImage(element, imagePath, useSrcset);
        }
    };
}
const setImageAndSourcesToDefault = setImageAndSources(setSourcesToDefault);
const setImageAndSourcesToLazy = setImageAndSources(setSourcesToLazy);
const setImageAndSourcesToError = setImageAndSources(setSourcesToError);

class Hooks {
    constructor() {
        this.navigator = getNavigator();
    }
    setPlatformId(platformId) {
        this.platformId = platformId;
    }
    onDestroy(attributes) { }
    onAttributeChange(newAttributes) { }
}

const cssClassNames = {
    loaded: 'ng-lazyloaded',
    loading: 'ng-lazyloading',
    failed: 'ng-failed-lazyloaded',
};
function removeCssClassName(element, cssClassName) {
    element.className = element.className.replace(cssClassName, '');
}
function addCssClassName(element, cssClassName) {
    if (!element.className.includes(cssClassName)) {
        element.className += ` ${cssClassName}`;
    }
}
function hasCssClassName(element, cssClassName) {
    return element.className && element.className.includes(cssClassName);
}

class SharedHooks extends Hooks {
    setup(attributes) {
        setImageAndSourcesToDefault(attributes.element, attributes.defaultImagePath, attributes.useSrcset);
        addCssClassName(attributes.element, cssClassNames.loading);
        if (hasCssClassName(attributes.element, cssClassNames.loaded)) {
            removeCssClassName(attributes.element, cssClassNames.loaded);
        }
    }
    finally(attributes) {
        addCssClassName(attributes.element, cssClassNames.loaded);
        removeCssClassName(attributes.element, cssClassNames.loading);
    }
    loadImage(attributes) {
        if (this.skipLazyLoading(attributes)) {
            // Set the image right away for bots for better SEO
            return [attributes.imagePath];
        }
        const { element, useSrcset, imagePath, decode } = attributes;
        let img;
        if (isImageElement(element) && isChildOfPicture(element)) {
            const parentClone = element.parentNode.cloneNode(true);
            img = parentClone.getElementsByTagName('img')[0];
            setSourcesToLazy(img);
            setImage(img, imagePath, useSrcset);
        }
        else {
            img = new Image();
            if (isImageElement(element) && element.referrerPolicy) {
                img.referrerPolicy = element.referrerPolicy;
            }
            if (isImageElement(element) && element.sizes) {
                img.sizes = element.sizes;
            }
            if (useSrcset && 'srcset' in img) {
                img.srcset = imagePath;
            }
            else {
                img.src = imagePath;
            }
        }
        if (decode && img.decode) {
            return img.decode().then(() => imagePath);
        }
        return new Promise((resolve, reject) => {
            img.onload = () => resolve(imagePath);
            img.onerror = () => reject(null);
        });
    }
    setErrorImage(error, attributes) {
        const { element, useSrcset, errorImagePath } = attributes;
        setImageAndSourcesToError(element, errorImagePath, useSrcset);
        addCssClassName(element, cssClassNames.failed);
    }
    setLoadedImage(imagePath, attributes) {
        const { element, useSrcset } = attributes;
        setImageAndSourcesToLazy(element, imagePath, useSrcset);
    }
    isDisabled() {
        // Disable if SSR and the user isn't a bot
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this.platformId) && !this.isBot();
    }
    skipLazyLoading(attributes) {
        return this.isBot(attributes);
    }
    isBot(attributes) {
        var _a;
        if ((_a = this.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) {
            return /googlebot|bingbot|yandex|baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora\ link\ preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp|duckduckbot/i.test(this.navigator.userAgent);
        }
        return false;
    }
}

class IntersectionObserverHooks extends SharedHooks {
    constructor() {
        super(...arguments);
        this.observers = new WeakMap();
        this.intersectionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.uniqKey = {};
    }
    getObservable(attributes) {
        if (this.skipLazyLoading(attributes)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ isIntersecting: true });
        }
        if (attributes.customObservable) {
            return attributes.customObservable;
        }
        const scrollContainerKey = attributes.scrollContainer || this.uniqKey;
        const options = {
            root: attributes.scrollContainer || null,
        };
        if (attributes.offset) {
            options.rootMargin = `${attributes.offset}px`;
        }
        let observer = this.observers.get(scrollContainerKey);
        if (!observer) {
            observer = new IntersectionObserver((entrys) => this.loadingCallback(entrys), options);
            this.observers.set(scrollContainerKey, observer);
        }
        observer.observe(attributes.element);
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create((obs) => {
            const subscription = this.intersectionSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((entry) => entry.target === attributes.element)).subscribe(obs);
            return () => {
                subscription.unsubscribe();
                observer.unobserve(attributes.element);
            };
        });
    }
    isVisible(event) {
        return event.isIntersecting;
    }
    loadingCallback(entrys) {
        entrys.forEach((entry) => this.intersectionSubject.next(entry));
    }
}
IntersectionObserverHooks.ɵfac = function IntersectionObserverHooks_Factory(t) { return ɵIntersectionObserverHooks_BaseFactory(t || IntersectionObserverHooks); };
IntersectionObserverHooks.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: IntersectionObserverHooks, factory: IntersectionObserverHooks.ɵfac });
const ɵIntersectionObserverHooks_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](IntersectionObserverHooks);

function lazyLoadImage(hooks, attributes) {
    return (evntObservable) => {
        return evntObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((data) => attributes.onStateChange.emit({ reason: 'observer-emit', data })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((event) => hooks.isVisible(event, attributes)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => attributes.onStateChange.emit({ reason: 'start-loading' })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(() => hooks.loadImage(attributes)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => attributes.onStateChange.emit({ reason: 'mount-image' })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((imagePath) => hooks.setLoadedImage(imagePath, attributes)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => attributes.onStateChange.emit({ reason: 'loading-succeeded' })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            attributes.onStateChange.emit({ reason: 'loading-failed', data: error });
            hooks.setErrorImage(error, attributes);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => {
            attributes.onStateChange.emit({ reason: 'finally' });
            hooks.finally(attributes);
        }));
    };
}

const LAZYLOAD_IMAGE_HOOKS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('LazyLoadImageHooks');

class LazyLoadImageDirective {
    constructor(el, ngZone, platformId, hooks) {
        this.onStateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // Emits an event on every state change
        this.elementRef = el;
        this.ngZone = ngZone;
        this.propertyChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
        this.hooks = hooks;
        this.hooks.setPlatformId(platformId);
        this.uid = Math.random().toString(36).substr(2, 9);
    }
    ngOnChanges() {
        if (this.debug === true && !this.debugSubscription) {
            this.debugSubscription = this.onStateChange.subscribe((e) => console.log(e));
        }
        this.propertyChanges$.next({
            element: this.elementRef.nativeElement,
            imagePath: this.lazyImage,
            defaultImagePath: this.defaultImage,
            errorImagePath: this.errorImage,
            useSrcset: this.useSrcset,
            offset: this.offset ? this.offset | 0 : 0,
            scrollContainer: this.scrollTarget,
            customObservable: this.customObservable,
            decode: this.decode,
            onStateChange: this.onStateChange,
            id: this.uid,
        });
    }
    ngAfterContentInit() {
        if (this.hooks.isDisabled()) {
            return null;
        }
        this.ngZone.runOutsideAngular(() => {
            this.loadSubscription = this.propertyChanges$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((attributes) => this.hooks.onAttributeChange(attributes)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((attributes) => attributes.onStateChange.emit({ reason: 'setup' })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((attributes) => this.hooks.setup(attributes)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((attributes) => {
                if (!attributes.imagePath) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["never"])();
                }
                return this.hooks.getObservable(attributes).pipe(lazyLoadImage(this.hooks, attributes));
            }))
                .subscribe({
                next: () => null,
            });
        });
    }
    ngOnDestroy() {
        var _a, _b;
        this.propertyChanges$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe({ next: (attributes) => this.hooks.onDestroy(attributes) })
            .unsubscribe();
        (_a = this.loadSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.debugSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
}
LazyLoadImageDirective.ɵfac = function LazyLoadImageDirective_Factory(t) { return new (t || LazyLoadImageDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](LAZYLOAD_IMAGE_HOOKS)); };
LazyLoadImageDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: LazyLoadImageDirective, selectors: [["", "lazyLoad", ""]], inputs: { lazyImage: ["lazyLoad", "lazyImage"], defaultImage: "defaultImage", errorImage: "errorImage", scrollTarget: "scrollTarget", customObservable: "customObservable", offset: "offset", useSrcset: "useSrcset", decode: "decode", debug: "debug" }, outputs: { onStateChange: "onStateChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
LazyLoadImageDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"],] }] },
    { type: Hooks, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [LAZYLOAD_IMAGE_HOOKS,] }] }
];
LazyLoadImageDirective.propDecorators = {
    lazyImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['lazyLoad',] }],
    defaultImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    errorImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    scrollTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    customObservable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    useSrcset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    decode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    debug: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onStateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](LazyLoadImageDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[lazyLoad]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
            }] }, { type: Hooks, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [LAZYLOAD_IMAGE_HOOKS]
            }] }]; }, { onStateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], lazyImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['lazyLoad']
        }], defaultImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], errorImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], scrollTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], customObservable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], useSrcset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], decode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], debug: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();

class LazyLoadImageModule {
}
LazyLoadImageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LazyLoadImageModule });
LazyLoadImageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function LazyLoadImageModule_Factory(t) { return new (t || LazyLoadImageModule)(); }, providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: IntersectionObserverHooks }] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LazyLoadImageModule, { declarations: [LazyLoadImageDirective], exports: [LazyLoadImageDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](LazyLoadImageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [LazyLoadImageDirective],
                exports: [LazyLoadImageDirective],
                providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: IntersectionObserverHooks }]
            }]
    }], null, null); })();

class Rect {
    constructor(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    static fromElement(element) {
        const { left, top, right, bottom } = element.getBoundingClientRect();
        if (left === 0 && top === 0 && right === 0 && bottom === 0) {
            return Rect.empty;
        }
        else {
            return new Rect(left, top, right, bottom);
        }
    }
    static fromWindow(_window) {
        return new Rect(0, 0, _window.innerWidth, _window.innerHeight);
    }
    inflate(inflateBy) {
        this.left -= inflateBy;
        this.top -= inflateBy;
        this.right += inflateBy;
        this.bottom += inflateBy;
    }
    intersectsWith(rect) {
        return rect.left < this.right && this.left < rect.right && rect.top < this.bottom && this.top < rect.bottom;
    }
    getIntersectionWith(rect) {
        const left = Math.max(this.left, rect.left);
        const top = Math.max(this.top, rect.top);
        const right = Math.min(this.right, rect.right);
        const bottom = Math.min(this.bottom, rect.bottom);
        if (right >= left && bottom >= top) {
            return new Rect(left, top, right, bottom);
        }
        else {
            return Rect.empty;
        }
    }
}
Rect.empty = new Rect(0, 0, 0, 0);

class ScrollHooks extends SharedHooks {
    constructor() {
        super(...arguments);
        this.getWindow = () => window;
        this.scrollListeners = new WeakMap();
        // Only create one scroll listener per target and share the observable.
        // Typical, there will only be one observable per application
        this.getScrollListener = (scrollTarget) => {
            if (!scrollTarget || typeof scrollTarget.addEventListener !== 'function') {
                console.warn('`addEventListener` on ' + scrollTarget + ' (scrollTarget) is not a function. Skipping this target');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["empty"])();
            }
            const scrollListener = this.scrollListeners.get(scrollTarget);
            if (scrollListener) {
                return scrollListener;
            }
            const srollEvent = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create((observer) => {
                const eventName = 'scroll';
                const handler = (event) => observer.next(event);
                const options = { passive: true, capture: false };
                scrollTarget.addEventListener(eventName, handler, options);
                return () => scrollTarget.removeEventListener(eventName, handler, options);
            });
            const listener = this.sampleObservable(srollEvent);
            this.scrollListeners.set(scrollTarget, listener);
            return listener;
        };
    }
    getObservable(attributes) {
        if (this.skipLazyLoading(attributes)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])('load');
        }
        else if (attributes.customObservable) {
            return attributes.customObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(''));
        }
        else if (attributes.scrollContainer) {
            return this.getScrollListener(attributes.scrollContainer);
        }
        return this.getScrollListener(this.getWindow());
    }
    isVisible(event, attributes) {
        const elementBounds = Rect.fromElement(attributes.element);
        if (elementBounds === Rect.empty) {
            return false;
        }
        const windowBounds = Rect.fromWindow(this.getWindow());
        elementBounds.inflate(attributes.offset);
        if (attributes.scrollContainer) {
            const scrollContainerBounds = Rect.fromElement(attributes.scrollContainer);
            const intersection = scrollContainerBounds.getIntersectionWith(windowBounds);
            return elementBounds.intersectsWith(intersection);
        }
        else {
            return elementBounds.intersectsWith(windowBounds);
        }
    }
    sampleObservable(obs, scheduler) {
        return obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["sampleTime"])(100, scheduler), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(''));
    }
}

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-lazyload-image.js.map

/***/ }),

/***/ "zRJ8":
/*!********************************************************!*\
  !*** ./src/app/user/components/shop/shop.component.ts ***!
  \********************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/form.service */ "nLB4");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/cart.service */ "09FT");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/http.service */ "aX0s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




























function ShopComponent_mat_radio_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ShopComponent_mat_radio_button_17_Template_mat_radio_button_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.brandsFilter($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", brand_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](brand_r4.viewValue);
} }
const _c0 = function (a0) { return [a0]; };
function ShopComponent_mat_list_item_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, "/shop/product/" + card_r7.id_product));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx_r1.url + card_r7.cover), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, "/shop/product/" + card_r7.id_product));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", card_r7.code, "-", card_r7.color, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r7.brand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, card_r7.sale), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 10, card_r7.price), " ");
} }
function ShopComponent_mat_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sort_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sort_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sort_r8.viewValue, " ");
} }
function ShopComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_div_62_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const card_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.addToCart(card_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, "/shop/product/" + card_r9.id_product));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultImage", ctx_r3.loadingImage)("lazyLoad", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx_r3.url + card_r9.cover));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r9.brand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \u0E23\u0E2B\u0E31\u0E2A: ", card_r9.code, "-", card_r9.color, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, card_r9.sale), "\u0E3F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 10, card_r9.price), "\u0E3F");
} }
const _c1 = function () { return [12]; };
class ShopComponent {
    constructor(cdr, route, fs, cs, http) {
        this.cdr = cdr;
        this.route = route;
        this.fs = fs;
        this.cs = cs;
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].localhost;
        this.bestSeller = [];
        this.selectBrand = '';
        this.brand = this.route.snapshot.params.brand;
        this.brands = [
            { value: '', viewValue: 'All' },
            { value: 'megir m', viewValue: 'Megir M' },
            { value: 'megir w', viewValue: 'Megir W' },
            { value: 'cadisen', viewValue: 'Cadisen' },
            { value: 'ruimas', viewValue: 'Ruimas' },
        ];
        this.from = 1;
        this.to = 1300;
        this.sorting = [
            { value: 'a-z', viewValue: 'Ascending', active: 'code', direction: 'asc' },
            {
                value: 'z-a',
                viewValue: 'Descending',
                active: 'code',
                direction: 'desc',
            },
            {
                value: 'low',
                viewValue: 'Price, low to high',
                active: 'price',
                direction: 'asc',
            },
            {
                value: 'high',
                viewValue: 'Price, high to low',
                active: 'price',
                direction: 'desc',
            },
        ];
        this.slides = [
            { image: 'assets/img/home/carousel/1.png' },
            { image: 'assets/img/home/carousel/2.png' },
            { image: 'assets/img/home/carousel/3.png' },
        ];
        this.loadingImage = 'assets/img/loading.png';
    }
    ngOnInit() {
        this.cdr.detectChanges();
        this.getBestSeller();
        this.getProduct();
    }
    ngOnDestroy() {
        if (this.dataSource)
            this.dataSource.disconnect();
    }
    getBestSeller() {
        this.http.getBestSeller(4).then((result) => (this.bestSeller = result));
    }
    getProduct() {
        this.http.getProduct().then((result) => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](result);
            this.dataSource.paginator = this.paginator;
            this.obs = this.dataSource.connect();
            this.filterPredicate = this.dataSource.filterPredicate;
            this.onRouteBrand(this.brand);
        });
    }
    addToCart(item) {
        const cartItem = this.getCartItem(item);
        const stock = cartItem.detail.stock;
        if (this.cs.getQuantity(cartItem) >= stock) {
            this.cs.checkQuantity(cartItem);
            return this.fs.openSnackBar(`You can not choose more items than available. In stock ${stock} items.`, 'X');
        }
        else {
            this.cs.addNewItem(cartItem);
            this.fs.openSnackBar(`The product ${cartItem.detail.code}-${cartItem.detail.color} has been added to cart`, 'X');
        }
    }
    applyFilter(filterValue) {
        this.setfilterPredicate();
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (!filterValue) {
            this.brandsFilter(this.selectBrand);
            this.sellFilter();
        }
    }
    applySorting() {
        const sort = this.sorting.find((item) => item.value == this.selectedSort);
        this.sort.active = sort.active;
        this.sort.direction = sort.direction;
        this.dataSource.data = this.dataSource.sortData(this.dataSource.data, this.sort);
    }
    brandsFilter(brandValue) {
        if (!brandValue) {
            this.dataSource.filter = '';
        }
        else {
            this.setfilterPredicate();
            brandValue = brandValue.trim();
            brandValue = brandValue.toLocaleLowerCase();
            this.dataSource.filter = brandValue;
            this.selectBrand = brandValue;
        }
    }
    sellFilter() {
        this.dataSource.filterPredicate = (data, filter) => {
            if (this.from && this.to) {
                if (this.selectBrand) {
                    return (data.sale >= this.from &&
                        data.sale <= this.to &&
                        data.brand.toLocaleLowerCase() == this.selectBrand);
                }
                else {
                    return data.sale >= this.from && data.sale <= this.to;
                }
            }
            return true;
        };
        this.dataSource.filter = '' + Math.random();
    }
    onNextorPrePage() {
        setTimeout(() => {
            const el = document.querySelector('mat-sidenav-content') || window;
            const duration = 600;
            this.fs.onScrolltoTop(el, duration);
        }, 100);
    }
    onRouteBrand(brand) {
        if (brand) {
            this.selectBrand =
                brand == 'megirm' ? 'megir m' : brand == 'megirw' ? 'megir w' : brand;
            this.brandsFilter(this.selectBrand);
        }
    }
    getCartItem(item) {
        const cartItem = {
            detail: {
                id_product: item.id_product,
                code: item.code,
                brand: item.brand,
                color: item.color,
                sale: item.sale,
                price: item.price,
                cover: item.cover,
                stock: item.stock,
            },
            quantity: 1,
        };
        return cartItem;
    }
    setfilterPredicate() {
        if (this.dataSource.filterPredicate != this.filterPredicate)
            this.dataSource.filterPredicate = this.filterPredicate;
    }
}
ShopComponent.ɵfac = function ShopComponent_Factory(t) { return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_form_service__WEBPACK_IMPORTED_MODULE_6__["FormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"])); };
ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopComponent, selectors: [["app-shop"]], viewQuery: function ShopComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 66, vars: 22, consts: [[1, "mb-50"], [1, "container"], [1, "row", "text-center"], [1, "header"], [1, "container-content"], ["fxLayout", "row", "fxLayoutAlign", "space-between", "fxLayout.lt-md", "column"], ["fxFlex", "25", "fxflex.lt-md", "100"], [1, "left-sidebar"], [1, "panel-body"], [1, "radio-group", 3, "ngModel", "ngModelChange"], ["class", "radio-button", 3, "value", "change", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "space-between", 1, "price-font"], ["fxLayout", "row", "fxLayoutAlign", "space-between"], [1, "price-slider", "from-slider", 3, "value", "max", "min", "input", "click"], [1, "price-slider", 3, "value", "max", "min", "input", "click"], ["fxHide.lt-md", "", 1, "best-seller"], ["fxLayout", "column"], [1, "best-title"], ["class", "best-content", 4, "ngFor", "ngForOf"], ["fxFlex", "75", "fxflex.lt-md", "100"], [1, "right-sidebar"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "space-between", 1, "right-content"], ["matInput", "", "type", "text", 1, "mat-font", 3, "keyup"], ["matSuffix", ""], [3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row warp"], ["class", "right-item", "fxFlex", "25", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxLayout", "column", "matSort", "", 4, "ngFor", "ngForOf"], [1, "right-item"], [1, "paginator-content", 3, "pageSizeOptions", "page"], [1, "radio-button", 3, "value", "change"], [1, "best-content"], [1, "best-media"], [3, "routerLink"], ["alt", "Best Seller", 3, "src"], [1, "best-info"], [1, "best-item-title"], [1, "best-sub-title"], [1, "best-sell"], [1, "best-price"], [3, "value"], ["fxFlex", "25", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxLayout", "column", "matSort", "", 1, "right-item"], [1, "item", "item-content"], ["mat-card-image", "", "alt", "Product", 3, "defaultImage", "lazyLoad"], [1, "sub-title"], [1, "item-title"], [1, "content"], [1, "text-content"], [1, "text-danger"], [1, "text-gray"], ["mat-mini-fab", "", 1, "btn-icon", 3, "click"], [1, "icon-display"]], template: function ShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-expansion-panel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-radio-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShopComponent_Template_mat_radio_group_ngModelChange_16_listener($event) { return ctx.selectBrand = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ShopComponent_mat_radio_button_17_Template, 3, 2, "mat-radio-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-expansion-panel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "From:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "To:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-slider", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ShopComponent_Template_mat_slider_input_36_listener($event) { return ctx.from = $event.value; })("click", function ShopComponent_Template_mat_slider_click_36_listener() { return ctx.sellFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-slider", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ShopComponent_Template_mat_slider_input_38_listener($event) { return ctx.to = $event.value; })("click", function ShopComponent_Template_mat_slider_click_38_listener() { return ctx.sellFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Best Seller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ShopComponent_mat_list_item_46_Template, 16, 18, "mat-list-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Search product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ShopComponent_Template_input_keyup_53_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Sorting items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShopComponent_Template_mat_select_ngModelChange_59_listener($event) { return ctx.selectedSort = $event; })("selectionChange", function ShopComponent_Template_mat_select_selectionChange_59_listener() { return ctx.applySorting(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ShopComponent_mat_option_60_Template, 2, 2, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ShopComponent_div_62_Template, 21, 16, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-paginator", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ShopComponent_Template_mat_paginator_page_65_listener() { return ctx.onNextorPrePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectBrand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.brands);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 15, ctx.from), "\u0E3F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 17, ctx.to), "\u0E3F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.from)("max", 1300)("min", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.to)("max", 1300)("min", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bestSeller);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedSort);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sorting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 19, ctx.obs));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSlider"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultShowHideDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatList"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardImage"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_23__["LazyLoadImageDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: [".left-sidebar[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border: 1px solid #ddd;\n  box-shadow: none !important;\n  margin-bottom: 20px;\n}\n.left-sidebar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.2;\n}\n.best-seller[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.best-title[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 15px;\n}\n.best-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: uppercase;\n  line-height: 1;\n  color: #333;\n}\n.best-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:before {\n  content: \"\";\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 0.0625rem;\n  bottom: 0.34375rem;\n  background-color: #c1c1c1;\n}\n.best-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:after {\n  content: \"\";\n  left: 0;\n  position: absolute;\n  width: 2.5rem;\n  height: 0.125rem;\n  background-color: #333;\n  bottom: 0.3125rem;\n}\n.best-content[_ngcontent-%COMP%] {\n  height: auto;\n  margin-bottom: 10px;\n  margin-right: -15px !important;\n  margin-left: -15px !important;\n}\n.best-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  cursor: pointer;\n}\n.best-media[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.best-media[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n.best-info[_ngcontent-%COMP%]   .best-item-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1;\n}\n.best-info[_ngcontent-%COMP%]   .best-sub-title[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #848484;\n  text-transform: capitalize;\n}\n.best-info[_ngcontent-%COMP%]   .best-sell[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  color: #ff3d71;\n}\n.best-info[_ngcontent-%COMP%]   .best-price[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n  text-decoration: line-through;\n}\n.right-sidebar[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  margin-bottom: 20px;\n  border-top: 1px solid #c1c1c1;\n}\n.right-sidebar[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n}\n.right-sidebar[_ngcontent-%COMP%]   .right-item[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n@media (max-width: 959px) {\n  .right-sidebar[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.radio-button[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.radio-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #777;\n}\n  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: #1e90ff !important;\n}\n  .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #1e90ff;\n}\n .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #1e90ff;\n}\n.price-font[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  font-weight: 400 !important;\n  color: #777;\n}\n.price-font[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  color: #333;\n}\n.price-slider[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n  .from-slider .mat-slider-thumb {\n  background-color: #1e90ff;\n}\n  .from-slider .mat-slider-thumb-label {\n  background-color: #60b0f4;\n}\n  .from-slider .mat-slider-track-fill {\n  background-color: #60b0f4;\n}\n.mat-font[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #777;\n}\n  .mat-select-value-text {\n  color: #777;\n}\n.item[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 22px;\n}\n.item-content[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 13px 20px rgba(33, 33, 33, 0.2);\n}\n.item-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: contents;\n}\n.item-content[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #848484;\n  text-transform: capitalize;\n}\n.item-content[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin-bottom: 10px;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-transform: capitalize;\n}\n.item-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  place-content: center space-between;\n  align-items: center;\n}\n.item-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n.item-content[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: #ff3d71;\n  margin-right: 8px;\n}\n.item-content[_ngcontent-%COMP%]   .text-gray[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9e9e9e;\n  text-decoration: line-through;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background-color: #1e90ff;\n}\n.icon-display[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 18px;\n}\n.mat-mini-fab[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n}\n.paginator-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #848484;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3Nob3Avc2hvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBRkY7QUFJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRko7QUFNQTtFQUNFLGdCQUFBO0FBSEY7QUFNQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFIRjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSEo7QUFNRTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBSko7QUFPRTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBTEo7QUFTQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7QUFORjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFOSjtBQVVBO0VBQ0Usa0JBQUE7QUFQRjtBQVVJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFSTjtBQWNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBWEo7QUFjRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQVpKO0FBZUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBYko7QUFnQkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBZEo7QUFrQkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFmRjtBQWlCRTtFQUNFLGlCQUFBO0FBZko7QUFrQkU7RUFDRSxlQUFBO0FBaEJKO0FBb0JBO0VBQ0U7SUFDRSxjQUFBO0VBakJGO0FBQ0Y7QUFvQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFsQkY7QUFxQkE7RUFDRSxtQkFBQTtBQWxCRjtBQW9CRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBeklRO0FBdUhaO0FBc0JBO0VBQ0Usb0NBQUE7QUFuQkY7QUFzQkE7RUFDRSx5QkFuSlU7QUFnSVo7QUFzQkE7RUFFRSxxQkF4SlU7QUFvSVo7QUF3QkU7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0E5SlE7QUF5SVo7QUF1Qkk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFyQk47QUEwQkE7RUFDRSxnQkFBQTtBQXZCRjtBQTBCQTtFQUNFLHlCQTdLVTtBQXNKWjtBQTBCQTtFQUNFLHlCQUFBO0FBdkJGO0FBMEJBO0VBQ0UseUJBQUE7QUF2QkY7QUEwQkE7RUFDRSxlQUFBO0VBQ0EsV0F6TFU7QUFrS1o7QUEwQkE7RUFDRSxXQTdMVTtBQXNLWjtBQTBCQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXZCRjtBQTBCQTtFQUNFLCtDQUFBO0FBdkJGO0FBMkJFO0VBQ0UsaUJBQUE7QUF4Qko7QUEyQkU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUF6Qko7QUE0QkU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQTFCSjtBQTZCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7QUEzQko7QUE4QkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUE1Qko7QUErQkU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUE3Qko7QUFnQ0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBOUJKO0FBa0NBO0VBQ0UseUJBQUE7QUEvQkY7QUFrQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUEvQkY7QUFrQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQS9CRjtBQWtDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUhBQUE7QUEvQkYiLCJmaWxlIjoic3JjL2FwcC91c2VyL2NvbXBvbmVudHMvc2hvcC9zaG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQtYmx1ZTogIzFlOTBmZjtcclxuJGZvbnQtZ3JheTogIzc3NztcclxuXHJcbi5sZWZ0LXNpZGViYXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICB9XHJcbn1cclxuXHJcbi5iZXN0LXNlbGxlciB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLmJlc3QtdGl0bGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHJcbiAgaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcblxyXG4gIGg0OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAwLjA2MjVyZW07XHJcbiAgICBib3R0b206IDAuMzQzNzVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xyXG4gIH1cclxuXHJcbiAgaDQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgaGVpZ2h0OiAwLjEyNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBib3R0b206IDAuMzEyNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5iZXN0LWNvbnRlbnQge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTE1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogLTE1cHggIWltcG9ydGFudDtcclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5iZXN0LW1lZGlhIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcblxyXG4gIGEge1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5iZXN0LWluZm8ge1xyXG4gIC5iZXN0LWl0ZW0tdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcblxyXG4gIC5iZXN0LXN1Yi10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzg0ODQ4NDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxuXHJcbiAgLmJlc3Qtc2VsbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2ZmM2Q3MTtcclxuICB9XHJcblxyXG4gIC5iZXN0LXByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgfVxyXG59XHJcblxyXG4ucmlnaHQtc2lkZWJhciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2MxYzFjMTtcclxuXHJcbiAgLnJpZ2h0LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICAucmlnaHQtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAucmlnaHQtc2lkZWJhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5yYWRpby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucmFkaW8tYnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogJGZvbnQtZ3JheTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRmb250LWJsdWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRmb250LWJsdWU7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWRcclxuICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAkZm9udC1ibHVlO1xyXG59XHJcblxyXG4ucHJpY2UtZm9udCB7XHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAkZm9udC1ncmF5O1xyXG5cclxuICAgIGIge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcmljZS1zbGlkZXIge1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZnJvbS1zbGlkZXIgLm1hdC1zbGlkZXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRmb250LWJsdWU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZnJvbS1zbGlkZXIgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MGIwZjQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZnJvbS1zbGlkZXIgLm1hdC1zbGlkZXItdHJhY2stZmlsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwYjBmNDtcclxufVxyXG5cclxuLm1hdC1mb250IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICRmb250LWdyYXk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZS10ZXh0IHtcclxuICBjb2xvcjogJGZvbnQtZ3JheTtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDIycHg7XHJcbn1cclxuXHJcbi5pdGVtLWNvbnRlbnQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDIwcHggcmdiYSgzMywgMzMsIDMzLCAwLjIpO1xyXG59XHJcblxyXG4uaXRlbS1jb250ZW50IHtcclxuICBhIHtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gIH1cclxuXHJcbiAgLnN1Yi10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzg0ODQ4NDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tdGl0bGUge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnRleHQtY29udGVudCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLnRleHQtZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjZmYzZDcxO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAudGV4dC1ncmF5IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLWljb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTkwZmY7XHJcbn1cclxuXHJcbi5pY29uLWRpc3BsYXkge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5tYXQtbWluaS1mYWIge1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxufVxyXG5cclxuLnBhZ2luYXRvci1jb250ZW50IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM4NDg0ODQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shop',
                templateUrl: './shop.component.html',
                styleUrls: ['./shop.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _shared_services_form_service__WEBPACK_IMPORTED_MODULE_6__["FormService"] }, { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"] }, { type: _shared_services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map