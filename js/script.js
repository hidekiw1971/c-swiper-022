jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  const mySwiperThumbs = new Swiper(".xxx__swiper .mySwiper-thumbs", {
    // loop: true,
    slidesPerView: 5,
    // centeredSlides: true,
  });
  const mySwiperMain = new Swiper(".xxx__swiper .mySwiper-main", {
    loop: true,
    // centeredSlides: true,
    // slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: mySwiperThumbs,
    },
  });
  // この中であればWordpressでも「$」が使用可能になる
});
