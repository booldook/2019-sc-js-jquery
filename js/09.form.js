var $f = $("#joinForm");
console.log($f);

var f = $("form[name='joinForm']")[0];  // jQuery객체를 순수자바스크립트 객체로 변환
console.log(f);

f = document.joinForm;	// 순수자바스크립트
console.log(f);

$f = $(document.joinForm);	// 순수자바스크립트객체를 jQuery 객체로 변환
console.log($f);

/* 
.name > div (자식)
.name div   (자손) 

$("form[name='joinForm']").children("input[name='username']") //자식
$("form[name='joinForm']").find("input[name='username']")			//자손
*/

var uname  = $("form[name='joinForm']").children("input[name='username']"); //자식선택
var uname2 = $("form[name='joinForm']").find("input[name='username']"); //자손선택
var uname3 = $("input[name='username']", $("form[name='joinForm']")); //자손선택
console.log(uname, uname2, uname3);
