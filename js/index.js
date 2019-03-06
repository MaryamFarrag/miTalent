//scroll to the link smoothly
$("a").click(function(){
    var aHref = $(this).attr("href");
    $("body").animate({scrollTop:$(aHref).offset().top},1000)
})
window.onload = function(){
    $(".loading").css("z-index", "0");
    $(".cssload-thecube").css("opacity","0")
    $(".loading").css("width", "0");
    $("body").css("overflow", "auto")
}
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

  prevScroll = window.pageYOffset


  //changing navbar color and hiding it while scrolling down

  window.onscroll = function(){
      
      currentScroll = window.pageYOffset
      if(prevScroll > currentScroll && $(document).scrollTop() < 50){
        $(".navbar").css("background-color", "transparent"); 
      }

      else if(prevScroll > currentScroll){
          $(".navbar").css("top","0")
          $(".navbar").css("background-color","white")
          console.log("tale3")
      }
      else{
          $(".navbar").css("top","-100px")
          console.log("nazel")
      }
      prevScroll = currentScroll

}
  