'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  currentScore: 0,

  questions: [
    {
      text:
        'Which of these methods create a new array without mutating the original array where the data is coming from ?',
      answers: {
        a: 'every()',
        b: 'fill()',
        c: 'filter()',
        d: 'find()',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
        },
      ],
    },
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'What does `typeof` do?',
      answers: {
        a: 'changes the type of a primitive value',
        b: 'returns a string describing the type of a value',
        c: 'determines if a value is primitive',
        d: 'can tell the difference between arrays and objects',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text: 'How do you round the number 7.25, to the nearest integer?',
      answers: {
        a: 'round(7.25)',
        b: 'Math.round(7.25)',
        c: 'rnd(7.25)',
        d: 'Math.rnd(7.25)',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/number#rounding',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round',
        },
      ],
    },
    {
      text: 'What will this code returns: Boolean(15 > 10)?',
      answers: {
        a: 'false',
        b: 'true',
        c: 'NaN',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/logical-operators',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean',
        },
      ],
    },
    {
      text: 'What is the mean by "this" keyword in javascript?',
      answers: {
        a: 'It refers current object',
        b: 'It refers previous object',
        c: 'It is variable which contains value',
        d: 'None of the above',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this',
        },
        {
          text: 'Tutorials Teacher',
          href:
            'https://www.tutorialsteacher.com/javascript/this-keyword-in-javascript',
        },
      ],
    },
    {
      text: 'Where is the correct place to insert JavaScript in HTML?',
      answers: {
        a: 'Both the head section and the body section are correct',
        b: 'The head section',
        c: 'The body section',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Javapoint.com',
          href:
            'https://www.javatpoint.com/how-to-add-javascript-to-html#:~:text=To%20add%20the%20JavaScript%20code%20into%20the%20HTML,of%20the%20web%20page%20that%20the%20users%20use.',
        },
        {
          text: 'W3school',
          href: 'https://www.w3schools.com/js/js_whereto.asp',
        },
      ],
    },
    {
      text:
        'Which function is used to know if the array contains a specific element value or not ?',
      answers: {
        a: 'filter',
        b: 'map',
        c: 'includes',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href:
            'https://javascript.info/array-methods#indexof-lastindexof-and-includes',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
        },
      ],
    },
    {
      text: 'what is the return of this code Math.round(-13.5) ?',
      answers: {
        a: '-21',
        b: '20',
        c: '-13',
        d: '21',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round',
        },
        {
          text: 'W3school',
          href: 'https://www.w3schools.com/jsref/jsref_round.asp',
        },
      ],
    },
    {
      text: 'Which of the following is not a higher-order function?',
      answers: {
        a: 'map()',
        b: 'splice()',
        c: 'forEach()',
        d: 'filter()',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'codecademy.',
          href:
            'https://www.codecademy.com/learn/game-dev-learn-javascript-higher-order-functions-and-iterators/modules/game-dev-learn-javascript-iterators/cheatsheet#:~:text=In%20Javascript%2C%20functions%20can%20be,and%2For%20returns%20a%20function.',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
        },
      ],
    },
  ],
};
