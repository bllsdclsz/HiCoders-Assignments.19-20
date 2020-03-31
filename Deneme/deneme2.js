function load(){
    questionNumberProgress.innerHTML = `Question ${index + 1} in 8`;
    question.innerHTML = questions[questionIndex].q;
    opt1.innerHTML = questions[questionIndex].options[0];
    opt2.innerHTML = questions[questionIndex].options[1];
    opt3.innerHTML = questions[questionIndex].options[2];
    opt4.innerHTML = questions[questionIndex].options[3];
    index++;
}

function check(element){
    let elementButton = document.getElementById(element.id)
    if(element.id==questions[questionIndex].answer){
        elementButton.style.backgroundColor="green";
        score++;
    }else{
        elementButton.style.backgroundColor="red";
    }
    disabledOptions()
}

function disabledOptions(){
    for(let i=0;i<allOptions.length;i++){
        allOptions[i].classList.add("disabled");
        if(allOptions[i].id==questions[questionIndex].answer){
            let correct = questions[questionIndex].answer
            let correctId = document.getElementById(correct);
            correctId.style.backgroundColor="green";
        }
    }
}

function enableOptions(){
    for(let i=0;i<allOptions.length;i++){
        allOptions[i].classList.remove("disabled");


    }
}

function validate(){
    if(!allOptions[0].classList.contains("disabled")){
        alert("Please select one option!")
    }else{
        enableOptions()
        randomQuestion()
    }
}

function next(){
    nextButton.addEventListener('click', validate)
}


function randomQuestion(){
    let randomNumber = Math.floor(Math.random()*questions.length);
    questionIndex = randomNumber;
    load()
}


randomQuestion()