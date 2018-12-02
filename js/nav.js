//Script for opening and closing menu

function openNav() {
  	document.getElementById("mySidebar").style.width = "55%";
}
function closeNav() {
		document.getElementById("mySidebar").removeAttribute("style");
}



$(window).on('resize',function(){  // detects change in width
        closeNav();
});


$(function() { // Set Active
  $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});
