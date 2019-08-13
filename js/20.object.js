var wid;
var hei;
var bg;
var borderColor;
var borderStyle;
var borderWidth;

var Human = (function(){
	function Human(_gender) {
		this.name;
		this.age = 1;
		this.gender = _gender;
	}
	return Human;
}());

var hong = new Human("남자");
hong.name = "홍길동";
console.log(hong);

var kang = new Human("여자");
kang.name = "강길순";
console.log(kang);

new Box({
	width: "200px",
	height: "200px",
	bg: "red",
	parent: $(".container")
});

new Box({
	width: "100px",
	height: "100px",
	bg: "blue",
	parent: $(".container")
});

