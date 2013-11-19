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
    $(document).ready(function(){
      //reset scroll
      var scroll_before = 0;
      $(window).scroll(function(event){
          //current scroll position
          var current_scroll = $(this).scrollTop();
          //Determines up-or-down scrolling
          if ( current_scroll > lscroll_before ){
             console.log('down');
          } 
          else {
            console.log('up');
          }
          //Updates scroll position
          scroll_before = current_scroll;
      });
    });
  </script>
</head>
<body>
  <h1>Scroll the page</h1>
</body>
</html>
