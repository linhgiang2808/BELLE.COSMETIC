$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 5,
        autoplay: true,
        lazyload: true,
        loop: true,
        nav: false,
        dots: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 3
            },

            1024: {
                items: 4
            },

            1366: {
                items: 5
            }
        }
    });
});
$("#related-posts").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 3
        },

        1024: {
            items: 4
        },

        1366: {
            items: 4
        }
    }
});