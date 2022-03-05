
// activate scrolltrigger 
gsap.registerPlugin(ScrollTrigger); 


// get screen width 

var width = screen.width;
var half = (width / 2)* -1; 

var height = (screen.height) * -1;


//gsap animating:

var tl = gsap.timeline( {
    scrollTrigger: {  
        trigger: ".please",
        start: 'top top-=100',
        end: 'bottom', 
        scrub: true 
    }
});

tl.to(".airplane", {duration: 1, ease: 'power 1', x:half});
tl.to(".ball_line", {duration: 1, ease: 'power 1', x:half}, "<");
tl.to(".section1", {duration: 1, ease: 'power 1', y:height});
