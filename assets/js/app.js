$(function(){

    var introH = $("#intro").innerHeight(),
        servicesH = $("#services").innerHeight(),
        portH = $("#port").innerHeight(),
        teamH = $("#team").innerHeight(),
        teamDiv = teamH / 3,
        header = $("#header"),
        
        scrollOffset = $(window).scrollTop();
       
        
    // Фиксированная Шапка
    checkScroll(scrollOffset);
        
    $(window).on('scroll', function(){
       
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);
        
        siteScroll(scrollOffset);
    });
    
    function checkScroll(scrollOffset) {
        
        if( scrollOffset >= introH - 10 ) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }
    
    // Навигация по сайту
    function siteScroll(scrollOffset) {
        
        if ( scrollOffset >= 0 ) {
            $('#nav a').removeClass('active');
            $('#nav a[data-scroll="#intro"]').addClass('active');
            
        } else {
            $('#nav a[data-scroll="#intro"]').removeClass('active');
        }
        
        if ( scrollOffset >= introH ) {
            $('#nav a').removeClass('active');
            $('#nav a[data-scroll="#services"]').addClass('active');
            
        } else {
            $('#nav a[data-scroll="#services"]').removeClass('active');
        }
        
        if ( scrollOffset >= introH + servicesH ) {
            $('#nav a').removeClass('active');
            $('#nav a[data-scroll="#port"]').addClass('active');
            
        } else {
            $('#nav a[data-scroll="#port"]').removeClass('active');
        }
        
        if ( scrollOffset >= introH + servicesH + portH) {
            $('#nav a').removeClass('active');
            $('#nav a[data-scroll="#team"]').addClass('active');
            
        } else {
            $('#nav a[data-scroll="#team"]').removeClass('active');
        }
        
        if ( scrollOffset >= introH + servicesH + portH + teamDiv) {
            $('#nav a').removeClass('active');
            $('#nav a[data-scroll="#footer"]').addClass('active');
            
        } else {
            $('#nav a[data-scroll="#footer"]').removeClass('active');
        }
    }
    
    // Плавный скролл
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
        
        $("html, body").animate({
            scrollTop: blockOffset 
        }, 700);
        
        
        // Убирает Класс при клике на элменет 
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


