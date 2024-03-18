function homeTest() {
    console.log('Home function success!')
};

import Background from './icon.png'

let homeTab = document.createElement("div")
homeTab.setAttribute("id", "home");
homeTab.classList.add('tabcontent')
homeTab.innerText = 'HomeTab';

export { homeTest, homeTab }