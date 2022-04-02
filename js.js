var circle = document.querySelector('.circle p')
var display1= document.querySelector('.display1')
var display2= document.querySelector('.display2')
var keyValue= document.querySelector('.key h1:last-child')
var locationValue= document.querySelector('.location h1:last-child')
var whichValue= document.querySelector('.which h1:last-child')
var codeValue= document.querySelector('.code h1:last-child')
console.log(keyValue)


document.addEventListener('keydown', function(e) {
    display1.classList.add('hide')
    display2.classList.remove('hide')
    keyValue.innerHTML =e.key;
    locationValue.innerHTML = e.location;
    whichValue.innerHTML = e.which;
    circle.innerHTML =e.which;
    codeValue.innerHTML = e.code;

})