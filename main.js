var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.width = "200px";
}

function hideMenu(){
    navLinks.style.width = "0";
}


window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}