// Make the top left text "Maxim Zabilo" interactable by the user
// This means when the user presses on one of the letters just in the string "xim Zabilo"
// it will switch to red if blue and to blue if red
// just that part of the string because the "Ma" will always be red
var letters = Array.from(document.querySelectorAll(".nav-main h3 .blue")); // grabs just the "xim Zabilo" part of the string
letters.map(a => a.addEventListener('click', () => a.classList.toggle('blue'))); // add an event listener to toggle the blue class

function toggleBlue() {
    this.classList.toggle('blue');
}

// Could also make an option to switch color schemes for the page?
// I need to make another good color scheme in that case