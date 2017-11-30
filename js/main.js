$(document).ready(function(){
	$('.radioSelect').slick({
        centerMode: true,
        centerPadding: '10px',
        infinite: true,
        slidesToShow: 1,
        asNavFor: '.radioName'
	});
});
$(document).ready(function(){
	$('.radioName').slick({
        slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		fade: true,
	});
});