import { Invoice } from "./class/Invoice.js";
import { ListTemplate } from "./class/ListTemplate.js";
import { Payment } from "./class/Payment.js";
import { HasFormatter } from "./interface/HasFormatter.js";

console.log('ts');

// get the form
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('.item-list') as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  // console.log(
  //   type.value,
  //   tofrom.value,
  //   details.value,
  //   amount.valueAsNumber // need to change input type to number as well
  // );

  // implement interface
  let doc: HasFormatter;

  // use tuples
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber]

  if(type.value === 'invoice'){
    doc = new Invoice(...values);
    
  }else{
    doc = new Payment(...values);
    
  }
  // console.log(doc);

  // render list
  list.render(doc, type.value, 'end' );

  form.reset();
})

