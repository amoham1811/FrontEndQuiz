// 
var questionElement = document.querySelector("#questions");
var choicesElement = document.querySelector("#choices");
var buttonClk = document.querySelector(".start");
var choiceClk = document.querySelector("#choices");
var starter = document.querySelector("#start-screen");
var endScreen = document.getElementById('end-screen');
var playerInitials = document.querySelector("#initials");

//questionElement.textContent = questions[0].question1;
var feedback = '';
var quizScore = 0;
var counter = 0;

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
    }
})
questionElement.addEventListener("click",function(event){
    var element = event.target;
    if (counter <= 10){ 
        clearQuestion(element)
        getNextQuestion(); 
    }
    
})

