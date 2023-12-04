
// validação de email
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

window.onload = function (params) {
    var iNome_armazenado = localStorage.getItem("email");
    document.getElementById("email").value = iNome_armazenado;
}

//verificando o email
function Entrar(params) {
    var campoValidado = true;
    switch (true) {
      case document.getElementById("email").value == null ||
        document.getElementById("email").value == "":
        campoValidado = false;
        alert("Preencha o campo E-mail !");
        break;
      case !emailRegex.test(document.getElementById("email").value):
        campoValidado = false;
        alert("E-mail no formato incorreto");
        break;
      case document.getElementById("senha").value == null ||
        document.getElementById("senha").value == "":
        campoValidado = false;
        alert("Preencha o campo Senha!");
        break;
      default:
        campoValidado = true; 
        window.location.href="http://127.0.0.1:5501/codigo-fonte/src/paginaHome/home.html"
        break;
    }
  
    if (campoValidado == true) {
      //salvando dados do formulários de exibição
      var iemail = document.getElementById("email").value;
      var iSenha = document.getElementById("senha").value;


      localStorage.setItem("email", iemail);
      localStorage.setItem("senha", iSenha);
    }
  }
