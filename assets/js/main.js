$(document).ready(function(){
    $("#slider").owlCarousel({
        margin: 60,
        items: 1,
        dots: false,
        nav: true,
        loop: true,
        navText: ['<img src="/assets/img/icon/arrow-left.svg">', '<img src="/assets/img/icon/arrow-right.svg">']
    })

    $("#slider-tournament").owlCarousel({
        margin: 31,
        items: 2,
        responsive:{
            0:{
                items:1,
                margin: 14
            },
            320:{
                items:1,
                margin: 14
            },
            660:{
                items:2
            }
        },
        dots: true,
        nav: true,
        loop: true,
        navText: ['<img src="/assets/img/icon/arrow-left.svg">', '<img src="/assets/img/icon/arrow-right.svg">']
    })

    $("#slider-tournament2").owlCarousel({
        margin: 31,
        items: 2,
        responsive:{
            0:{
                items:1
            },
            660:{
                items:2
            }
        },
        dots: true,
        loop: true,
        nav: true,
        navText: ['<img src="/assets/img/icon/arrow-left.svg">', '<img src="/assets/img/icon/arrow-right.svg">']
    })
});