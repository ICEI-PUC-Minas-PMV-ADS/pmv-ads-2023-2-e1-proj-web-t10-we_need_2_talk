const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "Marseille est __________  construite autour de la Méditerranée.",
    answers: [
      { text: "une cité", correct: true },
      { text: "un pays", correct: false },
      { text: "une fille", correct: false },
    ],
  },
  {
    question: "Sur les hauteurs de la ville de Marseille, il y a_________qui s'appelle Notre-Dame-de-la-Garde.",
    answers: [
      { text: "un arbre", correct: false },
      { text: "une basilique", correct: true },
      { text: "un tigre", correct: false },
    ],
  },
  {
    question: "On peut visiter le Parc national des Calanques avec________de calcaire et les eaux turquoise.",
    answers: [
      { text: "les hommes", correct: false },
      { text: "les plantes", correct: false },
      { text: "les falaises", correct: true },
    ],
  },
  {
    question: "Des personnes qui aiment la plongée ont créé_________",
    answers: [
      { text: "une famille", correct: false },
      { text: "l'amour", correct: false },
      { text: "un musée subaquatique", correct: true },
    ],
  },
  {
    question: "Sous l'eau, on peut _________des sculptures et aussi beaucoup d'autres choses",
    answers: [
      { text: "manger", correct: false },
      { text: "casser", correct: false },
      { text: "découvrir", correct: true },
    ],
  },
]