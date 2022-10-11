export const createProgressionBar =(data)=>{
    const element = document.createElement('div');
    element.id='progression_bar'
    const childElement = document.createElement('div')

    element.appendChild(childElement);

    const numberOfQuestion=data.questions.length;
    let currentQuestion=data.currentQuestionIndex +1
    let width = (currentQuestion * 100) / numberOfQuestion;
    
    if (currentQuestion > numberOfQuestion) {
        return;
      }

    childElement.style.width = width + '%';
    return element;

}

