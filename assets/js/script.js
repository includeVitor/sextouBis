const API = 'http://localhost:3000/';
user = '';
question1 = {id:'1', description:'edsadsadad',option1:'x',option2:'y', option3:'z', option4:'zz', option5:'xy'};
question2 = {id:'2', description:'edsadsadad',option1:'x',option2:'y', option3:'z', option4:'zz', option5:'xy'};
question3 = {id:'3', description:'edsadsadad',option1:'x',option2:'y', option3:'z', option4:'zz', option5:'xy'};
answer = '';

function validateHash(hash){
    $.get(
        `${API}check/${$("#hash").val()}`,
        (data) => {
            if(data[0]){

                $("#sectionHash").hide();
                $("#sectionQuestions").show();
                user.id = data[0].id
                user.nome = data[0].nome
                loadGame(user)
                
            }else{
                alert('token não valido!');
            }
        }
    );
}

function loadGame(user){
    $.get(
        `${API}perguntas/random`,
        (data) => {
            question1.id = data[0].id
            question1.description = data[0].pergunta
            question1.option1 = data[0].alternativa1
            question1.option2 = data[0].alternativa2
            question1.option3 = data[0].alternativa3
            question1.option4 = data[0].alternativa4
            question1.option5 = data[0].alternativa5

            question2.id = data[1].id
            question2.description = data[1].pergunta
            question2.option1 = data[1].alternativa1
            question2.option2 = data[1].alternativa2
            question2.option3 = data[1].alternativa3
            question2.option4 = data[1].alternativa4
            question2.option5 = data[1].alternativa5


            question3.id = data[2].id
            question3.description = data[2].pergunta
            question3.option1 = data[2].alternativa1
            question3.option2 = data[2].alternativa2
            question3.option3 = data[2].alternativa3
            question3.option4 = data[2].alternativa4
            question3.option5 = data[2].alternativa5

            showQuestions(question1, 1);
        }
    );
}

function showQuestions(question, number){

    let qtdMaximaQuestions = 3;
    let questionNumber = $("#questionNumber");

    let questionDescription = $("#questionDescription");
    let questionOption1 = $("#questionOption1");
    let questionOption2 = $("#questionOption2");
    let questionOption3 = $("#questionOption3");
    let questionOption4 = $("#questionOption4");
    let questionOption5 = $("#questionOption5");

    let labelQuestionOption1 = $("#labelQuestionOption1");
    let labelQuestionOption2 = $("#labelQuestionOption2");
    let labelQuestionOption3 = $("#labelQuestionOption3");
    let labelQuestionOption4 = $("#labelQuestionOption4");
    let labelQuestionOption5 = $("#labelQuestionOption5");
    let buttons = $("#buttons");
    let questionID = $("#questionID");

    

    questionNumber.text(`Pergunta ${number}`);

    questionDescription.text(`${question.description}`); 

    questionOption1.val(`${question.option1}`);    
    questionOption2.val(`${question.option2}`);    
    questionOption3.val(`${question.option3}`);    
    questionOption4.val(`${question.option4}`);    
    questionOption5.val(`${question.option5}`);   

    labelQuestionOption1.text(`${question.option1}`);    
    labelQuestionOption2.text(`${question.option2}`);    
    labelQuestionOption3.text(`${question.option3}`);    
    labelQuestionOption4.text(`${question.option4}`);    
    labelQuestionOption5.text(`${question.option5}`);
    
    

    if( number < qtdMaximaQuestions){

        buttons.html(
        `
        <label class="font-weight-light">
            <button class="btn btn-primary" onClick="adicionaAnswer(${question.id});showQuestions(question${number+1}, ${number+1})">Próximo</button>
        </label>
        `);
        
    }else{
        buttons.html(
        `
        <label class="font-weight-light">
            <button class="btn btn-success" onClick="adicionaAnswer(${question.id});pegarBis()" >Tentar pegar meus BIS</button>
        </label>
        `);
    }

}

function adicionaAnswer(id){
    answer += `${$("input[name='options']:checked").val()};`;
}

function pegarBis(){

    answer = answer.substr(1,(answer.length - 1))

    $.post(
        `${API}pegarBis`,
        {answers: answer},
        (data) => {
            alert(`você tem direito a ${data[0].QTD} BIS`);
        }
    );
}

function initializeUI(){

   $("#sectionQuestions").hide();

}





$(function() {

    initializeUI();
    


});

