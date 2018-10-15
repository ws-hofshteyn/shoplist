import { Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { BucketComponent } from './bucket/bucket.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  { path: '',  redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'bucket', component: BucketComponent },
  { path: 'list/:id', component: ProductComponent },
];
