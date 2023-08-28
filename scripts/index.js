// Hide nav bar on scroll down and show on scroll up

const mainScroll = document.querySelector('.main_container'); //Get the main container

let lastScrollTop = 0; //This Varibale will store the top position

let navbar = document.querySelector('#navbar_hide'); //Get the navbar

let hideTopAt = 500;

mainScroll.addEventListener('scroll', function () {
  //on every scroll this funtion will be called'
  let scrollTop = mainScroll.scrollTop;
  //This line will get the location on scroll

  if (scrollTop > hideTopAt) {
    //if it will be greater than the previous
    navbar.style.top = '-60px';
    //set the value to the negetive of height of navbar
  } else {
    navbar.style.top = '0';
  }
});

// Footer Open Script
const openFooterMenu = document.querySelector('#footerBtn');
openFooterMenu.addEventListener('click', expandFooterMenu);

function expandFooterMenu() {
    document.querySelector('#footerBtn').classList.toggle('btnFooter_open');
    document.querySelector('.footer').classList.toggle('footerOpen');
}