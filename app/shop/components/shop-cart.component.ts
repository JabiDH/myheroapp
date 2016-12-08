import { Component } from '@angular/core'
import { ShoppingCart } from '../../shop/models/shopping-cart'
import { Item } from '../../shop/models/item'

@Component({
    moduleId: module.id,
    selector: 'shop-cart',
    templateUrl: '../templates/shop-cart-template.html'
})

export class ShoppingCartComponent {
    shoppingCart: ShoppingCart;
    constructor() {
        let cart = JSON.parse(localStorage.getItem('shoppingCart'));
        this.processCart(cart);
    }

    processCart(cart: Item[]) {
        
    }
}