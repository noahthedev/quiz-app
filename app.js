/**
 * Example store structure
 */


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
  <div>
    <p>Begin this quiz by pressing the button</p>
    <button type="button" autofocus>Start Quiz</button>
  </div>  
  `
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderQuiz() {
  if (store.quizStarted === false) {
    $('main').html(generateWelcome());
  }

}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)


function handleQuiz() {
  renderQuiz();
}

$(handleQuiz);