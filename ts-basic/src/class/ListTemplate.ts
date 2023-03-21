/*
1. register a list container (ul) in the constructor
2. create a render method to render a new 'li' to the container
    -- accepts arguments: invoice or payment, a heading , a position
    -- create the html template (li, h4, p)
    -- add the 'li' template to the start/end of the list
*/

import { HasFormatter } from "../interface/HasFormatter.js";

export class ListTemplate{
  // define container 
  constructor(private container: HTMLUListElement){}
  
  // render method
  render(item:HasFormatter, heading: string, pos: 'start' | 'end'){
    const li = document.createElement('li');
    li.classList.add('d-md-flex','align-items-center','gap-2','bg-light','border','border-secondary','rounded','mb-2', 'type-'+heading);

    const h4 = document.createElement('h4');
    h4.classList.add('text-capitalize','p-2','text-white');
    if(heading == 'invoice'){
      h4.classList.add('bg-primary');
    }else{
      h4.classList.add('bg-success');
    }

    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.classList.add('m-md-0','mx-2');
    p.innerText = item.format();
    li.append(p);

    if(pos === 'start'){
      this.container.prepend(li);
    }else{
      this.container.append(li);
    }
  }
}