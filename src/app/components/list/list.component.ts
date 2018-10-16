import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '../../models/product.model';
// import * as ProductReducers from '../../store/reducers';
import * as productActions from '../../store/products/products.action';
import { State } from '../../store/products/products.reducer';
import { getProducts } from '../../store/products/products.selector';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(new productActions.GetProducts);
    // this.store.select(getProducts).subscribe(products => {
    //   console.log('products', products);
    // });
    this.products = this.store.select(getProducts);
    console.log('this.products', this.products);
  }

}
