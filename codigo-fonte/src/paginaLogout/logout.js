// Obter referências aos elementos do DOM
/*var modal = document.getElementById('myModal');
var openBtn = document.getElementById('openModalBtn');
var closeBtn = document.getElementById('closeModalBtn');
var linkBtn1 = document.getElementById('http://127.0.0.1:5501/pmv-ads-2023-2-e1-proj-web-t10-we_need_2_talk/codigo-fonte/src/paginaLogin/index.html');
var linkBtn2 = document.getElementById('http://127.0.0.1:5501/pmv-ads-2023-2-e1-proj-web-t10-we_need_2_talk/codigo-fonte/src/paginaHome/home.html');

// Função para abrir o modal
openBtn.onclick = function() {
    modal.style.display = 'block';
}

// Função para fechar o modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Funções para lidar com os cliques nos botões de link
linkBtn1.onclick = function() {
    window.location.href = 'http://127.0.0.1:5501/pmv-ads-2023-2-e1-proj-web-t10-we_need_2_talk/codigo-fonte/src/paginaLogin/index.html';
}

linkBtn2.onclick = function() {
    window.location.href = 'http://127.0.0.1:5501/pmv-ads-2023-2-e1-proj-web-t10-we_need_2_talk/codigo-fonte/src/paginaHome/home.html';
}

// Fechar o modal se o usuário clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}*/
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Fechar a Janela Modal clicando fora dela
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}