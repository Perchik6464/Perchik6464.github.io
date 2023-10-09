$(document).ready(function(){
    $('.header_burger, .menu_link').click(function(event){
        $('.header_burger, .header_menu, .header_logo h1, .header').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.slider').slick({
        dots:true,
        slidesToShow:3,
        responsive:[
            {
            breakpoint: 1080,
            settings:{
                slidesToShow:2
            }
            
        },
        {
            breakpoint: 769,
            settings:{
                arrows:false,
                slidesToShow:2
            }
            
        },
        {
            breakpoint: 650,
            settings:{
                arrows:false,
                slidesToShow:1
            }
            
        }
        
        ]
    });

});
