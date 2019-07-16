var $f = $("#joinForm"); //전역변수
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


$("#btSend").click(function(){
	//함수 안에서 선언된 변수는 함수 안에서만 사용 가능하다(지역변수)
	var $f = $("form[name='joinForm']");
	var $userName = $f.find("input[name='username']");
	var $userId = $f.find("input[name='userid']");
	var $userPw = $f.find("input[name='userpw']");
	var $emailUser = $f.find("input[name='emailUser']");
	var $emailDomain = $f.find("input[name='emailDomain']");
	//console.log($userName.val())
	if($userName.val() == "") {
		alert("사용자 이름을 입력하세요.");
		$userName.focus();
		return false;
	}
	if($userId.val() == "") {
		alert("사용자 아이디를 입력하세요.");
		$userId.focus();
		return false;
	}
	if($userPw.val() == "") {
		alert("사용자 비밀번호를 입력하세요.");
		$userPw.focus();
		return false;
	}
	if($emailUser.val() == "") {
		alert("이메일을 입력하세요.");
		$emailUser.focus();
		return false;
	}
	if($emailDomain.val() == "") {
		alert("이메일을 입력하세요.");
		$emailDomain.focus();
		return false;
	}
	$f.submit();
});


$("#emailChoice").change(function(){
	var $f = $("form[name='joinForm']");
	var $emailDomain = $f.find("input[name='emailDomain']");
	$emailDomain.val($(this).val());
});