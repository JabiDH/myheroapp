import { Component } from '@angular/core'
import { ShopService } from '../../shop/services/shop.service'
import { Item } from '../../shop/models/item'

@Component({
    moduleId: module.id,
    selector: 'shop-content',
    templateUrl: '../templates/shop-content-template.html'
})

export class ShopContentComponent {
    shoppingCart: Item[];
    items: Item[];
    constructor(private shopService: ShopService) {
        this.shoppingCart = [];
        this.setItems();
        localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
    }

    setItems() {
        this.shopService.getItems()
            .subscribe(items => {
                console.log(items);
                items.forEach(item => {
                    item.Image = `${this.shopService.apiUrl}/api/fileupload/${item.Id}`;
                });
                this.items = items;
            },
            err => {
                console.log(err);
            });

    }

    setItemImages() {
        this.items.forEach(item => {
            this.shopService.getItemImage(item.Id)
                .subscribe(img => {
                    item.Image = img
                },
                err => {
                    console.log(err);
                });
        })
    }

    addItemToShoppingCart(item: Item) {
        if (item) {
            let items = this.shoppingCart.values();
            let existingItem = items.return(x => x.Id == item.Id).value;
            if (existingItem) {
                existingItem.Quantity += 1;
            } else {
                item.Quantity = 1;
                this.shoppingCart.push(item);
            }
            let cart = JSON.parse(localStorage.getItem('shoppingCart'));
            this.shoppingCart = cart;
            localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
            console.log(this.shoppingCart);
        }

    }
}