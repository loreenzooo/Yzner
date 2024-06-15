let itemList =  document.querySelector('.items');
let cart = document.querySelector('.cart');
let cartList = document.querySelector('.cart-list');
let total = document.querySelector('.total');
let tax = document.querySelector('.tax');
let subtotal = document.querySelector('.subtotal');


let items = [
    {
        id: 1,
        name: 'Black Hoodie',
        image: 'C:/Users/laurence/OneDrive/Desktop/.NET Website/MyCodes/.netWebsite/.netWebsite/shopping-cart-app/merch/Blackhoodie.png',
        price: 1447
    },
    {
        id: 2,
        name: 'Block Boxy',
        image: 'C:/Users/laurence/OneDrive/Desktop/.NET Website/MyCodes/.netWebsite/.netWebsite/shopping-cart-app/merch/BlossomoftheNightBlackBoxy.png',
        price: 950
    },

    {
        id: 3,
        name: 'Terry Polo',
        image: 'C:/Users/laurence/OneDrive/Desktop/.NET Website/MyCodes/.netWebsite/.netWebsite/shopping-cart-app/merch/FrenchTerryQuarterZipPolo.png',
        price: 500
    },
    {
        id: 4,
        name: 'Fullbutton Polo',
        image: 'C:/Users/laurence/OneDrive/Desktop/.NET Website/MyCodes/.netWebsite/.netWebsite/shopping-cart-app/merch/fullbuttonpolo.png',
        price: 450
    },
    {
        id: 5,
        name: 'Quarterzip Terry',
        image: 'C:/Users/laurence/OneDrive/Desktop/.NET Website/MyCodes/.netWebsite/.netWebsite/shopping-cart-app/merch/quarterzipterry.png',
        price: 850
    },
    {
        id: 6,
        name: 'Pullover Acid Gray',
        image: 'C:/Users/laurence/OneDrive/Desktop/.NET Website/MyCodes/.netWebsite/.netWebsite/shopping-cart-app/merch/pulloveracidgray.png',
        price: 1000
    },
    {
        id: 7,
        name: 'Paradise Fatigue',
        image: 'C:/Users/laurence/OneDrive/Desktop/.NET Website/MyCodes/.netWebsite/.netWebsite/shopping-cart-app/merch/ParadiseFatigue.png',
        price: 1300
    },
    {
        id: 8,
        name: 'Rockstar Classic',
        image: 'C:/Users/laurence/OneDrive/Desktop/.NET Website/MyCodes/.netWebsite/.netWebsite/shopping-cart-app/merch/RockstarClassic.png',
        price: 750
    },
    {
        id: 9,
        name: 'Terry Sleeves',
        image: 'C:/Users/laurence/OneDrive/Desktop/.NET Website/MyCodes/.netWebsite/.netWebsite/shopping-cart-app/merch/terrylongsleeves.png',
        price: 756
    },
    {
        id: 10,
        name: 'Adios G',
        image: 'C:/Users/laurence/OneDrive/Desktop/.NET Website/MyCodes/.netWebsite/.netWebsite/shopping-cart-app/merch/adiosg.png',
        price: 450
    },
    {
        id: 11,
        name: 'Global Unity',
        image: 'C:/Users/laurence/OneDrive/Desktop/.NET Website/MyCodes/.netWebsite/.netWebsite/shopping-cart-app/merch/globalunity.png',
        price: 100
    },
    {
        id: 12,
        name: 'Realdeal Shirt',
        image: 'C:/Users/laurence/OneDrive/Desktop/.NET Website/MyCodes/.netWebsite/.netWebsite/shopping-cart-app/merch/realdeal.png',
        price: 1250
    }
];


function initItem() {
    items.forEach((value, key) => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('style', 'width: 10rem;');
        card.innerHTML = `
            <img src="${value.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-title text-center">${value.name}</p>
                <p class="card-text text-center">Price: ${value.price}</p>
                <button class="add-to-cart btn btn-dark form-control" onclick="addToCart(${key})">Add to Cart</button>
            </div>`;
        itemList.appendChild(card);
    });
}


initItem();

let cartLists = [];

function addToCart(key) {   
    if (cartLists[key] == null) {
        cartLists[key] = JSON.parse(JSON.stringify(items[key]));
        cartLists[key].quantity = 1;
    }
    reloadCart();
}



function reloadCart() {
    cartList.innerHTML = '';
    let totalPrice = 0;
    cartLists.forEach((value, key) => {
        totalPrice = totalPrice + value.price;

        if (value != null) {
            let listItem = document.createElement('li');
            listItem.setAttribute('class', 'list-group-item');
            listItem.innerHTML = `
                <div><img src="${value.image}" style="width: 80px"/></div>
                <div><h5 class="mt-1">${value.name}</h5></div>
                <div><h6 class="mt-2" style = color:black;>${value.price.toLocaleString()}</h6></div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count m-2">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            cartList.appendChild(listItem);
        }
    });

    
    subtotal.innerText = totalPrice.toLocaleString();
    tax.innerText = (totalPrice * 0.12).toLocaleString(); 
    total.innerText = (totalPrice + parseFloat(tax.innerText)).toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete cartLists[key];
    } else {
        cartLists[key].quantity = quantity;
        cartLists[key].price = quantity * items[key].price;
    }
    reloadCart(); 
}

function clearCart() {
    cartLists = [];
    reloadCart();
}



document.getElementById("checkoutBtn").addEventListener("click", function(){
if (cartLists == 0) {
    alert("You need to pick our products first!");
}
else{
    window.open('C:/Users/laurence/OneDrive/Desktop/.NET Website/MyCodes/.netWebsite/.netWebsite/payment1.html');
   clearCart();
}
});                         