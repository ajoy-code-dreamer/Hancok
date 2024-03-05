// ============ jQuery all operations =============
// ===== counter js =====
$(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1500,
  });
  // ===== counter js =====
  // ===== slick slider js =====
  $('.games__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:'.games__sliderArrowLeft',
    nextArrow:'.games__sliderArrowRight'
  });
  $('.streaming__videoWrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:false,
  });
  $('.sale__itemWrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows:false,
  });
  $('.accessories__itemWrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  });
  // ===== slick slider js =====


  
})
// ============ jQuery all operations =============