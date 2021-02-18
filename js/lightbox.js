// Enable keyboard to navigate though lightbox
document.onkeydown = function (e) {
  switch (e.key) {
    case 'ArrowLeft': // left
    case 'ArrowUp':
    case 'a':
    case 'w':
      plusSlides(-1);
      break;
    case 'Escape': // esc
      closeModal();
      break;
    case 'ArrowRight': // right
    case 'ArrowDown':
    case 'd':
    case 's':
      plusSlides(1);
      break;
  }
};


// Open the Modal
function openModal() {  // Modal is disabled for small devices
  if ($(window).width() > 1020) {	//1020
    document.getElementById('myModal').style.display = "block";
  }
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  //console.log(slides);
  //console.log(dots);
  var captionText = document.getElementById("caption");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  //	dots[slideIndex-1].className += " active";
  //	console.log(dots[slideIndex-1].title);
  //  captionText.innerHTML = dots[slideIndex-1].title;
}

