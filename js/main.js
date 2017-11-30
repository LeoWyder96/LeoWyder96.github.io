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


// $(".selectOne").hide(1);
$(".selectTwo").hide(1);
$(".selectThree").hide(1);


$(".radioItem1").on("click", function(){
  $(".selectOne").hide(1);
  $(".selectTwo").hide(1);
  $(".selectThree").hide(1);

  $(".selectOne").slideDown(400);

});
$(".radioItem2").on("click", function(){
  $(".selectOne").hide(1);
  $(".selectTwo").hide(1);
  $(".selectThree").hide(1);

  $(".selectTwo").slideDown(400);

});
$(".radioItem3").on("click", function(){
  $(".selectOne").hide(1);
  $(".selectTwo").hide(1);
  $(".selectThree").hide(1);

  $(".selectThree").slideDown(400);

});