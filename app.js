const store = {
  // 5 or more questions are required
  questions: [
    { // question 1
      question: 'Commonly used as a malaria medication, what is the name of the compound that gives gin & tonics their characteristic bitterness?',
      answers: [
        'caffeine', 
        'wormwood',
        'quinine',
        'gentian'
      ],
      correctAnswer: 'quinine'
    },
    { // question 2
      question: 'Which spirit is traditionally used as the base of a gimlet?',
      answers: [
        'rum',
        'gin',
        'bourbon',
        'tequila'
      ],
      correctAnswer: 'gin'
    },
    { // question 3
      question: 'Along with rum, sugar, lime, and soda water, what is the final ingredient used to build and garnish a mojito?',
      answers: [
        'bitters',
        'grenadine',
        'orange twist',
        'mint'
      ],
      correctAnswer: 'mint'
    },
    { // question 4
      question: 'What ingredient is added to make a "perfect" manhattan?',
      answers: [
        'dry vermouth',
        'absinthe',
        'orange bitters',
        'green Chartreuse'
      ],
      correctAnswer: 'dry vermouth'
    },
    { // question 5
      question: 'What does it mean to serve a cocktail "up"?',
      answers: [
        'on ice',
        'chilled, then strained and served in a stemmed glass',
        'at room temperature',
        'with a topper of champagne'
      ],
      correctAnswer: 'chilled, then strained and served in a stemmed glass'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/*
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

// These functions return HTML templates

function generateWelcome() {
  return `
    <div class="welcome-screen">
      <p>Welcome! Begin this quiz by pressing the Start button</p>
      <button type="button" id="start" autofocus>Start Quiz</button>
    </div>  
  `
}

function generateAnswers() {


}

function generateQuestion() {

}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderQuiz() {
  if (store.quizStarted === false) {
    $('main').html(generateWelcome());
  }
  else if (store.quizStarted === true) {
    $('main').html(generateQuestion());

  }


}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleStartQuiz() {
  $('main').on('click', '#start', event => {
    store.quizStarted = true;
    renderQuiz();
  });
};




function handleQuiz() {
  renderQuiz();
  handleStartQuiz();
}

$(handleQuiz);