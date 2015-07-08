$(function(){
    //画像クリックで画像変更
    $('.door_back').bind('click', function() {
        var click_obj = $(this);
        if(click_obj.hasClass("open")) {
          click_obj.removeClass("open");
        }else{
          click_obj.addClass("open");
        }
        click_obj.next().slideToggle();
    });
});
