



var $container = document.querySelector('.dog');



function renderImg(img) {
    console.log(img);

    $container.innerHTML = "";

    var $doggy = document.createElement('img');
    $doggy.setAttribute('class', 'pic')
    $doggy.setAttribute('alt', 'doggy');
    $doggy.setAttribute('src', img);

    $container.appendChild($doggy);
}

export {
    renderImg,
}


