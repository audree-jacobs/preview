



gsap.registerPlugin(ScrollTrigger); 


//attempting a scroll trigger & it worked!!!!  I am a genius!  
////


// circle 1 fade in 
//gsap.to("#circle", {duration: 4, ease: "circ.out", width:650, x:325, y:-325, opacity: 1, 
//        scrollTrigger: {  
//            trigger: ".container2",
//            start: 'top top-=200',
//            end: 'bottom+=10', 
//            scrub: true 
//        }
//});
//
////object 1 fade in 
//gsap.to("#object1", {duration: 4, ease: "circ.out", width:250, x:125, y:-125, opacity: 1,
//    scrollTrigger: {  
//        trigger: ".container2",
//        start: 'top top-=200',
//        end: 'bottom+=10',
//        scrub: true 
//    }
//});
//
//////second wave of animation 
//
/////circle 1 fade out 
//gsap.to("#circle", {duration: 5, ease: "power1.out", width: 2000, x:1000, y:-1000,
//    scrollTrigger: {  
//        trigger: ".container3",
//        start: 'top',
//        scrub: true 
//    }
//});
//
////object 1 fade out 
//gsap.to("#object1", {duration: 5, ease: "power1.out", width:1950, x: 2700, y:-825,
//    scrollTrigger: {  
//        trigger: ".container3",
//        start: 'top',
//        scrub: true 
//    }
//});
//
////circle 2 fade in 
//gsap.to("#circle2", {duration: 6, ease: "circ.out", width:650, x: 325, y:-325, opacity: 1, 
//    scrollTrigger: {  
//        trigger: ".container3",
//        start: 'top',
//        scrub: true 
//    }
//});
//
//

/// making a gsap timeline ugh

//// insert at start of previous animation: "<"

var tl = gsap.timeline( {
    scrollTrigger: {  
        trigger: ".container2",
        start: 'top top-=100',
        end: 'bottom', 
        scrub: true 
    }
});


///opening screen fade out 
tl.to("#opening_screen", {duration: 1, ease: "circ.out", opacity: 0})
/// everything fade in 
tl.to("#landing_page_content", {duration: 0.1, ease: "power1.out", opacity: 1})
////circle1 fade in 
tl.to("#circle", {duration: 4, ease: "circ.out", width:650, x:325, y:-325, opacity: 1})
//// object1 fade in 
tl.to("#object1", {duration: 4, ease: "circ.out", width:250, x:125, y:-125, opacity: 1}, "<") 
/// dot 1 fade in animation 
tl.to("#dot1", {duration: 1, ease: "power1.out", width:25, x:-5, y:-8, borderStyle: "solid", borderWidth: 2, borderColor: "#f9a43e", backgroundColor: "white"}, "<"); 
/// circle1 fade out 
tl.to("#circle", {duration: 5, ease: "power1.out", width: 2000, x:1000, y:-1000, delay: 1})
///object1 fade out 
tl.to("#object1", {duration: 5, ease: "power1.out", width:1950, x: 2700, y:-825}, "<")
/// dot 1 fade out animation 
tl.to("#dot1", {duration: 1, ease: "power1.out", width: 18, x:0, y:0, borderStyle: "none", borderWidth: 0, backgroundColor: "#f9a43e"}, "<"); 
//circle2 fadein 
tl.to("#circle2", {duration: 6, ease: "circ.out", width:650, x: 325, y:-325, opacity: 2, delay: 1},  "<");




/// old button code: 

///click counter code <3 <3 <3 <3 

//window.onload=function() {
//
//    var input = document.getElementById('button');
//    var clickCounter = 0;
//    input.onclick = function () {
//        clickCounter++;
//        if (clickCounter == 1) {
//            zoom1();
//        }
//        else if (clickCounter == 2) {
//            zoom2();
//        }
//        else if (clickCounter == 3) {
//            document.getElementById("button").style.backgroundColor = "orange";
//        }
//    };
//
//}
////// regular zoom function 
////
////function zoom1() {
////
////    document.getElementById("button").style.backgroundColor = "red";
////    gsap.to("#object1", {duration: 4, ease: "expo.out", width:250, opacity: 1});
////
////}
////
//////zoom off the page 
////
////function zoom2() {
////
////    document.getElementById("button").style.backgroundColor = "blue";
////    document.getElementById("circle2").style.display = "block";
////
////    gsap.to("#circle", {duration: 5, ease: "circ.out", width: 2000, opacity: 0});
////    gsap.to("#circle2", {duration: 4, ease: "circ.out", width:650});
////    gsap.to("#object1", {duration: 5, ease: "expo.out", width:950, x: 1300, y: 10});
////
////}