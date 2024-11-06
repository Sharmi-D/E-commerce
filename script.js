// make toggle user icon 

let userIcon = document.querySelector('.user-icon');
let user_popup_box = document.querySelector('.user-popup-box');

userIcon.addEventListener('click', () => user_popup_box.classList.toggle('active'));

let cartIcon = document.querySelector('.fa-cart-shopping');
let xmark = document.querySelector('.cart-cancel-btn')
let cart_popup_box = document.querySelector('.cart-container');

cartIcon.addEventListener('click', () => cart_popup_box.classList.toggle('active'))


