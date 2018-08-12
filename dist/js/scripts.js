$(document).ready(function() {

    // Navbar affix
    var navbar = $('.navbar');
    var navbar_button = $('.navbar-toggler');

    // Offset Navbar 
    var toggler = $("#v-toggler");
    var sidebar = $('.sidebar');

    toggler.on('click', function() {
        sidebar.toggleClass('open');
        $('body').toggleClass('toggle_sidebar');
    });

    
    // Background changer
    var section_4 = $('#about');
    var section_5 = $('.second-half');

    $(window).scroll(function() {
        if ($(this).scrollTop() > section_4.offset().top - 500 && $(this).scrollTop() < section_5.offset().top - 300) {
            section_4.css('background', 'url(dist/images/img3.jpg) top/cover fixed no-repeat');
        } else if ($(this).scrollTop() > section_4.offset().top - 500 && $(this).scrollTop() < section_5.offset().top + 500) {
            section_4.css('background', 'url(dist/images/img4.jpg) top/cover fixed no-repeat');
        } else {
            section_4.css('background', '#333');
        }
    });

    // Changing button color
    $(window).scroll(function() {
        if ($(this).scrollTop() > section_5.offset().top) {
            sticky_btn.children().removeClass('bg-dark text-white');
            sticky_btn.children().addClass('bg-white text-dark');
        } else {
            sticky_btn.children().removeClass('bg-white text-dark');
            sticky_btn.children().addClass('bg-dark text-white');
        }
    });

    // Button state from fixed to sticky
    $(window).scroll(function() {
        if ($(this).scrollTop() > section_7.offset().top) {
            sticky_btn.addClass('final_state');

        } else {
            sticky_btn.removeClass('final_state');
            sticky_btn.addClass('temp_state_1');
        }
    });


    // revert button color 
    var section_6 = $('#support');

    $(window).scroll(function() {
        if ($(this).scrollTop() > section_6.offset().top) {
            sticky_btn.children().addClass('bg-dark text-white');
            sticky_btn.children().removeClass('bg-white text-dark');
        }
    });

    // Changing button state to fixed
    var sticky_btn = $('.sticky-btn');
    var section_7 = $('#contact');
    var footer = $('footer');

    $(window).scroll(function() {
        if ($(this).scrollTop() > section_4.offset().top - 110) {
            sticky_btn.addClass('temp_state_1');
        } else {
            sticky_btn.removeClass('temp_state_1');
        }
    });


    // Scroll Ease
    $('.sidebar a[href*="#"], footer ul a[href*="#"]')
        .click(function(event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500, function() {
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



});