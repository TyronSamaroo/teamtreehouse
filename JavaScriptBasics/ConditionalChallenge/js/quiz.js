/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAnswers = 0;


// 2. Store the rank of a player
let playerRanking = 0;

// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

question_one = "What date is Christmas on?";
question_two = "What planet are we on?";
question_three = "What is 2 + 3?";
question_four = "How many wheels are on a car?";
question_five = "What is the best language?";

answer_one = "25";
answer_two = "EARTH";
answer_three = "5";
answer_four = "4"
answer_five = "PYTHON";

let mainElement = document.querySelector('main');
let questionAndAnswer = ''

let userPrompt = prompt(question_one);
if ( userPrompt === answer_one) {
    questionAndAnswer += `<p>CORRECT!!! </p>`;
    questionAndAnswer += `<p>Question: ${question_one}</p>`;
    questionAndAnswer += `<p>Answer: ${answer_one}     Your Answer : ${userPrompt}</p> `;
    correctAnswers += 1;
} else {
  questionAndAnswer += `<p>WRONG!!! </p>`;
  questionAndAnswer += `<p>Question: ${question_one}</p>`;
  questionAndAnswer += `<p>Answer: ${answer_one}     Your Answer : ${userPrompt}</p> `;
}

userPrompt = prompt(question_two);
if ( userPrompt.toUpperCase() === answer_two) {
    questionAndAnswer += `<p>CORRECT!!! </p>`;
    questionAndAnswer += `<p>Question: ${answer_two}</p>`;
    questionAndAnswer += `<p>Answer: ${answer_two}     Your Answer : ${userPrompt}</p> `;
    correctAnswers += 1;
  
} else {
  questionAndAnswer += `<p>WRONG!!! </p>`;
  questionAndAnswer += `<p>Question: ${question_two}</p>`;
  questionAndAnswer += `<p>Answer: ${answer_two}     Your Answer : ${userPrompt}</p> `;
}

userPrompt = prompt(question_three);
if ( userPrompt === answer_three) {
    questionAndAnswer += `<p>CORRECT!!! </p>`;
    questionAndAnswer += `<p>Question: ${question_three}</p>`;
    questionAndAnswer += `<p>Answer: ${answer_three}     Your Answer : ${userPrompt}</p> `;
    correctAnswers += 1;
} else {
  questionAndAnswer += `<p>WRONG!!! </p>`;
  questionAndAnswer += `<p>Question: ${question_three}</p>`;
  questionAndAnswer += `<p>Answer: ${answer_three}     Your Answer : ${userPrompt}</p> `;
}


userPrompt = prompt(question_four);
if ( userPrompt === answer_four) {
    questionAndAnswer += `<p>CORRECT!!! </p>`;
    questionAndAnswer += `<p>Question: ${question_four}</p>`;
    questionAndAnswer += `<p>Answer: ${answer_four}     Your Answer : ${userPrompt} </p> `;
    correctAnswers += 1;
} else {
  questionAndAnswer += `<p>WRONG!!! </p>`;
  questionAndAnswer += `<p>Question: ${question_four}</p>`;
  questionAndAnswer += `<p>Answer: ${answer_four}     Your Answer : ${userPrompt}</p> `;
}


userPrompt = prompt(question_five);
if ( userPrompt.toUpperCase()  === answer_five) {
    questionAndAnswer += `<p>CORRECT!!! </p>`;
    questionAndAnswer += `<p>Question: ${question_five}</p>`;
    questionAndAnswer += `<p>Answer: ${answer_five}     Your Answer : ${userPrompt}</p> `;
    correctAnswers += 1;
} else {
  questionAndAnswer += `<p>WRONG!!! </p>`;
  questionAndAnswer += `<p>Question: ${question_five}</p>`;
  questionAndAnswer += `<p>Answer: ${answer_five}     Your Answer : ${userPrompt}</p> `;
}


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if (correctAnswers == 5){
  playerRanking = "Gold";
}
else if (2 < correctAnswers  <= 4){
  playerRanking = "Silver";
}
else if ( 0 < correctAnswers <= 2) {
  playerRanking = "Bronze"
} else {
  playerRanking = "No crown"
}


// 6. Output results to the <main> element
console.log(questionAndAnswer)
mainElement.innerHTML = `<h1> Quiz Results <\h1>`;
mainElement.innerHTML += `<h1> Player Ranking : ${playerRanking} <\h1>`;
mainElement.innerHTML += questionAndAnswer