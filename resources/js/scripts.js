

function openMenu() {
    let menuItems = document.getElementById("menuItems");
    menuItems.classList.toggle("menuHidden");
    let menuTrigger = document.getElementById("menuTrigger");
    menuTrigger.classList.toggle("menuHidden");
}
function resizeDataStudio() {
    let widowWidth = window.innerWidth;
    let dsHeight = widowWidth * 0.7666;
    let dsIframe = document.getElementsByClassName("dsIframe");
    let i;
    for (i = 0; i < dsIframe.length; i++) {
        dsIframe[i].style.height = dsHeight;
    }
}

window.onload = resizeDataStudio;
window.onresize = resizeDataStudio;