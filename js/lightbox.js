document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: // left
            plusSlides(-1);
            break;
        case 27: // esc
            closeModal();
            break;
        case 39: // right
            plusSlides(1);
            break;
    }
};


// Open the Modal
function openModal() {  // Modal is disabled for small devices
	if ($(window).width() > 1020) {	
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
 
    
  slides[slideIndex-1].style.display = "block";
  captionText.innerHTML = dots[slideIndex-1].alt;
}