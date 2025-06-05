const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkImg = document.querySelector('[data-js="bookmark-img"]');
const AnswerButton = document.querySelector('[data-js="answer-button"]');
const answerText = document.querySelector('[data-js="answer-text"]');

// Funktion zum setzten des Bookmarks

function toggleBookmark() {
  const currentSource = bookmarkImg.getAttribute("src");
  if (currentSource === "./assets/bookmark.svg") {
    bookmarkImg.setAttribute("src", "./assets/bookmark-check.svg");
  } else {
    bookmarkImg.setAttribute("src", "./assets/bookmark.svg");
  }
}
bookmarkButton.addEventListener("click", toggleBookmark);

// Funktion, die die Antwort anzeigt, wenn man auf den Button drückt

function showAnswer() {
  if (answerText.classList.contains("question-card__answer")) {
    answerText.classList.remove("question-card__answer");
    AnswerButton.textContent = "show answer";
  } else {
    answerText.classList.add("question-card__answer");
    AnswerButton.textContent = "hide answer";
  }
}
AnswerButton.addEventListener("click", showAnswer);
