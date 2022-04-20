$(document).ready(function() {
    $('.slider-track').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        speed: 1000,
        fade: true,
        easing: 'linear',
        autoplay: true,
        autoplaySpeed: 10000,
        centerMode: true,
        centerPadding: '10px'
    });
    $('.slider-main').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        speed: 1000,
        lidesToShow: 1,
        slidesToScroll: 1,
        easing: 'linear',
        autoplay: true,
        autoplaySpeed: 50000,
        centerMode: true,
        centerPadding: '10px'
    });
});

 // MODAL

 $(function () {
    $('#callback-button').click(function () {
      $('#modal').addClass('modal-active');
      $('body').addClass('hidden');
    });
   
    $('#close-button').click(function () {
      $('#modal').removeClass('modal-active');
      $('body').removeClass('hidden');
    });
   
    $('#modal').mouseup(function (e) {
      let modalContent = $(".modal-content");
      if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $(this).removeClass('modal-active');
        $('body').removeClass('hidden');
      }
    });
  });
