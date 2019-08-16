import { renderImg } from './dom.js';
import { fetchDogImage } from './data.js';


var $button = document.querySelector('#btn');

function init() {
    $button.addEventListener('click', function () {
        fetchDogImage(myfunction)


    })
    function myfunction(pict) {
        renderImg(pict)


    }
}

export {
    init,
}

