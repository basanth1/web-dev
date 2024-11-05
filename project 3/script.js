const quiz = [
    {
      question: "Who is known as the 'King of Bollywood'?",
      options: ["Shah Rukh Khan", "Amitabh Bachchan", "Salman Khan", "Aamir Khan"],
      answer: "Shah Rukh Khan"
    },
    {
      question: "Which actor made his debut with the film 'Biwi Ho To Aisi' but rose to fame with the film 'Maine Pyar Kiya'?",
      options: ["Salman Khan", "Shah Rukh Khan", "Aamir Khan", "Sanjay Dutt"],
      answer: "Salman Khan"
    },
    {
      question: "Who played the role of 'Mogambo' in the movie 'Mr. India'?",
      options: ["Amrish Puri", "Om Puri", "Paresh Rawal", "Naseeruddin Shah"],
      answer: "Amrish Puri"
    },
    {
      question: "Which actor has won the maximum number of Filmfare Awards for Best Actor?",
      options: ["Amitabh Bachchan", "Shah Rukh Khan", "Aamir Khan", "Dilip Kumar"],
      answer: "Dilip Kumar"
    },
    {
      question: "Who directed the film 'Lagaan'?",
      options: ["Sanjay Leela Bhansali", "Karan Johar", "Ashutosh Gowariker", "Farhan Akhtar"],
      answer: "Ashutosh Gowariker"
    },
    {
      question: "Which film won the National Film Award for Best Hindi Film in 2019?",
      options: ["Andhadhun", "Badhaai Ho", "Uri: The Surgical Strike", "Gully Boy"],
      answer: "Gully Boy"
    },
    {
      question: "Which actor played the role of 'Kabir Khan' in the movie 'Chak De India'?",
      options: ["Shah Rukh Khan", "Aamir Khan", "Salman Khan", "Ranbir Kapoor"],
      answer: "Shah Rukh Khan"
    },
    {
      question: "Who sang the song 'Chaiyya Chaiyya' from the movie 'Dil Se'?",
      options: ["A.R. Rahman", "Sukhwinder Singh", "Sonu Nigam", "Udit Narayan"],
      answer: "Sukhwinder Singh"
    },
    {
      question: "Which was the first Indian film to be nominated for an Academy Award for Best Foreign Language Film?",
      options: ["Mother India", "Salaam Bombay!", "Lagaan", "Taare Zameen Par"],
      answer: "Mother India"
    },
    {
      question: "Who played the role of 'Munna Bhai' in the film 'Munna Bhai M.B.B.S.'?",
      options: ["Sanjay Dutt", "Salman Khan", "Aamir Khan", "Shah Rukh Khan"],
      answer: "Sanjay Dutt"
    }
  ];
 const  questionElement = document.querySelector("#question");
 const answerButton = document.querySelector(".answer-buttons");
 const nextButton = document.querySelector("#next-btn");
 let count = 0;

function startQuiz() {
  if (count < quiz.length) {
    showQuestions(count);
  }
}

nextButton.addEventListener("click", () => {
  count++;
  startQuiz();
});

function showQuestions(count) {
  if (count < quiz.length) {
    let currentQues = quiz[count];
    questionElement.innerHTML = currentQues.question;

    while (answerButton.firstChild) {
      answerButton.removeChild(answerButton.firstChild);
    }

    for (let i = 0; i < currentQues.options.length; i++) {
      const btn = document.createElement("button");
      btn.innerHTML = currentQues.options[i];
      btn.classList.add("btn");
      answerButton.appendChild(btn);
      btn.addEventListener("click", () => {
        check(btn, currentQues);
      });
    }
  }
}

function check(btn, currentQues) {
  
  if (btn.innerHTML === currentQues.answer) {
    btn.style.backgroundColor = 'green';
   
  } else {
   
    btn.style.backgroundColor = 'red';
    const correctAnswer = document.createElement("p");
    correctAnswer.innerHTML = "Correct Answer:"+" "+currentQues.answer;
    console.log(correctAnswer);
    answerButton.appendChild(correctAnswer);
  }
}
startQuiz();
