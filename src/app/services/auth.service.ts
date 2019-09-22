
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment'
import { User } from  '../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { reject } from 'q';

@Injectable({ providedIn: 'root' })
export class AuthService {
  
    public currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    isLogged: boolean = false;
    loading: boolean = false;

    constructor(
      private http: HttpClient,
      public db: AngularFirestore,
      public afAuth: AngularFireAuth,
      private router: Router) {
        this.currentUser = this.currentUserSubject.asObservable();

      

      //this.items = db.list('items').valueChanges();
     }

     private eventAuthError = new BehaviorSubject<string>("");
     eventAuthErrors$ = this.eventAuthError.asObservable();
   
     itemValue = '';
     items: Observable<any[]>;

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


    loginEmailUser(email, password){

   

      return  new Promise((resolve, reject) => {

        this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      err => reject(err))
     
      })

    };

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);

        this.isLogged = true
        this.loading = false;
        this.router.navigate(['/login']);
    }
}