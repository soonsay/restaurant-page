import affogato from '../img/affogato.png'
import americano from '../img/americano.png'
import blackEye from '../img/black-eye.png'
import breve from '../img/breve.png'
import cafeAuLait from '../img/cafe-au-lait.png'
import caffeLatte from '../img/caffe-latte.png'
import cappuccino from '../img/cappuccino.png'
import cortado from '../img/cortado.png'
import doubleEspresso from '../img/double-espresso.png'
import espresso from '../img/espresso.png'
import flatWhite from '../img/flat-white.png'
import icedCoffee from '../img/iced-coffee.png'
import longBlack from '../img/long-black.png'
import longMacchiato from '../img/long-macchiato.png'
import macchiato from '../img/macchiato.png'
import mocha from '../img/mocha.png'
import redEye from '../img/red-eye.png'
import vienna from '../img/vienna.png'


///////
function menuTest() {
    console.log('Menu function success!')
};
///////


let menuTab = document.createElement("div");
menuTab.setAttribute("id", "menu");
menuTab.classList.add('tabcontent')


function createTile(item) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    for (let itemProp in item) {
        let tileDiv = document.createElement("div");

        switch(itemProp) {

            case 'picture':
                tileDiv = new Image();
                tileDiv.src = item[itemProp];
                tileDiv.classList.add('menuPic');
                break;

            case 'name':
                tileDiv.textContent = item[itemProp];
                tileDiv.classList.add('name');
                break;

            case 'description':
                tileDiv.textContent = item[itemProp];
                tileDiv.classList.add('description');
                break;

            case 'price':
                tileDiv.textContent = item[itemProp];
                tileDiv.classList.add('price');
                break;
        }
        tile.appendChild(tileDiv);
        menuTab.appendChild(tile);
    }

};

const drinks = [
    {
        'name' : 'Affogato',
        'picture': affogato,
        "description": "Affogatos are more for a dessert coffee than a drink you would find at a cafe, but they can add a fun twist to your coffee menu. They are made by pouring a shot of espresso over a scoop of vanilla ice cream to create a sweet after-meal treat.",
        "price": "$5"
    },
    {
        'name' : 'Americano',
        'picture': americano,
        "description": "Americanos are popular breakfast drinks and thought to have originated during World War II. Soldiers would add water to their coffee to extend their rations farther. The water dilutes the espresso while still maintaining a high level of caffeine.",
        "price": "$5"
    },
    {
        'name' : 'Black-eye',
        'picture': blackEye,
        "description": "The black eye is just the doubled version of the red eye and is very high in caffeine.",
        "price": "$5"
    },
    {
        'name' : 'Breve',
        'picture': breve,
        "description": "The breve provides a decadent twist on the average espresso, adding steamed half-and-half to create a rich and creamy texture.",
        "price": "$5"
    },
    {
        'name' : 'Cafe au Lait',
        'picture': cafeAuLait,
        "description": "The cafe au lait is typically made with French press coffee instead of an espresso shot to bring out the different flavors in the coffee. It is then paired with scalded milk instead of steamed milk and poured at a 50/50 ratio. ",
        "price": "$5"
    },
    {
        'name' : 'Caffe Latte',
        'picture': caffeLatte,
        "description": "The cafe au lait is typically made with French press coffee instead of an espresso shot to bring out the different flavors in the coffee. It is then paired with scalded milk instead of steamed milk and poured at a 50/50 ratio.",
        "price": "$5"
    },
    {
        'name' : 'Cappuccino',
        'picture': cappuccino,
        "description": "This creamy coffee drink is usually consumed at breakfast time in Italy and is loved in the United States as well. It is usually associated with indulgence and comfort because of its thick foam layer and additional flavorings that can be added to it.",
        "price": "$5"
    },
    {
        'name' : 'Cortado',
        'picture': cortado,
        "description": "The cortado takes the macchiato one step further by evenly balancing the espresso with warm milk in order to reduce the acidity.",
        "price": "$5"
    },
    {
        'name' : 'Espresso',
        'picture': espresso,
        "description": "The espresso, also known as a short black, is approximately 1 oz. of highly concentrated coffee. Although simple in appearance, it can be difficult to master.",
        "price": "$5"
    },
    {
        'name' : 'Double Espresso',
        'picture': doubleEspresso,
        "description": "A double espresso may also be listed as doppio, which is the Italian word for double. This drink is highly concentrated and strong.",
        "price": "$5"
    },
    {
        'name' : 'Flat White',
        'picture': flatWhite,
        "description": "A flat white also originates from New Zealand and Australia and is very similar to a cappuccino but lacks the foam layer and chocolate powder. To keep the drink creamy rather than frothy, steamed milk from the bottom of the jug is used instead of from the top.",
        "price": "$5"
    },
    {
        'name' : 'Iced Coffee',
        'picture': icedCoffee,
        "description": "Iced coffees become very popular in the summertime in the United States. The recipes do have some variance, with some locations choosing to interchange milk with water in the recipe. Often, different flavoring syrups will be added per the preference of the customer. You can even top it off with some cold foam.",
        "price": "$5"
    },
    {
        'name' : 'Long Black',
        'picture': longBlack,
        "description": "The long black is a similar coffee drink to the americano, but it originated in New Zealand and Australia. It generally has more crema than an americano.",
        "price": "$5"
    },
    {
        'name' : 'Long Macchiato',
        'picture': longMacchiato,
        "description": "Often confused with a standard macchiato, the long macchiato is a taller version and will usually be identifiable by its distinct layers of coffee and steamed milk.",
        "price": "$5"
    },
    {
        'name' : 'Macchiato',
        'picture': macchiato,
        "description": "The word macchiato means mark or stain. This is in reference to the mark that steamed milk leaves on the surface of the espresso as it is dashed into the drink. Flavoring syrups are often added to the drink according to customer preference.",
        "price": "$5"
    },
    {
        'name' : 'Mocha',
        'picture': mocha,
        "description": "The mocha is considered a coffee and hot chocolate hybrid. The chocolate powder or syrup gives it a rich and creamy flavor and cuts the acidity of the espresso.",
        "price": "$5"
    },
    {
        'name' : 'Red Eye',
        'picture': redEye,
        "description": "The red eye's purpose is to add a boost of caffeine to your standard cup of coffee.",
        "price": "$5"
    },
    {
        'name' : 'Vienna',
        'picture': vienna,
        "description": "There are a few variations on the Vienna, but one of the most common is made with two ingredients: espresso and whipped cream. The whipped cream takes the place of milk and sugar to provide a creamy texture.",
        "price": "$5"
    },

]

for (let item of drinks) {
    createTile(item);
}

export { menuTest, menuTab }