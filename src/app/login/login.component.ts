import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { IUser } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : any;
  returnUrl:string = '/'

  constructor(private apiService : ApiService, private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/home';
    this.login();
  }

  login(){
    this.loginForm = new FormGroup({
      emailId : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      var user ={
        emailId : this.loginForm.value['emailId'],
        password : this.loginForm.value['password']
      };
      this.apiService.login(user).subscribe(() =>{
        this.router.navigateByUrl(this.returnUrl);
      },
      error => {
        console.log('error');
      })
    }
  }

}
