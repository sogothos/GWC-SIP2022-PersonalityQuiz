//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var result1Score = 0;

var collegeScore = 0;
var potpourriScore = 0;
var sportsScore = 0;
var litScore  = 0;



//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var result = document.getElementById("result");
var restart = document.getElementById("restart");



//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", college);
q1a2.addEventListener("click", potpourri);
q1a3.addEventListener("click", sports);
q1a4.addEventListener("click", lit);

q2a1.addEventListener("click", college);
q2a2.addEventListener("click", potpourri);
q2a3.addEventListener("click", sports);
q2a4.addEventListener("click", lit);

q3a1.addEventListener("click", college);
q3a2.addEventListener("click", potpourri);
q3a3.addEventListener("click", sports);
q3a4.addEventListener("click", lit);

q4a1.addEventListener("click", college);
q4a2.addEventListener("click", potpourri);
q4a3.addEventListener("click", sports);
q4a4.addEventListener("click", lit);

restart.addEventListener("click", redo);



//#TODO: Define quiz functions here
function college(){
  collegeScore++;
  questionCount++;
  if (questionCount >= 4){
    updateResult();
  }
}

function potpourri(){
  potpourriScore++;
  questionCount++;
  if (questionCount >= 4){
    updateResult();
  }
}

function sports(){
  sportsScore++;
  questionCount++;
  if (questionCount >= 4){
    updateResult();
  }
}

function lit(){
  litScore++;
  questionCount++;
  if (questionCount >= 4){
    updateResult();
  }
}

function updateResult() {
  if (collegeScore >= 3) {
    result.innerHTML = "You're the 'Colleges and Universities' category! You're smart, studious, and dedicated. During quarantine, you finished all your virtual work on time.";
  }
  else if (potpourriScore >= 3) {
    result.innerHTML = "You're the 'Before and After' category! You had a lot of fun during quarantine and you did a lot of things. You maybe even made a couple TikToks";
  }
  else if (sportsScore >= 3) {
    result.innerHTML = "You're the 'Sports' category! You're anxious to get out of quarantine and may have broken social distancing a few times";
  }
  else if (litScore >= 3) {
    result.innerHTML = "You're the 'Literature' category! You enjoyed quarantine and took the time to work on your hobbies and interests and maybe even learn something new.";
  }
  else {
    result.innerHTML = "You're the potpurri category! You did a variety of things during quarantine, and you're always finding something new to do."
  }
}

function redo() {
  document.location.href = "";
}