var $window = $(window);
var $doc = $(document);

$doc.ready(function () {
        var $hideMe = $('.part-content');
    
        var bottom_of_window = $window.height();
        $hideMe.each(function (i) {

            var $elm = $hideMe.eq(i);
            var bottom_of_object = $elm.offset().top + $elm.outerHeight();

            if (bottom_of_window > $elm.offset().top) {
                if (!$elm.hasClass('in-viewport')) {
                    $elm.addClass('in-viewport');
                    $elm.hide().fadeIn(2000);
                }
            } else {
                $elm.removeClass('in-viewport');
            }
        }); 

    $window.scroll(function () {
        var bottom_of_window = $window.scrollTop() + $window.height();
        $hideMe.each(function (i) {

            var $elm = $hideMe.eq(i);
            var bottom_of_object = $elm.offset().top + $elm.outerHeight();

            if (bottom_of_window > $elm.offset().top) {
                if (!$elm.hasClass('in-viewport')) {
                    $elm.addClass('in-viewport');
                    $elm.hide.fadeIn(2000);
                }
            } else {
                $elm.removeClass('in-viewport');
            }
        }); 

    });
});
