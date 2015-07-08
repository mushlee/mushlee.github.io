$(function(){
    //コンテンツクリックでビデオを表示させる
    $('.video_list a').bind('click', function(e) {
        var video_link = $(this).attr('href');
        var video_title = $(this).text();
        $('#videoLabel').text(video_title);
        $('#iframeWrap')
        .append('<iframe id="video" src="' + video_link + '" frameborder="0" allowfullscreen></iframe>');
        $('#video_modal').on('shown.bs.modal', function (e) {
            /*
             $('#videoLabel')
             .replaceWith('<iframe id="video" src="' + video_link +'" frameborder="0" allowfullscreen></iframe>');
             */
            $('#video').fadeIn('fast'); 
        })
    });
    $('#video_modal').on('hide.bs.modal', function (e) {
        $('#video').remove();
    })
    $('.panel-collapse').on('shown.bs.collapse', function () {
        var speed = 500;
        var target = $(this).prev();
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    })

});

