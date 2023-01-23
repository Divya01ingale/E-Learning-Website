

(function() {
  const myQuestions = [
    {
      question: "Constructor is executed when _____.",
      answers: {
        a: "An object is created",
        b: "An object goes out of scope.",
        c: " A class is declared"
       },
      correctAnswer: "a" 
    
    },
    {
      question: " Where does the object is created?",
      answers: {
        a: "Constructor",
        b: "Class",
        c: "Destructors"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following function / types of function cannot have default parameters?",
      answers: {
        a: "Member function of structure",
        b: "Member function of class",
        c: "Main()",
       
      },
      correctAnswer: "c"
    },
    {
      question: "Correct way to declare pure virtual function in a C++ class is",
      answers: {
        a: "Virtual void foo() {} = 0;",
        b: " Void virtual foo()= { 0 }",
        c: "Virtual void foo() =0 ;",
       
      },
      correctAnswer: "c"
    },
     {
      question: "Which among the following best describes the Inheritance?",
      answers: {
        a: "Using already defined functions in programming language",
        b: "Using the data and functions into derived segment",
        c: "Copying the code already written",
       
      },
      correctAnswer: "b"
    },
     {
      question: "How many basic types of inheritance are provided as OOP feature?",
      answers: {
        a: "4",
        b: "3",
        c: "2",
       
      },
      correctAnswer: "a"
    },
     {
      question: "Which among the following is correct for multiple inheritance?",
      answers: {
        a: "class student{int marks;}; class stream{ }; class topper: public student{ };",
        b: "class student{public: int marks;}s; class stream{int total;}; class topper:public student, public stream{ };",
        c: "class student{int marks;}; class stream:public student{ };",
       
      },
      correctAnswer: "b"
    },
     {
      question: "Which among the following is correct for a hierarchical inheritance?",
      answers: {
        a: "Two base classes can be used to be derived into one single class",
        b: "Two or more classes can be derived into one class",
        c: "One base class can be derived into other two derived classes or more",
       
      },
      correctAnswer: "c"
    },
     {
      question: "Which among the following can be a concept against encapsulation rules?",
      answers: {
        a: "Using function pointers",
        b: "Using char* string pointer to be passed to non-member function",
        c: " Using any kind of pointer/array address in passing to another function",
       
      },
      correctAnswer: "c"
    },
     {
      question: " Encapsulation is the way to add functions in a user defined structure.",
      answers: {
        a: "True",
        b: "False",

       
      },
      correctAnswer: "b"
    },
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "green";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();


        
        
   
    
    
    
    
        

    