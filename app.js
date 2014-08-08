var main = function() {
    $('.dropdown-toggle').click(function() {
        $('.dropdown-menu').toggle();
    });
    
    $('#collapse').click(function(){
       $('#collapseOne').collapse('toggle'); 
    });
};


$(document).ready(main);

$('body').scrollspy({ target: '.spybar' })
