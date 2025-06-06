const form = document.querySelector('[data-js="question-card"]');
const cardContainer = document.querySelector("[data-js='card-container']");

// Add a new quizcard with form, create quizcard with submit button

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data["your-question"]);
  addNewQuestionCard(data);
});

function addNewQuestionCard(data) {
  const newQuestionCard = document.createElement("article");
  newQuestionCard.classList.add("question-card");

  const newQuestion = document.createElement("p");
  newQuestion.classList.add("question-card__question");
  newQuestion.textContent = data["your-question"];
  newQuestionCard.append(newQuestion);

  const theAnswer = document.createElement("p");
  theAnswer.classList.add("question-card__answer");
  theAnswer.textContent = data["the-answer"];
  newQuestionCard.append(theAnswer);

  const newButtonContainer = document.createElement("div");
  newButtonContainer.classList.add("button-container");
  newQuestionCard.append(newButtonContainer);

  const newAnswerButton = document.createElement("button");
  newAnswerButton.classList.add("question-card__answer-button");
  newQuestionCard.append(newAnswerButton);

  const newBookmarkButton = document.createElement("button");
  newBookmarkButton.classList.add("question-card__bookmark-button");
  newQuestionCard.append(newBookmarkButton);

  cardContainer.append(newQuestionCard);
}

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   const data = Object.fromEntries(formData);

//   const newQuestionCard = document.createElement("article");
//   newQuestionCard.classList.add("question-card");

//   const newQuestion = document.createElement("p");
//   newQuestion.textContent = data["your-question"];

//   const theAnswer = document.createElement("p");
//   theAnswer.textContent = data["the-answer"];

//   newQuestionCard.append(newQuestion, theAnswer);
//   cardContainer.append(newQuestionCard);
