'use strict';

import { ANSWERS_LIST_ID , NEXT_QUESTION_BUTTON_ID} from '../constants.js';


/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}" class='list_of_answers'>
    </ul>


    <button id="${GIVE_UP_BUTTON_ID}">
      Give up
    </button>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
  `;
  return element;
};

