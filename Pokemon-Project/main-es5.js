function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/main/main.component */
    "./src/app/pages/main/main.component.ts");

    var routes = [{
      path: '',
      component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Pokemon-Project';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/main/main.component */
    "./src/app/pages/main/main.component.ts");
    /* harmony import */


    var _components_pockemon_details_pockemon_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/pockemon-details/pockemon-details.component */
    "./src/app/components/pockemon-details/pockemon-details.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _pages_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"], _components_pockemon_details_pockemon_details_component__WEBPACK_IMPORTED_MODULE_9__["PockemonDetailsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _pages_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"], _components_pockemon_details_pockemon_details_component__WEBPACK_IMPORTED_MODULE_9__["PockemonDetailsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pockemon-details/pockemon-details.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/pockemon-details/pockemon-details.component.ts ***!
    \***************************************************************************/

  /*! exports provided: PockemonDetailsComponent */

  /***/
  function srcAppComponentsPockemonDetailsPockemonDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PockemonDetailsComponent", function () {
      return PockemonDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_pockemon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/pockemon.service */
    "./src/app/services/pockemon.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PockemonDetailsComponent_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://pokeres.bastionbot.org/images/pokemon/", ctx_r8.pockemon == null ? null : ctx_r8.pockemon.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Photo of ", ctx_r8.pockemon == null ? null : ctx_r8.pockemon.name, "");
      }
    }

    function PockemonDetailsComponent_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r11 == null ? null : type_r11.type == null ? null : type_r11.type.name);
      }
    }

    function PockemonDetailsComponent_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stat_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r12 == null ? null : stat_r12.stat == null ? null : stat_r12.stat.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r12 == null ? null : stat_r12.base_stat);
      }
    }

    var PockemonDetailsComponent =
    /*#__PURE__*/
    function () {
      function PockemonDetailsComponent(pockemonService) {
        _classCallCheck(this, PockemonDetailsComponent);

        this.pockemonService = pockemonService;
        this.subscription1 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
      }

      _createClass(PockemonDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.url) {
            this.getPockemon();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription1.unsubscribe();
        }
      }, {
        key: "getPockemon",
        value: function getPockemon() {
          var _this = this;

          this.subscription1.add(this.pockemonService.getPockemonDetails(this.url).subscribe(function (pockemon) {
            _this.pockemon = pockemon;
            console.log(pockemon);
          }));
        }
      }]);

      return PockemonDetailsComponent;
    }();

    PockemonDetailsComponent.ɵfac = function PockemonDetailsComponent_Factory(t) {
      return new (t || PockemonDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pockemon_service__WEBPACK_IMPORTED_MODULE_2__["PockemonService"]));
    };

    PockemonDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PockemonDetailsComponent,
      selectors: [["app-pockemon-details"]],
      inputs: {
        url: "url"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 24,
      vars: 6,
      consts: [[1, "card"], ["mat-card-image", "", 3, "src", "alt", 4, "ngIf"], [1, "card-content"], [1, "name"], [1, "card-characteristic"], ["class", "type", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["mat-card-image", "", 3, "src", "alt"], [1, "type"]],
      template: function PockemonDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PockemonDetailsComponent_img_1_Template, 1, 2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PockemonDetailsComponent_span_12_Template, 2, 1, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PockemonDetailsComponent_tr_13_Template, 5, 2, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Weight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Total moves");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pockemon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pockemon == null ? null : ctx.pockemon.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pockemon == null ? null : ctx.pockemon.types);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pockemon == null ? null : ctx.pockemon.stats);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pockemon == null ? null : ctx.pockemon.weight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pockemon == null ? null : ctx.pockemon.moves.length);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"]],
      styles: [".card[_ngcontent-%COMP%] {\n  width: 350px;\n  background-color: #ffffff;\n  border-radius: 0;\n  border: 1px solid black;\n  color: black;\n  margin: 20px;\n  flex: 1 1 100%;\n}\n.card-content[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.card-content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]::first-letter {\n  text-transform: uppercase;\n}\n.card-characteristic[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.card-characteristic[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .card-characteristic[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 5px 0;\n}\n.card-characteristic[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::first-letter {\n  text-transform: uppercase;\n}\n.card-characteristic[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n  padding: 0 3px;\n}\n.card-characteristic[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]::first-letter {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2NrZW1vbi1kZXRhaWxzL0M6XFxVc2Vyc1xcc2xhdmlcXE9uZURyaXZlXFzQoNCw0LHQvtGH0LjQuSDRgdGC0L7Qu1xcUG9rZW1vbi1Qcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxwb2NrZW1vbi1kZXRhaWxzXFxwb2NrZW1vbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BvY2tlbW9uLWRldGFpbHMvcG9ja2Vtb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7QURDSTtFQUNFLHlCQUFBO0FDQ047QURJSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ0ZOO0FES0k7O0VBRUUsdUJBQUE7RUFDQSxjQUFBO0FDSE47QURNSTtFQUNFLHlCQUFBO0FDSk47QURPSTtFQUNFLGNBQUE7QUNMTjtBRE9NO0VBQ0UseUJBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9ja2Vtb24tZGV0YWlscy9wb2NrZW1vbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBmbGV4OiAxIDEgMTAwJTtcclxuXHJcbiAgJi1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5uYW1lOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi1jaGFyYWN0ZXJpc3RpYyB7XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlLFxyXG4gICAgdGQge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdGQ6OmZpcnN0LWxldHRlciB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLnR5cGUge1xyXG4gICAgICBwYWRkaW5nOiAwIDNweDtcclxuXHJcbiAgICAgICY6OmZpcnN0LWxldHRlciB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuY2FyZCB7XG4gIHdpZHRoOiAzNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAyMHB4O1xuICBmbGV4OiAxIDEgMTAwJTtcbn1cbi5jYXJkLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQtY29udGVudCAubmFtZTo6Zmlyc3QtbGV0dGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jYXJkLWNoYXJhY3RlcmlzdGljIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4uY2FyZC1jaGFyYWN0ZXJpc3RpYyB0YWJsZSxcbi5jYXJkLWNoYXJhY3RlcmlzdGljIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLmNhcmQtY2hhcmFjdGVyaXN0aWMgdGQ6OmZpcnN0LWxldHRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uY2FyZC1jaGFyYWN0ZXJpc3RpYyAudHlwZSB7XG4gIHBhZGRpbmc6IDAgM3B4O1xufVxuLmNhcmQtY2hhcmFjdGVyaXN0aWMgLnR5cGU6OmZpcnN0LWxldHRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PockemonDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pockemon-details',
          templateUrl: './pockemon-details.component.html',
          styleUrls: ['./pockemon-details.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_pockemon_service__WEBPACK_IMPORTED_MODULE_2__["PockemonService"]
        }];
      }, {
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/main/main.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/main/main.component.ts ***!
    \**********************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppPagesMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_pockemon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/pockemon.service */
    "./src/app/services/pockemon.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_pockemon_details_pockemon_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/pockemon-details/pockemon-details.component */
    "./src/app/components/pockemon-details/pockemon-details.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function MainComponent_mat_card_5_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
      }

      if (rf & 2) {
        var pockemon_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://pokeres.bastionbot.org/images/pokemon/", pockemon_r1 == null ? null : pockemon_r1.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Photo of ", pockemon_r1.name, "");
      }
    }

    function MainComponent_mat_card_5_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r5.type.name);
      }
    }

    function MainComponent_mat_card_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_mat_card_5_Template_mat_card_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var pockemon_r1 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.clickPockemon(pockemon_r1.url);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_mat_card_5_img_1_Template, 1, 2, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MainComponent_mat_card_5_span_6_Template, 2, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pockemon_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pockemon_r1 == null ? null : pockemon_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pockemon_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pockemon_r1.types);
      }
    }

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent(pockemonService) {
        _classCallCheck(this, MainComponent);

        this.pockemonService = pockemonService;
        this.ifClicked = false;
        this.subscription1 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.subscription2 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.subscription3 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPockemons("http://pokeapi.co/api/v2/pokemon/?limit=12");
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription1.unsubscribe();
          this.subscription2.unsubscribe();
        }
      }, {
        key: "getPockemons",
        value: function getPockemons(url) {
          var _this2 = this;

          this.subscription1.add(this.pockemonService.getPockemons(url).subscribe(function (pockemons) {
            _this2.pockemons = pockemons.results;
            _this2.nextPockemons = pockemons.next;

            _this2.getTypes();
          }));
        }
      }, {
        key: "getTypes",
        value: function getTypes() {
          var _this3 = this;

          this.pockemons.forEach(function (pockemon) {
            _this3.subscription2.add(_this3.pockemonService.getPockemonDetails(pockemon.url).subscribe(function (res) {
              pockemon.types = res.types;
              pockemon.id = res.id;
            }));
          });
        }
      }, {
        key: "clickPockemon",
        value: function clickPockemon(url) {
          this.pockemonClickedUrl = url;
          this.ifClicked = true;
        }
      }, {
        key: "loadMoreData",
        value: function loadMoreData() {
          this.getPockemons(this.nextPockemons);
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pockemon_service__WEBPACK_IMPORTED_MODULE_2__["PockemonService"]));
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 12,
      vars: 4,
      consts: [[1, "title-wrapper"], [1, "title-wrapper-title"], [1, "page-wrapper"], [1, "cards"], ["class", "cards-pockemon", 3, "click", 4, "ngFor", "ngForOf"], [1, "btn-wrapper"], [3, "click"], [1, "details"], [3, "url"], [1, "cards-pockemon", 3, "click"], ["mat-card-image", "", 3, "src", "alt", 4, "ngIf"], [1, "name"], [1, "cards-pockemon-types"], ["class", "type", 4, "ngFor", "ngForOf"], ["mat-card-image", "", 3, "src", "alt"], [1, "type"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pokedex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MainComponent_mat_card_5_Template, 7, 3, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_8_listener() {
            return ctx.loadMoreData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Load More ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-pockemon-details", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pockemons);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.ifClicked ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx.pockemonClickedUrl);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_pockemon_details_pockemon_details_component__WEBPACK_IMPORTED_MODULE_4__["PockemonDetailsComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"]],
      styles: [".title-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.title-wrapper-title[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  width: 400px;\n  text-align: center;\n  padding: 10px 0;\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n.cards-pockemon[_ngcontent-%COMP%] {\n  width: 200px;\n  border: 1px solid black;\n  border-radius: 0;\n  background-color: #fff;\n  color: black;\n  flex: 1 1 25%;\n  margin: 20px;\n}\n.cards-pockemon[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.cards-pockemon[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]::first-letter {\n  text-transform: uppercase;\n}\n.cards-pockemon-types[_ngcontent-%COMP%] {\n  display: flex;\n}\n.cards-pockemon-types[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n  background-color: darkslategray;\n  color: #fff;\n  margin: 3px 5px;\n  padding: 7px 15px;\n  border-radius: 5px;\n}\n.cards-pockemon-types[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]::first-letter {\n  text-transform: uppercase;\n}\n.btn-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 30px 20px;\n}\n.btn-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #33bdef;\n  border-radius: 6px;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: Arial;\n  font-size: 24px;\n  font-weight: bold;\n  padding: 15px 0;\n  outline: none;\n}\n.btn-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #019ad2;\n}\n.btn-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  position: relative;\n  top: 1px;\n}\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.select[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9DOlxcVXNlcnNcXHNsYXZpXFxPbmVEcml2ZVxc0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LtcXFBva2Vtb24tUHJvamVjdC9zcmNcXGFwcFxccGFnZXNcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0NGO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjtBREdBO0VBQ0UsYUFBQTtBQ0FGO0FER0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDQUY7QURFRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNBSjtBREVJO0VBQ0Usa0JBQUE7QUNBTjtBREVNO0VBQ0UseUJBQUE7QUNBUjtBRElJO0VBQ0UsYUFBQTtBQ0ZOO0FESU07RUFDRSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0ZSO0FESVE7RUFDRSx5QkFBQTtBQ0ZWO0FEU0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNORjtBRE9FO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNMSjtBRE9JO0VBQ0UseUJBQUE7QUNMTjtBRE9JO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDTE47QURVQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ1BGO0FEVUE7RUFDRSxZQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgJi10aXRsZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbn1cclxuXHJcbi5wYWdlLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jYXJkcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICYtcG9ja2Vtb24ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZsZXg6IDEgMSAyNSU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAmOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLXR5cGVzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgIC50eXBlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbjogM3B4IDVweDtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgICY6OmZpcnN0LWxldHRlciB7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ0bi13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDMwcHggMjBweDtcclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNiZGVmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTlhZDI7XHJcbiAgICB9XHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAxcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VsZWN0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIiwiLnRpdGxlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi50aXRsZS13cmFwcGVyLXRpdGxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiA0MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5wYWdlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmNhcmRzLXBvY2tlbW9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IGJsYWNrO1xuICBmbGV4OiAxIDEgMjUlO1xuICBtYXJnaW46IDIwcHg7XG59XG4uY2FyZHMtcG9ja2Vtb24gLm5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZHMtcG9ja2Vtb24gLm5hbWU6OmZpcnN0LWxldHRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uY2FyZHMtcG9ja2Vtb24tdHlwZXMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNhcmRzLXBvY2tlbW9uLXR5cGVzIC50eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogM3B4IDVweDtcbiAgcGFkZGluZzogN3B4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jYXJkcy1wb2NrZW1vbi10eXBlcyAudHlwZTo6Zmlyc3QtbGV0dGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ0bi13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMzBweCAyMHB4O1xufVxuLmJ0bi13cmFwcGVyIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNiZGVmO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTVweCAwO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmJ0bi13cmFwcGVyIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTlhZDI7XG59XG4uYnRuLXdyYXBwZXIgYnV0dG9uOmFjdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxcHg7XG59XG5cbi5kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlbGVjdCB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_pockemon_service__WEBPACK_IMPORTED_MODULE_2__["PockemonService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/pockemon.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/pockemon.service.ts ***!
    \**********************************************/

  /*! exports provided: PockemonService */

  /***/
  function srcAppServicesPockemonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PockemonService", function () {
      return PockemonService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PockemonService =
    /*#__PURE__*/
    function () {
      function PockemonService(http) {
        _classCallCheck(this, PockemonService);

        this.http = http;
      }

      _createClass(PockemonService, [{
        key: "getPockemons",
        value: function getPockemons(url) {
          return this.http.get(url);
        }
      }, {
        key: "getPockemonDetails",
        value: function getPockemonDetails(url) {
          return this.http.get("".concat(url));
        }
      }, {
        key: "getPockemonType",
        value: function getPockemonType(id) {
          return this.http.get("http://pokeapi.co/api/v2/type/".concat(id));
        }
      }]);

      return PockemonService;
    }();

    PockemonService.ɵfac = function PockemonService_Factory(t) {
      return new (t || PockemonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PockemonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PockemonService,
      factory: PockemonService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PockemonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\slavi\OneDrive\Рабочий стол\Pokemon-Project\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map