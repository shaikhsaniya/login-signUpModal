$(function () {

  $('#login-show').click(function () {
    $('#login-modal').fadeIn().css("display", "flex");
  });

  $('.close-modal').click(function () {
    $('#login-modal').fadeOut();
   
  });
});



$(function () {

  $('#signUp-show').click(function () {
    $('#signUp-modal').fadeIn().css("display", "flex");
  });

  $('.close-modal').click(function () {
    $('#signUp-modal').fadeOut();
   
  });
});