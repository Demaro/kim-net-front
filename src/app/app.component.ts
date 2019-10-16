

import { Component, OnInit } from '@angular/core';



import { AuthService } from './services/auth.service';
import { ClientService } from './services/client.service';
import {  Client } from './models/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  title = 'kim-gas';

  promptEvent;
  birth = new Date();


  constructor(public auth: AuthService, private clientService: ClientService){

    

   this.auth.checkForUpdates();
  }

  ngOnInit(){
    
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });


    this.getAssociatedClients()




  }


  installPwa(): void {
    this.auth.promptEvent.prompt();
  }

  getAssociatedClients() {

    let clientStorage = JSON.parse(sessionStorage.getItem('clients'));

    if(clientStorage) {

      console.log('storage: ',clientStorage)
      clientStorage.forEach(client => {
        this.clientService.addData(client)
      });
      
    }



   // this.clientService.addData(client);

  

    console.log(this.clientService.currentClientSubject);
  }
}

