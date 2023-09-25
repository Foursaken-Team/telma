const bukamenu = () => {
    containerMenu.style.display = "block";
    backgroundMenu.style.display = "block";
};

const tutupmenu = () => {
    containerMenu.style.display = "none";
    backgroundMenu.style.display = "none";
};

window.addEventListener("load", () => {
    const containerMenu = document.querySelector(".container-menu");
    const backgroundMenu = document.querySelector(".background-menu");

    removeStyleProperty();
    const kontenH3 = document.querySelector(".konten h3");
    const kartuArtikel = document.querySelectorAll(".artikel .kartu-artikel");
    const artikel = document.querySelector(".artikel");

    function removeStyleProperty() {
        if (window.innerWidth > 768) {
            containerMenu.style.removeProperty("display");
            backgroundMenu.style.removeProperty("display");
        }
    }

    window.addEventListener("resize", removeStyleProperty);
    let h3anim = false;
    let kartuAnim = false;

    function isElInVP(el) {
        const rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const animate = () => {
        if (!h3anim && isElInVP(kontenH3)) {
            kontenH3.classList.add("swing");
            h3anim = true;
        }

        if (!kartuAnim && isElInVP(kartuArtikel[0])) {
            kartuArtikel.forEach((kA) => {
                kA.classList.add("animasi-kartu-artikel");
            })
            kartuAnim = true;
        }
    };

    animate();
    window.addEventListener("scroll", animate);
});
