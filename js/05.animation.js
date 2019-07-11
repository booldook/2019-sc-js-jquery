$("#bt1").click(function(){
	$(".box").slideToggle(500);
	//$(".box").toggle(300);
	//$(".box").fadeToggle(300);
});

$("#bt-show").click(function(){
	$(".box").slideDown(500);
	//$(".box").show(300);
	//$(".box").fadeIn(500);
});

$("#bt-hide").click(function(){
	$(".box").slideUp(500);
	//$(".box").hide(300);
	//$(".box").fadeOut(500);
});
