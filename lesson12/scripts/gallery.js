document.querySelector(".turisticCard").addEventListener("mouseover", mouseOver);
document.querySelector(".turisticCard").addEventListener("click", mouseOut);

function mouseOver() {
    document.querySelector("turisticCard").classList.toggle(".atun")
}

function mouseOut() {
    document.getElementById("turisticCard").style.color = "white";
}