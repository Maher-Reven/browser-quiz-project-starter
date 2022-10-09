'use strict';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  element.classList.add('answer-item')
  element.addEventListener('click' , ()=> {
    const parent = element.parentNode
    Array.from(parent.children).forEach(child => child.classList.remove('selected'))
    element.classList.add('selected') 
  })
  return element;
};
