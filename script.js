import { createApp } from "https://unpkg.com/vue@3.2.4/dist/vue.esm-browser.prod.js";
const app = createApp({
    data() {
        return {
            popUp: false,
            item: {
                name: "わくわくロス野菜10kgパック",
                price: 2480,
            },
            shipping_fee: 900,
            kind: 1,
            kind_list: [{
                    id: 1,
                    name: "5kg",
                },
                {
                    id: 2,
                    name: "10kg",
                },
                {
                    id: 3,
                    name: "15kg",
                }
            ],
            shipping_frequency: 1,
            shipping_frequency_list: [{
                    id: 1,
                    name: "1ヶ月ごと",
                },
                {
                    id: 2,
                    name: "2週間ごと",
                }
            ],
            shipping_day: 1,
            shipping_day_list: [{
                    id: 1,
                    name: "木曜日",
                },
                {
                    id: 2,
                    name: "金曜日",
                }
            ]
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message
                .split('')
                .reverse()
                .join('')
        },
        openPopUp(kind) {
            if (kind != null) {
                // this.$set(this, "kind", kind);
                this.kind = kind
            }
            // this.$set(this, "popUp", !this.popUp);
            this.popUp = !this.popUp
        },
        goToCheckout() {

        },
    },
    computed: {
        subtotal: function() {
            return this.item.price + this.shipping_fee;
        },
        tax: function() {
            return this.subtotal * 0.1;
        },
        total: function() {
            return this.subtotal + this.tax;
        },
    },
    mounted() {
        let mySwiper = new Swiper('.swiper', {
            speed: 800,
            // 以下にオプションを設定
            loop: true, //最後に達したら先頭に戻る
            effect: 'slide',
            autoplay: {
                delay: 6000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
                reverseDirection: false
            },
            //ページネーション表示の設定
            pagination: {
                el: '.swiper-pagination', //ページネーションの要素
                type: 'bullets', //ページネーションの種類
                clickable: true, //クリックに反応させる
            },
        });
        $(function() {
            $('.nav-trigger').on('click', function() {
                $(this).toggleClass('active');
                return false;
            });
        });
        $(function() {
            $('.nav-trigger').on('click', function() {
                $('#p-Humburger').toggleClass('active');
                return false;
            });
        });
        $(function() {
            $('.nav-trigger').on('click', function() {
                $('main').toggleClass('inactive');
                return false;
            });
        });
        $(function() {
            $('.nav-trigger').on('click', function() {
                $('header').toggleClass('inactive');
                return false;
            });
        });
        $(function() {
            $('.nav-trigger').on('click', function() {
                $('footer').toggleClass('inactive');
                return false;
            });
        });
        $(function() {
            $('.nav-link').on('click', function() {
                $('.nav-trigger').removeClass('active');
                return false;
            });
        });
        $(function() {
            $('.nav-link').on('click', function() {
                $('#p-Humburger').removeClass('active');
                return false;
            });
        });
        $(function() {
            $('.nav-link').on('click', function() {
                $('main').removeClass('inactive');
                return false;
            });
        });
        $(function() {
            $('.nav-link').on('click', function() {
                $('header').removeClass('inactive');
                return false;
            });
        });
        $(function() {
            $('.nav-link').on('click', function() {
                $('footer').removeClass('inactive');
                return false;
            });
        });
        $(function() {
            $(".nav-link").on("click", function() {
                event.preventDefault();
                var link = $(this).attr('href');
                setTimeout(function() {
                    location.href = link;
                }, 0);
            });
        });
        $(function() {
            $('.nav-link').click(function() {
                var adjust = 0;
                var speed = 400;
                var href = $(this).attr("href");
                var target = $(href == "#" || href == "" ? 'html' : href);
                var position = target.offset().top + adjust;
                $('body,html').animate({
                    scrollTop: position
                }, speed, 'swing');
                return false;
            });
        });
    }
});
app.mount("#app");