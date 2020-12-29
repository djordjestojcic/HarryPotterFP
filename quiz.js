const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
      {
        question: "What are the name of Harry two best friends?",
        answers: {
          a: "Hemione and Ron",
          b: "Ron and Hagrid",
          c: "Snape and Cho"
        },
        correctAnswer: "a"
      },
      {
        question: "Which wizarding school does Harry attend?",
        answers: {
          a: "Durmstrang",
          b: "Beauxbatons",
          c: "Hogwarts"
        },
        correctAnswer: "c"
      },
      {
        question: "What Hogwarts House is Harry in?",
        answers: {
          a: "Slytherin",
          b: "Gryffindor",
          c: "Hufflepuff",
          d: "Ravenclaw"
        },
        correctAnswer: "b"
      },
      {
        question: "Who is Harry Potter's enemy?",
        answers: {
          a: "Dumbledore",
          b: "Voldemort",
          c: "Bruice Lee",
          d: "Lorem Ipsum"
        },
        correctAnswer: "b"
      },
    ];
// Functions
function buildQuiz(){
    const quiz = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
      const answers = [];
  
      for(letter in currentQuestion.answers){

        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
  
      quiz.push(
        `<div class="slide">
          <div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>
        </div>`
      );
    }
  );
  
  quizContainer.innerHTML = quiz.join('');
}
  
function showResults(){
  
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');
  const quizBackground=document.getElementById("quiz1");
  const refreshQuiz=document.getElementById("refresh");
  // keep track of user's answers
  let numCorrect = 0;
  
  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;

      answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
      answerContainers[questionNumber].style.color = 'red';
      }
    });

    if(numCorrect>2){
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}. Bravo! :D`;
      quizBackground.style.backgroundImage="url('img/gif2.gif')";
      refreshQuiz.style.display='inline-block';
    }
    else if(numCorrect==0){
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}. Shame on you! :|`;
      quizBackground.style.backgroundImage="url('img/gif4.gif')";
      refreshQuiz.style.display='inline-block';
    }
    else{
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}. Not too bad :)`;
      quizBackground.style.backgroundImage="url('img/gif3.gif')";
      refreshQuiz.style.display='inline-block';
    }  
}
  
function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide === 0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide === slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}
  
function showNextSlide() {
  showSlide(currentSlide + 1);
}
  
function showPreviousSlide() {
  showSlide(currentSlide - 1);
}
        
buildQuiz();
  
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
    
showSlide(currentSlide);
  
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
    
  