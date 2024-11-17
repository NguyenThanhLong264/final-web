var time1 = 0;
var time2 = 0;
var click = 0;
var result = 0;

var button = document.getElementById("button");


button.addEventListener("click", function(){
	click++;
	if (click % 2 === 1){
		time1 = new Date().getTime();
	} else if (click % 2 === 0) {
		time2 = new Date().getTime();
		var result = time2 - time1;
		alert(result + " milliseconds")
	}
})