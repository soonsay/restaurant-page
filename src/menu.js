function menuTest() {
    console.log('Menu function success!')
};

import Background from './icon.png'

let menuTab = document.createElement("div");
menuTab.setAttribute("id", "menu");
menuTab.classList.add('tabcontent')
menuTab.classList.add('hidden')
menuTab.innerText = 'menuTab';

function createTile(item) {
    const tile = document.createElement("div");
    let tileDiv = document.createElement("div");
    for (let itemProp in item) {
        switch(itemProp) {
            case 'name':
                tileDiv.id = 'name'
                tileDiv.textContent = item[itemProp];
                break;

            case 'description':
                tileDiv.id = 'description';
                tileDiv.textContent = item[itemProp];
                break;

            case 'price':
                tileDiv.id = 'price';
                tileDiv.textContent = item[itemProp];
                break;
        }
        console.log(tileDiv.id);
        tile.appendChild(tileDiv);
        menuTab.appendChild(tile);
    }

};

const menu = [
    {
        "name": "McFlurry",
        "description": "Delicious ice cream.",
        "price": "$5"
    },
    {
        "name": "Burger",
        "description": "Delicious burger.",
        "price": "$8"
    }
]

for (let item of menu) {
    createTile(item);
}

export { menuTest, menuTab }