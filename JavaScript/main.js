
function imgSlider(anything) {
    document.querySelector('.coffee').src = anything;
}


document.querySelector('.img1').addEventListener('click', function() {
    imgSlider('/ProyectoCoder/images/img2.png');
    changeCircleColor('#017143');
    changeColorButton('#017143');
    changeColorTitle('#017143');
})

document.querySelector('.img6').addEventListener('click', function() {
    let img = imgSlider('/ProyectoCoder/images/img10.png');
    changeCircleColor('#A993BF');
    changeColorButton('#A993BF');
    changeColorTitle('#A993BF');
})

document.querySelector('.img5').addEventListener('click', function() {
    imgSlider('/ProyectoCoder/images/img8.png');
    changeCircleColor('#A0D3D9');
    changeColorButton('#A0D3D9');
    changeColorTitle('#A0D3D9');
})

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function changeColorButton(color) {
    const button = document.getElementById('button');
    button.style.background = color;
 }

 function changeColorTitle(color) {
     const title = document.getElementById('title');
     title.style.color = color;
 }




 /*BUY*/
/*
 class Producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre
        this.precio = precio,
        this.stock = stock
    } 

    comprar(){
        if(this.stock > 0){
            this.stock -= 1;
        }
        else{
            console.log("El producto está agotado.");
        }
    }
    calcularTotal(){
        total += this.precio;
        console.log(`El total es ${total}`)
    }
}


const producto1 = new Producto("Latte", 100, 100);
const producto2 = new Producto("Frappe frutilla", 200, 50);
const producto3 = new Producto("Frappe chocolate", 300, 20);
const producto4 = new Producto("Frappe cacao", 400, 10);
const producto5 = new Producto("Frappe vainilla", 55, 35);



const producto1 = document.getElementById('producto1');
let options = document.getElementsByClassName('choose')[0];

options.addEventListener('click', function(){
    alert("comprado");
})

const productos = [producto1, producto2, producto3, producto4, producto5];




/*MODAL*/
/*
let product = document.getElementByClassName('card');
let modal = document.getElementById('modal');
let flex = document.getElementById('flex');
let close = document.getElementById('close');

product.addEventListener('click', function(){
    modal.style.display = 'block';
});

close.addEventListener('click', function(){
    modal.style.display = 'none';
});

window.addEventListener('click', function(e){
    if(e.target == flex){
        modal.style.display = 'none';
    }
});
*/