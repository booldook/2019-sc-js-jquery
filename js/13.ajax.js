/* 
RESTFul API : CRUD (Create, Read, Update, Delete)
C: https://webmir.co.kr/score/score_in.php [post]
R: https://webmir.co.kr/score/score_li.php [get/post]
U: https://webmir.co.kr/score/score_up.php [post]
D: https://webmir.co.kr/score/score_li.php [post]
*/

init();
function init() {
	$.ajax({
		type: "get",
		url: "https://webmir.co.kr/score/score_li.php",
		dataType: "json",
		success: function (res) {
			$("#tb-score").find("tbody").empty();
			var html = '';
			for(i in res.student) {
				html  = '<tr>';
				html += '<td>' + res.student[i].id + '</td>';
				html += '<td>' + res.student[i].stdname + '</td>';
				html += '<td>' + res.student[i].kor + '</td>';
				html += '<td>' + res.student[i].eng + '</td>';
				html += '<td>' + res.student[i].math + '</td>';
				html += '</tr>';
				$("#tb-score").find("tbody").append(html);
			}
		}
	});
}

$("#btSave").click(function(){
	var $stdname = $("#stdname");
	var $kor = $("#kor");
	var $eng = $("#eng");
	var $math = $("#math");
	if($stdname.val() == "") {
		alert("이름을 입력하세요.");
		$stdname.focus();
		return false;
	}
	if($kor.val() == "") {
		alert("국어점수를 입력하세요.");
		$kor.focus();
		return false;
	}
	if($eng.val() == "") {
		alert("영어점수를 입력하세요.");
		$eng.focus();
		return false;
	}
	if($math.val() == "") {
		alert("수학점수를 입력하세요.");
		$math.focus();
		return false;
	}
	$.ajax({
		type: "post",
		url: "https://webmir.co.kr/score/score_in.php",
		data: {
			stdname: $stdname.val(),
			kor: $kor.val(),
			eng: $eng.val(),
			math: $math.val()
		},
		dataType: "json",
		success: function (res) {
			console.log(res);
			init();
		}
	});
});











$("#btGetData").click(function(){
	$.ajax({
		url: "https://webmir.co.kr/score/score_li.php",
		type: "get",
		dataType: "json",
		success: function(res){
			/*
			for(var i=0; i<res.scores.length; i++) {
				console.log(res.scores[i]);
			}
			*/
			$("#tb-score").find("tbody").empty();
			var html = '';
			for(i in res.student) {
				html  = '<tr>';
				html += '<td>' + res.student[i].id + '</td>';
				html += '<td>' + res.student[i].stdname + '</td>';
				html += '<td>' + res.student[i].kor + '</td>';
				html += '<td>' + res.student[i].eng + '</td>';
				html += '<td>' + res.student[i].math + '</td>';
				html += '</tr>';
				$("#tb-score").find("tbody").append(html);
			}
		}
	});
});

$("#btRevData").click(function(){
	$("#tb-score").find("tbody").empty();
});