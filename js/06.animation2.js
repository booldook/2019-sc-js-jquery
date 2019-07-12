/* 
fadeIn(), fadeOut(), fadeToggle(), 
show(), hide(), toggle()
slideUp(), slideDown(), slideToggle()
animate({css속성, 값}, 속도(ms), easing(linear/swing), function(){});
animate({"width":"200px"}, 1000, "swing", function(){});
*/

$("#bt1").click(function(){
	var css = {
		"background-color": "blue",
		"border": "10px solid green"
	};
	$(".box").css(css);
});

$("#bt2").click(function(){
	$(".box").animate({"left": "800px"}, 3000, function(){
		alert("애니메이션 완료");
	});
	//$(".box2").animate({"left": "800px"}, 2000, "linear");
});

$("#bt3").click(function(){
	$(".box2").animate({"left":"1000px"}, 1000, function(){
		$(this).animate({"top":"500px"}, 1000, function(){
			$(this).animate({"left": 0}, 1000, function(){
				$(this).animate({"top": "150px"}, 1000);
			});
		});
	});
});

$("#bt-reset").click(function(){
	$(".box, .box2").css({"left": 0});
});