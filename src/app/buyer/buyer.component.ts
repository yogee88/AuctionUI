import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { productbid } from '../models/productbid';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  buyerForm : any;

  constructor(private apiService : ApiService, private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.buyer();
  }
  buyer(){
     this.buyerForm = new FormGroup({
       emailId : new FormControl('', Validators.required),
       bidAmount : new FormControl('', Validators.required),
       name : new FormControl('', Validators.required)
     })
  }

  onSubmit(){
    if(this.buyerForm.valid){
      var productBid ={
        emailId : this.buyerForm.value['emailId'],
        bidAmount: this.buyerForm.value['bidAmount'],
        name : this.buyerForm.value['name']
      };
      this.apiService.postProductBids(productBid).subscribe(() =>{
        //this.router.navigateByUrl(this.returnUrl);
        console.log('bid success');
      },
      error => {
        console.log('error');
      })
    }
  }
}
