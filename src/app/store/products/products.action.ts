import { Action } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const GET_PRODUCTS = 'Get_products';
export const GET_PRODUCTS_SUCCESS = 'Get_products_success';

export class GetProducts implements Action {
  readonly type = GET_PRODUCTS;
  constructor(public payload = '') {}
}

export class GetProductsSuccess implements Action {
  readonly type = GET_PRODUCTS_SUCCESS;
  constructor(public payload?: Product[]) {}
}

export type Actions = GetProducts | GetProductsSuccess;
