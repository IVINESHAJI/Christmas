let optclicked = false;
let clicked = false;

document.addEventListener("DOMContentLoaded", () => {

    let red = document.querySelector('.redline');
    let optclick = document.querySelector('.dropdown');
    let close = document.querySelector('.close');
    setInterval(() => {


        red.addEventListener('click',() => {
            if (!optclicked) {
                optclicked = true;
                optclick.style.right = "0";
                red.style.display = "none";
                close.style.display = "block";
                optclick.addEventListener('mouseleave', () => {
                    optclick.style.right = "-20vw";
                    optclicked = false;
                    red.style.display = "block";
                    close.style.display = "none";
                });
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

    var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 5000);
    
    let close_1 = document.querySelector(".close_1");

    close_1.addEventListener('click', () => {
        window.location.href = "christmas.html";
    });
});

