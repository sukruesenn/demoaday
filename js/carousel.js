$(document).ready(function() {
    //Slider
    var owlMain = $('.slider-carousel');
    owlMain.owlCarousel({
        items: 1,
        loop: false,
        smartSpeed: 500,
        dots: false,
        onChanged: onChangedCallback
    });
    var itemCount = $('.owl-carousel .slider-item').length;
    for (var i = 0; i < itemCount; i++) {
        $('.custom-dots').append('<div class="custom-dot" data-index="' + i + '"></div>');
    }

    $('.custom-dot:first-child').addClass('active');

    $('.custom-dot').click(function(){
        var index = $(this).data('index');
        owlMain.trigger('to.owl.carousel', [index, 300, true]);
    });

    function onChangedCallback(event){
        var currentItemIndex = event.item.index;
        $('.custom-dot').removeClass('active');
        $('.custom-dot[data-index="' + currentItemIndex + '"]').addClass('active');
    }
    
    //AK Adaylar Carousel
    var owlAday = $('.aday-carousel').owlCarousel({
        loop: true,
        nav: false,
        margin: 10,
        smartSpeed: 1500,
        stagePadding: 0,
        items: 5,
        dots: false,
        responsive:{
            0:{
                items: 1.5,
                stagePadding: 25,
                margin: 20
            },
            425:{
                items: 2,
                stagePadding: 25,
                margin: 20
            },
            575:{
                items: 1.3,
                margin: 20
            },
            600:{
                items: 1.5,
                margin: 20
            },
            700:{
                items: 2.2,
                margin: 20
            },
            769:{
                items: 2.5,
                margin: 20
            },
            993:{
                items: 3.2,
                margin: 20
            },
            1366:{
                items: 3.5
            },
            1620:{
                items: 4.5
            }
        }
    });

    $('#prevBtnAday').click(function() {
        owlAday.trigger('prev.owl.carousel');
    });

    $('#nextBtnAday').click(function() {
        owlAday.trigger('next.owl.carousel');
    });

    $('#prevBtnAday2').click(function() {
        owlAday.trigger('prev.owl.carousel');
    });

    $('#nextBtnAday2').click(function() {
        owlAday.trigger('next.owl.carousel');
    });
    
    $('.owl-filter-bar').on('click', '.filter', function(){
        var $item = $(this);
        var filter = $item.data('owl-filter');
        owlAday.owlcarousel2_filter(filter);
    });


    //AK Projeler Carousel
    var owlProjeler = $('.projeler-carousel').owlCarousel({
        loop: true,
        nav: false,
        margin: 50,
        dots: false,
        smartSpeed: 500,
        items: 3.5,
        responsive:{
            0:{
                items: 1.2,
                margin: 20
            },
            426:{
                items: 1.5,
                margin: 20
            },
            576:{
                items: 1.8
            },
            769:{
                items: 2.5
            },
            1281:{
                items: 3.5
            }
        }
    });

    $('#prevBtnProje').click(function() {
        owlProjeler.trigger('prev.owl.carousel');
    });

    $('#nextBtnProje').click(function() {
        owlProjeler.trigger('next.owl.carousel');
    });

    $('#prevBtnProje2').click(function() {
        owlProjeler.trigger('prev.owl.carousel');
    });

    $('#nextBtnProje2').click(function() {
        owlProjeler.trigger('next.owl.carousel');
    });
    
    $('.owl-filter-bar-projeler').on('click', '.filter', function(){
        var $item = $(this);
        var filter = $item.data('owl-filter');
        owlProjeler.owlcarousel2_filter(filter);
    });


    //Haberler Carousel
    var owlHaberler = $('.haberler-carousel').owlCarousel({
        loop: true,
        nav: false,
        margin: 30,
        smartSpeed: 500,
        dots: false,
        items: 3,
        responsive:{
            0:{
                items: 1.2,
                margin: 20
            },
            481:{
                items: 1.5,
                margin: 20
            },
            576:{
                items: 1.8
            },
            769:{
                items: 2.5
            },
            1281:{
                items: 3.5
            }
        }
    });

    $('#prevBtnHaber').click(function() {
        owlHaberler.trigger('prev.owl.carousel');
    });

    $('#nextBtnHaber').click(function() {
        owlHaberler.trigger('next.owl.carousel');
    });

    $('#prevBtnHaber2').click(function() {
        owlHaberler.trigger('prev.owl.carousel');
    });

    $('#nextBtnHaber2').click(function() {
        owlHaberler.trigger('next.owl.carousel');
    });

    $('.owl-filter-bar-haberler').on('click', '.filter', function(){
        var $item = $(this);
        var filter = $item.data('owl-filter');
        owlHaberler.owlcarousel2_filter(filter);
    });
});