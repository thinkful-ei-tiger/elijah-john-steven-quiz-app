const store = {
    questions: [{
            question: '',
            answers: [
                '',
                '',
                ',
                ''
            ],
            correctAnswer: ''
        },
        {
            question: '',
            answers: [
                '',
                '',
                ',
                ''
            ],
            correctAnswer: ''
        },
        {
            question: '',
            answers: [
                '',
                '',
                ',
                ''
            ],
            correctAnswer: ''
        },
        {
            question: '',
            answers: [
                '',
                '',
                ',
                ''
            ],
            correctAnswer: ''
        },
        {
            question: '',
            answers: [
                '',
                '',
                ',
                ''
            ],
            correctAnswer: ''
        },
    ],
    quizStarted: false,
    questionNumber: 0,
    score: 0
    incorrect: 0
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

}

function renderQuestionTemplate() {

}

function renderAnswerTemplate() {

}

function renderFinalResultsTemplate() {

}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function render() {
    
}


/********** EVENT HANDLER FUNCTIONS **********/


function start() {

}

function quizStart() {

}

function noSelectionError() {

}

function quizFunction() {

}

function retakeQuiz() {

}

function mainFunction() {
    start();
    quizStart();
    noSelectionError();
    quizFunction();
    retakeQuiz();
}

$(mainFunction);