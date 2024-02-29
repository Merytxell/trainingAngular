import { Injectable } from '@angular/core';
import { Training } from '../model/Training';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //ici on va stocker dans un tableau toutes les formations ajoutées au panier
  cartItems: Training[] = [];

  constructor() { }
  // ajoute des formations au panier
  addTraining(trainings : Training) : void{
    this.cartItems.push(trainings);
    console.log(trainings)
  }

  //renvoie toutes les informations qui sont dans le panier
  getCartItems(): Training[] {
    return this.cartItems;
  }

  //vide le panier
  clearCart(): void {
    this.cartItems = [];
    console.log('Cart cleared.');
  }

  //retire du panier
  removeTraining (trainings : Training) : void {
    const index = this.cartItems.findIndex(item => item.id === trainings.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      console.log('Training removed from cart:', trainings);
    } else {
      console.log('Training not found in cart:', trainings);
    }
  }

  
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  validateCart(): void {
    console.log()
  }

  }

  

  

