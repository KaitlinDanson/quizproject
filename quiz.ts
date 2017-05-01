

function correctAnswer(){
  pointsCount++;
  alert("You got it!" + " " + "You now have" + " " + pointsCount + " " + "points!");
}

function wrongAnswer(){
alert("Wrong!" + " " + "You now have" + " " + pointsCount + " " + "points!");
}


//store score total
let pointsCount = 0;

//questions
class Question {
questionName: string;
questionString: string;

constructor(questionName:string, questionString:string){
  this.questionName = questionName;
  this.questionString = questionString;
}
}


//question one
let question1 = new Question("What is the name of the red haired witch in Supernatural?", "1. Melanie . 2. Anna. 3. Rowena.");
let firstAnswer = firstQuestion();

function firstQuestion(){
  return prompt(question1.questionName + " " + question1.questionString);
}

if (firstAnswer.toLowerCase() == "rowena"){
correctAnswer();
} else {
wrongAnswer();
}


//question two

let question2 = new Question("What is the type of car Dean in Supernatural drives?","1. Impala. 2. Truck. 3. Beatle.");
let secondAnswer = secondQuestion();
function secondQuestion(){
  return prompt(question2.questionName + " " + question2.questionString);
}

if (secondAnswer.toLowerCase() == "impala"){
  correctAnswer();
} else {
    wrongAnswer();
  }


//question three

let question3 = new Question("What is Sam's nickname?","1. Peter. 2. Moose. 3. Mouse.");
let thirdAnswer = thirdQuestion();
function thirdQuestion(){
  return prompt(question3.questionName + " " + question3.questionString);
}

if (thirdAnswer.toLowerCase() == "moose"){
  correctAnswer();
} else {
  wrongAnswer();
}

//question four

let question4 = new Question("Best method of defense against a Wearwolf?", "1. Silver Bullet. 2. Wooden Stake. 3. Music.");
let fourthAnswer = fourthQuestion();

function fourthQuestion(){
  return prompt(question4.questionName + " " + question4.questionString);
}

if (fourthAnswer.toLowerCase() == "silver bullet"){
  correctAnswer();
} else {
  wrongAnswer();
}

//question five


let question5 = new Question("What is the name of the King of Hell?","1. Mark. 2. Crowley. 3. Tim.");

let fifthAnswer = fifthQuestion();

function fifthQuestion(){
  return prompt(question5.questionName + " " + question5.questionString);
}

if (fifthAnswer.toLowerCase() == "crowley"){
  correctAnswer();
} else {
  wrongAnswer();
}


if (pointsCount === 5){
alert("You won!");
} else {
alert("You lost!");
}
