$(document).ready(function() {
    $(".nav-link").hover(function() {
      $(".dropdown--menu").removeClass("d-none");
    });

    $(".dropdown--menu").mouseleave(function() {
      $(".dropdown--menu").addClass("d-none");
    });

    $('#modalSettingsButton').click(function() {
      $('#modalSettings').removeClass('d-none');
    });
   
    $('#modalShareButton').click(function() {
      $('#modalShare').removeClass('d-none');
    });
    

    $('.close--modal').click(function() {
      $('.modalnav').addClass('d-none');
    });


  });