
gsap.registerPlugin(ScrollTrigger); 

// practicing menu stuff to get warmed up to JS 

//function menuClose() {
//    var x = document.getElementById("menu_content");
//        if (x.style.display === "none") {
//         x.style.display = "block";
//        } else {
//        x.style.display = "none";
//        document.getElementById("circle_menu").style.display = "none";
//        document.getElementById("ham").style.display = "block";
//  }
//};
//
//
//function menuOpen() {
//    var x = document.getElementById("menu_content");
//        if (x.style.display === "none") {
//         x.style.display = "block";
//         document.getElementById("circle_menu").style.display = "block";
//         document.getElementById("ham").style.display = "none";
//        } else {
//        x.style.display = "none";
//        document.getElementById("circle_menu").style.display = "none";
//        document.getElementById("ham").style.display = "block";
//  }
//};
//

//// animated menu 

function menuIn() {

  gsap.to("#circle_menu", {duration: 1.5, ease: 'back', x: -200, y: 200});
  gsap.to("#ham", {duration: 0.5, ease: 'power 1', opacity: 0});

};

function menuOut() {
  gsap.to("#circle_menu", {duration: 2, ease: 'back', x: 200, y: -200});
  gsap.to("#ham", {duration: 0.5, ease: 'power 1', opacity: 1});
};

// hover animations 

