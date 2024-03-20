function menuTest() {
    console.log('Menu function success!')
};

import Background from './icon.png'

let menuTab = document.createElement("div");
menuTab.setAttribute("id", "menu");
menuTab.classList.add('tabcontent')


function createTile(item) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    for (let itemProp in item) {
        let tileDiv = document.createElement("div");
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
    },
    {
        "name": "McFlurry",
        "description": "Delicious ice cream.",
        "price": "$5"
    },
    {
        "name": "Burger",
        "description": "Delicious burger.",
        "price": "$8"
    },
    {
        "name": "McFlurry",
        "description": "Delicious ice cream.",
        "price": "$5"
    },
    {
        "name": "Burger",
        "description": "Delicious burger.",
        "price": "$8"
    },
    {
        "name": "McFlurry",
        "description": "Delicious ice cream.",
        "price": "$5"
    },
    {
        "name": "Burger",
        "description": "Delicious burger.",
        "price": "$8"
    },
    {
        "name": "McFlurry",
        "description": "Delicious ice cream.",
        "price": "$5"
    },
    {
        "name": "Burger",
        "description": "Delicious burger.",
        "price": "$8"
    },
]

for (let item of menu) {
    createTile(item);
}

export { menuTest, menuTab }