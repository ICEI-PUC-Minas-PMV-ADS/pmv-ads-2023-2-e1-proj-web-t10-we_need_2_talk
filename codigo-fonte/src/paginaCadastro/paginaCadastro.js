document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('registrationForm');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita a submissão padrão do formulário
        registrar();
    });
});

function registrar() {
    console.log("Função registrar() chamada");

    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var email = document.getElementById('email').value;
    var sexo = document.querySelector('input[name="sexo"]:checked');
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarsenha').value;

    // Verificar se todos os campos estão preenchidos
    if (!nome || !sobrenome || !email || !sexo || !senha || !confirmarSenha) {
        console.log("Campos obrigatórios não preenchidos");
        alert("Não foi possível se registrar. Revise os campos obrigatórios.");
        return;
    }

    // Verificar se as senhas coincidem
    if (senha !== confirmarSenha) {
        console.log("Senhas não coincidem");
        alert("As senhas não coincidem. Por favor, corrija.");
        return;
    }

    // Verificar se o email já está cadastrado no Local Storage
    var usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];
    if (usuariosCadastrados.some(usuario => usuario.email === email)) {
        console.log("Email já cadastrado");
        alert("Email já cadastrado. Por favor, escolha outro email.");
        return;
    }

    // Se todas as verificações passarem, registrar o usuário
    var novoUsuario = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        sexo: sexo ? sexo.value : null, // Adicione esta linha para tratar o caso de nenhum sexo selecionado
        senha: senha
    };

    usuariosCadastrados.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));

    console.log("Usuário registrado com sucesso", novoUsuario);
    alert("Registrado com sucesso!");
}
