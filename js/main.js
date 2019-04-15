const navIcon = document.querySelector('#nav-icon');
const nav = document.querySelector('.navigation');
const heading = document.querySelector('h1');
const about = document.querySelector('.about');
const close = document.querySelector('.close');
const aboutLink = document.querySelector('#about-link');

navIcon.addEventListener('click',()=> {
  navIcon.classList.toggle("change");
  nav.classList.toggle('show');
  heading.classList.toggle('slide');
});

aboutLink.addEventListener('click', ()=> {
  about.classList.toggle('slide-in');
});

close.addEventListener('click', ()=>{
  about.classList.remove('slide-in');
});

//
