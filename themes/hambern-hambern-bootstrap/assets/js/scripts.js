$(document).ready(function () {
    setPageScroll();
    setSummernoteEditor();
    new WOW().init();
});

function setPageScroll() {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
}

function setSummernoteEditor() {
    $('textarea.summernote').summernote({
        height: 300,
        border: 0
    });
}
