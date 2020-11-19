$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.slider').slick({

        infinite: false,
        centerMode: true,


        speed: 200,
        slidesToShow: 1,
        adaptiveHeight: true,

        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    dots: true,


                }



            }
        ]



    });



});

