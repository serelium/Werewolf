webpackJsonp([0],{

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_room__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectPage = (function () {
    function ConnectPage(navCtrl, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    ConnectPage.prototype.connectToRoom = function () {
        if (/^[a-zA-Z0-9]+$/.test(this.username) && this.username) {
            this.showLoading("Connecting to room...");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__room_room__["a" /* RoomPage */], {
                username: this.username
            });
        }
        else {
            this.username = "";
            this.showAlert('Error', 'Invalid Username');
        }
    };
    ConnectPage.prototype.showLoading = function (message) {
        this.loading = this.loadingCtrl.create({
            content: message,
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    ConnectPage.prototype.showAlert = function (title, message) {
        var alertBox = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alertBox.present();
    };
    ConnectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-connect',template:/*ion-inline-start:"C:\Users\Phantom\Werewolf\src\pages\connect\connect.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Connect</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding no-bounce>\n  <div class="connect-box">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="username"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="img-box">\n      <img src="assets/imgs/werewolf.png" alt="avatar">\n    </div>\n    <button (click)="connectToRoom()" class="connect-button">Connect</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Phantom\Werewolf\src\pages\connect\connect.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ConnectPage);
    return ConnectPage;
}());

//# sourceMappingURL=connect.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_player__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_game__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var RoomPage = (function () {
    function RoomPage(db, navCtrl, navParams, alertCtrl) {
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.players = [];
        this.numberOfPlayers = 0;
        this.player = new __WEBPACK_IMPORTED_MODULE_3__entities_player__["a" /* Player */]("", "");
        this.roomRef = this.db.list('/room');
        this.playersRef = this.db.list('/room/players');
        this.subscribeToRoom();
    }
    RoomPage.prototype.subscribeToRoom = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var push;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) {
                            _this.playersSubscription = _this.playersRef.valueChanges().subscribe(function (data) {
                                _this.players = data;
                                _this.players.splice(8);
                                _this.numberOfPlayers = Object.keys(data).length;
                                _this.db.object('/room').update({ numberOfPlayers: _this.numberOfPlayers });
                                console.log(_this.player.userType);
                                if (_this.player.userType === "host") {
                                    var gameStart_1 = true;
                                    _this.players.forEach(function (p) {
                                        if (!p.isReady)
                                            gameStart_1 = false;
                                    });
                                    if (gameStart_1)
                                        _this.db.object('/room').update({ gameStart: true });
                                }
                                resolve();
                            });
                        })];
                    case 1:
                        _a.sent();
                        this.db.object('/room/gameStart').valueChanges().subscribe(function (data) {
                            if (data == true)
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__game_game__["a" /* GamePage */]);
                        });
                        console.log(this.numberOfPlayers);
                        if (this.numberOfPlayers >= 8) {
                            this.showAlert("Room Full", "Sorry the room is full!");
                            this.navCtrl.pop();
                        }
                        if (this.numberOfPlayers == 0)
                            this.player = new __WEBPACK_IMPORTED_MODULE_3__entities_player__["a" /* Player */](this.navParams.get("username"), "host");
                        else
                            this.player = new __WEBPACK_IMPORTED_MODULE_3__entities_player__["a" /* Player */](this.navParams.get("username"), "player");
                        push = this.playersRef.push(this.player);
                        push.then(function () {
                        });
                        this.playerKey = push.key;
                        return [2 /*return*/];
                }
            });
        });
    };
    RoomPage.prototype.readyButton = function () {
        this.player.isReady = !this.player.isReady;
        this.db.object('/room/players/' + this.playerKey).update({ isReady: this.player.isReady });
    };
    RoomPage.prototype.disconnectPlayer = function () {
        this.playersSubscription.unsubscribe();
        this.playersRef.remove(this.playerKey);
    };
    RoomPage.prototype.ionViewWillLeave = function () {
        this.disconnectPlayer();
    };
    RoomPage.prototype.ionViewDidLeave = function () {
        this.disconnectPlayer();
    };
    RoomPage.prototype.ionViewWillUnload = function () {
        this.disconnectPlayer();
    };
    /*backButtonAction(){
  
      console.log("BACK");
      this.disconnectPlayer();
    }*/
    RoomPage.prototype.showAlert = function (title, message) {
        var alertBox = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alertBox.present();
    };
    RoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-room',template:/*ion-inline-start:"C:\Users\Phantom\Werewolf\src\pages\room\room.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Room</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let player of players">\n      <div>\n        {{player.username}}\n      </div>\n      <div [style.color]="player.isReady ? \'#69f577\' : \'#f56356\'">\n        {{player.isReady ? "ready" : "not ready"}}\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer color="black">\n  <ion-toolbar>\n    <ion-title justify-content-center>\n      <button ion-button block outline (click)="readyButton()" class="ready-button" [style.background-color]="player.isReady ? \'#f56356\' : \'#69f577\'">\n        {{player.isReady ? "not-ready" : "ready"}}\n      </button>\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Phantom\Werewolf\src\pages\room\room.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], RoomPage);
    return RoomPage;
}());

//# sourceMappingURL=room.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GamePage = (function () {
    function GamePage(db, navCtrl, navParams, alertCtrl) {
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    GamePage.prototype.showAlert = function (title, message) {
        var alertBox = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alertBox.present();
    };
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game',template:/*ion-inline-start:"C:\Users\Phantom\Werewolf\src\pages\game\game.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Game</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Phantom\Werewolf\src\pages\game\game.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], GamePage);
    return GamePage;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(299);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_connect_connect__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_game_game__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_room_room__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var config = {
    apiKey: "AIzaSyA6HMFsowdkWKqCGl9366P6t0nUwHCTMYo",
    authDomain: "werewolf-79add.firebaseapp.com",
    databaseURL: "https://werewolf-79add.firebaseio.com",
    projectId: "werewolf-79add",
    storageBucket: "werewolf-79add.appspot.com",
    messagingSenderId: "496617749912"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_connect_connect__["a" /* ConnectPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_room_room__["a" /* RoomPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_game_game__["a" /* GamePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_connect_connect__["a" /* ConnectPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_room_room__["a" /* RoomPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_game_game__["a" /* GamePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_connect_connect__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, toastCtrl, statusBar, splashScreen) {
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_connect_connect__["a" /* ConnectPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        /*platform.registerBackButtonAction(() => {
    
          let activeView = this.nav.getActive();
    
          if(activeView != null){
            if(this.nav.canGoBack()) {
              this.nav.pop();
            }else if (typeof activeView.instance.backButtonAction === 'function')
              activeView.instance.backButtonAction();
            else this.nav.parent.select(0); // goes to the first tab
          }
        });*/
        /*platform.registerBackButtonAction(() => {
    
          let view = this.nav.getActive();
          if (view.component.name == "ConnectPage") {
            //Double check to exit app
            if (new Date().getTime() - this.lastTimeBackPress < 3000) {
              this.platform.exitApp(); //Exit from app
            } else {
              let toast = this.toastCtrl.create({
                message: 'Press back again to exit App',
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              this.lastTimeBackPress = new Date().getTime();
            }
          } else {
            // go to previous page
            this.nav.pop({});
          }
        });*/
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('navCtrl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Phantom\Werewolf\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Phantom\Werewolf\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
var Player = (function () {
    function Player(username, userType) {
        this.username = username;
        this.isReady = false;
        this.userType = userType;
    }
    return Player;
}());

//# sourceMappingURL=player.js.map

/***/ })

},[278]);
//# sourceMappingURL=main.js.map