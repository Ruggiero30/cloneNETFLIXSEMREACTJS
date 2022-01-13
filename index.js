
var legenda = document.querySelector('.leg')
var carro = document.querySelector('.carrosel')

carro.addEventListener('click', mudar)




function mudar() {
    legenda.innerHTML='Assistir Novamente'
    legenda.transition='1s'
    
}
