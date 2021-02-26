//Script for opening and closing menu
function openNav() {
  document.getElementById("mySidebar").style.width = "55%";
}
function closeNav() {
  document.getElementById("mySidebar").removeAttribute("style");
}

$(window).on('resize', function () {  // detects change in width
  closeNav();
});


function setActive() { // Set Active
  $('nav li [href="' + location.pathname.split("/")[1] + '"]').parent().addClass('active');
};


