// 1. Create a multidimensional array to hold quiz questions and answers

const quiz = [
  ['What is 1 + 1?', '2'],
  ['What is 2 + 2?', '4'],
  ['What is 4 + 4?', '8']
]
// 2. Store the number of questions answered correctly
const correct = [];


/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (let i = 0; i < quiz.length; i++) {
  const question = quiz[i][0];
  const answer = quiz[i][1];
  const response = prompt(question);
  if (response === answer) {
    correct.push(question);
  }
}


// 4. Display the number of correct answers to the user
const correctCount = correct.length;
const correctQuestions = correct.map(question => `<li>${question}</li>`).join('');

const html = `
  <h1>You got ${correctCount} question(s) correct</h1>
  <h2>You got these questions correct:</h2>
  <ol>${correctQuestions}</ol>
`;

document.querySelector('main').innerHTML = html;