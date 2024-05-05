const btnFull = document.querySelector(".full")
const popupFull = document.querySelector(".popup-full")

const closeFull = document.getElementById("close-full")

btnFull.onclick = function(){
    popupFull.style.display = "flex";
}

closeFull.onclick = function(){
    popupFull.style.display = "none";
}


// Homme

const btnFront = document.querySelector(".front")
const popupFront = document.querySelector(".popup-front")

const closeFront = document.getElementById("close-front")

btnFront.onclick = function(){
    popupFront.style.display = "flex";
}

closeFront.onclick = function(){
    popupFront.style.display = "none";
}