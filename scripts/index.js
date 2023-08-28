const mainScroll = document.querySelector('.main_container'); //Get the main container

let lastScrollTop = 0; //This Varibale will store the top position

let navbar = document.querySelector('#navbar_hide'); //Get the navbar

/*
mainScroll.addEventListener('scroll', function () {
  //on every scroll this funtion will be called'
  let scrollTop = mainScroll.scrollTop;
  //This line will get the location on scroll

  console.log(scrollTop);
  if (scrollTop > lastScrollTop) {
    //if it will be greater than the previous
    navbar.style.top = '-80px';
    //set the value to the negetive of height of navbar
  } else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop; //New Position Stored
});
*/

let hideTopAt = 500;

mainScroll.addEventListener('scroll', function () {
  //on every scroll this funtion will be called'
  let scrollTop = mainScroll.scrollTop;
  //This line will get the location on scroll

  if (scrollTop > hideTopAt) {
    //if it will be greater than the previous
    navbar.style.top = '-80px';
    //set the value to the negetive of height of navbar
  } else {
    navbar.style.top = '0';
  }
});

Fancybox.bind(); //! Activere fancybox
