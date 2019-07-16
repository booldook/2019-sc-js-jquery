/*
for(초기값; 조건; 증가값) {

}
var i = 10;
i = i + 1; i++
i = i - 1; i--;
k = k + 5; k += 5;
*/

var sum = 0;
for(var i=1; i<=10; i++) {
	sum += i;	//sum = sum + i;
}
console.log(sum);

$("#btMake").click(function(){
	for(var i=0; i<1000; i++) {
		$("#stage").append('<div class="box"></div>');
	}
	$(".box").mouseover(function(){
		$(this).fadeOut(2000);
	});
	$(".box").mouseleave(function(){
		$(this).fadeIn(2000);
	});
});

$("#btReset").click(function(){
	//$(".box").remove();
	$("#stage").empty();
});




