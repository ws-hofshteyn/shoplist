import { Product } from '../../models/product.model';
import * as productAction from '../actions/products.action';

export interface ProductState {
  products: Product[];
  loading: boolean;
}

export const initialState: ProductState = {
  products: [],
  loading: false,
};

export function productsReducer(state: ProductState = initialState, action: productAction.Actions) {

  switch (action.type) {
    case productAction.GET_PRODUCTS:
      return {...state, loading: true};

    case productAction.GET_PRODUCTS_SUCCESS:
      return {...state, products: action.payload, loading: false};

    default:
        return state;
  }
}
