'use strict';

/**
 * Create an Answer element
 * @returns {Element}
 */

let score = 0
export const createAnswerElement = (key, answerText , currentQuestion) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  element.classList.add('answer-item')
  element.id = key
  element.addEventListener('click' , myFun)
  function myFun() {
    const parent = element.parentNode
    Array.from(parent.children).forEach(child => (child.classList = 'answer-item'))
    element.classList.add('selected')
    currentQuestion.selected = key
    currentQuestion.correct === currentQuestion.selected && (score += 1)
    document.getElementById('userScore').innerText = `Score: ${score}`

    if(key === currentQuestion.correct) {
      element.classList.add('right')
    } else {
      element.classList.add('wrong')
    }
  }
  return element;
};


  