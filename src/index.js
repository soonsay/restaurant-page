import { homeTest, homeTab } from './home.js';
import { menuTest, menuTab } from './menu.js';
import { aboutTest, aboutTab } from './about.js';
import './style.css';
import Logo from '../img/CafeLogo2.png'
import Background from '../img/background-pattern.png'

// homeTest();
// menuTest();
// aboutTest();

const body = document.body;
const header = document.getElementById('navHeader')
const footer = document.getElementById('footer');
footer.innerText = 'Copyright © github.com/soonsay';


const container = document.getElementById('container');
container.classList.add("containerGrid");

const home = homeTab;
const menu = menuTab;
const about = aboutTab;


menu.style.display = "none";
about.style.display = "none";

const content = document.getElementById('content');

const myLogo = new Image();
myLogo.src = Logo;
myLogo.classList.add('logo')
header.appendChild(myLogo);


content.appendChild(homeTab);
content.appendChild(aboutTab);
content.appendChild(menuTab);


function openTab(event, tabName) {
    console.log(tabName);
    let lowerTabName = tabName.toLowerCase();
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i< tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    if (lowerTabName == 'menu' || lowerTabName == 'about'){
        document.getElementById(lowerTabName).style.display = "grid";
    } else {
        document.getElementById(lowerTabName).style.display = "block";
    }

    event.currentTarget.className += " active";
}

const nav = document.getElementById('tabs');
const tablinks = nav.children;
for (let tab of tablinks) {
    tab.classList.add('tablinks');
    tab.addEventListener("click", (e) => {
        openTab(e, e.target.innerText);
    });
}
