// window.pageYoffset
var vid = document.getElementById("myVideo");

// pause video on load
vid.pause();

// pause video on document scroll (stops autoplay once scroll started)
window.onscroll = function() {
  vid.play();
  //console.log(vid.currentTime, window.pageYOffset / 400);
};

//vid.addEventListener("timeupdate", function() {
//  $("#time").text(vid.currentTime);
//  if (
//    window.pageYOffset / 400 >= 6 &&
//    this.currentTime > window.pageYOffset / 400
//  ) {
//    this.pause();
//
//    vid.currentTime = window.pageYOffset / 400;
//  } else if (
//    window.pageYOffset / 400 > 6 &&
//    this.currentTime < window.pageYOffset / 400
//  ) {
//    this.play();
//  }
//});
//
setInterval(function() {
  if (window.pageYOffset == 0) {
    vid.pause();
  } else if (window.pageYOffset > 1) {
    vid.play();
  }
}, 32);
videoPause();
