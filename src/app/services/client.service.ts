import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class ClientService {

  public currentClientSubject: BehaviorSubject<Array<Client>> = new BehaviorSubject([]);
  public currentClient = this.currentClientSubject.asObservable();

  constructor(private http: HttpClient
    ) { 
    }

    updateDataClient(data) {
      this.currentClientSubject.next(data);
    }


    addData(dataObj) {
      const currentValue = this.currentClientSubject.value;
      const updatedValue = [...currentValue, dataObj];
      this.currentClientSubject.next(updatedValue);
      
  }

  getNamePerson(rut){

    //return this.http.post('https://siichile.herokuapp.com/consulta/', { rut: '18.377.699-1'})
    

  }

}

