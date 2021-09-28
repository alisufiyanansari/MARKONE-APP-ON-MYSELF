var readlineSync = require('readline-sync')

var scores = 0

var highestScore = {
  name: 'ALI SUFFIAN',
  score: 4,
}

var questionBank = [
  {
    question: '1. What is My full name ?',
    answer: ' Ansari Ali Suffian Ali Imran ',
  },
  {
    question:
      'What is my date of birth ?',
    answer: '13 march 1997',
  },
  {
    question:
      'what is my favourite color?',
    answer: 'voilet',
  },
  {
    question:
      'At which college i study?',
    answer: 'ssvps',
  },
  {
    question:
      'what is my age?',
    answer: '24',
  },
]

function welcome() {
  var userName = readlineSync.question('What is your name? ')
  console.log('Welcome ' + userName + ' to do you know ANSARI ALI SUFFIAN')
}

function askQuestion(question, answer) {
  var resAnswer = readlineSync.question(question)
  if (resAnswer.toLowerCase() === answer.toLowerCase()) {
    scores = scores + 1
    console.log('Correctly answered | Current Score: ' + scores)
  } else {
    console.log('Naah! Wrong Answer | Current Score: ' + scores)
  }
  console.log('--------------')
}

function play() {
  for (var i = 0; i < questionBank.length; i++) {
    var currentQuestion = questionBank[i]
    askQuestion(currentQuestion.question, currentQuestion.answer)
  }
}

function outro() {
  console.log('Your Final SCORE: ', scores)
  console.log(
    'Current Highest Score: ' +
      highestScore.score +
      ' made by ' +
      highestScore.name
  )
  if (scores > highestScore.score) {
    console.log(
      'Congratulations!!! You have made new record by scoring ' + scores
    )
    console.log('Contact me to update the this')
  }
}
 
welcome ()
play()
outro()
