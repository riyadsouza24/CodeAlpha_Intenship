let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [
    {
        question: "What is HTML?",
        answer: "HyperText Markup Language"
    },
    {
        question: "What is CSS?",
        answer: "Cascading Style Sheets"
    },
    {
        question: "What is JavaScript?",
        answer: "A programming language used to make websites interactive"
    },
    {
        question: "What is VS Code?",
        answer: "A source-code editor developed by Microsoft"
    }
];

let currentCard = 0;

function displayCard() {
    document.getElementById("question").textContent =
        flashcards[currentCard].question;

    document.getElementById("answer").textContent =
        flashcards[currentCard].answer;

    document.getElementById("answer").classList.add("hidden");

    document.getElementById("counter").textContent =
        `Card ${currentCard + 1} of ${flashcards.length}`;
}

function showAnswer() {
    document.getElementById("answer").classList.remove("hidden");
}

function nextCard() {
    currentCard++;

    if (currentCard >= flashcards.length) {
        currentCard = 0;
    }

    displayCard();
}

function previousCard() {
    currentCard--;

    if (currentCard < 0) {
        currentCard = flashcards.length - 1;
    }

    displayCard();
}

function addCard() {
    let question = document.getElementById("newQuestion").value;
    let answer = document.getElementById("newAnswer").value;

    if (question === "" || answer === "") {
        alert("Please enter both question and answer.");
        return;
    }

    flashcards.push({
        question: question,
        answer: answer
    });

    localStorage.setItem("flashcards", JSON.stringify(flashcards));

    document.getElementById("newQuestion").value = "";
    document.getElementById("newAnswer").value = "";

    currentCard = flashcards.length - 1;

    displayCard();

    alert("Flashcard added successfully!");
}

function editCard() {
    let question = document.getElementById("newQuestion").value;
    let answer = document.getElementById("newAnswer").value;

    if (question === "" || answer === "") {
        alert("Enter the new question and answer.");
        return;
    }

    flashcards[currentCard].question = question;
    flashcards[currentCard].answer = answer;

    localStorage.setItem("flashcards", JSON.stringify(flashcards));

    document.getElementById("newQuestion").value = "";
    document.getElementById("newAnswer").value = "";

    displayCard();

    alert("Flashcard updated successfully!");
}

function deleteCard() {
    if (flashcards.length === 1) {
        alert("You must have at least one flashcard.");
        return;
    }

    flashcards.splice(currentCard, 1);

    if (currentCard >= flashcards.length) {
        currentCard = flashcards.length - 1;
    }

    localStorage.setItem("flashcards", JSON.stringify(flashcards));

    displayCard();

    alert("Flashcard deleted successfully!");
}

displayCard();