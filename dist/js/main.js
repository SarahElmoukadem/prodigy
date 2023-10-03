window.onscroll = function () {
    const mainNav = document.getElementById('roto');
    // const upbtn = document.getElementById("upBtn");
    if (mainNav) {
        if (window.pageYOffset > 1) {
            mainNav.classList.add("active");
            // upbtn.classList.add("active");
        } else {
            mainNav.classList.remove("active");
            // upbtn.classList.remove("active");
        }
    }
}