<?php

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>フォーム</title>
        <script>
            (function(d) {
                var config = {
                kitId: 'qfc3cqe',
                scriptTimeout: 3000,
                async: true
                },
                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);
        </script>
        <link rel="stylesheet" href="/css/lp-reset.min.css" media="all">
        <link rel="stylesheet" href="/css/lp-layout.css" media="all">
        <link rel="stylesheet" type="text/css" href="./css/style.css">
        <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
            crossorigin="anonymous"></script>
        <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
        <script src="https://yubinbango.github.io/yubinbango/yubinbango.js" charset="UTF-8"></script>
        <script src="./js/script.js"></script>
    </head>
    <body>

        <?php include dirname(__FILE__). '/parts/header.php';?>

        <div class="finish-contents">
            <p class="head-ttl">ご注文完了</p>
            <div class="finish-txt">
                注文確認メールが届きます。<br>
                確認メール内に決済情報が記載されております。<br>
                <br>
                お支払い完了後、3営業日以内に<br>
                野菜セットを配送致します。
            </div>

            <a href="/" class="submit-btn">TOPへ戻る</a>

        </div>

        <?php include dirname(__FILE__). '/parts/footer.php';?>

    </body>
<script>
    $(function(){
        $('.nav-trigger').on('click', function() {
            $(this).toggleClass('active');
            return false;
        });
    });
    $(function(){
        $('.nav-trigger').on('click', function() {
            $('#p-Humburger').toggleClass('active');
            return false;
        });
    });
    $(function(){
        $('.nav-trigger').on('click', function() {
            $('.finish-contents').toggleClass('inactive');
            return false;
        });
    });
    $(function(){
        $('.nav-trigger').on('click', function() {
            $('footer').toggleClass('inactive');
            return false;
        });
    });
    $(function(){
        $('.nav-link').on('click', function() {
            $('.nav-trigger').removeClass('active');
            return false;
        });
    });
    $(function(){
        $('.nav-link').on('click', function() {
            $('#p-Humburger').removeClass('active');
            return false;
        });
    });
    $(function(){
        $('.nav-link').on('click', function() {
            $('.finish-contents').removeClass('inactive');
            return false;
        });
    });
    $(function(){
        $('.nav-link').on('click', function() {
            $('footer').removeClass('inactive');
            return false;
        });
    });
    $(function(){
        $(".nav-link").on("click", function() {
            event.preventDefault();
            var link = $(this).attr('href');
            setTimeout(function() {
                location.href= link;
            }, 0);
        });
    });
    $(function(){
        $('.nav-link').click(function(){
            var adjust = 0;
            var speed = 400;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top + adjust;
            $('body,html').animate({scrollTop:position}, speed, 'swing');
            return false;
        });
    });
</script>
</html>