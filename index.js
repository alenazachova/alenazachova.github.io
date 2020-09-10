document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    console.log("Alena Zachová - CV");

    document.querySelector(".intro__mouse-opposite").addEventListener("click", (e) => {
        e.preventDefault();
        const offsetTop = 0;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    });

    document.querySelector(".intro__mouse").addEventListener("click", (e) => {
        e.preventDefault();
        const href = document.querySelector(".intro__mouse").getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    });
})