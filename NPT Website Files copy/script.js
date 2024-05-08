

// Blue Overlay
// Function to handle hover and unhover events on divs with class "blue_overlay"
function setupHoverEffects() {
    // Get all elements with class "blue_overlay"
    const blueOverlayDivs = document.querySelectorAll('.blue_overlay');

    // Add event listeners to each "blue_overlay" div
    blueOverlayDivs.forEach((div) => {
        // Add mouseenter event listener for hover
        div.addEventListener('mouseenter', () => {
            // Find the img inside the div
            const img = div.querySelector('img');
            const hwords = div.querySelector('.hover_words');
            if (img) {
                // Change the opacity of the img to 0 during hover
                img.style.opacity = '0.2';
            }
            // Change the background color of the div to blue
            div.style.backgroundColor = '#2E48A0';
            hwords.style.opacity = 1; 
        });

        // Add mouseleave event listener for unhover
        div.addEventListener('mouseleave', () => {
            // Find the img inside the div
            const img = div.querySelector('img');
            const hwords = div.querySelector('.hover_words');
            if (img) {
                // Reset the opacity of the img to 1 when the mouse leaves the div 
                img.style.opacity = '1'; 
            }
            // Reset the background color of the div 
            div.style.backgroundColor = ''; 
            hwords.style.opacity = 0; 
        }); 
    });
}


// Work Page Links 
function honey() {
    window.open('https://www.honeywellstore.com/store/products/true-hepa-large-room-air-purifier-with-allergen-remover-black-hpa200.htm', '_blank');
}

function mirror() {
    window.open('https://fr.shop.lululemon.com/story/mirror-home-gym', '_blank');
}

function kettle() {
    window.open('https://www.oxo.com/adjustable-temperature-kettle.html', '_blank');
}

function braun1() {
    window.open('https://www.braunhealthcare.com/us_en/thermometer/thermoscan-7/', '_blank');
}

function vicks() {
    window.open('https://www.vickshumidifiers.com/products/thermometers/vicks-speedread-digital-thermometer-fever-insight/', '_blank');
}

function braun2() {
    window.open('https://www.braunhealthcare.com/us_en/thermometer/thermoscan-5/', '_blank');
}

function tooth() {
    window.open('https://oralucent.com/pages/light-technology', '_blank');
}

function glasses() {
    window.open('https://www.balenciaga.com/en-us/led-frame-sunglasses-silver-621649T00031402.html', '_blank');
}

function myotone() {
    window.open('https://myotone.com', '_blank');
}

function muzik() {
    window.open('https://fr.shop.lululemon.com/story/mirror-home-gym', '_blank');
}

function woojer() {
    window.open('https://www.woojer.com', '_blank');
}

function tune() {
    window.open('https://www.bestbuy.com/site/new-potato-tunelink-auto-bluetooth-car-interface-for-android/2581133.p?skuId=2581133', '_blank');
}

function mza() {
    window.open('', '_blank');
}

function swim() {
    window.open('http://blueripple.tech', '_blank');
}

function wires() {
    window.open('https://www.smartwires.com', '_blank');
}


// Call the function to set up the hover effects
setupHoverEffects();


// Mobile menu toggle 

// Get references to the elements
const hamburgerImage = document.querySelector('.hamburger');
const mobileOpenDiv = document.querySelector('.mobile_open');
const mobileMenu = document.querySelector('.mobile_menu');

// Define the new image source
const newImagePath = 'images/X.png';

// Function to toggle the display and image source
function toggleMobileMenu() {
    // Toggle the display of the mobile_open div
    if (mobileOpenDiv.style.display === 'block') {
        mobileOpenDiv.style.display = 'none';
        mobileMenu.style.backgroundColor = 'transparent'; 
        // Change the hamburger image back to its original source
        hamburgerImage.src = 'images/hamburger.png';
    } else {
        mobileOpenDiv.style.display = 'block';
        // Change the hamburger image source to the new path
        hamburgerImage.src = newImagePath;
        mobileMenu.style.backgroundColor = '#21345C'; 
    }
}

// Add event listener to the hamburger image
hamburgerImage.addEventListener('click', toggleMobileMenu);



// Contact Form JS

//var frmvalidator  = new validator("contactform");
//frmvalidator.addValidation("name","req","Please provide your name");
//frmvalidator.addValidation("email","req","Please provide your email");
//frmvalidator.addValidation("email","email","Please enter a valid email address");