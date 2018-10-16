import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Product } from './models/product.model';
import { State } from './store/products/products.reducer';
import * as productActions from './store/products/products.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shoplist';
  // products$: Observable<Product[]>;

  // constructor(private store: Store<State>) {
  //   this.store.dispatch(new productActions.GetProducts);

  // }
}
