import { Component } from '@angular/core';
import { NgFor, CurrencyPipe } from '@angular/common';

interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.html',
  styleUrl: './product.css',
  imports: [NgFor, CurrencyPipe]
})
export class ProductComponent {
  products: Product[] = [
    {
      name: 'Classic Snickers',
      description: 'Original Snickers bar with nougat, caramel, and peanuts.',
      price: 1.99,
      image: 'https://www.snickers.com/sites/g/files/fnmzdf616/files/migrate-product-files/dryeqrv2efldaaoyceat.png'
    },
    {
      name: 'Snickers Almond',
      description: 'Delicious chocolate with crunchy almonds.',
      price: 2.49,
      image: 'https://www.snickers.com/sites/g/files/fnmzdf616/files/migrate-product-files/mptfmi3hb3tqulidmax2.png'
    },
    {
      name: 'Snickers Peanut Butter',
      description: 'Smooth peanut butter filling with chocolate coating.',
      price: 2.99,
      image: 'https://www.snickers.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf616/files/migrate-product-files/tmoourbhtkzvrvikyll9.png'
    },
    {
      name: 'Snickers Mini',
      description: 'Mini Snickers bars, perfect for snacking.',
      price: 3.49,
      image: 'https://www.snickers.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf616/files/migrate-product-files/wmlrzktxt33ncgfybtoi.png'
    }
  ];
}
