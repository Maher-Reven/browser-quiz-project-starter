'use strict';

import { quizData } from '../data.js';
/**
 * Create an Answer element
 * @returns {Element}
 */

export const createAnswerElement = (key, answerText, currentQuestion) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${answerText};
  `;

  element.classList.add('answer-item');
  element.id = key;

  element.addEventListener('click', highlightAnswer);

  function highlightAnswer() {
    const parent = element.parentNode;
    Array.from(parent.children).forEach(
      (child) => (child.classList = 'answer-item')
    );

    element.classList.add('selected');
    currentQuestion.selected = key;

    if (currentQuestion.correct === currentQuestion.selected) {
      quizData.currentScore = quizData.currentScore += 1;
    }

    document.getElementById(
      'userScore'
    ).innerText = `Score: ${quizData.currentScore}`;

    if (key === currentQuestion.correct) {
      element.classList.add('right');
    } else {
      element.classList.add('wrong');
      const correct = document.getElementById(
        quizData.questions[quizData.currentQuestionIndex].correct
      );
      correct.classList.add('right');
    }
    Array.from(parent.children).forEach(
      (child) => (child.style.pointerEvents = 'none')
    );
  }

  return element;
};
