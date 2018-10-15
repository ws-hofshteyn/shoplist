import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products: Product[] = [
    new Product(1, 'Tomato'),
    new Product(2, 'Potato'),
    new Product(3, 'Apples')
  ];
  product: Product = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.products.forEach((p: Product) => {
        if (p.id === +params.id) {
          this.product = p;
        }
      });
    });
  }

}
