function fetchDogImage(call) {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(res => call(res));
}

export { fetchDogImage };
