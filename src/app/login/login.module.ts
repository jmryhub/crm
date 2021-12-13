import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PageSignUpComponent } from './page-sign-up/page-sign-up.component';
import { PageResetPasswordComponent } from './page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './page-sign-in/page-sign-in.component';
import { PageForgotPasswordComponent } from './page-forgot-password/page-forgot-password.component';


@NgModule({
  declarations: [
    PageSignUpComponent,
    PageResetPasswordComponent,
    PageSignInComponent,
    PageForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
