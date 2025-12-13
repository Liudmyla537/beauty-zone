// Переконатися, що DOM завантажений перед ініціалізацією Swiper
document.addEventListener('DOMContentLoaded', function() {
  const swiperElement = document.querySelector(".procedures__card");
  
  if (swiperElement) {
    const swiper = new Swiper(".procedures__card", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 16,

      breakpoints: {
        375: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      },

      pagination: {
        el: ".pagination",
        clickable: true,
        bulletClass: "pagination__button",
        bulletActiveClass: "pagination__button--active",
      },
      navigation: {
        nextEl: ".procedures__btn--next",
        prevEl: ".procedures__btn--prev",
      },
    });
  }
});
