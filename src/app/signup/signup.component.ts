import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  public signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router:Router){}

  ngOnInit(): void {

      this.signupForm = this.formBuilder.group({
        fullname:[''],
        email:[''],
        password:[''],
        mobile:['']
      })
  }

  // make method create user

  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsers", 
    this.signupForm.value)
        .subscribe(
          
          (res) => {
            alert("Signup Successful");
            this.signupForm.reset();
            this.router.navigate(['login']);
          },
          err => {
            alert("Something went wrong");
          }
        
      );
  }

}


