import { Action } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const GET_PRODUCTS = 'Get_products';
export const GET_PRODUCT = 'Get single Product';
export const ADD_PRODUCT = 'Add product';

export const RESPONSE_SUCCESS = 'Success';
export const RESPONSE_ERROR = 'Error';

export class GetProducts implements Action {
  readonly type = GET_PRODUCTS;
  constructor(public payload = '') {}
}
export class GetProduct implements Action {
  readonly type = GET_PRODUCT;
  constructor(public payload = '') {}
}

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;
  constructor(public payload: Product) {}
}

export class ResponseSuccess implements Action {
  readonly type = RESPONSE_SUCCESS;
  constructor(public payload?: any) {}
}

export class ResponseError implements Action {
  readonly type = RESPONSE_ERROR;
  constructor(public payload?: any) {}
}

export type Actions = GetProducts
  | ResponseSuccess
  | ResponseError
  | AddProduct;
