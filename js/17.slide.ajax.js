// 전역변수
var data = null;
var interval = null;
var now = 1;
var view = 0;
var speed = 500;
var gap = 3000;

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
	$(".banner").append('<ul class="pager position-absolute w-100 d-flex justify-content-center fa-2x" style="bottom: 3%; z-index:9999;"></ul>');
	for(var i in data) {
		html  = '<li class="slide position-absolute w-100" style="top: 0;">';
		html += '<img src="'+data[i].src+'" class="w-100">';
		html += '<ul class="slogan position-absolute">';
		html += '<li class="title">'+data[i].title+'</li>';
		html += '<li class="desc">'+data[i].description+'</li>';
		html += '</ul>';
		html += '</li>';
		$(".banner").append(html);
		$(".pager").append('<li class="text-secondary pointer mx-1">●</li>');
	}

	$(window).resize(function(){
		$(".banner").outerHeight($(".slide img").eq(0).outerHeight());
	});
	$(".banner").imagesLoaded(function(){
		$(window).trigger("resize");
	});
}