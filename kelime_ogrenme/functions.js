class Questions {
    constructor(q, options, answer) {
        this.questions = q;
        this.options = options;
        this.answer = answer;
        this.score = 0;
        this.questionIndex = 0;
    }

    getQuestions = function () {
        return this.questions[this.questionIndex];
    }
    /**
     * checkAnswer fonksiyonunda bir hata verdi, bundan dolayi cozemedim.
     */
    checkAnswer = function (pAnswer) {
        return this.answer === pAnswer;
    }

    isFinish = function () {
        return this.questions.length === this.questionIndex;
    }

    guess = function () {
        let question = this.getQuestions();
        if (question.checkAnswer(this.answer)) {
            this.score++;
        }
        this.questionIndex++;
    }
}

function loadQuestions() {
    if (Quiz.isFinish()) {
        showScore();
    } else {
        let question = Quiz.getQuestions();
        let choices = question.options;
        document.querySelector("#question").innerHTML = question.q;
        for (let i = 0; i < choices.length; i++) {
            let element = document.querySelector(`#choice${i}`);
            element.innerHTML = choices[i];
            answerGuess(`btn${i}`, choices[i]);
        }
        showProgress();
    }
}

function answerGuess(pId, pGuess) {
    let btn = document.getElementById(pId);
    btn.addEventListener('click', function () {
        Quiz.guess(pGuess);
        loadQuestions()
    })
}

function showProgress() {
    let progress = document.querySelector("#progress");
    let totalQuestions = Quiz.questions.length;
    let currentQuestion = Quiz.questionIndex + 1;
    progress.innerHTML = `Question ${currentQuestion} of ${totalQuestions}`;
}

function showScore() {
    let html = `<h2>Score</h2><h4>${Quiz.score}</h4`;
    document.querySelector(".card-body").innerHTML = html;
}

function addRandomQuestion() {
    let randomNumber = Math.floor(Math.random() * questions.length);
    this.questionIndex = randomNumber;
    return loadQuestions();
}