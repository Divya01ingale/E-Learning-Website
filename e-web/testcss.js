(function() {
  const myQuestions = [
    {
      question: "CSS stands for -",
      answers: {
        a: "Cascading style sheets",
        b: "Cascade style sheets",
        c: "Color and style sheets"
       },
      correctAnswer: "a" 
    
    },
    {
      question: "The property in CSS used to change the background color of an element is -",
      answers: {
        a: "bgcolor",
        b: "background-color",
        c: "color"
      },
      correctAnswer: "b"
    },
    {
      question: "The CSS property used to control the element's font-size is -",
      answers: {
        a: "text-style",
        b: "text-size",
        c: "font-size",
       
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following property is used as the shorthand property for the padding properties?",
      answers: {
        a: "padding-left",
        b: "padding-right",
        c: "padding",
       
      },
      correctAnswer: "c"
    },
     {
      question: "Are the negative values allowed in padding property?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Can't say",
       
      },
      correctAnswer: "b"
    },
     {
      question: "Which of the following property is used as the shorthand property of margin properties?",
      answers: {
        a: "margin",
        b: "margin-right",
        c: "None of the above",
       
      },
      correctAnswer: "a"
    },
     {
      question: "The CSS property used to specify whether the text is written in the horizontal or vertical direction?",
      answers: {
        a: "text-indent",
        b: "writing-mode",
        c: "word-break",
       
      },
      correctAnswer: "b"
    },
     {
      question: "How to select the elements with the class name "example"?",
      answers: {
        a: "#example",
        b: "Class example",
        c: ".example",
       
      },
      correctAnswer: "c"
    },
     {
      question: "The CSS property used to draw a line around the elements outside the border?",
      answers: {
        a: "padding",
        b: "border",
        c: "outline",
       
      },
      correctAnswer: "c"
    },
     {
      question: "The CSS property used to make the rounded borders, or rounded corners around an element is -",
      answers: {
        a: "border-collapse",
        b: "border-radius",
        c: "border-spacing",
       
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


        
    
    
        

    