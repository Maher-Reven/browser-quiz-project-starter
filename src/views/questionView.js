'use strict';

import { ANSWERS_LIST_ID , GIVE_UP_BUTTON_ID , NEXT_QUESTION_BUTTON_ID} from '../constants.js';
import { quizData } from '../data.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');
element.setAttribute('class','container');
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1 class='question'>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${GIVE_UP_BUTTON_ID}">
      Give up
    </button>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      ${quizData.currentQuestionIndex < quizData.questions.length - 1 ?
        'Next question': 'Reset'
      }
    </button>
  `;

  return element;
};

