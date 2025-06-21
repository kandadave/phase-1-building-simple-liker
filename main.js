// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll('.like');
const modal = document.getElementById('modal')
const modalMessage = document.getElementById('modal-message')

likeButtons.forEach(button => {
  const heartGlyph = button.querySelector('.like-glyph');

  button.addEventListener('click', () => {
    if(heartGlyph.textContent === EMPTY_HEART){
      mimicServerCall()
        .then(() => {
          heartGlyph.textContent = FULL_HEART;
          heartGlyph.classList.add('activated-heart')
        })
        .catch ((error) => {
          modal.classList.remove('hidden');
          modalMessage.textContent = error;
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 3000)
        })
    }else {
      //User clicks on a full heart
      heartGlyph.textContent = EMPTY_HEART;
      heartGlyph.classList.remove('activated-heart')
    }
  })
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
