function aboutTest() {
    console.log('About function success!')
};

let aboutTab = document.createElement("div")
aboutTab.setAttribute("id", "about");
aboutTab.classList.add('tabcontent')
aboutTab.innerText = 'aboutTab';

export { aboutTest, aboutTab }