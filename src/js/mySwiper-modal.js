const swiperModal = new Swiper(".mySwiper-modal", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

export {swiperModal}