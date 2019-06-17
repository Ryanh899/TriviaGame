//timer start count
var timer = 10;
//array of question objects, with answers 
var questionArr = [{
    question: "What Native American language was Super Bowl XXX the first to be broadcast in?",
    answer: ["a. beer", "b. Navajo", "c. beer", "d. beer"],
},
{
    question: "How many years must a player be retired to be eligible for the Pro Football Hall of Fame?",
    answer: ["a. beer", "b. beer", "c. five", "d. beer"]
},
{
    question: "What was Miami quarterback Bob Griese the first NFL football player to wear in a game, in 1977?",
    answer: ["a. Glasses", "b. beer", "c. beer", "d. beer"]
},
{
    question: "What record-setting quarterback was the NFL's 82nd draft pick in 1979?",
    answer: ["a. beer", "b. beer", "c. beer", "d. Joe Montana"]
}];
//correct answers array 
var rightAnswers = ["b. Navajo", "c. five", "a. Glasses", "d. Joe Montana"]

//things to say when user answers correctly 
var approval = ["Nice", "You're a trivia pro", "Good Work", "A++"]
var disapproval = ["You suck", "c'mon son", "gtfoh with that ish", "You're better than that"]

//generates random order for answers and makes html elem for them 
function answers(i) {
    var answers = questionArr[i].answer
    for (var i = 0; i < answers.length; i++) {
        var newElement = document.createElement('p');
        newElement.id = answers[i]; newElement.className = "answer";
        newElement.innerHTML = answers[i];
        $('#answer').append(newElement);
    }
}

// answers(wrongAnswers)

//writes start count 
$('#timer').html(10)

//function that runs timer and resets timer 
$('#start').on('click', function(){
setInterval(function clock (num1, arr) {
    timer--;
    $('#timer').html(timer);
    if (timer === 0) {
        timer = 10;
        $('#timer').html(timer);
        $('#answer').html('')
    }
}, 1000)
})
i = -1;
//writes questions and answers 
+function question() {
    i = (i + 1) % questionArr.length;
    $('#question').html(questionArr[i].question);
    answers(i)
    click(correct, incorrect)
    setTimeout(question, 10000);
}();
//on click function for answers 
function click(func1, func2) {
    $('.answer').on('click', function (e) {
        var value = this.id
        if (value === rightAnswers[i]) {
            stop()
            func1()
        } else {
            func2()
        }
    })
}
//displays what should be displayed when correct
function correct() { 
    var good = approval[Math.floor(Math.random() * approval.length)];
    $('#question').html(good);
    setTimeout(correct, 3000)
}
//displays what should be displayed if incorrect
function incorrect() {
    var bad = disapproval[Math.floor(Math.random() * disapproval.length)];
    $('#question').html(bad);
    }