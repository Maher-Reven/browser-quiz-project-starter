'use strict';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText , currentQuestion) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
     ${answerText};
  `;
  element.classList.add('answer-item')
  element.addEventListener('click' , ()=> {
    const parent = element.parentNode
    Array.from(parent.children).forEach(child => (child.classList = 'answer-item'))
    element.classList.add('selected')
    if(key === currentQuestion.correct) {
      element.classList.add('right')
    }
  })
  return element;
};
