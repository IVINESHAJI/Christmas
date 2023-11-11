let optclicked = false;
let clicked = false;

document.addEventListener("DOMContentLoaded", () => {

    setInterval(() => {

        let red = document.querySelector('.redline');
        let optclick = document.querySelector('.dropdown');
        let close = document.querySelector('.close');

        red.addEventListener('click',() => {
            if (!optclicked) {
                optclicked = true;
                optclick.style.right = "0";
                red.style.display = "none";
                close.style.display = "block";
            }   
        });
            
        close.addEventListener("click", () => {
            if(optclicked) {
                optclicked = false;
                optclick.style.right = "-20vw";
                red.style.display = "block";
                close.style.display = "none";
            }
        });

    }, 1000);   
    
    
});

