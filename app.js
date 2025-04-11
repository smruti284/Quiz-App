const startButton = document.getElementById("start-quiz");
        const quizContainer = document.querySelector(".quiz");
        const questionElement = document.getElementById("question");
        const answerButtons = document.getElementById("answer-buttons");
        const nextButton = document.getElementById("next-btn");
        const prevButton = document.getElementById("prev-btn");
        const submitButton = document.getElementById("submit-btn");
        const scoreDisplay = document.getElementById("score");

        let currentQuestionIndex = 0;
        let score = 0;

        const questions = [
            {
                question: "Which of the following colors contain equal amounts of RGB?",
                answers: [
                    { text: "White", correct: false },
                    { text: "Black", correct: false },
                    { text: "Grey", correct: false },
                    { text: "All of the above", correct: true }
                ]
            },
            {
                question: "What is the correct syntax to write an HTML comment?",
                answers: [
                    { text: "<!--Comment-->", correct: true },
                    { text: "//Comment", correct: false },
                    { text: "#Comment", correct: false },
                    { text: "/*Comment*/", correct: false }
                ]
            },
            { 
            question: "What does CSS stand for?",
             answers: [ 
                 { text: "Cascading Style Sheets", correct: true }, 
                 { text: "Computer Style Sheets", correct: false }, 
                 { text: "Creative Style System", correct: false }, 
                 { text: "Colorful Style Sheets", correct: false } 
                ] 
            },
            { 
                question: "Which HTML tag is used to define an unordered list?", 
                answers: [ 
                    { text: "<ul>", correct: true }, 
                    { text: "<ol>", correct: false },
                    { text: "<li>", correct: false }, 
                    { text: "<list>", correct: false } 
                    ]
                 },
            { 
                question: "Which JavaScript function is used to print something in the console?",
                 answers: [ 
                    { text: "console.log()", correct: true }, 
                    { text: "print()", correct: false },
                    { text: "document.write()", correct: false }, 
                    { text: "log.console()", correct: false } 
                ]
             },
             {
                question: "What is the correct HTML element for inserting a line break?",
                 answers: [
                   { text: "<br>", correct: true },
                   { text: "<lb>", correct: false },
                   { text: "<break>", correct: false },
                   { text: "<newline>", correct: false }
                ]
             },
             {
                question: "Which attribute is used to provide an alternative text for an image in HTML?",
                 answers: [
                   { text: "alt", correct: true },
                   { text: "title", correct: false },
                   { text: "src", correct: false },
                   { text: "href", correct: false }
                ]
              },
              {
                question: "Which property is used to change text color in CSS?",
                answers: [
                   { text: "text-color", correct: false },
                   { text: "font-color", correct: false },
                   { text: "color", correct: true },
                   { text: "background-color", correct: false }
                ]
              },
              {
                question: "Which CSS property controls the size of text?",
                 answers: [
                   { text: "text-style", correct: false },
                   { text: "font-style", correct: false },
                   { text: "font-size", correct: true },
                   { text: "text-size", correct: false }
                ]
               },
               {
                 question: "How do you make a list that lists items with numbers in HTML?",
                 answers: [
                   { text: "<ul>", correct: false },
                   { text: "<ol>", correct: true },
                   { text: "<li>", correct: false },
                   { text: "<list>", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used for the largest heading?",
        answers: [
            { text: "<h1>", correct: true },
            { text: "<h6>", correct: false },
            { text: "<head>", correct: false },
            { text: "<heading>", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to make text bold?",
        answers: [
            { text: "bold", correct: false },
            { text: "text-bold", correct: false },
            { text: "font-weight", correct: true },
            { text: "font-bold", correct: false }
        ]
    },
    {
        question: "Which tag is used to link an external CSS file?",
        answers: [
            { text: "<style>", correct: false },
            { text: "<css>", correct: false },
            { text: "<link>", correct: true },
            { text: "<stylesheet>", correct: false }
        ]
    },
    {
        question: "Which keyword is used to define a function in JavaScript?",
        answers: [
            { text: "function", correct: true },
            { text: "def", correct: false },
            { text: "void", correct: false },
            { text: "define", correct: false }
        ]
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        answers: [
            { text: "//", correct: true },
            { text: "/*", correct: false },
            { text: "#", correct: false },
            { text: "--", correct: false }
        ]
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        answers: [
            { text: "pop()", correct: true },
            { text: "remove()", correct: false },
            { text: "shift()", correct: false },
            { text: "delete()", correct: false }
        ]
    },
    {
        question: "Which JavaScript method is used to find the length of a string?",
        answers: [
            { text: "length()", correct: false },
            { text: "size()", correct: false },
            { text: "count()", correct: false },
            { text: ".length", correct: true }
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            { text: "onchange", correct: false },
            { text: "onmouseover", correct: false },
            { text: "onclick", correct: true },
            { text: "onhover", correct: false }
        ]
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        answers: [
            { text: "==", correct: false },
            { text: "===", correct: true },
            { text: "=", correct: false },
            { text: "!=", correct: false }
        ]
    },
    {
        question: "How do you declare a variable in JavaScript?",
        answers: [
            { text: "variable x;", correct: false },
            { text: "var x;", correct: true },
            { text: "x = var;", correct: false },
            { text: "declare x;", correct: false }
        ]
    },
    {
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        answers: [
            { text: "let", correct: false },
            { text: "var", correct: false },
            { text: "const", correct: true },
            { text: "static", correct: false }
        ]
    },
    {
        question: "How do you write a conditional statement in JavaScript?",
        answers: [
            { text: "if (x == 5)", correct: true },
            { text: "if x = 5 then", correct: false },
            { text: "if x == 5", correct: false },
            { text: "if x equals 5", correct: false }
        ]
    },
    {
        question: "Which function is used to parse a string into an integer in JavaScript?",
        answers: [
            { text: "parseInt()", correct: true },
            { text: "parseFloat()", correct: false },
            { text: "toInteger()", correct: false },
            { text: "int()", correct: false }
        ]
    },
    {
        question: "Which method is used to add an element to the end of an array?",
        answers: [
            { text: "push()", correct: true },
            { text: "add()", correct: false },
            { text: "append()", correct: false },
            { text: "insert()", correct: false }
        ]
    },
    {
        question: "How do you declare an arrow function in JavaScript?",
        answers: [
            { text: "const myFunc = () => {}", correct: true },
            { text: "function myFunc() {}", correct: false },
            { text: "arrow myFunc() {}", correct: false },
            { text: "() => function {}", correct: false }
        ]
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        answers: [
            { text: "JSON.parse()", correct: true },
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.object()", correct: false },
            { text: "parseJSON()", correct: false }
        ]
    },
    {
        question: "Which of the following is a correct way to declare an array in JavaScript?",
        answers: [
            { text: "let arr = [];", correct: true },
            { text: "let arr = {}", correct: false },
            { text: "let arr = array();", correct: false },
            { text: "let arr = new list();", correct: false }
        ]
    },
    {
        question: "Which JavaScript loop is guaranteed to execute at least once?",
        answers: [
            { text: "for loop", correct: false },
            { text: "while loop", correct: false },
            { text: "do...while loop", correct: true },
            { text: "forEach loop", correct: false }
        ]
    },
    {
        question: "How do you check the type of a variable in JavaScript?",
        answers: [
            { text: "typeof variable", correct: true },
            { text: "type variable", correct: false },
            { text: "checkType(variable)", correct: false },
            { text: "var.typeof", correct: false }
        ]
    },
    {
        question: "Which function is used to execute a function after a specified time delay?",
        answers: [
            { text: "setTimeout()", correct: true },
            { text: "setInterval()", correct: false },
            { text: "delay()", correct: false },
            { text: "wait()", correct: false }
        ]
    }

        ];

        startButton.addEventListener("click", () => {
            document.querySelector(".App").style.display = "none";
            quizContainer.style.display = "flex";
            startQuiz();
        });

        function startQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            scoreDisplay.textContent = score;
            nextButton.style.display = "none";
            showQuestion();
        }
        let timeLeft = 15;
        let timerId;
        const timeDisplay = document.getElementById("time-left");

function startTimer() {
    timeLeft = 15;
    timeDisplay.textContent = timeLeft;

    timerId = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            disableAnswers();
            nextButton.style.display = "block";
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerId);
}

function disableAnswers() {
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct-answer");
        }
    });
}


const questionNumberElement = document.getElementById("question-number");

function showQuestion() {
    resetState();
    stopTimer();
    startTimer();

    let currentQuestion = questions[currentQuestionIndex];
    
    // Set question number (add +1 to convert from 0-based index)
    questionNumberElement.innerText = currentQuestionIndex + 1;
    
    questionElement.innerText = currentQuestion.question;

    answerButtons.innerHTML = '';

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.setAttribute("id", `btn-${index}`);
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
        prevButton.style.display = currentQuestionIndex > 0 ? "block" : "none";
    });
}


        function resetState() {
            nextButton.style.display = "none";
            prevButton.style.display = "none";

        }

        function selectAnswer(e) {
    stopTimer();

    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {
        selectedButton.classList.add("correct-answer");
        score += 10;
        scoreDisplay.textContent = score;
    } else {
        selectedButton.classList.add("wrong-answer");
    }

    disableAnswers();
    nextButton.style.display = "block";
    prevButton.style.display = "block";

}


nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length - 1) {
        showQuestion();
    } else if (currentQuestionIndex === questions.length - 1) {
        showQuestion();
        nextButton.style.display = "none";
        submitButton.style.display = "block";
    }
});

        prevButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});
submitButton.addEventListener("click", () => {
    alert("Quiz submitted! Your final score: " + score);
    // Optional: redirect or show results page
    document.location.reload(); // or window.location.href = 'results.html';
});
