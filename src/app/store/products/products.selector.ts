import { createSelector } from '@ngrx/store';

import { State } from './products.reducer';
import { Product } from '../../models/product.model';

export function getState(state: State): State {
    return state;
}

export function fetchProducts(state: State): Product[] {
    return state.products;
}

export const getProducts = createSelector(getState, fetchProducts);

