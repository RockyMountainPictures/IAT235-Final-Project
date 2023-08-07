function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.querySelector(".sidenav-wrapper").style.marginLeft = "0";
}

function closeNav() {
  document.querySelector(".sidenav-wrapper").style.marginLeft = "-100vw";
  document.getElementById("mySidenav").style.width = "0";
}

function openCitationNav() {
  document.querySelector(".citation-mobile-header").setAttribute('style', 'position: relative !important;');
  document.getElementsByTagName('header')[0].style.display = "none";
  document.getElementsByTagName('main')[0].style.display = "none";
}

function closeCitationNav() {
  document.querySelector(".citation-mobile-header").setAttribute('style', '');
  document.getElementsByTagName('header')[0].style.display = "";
  document.getElementsByTagName('main')[0].style.display = "";
}

// Get the offset position of the navbar
const header = document.querySelector(".sticky");
let sticky = header.offsetTop;

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  if (header != null) {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky-header");
    } else {
      header.classList.remove("sticky-header");
    }
  }
};
