const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  cssMode: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  keyboard: true
})
