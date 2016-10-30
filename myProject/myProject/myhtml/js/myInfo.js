/**
 * Created by lin on 2016/10/21.
 */
$(function(){
    var headPic = $('.headPic-shadow');
    headPic.hover(function(){
        $(this).css('opacity',0.5);
    },function(){
        $(this).css('opacity',0);
    });

    var myInfoLogo = $('.info-logo-show');
    var myInfoLogoExp = $('.myInfo-logo span');
    myInfoLogo.hover(function(){
        myInfoLogoExp.animate({width:'100px'},500).css('opacity',1);
    },function(){
        myInfoLogoExp.animate({width:0},500).css('opacity',0.7);
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
            codeShow.animate({height:'200px'},500).css('background','url(../images/code'+ parseInt($(this).index() + 1) + '.jpg)').css('backgroundSize','200px 200px');
        });
        code.mouseleave(function(){
            codeShow.animate({height:0},500,function() {
                NS.codeKey = 1;
            })
        });
    }
    foot();
});
