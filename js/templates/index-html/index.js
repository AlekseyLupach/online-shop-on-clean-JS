const template = `
<div class="grid-wrapper">
        <!--============================= HEADER =============================-->
        <header class="header wow fadeInLeft" data-wow-delay=".3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
            <div class="container header__wrapper">
                <h3 class="header__logo">
                    <a href="/">A-Store | <i class="fa fa-apple" aria-hidden="true"></i></a>
                </h3>
                <div class="header__burger">
                    <span></span>
                </div>
                <div class="header__links"></div>
                <nav class="header__nav nav" id="navigation-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="/" class="nav__link __mPS2id" data-filter="all">Главная</a>
                        </li>
                        <li class="nav__item"><a href="/catalog" class="nav__link __mPS2id" data-filter="all">Каталог товаров</a>
                        </li>
                        <li class="nav__item"><a href="/#about-us" class="nav__link __mPS2id _mPS2id-h">О нас</a></li>
                        <li class="nav__item"><a href="/#advantages-cards" class="nav__link __mPS2id _mPS2id-h">Услуги</a></li>
                        <li class="nav__item"><a href="/#contacts" class="nav__link __mPS2id _mPS2id-h">Контакты</a></li>
                    </ul>
                </nav>
                <div class="header__auth">
    <div class="header-email_wrapper">
    <span class="header-email_text">Приветствуем, Aliaksei</span>
    <a href="" class="logout"><i class="fa fa-sign-out" aria-hidden="true"></i></a>
        </div></div>
                <div class="header__cart cart">
                    <div class="cart__text">
            <div class="cart__text">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    
        <span class="cart__quantity">0</span>
            
        </div>
    </div>
                    <div class="cart-content" id="cart-content">
<div class="cart-content__wrapper" id="cart-content__wrapper">
        <ul class="cart-content__list" id="cart-content__list">

        </ul>
</div>
<div class="cart-content__bottom">
<div class="cart-content__fullprice">
    <span>Итого:</span>
    <span class="fullprice">5080 BYN</span>
</div>
<button class="cart-content__btn btn" data-graph-path="modal" data-graph-animation="fadeInUp">Перейти в корзину</button>
</div>
</div>
                </div>
            </div>
        </header>
        <!--============================= HEADER =============================-->
        <!--============================= MAIN =============================-->
        <main>
            <section class="carusel  wow fadeInLeft" data-wow-delay=".3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                <div class="home-demo">
                    <div class="owl-carousel owl-theme container owl-loaded owl-drag">
                        
                        
                        
                    <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-4560px, 0px, 0px); transition: all 0s ease 0s; width: 7980px;"><div class="owl-item cloned" style="width: 1140px;"><div class="item">
                            <img src="/img/owl-slider/mac.jpg" alt="macbook">
                        </div></div><div class="owl-item cloned" style="width: 1140px;"><div class="item">
                            <img src="/img/owl-slider/iphone.jpg" alt="iphone">
                        </div></div><div class="owl-item" style="width: 1140px;"><div class="item">
                            <img src="/img/owl-slider/airprodsmax.jpg" alt="air">
                        </div></div><div class="owl-item animated owl-animated-out fadeOut" style="width: 1140px; left: 1140px;"><div class="item">
                            <img src="/img/owl-slider/mac.jpg" alt="macbook">
                        </div></div><div class="owl-item active" style="width: 1140px;"><div class="item">
                            <img src="/img/owl-slider/iphone.jpg" alt="iphone">
                        </div></div><div class="owl-item cloned" style="width: 1140px;"><div class="item">
                            <img src="/img/owl-slider/airprodsmax.jpg" alt="air">
                        </div></div><div class="owl-item cloned" style="width: 1140px;"><div class="item">
                            <img src="/img/owl-slider/mac.jpg" alt="macbook">
                        </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots"><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot active"><span></span></button></div></div>
                </div>
            </section>

            <section class="products-advertising wow fadeInLeft" data-wow-delay=".3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                <div class="products-advertising__wrapper">
                    <div class="product-advertising">
                        <div class="product-img"><img src="/img/catalog/airpodsPRO-3.jpg" alt=""></div>
                        <div class="product-info">
                            <div class="product-info__name">AirPods</div>
                            <div class="product-text product-info__text">Никаких проводов.Никаких сложностей</div>
                            <a href="/catalog" class="product-btn" data-filter="airpods">Купить</a>
                        </div>
                    </div>
                    <div class="product-advertising">
                        <div class="product-img"><img src="/img/catalog/case.jpg" alt=""></div>
                        <div class="product-info">
                            <div class="product-name">Чехлы на Iphone 12 / 12 PRO</div>
                            <div class="product-text">Только идеальные пары.</div>
                            <a href="/catalog" class="product-btn">Купить</a>
                        </div>
                    </div>
                    <div class="product-advertising">
                        <div class="product-img"><img src="/img/catalog/app.jpg" alt=""></div>
                        <div class="product-info">
                            <div class="product-name">Карта клиента</div>
                            <div class="product-text">Совершай покупки и получайте бонусы на счет.</div>
                            <a href="/catalog" class="product-btn">Подробнее</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="products-nav  wow fadeInLeft" data-wow-delay=".3s" style="visibility: hidden; animation-delay: 0.3s; animation-name: none;">
                <div class="grid-container container">
                    <div class="macbook product-nav">
                        <div class="product-name">Macbook</div>
                        <a href="" class="product-btn" data-filter="macbook">Купить</a>
                    </div>
                    <div class="iphone  product-nav">
                        <div class="product-name">Iphone</div>
                        <a href="" class="product-btn" data-filter="iphone">Купить</a>
                    </div>
                    <div class="ipad product-nav">
                        <div class="product-name">Ipad</div>
                        <a href="" class="product-btn" data-filter="ipad">Купить</a>
                    </div>
                    <div class="accessories  product-nav">
                        <div class="product-name">Аксессуары</div>
                        <a href="" class="product-btn">Купить</a>
                    </div>
                    <div class="mac-mini  product-nav">
                        <div class="product-name">Mac-mini</div>
                        <a href="" class="product-btn" data-filter="tv">Купить</a>
                    </div>
                    <div class="smart-home  product-nav">
                        <div class="product-name">Умный дом</div>
                        <a href="" class="product-btn">Купить</a>
                    </div>
                </div>
            </section>

            <section class="about-us wow fadeInLeft _mPS2id-t" data-wow-delay=".3s" id="about-us" style="visibility: hidden; animation-delay: 0.3s; animation-name: none;">
                <div class="about-us_wrapper container">
                    <div class="about-us_video">
                        <img src="img/about-us/premium-reseller.jpg" alt="" class="">
                        <a class="about-us_button popup-youtube" href=" https://www.youtube.com/watch?v=0Yo8vfQq_Z8?autoplay=1&amp;rel=0">
                        </a>
                    </div>
                    <div class="about-us_text">
                        <h4>A-Store (AСтор) – официальный партнёр компании Apple в Беларуси со
                            статусом Apple Premium Reseller.</h4>
                        <p>Статус Apple Premium Reseller даётся только профессионалам в
                            своём деле.<br> <br>
                            В наших магазинах можно не только купить iPhone, компьютер Mac или
                            планшет iPad, а также другую технику Apple inc и аксессуары для неё. A-Store – это прежде
                            всего место, пропитанное атмосферой Apple, в котором вам помогут с выбором техники, научат
                            ей пользоваться, дадут советы по эксплуатации ваших гаджетов и предложат качественные
                            аксессуары.
                        </p>
                    </div>
                </div>
            </section>

            <section class="advantages-cards wow fadeInLeft _mPS2id-t" data-wow-delay=".3s" id="advantages-cards" style="visibility: hidden; animation-delay: 0.3s; animation-name: none;">
                <h1 class="contacts__title container">Услуги</h1>
                <div class="container advantages-cards__wrapper">
                    <div class="advantages-cards_card">
                        <div class="advantages-card_img">
                            <img src="/img/advantages-cards/card.svg" alt="card">
                        </div>
                        <div class="advantages-card_title">Рассрочка и кредит</div>
                        <div class="advantages-card_subtitle">С нашими кредитными предложениями продукция Apple
                            действительно
                            впишется в любой бюджет.</div>
                    </div>
                    <div class="advantages-cards_card">
                        <div class="advantages-card_img">
                            <img src="/img/advantages-cards/car.svg" alt="car">
                        </div>
                        <div class="advantages-card_title">Доставка по Беларуси</div>
                        <div class="advantages-card_subtitle">Мы доставляем продукты Apple более чем в 130 городов
                            Беларуси.
                            Доставка по Минску - бесплатная.</div>
                    </div>
                    <div class="advantages-cards_card">
                        <div class="advantages-card_img">
                            <img src="/img/advantages-cards/tools.svg" alt="tools">
                        </div>
                        <div class="advantages-card_title">Сервис i-Store</div>
                        <div class="advantages-card_subtitle">Мы поможем вам разобраться с вашим Mac, iPhone или iPad,
                            какие бы
                            вопросы у вас ни возникли.</div>
                    </div>
                    <div class="advantages-cards_card">
                        <div class="advantages-card_img">
                            <img src="/img/advantages-cards/tv.svg" alt="tv">
                        </div>
                        <div class="advantages-card_title">Видеоконсультации</div>
                        <div class="advantages-card_subtitle">Ваш виртуальный эксперт Apple. Закажите видеоконсультацию
                            прямо из
                            магазина.</div>
                    </div>
                </div>
            </section>

            <!-- Contacts start -->
            <section class="contacts container wow fadeInLeft _mPS2id-t" data-wow-delay=".3s" id="contacts" style="visibility: hidden; animation-delay: 0.3s; animation-name: none;">
                <h1 class="contacts__title">Контакты</h1>
                <div class="contacts__wrapper">
                    <div class="contacts__info">
                        <h3 class="contacts__info-title">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            Наши телефон:
                        </h3>
                        <p class="contacts__info-subtitle">+375 (33) 66 08 104<br>+375 (29) 280 38 53</p>
                    </div>
                    <div class="contacts__info">
                        <h3 class="contacts__info-title">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            Наш адрес:
                        </h3>
                        <p class="contacts__info-subtitle">г. Гродно, ул. Максима Горького 1 </p>
                    </div>
                    <div class="contacts__info">
                        <h3 class="contacts__info-title">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            Наш emeil:
                        </h3>
                        <p class="contacts__info-subtitle">cubbije@gmail.com <br>cubbi@mail.ru</p>
                    </div>
                    <div class="contacts__info">
                        <h3 class="contacts__info-title">
                            Мы в соц.сетях
                        </h3>
                        <i class="fa fa-instagram fa-3x fa-fw" aria-hidden="true"></i>
                        <i class="fa fa-facebook-official fa-3x fa-fw" aria-hidden="true"></i>
                        <i class="fa fa-twitter fa-3x fa-fw" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="maps__wrapper">
                    <ymaps id="ymaps1615443032687496283" style="display: block; width: 100%; height: 463px;"><ymaps class="ymaps-2-1-78-map" style="width: 1183px; height: 463px;"><ymaps class="ymaps-2-1-78-map ymaps-2-1-78-i-ua_js_yes ymaps-2-1-78-map-bg ymaps-2-1-78-islets_map-lang-ru" style="width: 1183px; height: 463px; z-index: 0;"><ymaps class="ymaps-2-1-78-inner-panes"><ymaps class="ymaps-2-1-78-events-pane ymaps-2-1-78-user-selection-none" unselectable="on" style="height: 100%; width: 100%; top: 0px; left: 0px; position: absolute; z-index: 2500; cursor: url(&quot;https://api-maps.yandex.ru/2.1.78/build/release/images/cursor/grab.cur&quot;) 16 16, url(&quot;https://api-maps.yandex.ru/2.1.78/build/release/images/cursor/grab.cur&quot;), move;"></ymaps><ymaps class="ymaps-2-1-78-ground-pane" style="top: 0px; left: 0px; position: absolute; transform: translate3d(0px, 0px, 0px) scale(1, 1); z-index: 501;"><ymaps style="z-index: 150; position: absolute;"><canvas height="1438" width="2878" style="position: absolute; width: 1439px; height: 719px; left: -128px; top: -128px;"></canvas></ymaps></ymaps><ymaps class="ymaps-2-1-78-copyrights-pane" style="height: 0px; inset: auto 0px 0px; position: absolute; z-index: 5002; margin-bottom: 0px;"><ymaps><ymaps class="ymaps-2-1-78-copyright ymaps-2-1-78-copyright_logo_no" style=""><ymaps class="ymaps-2-1-78-copyright__fog">…</ymaps><ymaps class="ymaps-2-1-78-copyright__wrap"><ymaps class="ymaps-2-1-78-copyright__layout"><ymaps class="ymaps-2-1-78-copyright__content-cell"><ymaps class="ymaps-2-1-78-copyright__content"><ymaps class="ymaps-2-1-78-copyright__text">© Яндекс</ymaps><ymaps class="ymaps-2-1-78-copyright__agreement">&nbsp;<a class="ymaps-2-1-78-copyright__link" target="_blank" href="https://yandex.ru/legal/maps_termsofuse/?lang=ru" rel="noopener">Условия использования</a></ymaps></ymaps></ymaps><ymaps class="ymaps-2-1-78-copyright__logo-cell"><a class="ymaps-2-1-78-copyright__logo" href="" target="_blank"></a></ymaps></ymaps></ymaps></ymaps></ymaps><ymaps class="ymaps-2-1-78-map-copyrights-promo"><ymaps><ymaps class="ymaps-2-1-78-gotoymaps" title="Открыть в Яндекс.Картах"><ymaps class="ymaps-2-1-78-gotoymaps__container"><ymaps class="ymaps-2-1-78-gotoymaps__pin"></ymaps><ymaps class="ymaps-2-1-78-gotoymaps__text-container"><ymaps class="ymaps-2-1-78-gotoymaps__text">Открыть в Яндекс.Картах</ymaps></ymaps></ymaps></ymaps><a class="ymaps-2-1-78-gototech" target="_blank" href="https://tech.yandex.ru/maps/mapsapi/?from=api-maps ">Создать свою карту</a></ymaps></ymaps></ymaps><ymaps class="ymaps-2-1-78-controls-pane" style="width: 100%; top: 0px; left: 0px; position: absolute; z-index: 4503;"><ymaps class="ymaps-2-1-78-controls__toolbar" style="margin-top: 10px;"><ymaps class="ymaps-2-1-78-controls__toolbar_left"><ymaps class="ymaps-2-1-78-controls__control_toolbar ymaps-2-1-78-user-selection-none" unselectable="on" style="margin-right: 0px; margin-left: 10px; position: inherit;"><ymaps><ymaps class="ymaps-2-1-78-float-button ymaps-2-1-78-_hidden-text" style="max-width: 90px" title="Определить ваше местоположение"><ymaps class="ymaps-2-1-78-float-button-icon ymaps-2-1-78-float-button-icon_icon_geolocation"></ymaps><ymaps class="ymaps-2-1-78-float-button-text"></ymaps></ymaps></ymaps></ymaps></ymaps><ymaps class="ymaps-2-1-78-controls__toolbar_right"><ymaps class="ymaps-2-1-78-controls__control_toolbar" style="margin-right: 10px; margin-left: 0px; position: inherit;"><ymaps><ymaps class="ymaps-2-1-78-traffic"><ymaps id="id_161544303282278152151" unselectable="on" class="ymaps-2-1-78-user-selection-none"><ymaps><ymaps class="ymaps-2-1-78-float-button ymaps-2-1-78-float-button_traffic_left" style=""><ymaps class="ymaps-2-1-78-traffic__icon ymaps-2-1-78-traffic__icon_icon_off ymaps-2-1-78-float-button-icon"></ymaps><ymaps class="ymaps-2-1-78-float-button-text"><ymaps>Пробки</ymaps></ymaps></ymaps></ymaps><ymaps></ymaps></ymaps><ymaps id="id_161544303282278152152"><ymaps><ymaps class="ymaps-2-1-78-traffic__panel ymaps-2-1-78-popup ymaps-2-1-78-popup_direction_down ymaps-2-1-78-popup_to_bottom ymaps-2-1-78-popup_theme_ffffff ymaps-2-1-78-user-selection-none" unselectable="on" style="width: 270px;"><ymaps class="ymaps-2-1-78-traffic__tail ymaps-2-1-78-popup__tail"></ymaps><ymaps class="ymaps-2-1-78-traffic__panel-content"><ymaps id="id_161544303282278152153"><ymaps><ymaps class="ymaps-2-1-78-traffic__switcher"><ymaps class="ymaps-2-1-78-traffic__switcher-item ymaps-2-1-78-traffic__switcher-item_data_actual ymaps-2-1-78-traffic__switcher-item_selected_yes">Сейчас</ymaps><ymaps class="ymaps-2-1-78-traffic__switcher-item ymaps-2-1-78-traffic__switcher-item_data_archive">Статистика</ymaps></ymaps></ymaps></ymaps><ymaps></ymaps><ymaps></ymaps><ymaps></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps><ymaps class="ymaps-2-1-78-controls__control_toolbar" style="margin-right: 10px; margin-left: 0px; position: inherit;"><ymaps><ymaps class="ymaps-2-1-78-listbox ymaps-2-1-78-listbox_opened_no ymaps-2-1-78-listbox_align_right" style="width: 87px;"><ymaps class="ymaps-2-1-78-listbox__button ymaps-2-1-78-_visible-arrow ymaps-2-1-78-user-selection-none" unselectable="on" title=""><ymaps class="ymaps-2-1-78-listbox__button-icon ymaps-2-1-78-_icon_layers"></ymaps><ymaps class="ymaps-2-1-78-listbox__button-text">Слои</ymaps><ymaps class="ymaps-2-1-78-listbox__button-arrow"></ymaps></ymaps><ymaps class="ymaps-2-1-78-listbox__panel ymaps-2-1-78-i-custom-scroll" style="transform: translate3d(0px, 0px, 0px) scale(1, 1);"><ymaps class="ymaps-2-1-78-listbox__list" style="max-height: 999999px;"><ymaps><ymaps><ymaps id="id_161544303282278152141"><ymaps unselectable="on" class="ymaps-2-1-78-user-selection-none"><ymaps class="ymaps-2-1-78-listbox__list-item ymaps-2-1-78-listbox__list-item_selected_yes"><ymaps class="ymaps-2-1-78-listbox__list-item-text">Схема</ymaps></ymaps></ymaps></ymaps></ymaps></ymaps><ymaps><ymaps><ymaps id="id_161544303282278152142"><ymaps unselectable="on" class="ymaps-2-1-78-user-selection-none"><ymaps class="ymaps-2-1-78-listbox__list-item ymaps-2-1-78-listbox__list-item_selected_no"><ymaps class="ymaps-2-1-78-listbox__list-item-text">Спутник</ymaps></ymaps></ymaps></ymaps></ymaps></ymaps><ymaps><ymaps><ymaps id="id_161544303282278152143"><ymaps unselectable="on" class="ymaps-2-1-78-user-selection-none"><ymaps class="ymaps-2-1-78-listbox__list-item ymaps-2-1-78-listbox__list-item_selected_no"><ymaps class="ymaps-2-1-78-listbox__list-item-text">Гибрид</ymaps></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps><ymaps class="ymaps-2-1-78-controls__control_toolbar ymaps-2-1-78-user-selection-none" unselectable="on" style="margin-right: 10px; margin-left: 0px; position: inherit;"><ymaps><ymaps class="ymaps-2-1-78-float-button ymaps-2-1-78-_hidden-text" style="max-width: 28px" title=""><ymaps class="ymaps-2-1-78-float-button-icon ymaps-2-1-78-float-button-icon_icon_expand"></ymaps><ymaps class="ymaps-2-1-78-float-button-text"></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps><ymaps class="ymaps-2-1-78-controls__bottom" style="top: 463px;"><ymaps class="ymaps-2-1-78-controls__control" style="margin-right: 0px; margin-left: 0px; position: inherit; inset: auto 10px 30px auto;"><ymaps><ymaps style="display: block;"><ymaps style="display: inline-block; height: 100%; vertical-align: top;"><ymaps id="id_161544303282278152144"><ymaps><ymaps class="ymaps-2-1-78-scaleline" style="width: 71px;"><ymaps class="ymaps-2-1-78-scaleline__left"><ymaps class="ymaps-2-1-78-scaleline__left-border"></ymaps><ymaps class="ymaps-2-1-78-scaleline__left-line"></ymaps></ymaps><ymaps class="ymaps-2-1-78-scaleline__center"><ymaps class="ymaps-2-1-78-scaleline__label">100&nbsp;м</ymaps></ymaps><ymaps class="ymaps-2-1-78-scaleline__right"><ymaps class="ymaps-2-1-78-scaleline__right-border"></ymaps><ymaps class="ymaps-2-1-78-scaleline__right-line"></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps><ymaps style="display: inline-block; width: 10px; height: 0"></ymaps><ymaps style="display: inline-block;"><ymaps id="id_161544303282278152145" unselectable="on" class="ymaps-2-1-78-user-selection-none"><ymaps><ymaps class="ymaps-2-1-78-float-button ymaps-2-1-78-_hidden-text" style="max-width: 28px" title="Измерение расстояний на карте"><ymaps class="ymaps-2-1-78-float-button-icon ymaps-2-1-78-float-button-icon_icon_ruler"></ymaps><ymaps class="ymaps-2-1-78-float-button-text"></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps><ymaps class="ymaps-2-1-78-controls__control" style="margin-right: 0px; margin-left: 0px; position: inherit; inset: 108px auto auto 10px;"><ymaps><ymaps class="ymaps-2-1-78-zoom" style="height: 150px"><ymaps class="ymaps-2-1-78-zoom__plus ymaps-2-1-78-zoom__button ymaps-2-1-78-float-button ymaps-2-1-78-user-selection-none" unselectable="on"><ymaps class="ymaps-2-1-78-zoom__icon ymaps-2-1-78-float-button-icon"></ymaps></ymaps><ymaps class="ymaps-2-1-78-zoom__minus ymaps-2-1-78-zoom__button ymaps-2-1-78-float-button ymaps-2-1-78-user-selection-none" unselectable="on"><ymaps class="ymaps-2-1-78-zoom__icon ymaps-2-1-78-float-button-icon"></ymaps></ymaps><ymaps class="ymaps-2-1-78-zoom__scale"><ymaps class="ymaps-2-1-78-zoom__runner ymaps-2-1-78-zoom__button ymaps-2-1-78-float-button ymaps-2-1-78-zoom__runner__transition ymaps-2-1-78-touch-action-none ymaps-2-1-78-user-selection-none" unselectable="on" style="top: 32px;"><ymaps class="ymaps-2-1-78-zoom__icon ymaps-2-1-78-float-button-icon ymaps-2-1-78-float-button-icon_icon_runner"></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps><ymaps class="ymaps-2-1-78-places-pane" style="top: 0px; left: 0px; position: absolute; transform: translate3d(0px, 0px, 0px) scale(1, 1); z-index: 2004;"><ymaps class="ymaps-2-1-78-placemark-overlay ymaps-2-1-78-user-selection-none" unselectable="on" style="z-index: 800000000; height: 0px; width: 0px; position: absolute; left: 607px; top: 248px;"><ymaps><ymaps class="ymaps-2-1-78-islets_dot-icon-with-caption"><ymaps class="ymaps-2-1-78-islets_dot-icon-with-caption__caption-block"><ymaps class="ymaps-2-1-78-islets_icon-caption" style="max-width: 188px;">A-Store</ymaps></ymaps><ymaps id="id_161544303282278152156"><ymaps class="ymaps-2-1-78-svg-icon ymaps_https___api_maps_yandex_ru_2_1_78_274925773233islands_dotIcon___1E98FF__1E98FF_34x41_1615443032966" style="position: absolute; width: 34px; height: 41px; left: -11px; top: -38px;"></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps></ymaps>
                </div>
            </section>
            <!-- Contacts end -->
        </main>
        <!--============================= MAIN =============================-->

        <!--============================= MODAL =============================-->
        <div class="modal">
            <div class="modal__container order-modal" role="dialog" aria-modal="true" data-graph-target="modal">
                <div class="modal-content order-modal__content">
                    <button class="btn-reset modal__close"><i class="fa fa-times" aria-hidden="true"></i></button>
                    <div class="order-modal__top">
                        <h2 class="order-modal__title">Ваш Заказ</h2>
                    </div>
                    <div class="order-modal__products order-modal__info-item">
                        <ul class="order-modal__list">
        <ul class="order-modal__list">
        
        </ul>
        </ul>
                    </div>
                    <div class="order-modal__info">
                        <div class="order-modal__summ order-modal__info-item">
                            <span>Cумма:</span>
                            <span class="ttlprice">5000 BYN</span>
                        </div>
                        <div class="order-modal__text order-modal__info-item">
                            Для заказа и оплаты банковской картой заполните форму ниже. Внимание! Для оплаты подходят
                            только Беларуские банковские карты. Если ваша карта не проходит, свяжитесь с нами!
                        </div>
                    </div>
                    <form action="#" class="order-modal__form order">
                        <label class="order__label">
                            <span class="order__text">Фамилия Имя Отчество*</span>
                            <input type="text" name="Имя" class="order__input">
                        </label>
                        <label class="order__label">
                            <span class="order__text">Адрес эл.почты*</span>
                            <input type="email" name="Email" class="order__input">
                        </label>
                        <label class="order__label">
                            <span class="order__text">Телефон*</span>
                            <input type="tel" name="Телефон" class="order__input">
                        </label>
                        <label class="order__label">
                            <span class="order__text">Страна*</span>
                            <input type="tel" name="Телефон" class="order__input">
                        </label>
                        <label class="order__label">
                            <span class="order__text">Город/населенный пункт*</span>
                            <input type="tel" name="Телефон" class="order__input">
                        </label>
                        <label class="order__label">
                            <span class="order__text">Адрес для доставки*</span>
                            <input type="tel" name="Телефон" class="order__input">
                        </label>
                        <label class="order__label">
                            <span class="order__text">Индекс*</span>
                            <input type="tel" name="Телефон" class="order__input">
                        </label>
                        <div class="order-modal__form-sum">Итоговая сумма: <span class="ttlprice">5080</span></div>
                        <button class="order__btn btn">Оформить заказ</button>
                        <div class="order__confidence">Отправляя данную форму, вы даете согласие на обработку ваших
                            персональных данных согласно
                            нашей политике конфиденциальности.</div>
                    </form>
                </div>
            </div>
        </div>
        <!--============================= MODAL =============================-->

        <!--============================= FOOTER =============================-->
        <footer class="footer">
            <div class="footer__wrapper container">
                <h3 class="header__logo footer__logo">A-Store |
                    <i class="fa fa-apple" aria-hidden="true"></i>
                </h3>
                <p>© A-Store, 2021 | All rights reserved.
                </p>
                <img src="img/footer/logo-mastercard.png" alt="" class="">
                <img src="img/footer/logo-visa.png" alt="" class="">
                <img src="img/footer/logo-google-pay.png" alt="" class="">
                <img src="img/footer/logo-apple-pay.png" alt="" class="">
            </div>
        </footer>
        <!--============================= FOOTER =============================-->
        <div class="up-button">
            <div class="up-button__size" style="height: 80%;"></div>
            <div class="up-button__inside">
                <i class="fa fa-chevron-up" aria-hidden="true"></i>
            </div>
        </div>

    </div>

`;

export default template;