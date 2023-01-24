// 
var questionElement = document.querySelector("#questions");
var choicesElement = document.querySelector("#choices");
var buttonClk = document.querySelector(".start");
var choiceClk = document.querySelector("#choices");
var starter = document.querySelector("#start-screen");
var timerEl = document.getElementById('time');
var endScreen = document.getElementById('end-screen');
var playerInitials = document.querySelector("#initials");
var finalScore = document.querySelector("#final-score");
var submitButton = document.getElementById('submit');
//questionElement.textContent = questions[0].question1;
var counter = 0
var feedback = '';
var quizScore = 0;
var timeLeft = 0
var correctSound = new Audio('../sfx/correct.wav');
var incorrectSound = new Audio('../sfx/incorrect.wav');

function displayResult() {
    questionElement.setAttribute("class","hide");
    endScreen.setAttribute("class","start");
    var finScoreEl = document.getElementById("final-score");
    finScoreEl.textContent = quizScore+" out of 10";

}
// Timer that counts down from 60
function countdown() {
    timeLeft = 60;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = 'Times Up!';
        
        //

        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayResult();
      }
    }, 1000);
  }

function getFirstQuestion(){
        questionElement.textContent = Object.values(questions[counter])[0];
        questionElement.textAlign = "left";
        for (var i = 1; i < Object.values(questions[counter]).length - 1; i++) {

            var div = document.createElement("div");
            var button = document.createElement("button");
            button.textContent = Object.values(questions[counter])[i];
            div.appendChild(button);
            div.textAlign = "left";
            questionElement.appendChild(div);
        }          
       // alert(questionElement.textContent);    
}

function getNextQuestion(){
    var state = questionElement.getAttribute("class");
    if (state !== "start"){
        questionElement.setAttribute("class","start");
        // alert(state);
    }
    questionElement.textContent = Object.values(questions[counter])[0];
    questionElement.textAlign = "left";
    for (var i = 1; i < Object.values(questions[counter]).length - 1; i++) {
        var div = document.createElement("div");
        var button = document.createElement("button");
        button.textContent = Object.values(questions[counter])[i];
        div.appendChild(button);
        div.textAlign = "left";
        questionElement.appendChild(div);
    }          
    //return feedback
    var pElem = document.createElement("p");
    pElem.textContent = "_________________________________________________";
    pElem.textAlign = "left";
    questionElement.appendChild(pElem);
    var pElem = document.createElement("p");
    pElem.textContent = feedback;
    pElem.textAlign = "left";
    questionElement.appendChild(pElem);
    
    
    //alert(questionElement.textContent);
}

 function clearQuestion(element){
    var pElement= element.parentElement;
    var gpElement = pElement.parentElement; 
    for(i=1;i < Object.values(questions[counter]).length - 1;i++){
        gpElement.removeChild[i];
    }
    counter++
 }

buttonClk.addEventListener("click",function(event){
    var element = event.target;
    var state = starter.getAttribute("class");
    if (state === "start"){
        starter.setAttribute("class","hide");
        questionElement.setAttribute("class","start");
       // alert(state);
    }
    if (element.matches("button")== true){
        getFirstQuestion();
        countdown();
    }
})
questionElement.addEventListener("click",function(event){
    var element = event.target;
    if (counter <= 10 && timeLeft >= 0){
        //alert(element);
        if (element.matches("button")==true) {
        if (element.textContent[0] === Object.values(questions[counter])[5][0]){
                correctSound.play();
                feedback = "Well done! That was the correct answer";
                quizScore++;
        }else {
                incorrectSound.play();
                feedback = "Incorrect! "+ Object.values(questions[counter])[5].substring(2,) ;
                timeLeft -= 10;
        } 
        clearQuestion(element)
        getNextQuestion(); 
            // alert ("I am here");
        }
    }else{
        displayResult();
    }
})

submitButton.addEventListener("click",function(event){
    event.preventDefault();
    var scoreBoard = {
        pInitial: playerInitials.value,
        fScore: finalScore.value
      };
    // validate the fields
    if (scoreBoard.pInitial === "") {
        displayMessage("error", "Player initials cannot be blank");
      } else {
        alert("success", "Results recorded successfully");
        // set new submission
        localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));
        window.location.href = 'highscores.html';
    }
    
})

