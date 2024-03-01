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
    localStorage.setItem('training',JSON.stringify (this.cartItems));
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
    const articleInCart = this.cartItems.find(item => item.id === trainings.id);
    if (articleInCart) {
      if ( articleInCart.quantity > 1){
        articleInCart.quantity--;

      }else {
        const index = this.cartItems.findIndex(item => item.id === trainings.id);
        this.cartItems.splice(index,1);
      }
    }
  }
  addQuantity(trainings: Training, newQuantity: number): void {
    const existingItem = this.cartItems.find(item => item.id === trainings.id);
    if (existingItem) {
      existingItem.quantity = newQuantity;
      console.log('Quantité ajoutée au panier:', trainings);
    } else {
      console.log('formation introuvable:', trainings);
    }
  }
  
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  validateCart(): void {
    console.log("bonjour")
  }

  //je veux enregistrer ma commande
 
  }

  

  

