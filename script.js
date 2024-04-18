function toggleMode() {
 const html = document.documentElement
 html.classList.toggle("light")

  const img = document.querySelector("#Profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Assets/assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Mayk Brito sem barba, sorrindo, usando óculos de sol e jaqueta preta.")
  } else {
    img.setAttribute("src", "./Assets/assets/avatar.png")
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.")
  }
}