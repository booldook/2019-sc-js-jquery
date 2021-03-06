/* 
1. selector
$(객체) 태그, 클래스, 아이디 ... 모든 css 선택자
$(객체).find(".name, div, #id ...") => 자손선택자
$(객체).children(".name, div, #id ...") => 자식선택자
$(객체).parent().parent()
$(객체).next()
$(객체).prev()
$(객체).first()
$(객체).last()
$(객체).eq(n)		=> return jQuery
$(객체).index()	=> return number(Integer)
https://www.w3schools.com/jquery/jquery_selectors.asp
https://www.w3schools.com/jquery/jquery_ref_selectors.asp
https://www.w3schools.com/jquery/jquery_traversing_siblings.asp
https://www.w3schools.com/jquery/jquery_traversing_ancestors.asp
https://www.w3schools.com/jquery/jquery_traversing_descendants.asp

2.DOM 동적 관리
$(객체).append('추가할 태그');		//리턴값이 부모객체를 리턴
$('추가할 태그').appendTo(객체);	//리턴값이 추가된 객체를 리턴
마찬가지로 prepend(), prependTo()
var html = $(객체).html();  //객체안의 html tag를 가져와라
$(객체).html('<div>가</div>')	//객체안의 기존내용을 지우고 새로운 태그로 교체한다.
마찬가지로 text()는 글씨를 가져온다.

$(객체).empty();		//객체 안을 지운다.
$(객체).remove();		//객체를 지운다.
var id = $(객체).attr("id")	//객체의 속성을 가져온다.
$(객체).attr("id", "test");	//객체의 속성을 값(test)으로 바꾼다.

3. 애니메이션
animate(), fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), slideToggle()
*/
$("body").append('<div class="wrap"></div>');
var obj = $(".wrap").append('<div>가</div>'); 	// obj => $(".wrap")
console.log(obj);
var obj = $('<div>나</div>').appendTo('.wrap'); // obj => $("div")
console.log(obj);
console.log($(".wrap").html());
$('.wrap').html('<h1 class="text-center">변경된 태그</h1>');
$(".wrap").remove();

// eq() | index() 예제
// console.log($(".bt").eq(1));
$(".bt").click(function(){
	if($(this).index() == 2) alert("정답입니다.");
	else if($(this).index() == 0) {
		var cls = $(this).attr("class", "btn btn-danger");
		console.log(cls);
		$(this).attr("id", "bt1");
	}
	else alert("오답입니다.");
});