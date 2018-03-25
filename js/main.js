$(document).ready(function(){

  var menuBtn = $('.top-nav__btn'),
      menu = $('.top-nav__menu'),
      sidebarBtn = $('.sidebar__btn'),
      sidebarMenu = $('.sidebar__menu');

  menuBtn.on('click', function(event) {
    event.preventDefault();
    menu.toggleClass('top-nav__menu--active');
  });

  sidebarBtn.on('click', function(event) {
    event.preventDefault();
    sidebarMenu.slideToggle();
  });

  $('.services__inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        dots: true
      }
    },
  ]
  });

  //  power range
  var elem = document.querySelector('.calc-range');
  var init = new Powerange(elem, { min: 10000, max: 500000, start: 10000, hideRange: true, step: 10000 });
  var radio = $('input[name="programs"]');
  var percent = 0.2;
  var month = 6;
  var result, total, monthly;

  radio.on('change', function() {
    var investedSum = +$('.calc-range').val();
    month = +$(this).data('month');
    percent = +$(this).data('percent');

    result = Math.round(percent / 12 * month * investedSum);
    monthly = parseInt(result / 12);
    total = investedSum + result;
    $('.calc-main__total--result').text('$' + total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    $('.calc-main__details--result span').text(month);
    $('.calc-main__total--income').text('$' + monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
  });


    $('.calc-range').on('change', function() {
      $('.calc-main__num').text('$' + elem.value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
      money = +$(this).val();
      var radio = $('input[name="programs"]:checked');
      var investedSum = +$('.calc-range').val();

      month = +radio.data('month');
      percent = +radio.data('percent');

      result = Math.round(percent / 12 * month * investedSum);
      monthly = parseInt(result / 12);
      total = investedSum + result;
      $('.calc-main__total--result').text('$' + total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
      $('.calc-main__total--income').text('$' + monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    });
});
