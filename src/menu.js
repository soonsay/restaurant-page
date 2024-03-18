function menuTest() {
    console.log('Menu function success!')
};

import Background from './icon.png'

let menuTab = document.createElement("div");
menuTab.setAttribute("id", "menu");
menuTab.classList.add('tabcontent')
menuTab.classList.add('hidden')
menuTab.innerText = 'menuTab';

export { menuTest, menuTab }