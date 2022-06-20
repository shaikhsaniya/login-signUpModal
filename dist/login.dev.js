"use strict";

$(function () {
  $('#login-show').click(function () {
    $('#login-modal').fadeIn().css("display", "flex");
  });
  $('.close-modal').click(function () {
    $('#login-modal').fadeOut();
  });
}); //   document.getElementById("signUp-show").onclick = function () {
//     location.href = "http://127.0.0.1:5500/login&signupModal/signUp.html";
// }; 

$(function () {
  $('#signUp-show').click(function () {
    $('#signUp-modal').fadeIn().css("display", "flex");
  });
  $('.close-modal').click(function () {
    $('#signUp-modal').fadeOut();
  });
});