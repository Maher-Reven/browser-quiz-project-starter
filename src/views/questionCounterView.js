export const createQuestionCounterElemenet=(data)=>{

    console.log('counter=====',data);
    const element = document.createElement('div');

    element.innerHTML = String.raw`
    <div class="counterQuestion">
      <p>Question : ${data.currentQuestionIndex+1}/${data.questions.length}</p>
    </div>
  `;

    return element;


}