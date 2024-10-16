function sendWhatsAppMessage() {
  const phoneNumber = '+6288990003000'; 
  const message = 'Asalamualaikum, Saya ingin mendaftar paket "..." dan apa saja persyaratannya?, terimakasih Al Aqso Tours.';  
  const newMessage = message.split('\n').join('<br>');
  console.log(newMessage);
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}


(function ($) {

  "use strict";

    $(window).load(function(){
      $('.preloader').fadeOut(1000);    
    });


    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });


    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplay:true,
    })


    // PARALLAX EFFECT
    $.stellar();  


    // SMOOTHSCROLL
    $(function() {
      $('.navbar-default a, #home a, footer a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  


    // WOW ANIMATION
    new WOW({ mobile: false }).init();

})(jQuery);
