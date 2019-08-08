var data;					// ajax 데이터
var html;					// ajax 데이터를 가공하여 생성할 DOM을 담을 변수					
var now = 0;			// 가운데 그림
var end;					// 마지막 li의 index
var dir = "L";		// 움직일 방향 ("L", "R")
var tar;					// $(".slides")가 움직일 값
var speed = 500;
var gap = 3000;

init();
function init() {
	$.ajax({
		type: "get",
		url: "../json/slide2.json",
		dataType: "json",
		success: function (res) {
			data = res.slides;
			end = data.length - 1;
			for(var i=0; i<3; i++) {
				html  = '<li class="slide" style="flex: 100% 0 0">';
				html += '<img src="" class="w-100">';
				html += '</li>';
				$(".slides").append(html);
			}
			slideInit();
		}
	});
}

function slideInit() {
	if(now == 0) prev = end;
	else prev = now - 1;
	if(now == end) next = 0;
	else next = now + 1;
	$(".slide").eq(0).find("img").attr("src", data[prev].src);
	$(".slide").eq(1).find("img").attr("src", data[now].src);
	$(".slide").eq(2).find("img").attr("src", data[next].src);
	$(".slides").css({"left":"-100%"});
}

function slideAni() {
	if(dir == "L") tar = "-200%";
	else tar = 0;
	$(".slides").stop().animate({"left": tar}, speed, function(){
		if(dir == "L") now = next;
		else now = prev;
		slideInit();
	});
}

$("#btPrev").click(function(){
	clearInterval(interval);
	interval = setInterval(slideAni, gap);
	dir = "L";
	slideAni();
});

$("#btNext").click(function(){
	clearInterval(interval);
	interval = setInterval(slideAni, gap);
	dir = "R";
	slideAni();
});

interval = setInterval(slideAni, gap);