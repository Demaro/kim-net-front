import { Component, OnInit , OnDestroy} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddClientComponent } from '../../dialogs/add-client/add-client.component';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s 0.1s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ]),

  ],
  providers: [DatePipe]
  
})


export class ClientComponent implements OnInit {

  constructor(
    public dialog: MatDialog, 
    public router: Router, 
    public clientService: ClientService) { }

  ngOnInit() {
    this.openDialog()


  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddClientComponent,  {
      disableClose: true
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    this.router.events
    .subscribe(() => {
    dialogRef.close();
    });
  }



}
