const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkImg = document.querySelector('[data-js="bookmark-img"]')

function removeBookmark(){
    bookmarkImg.removeAttribute("src");
}

function setBookmark() {
    bookmarkImg.setAttribute("src", "./assets/bookmark-check.svg");
}

bookmarkButton.addEventListener ("click", () => {
    removeBookmark();
    setBookmark();
   });

  