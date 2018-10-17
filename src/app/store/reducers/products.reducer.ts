import { Product } from '../../models/product.model';
import * as productAction from '../actions/products.action';

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: any;
}

export const initialState: ProductState = {
  products: [],
  loading: false,
  error: null
};

export function productsReducer(state: ProductState = initialState, action: productAction.Actions) {

  switch (action.type) {
    case productAction.GET_PRODUCTS:
      return {...state, loading: true};

    case productAction.ADD_PRODUCT:
      return {...state, loading: true};

    case productAction.RESPONSE_SUCCESS:
      return {...state, products: action.payload, loading: false};

    case productAction.RESPONSE_ERROR:
      return {...state, error: action.payload, loading: false};

    default:
        return state;
  }
}
