function getRem(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function setDynamicPadding() {
  var breakpoint = window.matchMedia("(max-width: 600px)");

  if (breakpoint.matches) { // If media query matches
    var height = document.getElementById("about-summary-height").clientHeight;
    var vw = window.innerWidth;
    var fixedHeight = height - Math.min(getRem(2), vw * 0.08) + getRem(2.5);
    var fixedMargin = -height + Math.min(getRem(2), vw * 0.08);
    document.getElementById("about-details-height").style.paddingTop = String(fixedHeight) + "px";
    document.getElementById("about-details-height").style.marginTop = String(fixedMargin) + "px";
    console.log(fixedHeight);
  }

  else {
    document.getElementById("about-details-height").style.paddingTop = null;
    document.getElementById("about-details-height").style.marginTop = null;
  }
}

function activateHeaderBackground() {
  var breakpoint = window.matchMedia("(min-width: 993px)");
  var breakpoint2 = window.matchMedia("(hover: hover)");
  
  if(breakpoint.matches && breakpoint2.matches) {
  document.querySelector(".header-background").style.height = "8.75rem";
  }
}

function deactivateHeaderBackground() {
  document.querySelector(".header-background").style.height = "0";
}

window.onload = setDynamicPadding;
window.addEventListener('resize', setDynamicPadding);