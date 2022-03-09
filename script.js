function carregar() {
    var msg = window.document.getElementById('msg');    // obj da mensagem
    var img = window.document.getElementById('imagem'); // obj da imagem
    var data = new Date();                              // obj da data
    var hora = data.getHours();                         // para objetr a hora
     
    msg.innerHTML = `Agora são ${hora} horas.`;         // para inserir a mensagem

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha-500.jpg';              // para inserir a imagem conforme a hora.
        document.body.style.background = '#dcac7c';     // para inserir uma cor no fundo do body.
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde-500.jpg';
        document.body.style.background = '#ff7d03';
    }else {
        img.src = 'imagens/noite-500.jpg';
        document.body.style.background = '#174753';
    }
}