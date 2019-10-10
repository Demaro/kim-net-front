import { Component, OnInit, HostListener } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent , HttpClient} from '@angular/common/http';
import { SwUpdate } from '@angular/service-worker';
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


  deferredPrompt: any;
  showButton = false;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    console.log(e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    this.showButton = true;
  }


  constructor(public auth: AuthService, private clientService: ClientService, public swUpdate){
  }

  ngOnInit(){

    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

        alert("Disponible nueva version de kim-net!, se actualizara la pagina.");

            setTimeout(() => {

              window.location.reload();
              
            }, 3000);
              
          }
      )

      }

    console.log('hola antes')
  setTimeout(() => {

    console.log('hola on')
    
  }, 10000);

  console.log('hola on')

    this.getAssociatedClients()

  }



  addToHomeScreen() {
    // hide our user interface that shows our A2HS button
    this.showButton = false;
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
  }

  getAssociatedClients() {

    let client:Client = {id: 1, fullName: 'David Martinez Rojas', email: 'demaromail@gmail.com', phoneNumber: 12312331 , product: {id:1, name: '5K'}};

    this.clientService.addData(client);

    console.log(this.clientService.currentClientSubject);

  }
}

