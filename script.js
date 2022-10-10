const taskbarTime = document.getElementById("time");
const menu = document.getElementsByClassName("menu");
const star = document.getElementById("start");
const screen = document.getElementById("screen");

//Get the time
const today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();
const ampm = hours >= 12 ? 'PM' : 'AM';

hours %= 12;
hours = hours || 12;
minutes = minutes < 10 ? `0${minutes}`: minutes;

taskbarTime.innerText = `${hours}:${minutes} ${ampm}`; 


//Toggle the menu
//Toggle the menu by clicking the start button
const toggleMenu = () => {
    menu[0].classList.toggle("hidden");
}
star.addEventListener('click',toggleMenu);

//Close the menu by clicking the screen
const closeMenu = () => {
    menu[0].classList.add("hidden");
}
screen.addEventListener('click',closeMenu);


