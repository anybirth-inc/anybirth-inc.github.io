$(function(){

    $(".js-form-submit").on("click", function(){
        $(".js-error-tip").remove();
        var data = new FormData($("#contact-form").get(0));
        data.append('mode', 'send');
        $.ajax({
            'type': 'POST',
            'url': '/send.php',
            'data': data,
            'processData' : false,
            'contentType' : false,
            'dataType': 'json',
            error: function( res ){
                //alert('サーバーエラーが発生しました');
            },
            success: function( res ){
                if( res.status == true ) {
                    window.location.href='/finish.php';
                    return;
                }
                if( res.status == false ) {
                    $.each(res.error, function(index, value){
                        var target = $(".js-input-"+value);
                        if( target.length > 0 ) {
                            target.append('<span class="error-tip js-error-tip">必須項目です</span>');
                            if( index === 0 ) {
                                var header = $('.js-header-follow').height();
                                var position = target.offset().top - header - 20;
                                $("html, body").animate({
                                    scrollTop:position,
                                }, 100, 'linear');
                            }
                        }
                    });
                }
            }
        });
        return false;
    });

});