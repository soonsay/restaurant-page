import { homeTest, homeTab } from './home.js';
import { menuTest, menuTab } from './menu.js';
import { aboutTest, aboutTab } from './about.js';
import './style.css';
import Icon from './icon.png';

homeTest();
menuTest();
aboutTest();

const body = document.body;

const container = document.getElementById('container');
container.classList.add("containerGrid");

const home = homeTab;
const menu = menuTab;
const about = aboutTab;

const content = document.getElementById('content');



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

    document.getElementById(lowerTabName).style.display = "block";
    event.currentTarget.className += " active";
}

const nav = document.getElementById('tabs');
const tabs = nav.children;
for (let tab of tabs) {
    tab.classList.add('tablinks');
    tab.addEventListener("click", (e) => {
        openTab(e, e.target.innerText);
    });
}
