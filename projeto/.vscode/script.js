function togglemode() {
  const html = document.documentElement
  
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  
  //substituir a imagem
  if(html.classList.contains('light')) {
  
  //se tiver light mode, adicionar a imagem light
  img.setAttribute('src', './assets/Jean-light.png')
  } else {
    img.setAttribute('src', './assets/Jean.png')
  }

  
  // setiver sem light mode, manter a imagem normal
}
