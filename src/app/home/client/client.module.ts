import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientRoutes } from './client.routes';
import { AppMaterialModule } from '../../app-masterial.module';
import {AddClientComponent} from '../../dialogs/add-client/add-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2Rut } from 'ng2-rut';
import { ClientService } from '../../services/client.service';

@NgModule({
  declarations: [ClientComponent, AddClientComponent],
  exports: [ClientComponent, AddClientComponent],
  imports: [
    RouterModule.forChild(ClientRoutes),
    CommonModule,
    AppMaterialModule,
    FormsModule,
    AppMaterialModule, 
    ReactiveFormsModule,
    Ng2Rut

    

  ],
  entryComponents: [AddClientComponent],


})
export class ClientModule {}