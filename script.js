let show = true;

var menuSection = document.querySelector(".menu-section")
var menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () =>{
    menuSection.classList.toggle("on", show)
    show = !show;
})