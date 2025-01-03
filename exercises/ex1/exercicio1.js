function carregar() {
    let msg = document.querySelector('div.msg');
    let img = document.querySelector('img.imgDiv');
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora sao ${hora} horas.`;

    if (hora >= 6 && hora < 12) {
        //bom dia
        img.src = './assets/manha.jpg';
        document.body.style.background = 'rgba(54, 162, 198, 0.87)';
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = './assets/tarde.jpg';
        document.body.style.background = 'rgba(182, 160, 13, 0.83)';
    } else if (hora >= 18 && hora <= 24) {
        //boa noite
        img.src = './assets/noite.jpg';
        document.body.style.background = 'rgb(2, 30, 16)';
    } else if (hora >= 0 && hora < 6) {
        //é madrugada
        img.src = './assets/madrugada.jpg';
        document.body.style.background = 'rgba(40, 38, 96, 0.89)';
    } else {
        //hora não existente
        alert(`Hora não existente!`);
    }
}
