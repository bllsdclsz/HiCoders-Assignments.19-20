class Question {
    constructor(pFirstNumber, pSecondNumber, pAnswer) {
        this.date = new Date().toDateString();
        this.expected = pFirstNumber * pSecondNumber;
        this.score = this.expected == pAnswer;
        this.firstNumber = pFirstNumber;
        this.secondNumber = pSecondNumber;
        this.answer = pAnswer;
    }
}

class Person {
    constructor(name) {
        this.name = name;
        this.quizes = [];
    }

    addQuiz(quiz) {
        if(this.quizes.length!=10){
            this.quizes.push(quiz);
        }else{
            false;
        }
    }

    printResults() {
        this.quizes.forEach(question => {
            console.log(this.name, question.date, question.firstNumber,
                question.secondNumber, question.answer, question.expected,
                question.score);
        })
    }
}



class Manager {
    constructor(name) {
        this.person = new Person(name);
        this.firstNumber = this.random();
        this.secondNumber = this.random();
        this.scoreTable = document.querySelector("#Score-table");
        this.nameElement = document.querySelector("#name");
        this.startButton = document.querySelector("#start-button");
        this.firstNumberDom = document.querySelector("#first-number");
        this.secondNumberDom = document.querySelector("#second-number");
        this.answerButton = document.querySelector("#answer-button");
        this.answer = document.querySelector("#answer");
        this.nameContainer = document.querySelector("#name-container");
        this.quizContainer = document.querySelector("#quiz-container");
    }

    random() {
        return Math.ceil(Math.random() * 10);
    }

    addQuestion(){
        this.firstNumberDom.innerHTML = this.firstNumber;
        this.secondNumberDom.innerHTML = this.secondNumber;
    }

    addTrainer(){
        this.startButton.addEventListener('click', ()=>{
            this.person = this.nameElement.value;
            this.addQuestion();
            this.nameContainer.setAttribute(hidden);
            this.quizContainer.removeAttribute(hidden);
        })
    }

    check() {
        // ilk, ikinci ve sonuc sayilarini html den al
        this.person.addQuiz(new Question(this.firstNumber, this.secondNumber, this.answer.value));
        this.person.printResults();
    }

    addTable(pTable){
        this.scoreTable.innerHTML = pTable;
    }

    renderTable(){
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let scoreTable = `<table class="table table-sm table-bordered table-hover table-striped">`;
        scoreTable += `<thead class="thead-dark">`;
        scoreTable += `<tr><th colspan="2">${days[new Date().getDay()]}</th></tr>`
        scoreTable += ` <tr>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>`;
        scoreTable += `</thead>`;
        scoreTable += ` <tr>
                            <td></td>
                            <td></td>
                        </tr>`;
        scoreTable += `</table>`;
        this.addTable(scoreTable);
    }

    start() {
        // inputlari doldur
        this.addTrainer();
        
    }
}

const manager = new Manager('ahmet');
manager.check();