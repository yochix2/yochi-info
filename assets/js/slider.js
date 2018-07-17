var length = $('.section').length - 1;
var section = document.getElementsByClassName("section") ;
var nowIndex = 0;
var isChanging = false;
var slideTimer;

function sliderSlide(val) {
	section[nowIndex].classList.remove("show");

	nowIndex = val;

	section[nowIndex].classList.add("show");
}

document.getElementById("tile-left").addEventListener("click", function(){
	var index = nowIndex - 1;
	if(index < 0) index = length;
	sliderSlide(index);
}, false);

document.getElementById("tile-right").addEventListener("click", function(){
	var index = nowIndex + 1;
	if(index > length) index = 0;
	sliderSlide(index);
}, false);