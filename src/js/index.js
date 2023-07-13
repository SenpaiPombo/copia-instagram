let alterarImagem = document.querySelector(".img1")

setInterval( () => {

    if(alterarImagem.style.opacity == 0){
        alterarImagem.style.opacity = 1
    } else{
       alterarImagem.style.opacity = 0 
    }

}, 4000)

