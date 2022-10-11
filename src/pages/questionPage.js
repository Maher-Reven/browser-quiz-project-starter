'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  GIVE_UP_BUTTON_ID 
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  document.getElementById('userScore').style.display= 'block'
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText , currentQuestion);
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  document
  .getElementById(GIVE_UP_BUTTON_ID)
  .addEventListener('click', giveUp);

};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

const giveUp = () => {
  const correct = document.getElementById(quizData.questions[quizData.currentQuestionIndex].correct);
  Array.from(document.getElementsByClassName('answer-item')).forEach(answer => {
    answer.classList = 'answer-item'
    answer.style.pointerEvents = "none";
  })
  correct.classList.add('right')
  correct.style.pointerEvents = "none";
}