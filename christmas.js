let optclicked = false;

document.addEventListener("DOMContentLoaded", () => {

    let red = document.querySelector('.redline');
    let optclick = document.querySelector('.dropdown');
    let close = document.querySelector('.close');
    red.addEventListener('click',() => {
        if (!optclicked) {
            optclicked = true;
            optclick.style.display = "block";
            red.style.display = "none";
            close.style.display = "block";
        }

    });

    close.addEventListener("click", () => {
        if(optclicked) {
            optclicked = false;
            optclick.style.display = "none";
            red.style.display = "block";
            close.style.display = "none";
        }
    });


});
