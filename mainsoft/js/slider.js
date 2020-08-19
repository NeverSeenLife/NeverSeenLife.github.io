const slider = new Swiper('.swiper-container', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
    enabled: true,
    onlyInViewport: false,
    },
  });