/**
 * Bu class model.js te atadigimiz sorulari yapilandiriyor.
 */
class Question {
    constructor(pQuestion, pOptions, pAnswer) {
        this.question = pQuestion;
        this.options = pOptions;
        this.answer = pAnswer;
    }
}

/**
 * Testimizi fonksiyonel hale getiren class'tir.
 * Constructor da bir array'e karisik olarak gonderdigimiz sorular, dogru cevap bilgisi ve array'in index bilgisi yapilandirilir.
 */
class Quiz {
    constructor(pQuestions) {
        this.questions = pQuestions;
        this.score = 0;
        this.questionIndex = 0;
    }

    /**
     * getQuestions() Sorulari index bilgisine gore döndürür.
     */
    getQuestions() {
        return this.questions[this.questionIndex];
    }

    /**
     * isFinish() Testin bitip bitmedigi bilgisini döndürür.
     */
    isFinish() {
        return this.questions.length === this.questionIndex;
    }

    /**
     * loadQuestions fonksiyonu sorulari ve secenekleri ekrana yazdirir.
     * if kosuluyla testin bitmesi durumunda sonucu döndürür.
     */
    loadQuestions = function () {
        if (startQuiz.isFinish()) {
            startQuiz.showScore();
            document.querySelector("#scoreSpanH4").style.display = "none";
        } else {
            let question = startQuiz.getQuestions();
            let choices = question.options;
            document.querySelector("#question").innerHTML = question.question;
            document.querySelector("#choice0").innerHTML = choices[0];
            document.querySelector("#choice1").innerHTML = choices[1];
            document.querySelector("#choice2").innerHTML = choices[2];
            document.querySelector("#choice3").innerHTML = choices[3];
            document.querySelector("#scoreSpan").innerHTML = startQuiz.score;
            this.showProgress();
        }
    }

    /**
     * showProgress fonsiyonu test kartinin altinda kac soru icinden hangi soruda oldugu bilgisini döndürür.
     */
    showProgress = function () {
        let progress = document.querySelector("#progress");
        let totalQuestions = startQuiz.questions.length;
        let currentQuestion = startQuiz.questionIndex + 1;
        progress.innerHTML = `Question ${currentQuestion} of ${totalQuestions}`;
    }

    /**
     * addEventChoice fonsiyonu her bir secenege hareket kazandirir ve secilen secenegin parametrelerle dogru olup olmadigini kontrol eder.
     */
    addEventChoice = () => {

        document.querySelector(`#choice0`).addEventListener('click', () => {

            this.checkGuess(this.questions[this.questionIndex].options[0], startQuiz.questions[this.questionIndex].answer, 0)
        })
        document.querySelector(`#choice1`).addEventListener('click', () => {

            this.checkGuess(this.questions[this.questionIndex].options[1], startQuiz.questions[this.questionIndex].answer, 1)
        })
        document.querySelector(`#choice2`).addEventListener('click', () => {
            this.checkGuess(this.questions[this.questionIndex].options[2], startQuiz.questions[this.questionIndex].answer, 2)
        })
        document.querySelector(`#choice3`).addEventListener('click', () => {
            this.checkGuess(this.questions[this.questionIndex].options[3], startQuiz.questions[this.questionIndex].answer, 3)
        })
    }

    /**
     * checkGuess fonsiyonu verilen parametreleri kosula göre döndürür.
     */
    checkGuess = (pSelect, pAnswer) => {
        if (pSelect === pAnswer) {
            this.score++;
        }
        startQuiz.nextQuestion()
    }

    /**
     * nextQuestion fonksiyonu sonraki kosula bagli olarak indexi 1 kere arttirir ve sonraki soruyu döndürür.
     */
    nextQuestion = () => {
        if (!this.isFinish()) {
            this.questionIndex++;
            this.loadQuestions();
        }
    }

    /**
     * showScore fonksiyonu sonucu ekrana yazdirir.
     */
    showScore = function () {
        let html = `<h2>Score</h2><h4>${startQuiz.score}</h4><br><button class="tryAgainButton" onclick='location.reload()'>Try Again</button>`;
        document.querySelector(".card-body").innerHTML = html;
    }
}