
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
import { SwUpdate } from '@angular/service-worker';


@Injectable({ providedIn: 'root' })
export class AuthService {


    user: any;
  
    public currentUserSubject = new BehaviorSubject<User>(this.user);
    public currentUser: Observable<User>;
    public currentClient = this.currentUserSubject.asObservable();
    isLogged: boolean = false;
    loading: boolean = false;


  



    constructor(
      private http: HttpClient,
      public db: AngularFirestore,
      public afAuth: AngularFireAuth,
      private router: Router,
      public updates: SwUpdate
    
      ) {

        if (updates.isEnabled) {
          updates.available.subscribe(() => updates.checkForUpdate()
            .then(() => console.log('checking for updates')));
        }

     }

     public checkForUpdates(): void {
      this.updates.available.subscribe(event => this.promptUser());
    }
  
    private promptUser(): void {
      console.log('updating to new version');
      this.updates.activateUpdate().then(() => document.location.reload()); 
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

        this.isLogged = false;
        this.loading = false;
        this.router.navigate(['/login']);
    }

    login(userData) {
      this.currentUserSubject.next(userData);
    }


    
}