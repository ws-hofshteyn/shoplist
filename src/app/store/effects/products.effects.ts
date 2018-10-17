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
}
