/**
 * Created by lin on 2016/10/17.
 */
$(function(){

    //全局变量
    var NS = {
        openKey:1,
        closeKey:1,
        expInKey:1,
        expOutKey:1
    };

    //所有函数接口
    function all(){
        topNavMove();  //头部导航定位函数
        myInfo();  //个人信息函数
        slider();  //风琴轮播函数
        album();  //相册展示函数
        project(); //项目展示函数
        about();   //关于我 函数
        foot();   //尾部函数
    }
    all();

    //<----------------------- 头部导航特效函数 ------------------------------------------>
    function topNavMove(){
        var topNavList =  $('.topNav-list li');
        var topNavHome = $('.topNav-list .fa-home');
        var topNavAlbum = $('.topNav-list .fa-picture-o');
        var topNavProject = $('.topNav-list .fa-folder-open');
        var topNavBlog = $('.topNav-list .fa-edit');
        var topNavAbout = $('.topNav-list .fa-question-circle');
        var logoList = $('.content i');
        var homeLogo = $('.home-logo i');
        var albumLogo = $('.album-logo i');
        var projectLogo = $('.project-logo i');
        var blogLogo = $('.blog-logo i');
        var aboutLogo = $('.about-logo i');
        var mainLogo = $('.mainLogo');
        //头部导航定向位移
        topNavHome.click(function(){
            $("html,body").animate({scrollTop:0},400);
        });
        topNavAlbum.click(function(){
            $("html,body").animate({scrollTop:albumLogo.offset().top - 110},400);
        });
       topNavProject.click(function(){
            $("html,body").animate({scrollTop:projectLogo.offset().top - 110},400);
        });
       topNavBlog.click(function(){
            $("html,body").animate({scrollTop:blogLogo.offset().top - 110},400);
        });
        topNavAbout.click(function(){
            $("html,body").animate({scrollTop:aboutLogo.offset().top - 110},400);
        });



        //头部导航条选中变色
       topNavList.click(function(){
            $(this).eq($(this).index()).addClass('select').siblings('li').removeClass('select');
        });
        //滚动条滚动头部导航自适应调整
        $(window).scroll(function(){
            var scrollTop = $(document).scrollTop();
            if(scrollTop >= 0 && scrollTop < albumLogo.offset().top - 110){
                topNavHome.css('color','#fff');
            }else{
                topNavHome.css('color','#000');
            }
            if(scrollTop >= albumLogo.offset().top - 110 && scrollTop < projectLogo.offset().top - 110){
                topNavAlbum.css('color','#fff');
            }else{
                topNavAlbum.css('color','#000');
            }
            if(scrollTop >= projectLogo.offset().top - 110 && scrollTop < blogLogo.offset().top - 110){
                topNavProject.css('color','#fff');
            }else{
                topNavProject.css('color','#000');
            }
            if(scrollTop >= blogLogo.offset().top - 110 && scrollTop < aboutLogo.offset().top - 110){
                topNavBlog.css('color','#fff');
            }else{
                topNavBlog.css('color','#000');
            }
            if(scrollTop >= aboutLogo.offset().top - 110 ){
                topNavAbout.css('color','#fff');

            }else{
                topNavAbout.css('color','#000');
            }

        });


        logoList.hover(function(){
            $(this).css('color','#fff').css('opacity',1);
        },function(){
            $(this).css('color','#000').css('opacity',0.7);
        });


        //图标注释
        mainLogo.hover(function(){
            var explain = $(this).prev();
            explain.animate({width: '60px',border:'2px'},600);

        },function(){
            var explain =  $(this).prev();
            explain.animate({width: 0,border: 0},600);
        });
    }

    //<------------------------------ 个人资料函数 ------------------------------------------>
    function myInfo (){
        var flagInfo = true;
        var headPic = $('.headPic-shadow');
        var myInfo = $('.myInfo-list li');
        var myInfoMain = $('.myInfo-list li div');
        //    头像
        headPic.hover(function(){
            $(this).css('opacity',0.5);
        },function(){
            $(this).css('opacity',0);
        });

    }



//    <------------------------------------- 风琴轮播 ---------------------------------------->
    function slider(){
        var sliderList =  $('.slider-list li');
       sliderList.hover(function(){
            $(this).stop(true).animate({width:"800px"},500).siblings().stop(true).animate({width:"100px"},500);
        });
    }


    //<------------------------------------- 相册展示函数 ---------------------------------------->
    function album(){
        var albumList =  $('.album-list li');
        var albumShow = $('.album-show');
        var albumClose = $('.album-showClose');
        var albumPrev = $('.album-showPrev');
        var albumNext = $('.album-showNext');
        var albumPicNone = $('.album-PicNone');
        var index;


        //相册
       albumList.hover(function(){
            $(this).find('div').css('opacity',0.5);
            $(this).find('img').css('transform','scale(1.2').css('opacity',1);
        },function(){
            $(this).find('div').css('opacity',0);
           $(this).find('img').css('transform','scale(1').css('opacity',0.7);
        });

        albumList.click(function(){
            if(!NS.openKey)
                return;

            NS.openKey = 0;
            albumShow.show().animate({width:'800px',height:'480px'},300);
            albumShow.css('background','url("images/alb' + parseInt($(this).index() + 1) + '.jpg")').css('backgroundSize','800px 480px');
            index = $(this).index();
            return index;
        });

        //相册图片左右切换
        albumPrev.click(function(){
            if(index > 0){
                albumPicNone.hide();
                //albumShow.animate({backgroundPositionX: '-800px'}).css('background','url()');
                albumShow.css('background','url("images/alb' + parseInt(index) + '.jpg")').css('backgroundSize','800px 480px');
                index -= 1;

            }else {
                albumPicNone.show();
                albumPicNone.html('已经是第一张');
                //alert('这是第一页');
            }
        });
        albumNext.click(function(){
            if(index < 5){
                albumPicNone.hide();
                albumShow.css('background','url("images/alb' + parseInt(index + 2) + '.jpg")').css('backgroundSize','800px 480px');
                index += 1;
            }else{
                //alert('这是最后一页');
                albumPicNone.show();
                albumPicNone.html('已经是最后一张');
            }
        });


        //相册关闭

        albumClose.click(function(){
            if (!NS.closeKey)
                return;
            albumShow.animate({height:0},300);
            albumPicNone.hide();
            NS.closeKey = 0;
            setTimeout(function(){
                albumShow.hide();
                albumShow.css('width',0);
                NS.closeKey = 1;
                NS.openKey = 1;
            },300);

        });

        $(window).scroll(function() {
            var scrollTop = $(document).scrollTop();
            if(scrollTop > 1200 && NS.openKey == 0 || scrollTop < 300 && NS.openKey == 0){
                albumClose.click();
                //NS.openKey = 1;
                //NS.closeKey = 1;
            }
        });

    }

    function project(){
        NS.projectKey = 1;
        if(!NS.projectKey)
            return;
        var projectShow = $('.project-show');
        projectShow.hover(function(){
            $(this).animate({width: '300px', height: '300px',lineHeight: '300px'},500).find('div').animate({width:'300px',height: '300px'},500);
        },function(){
            $(this).animate({width: '150px', height: '150px',lineHeight: '150px'},500).find('div').animate({width:0,height: 0},500);
        });
    }


    function about(){
        var articleMain = $('.article-main');
        var meList = $('.me li');
        meList.click(function(){
            var num = $(this).index();
           meList.eq($(this).index()).addClass('select').siblings('li').removeClass('select');
            changeto(num);
        });


        function changeto(num){
            var goLeft = num * 400;
            articleMain.animate({
                left: '-' + goLeft + 'px'
            },500);
        }

    }


    function foot(){
        var code = $('.contactMe li');
        var codeShow = $('.contactMe-show');
        NS.codeKey= 1;
        code.click(function(){
            if(!NS.codeKey)
                return;
            NS.codeKey = 0;
            codeShow.animate({height:'200px'},500).css('background','url(images/code'+ parseInt($(this).index() + 1) + '.jpg)').css('backgroundSize','200px 200px');
        });
        code.mouseleave(function(){
            codeShow.animate({height:0},500,function(){NS.codeKey = 1;})
        });
    }

});