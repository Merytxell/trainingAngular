import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Customer } from 'src/app/model/customer.model';
import { customerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: []
})
export class CustomerComponent implements OnInit {


  constructor(public cartService : CartService , public customerService: customerService, private router : Router) { }

  ngOnInit(): void {
  }

  onSaveCustomer (customer : Customer){
    this.router.navigateByUrl('order')
    console.log("hello");
    
  }
}


