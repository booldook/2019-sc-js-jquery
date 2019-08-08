/*
var nowX = $(".box").offset().left;
var nowY = $(".box").offset().top;
$(window).mousemove(function(e){
	var wid = $(this).width() / 2;
	var hei = $(this).height() / 2;
	var posX = wid - e.pageX;
	var posY = hei - e.pageY;
	var tarX = 0;
	var tarY = 0;

	tarX = posX / 10;
	tarY = posY / 10;

	$(".box").css({"transform": "translate("+tarX+"px,"+tarY+"px)"});

	//console.log(wid, hei, e.pageX, e.pageY);
});
*/

$(".navi").mouseenter(function(){
	var tar = $(this).find(".sub").data("top");
	$(this).find(".sub")
	.css({"display":"block"})
	.stop()
	.animate({"top": tar, "opacity": 1}, 500);
});
$(".navi").mouseleave(function(){
	$(this).find(".sub").stop().animate({"top": "150px", "opacity": 0}, 500, function(){
		$(this).css({"display": "none"});
	});
});