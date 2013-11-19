<!DOCTYPE html>
<html>
<head>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <meta charset=utf-8 />
    <title>Up/Down Scroll Detect</title>

    <style>
        html, body { height: 3500px; }
    </style>

    <script type='text/javascript'>
        function scroll_detect( scroll_before ){
                //Detect current scroll position
                var current_scroll = $(this).scrollTop();
                //Scroll up or down ?
                if ( current_scroll > scroll_before ){
                    var direction = "down";
                }
                else {
                    var direction = "up";
                }
                return [ direction, current_scroll ];
        }

        $(document).ready(function(){
            // Reset scroll
            var scroll_before = 0; 
            $(window).scroll(function(event){
                // csll setect function
                /**
                 * scroll_before - current scroll.
                 * @type {*}
                 * return: 
                 *  0 - direction
                 *  1 - current scroll position
                 */
                var scroll = scroll_detect( scroll_before )
                // save current scroll position
                scroll_before = scroll[1]
                
                console.log( scroll );
            });

        });
    </script>
</head>
<body>
<h1>Scroll the page</h1>
</body>
</html>
