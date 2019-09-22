import { RegisterRoutes } from './register.routes';
import { RegisterComponent  } from './register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent],
  exports:[RegisterComponent],
  imports: [
    RouterModule.forChild(RegisterRoutes),
    CommonModule,
    FormsModule,
  ]
})
export class RegisterModule { }