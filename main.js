// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const error = document.getElementById("modal")

const liker = document.querySelectorAll(".like-glyph")

for (const love of liker) {
  love.addEventListener('click', () => {
    mimicServerCall("http://mimicServer.example.com")
    .then(()=>{
      if ( love.innerHTML === EMPTY_HEART) {
        love.innerHTML = FULL_HEART;
        love.className = "activated-heart";
      } else {
      love.innerHTML = EMPTY_HEART;
    }
    })
    .catch((e) => {
      error.className = ""
      error.innerHTML = e
      setTimeout(() =>  error.className = "hidden", 3000);
    })
  })
}



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
