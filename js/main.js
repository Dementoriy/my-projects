var swiper = new Swiper(".mySwiper", {
    spaceBetween: 8, //сколько слайдов всего
    slidesPerView: 4, //количество слайдов снизу
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 8,
    thumbs: {
      swiper: swiper,
    },
  });