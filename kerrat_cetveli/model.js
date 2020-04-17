/**
 * Question class'i nesneyi tanimliyor.
 */
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
/**
 * Person class'i kisileri de nesnemize ekliyor.
 */
class Person {
    constructor(name) {
        this.name = name;
        this.quizes = [];
        this.restartContainer = document.querySelector("#restart-container");
    }
    /**
     * 
     * @param quiz - nesnemizi bir arraye gönderiyor.
     */
    addQuiz(quiz) {
        if (this.quizes.length == 10) {
            this.restartContainer.hidden = false;
            new Manager().quizContainer.hidden = true;
            new Manager().renderTable();
        } else {
            this.quizes.push(quiz);
        }
    }
}
/**
 * Manager class'i programi yönetiyor.
 */
class Manager {
    constructor(name) {
        this.person = new Person(name);
        this.firstNumber = this.random();
        this.secondNumber = this.random();
        this.scoreTable = document.querySelector("#score-table");
        this.nameElement = document.querySelector("#name");
        this.startButton = document.querySelector("#start-button");
        this.firstNumberDom = document.querySelector("#first-number");
        this.secondNumberDom = document.querySelector("#second-number");
        this.sendButton = document.querySelector("#send-button");
        this.answer = document.querySelector("#answer");
        this.nameContainer = document.querySelector("#name-container");
        this.quizContainer = document.querySelector("#quiz-container");
        this.score = document.querySelector("#score");
        this.fullScreen = document.querySelector("#Full-screen");
        this.normalScreen = document.querySelector("#normal-screen");
        this.currentQuestion = document.querySelector("#current-question");
        this.restartButton = document.querySelector("#restart-button");
        this.timeInput = document.querySelector("#time");
        this.secs = 10;
        this.arrayIndex = 0;
        this.currentScore = 0;
    }
    /**
     * random metodu 1'den 10'a kadar rasgele sayi döndürüyor.
     */
    random() {
        return Math.ceil(Math.random() * 10);
    }
    /**
     * addQuestion metodu DOM'a sayilari ekliyor.
     */
    addQuestion() {
        this.person.name = this.nameElement.value;
        this.firstNumberDom.innerHTML = `${this.firstNumber}`;
        this.secondNumberDom.innerHTML = `${this.secondNumber}`;
    }
    /**
     * addTrainer metodu kisinin ismini girmesiyle quizi baslatiyor.
     */
    addTrainer() {
        this.startButton.addEventListener('click', () => {
            this.addQuestion()
            this.nameContainer.hidden = true;
            this.quizContainer.hidden = false;
        })
    }
    /**
     * addEventSendButton metodu localStorage'a isim ve skor bilgisi gönderip sonraki soruyu getirmesi gerekiyor.
     */
    addEventSendButton() {
        this.sendButton.addEventListener('click', () => {
            this.person.addQuiz(new Question(this.firstNumber, this.secondNumber, this.answer.value));
            this.addQuestion();
            this.arrayIndex++;
            if (this.person.score) {
                this.currentScore++;
            }
            localStorage.setItem(`${this.nameElement.value}`, `${this.nameElement.value}`);
            localStorage.setItem(`${this.nameElement.value}'s score`, `${this.currentScore}`);
        })
    }
    /**
     * showScore metodu sonucu ekrana yazdirmali.
     */
    showScore() {
        if (new Question().score) {
            this.currentScore++;
            this.score.innerHTML = this.currentScore;
        }
    }
    /**
     * 
     * @param pTable - DOM'a tabloyu ekler.
     */
    addTable(pTable) {
        this.scoreTable.innerHTML += pTable;
    }
    /**
     * renderTable metodu tablo cizer.
     */
    renderTable() {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let resultTable = `<table class="table table-sm table-bordered table-hover table-striped">`;
        resultTable += `<thead class="thead-dark">`;
        resultTable += `<tr><th colspan="2">${days[new Date().getDay()]}</th></tr>`
        resultTable += ` <tr>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>`;
        resultTable += `</thead>`;
        resultTable += ` <tr>
                            <td>${localStorage.getItem(`${this.nameElement.value}`)}</td>
                            <td>${localStorage.getItem(`${this.nameElement.value}'s score`)}</td>
                        </tr>`;
        resultTable += `</table>`;
        this.addTable(resultTable);
    }
    /**
     * toggleFullScreen metodu tam ekran ve normal ekran butonlarini hareket kazandirir.
     */
    toggleFullScreen() {
        this.fullScreen.addEventListener('click', () => {
            document.documentElement.requestFullscreen();
        })
        this.normalScreen.addEventListener('click', () => {
            document.exitFullscreen();
        })
    }
    /**
     * resetQuiz metodu restart butonuna hareket kazandirarak quiz tekrar baslatir.
     */
    resetQuiz() {
        this.restartButton.addEventListener('click', () => {
            location.reload();
        });
    }
    /**
     * countdown metodu gerisayimi baslatir.
     */
    countdown() {
        setTimeout(`${this.setTimer()}`, 10000);
    }
    /**
     * setTimer metodu sayaci ayarlar.
     */
    setTimer() {
        if (this.timeInput.value < 11) {
            this.timeInput.value = this.secs;
        } else {
            this.secs;
        }

        if (this.secs < 0) {
            this.timeInput.value = 0;
            this.addQuestion();
        } else {
            this.secs--
            setTimeout(`${this.setTimer()}`, 1000)
        }
    }
    /**
     * start metodu programi baslatir.
     */
    start() {
        this.addTrainer();
        this.addEventSendButton();
        this.toggleFullScreen();
        this.showScore();
        this.resetQuiz();
        this.countdown();
    }
}