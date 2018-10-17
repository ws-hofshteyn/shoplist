import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product.model';
import * as productActions from '../../store/actions/products.action';
import { AppState } from '../../store/reducers';
import { getProducts } from '../../store/selectors/products.selector';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new productActions.GetProducts);
    this.products = this.store.select(getProducts);
  }

}
