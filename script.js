const taskbarTime = document.getElementById("time");
const menu = document.getElementsByClassName("menu");
const star = document.getElementById("start");
const screen = document.getElementById("screen");

//These are the app variables
const bin = document.getElementById("bin");
const closeBin_btn = document.querySelector(".app__bin__close-btn");
const app_bin = document.getElementById("app__bin");

const mc = document.getElementById("mc");
const closeMC_btn = document.querySelector(".app__mc__close-btn");
const app_mc = document.getElementById("app__mc");

const note = document.getElementById("note");
const closeNote_btn = document.querySelector(".app__note__close-btn");
const app_note = document.getElementById("app__note");

//Get the time
/**
 * Get the current time for the clock
 */
const today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();
const ampm = hours >= 12 ? 'PM' : 'AM';

hours %= 12;
hours = hours || 12;
minutes = minutes < 10 ? `0${minutes}`: minutes;

taskbarTime.innerText = `${hours}:${minutes} ${ampm}`; 


//Toggle the menu
/**
 * Toggle the menu by clicking the start button 
 */
const toggleMenu = () => {
    menu[0].classList.toggle("hidden");
}
star.addEventListener('click',toggleMenu);

//Close the menu by clicking the screen
/**
 * This will automatically closes the menu
 */
const closeMenu = () => {
    menu[0].classList.add("hidden");
}
screen.addEventListener('click',closeMenu);


//Toggle the app
const openApp = (app) => {
    app.classList.remove("hidden");
};
const closeApp = (app) => {
    app.classList.add("hidden");
};

bin.addEventListener('click',() => openApp(app_bin));
closeBin_btn.addEventListener('click', () => closeApp(app_bin));

mc.addEventListener('click',() => openApp(app_mc));
closeMC_btn.addEventListener('click', () => closeApp(app_mc));

note.addEventListener('click',() => openApp(app_note));
closeNote_btn.addEventListener('click', () => closeApp(app_note));

