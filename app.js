
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
    {
        question: "What do you value most?",
        answers: [
            {text: "Freedom and adventure", character: "Sonic"},
            {text: "Friendship and loyaty", character: "Tails"},
            {text: "Strength and Determination", character: "Knuckles"},
            {text: "Intelligence and Strategy", character: "Dr.Robotnik"}
        ]
    },
    {
        question: "What motivates you the most?",
        answers: [
            {text: "Adventure and excitement", character: "Sonic"},
            {text: "Innovation and creativity", character: "Tails"},
            {text: "Strength and Determination", character: "Knuckles"},
            {text: "Plans and Strategies", character: "Dr. Robotnik"}
        ]
    },
    {
        question: "How would your friends describe you?",
        answers: [
            {text: "Adventurous and free-spirited", character: "Sonic"},
            {text: "Smart and inventive", character: "Tails"},
            {text: "Strong and determined", character: "Knuckles"},
            {text: "Evil and Diabolical", character: "Dr. Robotnik"}
        ]
    }
];

let currentQuestionIndex = 0;
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");

function showQuestion(question) {
    quizContainer.innerHTML = `<h2>${question.question}</h2>`;

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add("answer-choice");

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
        displayResults(character);
    }
}
function displayResults(character){
    //logic determine and display results can be added here
    resultsContainer.innerHTML = `<h2>You are most like: ${character}</h2>`;
    resultsContainer.classList.remove('hidden');
}

showQuestion(quizQuestions[currentQuestionIndex]);

