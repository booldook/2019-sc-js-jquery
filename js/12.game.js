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