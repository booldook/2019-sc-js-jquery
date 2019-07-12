$("#thumb img").click(function(){
	//var src = $(this).attr("src");
	$("#pic").attr("src", $(this).attr("src"));
	$("#pic").attr("alt", $(this).attr("alt"));
});

$("#pic").click(function(){
	$("#m-pic").attr("src", $(this).attr("src"));
	$(".modal-title").text($(this).attr("alt"));
	$("#myModal").modal();
});

$("#thumb img").eq(3).trigger("click");