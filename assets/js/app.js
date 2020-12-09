$(function(){

    var introH = $("#intro").innerHeight(),
        header = $("#header"),
        scrollOffset = $(window).scrollTop();
    
    // Header Fixed
    
    checkScroll(scrollOffset);
    
    $(window).on('scroll', function(){
       
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);
        
    });
    
    function checkScroll(scrollOffset) {
        
        if( scrollOffset >= introH / 2 ) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }
    
    // Smooth Scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
        
        $("html, body").animate({
            scrollTop : blockOffset 
        }, 700);
        
        $("#menu__btn").removeClass('active');
        $("#nav").removeClass('active');
        
    });
    
    // Nav Toggle
    
    $("#menu__btn").on('click', function(event){
       event.preventDefault();
        
        $(this).toggleClass('active');
        $("#nav").toggleClass('active');
        
    });
});
