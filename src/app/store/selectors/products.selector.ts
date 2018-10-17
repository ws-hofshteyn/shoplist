import { createSelector } from '@ngrx/store';

import { ProductState } from '../reducers/products.reducer';
import { AppState } from '../reducers';
import { Product } from '../../models/product.model';

export function getState(state: AppState): ProductState {
    return state.products;
}

export function fetchProducts(state: ProductState): Product[] {
    return state.products;
}

export const getProducts = createSelector(getState, fetchProducts);

