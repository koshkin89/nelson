import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        imagePath: 'http://nelson.themerex.net/wp-content/uploads/2019/04/product-copyright-1-1.jpg',
        name: 'Absorptive Brush',
        description: 'Hair shaving brush with bristles made of pure badger hair for soft touch.',
        price: 50,
      },
      {
        imagePath: 'http://nelson.themerex.net/wp-content/uploads/2019/04/product-copyright-2-2.jpg',
        name: 'Pine Beard Butter Premium',
        description: 'The finest beard softener and anti-itch butter, perfect for any beard.',
        price: 95,
      },
      {
        imagePath: 'http://nelson.themerex.net/wp-content/uploads/2019/04/product-copyright-4-4.jpg',
        name: 'Grooming cream',
        description: 'Created specifically to promote a sense of calm and soothe the skin.',
        price: 85,
      },
      {
        imagePath: 'http://nelson.themerex.net/wp-content/uploads/2019/04/product-copyright-5-5.jpg',
        name: 'Invigorating Soap',
        description: 'Soap made for men with activated charcoal and is paraben and sulfate free. ',
        price: 55,
      },
      {
        imagePath: 'http://nelson.themerex.net/wp-content/uploads/2019/04/product-copyright-8-8.jpg',
        name: 'Hair & Body Cream',
        description: 'A non-greasy cream-wax provides super hold and shape for sculpting hair. ',
        price: 75,
      },
      {
        imagePath: 'http://nelson.themerex.net/wp-content/uploads/2019/04/product-copyright-7-7.jpg',
        name: 'Herbal Essence Oil',
        description: 'Soap made for men with activated charcoal and is paraben and sulfate free. ',
        price: 55,
      }
    ]
  }

}
