var introH = document.getElementById('intro').offsetHeight;
var header = document.getElementById('header');
const listener = document.querySelectorAll('a[data-scroll]');
var scrollOffset = 0;

// Header Fixed

window.addEventListener('scroll', function(){
    scrollOffset = window.scrollY;
    
    if ( scrollOffset >= introH ) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

// Smooth Scroll

for ( let search of listener ) {
    
    search.addEventListener('click', function(e){
        e.preventDefault();
        
        const blockId = search.getAttribute('data-scroll');
        
        document.querySelector(blockId).scrollIntoView({
            behavior : "smooth",
            block : "start"
        });
        
        menuNav.classList.remove('active');
        nav.classList.remove('active');
        
    });
};

// Nav Toggle

let nav = document.getElementById('nav');
let menuNav = document.getElementById('menu__btn');

menuNav.addEventListener('click', function(e){
    e.preventDefault();
    
    menuNav.classList.toggle('active');
    nav.classList.toggle('active');
    
});


























