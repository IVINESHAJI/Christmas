document.addEventListener('DOMContentLoaded', () => {
    let navb = document.querySelector('.navbar');
    let prevScrollPos = 88;

    navb.style.transition = "4s";

    document.addEventListener('scroll', () => {
        let currentScrollPos = window.scrollY;

        if (prevScrollPos < currentScrollPos) {
            navb.style.display = "none";
        } 
        else {
            navb.style.display = "grid";
        }

    });
});
