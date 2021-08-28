const cards = document.getElementById('cards');
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const footer = document.getElementById('footer');
const canvas = document.getElementById('canvas');
const fragment = document.createDocumentFragment();
const templateCart = document.getElementById('template-carrito').content;
let cart = {};

document.addEventListener('DOMContentLoaded', ()  =>{
    fetchData();
});

cards.addEventListener('click', e =>{
    addToCart(e);
})
const fetchData = async () => {
    try{
        const res = await fetch('api.json');
        const data = await res.json();
        showCards(data);
    }catch(error){
        console.log(error)
    }
}

const showCards = data =>{
    data.forEach(product =>{
        templateCard.querySelector('h4').textContent = product.title;
        templateCard.querySelector('span').textContent = product.price;
        templateCard.querySelector("img").setAttribute('src', product.thumbnailUrl);
        templateCard.querySelector('.choose').dataset.id = product.id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
};

const addToCart = e =>{
    if(e.target.classList.contains('choose')){
        setCart(e.target.parentElement);
    }
    e.stopPropagation();
}

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
}


/*FALTA FOOTER*/ 
const paintFooter = () =>{
    footer.innerHTML = "";
    if(Object.keys(cart).length == 0){
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`;
    }
}