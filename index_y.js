function hideAllImages() {
    const images = document.querySelectorAll("img");
    images.forEach(image => {
      image.style.display = "none"; // Cache toutes les images
    });
  }

document.addEventListener("keypress", (key)=>{listener(key.key)});

function listener(key_p){
    switch (key_p){
        case "w":
            document.getElementById('sound0').play();
            func_img('tom0');
            break;
        case "a":
            new Audio("./sounds/kick-bass.mp3").play();
            func_img('tom1');
            break;
        case "s":
            document.getElementById('sound2').play();
            func_img('tom2');
            break;
        case "d":
            document.getElementById('sound3').play();
            func_img('tom3');
            break;
        case "j":
            document.getElementById('sound4').play();
            func_img('tom4');
            break;
        case "k":
            document.getElementById('sound5').play();
            func_img('tom5');
            break;
        case "l":
            document.getElementById('sound6').play();
            func_img('tom6');
            break;
        default: console.log(key);
    }
}

function func_img(id_img){
    hideAllImages();
    const image = document.getElementById(id_img);
    image.style.display="block"
}

function func(id_img, sounds){
    hideAllImages();
    const image = document.getElementById(id_img);
    image.style.display="block"
    
    const sound = document.getElementById(sounds);
    sound.play()
}