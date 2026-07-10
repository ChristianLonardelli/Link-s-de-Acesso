function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  const image = document.querySelector("#profile img");


  if (html.classList.contains('light')) {
    img.setAttribute("src", "/assets/assets/minha-escura.png");
  } else {
    img.setAttribute("src", "/assets/assets/minha-clara.png");
}

}


