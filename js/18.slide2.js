var data;					// ajax 데이터
var html;					
var now = 0;			// 가운데 그림
var end;					// 마지막 li의 index
var dir = "L";		// 움직일 방향 ("L", "R")
var tar;					// $(".slides")가 움직일 값 -$(".slide").width()<=wid * 2 / 0
var speed = 500;
var gap = 3000;
var interval;
var cnt = 5;													// 화면에 보여진 $(".slide") 갯수
var slideCnt = cnt + 2;						    // 실제 생성될 $(".slide") 갯수
var wid = (100/cnt).toFixed(4);	    	// $(".slide")의 width (%로)
var temp = [];										    // $(".slide")에 들어갈 내용의 번호

init();
function init() {
	$.ajax({
		type: "get",
		url: "../json/slide2.json",
		dataType: "json",
		success: function (res) {
			data = res.slides;
			end = data.length - 1;
			$(window).resize(function(){
				clearInterval(interval);
				interval = setInterval(slideAni, gap);
				var winWid = $(window).width();
				console.log(winWid);
				if(winWid < 576) {
					// 스마트폰 세로
					cnt = 1;
				}
				else if(winWid >= 576 && winWid < 768) {
					// 스마트폰 가로
					cnt = 2;
				}
				else if(winWid >= 768 && winWid < 992) {
					// 태블릿 세로
					cnt = 3;
				}
				else if(winWid >= 992 && winWid < 1200) {
					// 태블릿 가로
					cnt = 4;
				}
				else {
					// PC
					cnt = 5;
				}
				console.log(cnt);
				slideInit();
			}).trigger("resize");
		}
	});
}

function slideInit() {
	slideCnt = cnt + 2;
	wid = (100/cnt).toFixed(4);
	for(var i=0, html = ''; i<slideCnt; i++) {
		html += '<li class="slide p-2" style="flex: '+wid+'% 0 0">';
		html += '<img src="" class="w-100">';
		html += '</li>';
	}
	$(".slides").html(html);
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

function slideAni() {
	if(dir == "L") {
		tar = (-wid * 2)+"%";
		if(now == end) now = 0;
		else now++;
	}
	else {
		tar = 0;
		if(now == 0) now = end;
		else now--;
	}
	$(".slides").stop().animate({"left": tar}, speed, function(){
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



