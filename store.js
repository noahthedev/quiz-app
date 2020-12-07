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