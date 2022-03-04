import { createApp } from "https://unpkg.com/vue@3.2.4/dist/vue.esm-browser.prod.js";
const app = createApp({
    data() {
        return {
            popUp: false,
            shipping_day_turn: 2,
            item: {
                name: "わくわくロス野菜10kgパック",
                price: 2480,
            },
            items: [{
                    name: "5kg パック / 月１配送 / 第２木曜出荷",
                    stripe_name: "わくわくロス野菜5kgパック",
                    weight: "5kg",
                    frequency: "monthly",
                    shipping_day: "thursday",
                    shipping_day_turn: 2,
                    price: 1480,
                    shipping_fee: 800,
                    url: "https://buy.stripe.com/3cseWM5KR2x26GIeUU",
                },
                {
                    name: "5kg パック / 月１配送 / 第２金曜出荷",
                    stripe_name: "わくわくロス野菜5kgパック",
                    weight: "5kg",
                    frequency: "monthly",
                    shipping_day: "friday",
                    shipping_day_turn: 2,
                    price: 1480,
                    shipping_fee: 800,
                    url: "https://buy.stripe.com/5kA15W2yF7Rmfde3cd",
                },
                {
                    name: "5kg パック / 月１配送 / 第4木曜出荷",
                    stripe_name: "わくわくロス野菜5kgパック",
                    weight: "5kg",
                    frequency: "monthly",
                    shipping_day: "thursday",
                    shipping_day_turn: 4,
                    price: 1480,
                    shipping_fee: 800,
                    url: "https://buy.stripe.com/bIY7uk1uB2x2fdeaEG",
                },
                {
                    name: "5kg パック / 月１配送 / 第4金曜出荷",
                    stripe_name: "わくわくロス野菜5kgパック",
                    weight: "5kg",
                    frequency: "monthly",
                    shipping_day: "friday",
                    shipping_day_turn: 4,
                    price: 1480,
                    shipping_fee: 800,
                    url: "https://buy.stripe.com/fZedSI2yFgnS4yA7sv",
                },
                {
                    name: "5kg パック / 2週間1配送 / 第２木曜出荷",
                    stripe_name: "わくわくロス野菜5kgパック",
                    weight: "5kg",
                    frequency: "each 2 weeks",
                    shipping_day: "thursday",
                    shipping_day_turn: 2,
                    price: 2960,
                    shipping_fee: 1600,
                    url: "https://buy.stripe.com/bIYdSIgpv5JeaWY148",
                },
                {
                    name: "5kg パック / 2週間1配送 / 第２金曜出荷",
                    stripe_name: "わくわくロス野菜5kgパック",
                    weight: "5kg",
                    frequency: "each 2 weeks",
                    shipping_day: "friday",
                    shipping_day_turn: 2,
                    price: 2960,
                    shipping_fee: 1600,
                    url: "https://buy.stripe.com/dR63e43CJfjO4yA9AF",
                },
                {
                    name: "5kg パック / 2週間1配送 / 第4木曜出荷",
                    stripe_name: "わくわくロス野菜5kgパック",
                    weight: "5kg",
                    frequency: "each 2 weeks",
                    shipping_day: "thursday",
                    shipping_day_turn: 4,
                    price: 2960,
                    shipping_fee: 1600,
                    url: "https://buy.stripe.com/5kAg0Q5KRb3y4yA28e",
                },
                {
                    name: "5kg パック / 2週間1配送 / 第4金曜出荷",
                    stripe_name: "わくわくロス野菜5kgパック",
                    weight: "5kg",
                    frequency: "each 2 weeks",
                    shipping_day: "friday",
                    shipping_day_turn: 4,
                    price: 2960,
                    shipping_fee: 1600,
                    url: "https://buy.stripe.com/3csg0Q1uB2x26GIcMT",
                },
                {
                    name: "10kg パック / 月１配送 / 第２木曜出荷",
                    stripe_name: "わくわくロス野菜10kgパック",
                    weight: "10kg",
                    frequency: "monthly",
                    shipping_day: "thursday",
                    shipping_day_turn: 2,
                    price: 2480,
                    shipping_fee: 900,
                    url: "https://buy.stripe.com/7sI2a06OV3B6ghiaEM",
                },
                {
                    name: "10kg パック / 月１配送 / 第２金曜出荷",
                    stripe_name: "わくわくロス野菜10kgパック",
                    weight: "10kg",
                    frequency: "monthly",
                    shipping_day: "friday",
                    shipping_day_turn: 2,
                    price: 2480,
                    shipping_fee: 900,
                    url: "https://buy.stripe.com/14k3e40qx1sYghi7sB",
                },
                {
                    name: "10kg パック / 月１配送 / 第4木曜出荷",
                    stripe_name: "わくわくロス野菜10kgパック",
                    weight: "10kg",
                    frequency: "monthly",
                    shipping_day: "thursday",
                    shipping_day_turn: 4,
                    price: 2480,
                    shipping_fee: 900,
                    url: "https://buy.stripe.com/00g9Csc9f4Fac127sC",
                },
                {
                    name: "10kg パック / 月１配送 / 第4金曜出荷",
                    stripe_name: "わくわくロス野菜10kgパック",
                    weight: "10kg",
                    frequency: "monthly",
                    shipping_day: "friday",
                    shipping_day_turn: 4,
                    price: 2480,
                    shipping_fee: 900,
                    url: "https://buy.stripe.com/14k7uk6OV0oU9SU14f",
                },
                {
                    name: "10kg パック / 2週間1配送 / 第２木曜出荷",
                    stripe_name: "わくわくロス野菜10kgパック",
                    weight: "10kg",
                    frequency: "each 2 weeks",
                    shipping_day: "thursday",
                    shipping_day_turn: 2,
                    price: 4960,
                    shipping_fee: 1800,
                    url: "https://buy.stripe.com/bIY8yo3CJfjO1mofZa",
                },
                {
                    name: "10kg パック / 2週間1配送 / 第２金曜出荷",
                    stripe_name: "わくわくロス野菜10kgパック",
                    weight: "10kg",
                    frequency: "each 2 weeks",
                    shipping_day: "friday",
                    shipping_day_turn: 2,
                    price: 4960,
                    shipping_fee: 1800,
                    url: "https://buy.stripe.com/28o5mcgpvefK2qs8wJ",
                },
                {
                    name: "10kg パック / 2週間1配送 / 第4木曜出荷",
                    stripe_name: "わくわくロス野菜10kgパック",
                    weight: "10kg",
                    frequency: "each 2 weeks",
                    shipping_day: "thursday",
                    shipping_day_turn: 4,
                    price: 4960,
                    shipping_fee: 1800,
                    url: "https://buy.stripe.com/3cs15W4GNb3y9SUfZc",
                },
                {
                    name: "10kg パック / 2週間1配送 / 第4金曜出荷",
                    stripe_name: "わくわくロス野菜10kgパック",
                    weight: "10kg",
                    frequency: "each 2 weeks",
                    shipping_day: "friday",
                    shipping_day_turn: 4,
                    price: 4960,
                    shipping_fee: 1800,
                    url: "https://buy.stripe.com/3cs9Cs6OVfjO5CE9AP",
                },
                {
                    name: "20kg パック / 月１配送 / 第２木曜出荷",
                    stripe_name: "わくわくロス野菜20kgパック",
                    weight: "20kg",
                    frequency: "monthly",
                    shipping_day: "thursday",
                    shipping_day_turn: 2,
                    price: 3980,
                    shipping_fee: 1400,
                    url: "https://buy.stripe.com/7sI3e45KRc7C4yA28o",
                },
                {
                    name: "20kg パック / 月１配送 / 第２金曜出荷",
                    stripe_name: "わくわくロス野菜20kgパック",
                    weight: "20kg",
                    frequency: "monthly",
                    shipping_day: "friday",
                    shipping_day_turn: 2,
                    price: 3980,
                    shipping_fee: 1400,
                    url: "https://buy.stripe.com/eVaaGwflr5Je6GIfZf",
                },
                {
                    name: "20kg パック / 月１配送 / 第4木曜出荷",
                    stripe_name: "わくわくロス野菜20kgパック",
                    weight: "20kg",
                    frequency: "monthly",
                    shipping_day: "thursday",
                    shipping_day_turn: 4,
                    price: 3980,
                    shipping_fee: 1400,
                    url: "https://buy.stripe.com/8wM01S1uBb3yc128wO",
                },
                {
                    name: "20kg パック / 月１配送 / 第4金曜出荷",
                    stripe_name: "わくわくロス野菜20kgパック",
                    weight: "20kg",
                    frequency: "monthly",
                    shipping_day: "friday",
                    shipping_day_turn: 4,
                    price: 3980,
                    shipping_fee: 1400,
                    url: "https://buy.stripe.com/28odSIb5b0oU0ik5kD",
                },
                {
                    name: "20kg パック / 2週間1配送 / 第２木曜出荷",
                    stripe_name: "わくわくロス野菜20kgパック",
                    weight: "20kg",
                    frequency: "each 2 weeks",
                    shipping_day: "thursday",
                    shipping_day_turn: 2,
                    price: 7960,
                    shipping_fee: 2800,
                    url: "https://buy.stripe.com/8wM4i8flr5Je0ikaEY",
                },
                {
                    name: "20kg パック / 2週間1配送 / 第２金曜出荷",
                    stripe_name: "わくわくロス野菜20kgパック",
                    weight: "20kg",
                    frequency: "each 2 weeks",
                    shipping_day: "friday",
                    shipping_day_turn: 2,
                    price: 7960,
                    shipping_fee: 2800,
                    url: "https://buy.stripe.com/14k15Wc9f1sYc129AV",
                },
                {
                    name: "20kg パック / 2週間1配送 / 第4木曜出荷",
                    stripe_name: "わくわくロス野菜20kgパック",
                    weight: "20kg",
                    frequency: "each 2 weeks",
                    shipping_day: "thursday",
                    shipping_day_turn: 4,
                    price: 7960,
                    shipping_fee: 2800,
                    url: "https://buy.stripe.com/28o8yoflrfjOfdecN8",
                },
                {
                    name: "20kg パック / 2週間1配送 / 第4金曜出荷",
                    stripe_name: "わくわくロス野菜20kgパック",
                    weight: "20kg",
                    frequency: "each 2 weeks",
                    shipping_day: "friday",
                    shipping_day_turn: 4,
                    price: 7960,
                    shipping_fee: 2800,
                    url: "https://buy.stripe.com/8wM4i84GNefKfde3cz",
                },
            ],
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
                    name: "20kg",
                }
            ],
            shipping_frequency: 1,
            shipping_frequency_list: [{
                    id: 1,
                    name: "1ヶ月ごと",
                    en_name: "monthly",
                },
                {
                    id: 2,
                    name: "2週間ごと",
                    en_name: "each 2 weeks",
                }
            ],
            shipping_day: 1,
            shipping_day_list: [{
                    id: 1,
                    name: "木曜日",
                    en_name: "thursday"
                },
                {
                    id: 2,
                    name: "金曜日",
                    en_name: "friday",
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
            this.resetCart();
            this.popUp = !this.popUp
        },
        resetCart() {
            const item = this.getItem();
            this.item.name = item.stripe_name;
            this.item.price = item.price;
            this.shipping_fee = item.shipping_fee / 1.1;
        },
        getItem() {
            const kind = this.kind_list.find(
                (u) => u.id === this.kind
            );
            const shipping_frequency = this.shipping_frequency_list.find(
                (u) => u.id === this.shipping_frequency
            );
            const shipping_day = this.shipping_day_list.find(
                (u) => u.id === this.shipping_day
            );
            const result = this.items.filter(
                (u) =>
                u.weight === kind.name &&
                u.frequency === shipping_frequency.en_name &&
                u.shipping_day === shipping_day.en_name &&
                u.shipping_day_turn === this.shipping_day_turn
            );
            return result[0];
        },
        goToCheckout() {
            const url = this.getItem();
            // if (result.length == 1) {
            // if (result[0] != null) {
            window.location.href = url["url"];
            // } else {
            //     console.log("error: 2");
            //     window.location.href = result[0]["url"];
            // }
            // } else {
            //     console.log("error: 1");
            //     window.location.href = result[0]["url"];
            // }
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
        document.getElementById('popUp').style.display = 'block';
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