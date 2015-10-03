/* globals jQuery */

(function ($) {
    "use strict";

    var $window = $(window);
    var $birdLogo = $('.logo');
    var $backBirdPic = $('.back-bird');
    var $foreBirdPic = $('.fore-bird');

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
    });

}(jQuery));