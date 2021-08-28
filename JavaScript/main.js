function imgSlider(anything) {
    document.querySelector('.coffee').src = anything;
}

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
