function carregar(){
    var msg = document.getElementById('hora')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()  
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = './src/img/nascer-do-sol.jpg'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){
        img.src = './src/img/por-do-sol.jpg'
        document.body.style.background = '#b9846f'
    }else{
        img.src = './src/img/anoitecer.jpg'
        document.body.style.background = '#515154'
    }
}