/*
비교연산자
==					: 값만 같으면 true
===					: 값과 type(숫자, 문자)이 같아야 true
>= , <=, < , >

연산자
+, - , * , / 
%(mod, 나머지연산자) ==>  5%3 => 2,  4%3 => 1 

if(5 == 3) {

}

if(5 > 3) {
	// 조건이 참이면 여기가 실행
}
else {
	// 조건이 거짓이면 여기가 실행
}

if(조건1) {
	// 조건1이 참이면 실행
}
else if(조건2) {
	// 조건2가 참이면 실행
}
else {
	// 조건1과 조건 2가 거짓이면 실행
}

0: false
1: true
0이 아닌 모든 숫자, 문자 : true
*/

$("#bt-send").click(function(){
	var name = $("input[name='username']").val();
	if(name == "") {
		alert("이름을 입력하세요.");
		$("input[name='username']").focus();
	}
	else {
		//$(".console").text("반갑습니다 " + name + "회원님");
		//$(".console").html("<h1>반갑습니다 " + name + "회원님</h1>");
		//$(".console").html('<h1 style="color:blue;">반갑습니다 ' + name + '회원님</h1>');
		var bgColor = "green";
		$(".console").html('<h1 style="color:blue; background-color:'+bgColor+';">반갑습니다 ' + name + '회원님</h1>');
	}
});
