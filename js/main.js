const hamburgerMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

// const video = document.querySelector('.hero-video');
// video.addEventListener('ended', function() {
//     video.currentTime = 0;
//     video.play();
// });

video.playbackRate = 0.9;