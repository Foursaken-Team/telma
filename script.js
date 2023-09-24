let containerMenu;
let backgroundMenu;

window.addEventListener("load", () => {
    containerMenu = document.querySelector(".container-menu");
    backgroundMenu = document.querySelector(".background-menu");
    removeStyleProperty();
});

const bukamenu = () => {
    containerMenu.style.display = "block";
    backgroundMenu.style.display = "block";
};

const tutupmenu = () => {
    containerMenu.style.display = "none";
    backgroundMenu.style.display = "none";
};

function removeStyleProperty() {
    if (window.innerWidth > 768) {
        containerMenu.style.removeProperty("display");
        backgroundMenu.style.removeProperty("display");
    }
}
window.addEventListener("resize", removeStyleProperty);
