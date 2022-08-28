import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SignupComponent } from './signup/signup.component';
import { SubmitOtpComponent } from './submit-otp/submit-otp.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{path:"",component:SignupComponent},
                        {path:"\otpenter",component: SubmitOtpComponent},
                        {path:"\welcome",component: WelcomeComponent},
                        {path:"\errorpage",component: ErrorPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
