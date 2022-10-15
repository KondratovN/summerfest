$(document).ready(function(){

    $('a.nav-link').click(function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        },{
            duration: 300,
            easing: 'swing'
        });
        return false;
    });

    $('.nav-link').click(function(event) {
        $('.burger, .menu, .soc').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.burger').click(function(event) {
        $('.burger, .menu, .soc').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.slids').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[
            {
            breakpoint: 970,
            settings: {
                slidesToShow: 2,
            }
        },
            {
            breakpoint: 766,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
});

      $('.gallery-slick').slick({
        slidesToShow: 2,
        arrows: false,
        dots: true,
        responsive:[
            {
            breakpoint: 766,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
    });
});