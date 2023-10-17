import { Component,OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {window} from "rxjs";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  disPlayMes:String = '';
  isAccountIsCreated:boolean = false;
  constructor(private authServices: AuthService) {
  }
  ngOnInit(): void {
  }
  registerform = new FormGroup({
    first_name: new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*")]),
    last_name: new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})"),Validators.minLength(6)])
  });

  registerSubmited(){
    console.log(this.registerform)
    this.authServices.registerUser([
      this.registerform.value.first_name,
      this.registerform.value.last_name,
      this.registerform.value.email,
      this.registerform.value.password
    ]).subscribe(res =>{
      console.log(res);
      if (res=='Success from create method'){
        this.disPlayMes = "Account Created Successfully!";
        this.isAccountIsCreated=true;
      }else if (res=='Already exixt!!'){
        this.disPlayMes = "Already exist!!";
        this.isAccountIsCreated=false;
      }else {
        this.disPlayMes = "Ohh  Noo Something Went Wrong !!";
        this.isAccountIsCreated=false;
      }
    })
  }
  get first_name(): FormControl{
    return this.registerform.get("first_name") as FormControl
  }
  get last_name():FormControl {
    return this.registerform.get("last_name") as FormControl
  }
  get email():FormControl {
    return this.registerform.get("email") as FormControl
  }
  get password():FormControl {
    return this.registerform.get("password") as FormControl
  }
}
