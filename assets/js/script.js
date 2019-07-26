const API = '';
user = '';


function validHash(hash){
    $.get(
        `${API}`,
        (data) => {
            if(data.result == 'granted'){
                
            }else{

            }
        }
    );
}

function loadGame(user){
    $.get(
        `${API}`,
        (data) => {
            
        }
    );
}

function showQuestions(questions){

    var questionNumber = $("#questionNumber");

    var questionDescription = $("#questionDescription");
    var questionOption1 = $("#questionOption1");
    var questionOption2 = $("#questionOption2");
    var questionOption3 = $("#questionOption3");

    questionDescription.innerHTML(`${question.description}`);    
    questionOption1.innerHTML(`${question.description}`);    
    questionOption2.innerHTML(`${question.description}`);    
    questionOption3.innerHTML(`${question.description}`);    

}



$(function() {


    


});

