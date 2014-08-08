var main = function() {
    $('.dropdown-toggle').click(function() {
        $('.dropdown-menu').toggle();
    });

};


$(document).ready(main);

$('body').scrollspy({ target: '.spybar' })
