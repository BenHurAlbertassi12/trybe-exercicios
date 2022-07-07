function hendleSubmit(event) {
    event.preventDeFault();    
}
window.onload =function () {
    const btnSubmit = document.querySelector ("#btn-submit");
    btnSubmit.addEventListener('click', handleSubmit)

    const clearBtn = document.querySelector('#btn-clear');
    clearBtn.addEventListener('click', clearFields);
   
}

function clearFields(){
    const formElements = document.querySelector('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index++) {
        const userInput = formElements[index];
        userInput.value ='';
        userInput.chacked = false;
            }
textArea.value = '';
        }