import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';
import { product } from '../models/product';
import { productbid } from '../models/productbid';

@Component({
  selector: 'app-product-bids',
  templateUrl: './product-bids.component.html',
  styleUrls: ['./product-bids.component.css']
})
export class ProductBidsComponent implements OnInit {

  product: any ;    

  constructor(private apiService : ApiService, private route: ActivatedRoute) {      
  }

  ngOnInit(): void {      

    const ids = this.route.snapshot.paramMap.get('id');
    
    if(ids != null)
    {
      this.apiService.getProductBids(ids).subscribe(x => {
        this.product = x;
      },
      error => {
        console.log(error);
      })
    }
  }

}
