var Box = (function(){
	function Box(obj) {
		this.width = obj.width;
		this.height = obj.height;
		this.bg = obj.bg;
		this.parent = obj.parent;
		this.init(this);
	}
	Box.prototype.init = function(my){
		console.log(my.parent);
		var $temp = $('<div class="box" style="width:'+my.width+'; height:'+my.height+'; background-color:'+my.bg+'"></div>').appendTo(my.parent);

		$temp.mouseenter(function(){
			$(this).stop().animate({"opacity":0}, 1000);
		});
		$temp.mouseleave(function(){
			$(this).stop().animate({"opacity":1}, 1000);
		});
	}
	return Box;
}());
