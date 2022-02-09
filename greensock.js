
gsap.registerPlugin(ScrollTrigger); 



/// making a gsap timeline 

//// insert at start of previous animation: "<"

var tl = gsap.timeline( {
    scrollTrigger: {  
        trigger: ".container2",
        start: 'top top-=100',
        end: 'bottom', 
        scrub: true 
    }
});
////circle1 fade in 
tl.to("#circle", {duration: 4, ease: "circ.out", width:650, x:325, y:-325, opacity: 1})
//// object1 fade in 
tl.to("#object1", {duration: 4, ease: "circ.out", width:250, x:125, y:-125, opacity: 1}, "<") 
/// circle1 fade out 
tl.to("#circle", {duration: 5, ease: "power1.out", width: 2000, x:1000, y:-1000})
///object1 fade out 
tl.to("#object1", {duration: 5, ease: "power1.out", width:1950, x: 2700, y:-825}, "<")
//circle2 fadein 
tl.to("#circle2", {duration: 6, ease: "circ.out", width:650, x: 325, y:-325, opacity: 1}, "<");




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
