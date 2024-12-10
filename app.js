const quizQuestions = [
    {
        question: "What's your favorite activity?",
        answers: [
            {text: "Running at supersonic speed", character: "Sonic"},
            {text: "Building Gadgets", character: "Tails"},
            {text: "Fighting Enemies head-on", character: "Knuckles"},
            {text: "Scheming to take over the world", character: "Er. Robotnik"},
        ]
    },
    //Adding more questions later
];

let currentQuestionIndex = 0;
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");

function showQuestion(question) {
    quizContainer.innerHTML = `<h2>${question.question}</h2>`;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.onclick = () => selectAnswer(answer.character);
        quizContainer.appendChild(button);
    });
}

function selectAnswer(character) {
    currentQuestionIndex++;
    //save character results(implement logic as required)
    if(currentQuestionIndex < quizQuestions.length){
        showQuestion(quizQuestions[currentQuestionIndex]);
    }else{
        displayResults();
    }
}
function displayResults(){
    //logic determine and display results can be added here
    resultsContainer.innerHTML = `<h2>You are most like: ${character}</h2>`;
    resultsContainer.classList.remove('hidden');
}

showQuestion(quizQuestions[currentQuestionIndex]);

document.getElementById('submit').addEventListener('click', () => {
    //handle submitting answers here
});