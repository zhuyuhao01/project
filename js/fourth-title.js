$(function () {
    // 引入头部、底部
    $('#header').load('./header.html');
    $('#footer').load('./footer.html');
    $('#rock').load('./goTop.html');



    // 页面加载根据页面地址数据加载指定内容

    var sendData = /type=([a-zA-Z0-9]*)/.exec(window.location.search.slice(1))[1];
    console.log(sendData)
    $.ajax({
        type: 'get',
        url: './js/article.php',
        data: {
            type: sendData
        },
        success: function (data) {
            var data = data.data;
            $('.container-two>.title>h1').html(data.typeTitle);
            $('.container-two>.title>p').html(data.typeEntitle);
            $('.tit').html(data.title);
            $('.container-two>img').attr('src', data.coverImg);
            $('.time').html(data.creatAt);
            $('.user').html(data.creatByFullName);
            // $('.word').html(data.content);
        }
    })

    var n = 20;
    $('.lover').on('click',function(){
        $(this).css({'background':"url(./img/article_iflike.png) no-repeat 0 -73px"}) 
        n++
        $('.popularity').html('喜欢('+ n +')')
    })
    $('.lover').mouseenter(function(){
        $('.niangniang').fadeIn('slow')
    })
    $('.lover').mouseleave(function(){
        $('.niangniang').fadeOut('slow')
    })







})