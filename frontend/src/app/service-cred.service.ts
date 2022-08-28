import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceCredService {
  server_address:string='api';

  constructor(public http:HttpClient) { }


  submitdata(data:any){
    console.log(data);
    return this.http.post(`${this.server_address}/senddata`, {data});
  }

  submitotp(data:any){
    console.log(data);
    return this.http.post(`${this.server_address}/sendotp`, {data});
    
  }
}
