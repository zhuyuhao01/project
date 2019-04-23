$(function () {
    var H = 0;
    var W = 0;
    init();
    function init() {
        // 获取浏览器可视区域宽高
        H = $(window).innerHeight() - $('.head').innerHeight();
        W = $(window).innerWidth()
        // 设置总屏幕高度
        $('.screen').height(H)
        // 设置每一屏高度
        $('.screen>ul>section').height(H)
        // 设置第二屏和第四屏内的li的宽度
        $('.block-two .slide , .block-four .slide').width(W)


        var colors = ['#211135', 'null', '#211135', 'null', 'null']
        $.each($('.screen>ul>section'), function (k, v) {
            $(v).css('background', colors[k]);
        })


        // 页面跳转到指定屏幕
        var hash = window.location.hash.slice(1);
        if (hash) slideGo(hash);


        // 声明计数器，记录当前屏幕的索引
        var screenIndex = hash || 0;
        // 记录事件 触发事件
        var wheelNumber = 0;
        mouseWheel(window, function (down, e) {
            wheelNumber++;
            if (wheelNumber > 5) {
                wheelNumber = 0;
                // down 滚轮方向 
                if (down) {
                    // 滚轮向下，页面向上
                    // 最后一屏为止
                    if (screenIndex < 4) {
                        screenIndex++
                        slideGo(screenIndex);
                    }
                } else {
                    if (screenIndex > 0) {
                        screenIndex--
                        slideGo(screenIndex);
                    }
                }
            } else {
                wheelNumber++;
            }


        })


        // 点击导航滑到到指定位置
        $('.nav>li').on('click', function () {
            var i = $(this).index();
            // 处理最后一个索引
            if (i < 4) i++;
            // 页面索引重置
            screenIndex = i;
            slideGo(i);

        })



        // 
        function slideGo(index) {
            $('.screen>ul').stop().animate({ 'top': -index * H })
            if (index != 0 && index < 5) {
                $('.nav li').removeClass('now').eq(index - 1).addClass('now');
                if (index == 4) {
                    $('.nav li').eq(index).addClass('now');
                }
            }

        }



        // 第二屏幕轮播
        var twoIndex = 0;
        $('.block-two .right').on('click', function () {
            if (twoIndex < 2) {
                twoIndex++
                $('.block-two>ul').animate({ 'left': -twoIndex * W });
            }
        })

        $('.block-two .left').on('click', function () {
            if (twoIndex > 0) {
                twoIndex--
                $('.block-two>ul').animate({ 'left': -twoIndex * W });
            }
        })

        



        setInterval(function () {
            $('.block-three .img-one1').fadeIn().fadeOut();
            $('.block-three .img-two1').fadeIn().fadeOut();
            $('.block-three .img-three1').fadeIn().fadeOut();
            $('.block-three .img-four1').fadeIn().fadeOut();
        }, 800)


        // 第四屏轮播
        var flag = true;
        $('.block-four .right').on('click', function () {
            if (flag) {
                flag = false;
                var that = this;
                // 切换内容
                $('.block-four>ul').animate({ 'left': -1 * W })
                // 切换滑块
                $(this).siblings().find('span').animate({ 'left': 78 }, function () {
                    $(that).find('span').animate({ 'left': 0 }, function () {
                        flag = true;
                    })
                })
            }
        })

        $('.block-four .left').on('click', function () {
            if (flag) {
                flag = false;
                var that = this
                // 
                $('.block-four>ul').animate({ 'left': 0 })
                // 
                $(this).siblings().find('span').animate({ 'left': -78 }, function () {
                    $(that).find('span').animate({ 'left': 0 }, function () {
                        flag = true;
                    })
                })
            }

        })

        $('.block-one .block-one4').on('click', function () {
            $('.nav>li').eq(0).click();
        })









        // 开场动画
        setTimeout(function () {
            $('.welcome .box').animate({ 'margin-top': 0 }).find('.text').slideDown(function () {
                $('.welcome').delay(2000).slideUp()
            });
        }, 4000)

        $('.welcome').on('dblclick', function () {
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            $(this).slideUp()
        })
    }



    window.onresize = init;








})

