/* globals jQuery, setTimeout */

(function ($) {
    "use strict";

    var $window = $(window);

    // header vars
    var $birdLogo = $('.logo');
    var $backBirdPic = $('.back-bird');
    var $foreBirdPic = $('.fore-bird');

    // clothes-pics vars
    var $clothesPicsContainer = $('.clothes-pics');
    var $clothesFigures = $('.clothes-pics figure ');

    // large window vars
    var $largeWindow = $('.large-window');
    var $largeWindowTint = $('.large-window-tint');

    // bind on window scroll event
    $window.scroll(function (scrollEvent) {

        // get the pixes count that has been scolled from top
        var windowScrollTopPosition = $window.scrollTop();

        // Header Parallax
        // -----------------------------------------

        // set the logo to be centered at all times
        $birdLogo.css({
            'transform': 'translate(0px, ' + (windowScrollTopPosition / 2) + '% )'
        });

        // set the back bird to slowly come down
        $backBirdPic.css({
            'transform': 'translate(0px, ' + (windowScrollTopPosition / 4) + '% )'
        });

        // set the foreground bird to slowly come up
        $foreBirdPic.css({
            'transform': 'translate(0px, -' + (windowScrollTopPosition / 40) + '% )'
        });

        // Clothes Landing Elements
        // -----------------------------------------

        // pixels scrolled from the top > clothes pics pixels from the top - (windows height / 1.2)
        if (windowScrollTopPosition > $clothesPicsContainer.offset().top - ($window.height() / 1.2)) {

            // each of the clothes pictures
            $clothesFigures.each(function (i) {

                // to apear 100 mils times the its index
                var millsOffset = i * 100;

                setTimeout(function () {
                    $clothesFigures.eq(i).addClass('is-showing');
                }, millsOffset);
            });
        }

        // Large Window - Periscope
        // -----------------------------------------

        if (windowScrollTopPosition > $largeWindow.offset().top - ($window.height() / 1.2)) {

            // made-up formula, don't look for logic, though it probably has some O_O
            var opacityValue = (windowScrollTopPosition - ($largeWindow.offset().top / 2)) / 300;

            $largeWindowTint.css({

                opacity: opacityValue
            });
        }
    });

}(jQuery));
