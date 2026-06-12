/*
Basr URL: https://apis.scrimba.com/jsonplaceholder
Endpoints: /posts
Challenge:
1. Make a fetch request to get all of the available posts.
Remember to handle all errors!
*/

// fetch('https://apis.scrimba.com/jsonplaceholder/posts')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`)
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error))

try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts', {method: 'POST'})
    if (!response.ok) {
        throw new Error(`There was a problem with API`)
    }
    const data = await response.json()  
    console.log(data)
} catch(err) {
    console.error(err)
}