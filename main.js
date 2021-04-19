// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const body = document.body
const likeGlyph = document.querySelector(".like-glyph")

body.addEventListener('click', function(e) {
      const errorModal = document.querySelector("#modal")
      if (e.target.innerText == EMPTY_HEART || e.target.innerText == FULL_HEART) {
        mimicServerCall().then((response) => {
            if (e.target.innerText == EMPTY_HEART) {
                e.target.innerText = FULL_HEART
            } else if (e.target.innerText == FULL_HEART) {
                e.target.innerText = EMPTY_HEART
            }
            e.target.classList.toggle("activated-heart")
          }).catch((error) => {
            errorModal.querySelector("#modal-message").innerText = error
            errorModal.classList.toggle("hidden")
            setTimeout(() => errorModal.classList.toggle("hidden"), 5000)
          });   
      }
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
