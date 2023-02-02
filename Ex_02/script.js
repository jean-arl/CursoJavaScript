function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(' [ERRO] Por Favor Verifique os dados e tente novamente ! ')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 14) {
                // criança
                img.setAttribute('src', 'MeninoNenem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'JovemMenino.png')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'AdultoHomem.png')
            }
            else {
                //Idoso
                img.setAttribute('src', 'IdosoHomem.png')
            }
        } 
        else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade < 14 ) {
                //criança
                img.setAttribute('src', 'MeninaNenem.png')
            } else if (idade < 21 ){
                //jovem
                img.setAttribute('src', 'JovemMenina.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'AdultaMulher.png')
            } else {
                //Idosa
                img.setAttribute('src', 'IdosaMulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} Anos`
        res.appendChild(img)
    }
}
