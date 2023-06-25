// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";
const likeBtn = document.querySelectorAll(".like-glyph");
for (let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener("click", () => {
    mimicServerCall()
      .then((data) => {
        likeBtn[i].classList.toggle("activated-heart");
      })
      .catch((err) => {
        console.log(err);
        document.querySelector("div").classList.remove("hidden");
        document.querySelector("p").textContent = err;
        setTimeout(() => {
          document.querySelector("div").classList.add("hidden");
        }, 3000);
      });
  });
}

// Your JavaScript code goes here!

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
