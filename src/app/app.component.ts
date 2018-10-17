import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/reducers';
import * as productActions from './store/actions/products.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shoplist';

  constructor(private store: Store<AppState>) {}

  ngOnInit () {
    this.store.dispatch(new productActions.GetProducts);
  }
}
