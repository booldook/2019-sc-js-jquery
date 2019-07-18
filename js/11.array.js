var lotto = [];
for(var i=0; i<45; i++) {
	lotto[i] = (i + 1) + "번";
}

var man = {
	name: "홍길동"
}
man.name


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
	}
]; 


for(var i=0; i<3; i++) {
	html = '<li class="list-group-item"><div class="row"><div class="col-3">'+scores[i].name+'</div><div class="col-3">국어:'+scores[i].kor+'점</div><div class="col-3">영어:'+scores[i].eng+'점</div><div class="col-3">수학:'+scores[i].math+'점</div></div></li>';
	
	$(".list-group").append(html);


	// $(".list-group").append('<li class="list-group-item">'+scores[i].name+'</li>');
}