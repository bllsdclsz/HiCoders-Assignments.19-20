class Questions{
    constructor(pQuestions, pChoices, answer){
        this.questions = pQuestions;
        this.choices = pChoices;
        this.answer = answer;
    }

    checkAnswer = function(pAnswer){
        return this.answer === pAnswer;
    }


}

class quiz{
    constructor(questions){
        this.questions = questions;
        this.score = 0;
        this.questionIndex = 0;
    }

    getQuestions = function(){
        return this.questions[this.questionIndex];
    }

    isFinish = function(){
        return this.questions.length === this.questionIndex;
    }

    guess = function (pAnswer) {
        let question = this.getQuestions();
        if(question.checkAnswer(pAnswer)){
            this.score++;
        }
        this.questionIndex++;
    }

    
}



let q1 = new Questions("What does Nuss mean?", ["Findik", "Ceviz", "Atlamak", "Sehir"], "Ceviz");

let q2 = new Questions("What does Teller mean?", ["Tabak", "Araba", "Telefon", "Gitmek"], "Tabak");

let q3 = new Questions("What does Eis mean?", ["Kitap", "Kalem", "Oyuncak", "Buz"], "Buz");

let questions =[q1, q2, q3];


let doQuiz = new quiz(questions);

function loadQuestion() {
    if(doQuiz.isFinish()){
        showScore();
    }else{
        let question = doQuiz.getQuestions();
        let choices = question.choices;
        document.querySelector("#question").innerHTML = question.pQuestions;

        for(let i = 0;i<choices.length;i++){
            let element = document.querySelector("#choice"+i);
            element.innerHTML = choices[i];



            answerGuess('btn'+i, choices[i]);
        }

        showProgress();
    }
    
}

function answerGuess(pId, pGuess){
    let btn = document.getElementById(pId);
    btn.addEventListener('click', function(){
        doQuiz.guess(pGuess);
        loadQuestion();
    })
} 

function showScore() {
    let html = `<h2>Score</h2><h4>${doQuiz.score}</h4>`;
    document.querySelector(".card-body").innerHTML = html;
}

function showProgress(){
    let totalQuestion = doQuiz.questions.length;
    let questionNumber = doQuiz.questionIndex+1;
    document.querySelector("#progress").innerHTML = 'Question' + questionNumber + ' of ' + totalQuestion;
}

loadQuestion();
console.log(doQuiz.isFinish());