//scroll to the link smoothly
$("a").click(function(){
    var aHref = $(this).attr("href");
    $("body").animate({scrollTop:$(aHref).offset().top},1000)
})
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });
  });