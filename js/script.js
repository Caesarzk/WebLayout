// tabindex
const scroll__item = $(".scroll__item");
scroll__item.each(function() {
    $(this).attr("tabindex", "0");
})


// nav
const nav__link = $(".nav__link");
const burger_menu__link = $(".burger-menu__link");
const html = $("html");
const to_about_us = $(".to-about-us");
const to_gallery = $(".to-gallery");
const to_catalog = $(".to-catalog");
const to_events = $(".to-events");
const to_projects = $(".to-projects");
const to_contacts = $(".to-contacts");
const swiper_3_button_next = $(".swiper-3-button-next");
const swiper_3_button_prev = $(".swiper-3-button-prev");
const swiper_button_next = $(".swiper-button-next");
const swiper_button_prev = $(".swiper-button-prev");
const swiper_2_button_next = $(".swiper-2-button-next");
const swiper_2_button_prev = $(".swiper-2-button-prev");
const account__link = $(".account__link");
to_about_us.on("keydown", function(e) {
    if (e.keyCode == 13) {
        setTimeout(function() {
            if (swiper_button_next.hasClass("swiper-button-disabled") == false) {
                swiper_button_next.focus();
            }
            else {
                swiper_button_prev.focus();
            }
        }, 300);
    }
})
to_gallery.on("keydown", function(e) {
    if (e.keyCode == 13) {
        setTimeout(function() {
            if (swiper_button_next.hasClass("swiper-button-disabled") == false) {
                swiper_button_next.focus();
            }
            else {
                swiper_button_prev.focus();
            }
        }, 300)
    }
})
to_catalog.on("keydown", function(e) {
    if (e.keyCode == 13) {
        setTimeout(function() {
           accordion__top_header.focus();
        }, 300);
    }
})
to_events.on("keydown", function(e) {
    if (e.keyCode == 13) {
        setTimeout(function() {
            if (swiper_2_button_next.hasClass("swiper-button-disabled") == false) {
                swiper_2_button_next.focus();
            }
            else {
                swiper_2_button_prev.focus();
            }
        }, 300);
    }
})
to_projects.on("keydown", function(e) {
    if (e.keyCode == 13) {
        setTimeout(function() {
            if (swiper_3_button_next.hasClass("swiper-button-disabled") == false) {
                swiper_3_button_next.focus();
            }
            else {
                swiper_3_button_prev.focus();
            }
        }, 300);
    }
})
to_contacts.on("keydown", function(e) {
    if (e.keyCode == 13) {
        setTimeout(function() {
            form__name.focus();
        }, 300);
    }
})
nav__link.each(function() {
    $(this).on("click", function(e) {
        e.preventDefault();
        html.animate({scrollTop: $($(this).attr("href")).offset().top}, 300);
    })
})
burger_menu__link.each(function() {
    $(this).on("click", function(e) {
        html.css("padding-right", 0);
        e.preventDefault();
        html.animate({scrollTop: $($(this).attr("href")).offset().top}, 300)
        burger.removeClass("burger--rotated");
        burger__stripe_1.removeClass("burger__stripe-1--rotated");
        burger__stripe_2.removeClass("burger__stripe-2--rotated");
        burger__stripe_3.removeClass("burger__stripe-3--rotated");
        burger_menu.slideUp(100);
        body.css("max-height", "none");
    })
})
// account__link.on("click", function(e) {
//     alert("К сожалению это не fullstack приложение.");
// })


// search
const search__field = $(".search__field");
const search__input = $(".search__input");
search__field.on("focus", function() {
    search__input.removeClass("search__input").addClass("search__input--active");
})
search__field.on("blur", function() {
    search__input.removeClass("search__input--active").addClass("search__input");
})


// hero
const hero__btn = $(".hero__btn");
const contacts = $(".contacts");
hero__btn.on("click", function() {
    html.animate({scrollTop: contacts.offset().top}, 300);
})
hero__btn.on("keydown", function(e) {
    if (e.keyCode === 13) {
        setTimeout(function() {
            form__name.focus();
        }, 300);
    }
})


// drop-down
const hero__drop_down = $(".hero__drop-down");
hero__drop_down.each(function() {
    $(this).on("click", function() {
        if ($(this).attr("data-dropped") == "no") {
            hero__drop_down.each(function() {
                $(this).next(".scroll").slideUp(100);
                $(this).children(".hero__icon").removeClass("rotate-180");
                $(this).attr("data-dropped", "no");
            })
            $(this).next(".scroll").slideDown(150);
            $(this).children(".hero__icon").addClass("rotate-180");
            $(this).attr("data-dropped", "yes");
        }
        else {
            $(this).next(".scroll").slideUp(100);
            $(this).children(".hero__icon").removeClass("rotate-180");
            $(this).attr("data-dropped", "no");
        }
    })
    $(this).on("keydown", function(e) {
        if (e.keyCode === 13) {
            $(this).click();
        }
    })
})


// filter
const gallery__menu = $(".gallery__menu");
const gallery__options = $(".gallery__options")
const gallery__option = $(".gallery__option")
const gallery__icon = $(".gallery__icon")
gallery__menu.on("click", function(){
    if ($(this).attr("data-opened") == "no") {
        gallery__options.slideDown(100);
        gallery__icon.addClass("rotate-180");
        $(this).attr("data-opened", "yes");
    }
    else {
        gallery__options.slideUp(50);
        gallery__icon.removeClass("rotate-180");
        $(this).attr("data-opened", "no");
    }
})
gallery__menu.on("keydown", function(e) {
    if (e.keyCode === 13) {
        $(this).click();
    }
})
gallery__option.each(function(){
    $(this).on("click", function(){
        gallery__menu.css("--option", $(this).attr("data-set"));
        gallery__option.each(function(){
            $(this).removeClass("display-none");
        })
        $(this).addClass("display-none");
        gallery__menu.focus();
    })
    $(this).on("keydown", function(e) {
        if (e.keyCode === 13) {
            gallery__menu.css("--option", $(this).attr("data-set"));
            gallery__option.each(function(){
                $(this).removeClass("display-none");
            })
            $(this).addClass("display-none");
            gallery__menu.focus();
        }
    })
})
const gallery__labels = $(".gallery__label");
gallery__labels.each(function() {
    $(this).on("keydown", function(e) {
        if(e.keyCode == 13) {
            $(this).click();
        }
    })
})


// slider-1
const swiper = new Swiper(".swiper", {
    speed: 300,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination-1",
        type: "fraction"
    },
    spaceBetween: 50,
    slidesPerView: 4,
    slidesPerGroup: 4,
    touchEventsTarget: "container",
    a11y: {
        slideRole: "img",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 38,
        },
        992: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
        },
        1600: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    },
});


// modal
const gallery__paintings = [
    {
        link_1920: 'url("../img/gallery/modal-1920-1.jpg")',
        link_1024: 'url("../img/gallery/modal-1024-1.jpg")',
        link_320: 'url("../img/gallery/modal-320-1.jpg")',
        name: "«Торс»",
        date: "1932",
        descr: 'Эти странные безликие "полуобразы" (так называл подобные работы сам художник), зашифрованные в женских фигурах и торсах, существуют по мысли К.Малевича, в параллельном мире, в пределах вымышленного художником Космоса, в пространстве без времени.'
    },
    {
        link_1920: 'url("../img/gallery/modal-1920-2.jpg")',
        link_1024: 'url("../img/gallery/modal-1024-2.jpg")',
        link_320: 'url("../img/gallery/modal-320-2.jpg")',
        name: "«Женщина с граблями»",
        date: "1931–1932",
        descr: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930–1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.'
    },
    {
        link_1920: 'url("../img/gallery/modal-1920-3.jpg")',
        link_1024: 'url("../img/gallery/modal-1024-3.jpg")',
        link_320: 'url("../img/gallery/modal-320-3.jpg")',
        name: "«Уборка ржи»",
        date: "1911",
        descr: '«Уборка ржи» – это образчик российского кубофутуризма, взявшего начало у французских мастеров. Работа относится к крестьянской серии картин, запечатлевшей рутинный уклад сельской жизни. В этот период у Малевича произошел перелом в направлении художественного стиля.'
    },
    {
        link_1920: 'url("../img/gallery/modal-1920-4.jpg")',
        link_1024: 'url("../img/gallery/modal-1024-4.jpg")',
        link_320: 'url("../img/gallery/modal-320-4.jpg")',
        name: "«Мистический супрематизм»",
        date: "1920-1922",
        descr: '«Мистический супрематизм» повторяет судьбу «Супрематической конструкции» — это одна из пяти картин, возвращенных наследникам из Стеделейка.'
    },
    {
        link_1920: 'url("../img/gallery/modal-1920-5.jpg")',
        link_1024: 'url("../img/gallery/modal-1024-5.jpg")',
        link_320: 'url("../img/gallery/modal-320-5.jpg")',
        name: "«Женщина с вёдрами»",
        date: "1912",
        descr: '«Женщина с вёдрами» Казимира Малевича – яркое произведение авангардного искусства, написанное в 1912 году. Ныне картина хранится в коллекции нью-йоркского Музея современного искусства.'
    },
    {
        link_1920: 'url("../img/gallery/modal-1920-6.jpg")',
        link_1024: 'url("../img/gallery/modal-1024-6.jpg")',
        link_320: 'url("../img/gallery/modal-320-6.jpg")',
        name: "«Супрематическая композиция»",
        date: "1916",
        descr: "В 2018 году картина появилась на торгах в аукционном доме Christie's. Работа была продана за 85,8 млн долларов, став самой дорогой картиной Малевича, когда-либо уходившей с торгов."
    },
]
const body = $("body");
const modal = $(".modal");
const modal__window = $(".modal__window");
const swiper_slide = $(".swiper .swiper-slide");
let swiper_slide_focused;
const modal__close = $(".modal__close");
const modal__exit = $(".modal__exit");
let modal__decr = $(".modal__descr");
let modal__year = $(".modal__year");
let modal__text = $(".modal__text");
swiper_slide.each(function(){
    $(this).on("click", function(){
        let scroll_width = window.innerWidth - document.documentElement.clientWidth + "px";
        html.css("overflow", "hidden");
        modal.addClass("active");
        html.css("padding-right", scroll_width);
        modal__window.css("--modal__background-1920", gallery__paintings[Number($(this).attr("data-number")) - 1].link_1920);
        modal__window.css("--modal__background-1024", gallery__paintings[Number($(this).attr("data-number")) - 1].link_1024);
        modal__window.css("--modal__background-320", gallery__paintings[Number($(this).attr("data-number")) - 1].link_320);
        modal__decr.text(gallery__paintings[Number($(this).attr("data-number")) - 1].name);
        modal__year.text(gallery__paintings[Number($(this).attr("data-number")) - 1].date);
        modal__text.text(gallery__paintings[Number($(this).attr("data-number")) - 1].descr);
        swiper_slide_focused = $(this);
    })
    $(this).on("keydown", function(e) {
        if (e.keyCode === 13) {
            $(this).click();
            modal__close.focus();
        }
    })
})
modal__close.on("click", function() {
    modal.removeClass("active");
    html.css("overflow", "");
    html.css("padding-right", 0);
    swiper_slide_focused.focus();
});
modal__exit.on("click", function() {
    modal.removeClass("active");
    html.css("overflow", "");
    html.css("padding-right", 0);
    swiper_slide_focused.focus();
});
modal__close.on("keydown", function(e) {
    if (e.keyCode == 13) {
        $(this).click();
        swiper_slide_focused.focus();
    }
});


// accordion
const accordion__header = $(".accordion__header");
const accordion__bottom_header = $(".accordion__bottom-header");
accordion__header.each(function() {
    $(this).on("click", function() {
        if ($(this).hasClass("accordion__header--opened") === false) {
            accordion__header.each(function(){
                $(this).css("border-color", "").children(".accordion__lower-line").css("background-color", "").css("transition", "background-color 0.1s ease-in-out, opacity 0.25s step-end").css("opacity", 0);
                $(this).next().next().css("--border-top", "1px solid #CACACA").children(".accordion__top-line").css("opacity", 0);
                $(this).css("border-color", "").removeClass("accordion__header--opened").next(".accordion__content").slideUp(250);
                $(this).children(".accordion__date").css("color", "").css("background-color", "").next().css("border-color", "").children("img").removeClass("rotate-180");
                $(this).children(".accordion__circle").css("background-color", "");
            })
            $(this).css("border-color", "#7943A4").children(".accordion__lower-line").css("background-color", "#7943A4").css("transition", "").css("opacity", 1)
            $(this).next().next().css("--border-top", "none").children(".accordion__top-line").css("opacity", 1);
            $(this).children(".accordion__date").css("color", "#7943A4").css("background-color", "white").next().css("border-color", "#9D5CD0").children("img").addClass("rotate-180");
            $(this).addClass("accordion__header--opened").next(".accordion__content").slideDown(250);
            $(this).children(".accordion__circle").css("background-color", "#D1A9F0");
        }
        else {
            $(this).css("border-color", "").children(".accordion__lower-line").css("background-color", "").css("transition", "background-color 0.1s ease-in-out, opacity 0.25s step-end").css("opacity", 0);
            $(this).next().next().css("--border-top", "1px solid #CACACA").children(".accordion__top-line").css("opacity", 0);
            $(this).css("border-color", "").removeClass("accordion__header--opened").next(".accordion__content").slideUp(250);
            $(this).children(".accordion__date").css("color", "").css("background-color", "").next().css("border-color", "").children("img").removeClass("rotate-180");
            $(this).children(".accordion__circle").css("background-color", "");
        }
        if ($(this).hasClass("accordion__bottom-header") === false) {
            accordion__bottom_header.children(".accordion__bottom-line").css("background-color", "");
        }
    })
    $(this).on("mousedown", function() {
        if ($(this).hasClass("accordion__header--opened") === false) {
            $(this).children(".accordion__lower-line").css("background-color", "#7943A4");
        }
        else {
            $(this).children(".accordion__lower-line").css("background-color", "");
        }
    })
    $(this).on("keydown", function(e) {
        if (e.keyCode == 13)  {
            $(this).click();
        }
    })
})
accordion__bottom_header.on("mousedown", function() {
    if ($(this).hasClass("accordion__header--opened") === false) {
        $(this).children(".accordion__bottom-line").css("background-color", "#7943A4");
    }
    else {
        $(this).children(".accordion__bottom-line").css("background-color", "");
    }
})
accordion__bottom_header.on("keydown", function(e) {
    if (e.keyCode == 13) {
        if ($(this).hasClass("accordion__header--opened") === true) {
            $(this).children(".accordion__bottom-line").css("background-color", "#7943A4");
        }
        else {
            $(this).children(".accordion__bottom-line").css("background-color", "");
        }
    }
})


// slider-2
const swiper_2 = new Swiper(".swiper-2", {
    speed: 300,
    navigation: {
        nextEl: ".swiper-2-button-next",
        prevEl: ".swiper-2-button-prev"
    },
    pagination: {
        el: ".swiper-pagination-2",
        clickable: true,
    },
    touchEventsTarget: "container",
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        767: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 27,
        },
        1600: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        }
    },
})
const swiper_slide__link = $(".swiper-slide__link");
swiper_slide__link.each(function() {
    $(this).on("click", function(e) {
        e.preventDefault();
        $(this).focus();
    })
})


// slider-3
const swiper_3 = new Swiper(".swiper-3", {
    speed: 400,
    navigation: {
        nextEl: ".swiper-3-button-next",
        prevEl: ".swiper-3-button-prev"
    },
    spaceBetween: 50,
    touchEventsTarget: "container",
    a11y: {
        slideRole: "link",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
        },
        1025: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        },
    },
})
const swiper_slide_3 = $(".swiper-3 .swiper-slide");
swiper_slide_3.each(function() {
    $(this).on("click", function() {
        $(this).focus();
    })
})


//mask
var mask_selector = document.querySelector(".form__tel");
var mask = new Inputmask("+7 (999) 999-99-99", { showMaskOnHover: false});
mask.mask(mask_selector);


// validation
const validation = new JustValidate(".form");
validation.addField(".form__name", [
    {
        rule: "required",
        errorMessage: "Недопустимый формат",
    },
    {
        rule: "customRegexp",
        value: /^(?!\s)([^\d@$!%~*"#?()=+&^<>,`.{}[;:|/_\]\\]{2,})$/,
        errorMessage: "Недопустимый формат",
    },
    {
        validator: () => {
            let field = $(".form__name");
            return field.val().includes("  ") === false;
        },
        errorMessage: "Недопустимый формат",
    },
])
validation.addField(".form__tel", [
    {
        rule: "required",
        errorMessage: "Недопустимый формат"
    },
    {
        validator: (value) => {
            return mask_selector.inputmask.unmaskedvalue().length === 10;
        },
        errorMessage: 'Недопустимый формат'
    },
])



// map
function init(){
  var map = new ymaps.Map("map", {
      center: [55.7597,37.60109],
      zoom: 14,
      controls: ["zoomControl", "geolocationControl"]
  }, {
    zoomControlSize: 'small',
    zoomControlZoomDuration: 10
  });
  let placemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
    iconLayout: "default#image",
    iconImageHref: "img/contacts/map-icon.svg",
    iconImageSize: [20, 20],
  })
    map.geoObjects.add(placemark);
    map.behaviors.disable("scrollZoom");
}
ymaps.ready(init);


// click
const scroll = $(".scroll");
function onclick() {
    scroll.each(function() {
        if ($(this).has($(event.target)).length < 1 && $(event.target).hasClass("hero__drop-down") === false) {
            $(this).slideUp(100).prev(".hero__drop-down").children(".hero__icon").removeClass("rotate-180");
            $(this).prev(".hero__drop-down").attr("data-dropped", "no");
        }
    })
    if ((gallery__menu.has($(event.target)).length < 1 && $(event.target).hasClass("gallery__menu") === false)) {
        gallery__options.slideUp(100);
        gallery__icon.removeClass("rotate-180");
        gallery__menu.attr("data-opened", "no");
    }
}
$(document).mouseup(function() {
    onclick();
})
$(document).on("keydown", function(e) {
    if(e.keyCode == 27) {
        scroll.each(function() {
            $(this).slideUp(100).prev(".hero__drop-down").children(".hero__icon").removeClass("rotate-180");
            $(this).prev(".hero__drop-down").attr("data-dropped", "no");
            gallery__options.slideUp(100);
            gallery__icon.removeClass("rotate-180");
            gallery__menu.attr("data-opened", "no");
        })
        if (modal.hasClass("active")) {
            modal__close.click();
        }
    }
})


// catalog
const header__painters = [
    {
        link: "img/catalog/catalog-1920-1.jpg",
        name: "Якопо Робусти (Тинторетто)",
        date: "14 февраля 1518-31 мая 1594",
        descr: "Каспар Давид Фридрих представлял собой художника-пейзажиста романтического направления. По его словам, его пейзажи « … не были точными изображениями воздуха, воды, скал и деревьев….но отражением души и эмоционального наполнения этих объектов». Для Фридриха природа была носителем глубоких религиозных переживаний и часто приобретала символическое значение. Он использовал пейзаж как средство отобразить свои глубокие эмоциональные переживания, которые напоминали манеру письма его предшественника и земляка Альтдорфера, жившего тремя веками ранее."
    },
    {
        link: "img/catalog/catalog-1920-2.jpg",
        name: "Каспар Двид Фридрих",
        date: "5 сентября 1774-7 мая 1840",
        descr: "Апофеозом творчества Тинторетто и наивысшим достижением венецианской школы живописи является грандиозный по масштабам цикл картин (в Венеции за редким исключением по причине высокой влажности воздуха не писали фресок) для Скуолы Гранде ди Сан-Рокко. Феноменальная композиция «Распятие» в зале Альберго (536 х 1224 см) представляет собой по определению М. Дворжака «борьбу между светом и тьмой», которая «возвышается над кипением человеческих страстей, словно некий мир в себе, некая иная воображаемая сфера, которая не может быть исчерпана человеческими действиями»."
    },
    {
        link: "img/catalog/catalog-1920-3.jpg",
        name: "Леонардо да Винчи",
        date: "15 апреля 1452-2 мая 1519",
        descr: "Леонардо в первую очередь известен как художник. Кроме того, не исключено, что да Винчи мог быть и скульптором: исследователи из университета Перуджи — Джанкарло Джентилини и Карло Сиси — утверждают, что найденная ими в 1990 году терракотовая голова является единственной дошедшей до нас скульптурной работой Леонардо да Винчи. Однако сам да Винчи в разные периоды своей жизни считал себя в первую очередь инженером или учёным."
    },
    {
        link: "img/catalog/catalog-1920-4.jpg",
        name: "Андреа Вероккьо",
        date: "27 августа 1437-10 октября 1487",
        descr: "В эпоху Раннего Возрождения художники работали почти исключительно по заказам, поэтому в то время была велика роль меценатов. Эта практика особенно распространилась во Флоренции XV века, где художественные мастерские осуществляли любые заказы покровителей — от росписи посуды до архитектурных проектов. Верроккьо считался непревзойденным декоратором и режиссёром придворных празднеств."
    },
    {
        link: "img/catalog/catalog-1920-5.jpg",
        name: "Оскар Клод Моне",
        date: "14 ноября 1840-5 декабря 1926",
        descr: "«Кувшинки» (фр. Nymphéas) — цикл приблизительно из 250 картин французского художника-импрессиониста Клода Моне, выполненных в технике масляной живописи. Картины, изображающие кувшинки различных цветов усадьбы Моне в Живерни, составляли главный предмет творческих усилий художника в последние тридцать лет его жизни. Склонность Моне к созданию серий картин, объединённых общей темой и перспективой, стала проявляться с 1877 года."
    },
    {
        link: "img/catalog/catalog-1920-6.jpg",
        name: "Альфред Сислей",
        date: "30 октября 1839-29 января 1899",
        descr: "Сислей родился 30 октября 1839 года в Париже, его отцом был британский коммерсант Уильям Сислей (Сисли). В 1857 году родители отправили Альфреда в Лондон для обучения коммерции, но юноша предпочёл заниматься живописью и в 1862 г. вернулся в Париж. По возвращении он поступил в мастерскую Шарля Глейра, где сблизился с Клодом Моне, Камилем Писсаро, Огюстом Ренуаром и Фредериком Базилем. Наибольшее влияние на Сислея как на художника оказали британские мастера Уильям Тёрнер, Джон Констебл и Ричард Паркс Бонингтон, а также французы Камиль Коро, Гюстав Курбе и Эжен Буден."
    },
    {
        link: "img/catalog/catalog-1920-7.jpg",
        name: "Эдуард Мане",
        date: "23 января 1832-30 апреля 1883",
        descr: "В 1856—1858 годах Мане приобретает известность как подающий надежды художник, его приглашают в различные салоны, где он знакомится с высшим кругом парижского общества. Особо тёплые отношения Мане завязывает с французским поэтом Шарлем Бодлером. Вместе с графом Альбером де Баллеруа художник снимает под мастерскую помещение на улице Лавуазье. Ежедневно молодой художник посещает Лувр, делает копии известных полотен и всегда пытается получить одобрение Кутюра: стремление к признанию было присуще Мане с ранних лет."
    },
    {
        link: "img/catalog/catalog-1920-8.jpg",
        name: "Огюст Ренуар",
        date: "25 февраля 1841-3 декабря 1919",
        descr: "В начале 1862 года Ренуар сдал экзамены в Школу изящных искусств при Академии художеств и записался в мастерскую Глейра. Там он встретился с Фантен-Латуром, Сислеем, Базилем и Клодом Моне. Вскоре они подружились с Сезанном и Писсарро, так сложился костяк будущей группы импрессионистов. В ранние годы Ренуар находился под влиянием творчества барбизонцев, Коро, Прюдона, Делакруа и Курбе. В 1864 году Ренуар начал писать свои первые полотна и тогда впервые представил картину «Эсмеральда, танцующая среди бродяг»."
    },
    {
        link: "img/catalog/catalog-1920-9.jpg",
        name: "Винсент Ван Гог",
        date: "30 марта 1853-29 июля 1890",
        descr: "Распространено ошибочное утверждение, что при жизни Ван Гога была продана только одна его картина — «Красные виноградники в Арле». Данное полотно лишь было первым, проданным за существенную сумму (на брюссельской выставке «Группы двадцати» в конце 1889 года; цена за картину составила 400 франков). Сохранились документы о прижизненной продаже 14 работ художника, начиная с 1882 года (о чём Винсент написал брату Тео: «Первая овечка прошла через мост»), и в реальности сделок должно было произойти больше."
    },
    {
        link: "img/catalog/catalog-1920-10.jpg",
        name: "Поль Сезанн",
        date: "19 января 1839-22 октября 1906",
        descr: "Поль Сезанн — французский живописец, представитель постимпрессионизма. Своеобразие его творчествa породило термин «сезаннизм», которым в истории искусства обозначают неофициальное течение и работы его последователей, открывших дорогу другому течению в искусстве модернизма — кубизму. Сезанн родился в Экс-ан-Провансе 19 января 1839 года. Предки художника прибыли во Францию из итальянского городка Чезена (итал. Cesena, Эмилия-Романья). Отсюда фамилия. Он был внебрачным ребёнком Луи Огюста Сезанна и Анны Элизабет Онорин Обер, мастерицы-шляпницы."
    },
    {
        link: "img/catalog/catalog-1920-1.jpg",
        name: "Поль Гоген",
        date: "7 июня 1848-8 мая 1903",
        descr: "Слава пришла к художнику после смерти, когда в 1906 году в Париже было выставлено 227 его работ. Жизнь Гогена легла в основу романа Сомерсета Моэма «Луна и грош». В нём описывается простой английский брокер Чарльз Стрикленд, бросивший семью, работу и дом для того чтобы заниматься живописью. В романе жизнь Стрикленда обрывается вследствие болезни проказой. В честь Гогена назван кратер на Меркурии. О последних годах жизни Гогена был снят биографический фильм с Дональдом Сазерлендом в главной роли «Волк на пороге»."
    },
    {
        link: "img/catalog/catalog-1920-2.jpg",
        name: "Жорж-Пьер Сёра",
        date: "2 декабря 1859-29 марта 1891",
        descr: "Жорж-Пьер Сёра — французский художник-импрессионист, основатель неоимпрессионизма, создатель оригинального метода живописи под названием «дивизионизм», или «пуантилизм». В поиске своего стиля в искусстве изобрёл так называемый пуантилизм — художественный приём передачи оттенков и цвета с помощью отдельных цветовых точек. Приём используется в расчёте на оптический эффект слияния мелких деталей при разглядывании изображения на расстоянии."
    },
    {
        link: "img/catalog/catalog-1920-3.jpg",
        name: "Василий Кандинский",
        date: "4 декабря 1866-13 декабря 1944",
        descr: "В июне 2017 года на аукционе «Сотбис» за 22 минуты дважды был побит рекорд на работы Кандинского: «Мурнау — пейзаж с зелёным домом» был приобретён за 26,7 млн долларов, а «Картина с белыми линиями», до 1974 года висевшая в Третьяковской галерее, была продана за 42 млн долларов."
    },
    {
        link: "img/catalog/catalog-1920-4.jpg",
        name: "Филиппо Томазо Маринетти",
        date: "22 декабря 1876-2 декабря 1944",
        descr: "Филиппо Томазо Маринетти — итальянский писатель, поэт, основатель футуризма, один из идеологов фашизма. Основал ряд футуристических журналов («Lacerba», «Poesia») и издательство («Poesia»). Автор первого манифеста футуризма (опубликован в парижской «Фигаро» 20 февраля 1909), один из основоположников аэроживописи. Один из основателей итальянского фашизма, тесно сотрудничал с Муссолини. В позднем творчестве развивал обновлённую версию футуризма — так называемую аэропоэзию (манифест которой опубликовал в 1931 году)."
    },
    {
        link: "img/catalog/catalog-1920-5.jpg",
        name: "Казимир Малевич",
        date: "23 февраля 1879-15 мая 1935",
        descr: "Казимир Малевич — российский и советский художник-авангардист польского происхождения, педагог, теоретик искусства, философ. Основоположник супрематизма — одного из крупнейших направлений абстракционизма. Чёрный супрематический квадрат — картина Казимира Малевича, созданная в 1915 году. Её можно считать opus magnum художника. Это его наиболее значительное произведение в концептуальном смысле, одна из самых обсуждаемых и самых известных картин в мировом искусстве."
    },
    {
        link: "img/catalog/catalog-1920-6.jpg",
        name: "Пабло Пикассо",
        date: "25 октября 1881-8 апреля 1973",
        descr: "Основоположник кубизма (совместно с Жоржем Браком и Хуаном Грисом), в котором трёхмерное тело в оригинальной манере изображалось как ряд совмещённых воедино плоскостей. Пикассо много работал как график, скульптор, керамист и т. д. Вызвал к жизни массу подражателей и оказал исключительное влияние на развитие изобразительного искусства в XX веке. Согласно оценке Музея современного искусства (Нью-Йорк), Пикассо за свою жизнь создал около 20 тысяч работ."
    },
    {
        link: "img/catalog/catalog-1920-7.jpg",
        name: "Карло Карра",
        date: "11 февраля 1881-13 апреля 1966",
        descr: "Собственный стиль, в духе метафизической живописи, сформировался у Карло Карра позднее, после знакомства с Джорджо Де Кирико (их первая встреча состоялась в 1916 в Ферраре). Работы этого периода отмечены упрощением форм, изображением манекенообразных фигур (нередко без лица) или апокалиптическими сюжетами. К 1917 году относятся наиболее заметные работы художника — «Заколдованная комната. Муза Метафизики» (Милан, собрание Эмилио Джези) и «Идол Гермафродит» (Милан, собрание Джанни Маттиоли)."
    },
    {
        link: "img/catalog/catalog-1920-8.jpg",
        name: "Аттилио Прателла",
        date: "5 октября 1856-22 ноября 1949",
        descr: "Первые профессиональные навыки Аттилио Прателла получил в колледже Тризи, где его учителем рисования был Ипполито Бонавери, друживший с Телемако Синьорини, одним из зачинателей направления маккьяйоли («живописи пятном», близкой технике импрессионистов). Получив муниципальный грант, молодой художник продолжил обучение в Болонской академии изящных искусств (1877–1876). Там же он познакомился с поэтом Джованни Пасколи, чьи произведения он позднее будет иллюстрировать."
    },
    {
        link: "img/catalog/catalog-1920-9.jpg",
        name: "Джино Северини",
        date: "7 апреля 1887-26 февраля 1966",
        descr: "Северини известен в первую очередь как представитель футуризма и кубизма в искусстве. Учился живописи и рисунку в Риме, где в 1900 году познакомился с Джакомо Балла, у которого перенял дивизионистическую технику рисунка. В этой манере выполнены в первую очередь полотна, созданные Северини после его переезда в Париж в 1906 году. В Париже Северини поддерживал контакты с А. Модильяни, Х. Грисом, Ж. Браком и П. Пикассо, увлёкся теорией аналитического кубизма."
    },
    {
        link: "img/catalog/catalog-1920-10.jpg",
        name: "Джакомо Балла",
        date: "18 июля 1871-1 марта 1958",
        descr: "Джакомо Балла родился 18 июля 1871 года в Турине. Художественное образование получил в вечерней Школе рисунка, параллельно работая в литографской мастерской. В 1891 году Джакомо занимался в туринской академии Альбертина, а затем практиковался в фотомастерской. Балла — представитель первой волны футуристического искусства, на чьём творчестве учились У. Боччони и Д. Северини. В его раннем периоде сильно влияние импрессионизма, заметен интерес к теории цвета и увлечение пуантилизмом."
    },
]
const scroll__items = $(".scroll__item");
const accordion__top_header = $(".accordion__top-header")
let catalog__name = $(".catalog__name");
let catalog__img = $(".catalog__img");
let catalog__date = $(".catalog__date");
let catalog__descr = $(".catalog__descr");
scroll__items.each(function() {
    $(this).on("click", function(){
        $(this).parents().eq(5).slideUp(100).prev(".hero__drop-down").children(".hero__icon").removeClass("rotate-180");
        $(this).parents().eq(5).prev(".hero__drop-down").attr("data-dropped", "no");
        html.animate({scrollTop: catalog__img.offset().top}, 300);
        catalog__img.attr("src", header__painters[Number($(this).attr("data-number")) - 1].link);
        catalog__name.text(header__painters[Number($(this).attr("data-number")) - 1].name);
        catalog__date.css("display", "block").text(header__painters[Number($(this).attr("data-number")) - 1].date);
        catalog__descr.text(header__painters[Number($(this).attr("data-number")) - 1].descr);
        catalog__link.css("display", "none");
    })
    $(this).on("keydown", function(e) {
        if (e.keyCode === 13) {
            $(this).click();
            accordion__top_header.focus();
        }
    })
})
const catalog__painters = [
    {
        link: "img/catalog/catalog-1920-1.jpg",
        date: "1380-1417",
        descr: "Бенедетто ди Биндо остался в истории искусства как сиенский художник, так сказать, «второго ряда», несмотря на то, что за свою короткую жизнь он выполнил ряд весьма престижных заказов, включая работы в Сиенском соборе (работы в главном соборе республики второстепенным художникам не поручались). Обучение он прошёл у Таддео ди Бартоло, крупного сиенского мастера поздней готики, в боттеге которого Бенедетто трудился вместе с Грегорио ди Чекко. Наибольшее влияние на его творчество оказали работы Симоне Мартини, в частности в выборе колорита, а тонко проработанные лица его персонажей напоминают произведения Джованни да Милано."
    },
    {
        link: "img/catalog/catalog-1920-2.jpg",
        date: "1453-1523",
        descr: "Амброджо Бергоньоне или Боргоньоне, настоящее имя — Амброджо да Фоссано — итальянский художник ломбардской школы. Прозвище говорит о его тяготении к бургундской школе, по манере ему близок Винченцо Фоппа. Испытал влияние Леонардо да Винчи. Наиболее известен работами 1486—1494 в монастырской обители картезианцев Чертоза ди Павия. Позднее работал в Милане в базилике Сант-Эусторджо и церкви Сан-Сатиро, после 1497 — в Лоди, в 1512 — в Бергамо, незадолго до смерти — снова в Милане, в базилике Сан-Симпличано. Его завещание датировано 4 апреля 1523, в том же году он умер. Одним из его учеников считают Бернардино Луини."
    },
    {
        link: "img/catalog/catalog-1920-3.jpg",
        date: "1472-20 апреля 1554",
        descr: "Сын художника. Ученик Джованни Беллини. С 1490 переехал в мастерскую Беллини. С 1492 по 1530 год работал в Венеции. Помогал учителю в работе над украшением Большого зала Совета Дворца дожей (Венеция). Принимал участие в создании украшений Церкви Иль Реденторе в Венеции. Художник эпохи Возрождения. В своём творчестве подражал Джорджоне."
    },
    {
        link: "img/catalog/catalog-1920-4.jpg",
        date: "1467-1516",
        descr: "Вазари сообщает, что художник происходил из аристократической семьи. Воспитанный в традициях Фоппы, Бернардо Дзенале и Амброджо Бергоньоне, он прошёл обучение в мастерской Леонардо. Его первое произведение «Воскресение Христа, святой Леонард и святая Лючия» выполнено в 1491 году совместно с Марко д'Оджоно для миланской церкви Сан-Джованни-сул-Муро. Был придворным художником Лодовико Моро и славился своими психологическими портретами."
    },
    {
        link: "img/catalog/catalog-1920-5.jpg",
        date: "1460-2 июля 1519",
        descr: "Родился около 1460 года в Вероне в семье художника Альберто Бонсиньори. Обучался живописи в мастерской Франческо Бенальо. В 1480 году переехал из Вероны в Венецию, где жил до 1487 года. В ранний период творчества находился под влиянием венецианской живописной школы. Особенное впечатление на Бонсиньори оказало творчество Антонелло да Мессины, Джованни Беллини, Чима да Конельяно и Альвизе Виварини."
    },
    {
        link: "img/catalog/catalog-1920-6.jpg",
        date: "11 сентября 1477-дата смерти неизвестна",
        descr: "Рафаэлло принадлежал к флорентийской артистической династии — его дед, Джованни ди Доменико, был известен как художник, расписывавший игральные карты (хотя учёные не исключают, что он мог заниматься и более серьёзной живописью); его отец — Франческо ди Джованни, был известным флорентийским мастером. Рафаэлло Боттичини был почти забыт художественной критикой; главную роль в его «возрождении» принадлежит итальянскому искусствоведу Федерико Дзери, опубликовавшему в 1968 году работу о художнике; в ней Дзери смог восстановить хронологию его творчества и более точно атрибутировать некоторые произведения."
    },
    {
        link: "img/catalog/catalog-1920-7.jpg",
        date: "1450-1523",
        descr: "Брамантино, наст. имя Бартоломео Суарди — итальянский художник и архитектор. Брамантино сформировался под влиянием Бутиноне и графического стиля Падуи и Феррары. Впоследствии он многому научился у Браманте, у которого долгое время состоял помощником (чем и объясняется его прозвище Брамантино — букв. «Маленький Браманте») и у которого перенял любовь к монументальным формам и драматизму. Некоторые искусствоведы полагают, что Браманте поручал Брамантино, как живописцу, осуществление своих замыслов."
    },
    {
        link: "img/catalog/catalog-1920-8.jpg",
        date: "1450-1523",
        descr: "Бреа родился в происходившей из Монтальто-Лигуре семье бондарей в Ницце, являвшейся в то время частью Генуэзской республики. Бреа был в основном клерикальным художником, и наиболее значительные его работы представляют собой алтарные картины. Первая значимая работа художника представляет собой роспись францисканского монастыря в Симье (современная Ницца). Прочие работы художника сосредоточены прибрежных поселениях между Монако и Ментоной, между Таджей и Империей и между Савоной и Генуей."
    },
    {
        link: "img/catalog/catalog-1920-9.jpg",
        date: "1446-1 июня 1516",
        descr: "Родился во Флоренции. Последнюю четверть XV века работал в Фаэнце, но в его стиле мало элементов флорентийского стиля — прослеживается влияние ранней нидерландскрй живописи. Сотрудничал с другими художниками над фресками Сикстинской капеллы. Также рисовал панели для сундуков кассоне."
    },
    {
        link: "img/catalog/catalog-1920-10.jpg",
        date: "1412-6 июня 1480",
        descr: "О Веккьетте сообщает в своих «Жизнеописаниях» Джорджо Вазари и описывает его как человека мрачного и нелюдимого, вечно погружённого в раздумья, и потому прожившего недолго. Позднейшие исследователи пытались имя этого художника увязать с какими-либо архивными данными. Сейчас общепризнанной считается версия, что описанный Вазари Веккьетта — это Лоренцо ди Пьетро ди Джованни, который был крещён в Сиене в 1410 году. Имя этого человека появляется в документах в 1428 году среди членов гильдии художников Сиены."
    },
    {
        link: "img/catalog/catalog-1920-1.jpg",
        date: "1435-1488",
        descr: "В эпоху Раннего Возрождения художники работали почти исключительно по заказам, поэтому в то время была велика роль меценатов. Эта практика особенно распространилась во Флоренции XV века, где художественные мастерские осуществляли любые заказы покровителей — от росписи посуды до архитектурных проектов. Верроккьо считался непревзойденным декоратором и режиссёром придворных празднеств."
    },
    {
        link: "img/catalog/catalog-1920.jpg",
        date: "2 июня 1448-11 января 1494",
        descr: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени)."
    },
    {
        link: "img/catalog/catalog-1920-2.jpg",
        date: "1420-4 октября 1497",
        descr: "Согласно Вазари, учителем Гоццоли был Фра Беато Анджелико, однако этот факт не имеет дополнительного подтверждения. Как и многие другие художники раннего итальянского Возрождения, Беноццо обучался нескольким ремёслам, в том числе ювелирному искусству. В 1439—1440 и в 1443—1444 годах Гоццоли был помощником Фра Анджелико при создании фресок монастыря Сан-Марко во Флоренции. В 1444—1447 годах Гоццоли вместе с Лоренцо и Витторио Гиберти участвовал в создании рельефов бронзовых дверей (так называемых «Врат рая») флорентийского баптистерия."
    },
    {
        link: "img/catalog/catalog-1920-3.jpg",
        date: "23 июля 1518-30 ноября 1543",
        descr: "Франческо Граначчи учился в мастерской Доменико Гирландайо, где также начинал работать молодой Микеланджело, который стал его другом и с которым он поступил в школу Лоренцо Великолепного в саду Сан-Марко. По заказу Лоренцо Медичи Великолепного Граначчи участвовал в росписи церкви Сан-Марко во Флоренции. Позднее работал с Леонардо да Винчи, Микеланджело и Рафаэлем. В 1508 году Граначчи отправился в Рим, где вместе с другими художниками помогал Микеланджело переносить кальки (подготовительные рисунки) для росписи на потолок Сикстинской капеллы в Ватикане."
    },
    {
        link: "img/catalog/catalog-1920-4.jpg",
        date: "1390-1 июля 1424",
        descr: "О Грегорио очень мало сведений. Известно, что он был приёмным сыном и учеником Таддео ди Бартоло, работал в его мастерской, а единственным достоверным произведением является алтарь, написанный им в 1423 году для капеллы Франческо Толомеи в сиенском соборе, на котором стоит его подпись. В начале XX века его путали с упоминаемым в документах Джорджо ди Кеко ди Лука (Giorgio di Checo di Lucha), поскольку Миланези в 1853 году неправильно транскрибировал имя Грегорио."
    },
    {
        link: "img/catalog/catalog-1920-5.jpg",
        date: "15 октября 1487-1561",
        descr: "Джованни учился сначала у Джованни Мартино в Удине, затем переехал в Венецию, где стал учеником Джорджоне. В 1514 году переехал в Рим, где поступил в мастерскую Рафаэля и считался одним из наиболее талантливых его учеников. Джорджо Вазари отмечал его стремление к гротеску и большую любовь к изображению природы и натюрморта: растений, животных и неодушевлённых предметов. После смерти Рафаэля художник работал по заказам кардинала Джулио Медичи (будущего папу Климента VII) по украшению росписями Виллы Мадама вместе с другими учениками Рафаэля, завершив работы к 1525 году. По рассказам Дж. Вазари конфликтовал с Джулио Романо."
    },
    {
        link: "img/catalog/catalog-1920-6.jpg",
        date: "1408-1482",
        descr: "В истории искусства было довольно много художников, чьи имена на протяжении нескольких веков оставались забытыми. Причины тому были разные, но одна из главных — непререкаемость мнения Джорджо Вазари, который сам, будучи художником-маньеристом, в качестве художественного идеала выставлял творчество Рафаэля, Микеланджело и последующих маньеристов. К таким забытым художникам принадлежал, например, Сандро Боттичелли, о котором «вспомнили» только в конце XIX века. К таким мастерам относится и Джованни ди Паоло, который получил заслуженную посмертную славу только в XX веке."
    },
    {
        link: "img/catalog/catalog-1920-7.jpg",
        date: "1477-25 октября 1510",
        descr: "Несмотря на большую популярность художника при жизни, он является одной из самых загадочных фигур в истории живописи. Джорджоне не подписал ни одной работы, и создание каталога, а также определение иконографических значений многих его произведений является предметом споров учёных. «Джорджоне всегда оставался неуловимым и загадочным художником, настолько, что, по определению Габриэле Д’Аннунцио, казался „скорее мифом, чем человеком“»."
    },
    {
        link: "img/catalog/catalog-1920-8.jpg",
        date: "1437-28 октября 1531",
        descr: "Бернардо Парентино написал Сцены жизни святого Бенедикта для монастыря святой Жустины в Падуе и Рождество, которое находится в галерее Академии в Венеции. Также он создал Искушение святого Антония — ряд связанных общей темой картин, которые находятся в галерее Дориа-Памфили. Ему принадлежит также работа Поклонение волхвов. Для манеры художника характерно сильное внимание к деталям."
    },
    {
        link: "img/catalog/catalog-1920-9.jpg",
        date: "1422-июль 1457",
        descr: "В своём многотомном труде Вазари сообщает, что Пезеллино принадлежит множество картин небольшого формата, в частности, росписей свадебных сундуков-кассоне, а также изображений «Мадонны с младенцем», в которых он использовал приёмы Фра Филиппо Липпи, и добавляет: «в домах горожан есть много тондо и картин его работы» (правда, ошибочно приписывая эти работы его деду Пезелло). Таким образом, большинство работ Пезеллино — это не громоздкие церковные алтари, а небольшого формата произведения для домашнего употребления."
    },
    {
        link: "img/catalog/catalog-1920-10.jpg",
        date: "1448-1523",
        descr: "В 1481 году, будучи уже известным мастером, в числе лучших художников Италии: (Сандро Боттичелли, Доменико Гирландайо, Козимо Росселли, Луки Синьорелли и других) Перуджино был приглашён папой Сикстом IV в Рим для участия в росписи Сикстинской капеллы в Ватикане. Перуджино сопровождал в Рим его помощник Пинтуриккьо. Перуджино с помощью Пинтуриккьо написал композиции «Крещение Христа», «Вручение ключей апостолу Петру», «Обрезание сына Моисея Елиазара». Фрески «Рождение Христа» и «Нахождение Моисея», расположенные на алтарной стене, были позднее сбиты, чтобы освободить место для композиции «Страшный суд» Микеланджело."
    },
    {
        link: "img/catalog/catalog-1920-1.jpg",
        date: "7 марта 1481-6 января 1537",
        descr: "Перуцци увлекался античной археологией, математикой, астрономией, геометрией и перспективой. Он был подлинным человеком возрождения, но в своём индивидуальном стиле причудливо соединял нормы римского классицизма, созданные Браманте и Рафаэлем, с элементами маньеризма, нарождающегося барокко и родными ему готическими архаизмами сиенской школы живописи. В этом он типичный маньерист. В его архитектурных работах маньеризм проявился, по тонкому наблюдению Б. Р. Виппера, в необычно изогнутом фасаде, аритмично расставленных колоннах и пропорциях оконных проёмов Палаццо Массимо-алле-Колонне. В его живописных работах привлекает необычная экспрессия, типично маньеристичная изощрённость заполнения фигурами всего изобразительного пространства."
    },
    {
        link: "img/catalog/catalog-1920-2.jpg",
        date: "1395-1455",
        descr: "Из фресок, созданных Пизанелло, сохранились лишь две. Одна в Вероне в церкви Санта Анастасия. Вторая — незавершённая роспись так называемого «Зала Пизанелло» (одного из залов Палаццо Капитано в Мантуанском дворцовом корпусе) на тему средневековых легенд о короле Артуре и его рыцарях. Авторство Пизанелло было определено лишь в середине 1960-х годов. Самое же значительное произведение художника, созданное в 1420-х годах и дошедшее до нашего времени, — живописная часть надгробия Никколо Бренцони в церкви Сан-Фермо-Маджоре в Вероне."
    },
    {
        link: "img/catalog/catalog-1920-3.jpg",
        date: "1452-11 декабря 1513",
        descr: "Представитель умбрийской школы кватроченто. Учился у Фьоренцо ди Лоренцо, вместе с Рафаэлем — у Перуджино, которому помогал при создании фресок Сикстинской капеллы Ватикана (1481—1482), а по некоторым данным — ещё и у Бенедетто Капорали, создателя дворца кардинала Пассерини, впоследствии расписанного Синьорелли. Вероятно, испытал влияние и Бенедетто Бонфильи, учителя Перуджино. Став зрелым мастером, Пинтуриккьо отказался от некоторых принципов Перуджино — однообразности и степенности фигур, единства времени и места, — что сближает его скорее с Боттичелли."
    },
]
const accordion__links = $(".accordion__link");
accordion__links.each(function() {
    $(this).on("click", function(e) {
        e.preventDefault();
        catalog__img.attr("src", catalog__painters[Number($(this).attr("data-number")) - 1].link);
        catalog__name.text($(this).text());
        catalog__date.css("display", "block").text(catalog__painters[Number($(this).attr("data-number")) - 1].date);
        catalog__descr.text(catalog__painters[Number($(this).attr("data-number")) - 1].descr);
        catalog__link.css("display", "none");
        if (window.innerWidth <= 992) {
            html.animate({scrollTop: catalog__img.offset().top}, 300);
        }
    })
})
const gallery = $(".gallery")
const accordion__empty_picture = $(".accordion__empty-picture");
const catalog__link = $(".catalog__link");
const accordion__gallery_link = $(".accordion__gallery-link");
accordion__empty_picture.on("click", function() {
    catalog__img.attr("src", "img/catalog/catalog-empty.jpg");
    catalog__name.text("Что мы о нём знаем?");
    catalog__date.css("display", "none");
    catalog__descr.text("Пока ничего… Зато мы точно знаем, что в галерее есть на что посмотреть!");
    catalog__link.css("display", "inline");
    html.animate({scrollTop: catalog__img.offset().top}, 300);
})
accordion__empty_picture.on("keydown", function(e) {
    if (e.keyCode == 13) {
        $(this).click();
    }
})
accordion__gallery_link.each(function() {
    $(this).on("click", function(e) {
        e.preventDefault();
        html.animate({scrollTop: gallery.offset().top}, 300);
    })
    $(this).on("keydown", function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            html.animate({scrollTop: gallery.offset().top}, 300);
            if (swiper_button_next.hasClass("swiper-button-disabled") == false) {
                setTimeout(function() {
                    swiper_button_next.focus();
                }, 300);

            }
            else {
                setTimeout(function() {
                    swiper_button_prev.focus();
                }, 300);
            }
        }
    })
})


// burger
const hero = $(".hero");
const burger = $(".burger");
const burger_menu = $(".burger-menu");
const burger__stripe_1 = $(".burger__stripe-1");
const burger__stripe_2 = $(".burger__stripe-2");
const burger__stripe_3 = $(".burger__stripe-3");
burger.on("click", function() {
    if ($(this).hasClass("burger--rotated") === false) {
        $(this).addClass("burger--rotated");
        burger__stripe_1.addClass("burger__stripe-1--rotated");
        burger__stripe_2.addClass("burger__stripe-2--rotated");
        burger__stripe_3.addClass("burger__stripe-3--rotated");
        console.log(document.documentElement.clientHeight)
        if($(window).height() < 768 && window.innerWidth > 576) {
            body.css("max-height", "768px");
        }
        else if($(window).height() < 600 && window.innerWidth <= 576) {
            body.css("max-height", "600px");
        }
        else {
            burger_menu.css("height", document.documentElement.clientHeight);
            body.css("max-height", $(window).height() + "px")
        }
        burger_menu.slideDown(150);
    }
    else {
        html.css("padding-right", 0);
        $(this).removeClass("burger--rotated");
        burger__stripe_1.removeClass("burger__stripe-1--rotated");
        burger__stripe_2.removeClass("burger__stripe-2--rotated");
        burger__stripe_3.removeClass("burger__stripe-3--rotated");
        burger_menu.slideUp(100);
        body.css("max-height", "none");
    }
})



// search-mobile
const mobile_search = $(".mobile-search");
const mobile_search__field = $(".mobile-search__field");
const mobile_search__input_active = $(".mobile-search__input--active");
const mobile_search__cross = $(".mobile-search__cross");
mobile_search__field.on("focus", function() {
    mobile_search__input_active.removeClass("mobile-search__input").addClass("mobile-search__input--active");
})
mobile_search__field.on("blur", function() {
    mobile_search__input_active.removeClass("mobile-search__input--active").addClass("mobile-search__input");
})
mobile_search__cross.on("click", function() {
    mobile_search.css("opacity", 0).css("visibility", "hidden");
    mobile_search__input_active.removeClass("mobile-search__input").addClass("mobile-search__input--active");
})
function widthReduce(e) {
    if (e.matches) {
        mobile_search.css("visibility", "hidden");
    }
}
let mediaMobile = window.matchMedia("(min-width: 769px)");
widthReduce(mediaMobile);
mediaMobile.addListener(widthReduce);


// search-tablet
const search_tablet__icon = $(".search-tablet__icon");
const search__input_aria = $(".search__input-aria");
const search__close_icon = $(".search__close-icon");
const search__input_active = $(".search__input--active");
search__field.on("focus", function() {
    search__input_active.removeClass("search__input").addClass("search__input--active");
})
search__field.on("blur", function() {
    search__input_active.removeClass("search__input--active").addClass("search__input");
})
search_tablet__icon.on("click", function() {
    if (window.innerWidth <= 768) {
        mobile_search.css("opacity", 1).css("visibility", "visible");
        setTimeout(function() {
            mobile_search__field.focus();
        }, 150);
    }
    else {
        search__input_aria.addClass("search__input-aria--visible");
        setTimeout(function() {
            search__field.focus();
        }, 100);
    }
})
search__close_icon.on("click", function() {
    search__input_aria.removeClass("search__input-aria--visible");
    search__input_active.removeClass("search__input").addClass("search__input--active");
})

function widthDecrease(e) {
    if (e.matches) {
        search__input_aria.removeClass("search__input-aria--visible");
    }
}
let mediaTablet = window.matchMedia("(max-width: 768px)");
widthDecrease(mediaTablet);
mediaTablet.addListener(widthDecrease);

function burgerAutoClose(e) {
    if (e.matches) {
        html.css("padding-right", 0);
        burger.removeClass("burger--rotated");
        burger__stripe_1.removeClass("burger__stripe-1--rotated");
        burger__stripe_2.removeClass("burger__stripe-2--rotated");
        burger__stripe_3.removeClass("burger__stripe-3--rotated");
        burger_menu.slideUp(100);
        body.css("max-height", "none");
    }
}
let mediaBurger = window.matchMedia("(min-width: 1025px)");
burgerAutoClose(mediaBurger);
mediaBurger.addListener(burgerAutoClose);


// projects
const projects__link = $(".projects__text a");
const tooltips = $(".tooltip__btn");
function linkReplace(e) {
    if (e.matches) {
        projects__link.text("blanchard-art.ru");
    }
}
let mediaLink = window.matchMedia("(max-width: 768px)");
linkReplace(mediaLink);
mediaLink.addListener(linkReplace);
function linkReturn(e) {
    if (e.matches) {
        projects__link.text("blanchard-art.ru/projects");
    }
}
let mediaLink2 = window.matchMedia("(min-width: 769px)");
linkReturn(mediaLink2);
mediaLink2.addListener(linkReturn);
projects__link.on("click", function(e) {
    e.preventDefault();
})
tooltips.each(function() {
    $(this).on("keydown", function(e) {
        if(e.keyCode == 13 || e.keyCode == 32) {
           $(this).css({"background-color":"var(--purple-medium)","color":"white"});
           $(this).next().css({"opacity":"1", "visibility":"visible"});
        }
    })
    $(this).on("keyup", function(e) {
        if(e.keyCode == 13 || e.keyCode == 32) {
            $(this).css({"background-color":"","color":""});
            $(this).next().css({"opacity":"1", "visibility":""});
        }
    })
})


// slider-4
const swipper_4 = new Swiper(".swiper-4", {
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 6000,
    },
    effect: "fade",
})


// form send
const form = document.querySelector(".form");
let form__fields = document.querySelectorAll(".form__name");
form.addEventListener("submit", formSend);
async function formSend(e) {
    e.preventDefault();
    let formData = new FormData(form);
    console.log(formData.get("name"));
    console.log(formData.get("tel"));
    // if (form__fields[0].classList.contains("just-validate-success-field") && form__fields[1].classList.contains("just-validate-success-field")) {
    //     let response = await fetch("sendmail.php", {
    //         method: "POST",
    //         body: formData
    //     });
    //     if (response.ok) {
    //         let result = await response.json();
    //         alert(result.message);
    //         form.reset();
    //     }
    //     else {
    //         alert("Ваш запрос не отправлен.");
    //     }
    // }
}







