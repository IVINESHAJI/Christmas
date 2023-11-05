let optclicked = false;

document.addEventListener("DOMContentLoaded", () => {
    let red = document.querySelector('.redline');
    let optclick = document.querySelector('.dropdown');
    red.addEventListener('click',() => {
        if (!optclicked) {
            optclicked = true;
            optclick.style.display = "block";

        }

        else {
            optclicked = false;
            optclick.style.display = "none";
        }

    });
});