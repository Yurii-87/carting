"use strict"
const page = document.documentElement;
const carts = document.querySelectorAll('.item-carts');

document.addEventListener("click", function (e) {
   const click = e.target;
   if (click.closest(`.icon-menu`)) {
      page.classList.toggle(`menu-open`);
   }

   if (click.closest('.item-carts')) {
      if (carts.length) {
         carts.forEach(cart => {
            cart.classList.remove('active');
            click.closest('.item-carts').classList.add('active');
         });
      }
   }
});
