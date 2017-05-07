import $ from 'jquery';

$(document).ready(function(){
  $('select').material_select();
  $(".button-collapse").sideNav();
});

$('.signUp-open').click(() => {
  // Show signUp modal
  $('#signUp').modal();
});