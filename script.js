function verificarSenha(){
    const senha = '030119'
    const inputSenha = document.getElementById('senhaInput').value;
    
    if(inputSenha == senha){
        localStorage.setItem('desbloqueado', 'true');
        window.location.href = 'telaMensagem.html';
    }else{
        const erro = document.getElementById('mensagemErro');
        erro.style.display = 'block';
    }
    
}
document.getElementById('BotaoEntrar').addEventListener('click', verificarSenha);
