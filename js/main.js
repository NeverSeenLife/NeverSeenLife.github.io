const projects = new Swiper('.swiper-container', {
    loop: true,
    speed: 500,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
        },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })