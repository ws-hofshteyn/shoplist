import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { AngularFirestore } from '@angular/fire/firestore';

import { Product } from '../../models/product.model';
import * as productAction from '../actions/products.action';

import { Observable, of } from 'rxjs';
import { switchMap, map, mergeMap } from 'rxjs/operators';


@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private db: AngularFirestore) {}

  @Effect()
  getProducts: Observable<Action> = this.actions$
    .ofType(productAction.GET_PRODUCTS).pipe(
      switchMap(() => {
        return this.db.collection<Product>('products').valueChanges()
        .pipe(
          map((payload) => {
            return {
              type: 'Get_products_success',
              payload: payload
            };
          })
        );
      })
      // mergeMap(actions => {
      //   // console.log('actions', actions);
      //   // return actions;
      //   const products = [];
      //   actions.forEach(action => products.push(action.payload.doc.data()));
      //   return {
      //     type: 'Get_products_success',
      //     payload: products
      //   };
      // }),
      // map(action => {
      //   return {
      //     type: 'Get_products_success',
      //     payload: {id: action.payload.doc.id, ...action.payload.doc.data()}
      //   };
      // })
    );
}
