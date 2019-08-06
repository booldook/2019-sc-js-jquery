/*
var $li = $(html).appendTo(".banner");
$li.css({"left": (i*100)+"%"});
// 주석된 두줄은 아래의 한줄과 동일하다.
*/
//$(html).appendTo(".banner").css({"left": (i*100)+"%"});
//$($(".slide").eq(0).clone()).appendTo(".banner").css({"left": (data.length*100)+"%"});
/*
$(window).resize(function(){
	$(".banner").outerHeight($(".slide img").eq(0).outerHeight());
});
$(".banner").imagesLoaded(function(){
	$(window).trigger("resize");
});
*/


// 전역변수
var data = null;			// ajax를 통해 전달될 data
var interval = null;	// interval을 저장할 변수
var now = 1;					// 애니메이션이 진행되어 나올 li의 index
var view = 0;					// 애니메이션이 진행되기 전 현재의 li의 index
var speed = 500;			// 애니메이션 속도
var gap = 3000;				// interval 간격

// 최초실행
init();
function init() {
	$.ajax({
		type: "get",
		url: "../json/slide.json",
		dataType: "json",
		success: function (res) {
			console.log(res);
			data = res.slides;
			slideInit();
		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	});
}

// 슬라이드 생성
function slideInit() {
	var html;
	for(var i in data) {
		html  = '<li class="slide position-relative" style="flex: 100% 0 0;">';
		html += '<img src="'+data[i].src+'" class="w-100">';
		html += '<ul class="slogan position-absolute">';
		html += '<li class="title">'+data[i].title+'</li>';
		html += '<li class="desc">'+data[i].description+'</li>';
		html += '</ul>';
		html += '</li>';
		$(".slides").append(html);
		$(".pager").append('<li class="text-secondary pointer mx-1">●</li>');
	}
	$(".slides").append($(".slide").eq(0).clone());
	interval = setInterval(slideAni, gap);
}

function slideAni() {
	$(".slides").stop().animate({"left": -(now*100)+"%"}, speed, function(){
		if(now == data.length) {
			now = 1;
			$(this).css({"left": 0});
		}
		else now++;
	});
}

$(".banner").mouseover(function(){
	clearInterval(interval);	
});

$(".banner").mouseleave(function(){
	interval = setInterval(slideAni, gap);
});