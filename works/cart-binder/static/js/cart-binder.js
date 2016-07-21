$(document).ready(function() {


$('.cart__thumbs a').click(function(){ 

      var bigPath=$(this).attr('href'); 
      var bigAlt=$(this).attr('title'); 

        

            

            $('[id^="bigImg-"]:visible').animate({opacity: .2}, 300);


             $( '[id^="bigImg-"]:visible' ).fadeIn( "slow", function() {


            $('[id^="bigImg-"]:visible').attr({src:bigPath,alt:bigAlt});


            $('[id^="bigImg-"]:visible').animate({opacity: 1}, 500); });
               return false; 
            //} 

             
    
       


      return false; 
      }); 


  });