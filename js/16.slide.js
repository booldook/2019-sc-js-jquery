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
	var interval;
	var $slides = $(".slides2");
	$slides.append($slides.find(".slide").eq(0).clone());
	var $slide = $slides.children(".slide");
	var $pagers = $slides.parent().find(".pager");
	var $pager = $pagers.children("li");
	var $btPrev = $slides.parent().find(".bt-prev");
	var $btNext = $slides.parent().find(".bt-next");
	$(window).resize(function(){
		$slides.innerHeight($slide.eq(0).innerHeight());
	}).trigger("resize");
	$slide.each(function(i){
		$(this).css({"left": (i*100)+"%"});
	});
	$pager.eq(0).addClass("pager-sel");
	$pager.click(function(){
		now = $(this).index();
		clearInterval(interval);
		interval = setInterval(slideAni, gap);
		slideAni();
	});
	$slides.mouseenter(function(){
		clearInterval(interval);
	});
	$slides.mouseleave(function(){
		clearInterval(interval);
		interval = setInterval(slideAni, gap);
	});
	$btPrev.click(function(){
		
	});
	$btNext.click(function(){

	});

	interval = setInterval(slideAni, gap);
	function slideAni(){
		$pager.removeClass("pager-sel");
		if(now == 5) $pager.eq(0).addClass("pager-sel");
		else $pager.eq(now).addClass("pager-sel");
		$slides.stop().animate({"left": -(now*100)+"%"}, speed, function(){
			if(now == $slide.length - 1) {
				$slides.css({"left": 0});
				now = 1;
			}
			else now++;
		});
	}
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