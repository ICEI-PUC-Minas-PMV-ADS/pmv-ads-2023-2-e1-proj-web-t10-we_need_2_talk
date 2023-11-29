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

//explicação do professor

// todos os cantos tem que ter um ID ou usar o document.querySelector
// id metas - id.desabilitado = porque tem que puxar a meta do site

// para clicar no botão:
// class/id.onclick = function "se tiver nome" (artributos){ aqui voce ira agrupar tudo que deseja mudar no botão. id.value="o que esta escrito no campo" id. disabled = "false= todo estao abilitados para ser modificados" id.focus(focar ja no campo que será preenchido) }

// verificar se os campos estão preenchidos :
// cria um let(referencia/ liberaBotaoMT) + id com function(){ if (ID.value.length (cumprimento do valor) > quantidades de caracteres que deseja + &&) else não passar para a proximo campo. OBS.: REUTILIZAR A FUNÇÃO VARIAS VEZES QUE FOR PRECISO}
// o evendo a ser tratdo é o onchange ( so abilita quando eu sair do campo) já o onkeyup é quando os caracteres são preenchidos passando a quantidade exigida ele abilita mudar de campo

// Armazenamento de dados :
// variavel = temporario ate voce atualizar ou sair da pagina.
// NÃO usar o - porque o JS entende que isso é sinal de menos (subtração)
// Armazenamento Local = localStorage.getitem (pra recuperar uma informação 'reconverter' com JSON.parse( localStorage.getItem(nome que voce deu) ) e o localStotage.SetItem (armazena, mas é preciso uma conversão em JSON.stringify, OBS.: preciso dar um nome para que ele seja recuperado)

// Operações de dado:
// nao reutiliza um id
// nunca altera/ NUNCA reutilizar um ID
// readId - para leitura/recuperação de dados
// createId -para criação de dados, sem id que sera criado pelo CRUD - cria um ultimo id no banco de dados e converte ele pra numero (parseInt) caso no exista retorna 0 (||0), ai voc soma ao novo id = ultimo id + 1 , depois salvar no localStorage.setitem ...    tem que carrega o objeto inteiro e depois armazenar o objeto inteiro de novo (update)
// updateId - atualização algo editado e mantem o id original(recupera) - ler tudos objetos(readId), acha a posição do objeto e atualiza.
// deleteId - exclusão passando o id - ler tudos objetos(readId) , identifica o idExcluida, retira do vetor usando o metodo splice achando a possição no findIndex(retorna o posição)e find(retorna a tarefa/ objeto) e armazena (update) de novo.

//  Filtros e outras transformações
// localecompare - considera acentuação , "pt-br", sensitivity : "base" (não considera caixa alta ou caixa baixa)
// prioridade pode ser usado a>b
// area de busca =  <div id="areafiltro"
//<label for=" filtro"> Busca: </label>
//<input id= "filtro" type= "text"/>
//<span id= "limpaFiltro"> &times; </span> (x para sair da pagina)
//</div>
// comportamwnto:
//#limpaFiltro.onclick = function(){ filtro.value = "" mostraId(mostra a tabela )}
//filtro.onkeyup = function() { mostraId (mostra a tabela )}

// graficos:
// site: npmjs.com (recursos de criação) precisamos de uma API , lembre que devemos pegar o script primeiro
// <canvas> dentro do html e com esse objeto desenhar usando js

// API's Online
// UUID generator
// fetch (" Passando a URL").then( r => r.text()). then (t => console.log(t)) ; then te da uma resposta
// Caso de erro : fetch (" Passando a URL").then( r => r.text()). then (t => console.log(t) ) .catch( erro => console.error(erro) )
// console.log =novoid
// id é um string e nao mais um parseItn
//função fcallback = executa sua operação e que eu 'atualizo'
