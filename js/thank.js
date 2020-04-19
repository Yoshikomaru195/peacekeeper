$(document).ready(function(){
  var modal = $('#thank');
  var close = $('#close');

  close.on('click', function(){
    modal.removeClass('thank_active');
  });
});