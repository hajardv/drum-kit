

function hideAllImages() {
    const images = document.querySelectorAll("img");
    images.forEach(image => {
      image.style.display = "none"; // Cache toutes les images
    });
  }
  

function func(){
    hideAllImages();
   
    const image = document.getElementById("im");
    image.style.display="block"
    
    const sound = document.getElementById('sound');
    image.currentTime = 1
    }
    function crash(){
        hideAllImages();
       
        const image = document.getElementById("tom1");
        image.style.display="block"
        
        const temo = document.getElementById('sound1');
       temo.play();
       image.currentTime = 1
        }
        function tom1(){
            hideAllImages();
            const image = document.getElementById("tom2");
            image.style.display="block"
            
            image.currentTime = 1
            const temo = document.getElementById('sound2');
           temo.play();  sound.currentTime = 0
          
          
            }
            function tom2(){
                hideAllImages();
                const image = document.getElementById("tom3");
                image.style.display="block"
                
                const temo = document.getElementById('sound3');
               temo.play();
                image.currentTime =1
                }
                function tom3(){
                    hideAllImages();

                    const image = document.getElementById("tom4");
                    image.style.display="block"
                    
                    const temo = document.getElementById('sound4');
                   temo.play();
                   image.currentTime = 1
                    }
                    function tom4(){
                        hideAllImages();
       
                        const image = document.getElementById("tom5");
                        image.style.display="block"
                        
                        const temo = document.getElementById('sound5');
                       temo.play();
                        image.currentTime = 1
                        }
                        function tom5(){
                            hideAllImages();
       
                            const image = document.getElementById("tom6");
                            image.style.display="block"
                            
                            const temo = document.getElementById('sound6');
                           temo.play();
                             image.currentTime =1
                            }