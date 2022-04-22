/// circle menu animation 

function menuIn() {
    gsap.to("#circle_menu", {duration: 1.5, ease: 'back', x: -250, y: 250});
    gsap.to("#menuIcon", {duration: 0.5, ease: 'power 1', opacity: 0});
  };
  
  
function menuOut() {
    gsap.to("#circle_menu", {duration: 2, ease: 'back', x: 250, y: -250});
    gsap.to("#menuIcon", {duration: 0.5, ease: 'power 1', opacity: 1});
};
