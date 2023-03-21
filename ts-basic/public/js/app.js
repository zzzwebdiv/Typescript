import { Invoice } from "./class/Invoice.js";
import { ListTemplate } from "./class/ListTemplate.js";
import { Payment } from "./class/Payment.js";
console.log('ts');
// get the form
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('.item-list');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(
    //   type.value,
    //   tofrom.value,
    //   details.value,
    //   amount.valueAsNumber // need to change input type to number as well
    // );
    // implement interface
    let doc;
    // use tuples
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    // console.log(doc);
    // render list
    list.render(doc, type.value, 'end');
    form.reset();
});
