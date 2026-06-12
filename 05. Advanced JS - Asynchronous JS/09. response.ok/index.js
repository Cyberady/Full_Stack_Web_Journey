try {
    // the code we want to try to execute
    const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
    if (!response.ok) {
        throw new Error(`There was an error with API`)
    }
    const data = await response.json()
    console.log(data)
} catch (err) {
    // the code to execute on an error 
    console.log(err)
} finally {
    // the code to execute at the end of the operation
    console.log("The operation is complete.")
}