import items from '../templates/food-items.hbs';
import food from '../menu.json';

 export const markup = items(food);

export const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);