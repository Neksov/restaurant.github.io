$("[data-fancybox]").fancybox({
  protect: true,
  buttons: ["zoom", "thumbs", "close"],
});

$('[data-fancybox="watermark"]').fancybox({
  protect: true,
  slideClass: "watermark",
  toolbar: false,
  smallBtn: true,
});
var mySwiper = new Swiper('.swiper-container', {
  cssMode: true,
  //loop: true,
  slidesPerView: 'auto',
  autoplay: {
    delay: 3000,
  },
});
new WOW().init();