$(function(){
    var cows = $('.l-line .cow'), ll = $('.l-line'), avatar = $('.head .avatar');
    function resfn(){
        var wid = $(window).width();
        if(wid <= 780){
            cows.removeClass('cowtb');
            cows.css({width: ""});
            avatar.addClass("avatLine");
        }else{
            cows.addClass('cowtb');
            cows.css({width: ((ll.width() - 32)/3 - 10)+"px"});
            avatar.removeClass("avatLine");
        }
    }
    $(window).bind('resize', resfn);
    resfn();
});
