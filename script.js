const taskbarTime = document.getElementById("time");
const menu = document.getElementsByClassName("menu");
const star = document.getElementById("start");
const screen = document.getElementById("screen");

//These are the app variables
const bin = document.getElementById("bin");
const closeBin_btn = document.querySelector(".app__bin__close-btn");

const mc = document.getElementById("mc");
const closeMC_btn = document.querySelector(".app__mc__close-btn");

const note = document.getElementById("note");
const closeNote_btn = document.querySelector(".app__note__close-btn");

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


//Toggle the bin app
const openBin = () => {
    document.getElementById("app__bin").classList.remove("hidden");
};
const closeBin = () => {
    document.getElementById("app__bin").classList.add("hidden");
};

bin.addEventListener('click',openBin);
closeBin_btn.addEventListener('click', closeBin);

//Toggle the My Computer app
const openMC = () => {
    document.getElementById("app__mc").classList.remove("hidden");
};
const closeMC = () => {
    document.getElementById("app__mc").classList.add("hidden");
};

mc.addEventListener('click',openMC);
closeMC_btn.addEventListener('click', closeMC);

//Toggle the bin app
const openNote = () => {
    document.getElementById("app__note").classList.remove("hidden");
};
const closeNote = () => {
    document.getElementById("app__note").classList.add("hidden");
};

note.addEventListener('click',openNote);
closeNote_btn.addEventListener('click', closeNote);
