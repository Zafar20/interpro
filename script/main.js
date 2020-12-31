var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    speed:  300,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  $('.header__nav-link').click(function(e) {
    e.preventDefault();
    let attr =  $(this).attr('href'),
        toEl = $(attr).offset().top
        $('html,body').animate({
            scrollTop: toEl
        },{
            duration: 1000
        })
})


$('#up').click(function(e) {
  e.preventDefault(); 
  setTimeout(() => {
      $('html,body').animate({
          scrollTop: 0
      },{
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