// 전역변수
var appid = '02efdd64bdc14b279bc91d9247db4722';
var dailyURL = 'https://api.openweathermap.org/data/2.5/weather';
var cityId;

// 초기화-도시선택
init();
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
	$(".main").hide();
	$(".daily").removeClass("d-none");
	$(".daily").find(".temp").html(res.main.temp+" ℃");
	$(".daily").find(".desc").html(res.weather[0].description);
	console.log("../img/icon/"+res.weather[0].icon+".png");
	$(".daily").find(".d-icon").attr("src", "../img/icon/"+res.weather[0].icon+".png");
}