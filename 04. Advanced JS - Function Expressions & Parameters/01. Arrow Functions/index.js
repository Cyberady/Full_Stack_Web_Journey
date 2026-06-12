// const getSpendAlert =function(amount) {
//     return `Warning! You just spent $${amount}!`
// }

const getSpendAlert = (name, amount) => {
    return `Warning! Hey ${name}! You just spent $${amount}!`
}

console.log(getSpendAlert('Aditya', 150))

// When to use brackets
// 1 parameter - no brackets
// 0 or 2 or more parameters - brackets

// When to use {} and return
// 1 expression - no {} and no return
// 0 or more than 1 expression - use {} and return