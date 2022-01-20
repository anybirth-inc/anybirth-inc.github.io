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
                kitId: 'ahc7qvt',
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

        <div class="main-contents">
            <div class="head-ttl">
                Order form
                <span class="ttl-deco left"></span>
                <span class="ttl-deco right"></span>
            </div>
            <p class="ttl">ご注文</p>
            <div class="head-txt">
                ご注文はこちらのフォームからお願いします。<br>
                ご注文後、確認メールが届きますので、<br>
                内容に間違いがないかご確認ください。<br>
                <br>
                お支払い完了後、3営業日以内に<br>
                野菜セットを配送致します。<br>
            </div>

            <div class="form-wrap">
                <form id="contact-form" class="h-adr" enctype="multipart/form-data">
                    <span class="p-country-name" style="display:none;">Japan</span>
                    <div class="input-wrap js-input-name">
                        <label class="input-label">お名前<span class="req-icon">必須</span></label>
                        <input type="text" name="name" placeholder="例）野菜 太郎" maxlength="50">
                    </div>
                    <div class="input-wrap js-input-kana">
                        <label class="input-label">ふりがな<span class="req-icon">必須</span></label>
                        <input type="text" name="kana" placeholder="例）やさい たろう" maxlength="50">
                    </div>
                    <p class="input-label single">住所<span class="req-icon">必須</span></p>
                    <div class="input-wrap js-input-zip">
                        <label class="input-label">郵便番号</label>
                        <input type="text" name="zip" placeholder="" class="p-postal-code" maxlength="8">
                    </div>
                    <div class="input-wrap js-input-address1">
                        <label class="input-label">県市区町村・丁目</label>
                        <input type="text" name="address1" placeholder="" class="p-region p-locality p-street-address p-extended-address" maxlength="100">
                    </div>
                    <div class="input-wrap js-input-address2">
                        <label class="input-label">番地</label>
                        <input type="text" name="address2" placeholder="" maxlength="50">
                    </div>
                    <div class="input-wrap js-input-address3">
                        <label class="input-label">建物名・部屋番号</label>
                        <input type="text" name="address3" placeholder="" maxlength="100">
                    </div>
                    <div class="input-wrap js-input-email">
                        <label class="input-label">メールアドレス<span class="req-icon">必須</span></label>
                        <input type="email" name="email" placeholder="例）exsample@aaa.jp" maxlength="100">
                    </div>
                    <div class="input-wrap js-input-tel">
                        <label class="input-label">電話番号<span class="req-icon">必須</span></label>
                        <input type="tel" name="tel" placeholder="例）0776-12-3456" maxlength="20">
                    </div>
                    <div class="input-wrap js-input-payment">
                        <label class="input-label">支払い方法<span class="req-icon">必須</span></label>
                        <div class="radio-wrap">
                            <input id="payment-bank" type="radio" name="payment" value="銀行振り込み">
                            <label class="radio-label" for="payment-bank">銀行振り込み</label>
                            <input id="payment-card" type="radio" name="payment" value="クレジットカード決済">
                            <label class="radio-label" for="payment-card">クレジットカード決済</label>
                        </div>
                    </div>

                    <div class="agreement-area js-input-agree">
                        <div class="text">
                            ご記入ありがとうございます。<br>
                            弊社「<a href="">プライバシーポリシー</a>」をお読みいただき、<br>
                            同意の上「同意する」にチェックを入れてください。
                        </div>
                        <input type="checkbox" name="agree" value="on" id="chk-agree">
                        <label for="chk-agree" class="checkbox-label">同意する</label>
                    </div>

                    <button class="submit-btn js-form-submit">注文する</button>
                </form>
            </div>
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
            $('.main-contents').toggleClass('inactive');
            return false;
        });
    });
    $(function(){
        $('.nav-trigger').on('click', function() {
            $('header').toggleClass('inactive');
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
            $('.main-contents').removeClass('inactive');
            return false;
        });
    });
    $(function(){
        $('.nav-link').on('click', function() {
            $('header').removeClass('inactive');
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