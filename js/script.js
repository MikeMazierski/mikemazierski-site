// Header sticky
// Add a function to window when you scroll
window.onscroll = function() {watchForHeader()};

//Find header id on the page
var header = document.getElementById("header");

//headerStickyPosition calculated by header.offsetTop position 
var headerPosition = header.offsetTop + 5;

function watchForHeader() {
  if (window.pageYOffset >= headerPosition) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// End Header stciky 

// Nav hamburger menu open and close on click
$(document).ready(function () {
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
});

//Close Mobile Menu after link click
//Find Mobile Nav links
var findLinks = document.querySelectorAll(".menu a");

//Function to find and hide mobile-nav div
findLinks.forEach(foundLinks => {
    foundLinks.addEventListener("click", () => {
        var mobileNavigation = document.getElementById("navbarSupportedContent23");
        mobileNavigation.classList.remove("show");

        var hamburgerButton = document.querySelector(".animated-icon2");
        hamburgerButton.classList.remove("open");
    })
})

// Funny console log
console.log("Hello, nothing to see here.");

// Insert todays year
const todaysDate = new Date();
const todaysYear = todaysDate.getFullYear();
document.getElementById("date").innerHTML = todaysYear;