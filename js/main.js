$(document).ready(function(){
  console.log($(this));
  $('.services__inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
});
