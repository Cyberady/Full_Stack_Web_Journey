let message = [
    "Hey, how's it going?",
    "I'm great, thankyou! How about you?",
    "All good. Been working on my portfolio lately",
    "Same here!",
    "Great to hear",
    "Meow"

]
// DRY - Don't repeat yourself
// console.log(message[0])
// console.log(message[1])
// console.log(message[2])
// console.log(message[3])

for (let i = 0; i < message.length; i += 1) {
    console.log(message[i])
}