const favourtieFilm = {
  title: "Top Gun",
  year: 1986,
  genre: "action",
  star: "Tom Cruise",
  director: "Tony Scott",
}

const title = favourtieFilm.title
const year = favourtieFilm.year
const genre = favourtieFilm.genre
const star = favourtieFilm.star
const director = favourtieFilm.director 

// My favourite film is Top Gun starring Tom Cruise. It is an action film directed by Tony Scott and released in 1986.
console.log(`My favourite film is ${title} starring ${star}. It is an ${genre} film directed by ${director} and released in ${year}.`)

// The above code is a bit repetitive. We can use object destructuring to make it more concise and easier to read.

// Object structuring 

const { title, year, genre, star, director } = favourtieFilm

console.log(`My favourite film is ${title} starring ${star}. It is an ${genre} film directed by ${director} and released in ${year}.`)