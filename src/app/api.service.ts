import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { product } from './models/product';
import { productbid } from './models/productbid';
import { IUser } from './models/user';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:5000/api/v1/';
  identityUrl = 'http://localhost:5002/api/v1/Account';  

  constructor(private http: HttpClient, private router: Router) { }

  getproducts(userid: string)  {
    return this.http.get<product[]>(this.baseUrl + 'Seller/api/Seller/Products/' + userid);
  }

  getProductBids(productid : string) {
    let headers = new HttpHeaders();
    var token =  localStorage.getItem('token') != null ? localStorage.getItem('token') : '';
    headers = new HttpHeaders().set("Authorization", "Bearer " + token);;
    return this.http.get<productbid[]>(this.baseUrl + 'Seller/api/seller/ShowBids/' + productid, {headers});
  }

  login(input : any)  {
    return this.http.post<IUser>(this.identityUrl + '/login', input).pipe(
      map((data: any) => {
        if(data)
        {
          localStorage.setItem('token', data.token);
          localStorage.setItem('id', data.id);
          localStorage.setItem('email', data.email);
        }
      })
      
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }

  loadUserData(){
    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', 'Bearer ${token}');

    // return this.http.get(this.identityUrl + 'account', {headers}).pipe(
    //   map((user: any)=>{
    //     if(user){
    //       localStorage.setItem('token', user.token);
    //     }
    //   })
    // )
    var token =  localStorage.getItem('token') != null ? localStorage.getItem('token') : '';
    return token != '';    
  }
  
}
