function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

    const msg =  document.querySelector('#profile img')

    if (html.classList.contains("light")) {
        msg.setAttribute("alt", "Imagem de perfil no modo light")
    } else {
        msg.setAttribute("alt", "Imagem de perfil no modo dark")
    }
}