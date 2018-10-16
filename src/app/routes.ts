import { Routes } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { BucketComponent } from './components/bucket/bucket.component';
import { ProductComponent } from './components/product/product.component';

export const routes: Routes = [
  { path: '',  redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'bucket', component: BucketComponent },
  { path: 'list/:id', component: ProductComponent },
];
