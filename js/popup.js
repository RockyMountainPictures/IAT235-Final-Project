/*---------------VARIABLES---------------*/

const popups = document.querySelectorAll(".box");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("popup-close");
const mascot = document.querySelector(".popup-mascot");
const map = document.getElementById("map");
const header = document.getElementsByTagName('header')[0];
const body = document.getElementsByTagName('body')[0];

/*------------------------------------*/

/*---------------TEXT CONTENT---------------*/

const popupTitles = ["Dog Sledding", "Ice Canoeing", "Bonhomme's Parade", "Food Truck Alley", "Bonhomme's Ice Palace", "Outdoor Concerts"];

const popupTexts = ["The qimmiits, an ancient breed of sled dogs, have been faithfully serving their Inuit humans in the Arctic for thousands of years. Qimmiit have become more of a symbol or a connection to the cultural past. They have been the reliable companions, traversing vast snowy landscapes, helping their humans travel through the harsh conditions, all the while having fun with their companions.<span id=\"dots\">.. </span><button onclick=\"read()\" id=\"read-more-button\">read more</button><span id=\"more-text\"><br><br>However, with the advent of modern technology such as snowmobiles, the qimmiits have evolved into joy-chasers, embracing the thrill of adventure. They now engage in races, competing against each other to showcase their incredible speed, and endurance across the terrain. <button onclick=\"read()\" id=\"read-less-button\">read less</button></span>",

  "For 21 years, the ice canoe racers has embraced the thrilling experience of gliding across the frozen St. Lawrence River with their team. The 5-10km course challenges their bodies and minds as they navigate through floating ice, freezing water, and ice floes with unwavering determination - with strength and mobility through coarsing rivers and icy cold weather.<span id=\"dots\">.. </span><button onclick=\"read()\" id=\"read-more-button\">read more</button><span id=\"more-text\"><br><br>The crowd\'s cheers act as a powerful surge of adrenaline, propelling them forward towards the finish line. Crossing that final threshold feels like a triumphant testament to their unwavering perseverance and outstanding teamwork. As spectators, let us join together in cheering these athletes on, wishing the best team their all in this exhilarating competition and may the best ice canoeing team win. <button onclick=\"read()\" id=\"read-less-button\">read less</button></span>",

  "The Bonhomme Parade at Carnaval de Québec is a highlight of the annual winter festivities held in Quebec City, Canada. Celebrated during the Winter Carnival, the parade features the iconic and lovable figure, Bonhomme, the jolly snowman!<span id=\"dots\">... </span><button onclick=\"read()\" id=\"read-more-button\">read more</button><span id=\"more-text\"><br><br>With locals and visitors alike gathering to join in on the fun, enjoying the vibrant floats, elaborate costumes, the Bonhomme Parade at Carnaval de Québec truly captures the essence of winter wonderland and fosters a sense of unity and joy among all who participate in the event. <button onclick=\"read()\" id=\"read-less-button\">read less</button></span>",

  "Carnaval de Québec is a culinary wonderland that beckons attendees with a treasure trove of delicious foods to captivate their taste buds. Among the many delights, one famous delicacy is the warm maple taffy that shines as an irresistible treat, enticing visitors with its sweet nectar boiled beyond syrup and carefully poured onto a snowy bed, then playfully twisted around a popsicle stick.<span id=\"dots\">.. </span><button onclick=\"read()\" id=\"read-more-button\">read more</button><span id=\"more-text\"><br><br>Rooted in Québec's rich culture, the poutine proudly graces the Carnaval's grounds, offering a comforting and hearty experience available in various renditions, from gourmet offerings at Michelin star restaurants to the simple yet satisfying versions found while leisurely strolling through the festive atmosphere. <button onclick=\"read()\" id=\"read-less-button\">read less</button></span>",

  "Before them stands a majestic palace crafted from a whopping 3000 blocks of ice! Inside, everything a jolly mascot could desire awaits to make the Carnaval a blast – a cozy bedroom for sweet dreams, a sizzling kitchen to whip up tasty treats, and a fancy dining room for feasting like royalty in the glistening atmosphere.<span id=\"dots\">.. </span><button onclick=\"read()\" id=\"read-more-button\">read more</button><span id=\"more-text\"><br><br>As the sun sets, the palace transforms into the city's wildest party hub, with groovy tunes, dazzling lights, and delightful drinks! Its personal DJ keeps the beats pumping all night long, setting the scene for an unforgettable experience. Grab your pals, round up the crew, and embrace the Carnaval spirit as you paint the town red! <button onclick=\"read()\" id=\"read-less-button\">read less</button></span>",

  "The outdoor stage at the Quebec Winter Carnival exudes an electrifying atmosphere, with a lineup of performers that promise to enthral the crowd. The music and performances are so captivating that it gets the audience's bodies moving and spirits soaring to new heights and the excitement of the crowd.<span id=\"dots\">.. </span><button onclick=\"read()\" id=\"read-more-button\">read more</button><span id=\"more-text\"><br><br>The infectious energy of the crowd, joyfully jumping to the beats, eclipses any awareness of the cold weather. The stage becomes a focal point of exhilaration and excitement with its music and performances, and with Bonhomme dj-ing the stage, it makes for a memorable experience for all in its attendance. <button onclick=\"read()\" id=\"read-less-button\">read less</button></span>"];

/*------------------------------------*/

/*---------------IMAGES---------------*/

let popupImages = new Array();

popupImages[0] = new Image();
popupImages[0].src = 'img/popup-images/DogSled4663x3107.webp';

popupImages[1] = new Image();
popupImages[1].src = 'img/popup-images/Canoe1024x768.webp';

popupImages[2] = new Image();
popupImages[2].src = 'img/popup-images/Bonhomme1262x946.webp';

popupImages[3] = new Image();
popupImages[3].src = 'img/popup-images/Food1500x1000.webp';

popupImages[4] = new Image();
popupImages[4].src = 'img/popup-images/IcePalace1375x1020.webp';

popupImages[5] = new Image();
popupImages[5].src = 'img/popup-images/OutdoorConcert1209×680.webp';

/*------------------------------------*/

/*--------------MASCOTS---------------*/

let popupMascots = new Array();

popupMascots[0] = new Image();
popupMascots[0].src = 'img/New-Mascots/New-sled-mascot-right.png';

popupMascots[1] = new Image();
popupMascots[1].src = 'img/New-Mascots/New-Canoe-Mascot.png';

popupMascots[2] = new Image();
popupMascots[2].src = 'img/New-Mascots/New-Parade-Mascot.png';

popupMascots[3] = new Image();
popupMascots[3].src = 'img/New-Mascots/New-FoodTruck-Mascot.png';

popupMascots[4] = new Image();
popupMascots[4].src = 'img/New-Mascots/New-Bonhomme-Mascot.png';

popupMascots[5] = new Image();
popupMascots[5].src = 'img/New-Mascots/New-Concert-Mascot.png';

/*------------------------------------*/


/*-------------FUNCTIONS---------------*/
// Run main function
checkPopups();


// --- SECONDARY FUNCTION: Display popup after content is loaded or window is resized --- //
function turnOnPopup() {
  // Turn off map
  map.style.display = "none";

  // Display popup
  popup.style.display = "flex";
  body.classList.add("open-popup");  // Add popup background image

  // Check for breakpoints
  let breakpoint1 = window.matchMedia("(max-aspect-ratio:7/10)");
  let breakpoint2 = window.matchMedia("(max-width: 600px)");
  let breakpoint3 = window.matchMedia("(hover: none)");

  // Turn on or off header and text interaction based on if it's a mobile device or a skinny screen
  let readMoreButton = document.getElementById("read-more-button");
  let readLessButton = document.getElementById("read-less-button");
  let moreText = document.getElementById("more-text");
  let dots = document.getElementById("dots");

  if (breakpoint1.matches || breakpoint2.matches || breakpoint3.matches) {
    header.style.display = "none";
    dots.style.display = "inline";
    readMoreButton.style.display = "inline";
    moreText.style.display = "none";
    readLessButton.style.display = "none";
  }
  else {
    header.style.display = "";
    dots.style.display = "none";
    readMoreButton.style.display = "none";
    moreText.style.display = "inline";
    readLessButton.style.display = "none";
  }

  // Ensure mascot sticks to right side of the screen when it's met max-height
  let mascotStyle = getComputedStyle(mascot);
  
  if(mascotStyle.height == mascotStyle.maxHeight && (breakpoint1.matches || breakpoint2.matches || breakpoint3.matches))
    mascot.setAttribute ('style', 'width: auto !important;');
  else
    mascot.setAttribute ('style', '');
}


// --- Remove popup and display map --- //
function turnOffPopup() {
  // Turn off popup
  popup.style.display = "none";
  body.classList.remove("open-popup");  // Remove popup background image

  // Turn on map
  map.style.display = "";

  // Ensure header is on
  header.style.display = "";
}


// --- MAIN FUNCTION: Triggered after clicking on icon. Populating correct content and turns on the popup --- //
function checkPopups() {
  console.log("MAIN");
  // Listen for click on each activity icon
  for (let box of popups) {
    box.addEventListener("click", function(e) {
      const boxNum = parseInt(e.target.dataset.box);  // Find which icon was clicked
      console.log(boxNum);
      // Place content in popup template
      popup.querySelector(".popup-title").innerHTML = popupTitles[boxNum];
      popup.querySelector(".popup-text").innerHTML = popupTexts[boxNum];
      popup.querySelector(".popup-image").src = popupImages[boxNum].src;
      popup.querySelector(".popup-mascot").src = popupMascots[boxNum].src;

      // Ensure popup is active when turning off popup
      if (popup.style.visibility == "visible")
        turnOffPopup();
      else
        turnOnPopup();
    });
  }
}


// --- Close the popup when user clicks on the 'X' in the popup --- //
closePopup.addEventListener('click', function() {
  turnOffPopup();
});


// --- Expands or contracts the amount of text on mobile devices when clicking "read more" or "read less" --- //
function read() {
  // Find components in text
  let dots = document.getElementById("dots");
  let readMoreButton = document.getElementById("read-more-button");
  let moreText = document.getElementById("more-text");
  let readLessButton = document.getElementById("read-less-button");

  // Toggle more or less text shown
  if (dots.style.display == "none") {
    dots.style.display = "inline";
    readMoreButton.style.display = "inline";
    moreText.style.display = "none";
    readLessButton.style.display = "none";
  } 
  else {
    dots.style.display = "none";
    readMoreButton.style.display = "none";
    moreText.style.display = "inline";
    readLessButton.style.display = "inline";
  }
}

// --- Rerun turning on the popup to ensure header is visible after resizing to a larger viewport width --- //
window.addEventListener('resize', function() {
  if (map.style.display == "none") {  // Ensure popup is on
      turnOnPopup();
    }
});