$(function () {
  $('#footer').load('htmlSegments/footer.html');
});

$(function () {
  $('nav').load('htmlSegments/navBar.html', function () {
    setActive(); // Add active class to current tab
  });

});