import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RutValidator } from 'ng2-rut';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


loginForm: FormGroup;
authError: any;


spinnerDiameter : number = 40;
  
  constructor(
    public db: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router,
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private rutValidator: RutValidator) {
    //this.items = db.list('items').valueChanges();
   }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      rut: ['', [Validators.required, this.rutValidator]],
      password: ['', Validators.required]
  });


    this.authService.eventAuthErrors$
    .subscribe( data => {
      this.authError = data;
    })
  }

  get f() { return this.loginForm.controls; }

  login(){

    this.authService.loading = true;

    let pass = this.f.password.value;
    this.authService.loginEmailUser('demarocreate@gmail.com', pass)
    .then(( user: User ) =>{
        console.log(user)

        localStorage.setItem('currentUser', JSON.stringify(user));
        this.authService.currentUserSubject.next(user);

        this.router.navigate(['']);


    })
    .catch( err => {
      this.authService.loading = false;
      console.log(err)
    })
  


    
  }

  getMesaggeErrorRut(){
    return this.f.rut.hasError('required')? 'Rut es obligatorio' : this.f.rut.hasError('invalidRut')? 'Rut invalido' : ''
  }


}
