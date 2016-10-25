$(document).ready(function(){
	function circle(n,percent){
 		var c=document.getElementsByTagName('canvas');
		var ctx=c[n].getContext('2d');
		// var speed = 0.1;
   	    // 底圆
		ctx.beginPath();
		ctx.moveTo(75,75);
		ctx.arc(75,75,70,0,Math.PI*2);
		ctx.closePath();
		ctx.fillStyle='#a9afb4';
		ctx.fill();

		// 进度条
		ctx.beginPath();
		ctx.moveTo(75,75);
		ctx.arc(75,75,70,-0.5*Math.PI,Math.PI*2*percent/100-0.5*Math.PI,false);
		ctx.fillStyle='#e87e04';
		ctx.closePath();
		ctx.fill();

		// 圆形
		ctx.beginPath();
		ctx.arc(75,75,60,0,Math.PI*2)
		ctx.fillStyle='#e7ecf1';
		ctx.closePath();
		ctx.fill();

		//百分比文字

		ctx.font="20px Microsoft Yahei";
		ctx.fillStyle="#333";
		ctx.textAlign="center";
		ctx.textBaseline='middle';
		ctx.fillText(percent+'%',75,75);

		//动画效果


	}

	circle(0,90);
	circle(1,85);
	circle(2,70);
	circle(3,75);
	circle(4,75);
	circle(5,70);
	circle(6,70);
	circle(7,70);

})
