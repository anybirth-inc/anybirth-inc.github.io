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
                    name: "5kg パック / 月1配送 / 第2木曜出荷",
                    stripe_name: "わくわくロス野菜5kgパック",
                    weight: "5kg",
                    frequency: "monthly",
                    shipping_day: "thursday",
                    shipping_day_turn: 2,
                    price: 1700,
                    shipping_fee: 611,
                    url: "https://buy.stripe.com/3cs01S6OV5Jefde9AY",
                },
                {
                    name: "5kg パック / 月1配送 / 第2金曜出荷",
                    stripe_name: "わくわくロス野菜5kgパック",
                    weight: "5kg",
                    frequency: "monthly",
                    shipping_day: "friday",
                    shipping_day_turn: 2,
                    price: 1700,
                    shipping_fee: 611,
                    url: "https://buy.stripe.com/fZe2a0flr6NifdefZn",
                },
                {
                    name: "5kg パック / 月1配送 / 第4木曜出荷",
                    stripe_name: "わくわくロス野菜5kgパック",
                    weight: "5kg",
                    frequency: "monthly",
                    shipping_day: "thursday",
                    shipping_day_turn: 4,
                    price: 1700,
                    shipping_fee: 611,
                    url: "https://buy.stripe.com/9AQ2a0a179Zu3uwbJ8",
                },
                {
                    name: "5kg パック / 月1配送 / 第4金曜出荷",
                    stripe_name: "わくわくロス野菜5kgパック",
                    weight: "5kg",
                    frequency: "monthly",
                    shipping_day: "friday",
                    shipping_day_turn: 4,
                    price: 1700,
                    shipping_fee: 611,
                    url: "https://buy.stripe.com/4gwdSIa17gnS4yA14v",
                },
                {
                    name: "5kg パック / 2週間1配送 / 第2木曜出荷",
                    stripe_name: "わくわくロス野菜5kgパック",
                    weight: "5kg",
                    frequency: "each 2 weeks",
                    shipping_day: "thursday",
                    shipping_day_turn: 2,
                    price: 3400,
                    shipping_fee: 1222,
                    url: "https://buy.stripe.com/5kA15W0qx8Vq5CE28A",
                },
                {
                    name: "5kg パック / 2週間1配送 / 第2金曜出荷",
                    stripe_name: "わくわくロス野菜5kgパック",
                    weight: "5kg",
                    frequency: "each 2 weeks",
                    shipping_day: "friday",
                    shipping_day_turn: 2,
                    price: 3400,
                    shipping_fee: 1222,
                    url: "https://buy.stripe.com/eVadSI7SZfjOe9aeVn",
                },
                {
                    name: "5kg パック / 2週間1配送 / 第4木曜出荷",
                    stripe_name: "わくわくロス野菜5kgパック",
                    weight: "5kg",
                    frequency: "each 2 weeks",
                    shipping_day: "thursday",
                    shipping_day_turn: 4,
                    price: 3400,
                    shipping_fee: 1222,
                    url: "https://buy.stripe.com/14k6qgc9f3B6c1200u",
                },
                {
                    name: "5kg パック / 2週間1配送 / 第4金曜出荷",
                    stripe_name: "わくわくロス野菜5kgパック",
                    weight: "5kg",
                    frequency: "each 2 weeks",
                    shipping_day: "friday",
                    shipping_day_turn: 4,
                    price: 3400,
                    shipping_fee: 1222,
                    url: "https://buy.stripe.com/6oE2a0gpvb3ye9a28D",
                },
                {
                    name: "10kg パック / 月1配送 / 第2木曜出荷",
                    stripe_name: "わくわくロス野菜10kgパック",
                    weight: "10kg",
                    frequency: "monthly",
                    shipping_day: "thursday",
                    shipping_day_turn: 2,
                    price: 2700,
                    shipping_fee: 713,
                    url: "https://buy.stripe.com/fZe8yoehn4Fac129B6",
                },
                {
                    name: "10kg パック / 月1配送 / 第2金曜出荷",
                    stripe_name: "わくわくロス野菜10kgパック",
                    weight: "10kg",
                    frequency: "monthly",
                    shipping_day: "friday",
                    shipping_day_turn: 2,
                    price: 2700,
                    shipping_fee: 713,
                    url: "https://buy.stripe.com/9AQ15W8X31sYfde14B",
                },
                {
                    name: "10kg パック / 月1配送 / 第4木曜出荷",
                    stripe_name: "わくわくロス野菜10kgパック",
                    weight: "10kg",
                    frequency: "monthly",
                    shipping_day: "thursday",
                    shipping_day_turn: 4,
                    price: 2700,
                    shipping_fee: 713,
                    url: "https://buy.stripe.com/14kg0Q8X31sY6GIdRo",
                },
                {
                    name: "10kg パック / 月1配送 / 第4金曜出荷",
                    stripe_name: "わくわくロス野菜10kgパック",
                    weight: "10kg",
                    frequency: "monthly",
                    shipping_day: "friday",
                    shipping_day_turn: 4,
                    price: 2700,
                    shipping_fee: 713,
                    url: "https://buy.stripe.com/28o7uk8X37RmghibJh",
                },
                {
                    name: "10kg パック / 2週間1配送 / 第2木曜出荷",
                    stripe_name: "わくわくロス野菜10kgパック",
                    weight: "10kg",
                    frequency: "each 2 weeks",
                    shipping_day: "thursday",
                    shipping_day_turn: 2,
                    price: 5400,
                    shipping_fee: 1426,
                    url: "https://buy.stripe.com/4gw4i8a178Vq6GI28I",
                },
                {
                    name: "10kg パック / 2週間1配送 / 第2金曜出荷",
                    stripe_name: "わくわくロス野菜10kgパック",
                    weight: "10kg",
                    frequency: "each 2 weeks",
                    shipping_day: "friday",
                    shipping_day_turn: 2,
                    price: 5400,
                    shipping_fee: 1426,
                    url: "https://buy.stripe.com/14k7uk2yF7Rm3uwdRr",
                },
                {
                    name: "10kg パック / 2週間1配送 / 第4木曜出荷",
                    stripe_name: "わくわくロス野菜10kgパック",
                    weight: "10kg",
                    frequency: "each 2 weeks",
                    shipping_day: "thursday",
                    shipping_day_turn: 4,
                    price: 5400,
                    shipping_fee: 1426,
                    url: "https://buy.stripe.com/3cs5mc5KR6Ni8OQ3cO",
                },
                {
                    name: "10kg パック / 2週間1配送 / 第4金曜出荷",
                    stripe_name: "わくわくロス野菜10kgパック",
                    weight: "10kg",
                    frequency: "each 2 weeks",
                    shipping_day: "friday",
                    shipping_day_turn: 4,
                    price: 5400,
                    shipping_fee: 1426,
                    url: "https://buy.stripe.com/4gw8yoehn9Zue9adRt",
                },
                {
                    name: "20kg パック / 月1配送 / 第2木曜出荷",
                    stripe_name: "わくわくロス野菜20kgパック",
                    weight: "20kg",
                    frequency: "monthly",
                    shipping_day: "thursday",
                    shipping_day_turn: 2,
                    price: 4500,
                    shipping_fee: 1018.5,
                    url: "https://buy.stripe.com/8wM4i87SZefKd56fZC",
                },
                {
                    name: "20kg パック / 月1配送 / 第2金曜出荷",
                    stripe_name: "わくわくロス野菜20kgパック",
                    weight: "20kg",
                    frequency: "monthly",
                    shipping_day: "friday",
                    shipping_day_turn: 2,
                    price: 4500,
                    shipping_fee: 1018.5,
                    url: "https://buy.stripe.com/3cs5mc6OVgnS7KMdRv",
                },
                {
                    name: "20kg パック / 月1配送 / 第4木曜出荷",
                    stripe_name: "わくわくロス野菜20kgパック",
                    weight: "20kg",
                    frequency: "monthly",
                    shipping_day: "thursday",
                    shipping_day_turn: 4,
                    price: 4500,
                    shipping_fee: 1018.5,
                    url: "https://buy.stripe.com/fZe7ukc9fc7CfdedRw",
                },
                {
                    name: "20kg パック / 月1配送 / 第4金曜出荷",
                    stripe_name: "わくわくロス野菜20kgパック",
                    weight: "20kg",
                    frequency: "monthly",
                    shipping_day: "friday",
                    shipping_day_turn: 4,
                    price: 4500,
                    shipping_fee: 1018.5,
                    url: "https://buy.stripe.com/dR63e4c9f2x29SU00H",
                },
                {
                    name: "20kg パック / 2週間1配送 / 第2木曜出荷",
                    stripe_name: "わくわくロス野菜20kgパック",
                    weight: "20kg",
                    frequency: "each 2 weeks",
                    shipping_day: "thursday",
                    shipping_day_turn: 2,
                    price: 9000,
                    shipping_fee: 2037,
                    url: "https://buy.stripe.com/cN2bKAc9f3B6aWY28Q",
                },
                {
                    name: "20kg パック / 2週間1配送 / 第2金曜出荷",
                    stripe_name: "わくわくロス野菜20kgパック",
                    weight: "20kg",
                    frequency: "each 2 weeks",
                    shipping_day: "friday",
                    shipping_day_turn: 2,
                    price: 9000,
                    shipping_fee: 2037,
                    url: "https://buy.stripe.com/28ocOEgpv9ZufdefZH",
                },
                {
                    name: "20kg パック / 2週間1配送 / 第4木曜出荷",
                    stripe_name: "わくわくロス野菜20kgパック",
                    weight: "20kg",
                    frequency: "each 2 weeks",
                    shipping_day: "thursday",
                    shipping_day_turn: 4,
                    price: 9000,
                    shipping_fee: 2037,
                    url: "https://buy.stripe.com/00g3e44GN9Zuc1200K",
                },
                {
                    name: "20kg パック / 2週間1配送 / 第4金曜出荷",
                    stripe_name: "わくわくロス野菜20kgパック",
                    weight: "20kg",
                    frequency: "each 2 weeks",
                    shipping_day: "friday",
                    shipping_day_turn: 4,
                    price: 9000,
                    shipping_fee: 2037,
                    url: "https://buy.stripe.com/28o5mc1uBefK9SUfZJ",
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
            this.shipping_fee = item.shipping_fee;
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
            return this.subtotal * 0.08;
        },
        total: function() {
            return Math.round(this.subtotal + this.tax);
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