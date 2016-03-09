$(window).load(function(){
	var availHeight = $(window).height();
	$("body").css("height",availHeight);
});
window.onresize=function(){
	var availHeight = $(window).height();
	$("body").css("height",availHeight);
}  