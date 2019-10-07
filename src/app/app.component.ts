import { Component, OnInit } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent , HttpClient} from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { ClientService } from './services/client.service';
import {  Client } from './models/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kim-gas';


  constructor(public auth: AuthService, private clientService: ClientService){
  }

  ngOnInit(){

    console.log('hola antes')
  setTimeout(() => {

    console.log('hola on')
    
  }, 10000);

  console.log('hola on')

    this.getAssociatedClients()




  }

  getAssociatedClients() {

    let client:Client = {id: 1, fullName: 'David Martinez Rojas', email: 'demaromail@gmail.com', phoneNumber: 12312331 , product: {id:1, name: '5K'}};

    this.clientService.addData(client);

    console.log(this.clientService.currentClientSubject);

  }
}

