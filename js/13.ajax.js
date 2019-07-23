$("#btGetData").click(function(){
	$.ajax({
		url: "../json/score.json",
		type: "get",
		dataType: "json",
		success: function(res){
			console.log(res);
		}
	});
});