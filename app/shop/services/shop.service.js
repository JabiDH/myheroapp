"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var ShopService = (function () {
    function ShopService(http) {
        this.http = http;
        this.apiUrl = "http://localhost:62412";
    }
    ShopService.prototype.getOrders = function () {
        var url = this.apiUrl + "/api/orders";
        var headers = new http_1.Headers({
            contentType: 'application/json',
            dataType: 'jsonp'
        });
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(function (err) {
            console.log(err);
            return Rx_1.Observable.throw(err.json().error || 'Server Error');
        });
    };
    ShopService.prototype.getItems = function () {
        var url = this.apiUrl + "/api/items";
        var headers = new http_1.Headers({
            contentType: 'application/json',
            dataType: 'jsonp'
        });
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(function (err) {
            console.log(err);
            return Rx_1.Observable.throw(err.json().error || 'Server Error');
        });
    };
    ShopService.prototype.getItemImage = function (id) {
        var url = apiUrl + "/api/fileupload/" + id;
        var file = {};
        return this.http.get(url)
            .map(function (response) {
            //window.open(window.URL.createObjectURL(file), "new");
            file = new Blob([response.blob()]);
            return window.URL.createObjectURL(file);
        })
            .catch(function (err) {
            console.log(err);
            return Rx_1.Observable.throw(err.json().error || 'Server Error');
        });
    };
    ShopService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ShopService);
    return ShopService;
}());
exports.ShopService = ShopService;
//# sourceMappingURL=shop.service.js.map