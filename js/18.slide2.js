var data;					// ajax 데이터
var html;					
var now = 0;			// 가운데 그림
var end;					// 마지막 li의 index
var dir = "L";		// 움직일 방향 ("L", "R")
var tar;					// $(".slides")가 움직일 값 -$(".slide").width()<=wid * 2 / 0
var speed = 500;
var gap = 3000;
var interval;
var cnt = 4;											// 화면에 보여진 $(".slide") 갯수
var slideCnt = cnt + 2;						// 실제 생성될 $(".slide") 갯수
var wid = (100/cnt).toFixed(4);		// $(".slide")의 width (%로)
var temp = [];										// $(".slide")에 들어갈 내용의 번호

init();
function init() {
	$.ajax({
		type: "get",
		url: "../json/slide2.json",
		dataType: "json",
		success: function (res) {
			data = res.slides;
			end = data.length - 1;
			for(var i=0; i<slideCnt; i++) {
				html  = '<li class="slide border border-danger" style="flex: '+wid+'% 0 0">';
				html += '<img src="" class="w-100">';
				html += '</li>';
				$(".slides").append(html);
			}
			slideInit();
		}
	});
}

function slideInit() {
	for(var i=0; i<slideCnt; i++) {
		if(i == 0) {
			if(now == 0) temp[i] = end;
			else temp[i] = now - 1;
		}
		else {
			if(now + i - 1 > end) temp[i] = now + i - 2 - end;
			else temp[i] = now + i - 1;
		}
	}
	console.log(temp);
	$(".slide").each(function(i){
		$(this).find("img").attr("src", data[temp[i]].src);
	});
	$(".slides").css({"left": -wid+"%"});
}






/*
function slideInit() {
	if(now == 0) temp[0] = end;
	else temp[0] = now - 1;
	for(var i=0; i<slideCnt - 1; i++) {
		if(now + i > end) temp[i+1] = now + i - end - 1;
		else temp[i+1] = now + i;
	}
	console.log(temp);
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

$(".banner").hover(function(){
	clearInterval(interval);
}, function(){
	clearInterval(interval);
	interval = setInterval(slideAni, gap);
});
*/
