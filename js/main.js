const navIcon = document.querySelector('#nav-icon');
const nav = document.querySelector('.navigation');
const heading = document.querySelector('h1');
const about = document.querySelector('.about');
const close = document.querySelector('.close');
const aboutLink = document.querySelector('#about-link');
const allContent = document.querySelector('html');


//nav Icon event listener
navIcon.addEventListener('click',()=> {
  navIcon.classList.toggle("change");
  nav.classList.toggle('show');
  heading.classList.toggle('slide');

});

//Link to About page for mobile and desktop links
class PageLink {
  constructor(link) {
    this.link = link;
     this.link.addEventListener('click', this.slideIn.bind(this));

  }
  slideIn() {
    about.style.display = 'flex';
    setTimeout(()=>{//timeout used so that animation will work
      about.classList.toggle('slide-in');
      allContent.style.overflow = 'hidden';
    },1);
  }
}

close.addEventListener('click', ()=>{
  about.classList.remove('slide-in');
  allContent.style.overflow = 'initial';
  setTimeout(function(){//display set to none after a timeout so animation will work
    about.style.display = 'none';
  },500);
});




let links = document.querySelectorAll('.about-link').forEach(link => new PageLink(link));
