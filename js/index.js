$(function () {
    // 引入头部、底部
    $('#header').load('./header.html');
    $('#footer').load('./footer.html');
    $('#rock').load('./goTop.html')


    // 轮播图部分
    var n = 0;
    // 节流阀
    var flag = true;
    // 点部分
    $('.screen .border-M>li').on('click', function () {
        var index = $(this).index();
        $(this).siblings().removeClass('active').end().addClass('active');
        $('.screen>ul>li').fadeOut().eq(index).fadeIn();
        // 点击序号赋值计数器
        n = index;
    })
    // 点击部分
    $('.screen .right').on('click', function () {
        console.log('go')
        // 
        if (flag) {
            flag = false;
            if (n >= 2) {
                n = 0;
            } else {
                n++;
            }
            $('.screen .border-M>li').removeClass('active').eq(n).addClass('active');
            $('.screen>ul>li').fadeOut().eq(n).fadeIn(function () {
                flag = true;
            });
        }

    })

    $('.screen .left').on('click', function () {
        if (flag) {
            flag = false;
            if (n <= 0) {
                n = 2;
            } else {
                n--;
            }
            $('.screen .border-M>li').removeClass('active').eq(n).addClass('active');
            $('.screen>ul>li').fadeOut().eq(n).fadeIn(function () {
                flag = true;
            });
        }
    })


    // 公司简介轮播图
    var m = 0;
    var flag = true;
    $('.about-company .company-line>li').on('click', function () {
        // 
        var index = $(this).index();
        $(this).siblings().removeClass('active').end().addClass('active');
        $('.about-company .area .company').fadeOut().eq(index).fadeIn();
        m = index;
    })

    $('.about-company .arrow .right').on('click', function () {
        console.log('go')
        // 
        if (flag) {
            flag = false;
            if (m >= 5) {
                m = 0;
            } else {
                m++;
            }
            $('.about-company .company-line>li').removeClass('active').eq(m).addClass('active');
            $('.about-company .area .company').fadeOut().eq(m).fadeIn(function () {
                flag = true;
            });
        }

    })

    $('.about-company .arrow .left').on('click', function () {
        if (flag) {
            flag = false;
            if (m <= 0) {
                m = 5;
            } else {
                m--;
            }
            $('.about-company .company-line>li').removeClass('active').eq(m).addClass('active');
            $('.about-company .area .company').fadeOut().eq(m).fadeIn(function () {
                flag = true;
            });
        }
    })


    // 业务范围手风琴
    // li添加事件委托
    $('.business>li').on('click', function (e) {
        if (e.toElement == $(this).find('img')[0] || e.toElement == $(this).find('.closed')[0]) {
            $(this).siblings().removeClass('active').end().toggleClass('active');
        }
    })


    // 团队介绍
    // 左右焦点
    $('.team-screen>ul').append($('.team-screen>ul>li').eq(0).clone());
    var x = 0;
    var y = 0;
    var flag = true;

    $('.team-screen>ol>.right').on('click', function () {
        if (flag) {
            flag = false;
            if (x > 2) {
                x = 0;
                $('.team-screen>ul').css({ 'left': 0 });
            }
            x++;
            y++;
            if (y > 2) {
                y = 0;
            }
            var nowPos = $('.team-screen>ul').offset().left;
            $('.team-screen>ol .border-M>li').removeClass('active').eq(y).addClass('active');
            $('.team-screen>ul').animate({ 'left': nowPos + 200 }).animate({ 'left': -x * $('.team-screen>ul>li').innerWidth() }, 'slow', function () {
                flag = true;
            });
        }
    })

    $('.team-screen>ol>.left').on('click', function () {
        if (flag) {
            flag = false
            if (x <= 0) {
                x = 3;
                $('.team-screen>ul').css({ 'left': -x * $('.team-screen>ul>li').innerWidth() });
            }
            x--;
            y--;
            if (y < 0) {
                y = 2;
            }
            var nowPos = $('.team-screen>ul').offset().left ;
            $('.team-screen>ol .border-M>li').removeClass('active').eq(y).addClass('active');
            $('.team-screen>ul').animate({ 'left': nowPos - 400}).animate({ 'left': -x * $('.team-screen>ul>li').innerWidth() }, 'slow', function () {
                flag = true;
            });
        }

    })



})






