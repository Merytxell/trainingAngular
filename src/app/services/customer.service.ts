
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer.model';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class customerService {
  customerItems: Customer [] = [];


  constructor() { }
 
  addCustomer(customer: Customer) : void{
    console.log(customer)
  }

 
}

//on veut qu'à la validation du formulaire on puisse avoir un récapitulatif de la commande