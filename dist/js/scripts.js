$(document).ready(function() {
  // Navbar affix
  var navbar = $('.navbar');
  var navbar_button = $('.navbar-toggler');

  var section_6 = $('#contact');

  $(window).scroll(function () {
    if ($(this).scrollTop() > section_6.offset().top) {
      navbar_button.addClass('black');
    } else {
      navbar_button.removeClass('black');
    }
  });


  // Scroll Ease
  $('.sidebar a[href*="#"], footer ul a[href*="#"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500, function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex', '-1');
              $target.focus();
            };
          });
        }
      }
    });

  //Side Navbar
  var toggler = $("#v-toggler");
  var sidebar = $('.sidebar');

  toggler.on('click', function () {
    sidebar.toggleClass('open');
    $('body').toggleClass('toggle_sidebar');
  });

});

  /* var scroll_pos = 0;
  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 2300) {
      $("#combined").css("background", "url('images/img6.jpg')");
    }
  });

  var scroll_pos = 0;
  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 595 && scroll_pos < 1930) {
      $(".toggler").css("color", "#000");
      $(".login-btn").css("color", "#000");
    } else {
      $(".toggler").css("color", "#fff");
      $(".login-btn").css("color", "#fff");
    }
  });
*/