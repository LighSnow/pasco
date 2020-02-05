$(document).ready(function () {

  $('.hamburger').click(function () {
    $(".nav, .hamburger").toggleClass('is-active');
  });


  $('.intro__inner').slick();

  $("#accordion").accordion({
    heightStyle: "content"
  });


  $(".main__btn-inner .btn").click(function (e) {
    e.preventDefault();
    $(".main__btn-inner .btn").removeClass('active');
    $(this).addClass('active');
  })

  $(".widget-btn .btn").click(function (e) {
    e.preventDefault();
    $(".widget-btn .btn").removeClass('active');
    $(this).addClass('active');
  })


  var mixer = mixitup('.main-block');


  $("#widget").tabs();


});