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
        alert ("E-mail encaminhado")  
        window.location.href="https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t10-we_need_2_talk/codigo-fonte/src/paginaLogin/index.html"
        break;
    }
  
    if (campoValidado == true) {
      //salvando dados do formulários de exibição
      var iemail = document.getElementById("recuperar").value;
      localStorage.setItem("recuperar", iemail);
      document.getElementById('recuperar').value = "";
    }
  }


  