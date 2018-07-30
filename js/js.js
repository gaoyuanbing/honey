// 匹配密码
var musie = (function(){
    function begintest() {
        var timeNum=4,time;
        $('.unchain').on('click',function() {
            console.log($('#input').val());
            if ($('#input').val('慢慢的我愿意让你当我的一片天')) {
                $('.tip').show();
                $('.sign-in').on('click',function(){
                    $('.tip').hide();
                    $('.try').hide();
                    beginTime ();
                })
                // $('.share').hide()
            }
        })
        function beginTime () {
            time = setInterval(clearTime, 1000)
        }
        function clearTime () {
            console.log(timeNum);
            timeNum--;
            $('.tip-txt').html(timeNum);
            if(timeNum==0) {
                clearInterval(time);
                $('.share').hide();
                $('.tip-txt').hide();
            }
        }
    }
    return begintest();
}())
musie.begintest();
