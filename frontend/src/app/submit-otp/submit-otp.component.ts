import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceCredService } from '../service-cred.service';

@Component({
  selector: 'app-submit-otp',
  templateUrl: './submit-otp.component.html',
  styleUrls: ['./submit-otp.component.css']
})
export class SubmitOtpComponent implements OnInit {

  form:FormGroup|any;
  Data={
    otp:''
  }
  constructor(public _cred:ServiceCredService, public _router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      otp:new FormControl('',Validators.required),
    
    },
      )

  }

  submitOTP(){
    console.log(this.Data)
    // this._router.navigate(['\otpenter'])
    this._cred.submitotp(this.Data).subscribe(
      res=>{
        this._router.navigate(['\welcome'])
      },
      (error)=>{
        // this._router.navigate(['\errorpage'])

        alert("Sorry! Please enter correct OTP")
      }
    )
    console.log('returndata');
  }


}
