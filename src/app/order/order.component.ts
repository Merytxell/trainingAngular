import { Component, OnInit } from '@angular/core';
import { customerService } from '../services/customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public customerService: customerService, private router : Router) { }

  ngOnInit(): void {
  }

  onSaveCustomer(formValue : {name:string, firstname:string, address:string,phone:number,email:string }){
    console.log(formValue)
  }

}
