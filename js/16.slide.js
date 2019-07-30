/*
// 후위연산자 => 선 적용후 증가
var n = 10;
console.log(n++);
console.log(n);

//전위연산자 => 선 증가후 적용
var m = 10;
console.log(++m);
console.log(m);


1. setInterval(fn, delay(ms)) : delay 시간마다 fn을 실행해주는 함수
setInterval(function(){

}, 3000);

// 정해진 시간마다 페이지 새로고침 예제
setInterval(function(){
	location.reload();
}, 5000);

for(var i=0; i<5; i++) {
	$(".slide").eq(i).css({"left":(i*100)+"%"});
}
*/

//IIFE => 즉시실행함수표현식(Immediatly Invoke Function Expression)
(function () {
	var now = 1;
	var speed = 500;
	var gap = 3000;
	$(window).resize(function(){
		$(".slides").innerHeight($(".slides > .slide").eq(0).innerHeight());
	}).trigger("resize");
	$(".slides > .slide").each(function(i){
		$(this).css({"left": (i*100)+"%"});
	});
	setInterval(function(){
		$(".slides").stop().animate({"left": -(now*100)+"%"}, speed, function(){
			if(now == $(".slides > .slide").length - 1) now = 0;
			else now++;
		});
	}, gap);
})();

(function(){
	var now = 1;
	var speed = 500;
	var gap = 3000;
	$(window).resize(function(){
		$(".slides2").innerHeight($(".slides2 > .slide").eq(0).innerHeight());
	}).trigger("resize");
	$(".slides2").append($(".slides2 > .slide").eq(0).clone());
	$(".slides2 > .slide").each(function(i){
		$(this).css({"left": (i*100)+"%"});
	});
	setInterval(function(){
		$(".slides2").stop().animate({"left": -(now*100)+"%"}, speed, function(){
			if(now == $(".slides2 > .slide").length - 1) {
				$(".slides2").css({"left": 0});
				now = 1;
			}
			else now++;
		});
	}, gap);
})();

(function(){
	var now = 1;
	var speed = 500;
	var gap = 3000;
	var depth = 10;
	$(window).resize(function(){
		$(".slides3").innerHeight($(".slides3 > .slide").eq(0).innerHeight());
	}).trigger("resize");
	$(".slides3 > .slide").eq(0).css({"z-index": depth++});
	setInterval(function(){
		$(".slides3 > .slide")
		.eq(now)
		.css({"opacity":0, "z-index": depth++})
		.stop()
		.animate({"opacity": 1}, speed, function(){
			if(now == $(".slides > .slide").length - 1) now = 0;
			else now++;
		});
	}, gap);
})();

(function(){
	var now = 1;
	var speed = 500;
	var gap = 3000;
	$(window).resize(function(){
		$(".slides4").parent().innerHeight($(".slides4 > .slide").eq(0).innerHeight());
	}).trigger("resize");
	$(".slides4").append($(".slides4 > .slide").eq(0).clone());

	setInterval(function(){
		$(".slides4").stop().animate({"top":-(now*100)+"%"}, speed, function(){
			if(now == $(".slides4 > .slide").length - 1) {
				$(this).css({"top": 0});
				now = 1;
			}
			else now++;
		});
	}, gap);
})();