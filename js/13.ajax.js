/* 
RESTFul API : CRUD (Create, Read, Update, Delete)
C: https://webmir.co.kr/score/score_in.php [post][stdname, kor ...]
R: https://webmir.co.kr/score/score_li.php [get/post]
U: https://webmir.co.kr/score/score_up.php [post]
D: https://webmir.co.kr/score/score_del.php [post][id: id]
*/

init();

// Read 데이터 불러오기
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
				html += '<td>';
				html += '<button class="btn btn-sm btn-danger" onclick="dataRev('+res.student[i].id+');">삭제</button> ';
				html += '<button class="btn btn-sm btn-success" onclick="dataChg(this);">수정</button>';
				html += '<button class="btn btn-sm btn-info d-none" onclick="dataUpdate(this,'+res.student[i].id+');">저장</button>';
				html += '</td>';
				html += '</tr>';
				$("#tb-score").find("tbody").append(html);
			}
		}
	});
}


// Create 데이터 저장하기
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
			/* $stdname.val('');
			$kor.val('');
			$eng.val('');
			$math.val(''); */
			document.formScore.reset();
			init();
		}
	});
});

// 데이터 삭제하기
function dataRev(id) {
	//var id = $(obj).parent().parent().find("td").eq(0).text();
	if(confirm("정말로 삭제하시겠습니까?")) {
		$.ajax({
			type: "post",
			url: "https://webmir.co.kr/score/score_del.php",
			data: { id: id },
			dataType: "json",
			success: function (res) {
				console.log(res);
				init();
			}
		});
	}
}

// 데이터 수정하기
// $(객체).parent() => 객체의 부모 
// $(객체).next()   => 객체의 형제중 앞에 있는 객체
// $(객체).prev()   => 객체의 형제중 뒤에 있는 객체
function dataChg(obj) {
	$(obj).addClass("d-none");
	$(obj).next().removeClass("d-none");
	var $tr = $(obj).parent().parent();
	var $td = [];
	var val = [];
	var tag = [];
	for(var i=1; i<=4; i++) {
		$td[i] = $tr.find("td").eq(i);
		val[i] = $td[i].text();
		if(i == 1) tag[i] = '<input type="text" class="form-control" value="'+val[i]+'">';
		else tag[i] = '<input type="number" class="form-control" value="'+val[i]+'">';
		$td[i].html(tag[i]);
	}
	/*
	var name = $tr.find("td").eq(1).text();
	var kor = $tr.find("td").eq(2).text();
	var eng = $tr.find("td").eq(3).text();
	var math = $tr.find("td").eq(4).text();
	var nameTag = '<input type="text" name="stdname" class="stdname form-control" value="'+name+'">';
	var korTag = '<input type="text" name="kor" class="kor form-control" value="'+kor+'">';
	var engTag = '<input type="text" name="eng" class="eng form-control" value="'+eng+'">';
	var mathTag = '<input type="text" name="math" class="math form-control" value="'+math+'">';
	$tr.find("td").eq(1).html(nameTag);
	$tr.find("td").eq(2).html(korTag);
	$tr.find("td").eq(3).html(engTag);
	$tr.find("td").eq(4).html(mathTag);
	*/
}

// 수정한 데이터 저장하기
function dataUpdate(obj, id) {
	var $tr = $(obj).parent().parent();
	var val = [];
	val[0] = id;
	for(var i=1; i<=4; i++) val[i] = $tr.find("td").eq(i).children("input").val();
	$.ajax({
		type: "post",
		url: "https://webmir.co.kr/score/score_up.php",
		data: {
			id: val[0],
			stdname: val[1],
			kor: val[2],
			eng: val[3],
			math: val[4]
		},
		dataType: "json",
		success: function (res) {
			console.log(res);
			init();
		}
	});
}









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