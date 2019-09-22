import { LoginRoutes } from './login.routes';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-masterial.module';
import { Ng2Rut } from 'ng2-rut';

@NgModule({
  declarations: [LoginComponent],
  exports:[LoginComponent],
  imports: [
    RouterModule.forChild(LoginRoutes),
    CommonModule,
    FormsModule,
    AppMaterialModule, 
    ReactiveFormsModule,
    Ng2Rut
  ],

})
export class LoginModule { }