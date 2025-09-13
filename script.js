// Criamos a função que será chamada quando o botão "Entrar" for clicado
function verificarSenha() {
    // 1. Encontra o campo de senha no HTML pelo seu ID
    const campoSenha = document.getElementById('senha');
    
    // 2. Pega o valor digitado pelo usuário e remove espaços extras
    const senhaDigitada = campoSenha.value.trim();

    // 3. Define a senha correta
    const senhaCorreta = '453';

    // 4. Se a senha estiver correta, começa a sequência de eventos
    if (senhaDigitada === senhaCorreta) {
        
        // Esconde a tela inicial
        document.querySelector('.container-inicial').style.display = 'none';

        // Mostra a tela escura e a frase
        const telaMisteriosa = document.querySelector('.tela-misteriosa');
        telaMisteriosa.style.display = 'flex';
        
        // Adiciona a classe que fará a animação da frase
        document.getElementById('frase-anjo').style.animationPlayState = 'running';

        // 5. Toca o efeito sonoro
        // Você vai precisar de um elemento <audio> no HTML ou usar a API de áudio
        // Exemplo:
        const audio = new Audio('efeito-combinado.mp3'); 
        audio.play();

        // 6. Espera 5 segundos antes de mudar para a tela final
        setTimeout(() => {
            telaMisteriosa.style.display = 'none'; // Esconde a tela escura
            document.querySelector('.container-final').style.display = 'block'; // Mostra a tela final
        }, 11000); // 12000 milissegundos = 12 segundos

    } else {
        // Se a senha estiver incorreta, dá um alerta ao usuário
        alert('Senha incorreta. Tente novamente.');
    }
}