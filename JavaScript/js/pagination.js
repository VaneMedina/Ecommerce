const products = [{}];

function getProducts(start){
    let getProductsPage = [];
    for (let i = start; i < products.length; i++){
        getProductsPage.push(products[i]);
    }
}

const containerCards = document.getElementById('cards');
containerCards.innerHTML = "";

getProductsPage.forEach(function(){
    
})