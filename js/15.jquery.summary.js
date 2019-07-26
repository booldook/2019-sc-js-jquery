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
$(객체).eq(n)
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
*/

var obj = $(".wrap").append('<div>가</div>'); 	// obj => $(".wrap")
var obj = $('<div>가</div>').appendTo('.wrap'); // obj => $("div")
obj.click(function(){

});