import { HasFormatter } from "../interface/HasFormatter";

export class Invoice implements HasFormatter{
  // default are public propeties
  client:string;
  details:string;
  amount: number;

  constructor(c:string, d:string, a:number){
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  // format method
  format(){
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}