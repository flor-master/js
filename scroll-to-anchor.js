/*
Scroll the page to the anchor
This script uses JQuery
*/
 $("a[href^=#]").click(function (e){
	e.preventDefault();
	var href = $(this).attr("href"),
	    target_id = href.substr(1),
	    target_offset = $("#"+target_id).offset().top;
	
	$('html, body').animate({
	    scrollTop: target_offset
	});
});
