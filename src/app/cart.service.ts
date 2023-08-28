import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Product} from './products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  items:Product[] = [];

  addToCart(product:Product){
    this.items.push(product);
  }

  getItems():Product[]{
    return this.items;
  }

  clearCart():Product[]{
    this.items=[]
    return this.items;
  }

  getShippingPrices():Observable<{type:string, price:number}[]>{
    return this.http.get<{type:string, price:number}[]>('/assets/shipping.json');
  }
}
