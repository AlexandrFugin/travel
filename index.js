(function () {
    // объявление переменных
    const burgerItem = document.querySelector('.burger-menu');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const menu1 = document.querySelector('#burger_menu1');
    const menu2 = document.querySelector('#burger_menu2');
    const menu3 = document.querySelector('#burger_menu3');
    const menu4 = document.querySelector('#burger_menu4');
    const menu5 = document.querySelector('#burger_menu5');
    const menu6 = document.querySelector('#burger_menu6');

    // закрытие бургер меню по клику на Х
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav-active')
    });

    // блоки, закрывающие меню при клике на ссылку
    menu1.addEventListener('click', () => {
        menu.classList.remove('header_nav-active')
    });
    menu2.addEventListener('click', () => {
        menu.classList.remove('header_nav-active')
    });
    menu3.addEventListener('click', () => {
        menu.classList.remove('header_nav-active')
    });
    menu4.addEventListener('click', () => {
        menu.classList.remove('header_nav-active')
    });
    //реализация функционала нажатия на пункт бургер меню Account в мобильной версии
    menu5.addEventListener('click', (e) => {
        menu.classList.remove('header_nav-active');
        e.stopPropagation();
        popup.classList.toggle('popup_active');
    });
    menu6.addEventListener('click', () => {
        menu.classList.remove('header_nav-active')
    });

    // раскрытие бургер меню
    burgerItem.addEventListener("click", function (e) {
        e.stopPropagation();
        menu.classList.toggle('header_nav-active');
    });

    // сворачивание бургер меню при клике на область вне меню
    document.addEventListener("click", function (e) {
        const target = e.target;
        const its_menu = target == menu || menu.contains(target);
        const menu_is_active = menu.classList.contains("header_nav-active");
    
        if (!its_menu && menu_is_active) {
            menu.classList.toggle("header_nav-active");
        }
    });

    })();

console.log(
'1. Слайдер изображений в секции destinations +35 \n' +
'- на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели: выполнено с недочетами в работе + 10\n' +
'- три точки внизу отображают "номер слайда", то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации: выполенно полностью +20\n' +
'- анимации плавного перемещения для слайдера: выполнено частично +5\n' +
'2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап: выполнено полностью + 50\n' +
'- логин попап соответствует верстке его закрытие происходит при клике вне попапа: выполнено полностью +25\n' +
'- логин попап имеет 2 инпута (email и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными: выполнено полностью +25\n' +
'3. Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету: выполнено полностью +25\n' +
'Итоговый балл: 110');

// slides = document.querySelectorAll('.destinations_segment'),
// dots = document.querySelectorAll('.destinations_ellips-aside');

// // пробегаемся по массиву селекторов и отключаем класс slide-active
// const activeSlide = n => {
//     for (slide of slides) {
//         slide.classList.remove('slider-active');
//     }
//     slides[n].classList.add('slider-active')
//  }
//   // пробегаемся по массиву селекторов и отключаем класс dot-active
//   const activeDot = n => {
//     for (dot of dots) {
//         dot.classList.remove('slider_ellips');
//     }
//     dots[n].classList.add('slider_ellips')
//  }

//  // реализация перелистывания слайдов через нажатие на dot
// dots.forEach((item, indexDot) => {
//     item.addEventListener('click', () => {
//         index = indexDot;
//         activeSlide(index);
//         activeDot(index);
//     } )
// } )


let offsetLeft = 0;
let offsetRight = 0;
let prev = 0;
let next = 0;
let ind = 1;
const car = document.querySelector('.destinations_segments');
const selPrev = document.querySelector('.caruosel_prev');
const selNext = document.querySelector('.caruosel_next');
const rev = document.querySelectorAll('.destinations_ellips-aside');

const activeDesctpoDot = n => {
    for (dot of rev) {
        dot.classList.remove('slider_ellips');
    }
    dots[n].classList.add('slider_ellips')
 }

//  код для бесконечного слайдера
selPrev.addEventListener('click', function () {              
    offsetLeft = offsetLeft + 1720;
    prev = prev + 1720;
    ind = ind + 1;

    if (offsetLeft > 3440) {
        offsetLeft = 0;
        prev = 0;
    }
    if (offsetLeft == 0) { ind = 1; }
    if (offsetLeft == 1720) { ind = 2; }
    if (offsetLeft == 3440) { ind = 0; }
    car.style.marginLeft = -offsetLeft + 'px';
    selNext.style.left = prev + 'px';
    activeDesctpoDot(ind);
} )

// код для бесконечного слайдера
selNext.addEventListener('click', function () {                
    offsetRight = offsetRight + 1720;
    prev = prev + 1720;
    ind = ind + 1;
    if (offsetRight > 3440) {  
        offsetRight = 0;
        prev = 0;
    }
    if (offsetRight == 1720) { ind = 0; }
    if (offsetRight == 3440) { ind = 2; }
    if (offsetRight == 0) { ind = 1; }

    car.style.marginRight = -offsetRight + 'px';
    selPrev.style.right = prev + 'px';
    activeDesctpoDot(ind);
} )

// selPrev.addEventListener('click', function () {
//     offsetLeft = offsetLeft + 1720;
    // prev = prev + 1720;
    // ind = ind + 1;

    // if (offsetLeft > 3440) {
    //     offsetLeft = 0;
    //     prev = 0;
    // }
    // if (offsetLeft > 0) {
    //     selPrev.classList.add('dp_none');
    //     selNext.classList.remove('dp_none');
    //     } 
        // else { selPrev.classList.remove('dp_none'); }
    // if (offsetLeft == 0) { ind = 1; }
    // if (offsetLeft == 1720) { ind = 2; }
    // if (offsetLeft == 3440) { ind = 0; }
    // car.style.marginLeft = -offsetLeft + 'px';
    // car.style.marginRight = 0 + 'px';
    // selNext.style.left = prev + 'px';
    // activeDesctpoDot(ind);
// } )

// selNext.addEventListener('click', function () {
//     offsetRight = offsetRight + 1720;
    // prev = prev + 1720;
    // ind = ind + 1;
    // if (offsetRight > 3440) {  код для бесконечного слайдера
    //     offsetRight = 0;
    //     prev = 0;
    // }
    // if (offsetRight > 0) {
    //     selNext.classList.add('dp_none');
    //     selPrev.classList.remove('dp_none');
    //     }  
    // if (offsetRight == 1720) { ind = 0; }
    // if (offsetRight == 3440) { ind = 2; }
    // if (offsetRight == 0) { ind = 1; }

    // car.style.marginRight = -offsetRight + 'px';
    // car.style.marginLeft = 0 + 'px';
    // selPrev.style.right = prev + 'px';
    // activeDesctpoDot(ind);
// } )

// начало раздела логики работы ellips версия desctop
let index = 0;
const dots = document.querySelectorAll('.destinations_ellips-aside');
const ellips1 = document.querySelector('.ellips1');
const ellips2 = document.querySelector('.ellips2');
const ellips3 = document.querySelector('.ellips3');

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('slider_ellips');
    }
    dots[n].classList.add('slider_ellips')
 }

 dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        activeDot(index);
    } )
} );

ellips1.addEventListener('click', () => { car.style.marginRight = -1720 + 'px'; car.style.marginLeft = 0 + 'px'; selNext.style.left = 0 + 'px'; selPrev.style.right = 1720 + 'px'; } );
ellips2.addEventListener('click', () => { car.style.marginRight = 0 + 'px'; car.style.marginLeft = 0 + 'px'; selNext.style.left = 0 + 'px'; selPrev.style.right = 0 + 'px'; } );
ellips3.addEventListener('click', () => { car.style.marginLeft = -1720 + 'px'; car.style.marginRight = 0 + 'px'; selNext.style.left = 1720 + 'px'; selPrev.style.right = 0 + 'px'; } );
// окончание раздела логики работы ellips версия desctop



// начало раздела логики работы слайдера версия mobile
const slidesMob = document.querySelectorAll('.wrapper_pic-mobile');
const nextMob = document.querySelector('.destinations_arrow-right');
const prevMob = document.querySelector('.destinations_arrow-left');
const dotsMob = document.querySelectorAll('.destinations_ellips-aside-mobile');

let i = 0;
// пробегаемся по массиву селекторов и отключаем класс wrapper_pic-mobile-active
const activeSlideMob = n => {
    for (slide of slidesMob) {
        slide.classList.remove('wrapper_pic-mobile-active');
    }
    slidesMob[n].classList.add('wrapper_pic-mobile-active')
 }
  // пробегаемся по массиву селекторов и отключаем класс destinations_ellips-aside-mobile-active
 const activeDotMob = n => {
    for (dot of dotsMob) {
        dot.classList.remove('destinations_ellips-aside-mobile-active');
    }
    dotsMob[n].classList.add('destinations_ellips-aside-mobile-active')
 }
// реализация работы кнопки след слайд
 const nextSlideMob = () => {
    if (i == slidesMob.length - 1) {
        i = 0;
        activeSlideMob(i);
        activeDotMob(i);
    } else {
        i++;
        activeSlideMob(i);
        activeDotMob(i);
    }
 }
// реализация работы кнопки пред слайд
 const prevSlideMob = () => {
    if (i == 0) {
        i = slidesMob.length - 1;
        activeSlideMob(i);
        activeDotMob(i);
    } else {
        i--;
        activeSlideMob(i);
        activeDotMob(i);
    }
 }
// реализация перелистывания слайдов через нажатие на оранжевую точку
 dotsMob.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        i = indexDot;
        activeSlideMob(i);
        activeDotMob(i);
    } )
} )

// отлавливание событий клика с запуском функции перелистывания слайда
 nextMob.addEventListener('click', nextSlideMob);
 prevMob.addEventListener('click', prevSlideMob);
 // окончание раздела логики работы слайдера версия mobile


 // начало раздела popup 
const btnLogin = document.querySelector('.header_button');
const popup = document.querySelector('.popup');
const popup_body = document.querySelector('.popup_body');
// переменные для реализации функционала при нажатии на ссылку Register
const popup_urlreg = document.querySelector('.popup_url-register');
const popup_small = document.getElementById('small');
const popup_bod = document.getElementById('big');

btnLogin.addEventListener('click', (e) => {
    e.stopPropagation();
    popup.classList.toggle('popup_active');
} );

// сворачивание бургер меню при клике на область вне меню
document.addEventListener("click", function (e) {
    const target = e.target;
    const its_login = target == popup_body || popup_body.contains(target);
    const its_small = target == popup_small || popup_small.contains(target);
    const login_is_active = popup.classList.contains('popup_active');
    
    if (!its_login && !its_small && login_is_active) {
        popup.classList.remove('popup_active');
        popup_small.classList.remove('popup_block');
        popup_bod.classList.remove('popup_none');
    }
    });

    // действие при нажатии на ссылку Register (сворачивание одного окна и разворачивание другого)
    popup_urlreg.addEventListener('click', (e) => {
        e.stopPropagation();
        popup_bod.classList.add('popup_none');
        popup_small.classList.add('popup_block');
    } );
    // секция вывода сообщения alert
    const btn_signin = document.getElementById('btn_sign1');
    const btn_signup = document.getElementById('btn_sign2');
    // нажание кнопки Sign In в большом popap
    btn_signin.addEventListener('click', () => {
        const l_email = document.getElementById('email_1').value;
        const l_password = document.getElementById('password_1').value;
        alert('Your E-mail: ' + l_email + '\n\r' + 'Your password: ' + l_password); 
    } );
    // нажание кнопки Sign Up в малом popap
    btn_signup.addEventListener('click', () => {
        const l_email = document.getElementById('email_2').value;
        const l_password = document.getElementById('password_2').value;
        alert('Your E-mail: ' + l_email + '\n\r' + 'Your password: ' + l_password); 
    } );

