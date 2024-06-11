const alvo = 'b7e94be513e96e8c45cd23d162275e5a12ebde9100a425c4ebcdd7fa4dcd897c';

document.getElementById('btn_login').onclick = () => {
    const entrada = document.getElementById('senha').value; 
    const mensagem = document.getElementById('mensagem');

    if (hex_sha256(entrada) === alvo){
        mensagem.innerHTML = '<h3>Senha Correta! Carregando...</h3>';
        sessionStorage.setItem('logado', 1);

        setTimeout(() => {
            mensagem.innerHTML = '';
            window.location.href = 'main.html'; 
        }, 2000);

    } else {
        mensagem.innerHTML = '<h1 style="color: red">Senha incorreta!!!</h1>';
    }
}

