var lotto = [];
for(var i=0; i<45; i++) {
	lotto[i] = (i + 1) + "번";
}

var man = {
	name: "홍길동"
}

// 성적관리프로그램
var scores = [
	{
		name: "홍길동",
		kor: 90,
		math: 85,
		eng: 95
	},
	{
		name: "홍길순",
		kor: 80,
		math: 80,
		eng: 90
	},
	{
		name: "홍길만",
		kor: 95,
		math: 95,
		eng: 100
	},
	{
		name: "홍길영",
		kor: 85,
		math: 95,
		eng: 95
	}
]; 

console.log(scores.length);

var html = '';
for(var i=0; i<scores.length; i++) {
	html =  '<li class="list-group-item">';
	html += '<div class="row">';
	html += '<div class="col-3">'+scores[i].name+'</div>';
	html += '<div class="col-3">국어: '+scores[i].kor+'점</div>';
	html += '<div class="col-3">영어: '+scores[i].eng+'점</div>';
	html += '<div class="col-3">수학: '+scores[i].math+'점</div>';
	html += '</div>';
	html += '</li>';
	$(".list-group").append(html);
	// $(".list-group").append('<li class="list-group-item">'+scores[i].name+'</li>');
}