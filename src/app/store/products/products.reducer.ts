import { Product } from '../../models/product.model';
import * as productAction from './products.action';

export interface State {
  products: Product[];
  loading: boolean;
}

export const initialState: State = {
  products: [],
  loading: false,
};

export function ProductsReducer(state: State = initialState, action: productAction.Actions) {

  switch (action.type) {
    case productAction.GET_PRODUCTS:
      return {...state, loading: true};

    case productAction.GET_PRODUCTS_SUCCESS:
      return {products: action.payload, loading: false};

    default:
        return state;
  }
}
