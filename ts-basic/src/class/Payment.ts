import { HasFormatter } from "../interface/HasFormatter";

export class Payment implements HasFormatter{

  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number,
  ){}

  // format method
  format(){
    return `${this.recipient} owed ${this.amount} for ${this.details}`;
  }
}