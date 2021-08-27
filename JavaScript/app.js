const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', ()  =>{
    fetchData();
});

const fetchData = async () => {
    try{
        const res = await fetch('api.json');
        const data = await res.json();
        console.log(data);
        showCards(data);
    }catch(error){
        console.log(error)
    }
}

const showCards = data =>{
    data.forEach(producto =>{
        templateCard.querySelector('h4').textContent = producto.title;
        templateCard.querySelector('span').textContent = producto.precio;
        templateCard.querySelector("img").setAttribute('img', producto.thumbnailUrl);
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    items.appendChild(fragment);
};