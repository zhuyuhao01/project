$(function () {
    // 引入头部、底部
    $('#header').load('./header.html');
    $('#footer').load('./footer.html');
    $('#rock').load('./goTop.html');

    // 声明计数器,记录请求次数
    var n = 0;

    // 默认执行一次
    requestData('listData0' + n);

    $('.xiala').on('click', function () {
        n++
        if (n < 3) {
            requestData('listData0' + n)
        } else {
            $(this).find('img').remove().end().append('<img src="./img/list_gomore_bg_nomore.jpg">')
        }

    })

    
    // 封装请求

    function requestData(reqData) {
        // 请求后端数据
        $.ajax({
            type: 'get',
            url: './js/list.php',
            data: { type: reqData },
            success: function (data) {
                console.log(data)
                var res = data.data.list;
                $.each(res, function (k, v) {
                    var template = $('#template').html();
                    template = template.replace(/#coverImg#/, v.coverImg);
                    template = template.replace(/#sysId#/,v.sysId);
                    template = template.replace(/#title#/, v.title);
                    template = template.replace(/#creatAt#/, v.creatAt);
                    template = template.replace(/#describe#/, v.describe);
                    console.log(template);
                    $('.all').append($(template));
                })
            }
        })
    }

    

    






})