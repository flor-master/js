<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<meta charset=utf-8 />
<title>JS Bin</title>
  <style>
    body { height: 3500px; }
  </sctyle>
  <script type='text/javascript'>
    $(function(){
      //Keep track of last scroll
      var lastScroll = 0;
      $(window).scroll(function(event){
          //Sets the current scroll position
          var st = $(this).scrollTop();
          //Determines up-or-down scrolling
          if (st > lastScroll){
             alert("DOWN");
          } 
          else {
            alert("UP");
          }
          //Updates scroll position
          lastScroll = st;
      });
    });
  </script>
</head>
<body>
  <h1>Scroll Here</h1>
</body>
</html>
