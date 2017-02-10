$(document).ready(function () {
    // Smooth Scrolling Function
    $('a[href*=#]:not([href=#])').click(function () {
        var $targ = $(this.hash),
            host1 = this.hostname,
            host2 = location.hostname,
            path1 = this.pathname.replace(/^\//, ''),
            path2 = location.pathname.replace(/^\//, '');

        if (!$targ.length) {
            $targ = $('[name=' + this.hash.slice(1) + ']');
        }

        if ($targ.length && (host1 === host2 || path1 === path2)) {
            $('html, body').animate({ scrollTop: $targ.offset().top }, 1000);

            return false;
        }

        return true;
    });

    

    $('.js-no').click(function () {
      $(this).parent().parent().addClass('question-no');
      $(this).parent().parent().removeClass('question-yes');
    });

    $('.js-yes').click(function () {
      $(this).parent().parent().addClass('question-yes');
      $(this).parent().parent().removeClass('question-no');
    });

    // Slider
    $('.slider').slick({
        arrows: true,
        autoplay: false,
        prevArrow: '<div class="arrow arrow-prev"><i class="material-icons">keyboard_arrow_left</i></div>',
        nextArrow: '<div class="arrow arrow-next"><i class="material-icons">keyboard_arrow_right</i></div>'
    });
}); // doc.ready
