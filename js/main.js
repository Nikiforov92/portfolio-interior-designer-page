$(document).ready(function(){
    // Header Slider 
    $(".header-slider").owlCarousel({
        items: 1, 
        loop: true,
        smartSpeed: 600,
        autoplay: true,
        autoplayTimeout: 5000, 
        autoplayHoverPause: true
    });

    $('.slider-next').click(function() {
        $(".header-slider").trigger('next.owl.carousel');
    });
    $('.slider-prev').click(function() {
        $(".header-slider").trigger('prev.owl.carousel');
    });

    // Fancybox 
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });

      // animater 
      let show = true;
      let countbox = ".animated-number";
      $(window).on("scroll load resize", function () {
          if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
          let w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
          let e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
          let w_height = $(window).height(); // Высота окна браузера
          let d_height = $(document).height(); // Высота всего документа
          let e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
          if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
              $('.num').css('opacity', '1');
              $('.num').spincrement({
                  thousandSeparator: "",
                  duration: 4000
              });
  
              show = false;
          }
      });
  });

    // backtop-btn

const backTopBtn = document.querySelector('#backtop');
backTopBtn.style.display = 'none';
document.addEventListener('scroll', function(){
    if(window.pageYOffset > 500){
        backTopBtn.style.display = 'block';
    }else{
        backTopBtn.style.display = 'none';
    }
})

