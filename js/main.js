$('[data-fancybox]').fancybox({
  protect: true,
  buttons: [
    'zoom',
    'thumbs',
    'close'
  ],
});

$('[data-fancybox="watermark"]').fancybox({
  protect: true,
  slideClass: 'watermark',
  toolbar: false,
  smallBtn: true
});