const input = document.getElementById('input');
const search = document.getElementById('button');
const cards = document.getElementById('cards');
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const footer = document.getElementById('footer');
const templateFooter = document.getElementById('template-footer').content;
const canvas = document.getElementById('canvas');
const fragment = document.createDocumentFragment();
const templateCart = document.getElementById('template-cart').content;
const notFound = document.getElementById('not-found');
const showPages = document.getElementById('show-pages');
let cart = {};


document.addEventListener('DOMContentLoaded', ()  =>{
    getProducts();
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'));
        paintCart();
    }
});

const products = [
    {
      "price": 120,
      "id": 1,
      "title": "Café helado con salsa de chocolate amargo",
      "thumbnailUrl": "images/img1.png",
      "category": "Café"
    },
    {
      "price": 320,
      "id": 2,
      "title": "Café con leche helado con salsa de chocolate",
      "thumbnailUrl": "images/img2.png",
      "category": "Café"
    },
    {
      "price": 160,
      "id": 3,
      "title": "Jugo De Té Batido De Café Con Leche",
      "thumbnailUrl": "images/img3.png",
      "category": "Delicatessen y Tortas"
    },
    {
      "price": 170,
      "id": 4,
      "title": "Frappé oreo con crema batida",
      "thumbnailUrl": "images/img5.png",
      "category": "Delicatessen y Tortas"
    },
    {
      "price": 520,
      "id": 5,
      "title": "Frappe de chocolate con amareti",
      "thumbnailUrl": "images/img10.png",
      "category": "Delicatessen y Tortas"
    },
    {
      "price": 400,
      "id": 6,
      "title": "Frappé chocolate con kinder",
      "thumbnailUrl": "images/img5.png",
      "category": "Frapuccinos"
    },
    {
      "price": 25,
      "id": 7,
      "title": "Té helado de sabor durazno y naranja",
      "thumbnailUrl": "images/img9.png",
      "category": "Frapuccinos"
    },
    {
      "price": 369,
      "id": 7,
      "title": "Té helado de sabor algarroba y cacao",
      "thumbnailUrl": "images/img8.png",
      "category": "Frapuccinos"
    },
    {
      "price": 450,
      "id": 8,
      "title": "Té helado de sabor algarroba y cacao",
      "thumbnailUrl": "images/img8.png",
      "category": "Frapuccinos"
    },
    {
      "price": 290,
      "id": 9,
      "title": "Té helado de sabor algarroba y cacao",
      "thumbnailUrl": "images/img4.png",
      "category": "Frapuccinos"
    },
    {
      "price": 320,
      "id": 10,
      "title": "Té helado de sabor algarroba y cacao",
      "thumbnailUrl": "images/img12.png",
      "category": "Frapuccinos"
    },
    {
      "price": 200,
      "id": 12,
      "title": "Té helado de sabor algarroba y cacao",
      "thumbnailUrl": "images/img13.png",
      "category": "Bakery"
    },
    {
      "price": 210,
      "id": 13,
      "title": "Té helado de sabor algarroba y cacao",
      "thumbnailUrl": "images/img14.png",
      "category": "Bakery"
    },
    {
      "price": 500,
      "id": 14,
      "title": "Té helado de sabor algarroba y cacao",
      "thumbnailUrl": "images/img11.png",
      "category": "Sándwiches"
    },
    {
      "price": 550,
      "id": 15,
      "title": "Té helado de sabor algarroba y cacao",
      "thumbnailUrl": "images/img15.png",
      "category": "Sándwiches"
    },
    {
      "price": 550,
      "id": 15,
      "title": "Té helado de sabor algarroba y cacao",
      "thumbnailUrl": "images/img15.png",
      "category": "Sándwiches"
    }
  ]


/*searching*/  //FALTA LIMPIAR EL INPUT
const filtrarProducts = () =>{
    cards.innerHTML = "";
    let textInput = input.value.toLowerCase();
    if(textInput != ""){
    for(let product of products){
        let title = product.title.toLowerCase();
        if(title.indexOf(textInput) !== -1){
            templateCard.querySelector('h4').textContent = product.title;
            templateCard.querySelector('span').textContent = product.price;
            templateCard.querySelector("img").setAttribute('src', product.thumbnailUrl);
            templateCard.querySelector('.choose').dataset.id = product.id;
            templateCard.querySelector(".card").setAttribute('category', product.category);
            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        }
        cards.appendChild(fragment);
    }
    if(cards.innerHTML === ""){
        notFound.innerHTML += `
        <li>No se encontraron resultados</li>
        <img src="ProyectoCoder/images/img5.png"/>
        `
    }
    seeAll();
    input.value = "";
    }else{
        showCards(products)
    }
}



function seeAll(){
    const button = document.createElement('button');
    button.textContent = 'ver todo';
    button.classList.add('btn-green');
    showPages.appendChild(button);
    button.addEventListener('click', function(){
        cards.innerHTML = "";
        showCards(products);
        showPages.innerHTML = "";
        notFound.innerHTML = "";
    });
}

search.addEventListener('click', filtrarProducts);















// -Get the products of the fake api (api.json).
const getProducts = async () => {
    try{
        const result = await fetch('api.json');
        const data = await result.json();
        showCards(data);
    }catch(error){
        console.log(error)
    }
}



//button.addEventListener('click', filtrarProducts);



// - Event -> when the customer press on 'sellecionar' button on the card, is added a product at the cart.
cards.addEventListener('click', e =>{
    addToCart(e);
})



items.addEventListener('click', e =>{
    btnAction(e);
});



// -Take the data of the fake api and is put that information on the card template



const addToCart = e =>{
    if(e.target.classList.contains('choose')){
        setCart(e.target.parentElement);
        changeColorCart();
    }
    
    e.stopPropagation();
}

const changeColorCart = () =>{
    let cart = document.getElementById('Little-cart');
        cart.classList.remove('fa-shopping-cart');
        cart.classList.add('fa-cart-plus');
        cartPlus = document.getElementsByClassName('fa-cart-plus')[0];
        cartPlus.style.color = '#A993BF';
    }
/** 
 const revertColorCart = () =>{
     let cart = document.getElementById('Little-cart');
     cart.classList.remove('fa-cart-plus');
     cart.classList.add('fa-shopping-cart');
     cartPlus = document.getElementsByClassName('fa-shopping-cart')[0];
     cartPlus.style.color = '#017143';
    }
    */

   const showCards = data =>{
       data.forEach(product =>{
           templateCard.querySelector('h4').textContent = product.title;
                       templateCard.querySelector('span').textContent = product.price;
                       templateCard.querySelector("img").setAttribute('src', product.thumbnailUrl);
                       templateCard.querySelector('.choose').dataset.id = product.id;
                       templateCard.querySelector(".card").setAttribute('category', product.category);
                       const clone = templateCard.cloneNode(true);
                       fragment.appendChild(clone);
       })
           cards.appendChild(fragment);
   }
   
   // -Is added products of the cart that take the values ​​of the card template
   const setCart = object =>{
       const product = {
           id : object.querySelector('.choose').dataset.id,
           title: object.querySelector('h4').textContent,
           price: object.querySelector('.price').textContent,
           amount: 1
        }
        
        if(cart.hasOwnProperty(product.id)){
            product.amount = cart[product.id].amount + 1;
        }
        cart[product.id] = {...product};
    paintCart();
}


// -Means that this function will show the products added and the 'canvas' section.
const paintCart = () =>{
    items.innerHTML = "";
    Object.values(cart).forEach(product =>{
        templateCart.querySelectorAll('td')[0].textContent = product.title;
        templateCart.querySelectorAll('td')[1].textContent = product.amount;
        templateCart.querySelector('.btn-info').dataset.id = product.id;
        templateCart.querySelector('.btn-danger').dataset.id = product.id;
        templateCart.querySelector('span').textContent = product.price * product.amount;
        const clone = templateCart.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
    paintFooter();
    
    localStorage.setItem('cart', JSON.stringify(cart));
}

// -Means that this function will show the slash to delete and show the amount of the products on the 'canvas' section.
const paintFooter = () =>{
    footer.innerHTML = "";
    if(Object.keys(cart).length === 0){
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - ¡Comenzá a comprar <i class="far fa-smile"></i>!</th>`
        return
    }
    const nAmount = Object.values(cart).reduce((acc, {amount}) => acc + amount ,0)
    const nPrice = Object.values(cart).reduce((acc, {amount, price}) => acc + amount*price ,0)
    
    templateFooter.querySelectorAll('td')[0].textContent = nAmount;
    templateFooter.querySelector('span').textContent = nPrice;
    
    const clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);
    
    footer.appendChild(fragment);
    
    const btnDeleteAll = document.getElementById('vaciar-carrito');
    btnDeleteAll.addEventListener('click', () =>{
        cart = {};
        paintCart();
    })
}

const btnAction = e =>{
    e.target;
    // -Action -> increase the amount 
    if(e.target.classList.contains('btn-info')){
        const product = cart[e.target.dataset.id];
        product.amount ++;
        cart[e.target.dataset.id] = {...product};
        paintCart();
    }
    // -Action -> decrease the amount
    if(e.target.classList.contains('btn-danger')){
        const product = cart[e.target.dataset.id];
        product.amount --;
        if(product.amount === 0){
            delete cart[e.target.dataset.id];
        }
        paintCart();
    }
    e.stopPropagation();
}




/*PAGINATION*/

/*
function getPagination(data){
    const showPages = document.getElementById('show-pages');
    let pages = Math.ceil(data.length/4);
    let start = 0;
    for(let n=0; n < pages; n++){
        const button = document.createElement('button');
        button.textContent = n + 1;
        button.className = "btn btn-primary mx-1";
        showPages.appendChild(button);
        button.setAttribute('click', '"showCards(\'' + start + '\')');
        button.addEventListener('click', function(){
            showCards(start);
        });
        start +=4;  
    }
}
*/






