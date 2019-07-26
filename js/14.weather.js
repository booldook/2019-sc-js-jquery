// 전역변수
var appid = '02efdd64bdc14b279bc91d9247db4722';
var dailyURL = 'https://api.openweathermap.org/data/2.5/weather';
var cityId;
var now = 0;

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
				dailyInit();
			});
		}
	});
}

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
	now = 1;
	navInit();
	$(".daily").find(".temp").html(res.main.temp+" ℃");
	$(".daily").find(".desc").html(res.weather[0].description);
	console.log("../img/icon/"+res.weather[0].icon+".png");
	$(".daily").find(".d-icon").attr("src", "../img/icon/"+res.weather[0].icon+".png");
}