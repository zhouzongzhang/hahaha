
window.onload = function () {
        var ofsTop;
        var firstUl = document.getElementById('firstUl');
        var lis = firstUl.getElementsByTagName('li');
        var imgs = document.getElementsByTagName('img');
        var imgBox = document.getElementById("img_box");
        var circleBox = document.getElementById("circle_box");

//            var  imgArr = imgBox.getElementsByTagName("li");
        var circleArr = circleBox.getElementsByTagName("a");

        var leader = 0, target = 0;

        var num = 0;
        var timer1 = null;
        var timer2 = null;
        var timer3 = null;
        var timer4 = null;
        var doc = document.body.clientWidth || document.documentElement.clientWidth;

        var hm0 = document.getElementById("hidezero");
        var hm1 = document.getElementById("hidOne");
        var hm2 = document.getElementById("hidTwo");
        var hm3 = document.getElementById("hidThree");
        var hm4 = document.getElementById("hidFour");
        var hm5 = document.getElementById("hidFive");
        var arr = [hm0, hm1, hm2, hm3, hm4, hm5];


        var zeroUl = document.getElementById("zeroUl");
        var liis = zeroUl.getElementsByTagName("li");

//            --------head-top js代码begin-------------------------------------------------
    //  派送地址下拉框设置开始
        $('.address').hover(function(){
            $(this).addClass('dropdown-hover');
            $('.address > a').css('color','#F10582');
            $('.address > a  s').css('color','#F10582').css('top','-7px');
        },function(){
            $(this).removeClass('dropdown-hover');
            $('.address > a').css('color','#666666');
            $('.address > a  s').css('color','#999999').css('top','-14px');
        });
    // 派送地址下拉框设置结束

    //派送地址选择设置开始
//            console.log($('.adddropdown a'));
        $('.adddropdown a').click(function(){
//                console.log(event);
//                console.log($(this).html());
//                console.log($('.address-main').html());
            $('.address-main').html($(this).html() + '<i><s style="color: rgb(241, 5, 130); top: -7px;">��</s></i>');
            $('address-main').html($(this).html());
            $('.adddropdown a').each(function () {
                $(this).css('backgroundColor','#fff').css('color','#666');
            });
            $(this).css('backgroundColor','#F1037F').css('color','#fff');

        });

    //派送地址选择设置结束
    //登录下拉框设置开始
        $('.login').hover(function(){
            $(this).addClass('dropdown-hover');
        },function(){
            $(this).removeClass('dropdown-hover');
        });
    // 登录下拉框设置结束

    //收藏下拉框设置开始
        $('.collect').hover(function(){
            $(this).addClass('dropdown-hover');
            $('.collect > a  s').css('color','#F10582').css('top','-7px');
        },function(){
            $(this).removeClass('dropdown-hover');
            $('.collect > a  s').css('color','#999999').css('top','-14px');
        });
    // 收藏下拉框设置技术

    //会员俱乐部下拉框设置开始
        $('.club').hover(function(){
            $(this).addClass('dropdown-hover');
            $('.club > a  s').css('color','#F10582').css('top','-7px');
        },function(){
            $(this).removeClass('dropdown-hover');
            $('.club > a  s').css('color','#999999').css('top','-14px');
        });
    //会员俱乐部下拉框设置结束

    //客户服务下拉框设置开始
        $('.service').hover(function(){
            $(this).addClass('dropdown-hover');
            $('.service > a  s').css('color','#F10582').css('top','-7px');
        },function() {
            $(this).removeClass('dropdown-hover');
            $('.service > a  s').css('color', '#999999').css('top', '-14px');
        });
    //客户服务下拉框设置结束

    //手机端下拉框设置开始
        $('.phone').hover(function(){
            $(this).addClass('dropdown-hover');
            $('.phone .mob').css('background','url("images/spring.png")no-repeat -125px -150px');
        },function() {
            $(this).removeClass('dropdown-hover');
            $('.phone .mob').css('background','url("images/spring.png")no-repeat -100px -150px');
        });
    //手机端下拉框设置结束

    //更多下拉框设置开始
        $('.more').hover(function(){
            $(this).addClass('dropdown-hover');
            $('.more > a  s').css('color','#F10582').css('top','-7px');
        },function() {
            $(this).removeClass('dropdown-hover');
            $('.more > a  s').css('color', '#999999').css('top', '-14px');
        });
    //更多下拉框设置结束

//  --------head-top js代码end---------------------------------------------------

//  --------head-logo js代码begin------------------------------------------------
    //购物车下拉框设置开始
        $('.car').hover(function(){
            $(this).addClass('dropdown-hover');
            $('.car > a').css('color','#F10582');
        },function(){
            $(this).removeClass('dropdown-hover');
            $('.car > a').css('color','#666666');
        })

    //购物车下拉框设置结束

//  --------head-logo js代码end--------------------------------------------------

//  --------head-nav js代码begin-------------------------------------------------
//            $('.head-nav li').click(function(){
//                console.log($(this).html());
//                $('.head-nav li').eq($(this).index()).css('backgroundColor','#BD1067').siblings('li').css('backgroundColor','#F10180');
//            });
        $('.head-nav li').click(function(){
            console.log($(this).html());
            $('.head-nav li').each(function () {
                $(this).css('backgroundColor','#F10180');
            });
            $(this).css('backgroundColor','#BD1067');

        });
    //主导航选中设置结束

    //主导航固定设置开始
        var H = $('.head-top').height() + $('.head-logo').height();
        $(window).scroll(function(){
            var docSccrollTop = $(document).scrollTop();
            if(docSccrollTop > H){
                $(".head-nav").css({"position":"fixed","top":0,"zIndex":10});
                // $('.nav-mordropdown').css('top','40px');
                // $('.nav-more i').css('top','20px');
                // $('.notic-ico').css('top','4px');
                // $('.classify-ico').css('top','4px');
            }else{
                // $('.nav-mordropdown').css('top','168px');
                // $('.nav-more i').css('top','148px');
                // $('.notic-ico').css('top','131px');
                // $('.classify-ico').css('top','131px');
                $(".head-nav").css({"position":"static"});  /*静态定位*/
            }

        });
//            主导航固定设置结束

    //主导航更多下拉框设置开始
        $('.nav-more').hover(function(){
            $('.nav-mordropdown').css('visibility','visible');
        },function(){
            $('.nav-mordropdown').css('visibility','hidden');
        });

        $('.nav-mordropdown').hover(function(){
            $(this).css('visibility','visible');
        },function(){
            $(this).css('visibility','hidden');
        });

//            下拉框阴影设置开始
        $(".navmore-main div").fadeTo(0,0.3);
        $(".navmore-main li").hover(function(){
            $(this).children("p").animate({"height":70},400);
            $(this).children("div").stop().animate({"marginTop":-110},400);
        },function(){
            $(this).children("p").stop().animate({"height":40},400);
            $(this).children("div").stop().animate({"marginTop":-53},400);
        });
//          下拉框阴影设置结束
    //主导航更多下拉框设置结束

//  --------head-nav js代码end--------------------------------------------------
//  --------广告轮播图 js代码start------------------------------------------------
        timer1 = setInterval(autoPlay, 10);

        function autoPlay() {
            num = num - 20;

            num <= -5000 ? num = 0 : num;

            imgBox.style.left = num + "px";
            if (num % 1000 == 0){
                clearInterval(timer1);
                timer2 = setTimeout(function () {
                    timer1 = setInterval(autoPlay, 10);
                }, 3000);
            }

        }

        //for (var i = 0; i < 5; i++){
        //    circleArr[i].onclick = function () {
        //
        //        clearInterval(timer1);
        //        clearTimeout(timer2);
        //        clearTimeout(timer4);
        //        clearInterval(timer3);
        //
        //        target = (-this.innerHTML + 1) * 1000;
        //
        //        num = target;
        //        timer3 = setInterval(function () {
        //            leader = leader + (target - leader) / 10;
        //            imgBox.style.left = leader + "px";
        //        }, 20);
        //
        //        timer4 = setTimeout(function () {
        //
        //            clearInterval(timer3);
        //            timer1 = setInterval(autoPlay, 20);
        //
        //        }, 3000);
        //        return false;
        //    };



//  --------广告轮播图 js代码end--------------------------------------------------

//  --------侧边栏 js代码start--------------------------------------------------



            hm0.style.left = hm1.style.left = hm2.style.left = hm3.style.left = hm4.style.left = hm5.style.left = doc + "px";
            hm0.style.top = 61 + "px";
            hm1.style.top = 120 + "px";
            hm2.style.top = 183 + "px";
            hm3.style.top = 247 + "px";
            hm4.style.top = 496 + "px";
            hm5.style.top = 575 + "px";

            var closezero = document.getElementById("closezero");
            var asides = document.getElementsByClassName("aside");
            var k=0;


            asides[0].addEventListener("mouseover",moveout);
            asides[0].addEventListener("mouseout",movein);
            hm0.addEventListener("mouseleave",mouseleave);

            closezero.addEventListener("click",zeroclose);
            function zeroclose(){
                var speed = 0;
                var timer1 = setInterval(function () {
                    speed += 16;
                    if (speed >= 316) {
                        clearInterval(timer1);
                    }
                    hm0.style.left = doc - 148 + speed + "px";
                }, 10);
                k=0;
                hm0.style.display = "none";
            }
            function mouseleave(e){
                k=1;
                var ev = e || window.event;
                var mx = ev.clientX;
                var my = ev.clientY;
                if(!(mx>=(doc-37) && (my>=62 && my<=103))){
                    var speed = 0;
                    var timer = setInterval(function () {
                        speed += 16;
                        if (speed >= 316) {
                            clearInterval(timer);
                        }
                        hm0.style.left = doc - 148 + speed + "px";
                    }, 10);
                    k=0;
                }
            }
            function moveout () {
                hm0.style.display = "block";
                if(k==0){
                    var speed = 0;
                    var timer = setInterval(function () {
                        speed += 16;
                        if (speed >= 300) {
                            clearInterval(timer);
                        }
                        hm0.style.left = doc - speed + "px";
                    }, 10);
                }
                console.log(k);
            }
            function movein (e) {
                var ev = e || window.event;
                var mx = ev.clientX;

                var my = ev.clientY;
                if(mx>=(doc - 37) && (my >= 103 || my <= 62)){
                    var speed = 0;
                    var timer1 = setInterval(function () {
                        speed += 16;
                        if (speed >= 316) {
                            clearInterval(timer1);
                        }
                        hm0.style.left = doc - 148 + speed + "px";
                    }, 10);
                    k=0;
                }
            }

            for(var i=1;i<6;i++){
                (function (i) {
                    asides[i].onmouseover = function () {
                        this.style.display = "block";
                        var speed = 0;
                        var timer = setInterval(function () {

                            speed+=10;
                            if(speed>=148){
                                clearInterval(timer);
                            }
                            arr[i].style.left = doc - speed + "px";

                        },10);
                    };
                    asides[i].onmouseout = function () {
                        var speed = 0;
                        var timer = setInterval(function () {

                            speed +=10;
                            if(speed >=148){
                                clearInterval(timer);
                            }
                            arr[i].style.left = doc - 148 + speed + "px";
                        },10);
                    };
                })(i);
            }
            asides[5].onclick = function () {
//                    console.log(document.body.scrollTop || document.documentElement.scrollTop);

                var s = 0;
                var r = 0;
//                var y = document.documentElement.scrollTop || document.body.scrollTop;    //����

                //判断浏览器兼容性
                if(document.documentElement.scrollTop != 0){
                    var y1 = document.documentElement.scrollTop;
                    var timer4 = setInterval(function () {
                        s += 250;
                        r = y1 - s;
                        if(document.documentElement.scrollTop <= 0){
                            clearInterval(timer4);
                        }
                        window.scrollTo(0,r);
                    },10);
                }else if(document.body.scrollTop != 0){
                    var y2 = document.body.scrollTop;
                    var timer5 = setInterval(function () {
                        s += 250;
                        r = y2 - s;
                        if(document.body.scrollTop <= 0){
                            clearInterval(timer5);
                        }
                        window.scrollTo(0,r);
                    },10);
                }

            };

//  --------侧边栏 js代码end--------------------------------------------------

//  --------content js代码start--------------------------------------------------
    //商品列表
            $("#firstUl li").click(function () {
                $(this).css({'color':'white','backgroundColor':'#f10180','border-radius':'5px'}).mouseover(function () {
                    this.style.color = 'white';
                }).mouseout(function () {
                    this.style.color = 'white';
                }).siblings().css({'backgroundColor':'white','color':'#666','border-radius':'0px'}).mouseover(function () {
                    this.style.color = '#f10180';
                }).mouseout(function () {
                    this.style.color = '#666';
                });
            });
    //默认选中第一个商品系列
    $("#firstLi").click();

    //滑动页面时,将各个主链接固定在网页上
    // chrome 不能识别document.documentElement.scrollHeight和document.documentElement.scrollTop,fireforks和ie与之相反
            window.onscroll = function (){
                var scrtop = document.getElementById('content');
                var qwe = document.body.scrollTop || document.documentElement.scrollTop;
//                 console.log(qwe);
                if(qwe >= 600){
                    $('#title').css({'position':'fixed','left':'70px','top':'100px'});
                    //随着网页的滑动,对应的商品系列名自动被锁定
                    for(var x = 0;x < lis.length;x++){
                        var num = parseInt((qwe - 150)/ 1200);
                        if(num == x){
                            lis[x].click();
                        }
                    }
                }else{
                    $('#title').css({'position':'absolute','left':'70px','top':'80px'});
                }
            };
    //显示和隐藏精装系列里的div 并设置相关效果
            function showDivs(x) {
                var bigs = document.getElementById('left');
                var small = bigs.getElementsByClassName(x);
                for (var j = 0; j < small.length; j++) {
                    small[j].onmouseover = function () {
                        this.childNodes.item(1).style.display = 'block';
                        var inp = this.getElementsByTagName('input');
                        var span = this.getElementsByTagName('span');
                        for(var z = 0;z < inp.length;z++){
                            inp[z].onmouseover = function () {
                                this.style.backgroundColor = '#333';
                                this.style.color = 'white';
                            };
                            inp[z].onmouseout = function () {
                                this.style.backgroundColor = 'white';
                                this.style.color = '#333';
                            };
                            //这里z + 3 是因为在这个盒子里前面有3个span
                            span[z+3].onmouseover = function () {
                                this.style.backgroundColor = '#f10180';
                                this.style.color = 'white';
                                this.style.border = 'none';
                            };
                            span[z+3].onmouseout = function () {
                                this.style.backgroundColor = 'white';
                                this.style.color = '#333';
                                this.style.border = '1px solid #ccc';
                            }
                        }
                    };
                    small[j].onmouseout = function () {
                        this.childNodes.item(1).style.display = 'none';
                    }
                }
            }
            showDivs('ls_fir_imgBox');

    //显示和隐藏女装等系列里的一些元素
            function showSomeThing(father,child){
                var fathers = document.getElementsByClassName(father);
                for(var i=0;i<fathers.length;i++){
                    var childs = fathers[i].getElementsByTagName(child);
                    for(var j = 0;j < childs.length;j++){
                        childs[j].onmouseover = function(){
                            if(this.children.length >= 4){
                                this.childNodes.item(1).style.display = 'block';
                                this.childNodes.item(4).style.display = 'block';
                            }else{
                                this.childNodes.item(1).style.display = 'block';
                            }
                            this.style.zIndex = 2;
                        };
                        childs[j].onmouseout = function(){
                            if(this.children.length >= 4){
                                this.childNodes.item(1).style.display = 'none';
                                this.childNodes.item(4).style.display = 'none';
                            }else{
                                this.childNodes.item(1).style.display = 'none';
                            }
                            this.style.zIndex = 1;
                        }
                    }
                }
            }
            showSomeThing('leftSide','li');
            showSomeThing('rightSide','li');
            showSomeThing('yugao_Box','li');

//            var lefts = document.getElementsByClassName('leftSide');
//            var rights = document.getElementsByClassName('rightSide');
//            for(var z = 0;z < lefts.length;z++) {
//                var llis = lefts[z].getElementsByTagName('li');
//                var rlis = rights[z].getElementsByTagName('li');
//                for (var i = 0; i < llis.length; i++) {
//                    //获取某个元素指定的子元素
//                    // 设置左半部分
//                    llis[i].onmouseover = function () {
//                        this.childNodes.item(1).style.display = 'block';
//                    };
//                    llis[i].onmouseout = function () {
//                        this.childNodes.item(1).style.display = 'none';
//                    };
//                    //设置右半部分
//                    rlis[i].onmouseover = function () {
//                        this.childNodes.item(1).style.display = 'block';
//                    };
//                    rlis[i].onmouseout = function () {
//                        this.childNodes.item(1).style.display = 'none';
//                    };
//                }
//            }

//预告系列里的和其他系列不一样,单独列出
            $('.Box >>>> span,.yugao >>>> span').on('mouseover', function () {
                $(this).css({'backgroundColor':'#f10180','color':'white'});
            });
            $('.Box >>>> span,.yugao >>>> span').on('mouseout', function () {
                $(this).css({'backgroundColor':'white','color':'#666'});
            });

    //给所有的图片添加透明度效果
            function tuming(){
                for(var i = 0;i<imgs.length;i++){
                    imgs[i].style.opacity = '1';
                }
            }
            function imgOpacity(){
                for(var i = 0;i<imgs.length;i++){
                    imgs[i].onmouseover = function (){
                        this.style.opacity = '0.8';
                        setTimeout(tuming,600);
                    };
                }
            }
            imgOpacity();
//  --------content js代码end---------------------------------------------------
        };