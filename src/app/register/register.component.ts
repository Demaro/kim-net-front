import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthErrors = this.eventAuthError.asObservable();

  itemValue = '';
  items: Observable<any[]>;
  newUser: User;

  constructor(
    public db: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router) {
    //this.items = db.list('items').valueChanges();
   }
  ngOnInit() {
  }


  createUser(user){
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    .then( userCredencial => {

      this.newUser = user;

      console.log(userCredencial)
    
      userCredencial.user.updateProfile({
        displayName: user.firstName + ' ' + user.lastName
      });

      this.addUserData(userCredencial)
        .then(() => {
            this.router.navigate[''];
        })
        .catch( error => {
          console.log(error)

          this.eventAuthError.next(error);
        })
      
    })
    
  }

  addUserData( userCredencial:  firebase.auth.UserCredential) {
    return this.db.doc('Users/${userCredencial.user.uid}').set({
      email: this.newUser.email,
      firstName: this.newUser.firstName,
      lastName: this.newUser.lastName,
      role:     'SuperUser'
    });
  }


}
