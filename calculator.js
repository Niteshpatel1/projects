var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');



for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

let i = 2;
var bv = document.getElementById('convert'); // Make sure the id matches your HTML

bv.addEventListener('click', function() {
    let s1 = document.getElementById('src');
    let s2 = document.getElementById('srce');

    if (i % 2 === 0) {
        s1.style.display = 'block';
        s2.style.display = 'block';
    } else {
        s1.style.display = 'none';
        s2.style.display = 'none';
    }

    i++;
});

let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn4 = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}


/* Celcius to Fahrenheit and Kelvin */
celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})


fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp -32) * (5/9) + 273.15

    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})


kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
})


btn4.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})





document.addEventListener("DOMContentLoaded", function () {
    let ele = document.getElementById('container1');
    let btn1 = document.getElementById('calc');
    let btn2 = document.getElementById('tempr');
    let element = document.getElementById('temp11');

    btn1.addEventListener('click', function () {
        ele.style.left = "20%";
        element.style.left = "101%";
        setTimeout(function(){
            element.style.display = 'none';
        },3000);
    });

    btn2.addEventListener('click', function () {
        element.style.display = 'block';
        setTimeout(function(){ 
        ele.style.left = "-50%";
        element.style.left= "30%";
    }, 1000);
    });
});


 

 
