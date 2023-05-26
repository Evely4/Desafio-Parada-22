var questionBank= [
    {
        question : 'Em que ano o samba foi elevado a categoria de canção popular nacional?',
        option : ['1980','1930','1940','1955'],
        answer : '1930'
    },
    {
        question : ' Em que ano Juscelino Kubitschek realizou a inauguração de Brasília, a capital do Brasil?',
        option : ['1958','1968','1960','1971'],
        answer : '1960'
    },
    {
        question : 'Quantos anos Getúlio Vargas governou o país?',
        option : ['15 anos','20 anos','14 anos','10 anos'],
        answer : '15 anos'
    },
    {
        question : 'Que ano ocorreu a Proclamação da República no Brasil?',
        option : ['1888','1889','1867','1945'],
        answer : '1889'
    },
    {
        question : 'Quem assumiu o governo provisoriamente?',
        option : ['D. Pedro II','Deodoro da Fonseca','Getúlio Vargas','Juscelino Kubitschek'],
        answer : 'Deodoro da Fonseca'
    },
  
    {
        question : 'Com a Proclamação da República, o Brasil foi dividido em cinco fases. Qual dessas afirmativas, está na linha do tempo corretamente?',
        option : ['Primeira República - Governo democrático - Era Vargas - Nova República - Ditadura Civil Militar','Primeira República - Era Vargas - Governo democrático - - Ditadura Civil Militar - Nova República',' Era Vargas - Governo democrático - Ditadura Civil Militar - Primeira República - Nova República','Nova República - Primeira República - Ditadura Civil Militar - Governo democrático - Era Vargas'],
        answer : 'Primeira República - Era Vargas - Governo democrático - - Ditadura Civil Militar - Nova República'
    },
   
    {
        question : 'Quando ocorreu os governos democráticos?',
        option : ['1930 a 1945','1945 a 1964','1889 a 1930' , '1964 a 1985'],
        answer : '1945 a 1964'
    },
    
    {
        question : 'O fim da República velha ocorreu com:',
        option : ['Um movimento de oposição a oligarquia cafeeira, conhecido como Revolução de 1930.','Estudantes e trabalhadores se uniram em um movimento.','O povo se reuniu contra Vargas em 1983.' , 'O povo se reuniu para eleger outro presidente em 1945.'],
        answer : 'Um movimento de oposição a oligarquia cafeeira, conhecido como Revolução de 1930.'
    },
    
    {
        question : 'Em que ano ocorreu a Era Vargas?',
        option : ['1964 a 1985','1889 a 1930','1930 a 1945' , '1985 até os dias atuais.'],
        answer : '1930 a 1945'
    },
    
    {
        question : 'Em que dia, mês e ano foi proclamado a República do Brasil?',
        option : ['16 de dezembro de 1900','15 de novembro de 1889','14 de outubro de 1888' , '13 de setembro de 1887'],
        answer : '15 de novembro de 1889'
    },
    
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();