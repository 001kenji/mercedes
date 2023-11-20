
var starImage1 = document.getElementById('imageSta1');
var starImage2 = document.getElementById('imageSta2');
var starImage3 = document.getElementById('imageSta3');
var starImage4 = document.getElementById('imageSta4');
var starImage5 = document.getElementById('imageSta5');

var star1 = document.getElementById('t1');
var star2 = document.getElementById('t2');
var star3 = document.getElementById('t3');
var star4 = document.getElementById('t4');
var star5 = document.getElementById('t5');

star1.style.display = 'none';
star2.style.display = 'none';
star3.style.display = 'none';
star4.style.display = 'none';
star5.style.display = 'none';

var face1 = document.getElementById('face1');
var face2 = document.getElementById('face2');
var face3 = document.getElementById('face3');
var face4 = document.getElementById('face4');
var face5 = document.getElementById('face5');

face1.style.display = 'none';
face2.style.display = 'none';
face3.style.display = 'none';
face4.style.display = 'none';
face5.style.display = 'none';
starImage1.addEventListener('click',  function star(){
star1.style.display = 'flex';
   starImage1.style.display = 'none';
   face1.style.display = 'flex';

    
    starImage2.style.display = 'flex';
    starImage3.style.display = 'flex'; 
    starImage4.style.display = 'flex'; 
    starImage5.style.display = 'flex'; 

    face2.style.display = 'none';
    face3.style.display = 'none';
    face4.style.display = 'none';
    face5.style.display = 'none';

   // star1.style.display = 'none';
    star2.style.display = 'none';
    star3.style.display = 'none';
    star4.style.display = 'none';
    star5.style.display = 'none';
});

star1.addEventListener('click', function(){
    starImage1.style.display = 'flex';
    star1.style.display = 'none';
    face1.style.display = 'none';
    
    face2.style.display = 'none';
    face3.style.display = 'none';
    face4.style.display = 'none';
    face5.style.display = 'none';

    star2.style.display = 'none';
    star3.style.display = 'none'; 
    star4.style.display = 'none'; 
    star5.style.display = 'none'; 

    starImage2.style.display = 'flex';
    starImage3.style.display = 'flex'; 
    starImage4.style.display = 'flex'; 
    starImage5.style.display = 'flex'; 

 


});

starImage2.addEventListener('click',  function star(){
   
    star2.style.display = 'flex';
       starImage2.style.display = 'none';
       face2.style.display = 'flex';

       starImage1.style.display = 'none';
       starImage3.style.display = 'flex'; 
       starImage4.style.display = 'flex'; 
       starImage5.style.display = 'flex'; 
   
       face1.style.display = 'none';
       face3.style.display = 'none';
       face4.style.display = 'none';
       face5.style.display = 'none';
   
      star1.style.display = 'flex';
      // star2.style.display = 'none';
       star3.style.display = 'none';
       star4.style.display = 'none';
       star5.style.display = 'none';



    });
    
    star2.addEventListener('click', function(){
        starImage2.style.display = 'flex';
        star2.style.display = 'none';
        face2.style.display = 'none';

        face1.style.display = 'none';
        face3.style.display = 'none';
        face4.style.display = 'none';
        face5.style.display = 'none';

        starImage1.style.display = 'none';
        star1.style.display = 'flex';
        star2.style.display = 'none';
        star3.style.display = 'none';
        star4.style.display = 'none';
        star5.style.display = 'none';

        starImage2.style.display = 'flex';
        starImage3.style.display = 'flex';
        starImage4.style.display = 'flex';
        starImage5.style.display = 'flex';

        if(star1.style.display == 'flex'){
            face1.style.display = 'flex';
        }

    });


    starImage3.addEventListener('click',  function star(){
star3.style.display = 'flex';
   starImage3.style.display = 'none';
   face3.style.display = 'flex';

   starImage1.style.display = 'none';
   starImage2.style.display = 'none';
   starImage3.style.display = 'none'; 
    starImage4.style.display = 'flex'; 
    starImage5.style.display = 'flex'; 

    face1.style.display = 'none';
    face2.style.display = 'none';
   
    face4.style.display = 'none';
    face5.style.display = 'none';

   star1.style.display = 'flex';
    star2.style.display = 'flex';
  
    star4.style.display = 'none';
    star5.style.display = 'none';


});

star3.addEventListener('click', function(){
    starImage3.style.display = 'flex';
    star3.style.display = 'none';
    face3.style.display = 'none';

    star4.style.display = 'none';
    star5.style.display = 'none';

   starImage4.style.display = 'flex';
   starImage5.style.display = 'flex';
   

    face4.style.display = 'none';
    face5.style.display = 'none';
    if(star2.style.display == 'flex'){
        face2.style.display = 'flex';
    }

});

starImage4.addEventListener('click',  function star(){
    star4.style.display = 'flex';
       starImage4.style.display = 'none';
       face4.style.display = 'flex';

       starImage1.style.display = 'none';
       starImage2.style.display = 'none';
       starImage3.style.display = 'none'; 
       
       starImage5.style.display = 'flex'; 
   
       face1.style.display = 'none';
       face2.style.display = 'none';
       face3.style.display = 'none';
    
       face5.style.display = 'none';
   
      star1.style.display = 'flex';
       star2.style.display = 'flex';
       star3.style.display = 'flex';
   
       star5.style.display = 'none';

    });
    
    star4.addEventListener('click', function(){
        starImage4.style.display = 'flex';
        star4.style.display = 'none';
        face4.style.display = 'none';

        // face1.style.display = 'none';
        starImage5.style.display = 'flex';
        star5.style.display = 'none';
        face5.style.display = 'none';
        if(star3.style.display == 'flex'){
            face3.style.display = 'flex';
        }
    });

    starImage5.addEventListener('click',  function star(){
        star5.style.display = 'flex';
           starImage5.style.display = 'none';
           face5.style.display = 'flex';

           starImage1.style.display = 'none';
           starImage2.style.display = 'none';
           starImage3.style.display = 'none'; 
           starImage4.style.display = 'none';
          
           star1.style.display = 'flex';
           star2.style.display = 'flex';
           star3.style.display = 'flex'; 
           star4.style.display = 'flex';

          face1.style.display = 'none';
          face2.style.display = 'none';
          face3.style.display = 'none'; 
          face4.style.display = 'none';
           
               
               

        
        });
        
    star5.addEventListener('click', function(){
            starImage5.style.display = 'flex';
            star5.style.display = 'none';
            face5.style.display = 'none';

            // face1.style.display = 'none';
            // face2.style.display = 'none';
            // face3.style.display = 'none';
            // face4.style.display = 'none';
            if(star4.style.display == 'flex'){
                face4.style.display = 'flex';
            }

        });


