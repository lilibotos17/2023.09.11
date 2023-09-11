/*function felugroAblak() {
    alert("Boldog új évet!");
}

function felugroAblak2() {
    alert("KÉSZ!!");
}

function felugroAblak3() {
    alert("Ma már a második nap van!");
}*/

console.log('Hello')
console.error('error')

document.querySelector('h1').onclick = function () {
  alert('Boldog Új Évet!')
}

document.querySelector('h2').onclick = function () {
  alert('Ma már holnap van!')
}

document.querySelector('h3').onclick = function () {
  alert('Készen van a házi :D')
}


const hello1=document.querySelector('#hello')

const container=document.querySelector('#container')

hello1.addEventListener('click', () => {
    let card=document.createElement('div')
    card.innerText= Math.floor(Math.random() * 6+1)
    container.append(card)
})