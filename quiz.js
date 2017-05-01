function correctAnswer() {
    pointsCount++;
    alert("You got it!" + " " + "You now have" + " " + pointsCount + " " + "points!");
}
function wrongAnswer() {
    alert("Wrong!" + " " + "You now have" + " " + pointsCount + " " + "points!");
}
var pointsCount = 0;
var Question = (function () {
    function Question(questionName, questionString) {
        this.questionName = questionName;
        this.questionString = questionString;
    }
    return Question;
}());
var question1 = new Question("What is the name of the red haired witch in Supernatural?", "1. Melanie . 2. Anna. 3. Rowena.");
var firstAnswer = firstQuestion();
function firstQuestion() {
    return prompt(question1.questionName + " " + question1.questionString);
}
if (firstAnswer.toLowerCase() == "rowena") {
    correctAnswer();
}
else {
    wrongAnswer();
}
var question2 = new Question("What is the type of car Dean in Supernatural drives?", "1. Impala. 2. Truck. 3. Beatle.");
var secondAnswer = secondQuestion();
function secondQuestion() {
    return prompt(question2.questionName + " " + question2.questionString);
}
if (secondAnswer.toLowerCase() == "impala") {
    correctAnswer();
}
else {
    wrongAnswer();
}
var question3 = new Question("What is Sam's nickname?", "1. Peter. 2. Moose. 3. Mouse.");
var thirdAnswer = thirdQuestion();
function thirdQuestion() {
    return prompt(question3.questionName + " " + question3.questionString);
}
if (thirdAnswer.toLowerCase() == "moose") {
    correctAnswer();
}
else {
    wrongAnswer();
}
var question4 = new Question("Best method of defense against a Wearwolf?", "1. Silver Bullet. 2. Wooden Stake. 3. Music.");
var fourthAnswer = fourthQuestion();
function fourthQuestion() {
    return prompt(question4.questionName + " " + question4.questionString);
}
if (fourthAnswer.toLowerCase() == "silver bullet") {
    correctAnswer();
}
else {
    wrongAnswer();
}
var question5 = new Question("What is the name of the King of Hell?", "1. Mark. 2. Crowley. 3. Tim.");
var fifthAnswer = fifthQuestion();
function fifthQuestion() {
    return prompt(question5.questionName + " " + question5.questionString);
}
if (fifthAnswer.toLowerCase() == "crowley") {
    correctAnswer();
}
else {
    wrongAnswer();
}
if (pointsCount === 5) {
    alert("You won!");
}
else {
    alert("You lost!");
}
