import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products: Product[] = [
    new Product(1, 'Tomato'),
    new Product(2, 'Potato'),
    new Product(3, 'Apples')
  ];

  constructor() { }

  ngOnInit() {
  }

}
