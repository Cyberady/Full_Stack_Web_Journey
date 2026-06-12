// fetch("https://apis.scrimba.com/bored/api/activity")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => {
//         console.log(err)
//         // updaate the DOM to warn the user
//         // access an alternative API
//     })
//     .finally(() => console.log("The operation is complete"))

/*
Challenge:
   1. Convert the above code to use async/await, handle errors with "try/catch" blocks , and add a "finally" block.
*/


try {
    // the code we want to try to execute
    const response = await fetch("https://apis.scrimba.com/bored/api/activity")
    const data = await response.json()
    console.log(data)
} catch (err) {
    // the code to execute on an error 
    console.log(err)
    throw new Error("Something went wrong")
} finally {
    // the code to execute at the end of the operation
    console.log("The operation is complete")
}