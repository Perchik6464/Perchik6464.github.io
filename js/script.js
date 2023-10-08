$(document).ready(function(){
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
