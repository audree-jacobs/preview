
// activate scrolltrigger 
gsap.registerPlugin(ScrollTrigger); 


// screen width and height variables for responsive animations  

// screen width 
var width = window.innerWidth;
// negative 1/2 screen width 
var half = (width / 2)* -1; 
// positive 1/2 screen width 
var half_pos = width/2;
// negative half screen width minus caption width 
var left_caption = ((width/2) - (width * 0.203)) * -1;
// window height negative
var height = (window.innerHeight) * -1;
// window height double 
var height2 = height * 2; 


// reload browser on window resize (in order to recalculate screen width 
// and height for accurate positioning) 

window.onresize = function(){ location.reload(); }


//gsap animating:

var tl = gsap.timeline( {
    scrollTrigger: {  
        trigger: ".please",
        start: 'top top-=100',
        end: 'bottom', 
        scrub: true 
    }
});


// entire opening section scrolls up 
tl.to(".opening_section", {duration: 1, ease: 'linear', y:height})


// logo goes from full size into the corner
tl.to(".logo", {duration: 1, ease: 'power 1', top: -10, left: 0, width: "7vw", padding: 25}, "<")
//subtitles disappear 
tl.to(".subtitle", {duration: 0.1, ease: 'power 1', opacity: 0}, "<")
tl.to(".caption_boxO", {duration: 0.1, ease: 'power 1', opacity: 0}, "<")
// entire first section scrolls into view 
tl.to(".section1", {duration: 1, ease: 'linear', y:height}, "<")

// first image & caption move from 50% of screen width to full screen, moving left 
tl.to(".image1", {duration: 0.5, ease: 'power 1', x:half})
tl.to(".caption_box", {duration: 0.5, ease: 'power 1', x:half}, "<")

// entire first section scrolls up 
tl.to(".section1", {duration: 1, ease: 'power 1', y:height2})

// entire second section scrolls into view 
tl.to(".section2", {duration: 1, ease: 'power 1', y:height}, "<")

// second image & caption (& clip path) move from 50% of screen width to full screen, moving right 
tl.to(".image2", {duration: 0.5, ease: 'power 1', x:half_pos})
tl.to(".caption_box2", {duration: 0.5, ease: 'power 1', x:left_caption}, "<")
tl.to(".clip_box", {duration: 0.5, ease: 'power 1', clipPath: 'inset(0% 0% 0% 0%)'}, "<")

// entire second section scrolls up 
tl.to(".section2", {duration: 1, ease: 'power 1', y:height2})

//entire third section scrolls into view 
tl.to(".section3", {duration: 1, ease: 'power 1', y:height}, "<");

// third image & caption move from 50% of screen width to full screen, moving left 
tl.to(".image3", {duration: 0.5, ease: 'power 1', x:half})
tl.to(".caption_box3", {duration: 0.5, ease: 'power 1', x:half}, "<")

// entire third section scrolls up 
tl.to(".section3", {duration: 1, ease: 'power 1', y:height2}) 

// static section scrolls up 
tl.to(".static_section", {duration: 1, ease: 'power 1', y:height2}, "<");


//// animated menu 

function menuIn() {

    gsap.to("#circle_menu", {duration: 1.5, ease: 'back', x: -200, y: 200});
    gsap.to("#ham", {duration: 0.5, ease: 'power 1', opacity: 0});
  
  };
  
  function menuOut() {
    gsap.to("#circle_menu", {duration: 2, ease: 'back', x: 200, y: -200});
    gsap.to("#ham", {duration: 0.5, ease: 'power 1', opacity: 1});
  };