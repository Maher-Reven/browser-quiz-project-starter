import { quizData } from '../data.js';
import { USER_INTERFACE_ID } from '../constants.js';

export const result = () => {
  // RESET THE DOM--------------------------------------
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  // ====================================

  // CREATION OF RESULT DOM ELEMENTS ----------------

  const result = document.createElement('div');
  const percentage = document.createElement('div');
  const resultNum = document.createElement('div');
  const numContainer = document.createElement('div');
  const numContainer2 = document.createElement('div');
  const score = document.createElement('img');
  const complement = document.createElement('h1');
  const complement2 = document.createElement('h1');
  const percentageNum = document.createElement('h1');
  const check = document.createElement('span');
  const restart = document.createElement('button');
  const check2 = document.createElement('span');
  // =================================================

  // ADD TEXT-CONTENT----------------------
  complement.textContent = '6';
  complement2.textContent = '4';
  percentageNum.textContent = '40%';
  check.textContent = 'check';
  check2.textContent = 'close';
  restart.textContent = 'refresh';
  // ================================

  // ADDITION OF DIFFERENT ATTRIBUTES -----------------
  score.setAttribute('class', 'score');
  numContainer.setAttribute('class', 'num-container');
  numContainer2.setAttribute('class', 'num-container2');
  percentage.setAttribute('class', 'percentage');
  resultNum.setAttribute('class', 'resultNum');
  percentageNum.setAttribute('class', 'percentageNum');
  complement.setAttribute('class', 'complement');
  complement2.setAttribute('class', 'complement third');
  result.setAttribute('class', 'result');
  check.setAttribute('class', 'material-symbols-outlined');
  restart.setAttribute('class', 'material-symbols-outlined restart');
  check2.setAttribute('class', 'material-symbols-outlined second');
  score.setAttribute(
    'src',
    'https://media.istockphoto.com/vectors/sketch-icon-in-black-trophy-vector-id910592448?k=20&m=910592448&s=170667a&w=0&h=m33c9xZUFuqyrBuDBxbPvJrr0EOntg-YlIdaNkUIW_g='
  );
  // =========================================

  // APPENDING OF CHILDREN  -------------------------------------
  userInterface.appendChild(result);
  resultNum.appendChild(numContainer2);
  resultNum.appendChild(percentage);
  resultNum.appendChild(numContainer);
  percentage.appendChild(percentageNum);
  result.appendChild(score);
  numContainer.appendChild(check);
  numContainer2.appendChild(check2);
  numContainer.appendChild(complement);
  numContainer2.appendChild(complement2);
  result.appendChild(resultNum);
  result.appendChild(restart);
  //  =================================================================================================================
};
