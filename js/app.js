function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.textContent = 'Alugar';
        botao.setAttribute('onclick', `alterarStatus(${id})`); // Atualiza o id no evento
        botao.classList.remove('dashboard__item__button--return');
    } else {
        botao.textContent = 'Devolver';
        botao.setAttribute('onclick', `alterarStatus(${id})`); // Atualiza o id no evento
        botao.classList.add('dashboard__item__button--return');
    }
}
