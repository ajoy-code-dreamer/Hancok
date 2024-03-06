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
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.sale__itemWrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows:false,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.accessories__itemWrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // ===== slick slider js =====


  
})
// ============ jQuery all operations =============

// ========== script js operation ===========
// ===== navbar js =====
// === selector ===
const navMenu = document.querySelector('.nav__menu__wrapper')
const collapseClose = document.querySelector('.collapse__menuIcon i')
// === selector ===

// ==== nav hide show ====

collapseClose.addEventListener('click',(e)=>{
  navMenu.classList.toggle('nav__active')
  collapseClose.classList.toggle('fa-xmark')
})

// ==== nav hide show ====

// ===== navbar js =====

// ========== script js operation ===========