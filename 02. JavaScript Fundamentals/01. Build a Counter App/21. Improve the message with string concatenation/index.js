let welcomeEl = document.getElementById("welcome-el")

let name = "Aditya Bharat Babar"
let greeting = "Welcome Back "

welcomeEl.innerText = greeting + name

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1
 
// welcomeEl.innerText = welcomeEl.innerText + "👋"

// The above welcomeEl.innerText = welcomeEl.innerText + "👋"
// can be written as 

welcomeEl.innerText += "👋"