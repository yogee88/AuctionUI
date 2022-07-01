import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { product } from '../models/product';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  productdata: product[] = [];
  isProductsAvailable:boolean = false;
  userId: string = '';

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('id') ?? '';
    this.apiService.getproducts(this.userId).subscribe(x => {
      this.productdata = x;
      this.isProductsAvailable = this.productdata != null && this.productdata.length > 0;
    },
    error => {
      console.log(error);
    })
  }

}
