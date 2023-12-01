// seta para voltar a pagina home
document.getElementById("setaMenu").addEventListener("click", function () {
    window.location.href = "..//paginaHome/home.html";
  });


// validação de email
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

//verificando o email
function Enviar(params) {
    var campoValidado = true;
    switch (true) {
      case document.getElementById("recuperar").value == null ||
        document.getElementById("recuperar").value == "":
        campoValidado = false;
        alert("Preencha o campo E-mail !");
        break;
      case !emailRegex.test(document.getElementById("recuperar").value):
        campoValidado = false;
        alert("E-mail no formato incorreto");
        break;
      default:
        campoValidado = true;
        break;
    }
  
    if (campoValidado == true) {
      //salvando dados do formulários de exibição
      var iemail = document.getElementById("recuperar").value;
      localStorage.setItem("recuperar", iemail);
      alert ("E-mail encaminhado")  
      document.getElementById('recuperar').value = "";
    }
  }


  