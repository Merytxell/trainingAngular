import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Training } from 'src/app/model/Training';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: []
})
export class CartComponent implements OnInit {
  cartItems: Training[] = [];

  constructor(private cartService: CartService, private router : Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }


  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  removeItemFromCart(item: Training): void {
    this.cartService.removeTraining(item);
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  validateCart(): void {
    this.router.navigateByUrl('customer')
    console.log("bonjour")
  }

  }