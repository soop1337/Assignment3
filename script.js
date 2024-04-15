/*
  Flickity specific JavaScript (copied from the Flickity
  web site) referencing flickity.pkgd.min.js
  Creates a cool image carousel
*/
var carousel = document.querySelector(".carousel");
var flkty = new Flickity(carousel, {
  freeScroll: true,
  imagesLoaded: true,
  percentPosition: false,
  wrapAround: true
});

var imgs = carousel.querySelectorAll(".carousel-cell img");
// get transform property
var docStyle = document.documentElement.style;
var transformProp =
  typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";

flkty.on("scroll", function () {
  flkty.slides.forEach(function (slide, i) {
    var img = imgs[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    img.style[transformProp] = "translateX(" + x + "px)";
  });
});

// Second carousel of images
var carousel = document.querySelector(".carousel-duplicate");
var flkty = new Flickity(carousel, {
  freeScroll: true,
  imagesLoaded: true,
  percentPosition: false,
  wrapAround: true
});

var imgs = carousel.querySelectorAll(".carousel-cell img");
// get transform property
var docStyle = document.documentElement.style;
var transformProp =
  typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";

flkty.on("scroll", function () {
  flkty.slides.forEach(function (slide, i) {
    var img = imgs[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    img.style[transformProp] = "translateX(" + x + "px)";
  });
});

/* 
  The Flickity framework has some oddities that I could not figure out
  The carousels have a completely different visual format
  if I don't include this magical third invisible carousel
  */
var carousel = document.querySelector(".carousel-hidden");
var flkty = new Flickity(carousel, {
  freeScroll: true,
  imagesLoaded: true,
  percentPosition: false,
  wrapAround: true
});

var imgs = carousel.querySelectorAll(".carousel-cell img");
// get transform property
var docStyle = document.documentElement.style;
var transformProp =
  typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";

flkty.on("scroll", function () {
  flkty.slides.forEach(function (slide, i) {
    var img = imgs[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    img.style[transformProp] = "translateX(" + x + "px)";
  });
});

/*
  Custom JavaScript to display the selected image and its description
*/
function currentSlide(index, image) {
  // Creates an array for the image descriptions
  let text = document.getElementsByClassName("imageText");

  // Check for invalid index values
  if (index > text.length) {
    index = 1;
  }
  if (index < 1) {
    index = text.length;
  }

  // Hide all image description text when not selected
  for (i = 0; i < text.length; i++) {
    text[i].style.display = "none";
  }

  // Display the selected image
  document.getElementById("imageSelection").src = image.src;
  document.getElementById("imageSelection").alt = image.alt;

  // Display the selected image description
  text[index - 1].style.display = "block";
}
