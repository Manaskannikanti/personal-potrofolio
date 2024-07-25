// Selecting the menu icon, navbar, sections, and navigation links
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav ul li a');

// Adding click event listener to the menu icon
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggles the 'bx-x' class for the menu icon
    navbar.classList.toggle('active'); // Toggles the 'active' class for the navbar
};

// Adding scroll event listener to the window
window.onscroll = () => {
    let top = window.scrollY; // Get the current scroll position

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Offset for the section
        let height = sec.offsetHeight; // Height of the section
        let id = sec.getAttribute('id'); // Get the id of the section

        // Check if the current scroll position is within the section
        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active'); // Remove 'active' class from all nav links
            });
            document.querySelector(`header nav ul li a[href*='${id}']`).classList.add('active'); // Add 'active' class to the current section link
        }
    });
};
