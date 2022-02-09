

// practicing menu stuff to get warmed up to JS 

function menuClose() {
    var x = document.getElementById("menu_content");
        if (x.style.display === "none") {
         x.style.display = "block";
        } else {
        x.style.display = "none";
        document.getElementById("circle_menu").style.display = "none";
        document.getElementById("ham").style.display = "block";
  }
}


function menuOpen() {
    var x = document.getElementById("menu_content");
        if (x.style.display === "none") {
         x.style.display = "block";
         document.getElementById("circle_menu").style.display = "block";
         document.getElementById("ham").style.display = "none";
        } else {
        x.style.display = "none";
        document.getElementById("circle_menu").style.display = "none";
        document.getElementById("ham").style.display = "block";
  }


}