function Carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`

    if (hora >= 6 && hora < 12) {
        //Bom dia!
        img.src = 'manhã.png'
        document.body.style.background = '#e3dbce'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde !!
        img.src = 'Tarde.png'
        document.body.style.background = '#eda471'
    } else {
        //Boa Noite!!
        img.src = 'noite.png'
        document.body.style.background = '#4a5559'
    }
}