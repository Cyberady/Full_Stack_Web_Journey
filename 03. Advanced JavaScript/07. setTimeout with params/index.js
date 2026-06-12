// function displayTrafficLight(light) {
//       console.log(light)
// }

// setTimeout(displayTrafficLight, 3000, 'Green')

// displayTrafficLight('Red')


function logAnswer(answer, points) {
   console.log(`The answer is ${answer} of course! If you got that right, give yourself ${points} points.`)
}

console.log('What is the capital of Peru?') 

/*Challenge:
   1. After a 3 second delay, call the 'logAnswer' function.
   2. Make sure 'logAnswer' has sll the info it needs.
      the answer is 'Lima' and it's 10 points for getting it right.
*/ 

const questionTimer = setTimeout(logAnswer, 3000, 'Lima', 10)

document.getElementById('stop').addEventListener('click', function() {
   clearTimeout(questionTimer)
   console.log('You stopped the timer!')
})