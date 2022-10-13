'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  GIVE_UP_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { result } from '../views/result.js';
import { quizData } from '../data.js';
import { createQuestionCounterElemenet } from '../views/questionCounterView.js';

const questionsLength = quizData.questions.length;
export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const scoreElement = document.getElementById('userScore');
  scoreElement.style.display = 'block';
  scoreElement.innerText = `Score: ${quizData.currentScore}`;

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionCounterElement = createQuestionCounterElemenet(
    quizData.currentQuestionIndex + 1,
    quizData.questions.length
  );

  userInterface.appendChild(questionCounterElement);
  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText, currentQuestion);
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  document.getElementById(GIVE_UP_BUTTON_ID).addEventListener('click', giveUp);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  if (quizData.currentQuestionIndex === questionsLength) {
    quizData.currentQuestionIndex = 0;
    quizData.currentScore = 0;
    scoreElement.innerText = `Score: ${quizData.currentScore}`;
  }

  localStorage.setItem('currentScore', quizData.currentScore);
  localStorage.setItem('currentIndex', quizData.currentQuestionIndex);

  initQuestionPage();
};

const giveUp = () => {
  const correct = document.getElementById(
    quizData.questions[quizData.currentQuestionIndex].correct
  );
  Array.from(document.getElementsByClassName('answer-item')).forEach(
    (answer) => {
      answer.classList = 'answer-item';
      answer.style.pointerEvents = 'none';
    }
  );
  correct.classList.add('right');
  correct.style.pointerEvents = 'none';
};

export const continueQuizApp = () => {
  quizData.currentQuestionIndex = JSON.parse(
    localStorage.getItem('currentIndex')
  );
  quizData.currentScore = JSON.parse(localStorage.getItem('currentScore'));

  initQuestionPage();
};
