
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

//player

duration = document.querySelector('#duration');
current = document.querySelector('#current');
playPause = document.querySelector('#playPause');

let timeCalculator = function (value) {
  second = Math.floor(value % 60);
  minute = Math.floor((value + 60) / 60);

  if (second < 10) {
    second = '0' + second;
  }

  return minute + ':' + second;
};

// start wavesurfer object

wavesurfer = WaveSurfer.create({
  container: '#wave',
  waveColor: 'darkgrey',
  progressColor: '#1aafff',
  height: 48,
  srollParent: false,
});

//load audio file
wavesurfer.load('./sound/space-hole-test-23665.mp3');

//play and pause a player
playPause.addEventListener('click', function (e) {
  wavesurfer.playPause();
});

//load audio duration on load
wavesurfer.on('ready', function (e) {
  duration.textContent = timeCalculator(wavesurfer.getDuration());
});

//get updated current time on play
wavesurfer.on('audioprocess', function (e) {
  current.textContent = timeCalculator(wavesurfer.getCurrentTime());
});

//change play button to pause button on play
wavesurfer.on('play', function (e) {
  playPause.classList.remove('fa-play');
  playPause.classList.add('fa-pause');
});

//change pause button to play button on pause
wavesurfer.on('pause', function (e) {
  playPause.classList.add('fa-play');
  playPause.classList.remove('fa-pause');
});

//update time on seek
wavesurfer.on('seek', function (e) {
  current.textContent = timeCalculator(wavesurfer.getCurrentTime());
});