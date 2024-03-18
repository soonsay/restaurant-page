function aboutTest() {
    console.log('About function success!')
};

import Background from './icon.png'

let aboutTab = document.createElement("div")
aboutTab.setAttribute("id", "about");
aboutTab.classList.add('tabcontent')
aboutTab.classList.add('hidden')
aboutTab.innerText = 'aboutTab';

export { aboutTest, aboutTab }