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
const pagination = document.getElementById('pagination');
const card = document.getElementById('card');
let amountCart = document.getElementById('amount-cart');
let cart = {};
let start = 0;
document.addEventListener('DOMContentLoaded', ()  =>{
    showCards(start);
    getPagination();
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
      "thumbnailUrl": "../images/img1.png",
      "category": "Café"
    },
    {
      "price": 320,
      "id": 2,
      "title": "Café con leche helado con salsa de chocolate",
      "thumbnailUrl": "../images/img2.png",
      "category": "Café"
    },
    {
      "price": 160,
      "id": 3,
      "title": "Jugo De Té Batido De Café Con Leche",
      "thumbnailUrl": "../images/img3.png",
      "category": "Delicatessen y Tortas"
    },
    {
      "price": 170,
      "id": 4,
      "title": "Frappé oreo con crema batida y salsa kinder",
      "thumbnailUrl": "../images/img5.png",
      "category": "Delicatessen y Tortas"
    },
    {
      "price": 520,
      "id": 5,
      "title": "Frappe de chocolate con amareti y salsa kinder",
      "thumbnailUrl": "../images/img10.png",
      "category": "Delicatessen y Tortas"
    },
    {
      "price": 400,
      "id": 6,
      "title": "Frappé chocolate con kinder y salsa kinder",
      "thumbnailUrl": "../images/img5.png",
      "category": "Frapuccinos"
    },
    {
      "price": 25,
      "id": 7,
      "title": "Té helado de sabor durazno y naranja",
      "thumbnailUrl": "../images/img9.png",
      "category": "Frapuccinos"
    },
    {
      "price": 369,
      "id": 7,
      "title": "Té helado de sabor algarroba y cacao",
      "thumbnailUrl": "../images/img8.png",
      "category": "Frapuccinos"
    },
    {
      "price": 450,
      "id": 8,
      "title": "Té helado de sabor algarroba y cacao",
      "thumbnailUrl": "../images/img8.png",
      "category": "Frapuccinos"
    },
    {
      "price": 290,
      "id": 9,
      "title": "Té helado de sabor algarroba y cacao",
      "thumbnailUrl": "../images/img4.png",
      "category": "Frapuccinos"
    },
    {
      "price": 320,
      "id": 10,
      "title": "Té helado de sabor algarroba y cacao",
      "thumbnailUrl": "../images/img12.png",
      "category": "Frapuccinos"
    },
    {
      "price": 200,
      "id": 12,
      "title": "Té helado de sabor algarroba y cacao",
      "thumbnailUrl": "../images/img13.png",
      "category": "Bakery"
    },
    {
      "price": 210,
      "id": 13,
      "title": "Té helado de sabor algarroba y cacao",
      "thumbnailUrl": "../images/img17.png",
      "category": "Bakery"
    },
    {
      "price": 500,
      "id": 14,
      "title": "Té helado de sabor algarroba y cacao",
      "thumbnailUrl": "../images/img11.png",
      "category": "Sándwiches"
    },
    {
      "price": 550,
      "id": 15,
      "title": "Té helado de sabor algarroba y cacao",
      "thumbnailUrl": "../images/img15.png",
      "category": "Sándwiches"
    },
    {
      "price": 550,
      "id": 16,
      "title": "Té helado de sabor algarroba y cacao",
      "thumbnailUrl": "../images/img15.png",
      "category": "Sándwiches"
    },
    {
        "price": 320,
        "id": 17,
        "title": "Café con leche helado con salsa de chocolate",
        "thumbnailUrl": "../images/img16 (1).png",
        "category": "Delicatessen y Tortas"
      },
      {
        "price": 320,
        "id": 18,
        "title": "Café con leche helado con salsa de chocolate",
        "thumbnailUrl": "../images/img16 (2).png",
        "category": "Delicatessen y Tortas"
      }
  ]

/*searching*/  
const searchProducts = () =>{
    cards.innerHTML = "";
    let textInput = input.value.toLowerCase();
    if(textInput != ""){
    for(let product of products){
        let title = product.title.toLowerCase();
        if(title.indexOf(textInput) !== -1){
            templateCard.querySelector('h4').textContent = product.title;
            templateCard.querySelectorAll('span')[2].textContent = product.price;
            templateCard.querySelector("img").setAttribute('src', product.thumbnailUrl);
            templateCard.querySelector('.choose').dataset.id = product.id;
            templateCard.querySelector(".card").setAttribute('category', product.category);
            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        }
        cards.appendChild(fragment);
        getPagination();
        notFound.innerHTML = "";
    }
    if(cards.innerHTML === ""){
        notFound.innerHTML = `
        <div class="container text-center">
            <div class="col-lg-12">
                <h6 class="col-lg-12">¡Ups, no se encontró el producto que estás buscando!</h6>
                <img class="img-fluid w-25 py-4 col-lg-8" src="../images/undraw_Location_search_re_ttoj.svg" alt="">
            </div>
        </div>
        `
    }
    seeAll();
    input.value = "";
    pagination.innerHTML = "";
    }else{
        showCards(start);
        showPages.innerHTML = "";
        notFound.innerHTML = "";
        getPagination();
    }
}

function seeAll(){
    showPages.innerHTML = "";
    const button = document.createElement('button');
    button.textContent = 'Ver todos los productos';
    button.classList.add('btn-green');
    showPages.appendChild(button);
    button.addEventListener('click', function(){
        cards.innerHTML = "";
        showCards(start);
        getPagination();
        showPages.innerHTML = "";
        notFound.innerHTML = "";
    });
}

search.addEventListener('click', searchProducts);

cards.addEventListener('click', e =>{
    addToCart(e);
});

items.addEventListener('click', e =>{
    btnAction(e);
});

const addToCart = e =>{
  if(e.target.classList.contains('choose')){
      setCart(e.target.parentElement);
  }
  
  e.stopPropagation();
}

const showCards = (start) =>{
  let  getProductsPage = [];
  for(let i = start; i < (start + 6); i++){
          getProductsPage.push(products[i]);
      }
      cards.innerHTML = "";
      getProductsPage.forEach(product =>{
      templateCard.querySelector('h4').textContent = product.title;
                  templateCard.querySelectorAll('span')[2].textContent = product.price;
                  templateCard.querySelector("img").setAttribute('src', product.thumbnailUrl);
                  templateCard.querySelector('.choose').dataset.id = product.id;
                  templateCard.querySelector(".card").setAttribute('category', product.category);
                  const clone = templateCard.cloneNode(true);
                  fragment.appendChild(clone);
  })
      cards.appendChild(fragment);
  }

   
   // -Is added products of the cart that take the values ​​of the card template
   const setCart = (object) =>{
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


const getPagination = () =>{
    let pages = Math.ceil(products.length/3);
    let start = 0;
    for(let n=0; n < pages/2; n++){
        const button = document.createElement('button');
        button.textContent = n + 1;
        button.className = "btn btn-pagination mx-1";
        button.setAttribute('onclick', 'showCards('+ start +')');
        pagination.appendChild(button);
        start += 6;  
    }
}






