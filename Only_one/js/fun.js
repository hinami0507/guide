$(function(){
    $("#toHome").click(function(){
        $.scrollTo('#Home',500);
    })
        $("#towork").click(function(){
        $.scrollTo('#work',500);
    })
        $("#toskill").click(function(){
        $.scrollTo('#skill',500);
    })
        $("#tocontact").click(function(){
        $.scrollTo('#contact',500);
    })

})


  $(function() {
  var upperLimit = 1000;
  var scrollElem = $('.rollbar');
  var scrollSpeed = 500;
  scrollElem.hide();

  $(window).scroll(function () {
  var scrollTop = $(document).scrollTop();
  if ( scrollTop > upperLimit ) {
  $(scrollElem).stop().fadeTo(300, 1);
  }
  else{
    $(scrollElem).stop().fadeTo(300, 0);
  }
});

$(scrollElem).click(function(){
$('html, body').animate({scrollTop:0}, scrollSpeed); return false;
});
});
