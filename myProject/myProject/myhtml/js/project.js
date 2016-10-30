/**
 * Created by lin on 2016/10/21.
 */
$(function(){
    $('.project-logo a').hover(function(){
        $(this).next().animate({width: '51px'},500);
    },function(){
        $(this).next().animate({width: 0},500);
    });


    var NS = {};
    function foot(){
        var code = $('.contactMe li');
        var codeShow = $('.contactMe-show');
        NS.codeKey= 1;
        code.click(function(){
            if(!NS.codeKey)
                return;
            NS.codeKey = 0;
            codeShow.css('background','url(../images/code'+ parseInt($(this).index() + 1) + '.jpg)').css('backgroundSize','200px 200px').animate({height:'200px'},500);
        });
        code.mouseleave(function(){
            codeShow.animate({height:0},500,function() {
                NS.codeKey = 1;
            })
        });
    }

    foot();
});