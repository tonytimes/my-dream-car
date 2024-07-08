import {cart} from '../data/cart.js';
import {cars} from './MDC.js';

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
const name = cartItem.name;


let matchingCars;

cars.forEach((car) => {
if (name === name) {
    matchingCars=car;
}
});
console.log(matchingCars);

cartSummaryHTML +=`
  <div class="thumbnail">
<div class="order-item"><img src="${matchingCars.image}" alt="bmw cars" width="100px"></div>
<p><b>Win this ${matchingCars.name} </b></p>

<div>kes 500</div>
<hr>
        </div>
`;

})

console.log(cartSummaryHTML);