function dddigit(num) {
   var dd;
   if( num < 10 ) {
	   dd = "0" + num;
   } else {
	   dd = num;
   }
   return dd;
}
function showClock() {
	var time = new Date();
	var hour = dddigit( time.getHours() );
	var min  = dddigit( time.getMinutes() );
	var msg = hour + ":" + min;
	document.getElementById("clock").innerHTML = msg;
	setTimeout(showClock, 60000);
}
showClock();
