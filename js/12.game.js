/*
<div class="pic my-3">
<img src="../img/pic.png" class="w-100">
<div class="badge badge-danger">1</div>
</div>
*/

$("#btInit").click(function(){
	var cnt = $("#cnt").val();
	for(var i=0; i<cnt; i++) {
		html  = '<div class="pic my-3">';
		html += '<img src="../img/pic.png" class="w-100">';
		html += '<div class="badge badge-danger">'+(i+1)+'번</div>';
		html += '</div>';
		$("#stage").append(html);
	}
	$(this).hide();
	$("#btStart").show();
	$("#btReset").show();
});

$("#btReset").click(function(){
	$("#cnt").val("4");
	$(this).hide();
	$("#btStart").hide();
	$("#btInit").show();
	$("#stage").empty();
});

$("#btStart").click(function(){
	var ranking = [];
	$(".pic").each(function(){
		var speed = Math.ceil(Math.random() * 3000 + 3000);
		$(this).animate({"left":"90%"}, speed, function(){
			//console.log(	$(this).index()	);
			ranking.push($(this).index());
			if(ranking.length == $("#cnt").val()) {
				var html = ''
				for(var i=0; i<ranking.length; i++) {
					html += '<h3>'+(ranking[i]+1)+'번</h3>';
				}
				$(".modal-body").find("p").html(html);
				$("#modal").modal();
			}	
		});
	});

	//console.log(speed);
	/*
	for(var i=0; i<$(".pic").length; i++) {
		speed = Math.ceil(Math.random() * 3000 + 3000);
		console.log(speed);
		$(".pic").eq(i).animate({"left": "90%"}, speed);
	}
	*/
});

/* 
Math.ceil  => 올림
Math.floor => 버림
Math.round => 반올림
Math.abs   => 절대값
*/