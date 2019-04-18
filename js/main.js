const navIcon = document.querySelector('#nav-icon');
const nav = document.querySelector('.navigation');
const heading = document.querySelector('h1');
const about = document.querySelector('.about');
const close = document.querySelector('.close');
const aboutLink = document.querySelector('#about-link');
const allContent = document.querySelector('html');
const button = document.querySelectorAll('.button');

navIcon.addEventListener('click',()=> {
  navIcon.classList.toggle("change");
  nav.classList.toggle('show');
  heading.classList.toggle('slide');

});

class PageLink {
  constructor(link) {
    this.link = link;
    console.log(this.link);
     this.link.addEventListener('click', this.slideIn.bind(this));

  }
  slideIn() {
    about.style.display = 'flex';
    setTimeout(()=>{
      about.classList.toggle('slide-in');
      allContent.style.overflow = 'hidden';
    },1);
  }
}

close.addEventListener('click', ()=>{
  about.classList.remove('slide-in');
  allContent.style.overflow = 'initial';
  setTimeout(function(){
    about.style.display = 'none';
  },500);
});




let links = document.querySelectorAll('.about-link').forEach(link => new PageLink(link));
