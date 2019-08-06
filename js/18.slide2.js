var data;
var html;
var now = 0;
var end;
var prev;
var next;
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
}