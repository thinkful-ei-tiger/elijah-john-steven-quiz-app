const store = {

    questions: [
        {
            question: 'Random Question',
            answers: [
                'Dog',
                'Cat',
                'Fish',
                'Horse'
            ],
            correctAnswer: 'Dog'
        },
        {
            question: 'Random Question',
            answers: [
                'Dog',
                'Cat',
                'Fish',
                'Horse'
            ],
            correctAnswer: 'Dog'
        },
        {
            question: 'Random Question',
            answers: [
                'Dog',
                'Cat',
                'Fish',
                'Horse'
            ],
            correctAnswer: 'Dog'
        },
        {
            question: 'Random Question',
            answers: [
                'Dog',
                'Cat',
                'Fish',
                'Horse'
            ],
            correctAnswer: 'Dog'
        },
        {
            question: 'Random Question',
            answers: [
                'Dog',
                'Cat',
                'Fish',
                'Horse'
            ],
            correctAnswer: 'Dog'
        }
    ],
    quizStarted: false,
    questionNumber: 0,
    incorrect: 0,
    score: 0,
    showingQuestion: true,

};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */
/********** TEMPLATE GENERATION FUNCTIONS **********/

function renderStartTemplate() {
    return `
    <form class="flex-column flex-center">
        <h2>Are you ready to get started?</h2>
        <p>You are about to embark on a quest of knowledge involving the topic of "ENTER TOPIC HERE". 
        We hope you have had your Wheaties this morning...</p>
        <p>Press the button below to begin.</p>
        <button class="start-button" type="button">Start Quiz!</button>
    </form>`;
}

function renderQuestionTemplate() {
    return ` 
    <form class="flex-column flex-center">
        <p class="question">
            <span class="num">Question ${store.questionNumber + 1} of ${store.questions.length}</span> 
            ${store.questions[store.questionNumber].question}
        </p>
        <div>
            <input type="radio" id="answer1" name="answer" value="${store.questions[store.questionNumber].answers[0]}" class="answer1" required>
            <label class="btn" for="answer1" class="answer2">${store.questions[store.questionNumber].answers[0]}</label>
            <input type="radio" id="answer2" name="answer" value="${store.questions[store.questionNumber].answers[1]}" class="answer2" required>
            <label class="btn" for="answer2" class="answer2">${store.questions[store.questionNumber].answers[1]}</label>
            <input type="radio" id="answer3" name="answer" value="${store.questions[store.questionNumber].answers[2]}" class="answer3" required>
            <label class="btn" for="answer3" class="answer3">${store.questions[store.questionNumber].answers[2]}</label>
            <input type="radio" id="answer4" name="answer" value="${store.questions[store.questionNumber].answers[3]}" class="answer4"  required>
            <label class="btn" for="answer4" class="answer4">${store.questions[store.questionNumber].answers[3]}</label>
        </div>
        <button class='submit-question-button error-checker' type='submit'>Submit Question!</button> 
        <div>
            <h3>Current Score</h3>
            <span>Correct Answers: ${store.score} / Incorrect Answers: ${store.incorrect} </span> 
        </div>
    </form>`;
}

function renderAnswerTemplate() {
    return `
    <form class="flex-column flex-center">
        <h3>${store.response}</h3>
        <button class='next-question-button' type='submit'>Next Question</button>
        <div>
            <h3>Current Score</h3>
            <span>Correct Answers: ${store.score} / Incorrect Answers: ${store.incorrect} </span> 
        </div>
    </form>`;
} 

function renderQuizEndTemplate() {
    return `
    <form class="flex-column flex-center">
    <h3>${store.response}</h3>
    <div>
        <h3>Current Score</h3>
        <span>Correct Answers: ${store.score} / Incorrect Answers: ${store.incorrect} </span> 
    </div>
    <p>Thanks for taking our quiz! This information will be sold to REDACTED SOCIAL MEDIA COMPANY to help better target adds to users like you.</p>
    <p>Feel free to take it again to give us more data to better fit your consumption needs!</p>    
    <button type="submit" class="try-again-button">Try Again!</button>
    </form>`;
}

/********** RENDER FUNCTION(S) **********/

function renderStart() {
    template = renderStartTemplate();
    $('main').html(template);
}

function renderQuestions() {
    template = renderQuestionTemplate();
    return $('main').html(template);
}

function renderAnswers() {
    template = renderAnswerTemplate();
    return $('main').html(template);
}

function renderQuizEnd() {
    template = renderQuizEndTemplate();
    return $('main').html(template);
}

/********** EVENT HANDLER FUNCTIONS **********/

function quizStarted() {
    if (!store.quizStarted) {
        renderStart();
    }
}

function start() {
    $('main').on('click', '.start-button', function (event) { 
        event.preventDefault();
        store.quizStarted = true;
        renderQuestions();
    });
}

function findError() {
    $('main').on('click', 'button', function (event) {
        if ($(event.currentTarget).text() === 'Submit Question!') {
            if (!$('input[name="answer"]:checked').val()) {
                alert("Pick an answer!");
            }
        }
    })
}

function questionLoop() {
    $('main').on('submit', 'form', function (event) { 
        event.preventDefault();

        if (store.questionNumber + 1 === store.questions.length) {
            store.quizStarted = false;


            if ($('input[name="answer"]:checked').val() === store.questions[store.questionNumber].correctAnswer) {

                store.score += 1;
                store.response = 'Good job! Your answer has been submitted and will be saved into your personal record file.';

            } else {

                store.incorrect += 1;
                store.response = `The correct answer is ${store.questions[store.questionNumber].correctAnswer}. We have logged your failure.`;

            }

            renderQuizEnd();

        } else if (store.showingQuestion === true) {
            let answer = $('input[name="answer"]:checked').val();



            if (answer === store.questions[store.questionNumber].correctAnswer) {
                store.score += 1;
                store.response = 'Good job! Your answer has been submitted and will be saved into your personal record file.';
                renderAnswers();

            } else {
                store.incorrect += 1;
                store.response = `The correct answer is ${store.questions[store.questionNumber].correctAnswer}. We have logged your failure.`;
                renderAnswers();

            }
            store.showingQuestion = false;

        } else {
            store.questionNumber += 1;
            renderQuestions();
            store.showingQuestion = true;
        }
    });
}

function retakeQuiz() {
    $('main').on('click', '.try-again-button', function (event) {
        event.preventDefault();
        store.questionNumber = 0;
        store.incorrect = 0;
        store.score = 0;
        renderQuestions();
    });
}

function main() {
    quizStarted();
    start();
    questionLoop();
    findError();
    retakeQuiz();
}

$(main);