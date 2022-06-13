const nav = document.querySelector('nav')
const main = document.querySelector('main')
const header = document.querySelector('header')
const navHeading = document.querySelector('#navHeading')


function openMenu() {
    console.log('Open Menu')

    // Toggle CSS Class for styling
    nav.classList.add("open")

    // INERT: Trap focus inside navigation using inert
    nav.removeAttribute("inert");
    main.setAttribute("inert", true);
    header.setAttribute("inert", true);

    // TODO 3: Teleport User Focus to nav on click
    /* nav.focus() */
    navHeading.focus()
}

function closeMenu() {
    console.log('Close Menu')

    // Toggle CSS Class for styling
    nav.classList.remove("open")

    // INERT: Reset the focus trap
    nav.setAttribute("inert", true);
    header.removeAttribute("inert");
    main.removeAttribute("inert");
}

function shopNow() {
    window.alert("I'm ready to shop!!!")
}
