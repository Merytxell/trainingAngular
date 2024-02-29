export class Customer {
    
    name: string;
    firstname: string;
    phone : number;
    address : string;
    email: string;

    constructor (name:string,firstname:string,phone:number,address:string,email:string){
        this.name=name;
        this.firstname=firstname;
        this.phone=phone;
        this.address=address;
        this.email=email;
    }
    
  };