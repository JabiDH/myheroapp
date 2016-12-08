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
var shop_service_1 = require('../../shop/services/shop.service');
var ShopContentComponent = (function () {
    function ShopContentComponent(shopService) {
        this.shopService = shopService;
        this.shoppingCart = [];
        this.setItems();
        localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
    }
    ShopContentComponent.prototype.setItems = function () {
        var _this = this;
        this.shopService.getItems()
            .subscribe(function (items) {
            console.log(items);
            items.forEach(function (item) {
                item.Image = _this.shopService.apiUrl + "/api/fileupload/" + item.Id;
            });
            _this.items = items;
        }, function (err) {
            console.log(err);
        });
    };
    ShopContentComponent.prototype.setItemImages = function () {
        var _this = this;
        this.items.forEach(function (item) {
            _this.shopService.getItemImage(item.Id)
                .subscribe(function (img) {
                item.Image = img;
            }, function (err) {
                console.log(err);
            });
        });
    };
    ShopContentComponent.prototype.addItemToShoppingCart = function (item) {
        if (item) {
            var items = this.shoppingCart.values();
            var existingItem = items.return(function (x) { return x.Id == item.Id; }).value;
            if (existingItem) {
                existingItem.Quantity += 1;
            }
            else {
                item.Quantity = 1;
                this.shoppingCart.push(item);
            }
            var cart = JSON.parse(localStorage.getItem('shoppingCart'));
            this.shoppingCart = cart;
            localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
            console.log(this.shoppingCart);
        }
    };
    ShopContentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'shop-content',
            templateUrl: '../templates/shop-content-template.html'
        }), 
        __metadata('design:paramtypes', [shop_service_1.ShopService])
    ], ShopContentComponent);
    return ShopContentComponent;
}());
exports.ShopContentComponent = ShopContentComponent;
//# sourceMappingURL=shop-content.component.js.map