//Menu
$(function() {
	//var x = $(window).width();
	// if(x > 767) {

		// $('.menu li').unbind('mouseover').unbind('mouseout');

		// $('.menu li.has-child').click("live",function() {
			// $('.menu li').removeClass("active");
			// $('.menu li').addClass("inactive");
			// $('.menu li').find("ul").hide();
			// $(this).removeClass("inactive");
			// $(this).addClass("active");
			// $(this).find("ul").show();
		// })
	// }

    // setInterval( "slideSwitch()", 5000 );
    if($("#slider1").length > 0){
        var url = "../assets/responsiveslides.min.js";
        $.getScript( url, function() {
       
              $("#slider1").responsiveSlides({
                auto: true,
                pager: false,
                nav: true,
                speed: 500,
                maxwidth: 980,
                namespace: "centered-btns"
              });
        });
    }
});
/*
function slideSwitch() {
    var $active = $('#slideshow a.active');

    if ( $active.length == 0 ) $active = $('#slideshow a:last');

    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow a:first');

    // uncomment the 3 lines below to pull the images in random order
    
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );


    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}*/
