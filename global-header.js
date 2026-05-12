let elem = document.createElement("div");
elem.innerHTML = "<link rel='stylesheet' href='https://yaeanderson.github.io/crochet-shop/global-header.css'>"
document.body.prepend(elem);

fetch("https://yaeanderson.github.io/crochet-shop/global-header.html")
  .then((output) => output.text())
  .then((text) => {elem.innerHTML = elem.innerHTML + text;})
  .catch((e) => console.error(e));
   
