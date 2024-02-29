import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Customer } from 'src/app/model/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(public cartService : CartService) {

   }

  ngOnInit(): void {
  }

  onSaveCustomer (customer : Customer){
    console.log(customer);
  }
}
