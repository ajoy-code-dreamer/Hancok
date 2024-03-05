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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
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
// all selector 
const navMenu = document.querySelector('.nav__menu__wrapper')
const collapseClose = document.querySelector('.collapse__menuIcon i')
// all selector 

// menu hide show 

collapseClose.addEventListener('click',(e)=>{
  navMenu.classList.toggle('nav__active')
  collapseClose.classList.toggle('fa-xmark')
})
// ===== navbar js =====

// ========== script js operation ===========