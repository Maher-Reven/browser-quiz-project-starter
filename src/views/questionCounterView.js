export const createQuestionCounterElemenet=(currentQuestion,totalQuestion)=>{
        const element = document.createElement('div');
        element.innerHTML = String.raw` 
        <div class="counterQuestion">
          <p>Question : ${currentQuestion}/${totalQuestion}</p>
        </div>
      `;    
        return element;
    
    }