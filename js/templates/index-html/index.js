const template = `
<div class="grid-wrapper">

<!--============================= HEADER start =============================-->
<header class="header wow fadeInLeft" data-wow-delay=".3s">
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
                <li class="nav__item"><a href="/" class="nav__link" data-filter="all">Главная</a>
                </li>
                <li class="nav__item"><a href="" class="nav__link catalog" data-filter="all">Каталог
                        товаров</a>
                </li>
                <li class="nav__item"><a href="/#about-us" class="nav__link">О нас</a></li>
                <li class="nav__item"><a href="/#advantages-cards" class="nav__link">Услуги</a></li>
                <li class="nav__item"><a href="/#contacts" class="nav__link">Контакты</a></li>
            </ul>
        </nav>
        <div class="header__auth">
        </div>
        <div class="header__cart cart">
            <div class="cart__text">
            </div>
            <div class="cart-content" id="cart-content">
            </div>
        </div>
    </div>
</header>
<!--============================= HEADER end =============================-->

<!--============================= MAIN start =============================-->
<main>
    <!--============================= carusel start =============================-->
    <section class="carusel  wow fadeInLeft" data-wow-delay=".3s">
        <div class="home-demo">
            <div class="owl-carousel owl-theme container">
                <div class="item">
                    <img src="/img/owl-slider/airprodsmax.jpg" alt="air">
                </div>
                <div class="item">
                    <img src="/img/owl-slider/mac.jpg" alt="macbook">
                </div>
                <div class="item">
                    <img src="/img/owl-slider/iphone.jpg" alt="iphone">
                </div>
            </div>
        </div>
    </section>
    <!--============================= carusel end =============================-->

    <!--============================= products-advertising start =============================-->
    <section class="products-advertising wow fadeInLeft" data-wow-delay=".3s">
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
    <!--============================= products-advertising end =============================-->

    <!--============================= products-nav start =============================-->
    <section class="products-nav  wow fadeInLeft" data-wow-delay=".3s">
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
                <div class="product-name">Apple Watch</div>
                <a href="" class="product-btn" data-filter="apple-watch">Купить</a>
            </div>
        </div>
    </section>
    <!--============================= products-nav end =============================-->

    <!--============================= about-us start =============================-->
    <section class="about-us wow fadeInLeft" data-wow-delay=".3s" id="about-us">
        <div class="about-us_wrapper container">
            <div class="about-us_video">
                <img src="img/about-us/premium-reseller.jpg" alt="" class="">
                <a class="about-us_button popup-youtube"
                    href=" https://www.youtube.com/watch?v=0Yo8vfQq_Z8?autoplay=1&amp;rel=0">
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
    <!--============================= about-us end =============================-->

    <!--============================= advantages-cards start =============================-->
    <section class="advantages-cards  wow fadeInLeft" data-wow-delay=".3s" id="advantages-cards">
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
    <!--============================= advantages-cards end =============================-->

    <!-- Contacts start -->
    <section class="contacts container  wow fadeInLeft" data-wow-delay=".3s" id="contacts">
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
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A2f0e6d236dd12d480fab5503547e9850a7a7fb4dd939b31170789cd94de93854&amp;source=constructor"
                width="100%" height="463" frameborder="0"></iframe>
        </div>
    </section>
    <!-- Contacts end -->
</main>
<!--============================= MAIN end =============================-->

<!--============================= MODAL CART start =============================-->
<div class="modal">
    <div class="modal__container order-modal" role="dialog" aria-modal="true" data-graph-target="modal">
        <div class="modal-content order-modal__content">
            <button class="btn-reset modal__close"><i class="fa fa-times" aria-hidden="true"></i></button>
            <div class="order-modal__top">
                <h2 class="order-modal__title">Ваш Заказ</h2>
            </div>
            <div class="order-modal__products order-modal__info-item">
                <ul class="order-modal__list">

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
<!--============================= MODAL CART end =============================-->

<!--============================= FOOTER start =============================-->
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
<!--============================= FOOTER end =============================-->

<!--============================= up-button start =============================-->
<div class="up-button">
    <div class="up-button__size" style="height: 80%;"></div>
    <div class="up-button__inside">
        <i class="fa fa-chevron-up" aria-hidden="true"></i>
    </div>
</div>
<!--============================= up-button end =============================-->
</div>

`;

export default template;