

gsap.registerPlugin(ScrollTrigger); 

/// scroll triggered animations:

var tl = gsap.timeline( {
    scrollTrigger: {  
        trigger: ".section",
        start: 'top top-=100',
        end: 'bottom', 
        scrub: true 
    }
});

/// variable 

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const fifty = (vw / 2) - (vw/75); 

/// ball initial descent 
tl.to(".ball", {duration: 0.4, ease: "none", y:650});
////ball turn horizontal 
tl.to(".ball", {duration: 0.3, ease: "none", x:fifty});
// ball continue down 
tl.to(".ball", {duration: 3, ease: "none", y:3500});
