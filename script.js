const taskbarTime = document.getElementById("time");
const menu = document.getElementsByClassName("menu");
const star = document.getElementById("start");
const screen = document.getElementById("screen");

//Get the time
const today = new Date();
taskbarTime.innerText = today.getHours() + ":" + today.getMinutes(); 


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


