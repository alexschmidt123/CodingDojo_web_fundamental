function imageForward() {
    var carouselImage = document.querySelector('#carousel-img')
    carouselImage.src = './images/stonepunk.png'
}

function imageBack() {
    var carouselImage = document.querySelector('#carousel-img')
    carouselImage.src = './images/pixel-ninjas-2.png'
}

var cartCount = document.querySelector('#cart-count')
console.log(cartCount);

function incrementCount() {
    cartCount.innerText++;
}

function linux() {
    alert('This game is supported on Linux')
}