$(document).ready(function() {
    // Drawer js
    $('.drawer').drawer();


    //    Pre loader
    setTimeout(function() {
        $('.loader-bg').fadeToggle();
    }, 5000)

    $('.juse').click(function() {
        $('.juse').html('Mehedi')
        $('.juse').css('color', 'yellow');
    });
    $('.jman').click(function() {
        $('.jman').html('I am a freelance.')
        $('.jman').css('color', 'red');
    });

    // Parallax js
    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image);





    // Isotope js Portfolio



    // init Isotope
    var $grid = $('.grid').isotope({

        // options
    });
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });



    // Stick header js
    $(window).scroll(function() {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();


        if (scroll < 200) sticky.removeClass('fixed');
        else sticky.addClass('fixed').animate({
            scrollTop: 0
        }, 3000);
    });

    // Counter js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });




});