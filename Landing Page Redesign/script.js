// register scroll trigger
gsap.registerPlugin(ScrollTrigger); 


//variables 
var vh = (screen.height)/100;
var vw = (screen.width)/100;
// size of circle menu 
var tenvw = vw * 14; 
var half = vw * 50; 
var full = vw * 100; 
var fullh = vh * 140; 


/// circle menu animation 
function menuIn() {
    gsap.to("#circle_menu", {duration: 1.5, ease: 'back', x: -tenvw, y: tenvw});
    gsap.to("#menuIcon", {duration: 0.5, ease: 'power 1', opacity: 0});
  };
  
function menuOut() {
    gsap.to("#circle_menu", {duration: 2, ease: 'back', x: tenvw, y: -tenvw});
    gsap.to("#menuIcon", {duration: 0.5, ease: 'power 1', opacity: 1});
};


// scroll trigger for text and image movement 

var tl = gsap.timeline( {
  scrollTrigger: {  
      trigger: ".section2",
      start: 'top top-=200',
      end: 'bottom bottom', 
      scrub: true 
  }
});

tl.to(".movingText1", {duration: 0.5, ease: 'linear', x: -full}); 
tl.to(".movingText2", {duration: 0.5, ease: 'linear', x: -half}, "<");
tl.to(".movingText2", {duration: 0.5, ease: 'linear', x: -full}, 1);
tl.to(".movingText3", {duration: 0.5, ease: 'linear', x: -half}, "<");
tl.to(".movingText3", {duration: 0.5, ease: 'linear', x: -half});
tl.to("#firstImage", {duration: 1, ease: 'linear', x: -half});
tl.to(".subsection2", {duration: 2, ease: 'linear', y: -fullh});
tl.to(".orangeNumberSection", {duration: 2, ease: 'linear', y: -fullh}, "<");
tl.to("#stickyLogo", {duration: 0.5, ease: 'linear', opacity: 1}, "<");
tl.to(".section5", {duration: 2, ease: 'linear', y: -fullh}, "<");
tl.to(".section6", {duration: 2, ease: 'linear', y: -fullh}, "<");