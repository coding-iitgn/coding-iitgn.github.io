$(document).ready(function() {
  var x = 3;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    x = 1;
  }
  const slider = $(".projects");
  slider.slick({
    slidesToShow: x,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    arrows: true,
  });
  slider.on('wheel', (function(e) {
    e.preventDefault();
  
    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));
});
$(".plink").click(function() {
  window.open($(this).find("a:first").attr("href")); 
  return false;
});