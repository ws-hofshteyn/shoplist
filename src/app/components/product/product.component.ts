  import { Component, OnInit } from '@angular/core';
  import { Store } from '@ngrx/store';
  import { ActivatedRoute, Params } from '@angular/router';
  import { AppState } from '../../store/reducers';
  import { getProducts } from '../../store/selectors/products.selector';
  import { Product } from '../../models/product.model';
  import { Observable, of, combineLatest, from } from 'rxjs';
  import { filter, map, switchMap, mergeMap } from 'rxjs/operators';

  @Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
  })
  export class ProductComponent implements OnInit {

    product: Product;

    constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

    ngOnInit() {

      this.route.params.pipe(
        switchMap((params: Params) => {
          return this.store.select(getProducts).pipe(
              mergeMap(products => {
                const source = from(products);
                return source.pipe(filter((product => product.id === params.id)));
              })
          );
        })
      ).subscribe(res => this.product = res);
    }
  }
