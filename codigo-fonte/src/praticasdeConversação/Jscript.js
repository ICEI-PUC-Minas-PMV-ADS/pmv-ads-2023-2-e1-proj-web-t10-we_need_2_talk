const quizData = [

{
    pergunta: "Identifique a ordem correta na seguinte frase:",

    a: "Why you are late?",
    b: "You are why late?",
    c: "Are you why late?",
    d: "Why are you late?",
    correta: "d",
},

{
pergunta: "Qual é a forma plural correta de 'child'?",

a: "Childs",
b: "Childrens",
c: "Childs'",
d: "Children",
correta: "d",
},

{
pergunta: "Qual frase está gramaticalmente correta?",

a: "She don't like coffee.",
b: "She doesn't like coffee.",
c: "She not like coffee.,",
d: "She not liking coffee.,",
correta: "b",
},

{
   pergunta: "Escolha o sinônimo de 'happy':",

    a: "Sad",
    b: "Joyful",
    c: "Angry",
    d: "Tired",
    correta: "b",
},

];

function mostrarPopUp() {
    const popupdiv = document.getElementById("quizM");
    popupdiv.style.display = "block";
    loadQuiz();
}

function fecharPopup() {
    const popupdiv = document.getElementById("quizM");
    popupdiv.style.display = "none";
    loadQuiz();
}   

const quiz= document.getElementById('quiz')
const respostaEls = document.querySelectorAll('.resposta')
const perguntaEl = document.getElementById('pergunta')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const enviarBtn = document.getElementById('enviar')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    perguntaEl.innerText = currentQuizData.pergunta
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers(){

    respostaEls.forEach(respostaEl => respostaEl.checked = false)
}

function getSelected(){
let resposta
respostaEls.forEach(respostaEl => {

if(respostaEl.checked){
    resposta = respostaEl.id
}
})
return resposta
}

enviarBtn.addEventListener('click',  () => {
    const resposta = getSelected()
    if(resposta) {
        if (resposta === quizData[currentQuiz].correta) { 
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `<div class="fecharP">
            <h6>Voce respondeu  ${score}/${quizData.length} perguntas corretas</h6>
            <button class="fecharBtn" onclick="location.reload()">Fechar</button>
            </div>`
        }
    
    }
    else{
        alert("Selecione uma alternativa!")
    }
})
