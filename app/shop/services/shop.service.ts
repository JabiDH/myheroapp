import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Order } from '../../shop/models/order'
import { Item } from '../../shop/models/item'



@Injectable()
export class ShopService {
    public apiUrl = "http://localhost:62412";
    constructor(private http: Http) {

    }

    getOrders(): Observable<Order[]> {
        let url = `${this.apiUrl}/api/orders`;
        let headers = new Headers({
            contentType: 'application/json',
            dataType: 'jsonp'
        });
        return this.http.get(url)
            .map(response => response.json() as Order[])
            .catch((err: any) => {
                console.log(err);
                return Observable.throw(err.json().error || 'Server Error');
            });
    }

    getItems(): Observable<Item[]> {
        let url = `${this.apiUrl}/api/items`;
        let headers = new Headers({
            contentType: 'application/json',
            dataType: 'jsonp'
        });
        return this.http.get(url)
            .map(response => response.json() as Item[])
            .catch((err: any) => {
                console.log(err);
                return Observable.throw(err.json().error || 'Server Error');
            });
    }

    getItemImage(id: number): Observable<string> {
        let url = `${apiUrl}/api/fileupload/${id}`;
        let file = {};
        return this.http.get(url)
            .map(response => {
                //window.open(window.URL.createObjectURL(file), "new");
                file = new Blob([response.blob()]);
                return window.URL.createObjectURL(file);                
            })
            .catch((err: any) => {
                console.log(err);
                return Observable.throw(err.json().error || 'Server Error');
            });
    }
}