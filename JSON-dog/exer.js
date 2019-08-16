


var $button = document.querySelector('#btn');
var $container = document.querySelector('.dog');

$button.addEventListener('click', fetchDogImage)

function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(res => renderImg(res.message))
}

function renderImg(img) {
    $container.innerHTML = "";

    var $doggy = document.createElement('img');
    $doggy.setAttribute('class', 'pic')
    $doggy.setAttribute('alt', 'doggy');
    $doggy.setAttribute('src', img);

    $container.appendChild($doggy);
}


