// try {
//   const response = await fetch(
//     "https://apis.scrimba.com/jsonplaceholder/posts",
//     { method: "POST" },
//   )
//   if (!response.ok) {
//     throw new Error(`There was a problem with API`)
//   }
//   const data = await response.json()
//   console.log(data)
// } catch (err) {
//   console.error(err)
// }

/*
Challenge:
1. Using the code snippet in the slide, add a body 
   property to the object we are passing with the
   fetch request. I want you to create a new post
   with the title "Holiday Nightmares" and the body 
   "When I was kidnapped in Scotland..."

   In console, you should see and object with an
   ID, for example: {id: 101}
*/

// the code snippet from the slide:
/*
fetch("https://jsonplaceholder.typicode.com/posts", {
method: "POST",
body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
}),
})
*/

// try {
//   const response = await fetch(
//     "https://apis.scrimba.com/jsonplaceholder/posts",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         title: "Holiday Nightmares",
//         body: "When I was kidnapped in Scotland...",
//         userId: 100
//       })
//     }
//   )
//   if (!response.ok) {
//     throw new Error(`There was a problem with API`)
//   }
//   const data = await response.json()
//   console.log(data)
// } catch (err) {
//   console.error(err)
// }

/*
Challenge:
1. Add a header object, setting the "Content-type" to "application/json".
*/

try {
  const response = await fetch(
    "https://apis.scrimba.com/jsonplaceholder/posts",
    {
      method: "POST",
      body: JSON.stringify({
        title: "Holiday Nightmares",
        body: "When I was kidnapped in Scotland...",
        userId: 100,
      }),
      headers: {
        "Content-type": "application/json",
      },
    },
  );
  if (!response.ok) {
    throw new Error(`There was a problem with API`)
  }
  const data = await response.json()
  console.log(data)
} catch (err) {
  console.error(err)
}
