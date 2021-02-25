$(function(){
	$('#footer').load('htmlSegments/footer.html');
});

$(function(){
	$('#navBar').load('htmlSegments/navBar.html', function(){
		setActive(); // Add active class to current tab
	});

});