var main = function() {
    $('.dropdown-toggle').click(function() {
        $('.dropdown-menu').toggle();
    });
    
    $(function () { $('#collapseFour').collapse({
      toggle: false
   })});
   $(function () { $('#collapseTwo').collapse('show')});
   $(function () { $('#collapseThree').collapse('toggle')});
   $(function () { $('#collapseOne').collapse('hide')});
};

$(document).ready(main);
