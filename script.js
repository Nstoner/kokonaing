//Menu Icon
const menuIcon = document.querySelector(".menu-icon");
const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const line3Tag = document.querySelector(".line3");
const sideBar = document.querySelector(".side-bar");


menuIcon.addEventListener("click", () => {
    if (menuIcon.classList.contains("isOpened")) {
        line1Tag.classList.remove("rotateLine1");
        line2Tag.classList.remove("hideLine2");
        line3Tag.classList.remove("rotateLine3");
        sideBar.classList.remove("active");
        menuIcon.classList.remove("isOpened");
    }else {
        line1Tag.classList.add("rotateLine1");
        line2Tag.classList.add("hideLine2");
        line3Tag.classList.add("rotateLine3");
        sideBar.classList.add("active");
        menuIcon.classList.add("isOpened");
    }
})