import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  productCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;

  constructor(db: AngularFirestore) {
    this.productCollection = db.collection<Product>('products');
    this.products = this.productCollection.valueChanges();
  }

  ngOnInit() {
    this.productCollection.get();
  }

}
