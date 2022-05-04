// CRIANDO FUNÇÃO QUE EXIBE OU OCULTA A SENHA DIGITADA PELO USUÁRIO
function showPassword(){
    const eye = document.getElementById('eye'); // ACESSANDO O ID DO HTML E ARMAZENANDO NA CONSTANTE
    const eyeSlash = document.getElementById('eye-slash'); // ACESSANDO O ID DO HTML E ARMAZENANDO NA CONSTANTE
    const fieldPassword = document.getElementById('field-password'); // ACESSANDO O ID DO HTML E ARMAZENANDO NA CONSTANTE

    if(eye.style.display === 'none'){ // SE ATENDER AS VALIDAÇÕES - MOSTRA A SENHA
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPassword.type = 'text';
    }else{ // SE NÃO ELE MANTÉM OU OCULTA A SENHA DIGITADA PELO USUÁRIO
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPassword.type = 'password';
    }
};

// CRIANDO FUNÇÃO QUE EXIBE ALERTA AO CLICAR NO BOTÃO 'LOGIN' CRIADO NO HTML
document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault(); // INATIVA O COMPORTAMENTO PADRÃO DA PÁGIA DE RECARREGAR AO CLICAR NO BOTÃO
    alert('LOGIN EFETUADO COM SUCESSO!');
});