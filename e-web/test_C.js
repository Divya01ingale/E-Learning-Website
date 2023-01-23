

(function() {
  const myQuestions = [
    {
      question: "Which of the following statement will create list?",
      answers: {
        a: "Both",
        b: "L1=[1,2,3,4]",
        c: "L1=list( )"
       },
      correctAnswer: "a" 
    
    },
    {
      question: "Do we have any inbuilt function for shuffling the values of List. :",
      answers: {
        a: "False",
        b: "True",
      },
      correctAnswer: "b"
    },
    {
      question: "Which command is used to add an element in List named L1 ",
      answers: {
        a: "L1.new(4)",
        b: "L1.add(4)",
        c: "L1.append(4)",
       
      },
      correctAnswer: "c"
    },
    {
      question: "del statement can delete the following from the List?",
      answers: {
        a: "Single Element",
        b: "Multiple Elements",
        c: "All of the above",
       
      },
      correctAnswer: "c"
    },
     {
      question: "Which of the following is a Python tuple?",
      answers: {
        a: "[1, 2, 3]",
        b: "(1, 2, 3)",
        c: "{1, 2, 3}",
       
      },
      correctAnswer: "b"
    },
     {
      question: "Tuples are __________",
      answers: {
        a: "Immutable",
        b: "Mutable",
        c: "Mutable to some extent",
       
      },
      correctAnswer: "a"
    },
     {
      question: "In tuples values are enclosed in ______",
      answers: {
        a: "Curly brackets",
        b: "Parenthesis",
        c: "Square brackets",
       
      },
      correctAnswer: "b"
    },
     {
      question: "Which of these about a set is not true?",
      answers: {
        a: "Allows duplicate values",
        b: "Data type with unordered values",
        c: " Immutable data type",
       
      },
      correctAnswer: "c"
    },
     {
      question: "Which of the following formatting options can be used in order to add ‘n’ blank spaces after a given string ‘S’?",
      answers: {
        a: " print(“-ns”%S)",
        b: "print(“%ns”%S)",
        c: "print(“%-ns”%S)",
       
      },
      correctAnswer: "c"
    },
     {
      question: "Who developed Python Programming Language?",
      answers: {
        a: "Rasmus Lerdorf",
        b: "Guido van Rossum",
        c: "Niene Stom",
       
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


        
        
   
    
    
    
    
        

    