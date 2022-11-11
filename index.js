//nav position
jQuery(window).scroll(function(){
  var $sections = $('section');
  $sections.each(function(i,el){
      var top  = $(el).offset().top-180;
      var bottom = top +$(el).height();
      var scroll = $(window).scrollTop();
      var id = $(el).attr('id');      
      if( scroll > top && scroll < bottom){
          $('.nav-link').removeClass('active');
          $('a[href="#'+id+'"]').addClass('active');
      }
  })
});

//nav smooth
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length
        ? target
        : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 120,
          },
          500
        );
        return false;
      }
    }
  });
});

let homeSwiper = new Swiper(".swiper", {

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 480px
      425: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 640px
      728: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



