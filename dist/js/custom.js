//Banner carousel 
$('#car-banner').owlCarousel({
    loop: true,
    nav: false,
    items: 2,
    mouseDrag: false,
    autoplay: true,
    dots: true,
    responsive : {
        0 : {
            items:1,
            nav:false,
            mouseDrag: true,
        },
        560 : {
            items:2,
            nav:false,
            mouseDrag: true,
        }
    }
})



//mobile menu

$(".navbar-toggle-menu").click(function () {
    $("#top-menu").slideToggle();
    $("body").toggleClass("backshadow");
});




