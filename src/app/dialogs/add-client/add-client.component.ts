import { Component, OnInit , Inject, OnDestroy} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RutValidator } from 'ng2-rut';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';


interface Product {
  id: number,
  name: string
}

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  products : Product[] = [
    { id: 1, name: '5K'},
    { id: 1, name: '15K'},
    { id: 1, name: '20K'}
  ]

  clientForm: FormGroup;
  emailPattern = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}";

  constructor(
    private rutValidator: RutValidator,
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    public dialogRef: MatDialogRef<AddClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }




  ngOnInit() {

    this.clientForm = this.formBuilder.group({
      rut: ['', [Validators.required, this.rutValidator]],
      name: ['', Validators.required],
      birthdate: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      product: ['']
  });



  }

  get f() { return this.clientForm.controls; }

  getMesaggeErrorRut(){
    return this.f.rut.hasError('required')? 'Rut es obligatorio' : this.f.rut.hasError('invalidRut')? 'Rut invalido' : ''
  }

  getMesaggeErrorEmail(){
    return this.f.email.hasError('required')? 'Email es obligatorio' : this.f.email.hasError('pattern')? 'Email invalido' : ''
  }

  addNewClient() {

    let field = this.clientForm.value;
    

    let newClient: Client = {id:2, fullName: field.name, email: field.email, phoneNumber: field.phoneNumber, product: field.product, birthdate: field.birthdate}

    this.clientService.addData(newClient);





  }


  getNamePerson(){

   

    let field = this.clientForm.value;

    console.log('rut :', field.rut, 'nº :', field.rut.length)

    if(field.rut.length === 9 ){

      console.log('nueve')
      this.clientService.getNamePerson(field.rut)
      .subscribe( data => {
        console.log(data)
      })
    }


  }

}
