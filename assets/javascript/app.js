//questions/answers array  
var questions = [ 
{question: "What Native American language was Super Bowl XXX the first to be broadcast in?",
answer: "Navajo"} , 
{question:"How many years must a player be retired to be eligible for the Pro Football Hall of Fame?",
answer: "Five"},
{question:"What was Miami quarterback Bob Griese the first NFL football player to wear in a game, in 1977?",
answer: "Glasses"},
{question:"What record-setting quarterback was the NFL's 82nd draft pick in 1979?",
answer: "Joe Montana"}
]
console.log(questions)
//appends first question 
$('#question').append(questions[0].question)

//global variables 
var clockRunning = false; 
var number = 10;

//start function 
function start () {
    var num = 0
   var timer = setInterval(function(){
        number--
        $('#time').html(number)
        if (number === 0) {
            clearInterval(timer)
            num++
            switchQuestion(num)
        }
      }, 1000)
    console.log(number)
    
}
//Gotta get the clock to keep running or to unclear interval 
//what happens on win 
function win () {

}

//what happens on time up 


//what happens on wrong 


//how to switch question 
function switchQuestion (num) {
        $('#question').html(JSON.stringify(questions[num].question))
        
    }

start()
