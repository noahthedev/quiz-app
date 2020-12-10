const store = {
  // 5 or more questions are required
  questions: [
    { // question 1
      question: 'Commonly used as a malaria medication, what is the name of the compound that gives gin & tonic its characteristic bitterness?',
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

// These functions return HTML templates

function generateWelcome() {
  return `
    <div id="welcome">
      <p>Welcome! Press the start button to begin this quiz.</p>
      <button type="button" id="start" autofocus>Start Quiz</button>
    </div>
  `;
}

function generateAnswers() {
  let answersHtml = '';
  let i = 0;
  (store.questions[store.questionNumber].answers).forEach( answer => {
    answersHtml += `
      <div id="option-container-${i}">
        <input type="radio" name="options" id="option${i + 1}" value= "${answer}" tabindex ="${i + 1}" required> 
        <label for="option${i + 1}"> ${answer}</label>
      </div>
    `;
    i++;
  });
  return answersHtml;
}

function generateQuestion() {
  return `
    <form id="question-form" class="question-form">
        <div class="question">
          ${store.questions[store.questionNumber].question}
        </div>
        <div class="options">
          <div class="answers">
            ${generateAnswers()}
          </div>
        </div>
        <button type="submit" id="submit-answer-button">Submit</button>
    </form>
    <div id="question-result">
    </div> 
  `;
}

function generateQuestionNumberAndScore() {
  return `
    <ul class="question-and-score">
      <li id="question-number">
        Question Number: ${store.questionNumber + 1} of ${store.questions.length}
      </li>
      <li id="score">
        Score: ${store.score}/${store.questions.length}
      </li>
    </ul>
  `;
}

function generateFeedback(answerStatus) {
  let html = '';
  if (answerStatus === 'correct') {
    html = `
    <div class="right-answer">That is correct!</div>
    `;
  }
  else if (answerStatus === 'incorrect') {
    html = `
      <div class="wrong-answer">That is incorrect. The correct answer is ${store.questions[store.questionNumber].correctAnswer}.</div>
    `;
  };
  html += `
  <button type="button" id="next-question-button">Next</button>
  `;
  return html;
}

function generateResultsScreen() {
  return `
    <div class="results">
      <form id="js-restart-quiz"> 
        <div>
          <p>Your Score is: ${store.score}/${store.questions.length}</p>
        </div>
        <div>
          <button type="button" id="restart"> Restart Quiz </button>
        </div>
      </form>
    </div>
  `;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function render() {
  if (store.quizStarted === false) {
    $('main').html(generateWelcome());
    return;
  }
  else if (store.questionNumber < store.questions.length) {
    let html = '';
    html = generateQuestion();
    html += generateQuestionNumberAndScore();
    $('main').html(html);
  }
  else {
    $('main').html(generateResultsScreen());
  }
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleStartClick() {
  $('main').on('click', '#start', event => {
    store.quizStarted = true;
    render();
  });
}

function handleQuestionFormSubmission() {
  $('body').on('submit', '#question-form', event => {
      event.preventDefault();
      let answerStatus = '';
      if ($('input[name=options]:checked').val() === store.questions[store.questionNumber].correctAnswer) {
        store.score++;
        answerStatus = 'correct';
      }
      else {
        answerStatus = 'incorrect';
      }
      $('form').html(generateFeedback(answerStatus));
      store.questionNumber++;
    });
}

function handleNextQuestionClick() {
  $('body').on('click', '#next-question-button', () => {
      render();
    });
}

function handleRestartButtonClick() {
  $('body').on('click', '#restart', () => {
  store.quizStarted = false;
  store.questionNumber = 0;
  store.score = 0;;
  render();
  });
}

function handleQuizApp() {
  render();
  handleStartClick();
  handleNextQuestionClick();
  handleQuestionFormSubmission();
  handleRestartButtonClick();
}

$(handleQuizApp);