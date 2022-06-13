const nav = document.querySelector('nav')
const main = document.querySelector('main')
const header = document.querySelector('header')


function openMenu() {
    console.log('Open Menu')

    nav.classList.add("open")

    // EXTRA: Trap focus inside navigation using inert
    /*   
    nav.removeAttribute("inert");
    main.setAttribute("inert", true);
    header.setAttribute("inert", true);
    */

    /* 
    nav.focus() 
    */
}

function closeMenu() {
    console.log('Close Menu')
    nav.classList.remove("open")

    // EXTRA: Reset the focus trap
    /*   
    nav.setAttribute("inert", true);
    header.removeAttribute("inert");
    main.removeAttribute("inert"); 
        */
}

function shopNow() {
    window.alert("I'm ready to shop!!!")
}
