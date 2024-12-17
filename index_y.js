function hideAllImages() {
    const images = document.querySelectorAll("img");
    images.forEach(image => {
      image.style.display = "none"; // Cache toutes les images
    });
  }

document.addEventListener("keypress", (key)=>{func(key.key)});

function func_img(id_img){
    hideAllImages()
    const img = document.getElementById(id_img);
    img.style.display = "block";
}

function func(sounds){
    hideAllImages();
    switch (sounds){
        case "w":
            new Audio("./sounds/kick-bass.mp3").play();
            func_img('tom0');
            break;
        case "a":
            new Audio("./sounds/tom-1.mp3").play();
            func_img('tom1');
            break;
        case "s":
            new Audio("./sounds/tom-2.mp3").play();
            func_img('tom2');
            break;
        case "d":
            new Audio("./sounds/tom-3.mp3").play();
            func_img('tom3');
            break;
        case "j":
            new Audio("./sounds/tom-4.mp3").play();
            func_img('tom4');
            break;
        case "k":
            new Audio("./sounds/snare.mp3").play();
            func_img('tom5');
            break;
        case "l":
            new Audio("./sounds/kick-bass.mp3").play();
            func_img('tom6');
            break;
        default: console.log(key);
    }
}