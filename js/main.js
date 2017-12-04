var audioPlayer1 = document.getElementById("audio-player1");
var audioPlayer2 = document.getElementById("audio-player2");
var audioPlayer3 = document.getElementById("audio-player3");

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


$(".selectOne").hide(0);
$(".selectTwo").hide(0);
$(".selectThree").hide(0);


$(".radioItem1").on("click", function(){

  $(".selectOne").hide(0);
  $(".selectTwo").hide(0);
  $(".selectThree").hide(0);

  $(".selectOne").slideDown(400);
  if (audioPlayer1.play) {
    audioPlayer1.pause();
  }
  if (audioPlayer2.play) {
    audioPlayer2.pause();
  }
  if (audioPlayer3.play) {
    audioPlayer3.pause();
  }

});
$(".radioItem2").on("click", function(){
  

  $(".selectOne").hide(0);
  $(".selectTwo").hide(0);
  $(".selectThree").hide(0);

  $(".selectTwo").slideDown(400);

});
$(".radioItem3").on("click", function(){
  $(".selectOne").hide(0);
  $(".selectTwo").hide(0);
  $(".selectThree").hide(0);

  $(".selectThree").slideDown(400);

});