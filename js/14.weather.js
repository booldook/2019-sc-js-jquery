// 전역변수
var appid = '02efdd64bdc14b279bc91d9247db4722';
var dailyURL = 'https://api.openweathermap.org/data/2.5/weather';
var weeklyURL = 'https://api.openweathermap.org/data/2.5/forecast';
var cityId;
var cityName;
var now = 0;
var bodyHei = 0;

// 초기화-도시선택
init();
navInit();
function init() {
	$.ajax({
		type: "get",
		url: "../json/city.json",
		dataType: "json",
		success: function (res) {
			for(var i in res.cities) {
				$("#city").append('<option value="'+res.cities[i].id+'">'+res.cities[i].name+'</option>');
			}
			$("#city").change(function(){
				cityId = $(this).val();
				cityName = $(this).find('option:selected').text();
				now = 1;
				navInit();
				dailyInit();
				weeklyInit();
			});
		}
	});
}

$(window).resize(function(){
	bodyHei = $("body").innerHeight();
	console.log(bodyHei);
	$(".weekly > div").css("height", (bodyHei*0.6)+"px");
}).trigger("resize");


// 화면연동
$("#nav-wrap > li").click(function(){
	now = $(this).index();
	navInit();
});

function navInit() {
	$("#conts > div").addClass("d-none");
	$("#conts > div").eq(now).removeClass("d-none");
	if(now == 0) $("#nav-wrap").addClass("d-none").removeClass("d-flex");
	else {
		$("#nav-wrap").removeClass("d-none").addClass("d-flex");
		$("#nav-wrap > li").removeClass("btn-primary").addClass("btn-secondary");
		$("#nav-wrap > li").eq(now).removeClass("btn-secondary").addClass("btn-primary");
	}
}


// 오늘의 날씨 정보 가져오기
function dailyInit() {
	$.ajax({
		type: "get",
		url: dailyURL,
		data: {
			appid: appid,
			id: cityId,
			units: "metric"
		},
		dataType: "json",
		success: function (res) {
			console.log(res);
			if(res.cod == 200) dailyView(res);
			else alert("날씨정보를 가져올 수 없습니다.\n다시 시도해 주세요.");
		}
	});
}

// 오늘의 날씨 정보 생성하기
function dailyView(res) {
	$(".daily").find(".city-name").html(cityName);
	$(".daily").find(".temp").html(res.main.temp+" ℃");
	$(".daily").find(".desc").html(res.weather[0].description);
	console.log("../img/icon/"+res.weather[0].icon+".png");
	$(".daily").find(".d-icon").attr("src", "../img/icon/"+res.weather[0].icon+".png");
}

// 주간 날씨정보 가져오기
function weeklyInit() {
	$.ajax({
		type: "get",
		url: weeklyURL,
		data: {
			appid: appid,
			id: cityId,
			units: "metric"
		},
		dataType: "json",
		success: function (res) {
			console.log(res);
			if(res.cod == 200) weeklyView(res);
			else alert("날씨정보를 가져올 수 없습니다.\n다시 시도해 주세요.");
		}
	});
}

// 주간 날씨정보 생성하기
function weeklyView(res) {
	var html = '';
	for(var i in res.list) {
		html  = '<div class="weekly-item media border-bottom border-secondary p-3">';
		html += '<img class="align-self-start w-100" src="../img/icon/01d.png" style="max-width: 80px;">';
		html += '<div class="media-body px-3">';
		html += '<h4 class="py-2">';
		html += '<span class="temp">25</span>℃ ';
		html += '<span class="desc ml-3">Light rain</span>';
		html += '</h4>';
		html += '<div class="date">2019-07-26 24:00:00</div>';
		html += '</div>';
		html += '</div>';
		$(".weekly > div").append(html);
	}
}

/*
<div class="weekly-item media border-bottom border-secondary p-3">
<img class="align-self-start w-100" src="../img/icon/01d.png" style="max-width: 80px;">
<div class="media-body px-3">
<h4 class="py-2">
<span class="temp">25</span>℃ 
<span class="desc ml-3">Light rain</span>
</h4>
<div class="date">2019-07-26 24:00:00</div>
</div>
</div>
*/