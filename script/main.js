var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  speed: 300,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

$('.header__nav-link').click(function (e) {
  e.preventDefault();
  let attr = $(this).attr('href'),
    toEl = $(attr).offset().top
  $('html,body').animate({
    scrollTop: toEl
  }, {
    duration: 1000
  })
})

$('.header__content-btn').click(function (e) {
  e.preventDefault();
  let attr = $(this).attr('href'),
    toEl = $(attr).offset().top
  $('html,body').animate({
    scrollTop: toEl
  }, {
    duration: 1000
  })
})


$('#up').click(function (e) {
  e.preventDefault();
  setTimeout(() => {
    $('html,body').animate({
      scrollTop: 0
    }, {
      duration: 1000
    })
  }, 250)
})



let burger = document.querySelector('.header__burger'),
  menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
})


const token = '1398659406:AAFrPjIBu6zPsM3-L2zTdrBMjpldiUwPQqo';
const chatId = '1473498';

const btn = document.querySelector('.main__form-btn');

btn.addEventListener('click', () => {
  const name = document.querySelector('.form__input-name');
  const number = document.querySelector('.form__input-tel');
  const message = document.querySelector('.form__input-message');
  if (name.value == "" || number.value == "" ) {}
  else {
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=
Имя отправителя:   ${name.value}%0A
Номер телефона: ${number.value}%0A
Сообщение на тему:   ${message.value}`)
    name.value = '';
    number.value = '';
    message.value = '';
  }
})

// document.oncontextmenu = function (){return false};