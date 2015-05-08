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


$(document).ready(function(){
    $(function() {
//滚动到第a个banner条
        function scroll(a) {
            var loc = -a * Bwidth;
            
            $("#limit ul").stop(1,0).animate({left: loc},300);

            $("#limit .btn span").stop(1,0).animate({opacity: "0.4"},300)

            .eq(a).stop(1,0).animate({opacity: "1"},300)
        }
//这里循环生成num个按钮
        var BTNgroup = "<div class='btn'>",num = $("#limit ul li").length;
        for (var i = 0; i<num; i++) {
            BTNgroup += "<span></span>";
        }
        BTNgroup += "</div>";
        $("#limit").append(BTNgroup);

        var banClock, Bwidth = $("#limit").width(), portal = 0;
//跳转到按到的那个banner位置
        $("#limit .btn span").click(function() {
            portal = $("#limit .btn span").index(this),
            scroll(portal)
        }).eq(0).trigger("click");
//定义整个banner条总长度
        $("#limit ul").css("width", Bwidth * num);
//当鼠标指向banner条时，鼠标指向时清除计时器，停止滚动
        $("#limit").hover(function() {
            clearInterval(banClock)
        },    //鼠标不指向时，设置计时器，开始滚动
        function() {
            banClock = setInterval(function() {
                scroll(portal);
                portal++;
                if(portal == num) {portal = 0}
                
            },1e3)
        }).trigger("mouseleave")
    });

});


