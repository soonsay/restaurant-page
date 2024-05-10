function aboutTest() {
    console.log('About function success!')
};

let aboutTab = document.createElement("div")
aboutTab.setAttribute("id", "about");
aboutTab.classList.add('tabcontent')

let aboutText = document.createElement("div")
aboutText.classList.add('aboutText');
aboutText.innerText =
    `
    Address: Calgary, AB\n\n
    Hours of Operation:\n
    Monday: 7am-7pm\n
    Tuesday: 7am-7pm\n
    Wednesday: 7am-7pm\n
    Thursday: 7am-7pm\n
    Friday: 7am-7pm\n
    Saturday: 7am-7pm\n
    Sunday: 7am-7pm\n
    `

let mapTile = document.createElement("iframe")
mapTile.classList.add('map');
mapTile.src = "https://www.google.com/maps/embed/v1/view?zoom=10&center=51.0447%2C-114.0719&key=AIzaSyCotdnMrniY5vxPQ1qvJY3A3yS4QkWoIzY"



aboutTab.appendChild(aboutText);
aboutTab.appendChild(mapTile);

export { aboutTest, aboutTab }