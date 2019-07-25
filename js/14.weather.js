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
		}
	});
}