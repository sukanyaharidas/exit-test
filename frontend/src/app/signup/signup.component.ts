import { Component, OnInit } from '@angular/core';
import { ServiceCredService } from '../service-cred.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  form:FormGroup|any;
  mailid:String|any;
  Data={
    mailid:''
  }

  constructor(public _cred:ServiceCredService, public _router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      mailid:new FormControl('',Validators.required),
    
    },
      )

  }


  submitData(){
    console.log(this.Data)
   
    this._cred.submitdata(this.Data).subscribe(
      res=>{
        
      },
     
    )
  }
}


