function homeTest() {
    console.log('Home function success!')
};

let homeTab = document.createElement("div")
homeTab.setAttribute("id", "home");
homeTab.classList.add('tabcontent')
homeTab.innerText = 'HomeTab';



export { homeTest, homeTab }