//Função para salvar os dados do formulário na localStorage
function salvarDados() {
  var checkboxes = document.querySelectorAll(
    '#formIdiomas input[type="checkbox"]'
  );
  var dados = {};

  checkboxes.forEach(function (checkbox) {
    dados[checkbox.value] = checkbox.checked;
  });

  localStorage.setItem("dadosFormulario", JSON.stringify(dados));
}

// Função para restaurar os dados do formulário da localStorage
function restaurarDados() {
  var dados = localStorage.getItem("dadosFormulario");

  if (dados) {
    dados = JSON.parse(dados);

    for (var idioma in dados) {
      var checkbox = document.querySelector(
        `#formIdiomas input[value="${idioma}"]`
      );
      if (checkbox) {
        checkbox.checked = dados[idioma];
      }
    }
  }
}

// Adiciona um listener de mudança para cada checkbox
document
  .querySelectorAll('#formIdiomas input[type="checkbox"]')
  .forEach(function (checkbox) {
    checkbox.addEventListener("change", salvarDados);
  });

// Chama a função de restaurar ao carregar a página
restaurarDados();

// validação de email
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

// seta para voltar a pagina home
document.getElementById("setaMenu").addEventListener("click", function () {
  window.location.href = "..//paginaHome/home.html";
});
// quando pagina carregar os campos ja ficam preenchidos
window.onload = function (params) {
  var iNomedeExibição_armazenado = localStorage.getItem("iNomedeExibição");
  document.getElementById("iNomedeExibição").value = iNomedeExibição_armazenado;

  var iBibliografia_armazenado = localStorage.getItem("iBibliografia");
  document.getElementById("iBibliografia").value = iBibliografia_armazenado;

  var iLinks_armazenado = localStorage.getItem("iLinks");
  document.getElementById("iLinks").value = iLinks_armazenado;

  var iMetas_armazenado = localStorage.getItem("iMetas");
  document.getElementById("iMetas").value = iMetas_armazenado;

  var iNomedeUsuário_armazenado = localStorage.getItem("iNomedeUsuário");
  document.getElementById("iNomedeUsuário").value = iNomedeUsuário_armazenado;

  var iemail_armazenado = localStorage.getItem("iemail");
  document.getElementById("iemail").value = iemail_armazenado;

  var iNumerodeTelefone_armazenado = localStorage.getItem("iNumerodeTelefone");
  document.getElementById("iNumerodeTelefone").value =
    iNumerodeTelefone_armazenado;
};
// validação de telefone com ajax
$(document).ready(function () {
  $("#iNumerodeTelefone").mask("(99) 99999-9999");
});

// Adiciona um event listener para chamar a função ao digitar
document
  .getElementById("iNumerodeTelefone")
  .addEventListener("input", formatarTelefone);

function salvarAlteracoes(params) {
  var campoValidado = true;
  switch (true) {
    case document.getElementById("iNomedeExibição").value.length < 5:
      campoValidado = false;
      alert("Preencha o Nome de Exibição com mais de 5 caracteres!");
      break;
    case document.getElementById("iNomedeUsuário").value.length < 7:
      campoValidado = false;
      alert("Preencha o campo Nome de Usuário com nome completo !");
      break;
    case document.getElementById("iemail").value == null ||
      document.getElementById("iemail").value == "":
      campoValidado = false;
      alert("Preencha o campo E-mail !");
      break;
    case !emailRegex.test(document.getElementById("iemail").value):
      campoValidado = false;
      alert("E-mail no formato incorreto");
      break;
    case document.getElementById("iNumerodeTelefone").value == null ||
      document.getElementById("iNumerodeTelefone").value == "" ||
      document.getElementById("iNumerodeTelefone").value == "-":
      campoValidado = false;
      alert("Preencha o campo Número de Telefone !");
      break;
    case document.getElementById("iSenhaAtual").value == null ||
      document.getElementById("iSenhaAtual").value == "":
      campoValidado = false;
      alert("Preencha o campo Senha Atual !");
      break;
    case document.getElementById("iNovaSenha").value == null ||
      document.getElementById("iNovaSenha").value == "":
      campoValidado = false;
      alert("Preencha o campo Nova Senha !");
      break;
    case document.getElementById("iConfirmaSenha").value == null ||
      document.getElementById("iConfirmaSenha").value == "":
      campoValidado = false;
      alert("Preencha o campo Confirme Senha!");
      break;
    case document.getElementById("iNovaSenha").value !=
      document.getElementById("iConfirmaSenha").value:
      campoValidado = false;
      alert("A senha está diferente");
      break;
    case document.getElementById("iIdiomadaInterface").value == null ||
      document.getElementById("iIdiomadaInterface").value == "":
      campoValidado = false;
      alert("Escolha o idioma de interface !");
      break;
    default:
      campoValidado = true;
      alert ('Dados alterados e salvos com sucesso')
      window.location.href="http://127.0.0.1:5501/codigo-fonte/src/paginaHomeNova/paginahomeNova.html"
      break;
  }

  if (campoValidado == true) {
    //salvando dados do formulários de exibição
    var iNomedeExibição = document.getElementById("iNomedeExibição").value;
    var iBibliografia = document.getElementById("iBibliografia").value;
    var iLinks = document.getElementById("iLinks").value;
    var iMetas = document.getElementById("iMetas").value;

    //salvando dados do formularios de informações
    var iNomedeUsuário = document.getElementById("iNomedeUsuário").value;
    var iemail = document.getElementById("iemail").value;
    var iNumerodeTelefone = document.getElementById("iNumerodeTelefone").value;
    var iSenhaAtual = document.getElementById("iSenhaAtual").value;
    var iNovaSenha = document.getElementById("iNovaSenha").value;
    var iConfirmaSenha = document.getElementById("iConfirmaSenha").value;
    var iIdiomadaInterface =
      document.getElementById("iIdiomadaInterface").value;

    //dados salvo de exibição
    localStorage.setItem("iNomedeExibição", iNomedeExibição);
    localStorage.setItem("iBibliografia", iBibliografia);
    localStorage.setItem("iLinks", iLinks);
    localStorage.setItem("iMetas", iMetas);

    //dados salvo de informações
    localStorage.setItem("iNomedeUsuário", iNomedeUsuário);
    localStorage.setItem("iemail", iemail);
    localStorage.setItem("iNumerodeTelefone", iNumerodeTelefone);
    localStorage.setItem("iSenhaAtual", iSenhaAtual);
    localStorage.setItem("iNovaSenha", iNovaSenha);
    localStorage.setItem("iConfirmaSenha", iConfirmaSenha);
    localStorage.setItem("iIdiomasdaInterface", iIdiomadaInterface);
  }
}