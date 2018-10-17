import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { AngularFirestore } from '@angular/fire/firestore';

import { Product } from '../../models/product.model';
import * as productAction from '../actions/products.action';

import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';


@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private db: AngularFirestore) {}

  @Effect()
  getProducts: Observable<Action> = this.actions$
    .ofType(productAction.GET_PRODUCTS).pipe(
      switchMap(() => {
        return this.db.collection<Product>('products').stateChanges().pipe(
          map(actions => {
            return actions.map(action => {
              return { id: action.payload.doc.id, ...action.payload.doc.data() };
            });
          }),
          map(payload => new productAction.ResponseSuccess(payload)),
          catchError(error => of(new productAction.ResponseError({error})))
        );
      })
    );

    @Effect()
    addProduct: Observable<Action> = this.actions$
      .ofType(productAction.ADD_PRODUCT).pipe(
        map((action: productAction.AddProduct) => action),
        switchMap((action) => {
          console.log('a', action.payload);
          const ref = this.db.collection<Product>('products');
          ref.add(action.payload);
          return ref.stateChanges().pipe(
            map(actions => {
              return actions.map(item => {
                return { id: item.payload.doc.id, ...item.payload.doc.data() };
              });
            }),
            map(payload => new productAction.ResponseSuccess(payload)),
            catchError(error => of(new productAction.ResponseError({error})))
          );
        })
      );
}
