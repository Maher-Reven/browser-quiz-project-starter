import {
  USER_INTERFACE_ID,
} from '../constants.js';

export const progressionBar = (currentIndex) => {

const userInterface = document.getElementById(USER_INTERFACE_ID);

const progressionDiv = document.createElement('div');
progressionDiv.classList.add('progress-container')
const progress = document.createElement('div');
progress.classList.add('progress')

userInterface.appendChild(progressionDiv)
progressionDiv.appendChild(progress)
let num = 21.5;


num *= currentIndex;




progress.style.width = num+'px';
}