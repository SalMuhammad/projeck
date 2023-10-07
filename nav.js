const menuTogle=document.querySelector('.menu-togle input');
const nav= document.querySelector('nav ul');

menuTogle.addEventListener('click', function(){
  nav.classList.toggle('slide');
});

