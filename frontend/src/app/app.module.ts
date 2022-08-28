import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SubmitOtpComponent } from './submit-otp/submit-otp.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceCredService } from './service-cred.service';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SubmitOtpComponent,
    WelcomeComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule
   
  ],
  providers: [ServiceCredService],
  bootstrap: [AppComponent]
})
export class AppModule { }
