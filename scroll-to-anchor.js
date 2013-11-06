/*
Scroll the page to the anchor
*/
	 $("a[href^=#]").click(function (e){
        e.preventDefault();
        var href = $(this).attr("href"),
            target_id = href.substr(1),
            target_offset = $("#"+target_id).offset().top-47;
        //if ( target_offset > 200 )
          //  target_offset = target_offset;

        $('html, body').animate({
            scrollTop: target_offset
        });
    });
